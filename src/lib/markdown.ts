import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export interface Post {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  author: string;
  eyecatch?: string;
  body: string;
  contentHtml: string;
  relatedPosts?: string[];
  recommend?: boolean;
  series?: string;
}

export interface TocHeading {
  text: string;
  id: string;
  level: number;
}

// marked のカスタムレンダラー設定
// 見出しタグに id 属性を自動付与して目次リンクと紐付ける
const customRenderer = new marked.Renderer();
customRenderer.heading = function({ text, depth }) {
  const escapedText = text
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5\u3040-\u309f\u30a0-\u30ff\-]+/g, '-');
  return `<h${depth} id="${escapedText}">${text}</h${depth}>`;
};
marked.use({ renderer: customRenderer });

// 記事の一覧を取得 (日付順降順)
export function getSortedPostsData(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md(x)?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || '',
        description: matterResult.data.description || '',
        publishedAt: matterResult.data.publishedAt || '',
        updatedAt: matterResult.data.updatedAt || undefined,
        category: matterResult.data.category || '',
        tags: matterResult.data.tags || [],
        author: matterResult.data.author || 'H3 Incover',
        eyecatch: getValidatedEyecatch(matterResult.data.eyecatch, matterResult.data.category || ''),
        recommend: matterResult.data.recommend || false,
        relatedPosts: matterResult.data.relatedPosts || [],
        series: matterResult.data.series || undefined,
        body: matterResult.content,
        contentHtml: '',
      } as Post;
    });

  return allPostsData.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1;
    } else {
      return -1;
    }
  });
}

// 特定の記事をSlugで取得
export async function getPostData(slug: string): Promise<Post | null> {
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
  
  let fullPath = '';
  if (fs.existsSync(mdPath)) {
    fullPath = mdPath;
  } else if (fs.existsSync(mdxPath)) {
    fullPath = mdxPath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  // markedによるHTML変換
  // 【セキュリティ注意】
  // 現状は開発者自身が管理する信頼できるMarkdownファイルのみをレンダリングする前提（静的ブログ構成）です。
  // 将来的にユーザー入力の受け入れ、外部の第三者によるCMS入稿、またはAI自動生成の記事をそのまま
  // レンダリングする場合は、XSS脆弱性を防ぐため、`isomorphic-dompurify` などのライブラリを使用し、
  // HTMLをサニタイズ（例：`DOMPurify.sanitize(contentHtml)`）するように拡張してください。
  const contentHtml = await marked.parse(matterResult.content);

  return {
    slug,
    title: matterResult.data.title || '',
    description: matterResult.data.description || '',
    publishedAt: matterResult.data.publishedAt || '',
    updatedAt: matterResult.data.updatedAt || undefined,
    category: matterResult.data.category || '',
    tags: matterResult.data.tags || [],
    author: matterResult.data.author || 'H3 Incover',
    eyecatch: getValidatedEyecatch(matterResult.data.eyecatch, matterResult.data.category || ''),
    recommend: matterResult.data.recommend || false,
    relatedPosts: matterResult.data.relatedPosts || [],
    series: matterResult.data.series || undefined,
    body: matterResult.content,
    contentHtml,
  } as Post;
}

// 記事本文から目次用の見出しを抽出する
export function extractHeadings(markdownText: string): TocHeading[] {
  const lines = markdownText.split('\n');
  const headings: TocHeading[] = [];
  let inCodeBlock = false;

  for (const line of lines) {
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }

    if (inCodeBlock) continue;

    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\u4e00-\u9fa5\u3040-\u309f\u30a0-\u30ff\-]+/g, '-');
      headings.push({ text, id, level });
    }
  }

  return headings;
}

// 関連記事の取得
export function getRelatedPosts(currentPost: Post, allPosts: Post[], limit = 3): Post[] {
  if (currentPost.relatedPosts && currentPost.relatedPosts.length > 0) {
    const specified = allPosts.filter((post) => currentPost.relatedPosts?.includes(post.slug));
    if (specified.length > 0) {
      return specified.slice(0, limit);
    }
  }

  return allPosts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      let score = 0;
      if (post.category === currentPost.category) {
        score += 5;
      }
      const commonTags = post.tags.filter((t) => currentPost.tags.includes(t));
      score += commonTags.length * 2;

      return { post, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

// 全カテゴリのユニークリストと件数取得
export function getAllCategoriesWithCounts(): { name: string; count: number }[] {
  const posts = getSortedPostsData();
  const counts: Record<string, number> = {};

  posts.forEach((post) => {
    if (post.category) {
      counts[post.category] = (counts[post.category] || 0) + 1;
    }
  });

  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}

// 全タグのユニークリストと件数取得
export function getAllTagsWithCounts(): { name: string; count: number }[] {
  const posts = getSortedPostsData();
  const counts: Record<string, number> = {};

  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    }
  });

  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}

// カテゴリに対応する画像パスを取得するヘルパー
export function getCategoryImageUrl(category: string): string {
  const mapping: Record<string, string> = {
    'AI': '/images/categories/ai.png',
    '介護': '/images/categories/care.png',
    'Web': '/images/categories/web.png',
    '営業': '/images/categories/sales.png',
    '情報設計': '/images/categories/information_design.png',
    'H3開発日誌': '/images/categories/development.png',
  };

  return mapping[category] || '/images/categories/other.png';
}

// 画像パスの実在確認を行い、存在しない場合はカテゴリ画像パスを返すヘルパー
export function getValidatedEyecatch(eyecatchPath: string | undefined, category: string): string {
  if (eyecatchPath) {
    const publicFilePath = path.join(process.cwd(), 'public', eyecatchPath);
    if (fs.existsSync(publicFilePath)) {
      return eyecatchPath;
    }
  }
  return getCategoryImageUrl(category);
}
