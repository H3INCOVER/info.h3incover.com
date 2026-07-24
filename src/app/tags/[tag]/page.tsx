import Link from 'next/link';
import { getSortedPostsData, getAllTagsWithCounts } from '@/lib/markdown';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageWithFallback from '@/components/ImageWithFallback';
import { Calendar } from 'lucide-react';
import { Metadata } from 'next';

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

// 静的ルート生成
export async function generateStaticParams() {
  const tags = getAllTagsWithCounts();
  return tags.map((t) => ({
    tag: t.name,
  }));
}

// 動的メタデータ
export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  return {
    title: `タグ: #${decodedTag}`,
    description: `H3 Incover Info の「#${decodedTag}」タグに関連する記事一覧です。`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const allPosts = getSortedPostsData();
  const posts = allPosts.filter((post) => post.tags.includes(decodedTag));

  return (
    <div className="max-w-[1120px] mx-auto px-5 py-8 md:py-16">
      <Breadcrumbs
        items={[
          { label: 'タグ一覧', href: '/tags' },
          { label: `#${decodedTag}` },
        ]}
      />

      <div className="mt-8 mb-12">
        <span className="text-xs font-black tracking-widest text-brand-red uppercase mb-2 block">
          Tag
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-brand-black tracking-tight">
          #{decodedTag} の記事一覧
        </h1>
        <p className="text-sm md:text-base text-brand-muted font-medium mt-3">
          タグ「#{decodedTag}」に関連する記事が {posts.length} 件見つかりました。
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-brand-border rounded-3xl">
          <p className="text-brand-muted font-medium">現在、このタグの記事はありません。</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="group flex flex-col justify-between">
              <div>
                {/* アイキャッチ画像 */}
                <Link
                  href={`/posts/${post.slug}`}
                  className="block relative w-full aspect-video rounded-3xl overflow-hidden mb-5 border border-brand-border bg-brand-bg-soft"
                >
                  <ImageWithFallback
                    src={post.eyecatch}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-300"
                    fallbackSrc="/images/categories/other.png"
                  />
                </Link>

                <div className="flex items-center gap-3 text-xs font-bold text-brand-muted mb-3">
                  <span className="text-brand-red">No.{String(post.articleNumber).padStart(4, '0')}</span>
                  <span>•</span>
                  <span className="text-brand-black">{post.seriesName || post.category}</span>
                  {post.publishedOrder !== undefined && (
                    <>
                      <span>•</span>
                      <span className="text-brand-black">第{post.publishedOrder}回</span>
                    </>
                  )}
                  {post.isLatest && (
                    <>
                      <span>•</span>
                      <span className="rounded-full bg-brand-red px-2 py-0.5 text-white">NEW</span>
                    </>
                  )}
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.publishedAt}
                  </span>
                </div>
                
                <Link href={`/posts/${post.slug}`}>
                  <h2 className="text-xl font-black text-brand-black leading-snug group-hover:text-brand-red transition-colors duration-200 mb-3">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-sm text-brand-muted font-medium line-clamp-2 leading-relaxed mb-4">
                  {post.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <Link
                    key={t}
                    href={`/tags/${t}`}
                    className={`text-xs font-bold transition-colors duration-200 ${
                      t === decodedTag ? 'text-brand-red font-black' : 'text-brand-muted hover:text-brand-red'
                    }`}
                  >
                    #{t}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
