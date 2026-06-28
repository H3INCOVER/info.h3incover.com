import Link from 'next/link';
import { getAllCategoriesWithCounts } from '@/lib/markdown';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Folder } from 'lucide-react';

export const metadata = {
  title: 'カテゴリ一覧',
  description: 'H3 Incover Info の記事カテゴリ一覧です。',
};

export default function CategoriesPage() {
  const categories = getAllCategoriesWithCounts();

  return (
    <div className="max-w-[1120px] mx-auto px-5 py-8 md:py-16">
      <Breadcrumbs items={[{ label: 'カテゴリ一覧' }]} />

      <div className="mt-8 mb-12">
        <span className="text-xs font-black tracking-widest text-brand-red uppercase mb-2 block">
          Categories
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-brand-black tracking-tight">
          カテゴリ一覧
        </h1>
        <p className="text-sm md:text-base text-brand-muted font-medium mt-3">
          興味のある分野をクリックすると、関連する記事の一覧が表示されます。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/categories/${category.name}`}
            className="flex items-center justify-between p-6 border border-brand-border rounded-2xl bg-white hover:border-brand-red hover:shadow-soft transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <Folder className="w-5 h-5 text-brand-red" />
              <span className="text-base font-black text-brand-black">{category.name}</span>
            </div>
            <span className="text-xs font-black bg-brand-bg text-brand-black px-2.5 py-1 rounded-full">
              {category.count} 件
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
