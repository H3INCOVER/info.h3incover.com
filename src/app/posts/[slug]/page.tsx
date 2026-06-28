import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostData, getSortedPostsData, getRelatedPosts, extractHeadings } from '@/lib/markdown';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import ShareButtons from '@/components/ShareButtons';
import ImageWithFallback from '@/components/ImageWithFallback';
import { Calendar, RefreshCw, User, Folder, Tag, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 静的ルート生成 (SSG用)
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 動的メタデータ生成
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://info.h3incover.com/posts/${slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getSortedPostsData();
  const relatedPosts = getRelatedPosts(post, allPosts);
  const headings = extractHeadings(post.body);

  // 構造化データ (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'H3 Incover',
      logo: {
        '@type': 'ImageObject',
        url: 'https://info.h3incover.com/asset/images/favicon.jpg', // 旧ファビコンへのリンク
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://info.h3incover.com/posts/${slug}`,
    },
  };

  return (
    <>
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-[1120px] mx-auto px-5 py-8 md:py-16">
        <Breadcrumbs
          items={[
            { label: '記事一覧', href: '/posts' },
            { label: post.category, href: `/categories/${post.category}` },
            { label: post.title },
          ]}
        />

        <div className="max-w-3xl mx-auto mt-8">
          {/* 記事ヘッダー */}
          <header className="mb-10 pb-8 border-b border-brand-border">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-brand-muted mb-4">
              <Link
                href={`/categories/${post.category}`}
                className="inline-flex items-center gap-1 bg-brand-bg text-brand-black px-3 py-1 rounded-full hover:bg-brand-red hover:text-white transition-all duration-200"
              >
                <Folder className="w-3 h-3" />
                {post.category}
              </Link>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.publishedAt}
              </span>
              {post.updatedAt && (
                <span className="flex items-center gap-1 text-gray-400">
                  <RefreshCw className="w-3 h-3" />
                  {post.updatedAt} 更新
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-brand-black leading-tight tracking-tight mb-6">
              {post.title}
            </h1>

            <p className="text-base text-brand-muted font-medium leading-relaxed">
              {post.description}
            </p>
          </header>

          {/* アイキャッチ画像 (個別設定がない場合はデフォルトの画像へフォールバック) */}
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-10 border border-brand-border bg-brand-bg-soft">
            <ImageWithFallback
              src={post.eyecatch}
              alt={post.title}
              className="object-cover w-full h-full"
              fallbackSrc="/images/categories/other.png"
            />
          </div>

          {/* 目次 */}
          <TableOfContents headings={headings} />

          {/* 本文 */}
          <div
            className="prose max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* タグ */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-muted hover:text-brand-red border border-brand-border rounded-full px-3 py-1.5 transition-colors duration-200"
              >
                <Tag className="w-3 h-3" />
                #{tag}
              </Link>
            ))}
          </div>

          {/* SNS共有ボタン */}
          <ShareButtons title={post.title} />

          {/* 関連記事 */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 pt-12 border-t border-brand-border">
              <h2 className="text-2xl font-black text-brand-black tracking-tight mb-8">
                関連記事 (Related)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rPost) => (
                  <div
                    key={rPost.slug}
                    className="border border-brand-border rounded-2xl p-6 flex flex-col justify-between hover:shadow-soft transition-all duration-200"
                  >
                    <div>
                      <span className="text-[10px] font-black text-brand-red block mb-2">
                        {rPost.category}
                      </span>
                      <Link href={`/posts/${rPost.slug}`}>
                        <h3 className="text-sm font-black text-brand-black leading-snug hover:text-brand-red transition-colors line-clamp-2 mb-3">
                          {rPost.title}
                        </h3>
                      </Link>
                    </div>
                    <Link
                      href={`/posts/${rPost.slug}`}
                      className="inline-flex items-center text-xs font-bold text-brand-black border-b-2 border-brand-red pb-0.5 mt-4 self-start hover:text-brand-red transition-colors"
                    >
                      読む
                      <ArrowRight className="w-3 h-3 ml-0.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
}
