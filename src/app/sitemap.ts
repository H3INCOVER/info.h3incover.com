import { MetadataRoute } from 'next';
import { getSortedPostsData, getAllCategoriesWithCounts, getAllTagsWithCounts } from '@/lib/markdown';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://info.h3incover.com';
  const currentDate = new Date().toISOString();

  // 1. 固定ページ
  const staticPaths = [
    '',
    '/posts',
    '/about',
    '/privacy',
    '/terms',
    '/operator',
    '/legal',
    '/categories',
    '/tags',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1.0 : 0.8,
  }));

  // 2. 記事詳細ページ
  const posts = getSortedPostsData();
  const postPaths = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.updatedAt || post.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // 3. カテゴリページ
  const categories = getAllCategoriesWithCounts();
  const categoryPaths = categories.map((cat) => ({
    url: `${baseUrl}/categories/${cat.name}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.4,
  }));

  // 4. タグページ
  const tags = getAllTagsWithCounts();
  const tagPaths = tags.map((tag) => ({
    url: `${baseUrl}/tags/${tag.name}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.4,
  }));

  return [...staticPaths, ...postPaths, ...categoryPaths, ...tagPaths];
}
