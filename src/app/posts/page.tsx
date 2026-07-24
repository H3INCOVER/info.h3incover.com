import Link from 'next/link';
import { getSortedPostsData } from '@/lib/markdown';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageWithFallback from '@/components/ImageWithFallback';
import { Calendar, BookOpen } from 'lucide-react';

export const metadata = {
  title: '記事一覧',
  description: 'H3 Incover Info のすべての記事一覧です。AI・介護・Web・営業・情報設計などに関する実践的な知見を公開しています。',
};

export default function PostsPage() {
  const posts = getSortedPostsData();

  return (
    <div className="max-w-[1120px] mx-auto px-5 py-8 md:py-16">
      <Breadcrumbs items={[{ label: '記事一覧' }]} />

      <div className="mt-8 mb-12">
        <span className="text-xs font-black tracking-widest text-brand-red uppercase mb-2 block">
          Archive
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-brand-black tracking-tight">
          記事一覧
        </h1>
        <p className="text-sm md:text-base text-brand-muted font-medium mt-3 leading-relaxed">
          これまでに発信したすべての情報を、新着順に掲載しています（全 {posts.length} 件）。
        </p>
      </div>

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
                <span className="text-brand-red">{post.category}</span>
                <span>•</span>
                {post.publishedOrder !== undefined && (
                  <>
                    <span className="text-brand-black">第{post.publishedOrder}回</span>
                    <span>•</span>
                  </>
                )}
                <span>No.{String(post.articleNumber).padStart(4, '0')}</span>
                <span>•</span>
                {post.isLatest && (
                  <span className="rounded-full bg-brand-red px-2 py-0.5 text-white">NEW</span>
                )}
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
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="text-xs font-bold text-brand-muted hover:text-brand-red transition-colors duration-200"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
