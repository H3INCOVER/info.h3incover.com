import Link from 'next/link';
import { seriesList } from '@/lib/series';

interface SeriesNavigationProps {
  seriesId: string;
  currentSlug: string;
}

export default function SeriesNavigation({ seriesId, currentSlug }: SeriesNavigationProps) {
  // 安全対策: seriesIdが空か、定義が存在しない場合は何も描画しない
  if (!seriesId) return null;
  const series = seriesList.find((s) => s.id === seriesId);
  if (!series) return null;

  // 安全対策: currentSlugがシリーズの投稿リストに存在しない場合は何も描画しない
  const currentIndex = series.posts.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return null;

  const prevPost = currentIndex > 0 ? series.posts[currentIndex - 1] : null;
  const nextPost = currentIndex < series.posts.length - 1 ? series.posts[currentIndex + 1] : null;
  const firstPost = series.posts[0];

  return (
    <div className="bg-brand-bg border border-brand-border rounded-3xl p-5 md:p-6 mb-10 space-y-3">
      {/* シリーズ名と現在地（コンパクトな表示） */}
      <div className="text-sm font-black text-brand-black flex items-center justify-between border-b border-brand-border/60 pb-2">
        <span>{series.name} ｜ 第 {currentIndex + 1} 回</span>
      </div>

      {/* 前後のナビゲーションと最初から読む導線 */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-bold pt-1">
        <div className="flex gap-4">
          {/* 第1回では「前の回」を表示しない */}
          {prevPost && (
            <Link
              href={`/posts/${prevPost.slug}`}
              className="text-brand-black hover:text-brand-red flex items-center gap-1 transition-colors"
            >
              <span>◀ 前の回</span>
            </Link>
          )}
          
          {/* 最終回では「次の回」を表示しない */}
          {nextPost && (
            <Link
              href={`/posts/${nextPost.slug}`}
              className="text-brand-black hover:text-brand-red flex items-center gap-1 transition-colors"
            >
              <span>次の回 ▶</span>
            </Link>
          )}
        </div>

        {/* 第1回自身に対して「最初から読む」の自己リンクを表示しない */}
        {currentIndex > 0 && (
          <Link
            href={`/posts/${firstPost.slug}`}
            className="text-brand-muted hover:text-brand-red border-b border-brand-border pb-0.5 transition-colors"
          >
            最初から読む
          </Link>
        )}
      </div>
    </div>
  );
}
