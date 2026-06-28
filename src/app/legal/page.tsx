import Breadcrumbs from '@/components/Breadcrumbs';
import OperatorDetails from '@/components/OperatorDetails';

export const metadata = {
  title: '特定商取引法に基づく表記',
  description: 'H3 Incover の特定商取引法に基づく表記です。取引条件等の詳細を掲載しています。',
};

export default function LegalPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-5 py-8 md:py-16">
      <Breadcrumbs items={[{ label: '特定商取引法に基づく表記' }]} />

      <div className="max-w-3xl mx-auto mt-8">
        <header className="mb-10 pb-8 border-b border-brand-border">
          <span className="text-xs font-black tracking-widest text-brand-red uppercase mb-2 block">
            Legal Notation
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-brand-black tracking-tight leading-tight">
            特定商取引法に基づく表記
          </h1>
          <p className="text-sm text-brand-muted font-medium mt-3">
            H3 Incoverの提供サービスに関する、特定商取引法に基づく表示項目の一覧です。
          </p>
        </header>

        <OperatorDetails />
      </div>
    </div>
  );
}
