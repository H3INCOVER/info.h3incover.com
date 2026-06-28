import Link from 'next/link';
import { getAllTagsWithCounts } from '@/lib/markdown';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Tag } from 'lucide-react';

export const metadata = {
  title: 'タグ一覧',
  description: 'H3 Incover Info の記事タグ一覧です。',
};

export default function TagsPage() {
  const tags = getAllTagsWithCounts();

  return (
    <div className="max-w-[1120px] mx-auto px-5 py-8 md:py-16">
      <Breadcrumbs items={[{ label: 'タグ一覧' }]} />

      <div className="mt-8 mb-12">
        <span className="text-xs font-black tracking-widest text-brand-red uppercase mb-2 block">
          Tags
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-brand-black tracking-tight">
          タグ一覧
        </h1>
        <p className="text-sm md:text-base text-brand-muted font-medium mt-3">
          タグをクリックすると、同じタグを持つ記事一覧が表示されます。
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        {tags.map((tag) => (
          <Link
            key={tag.name}
            href={`/tags/${tag.name}`}
            className="inline-flex items-center gap-2 px-5 py-3 border border-brand-border rounded-full bg-white hover:border-brand-red hover:shadow-soft transition-all duration-200"
          >
            <Tag className="w-4 h-4 text-brand-muted" />
            <span className="text-sm font-black text-brand-black">#{tag.name}</span>
            <span className="text-xs font-bold text-brand-muted bg-brand-bg px-2 py-0.5 rounded-full ml-1">
              {tag.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
