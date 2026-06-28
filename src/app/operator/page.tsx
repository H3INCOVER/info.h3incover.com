import Breadcrumbs from '@/components/Breadcrumbs';
import OperatorDetails from '@/components/OperatorDetails';

export const metadata = {
  title: '運営者情報',
  description: 'H3 Incover の運営者情報および特定商取引法に基づく表記を掲載しています。',
};

export default function OperatorPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-5 py-8 md:py-16">
      <Breadcrumbs items={[{ label: '運営者情報' }]} />

      <div className="max-w-3xl mx-auto mt-8">
        <header className="mb-10 pb-8 border-b border-brand-border">
          <span className="text-xs font-black tracking-widest text-brand-red uppercase mb-2 block">
            Operator & Legal Info
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-brand-black tracking-tight leading-tight">
            運営者情報
          </h1>
          <p className="text-sm text-brand-black font-black mt-3">
            H3 Incoverが運営するWebサイトおよび提供サービスに関する情報です。
          </p>
        </header>

        <OperatorDetails />
      </div>
    </div>
  );
}
