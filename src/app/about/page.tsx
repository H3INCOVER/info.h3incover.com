import { createPageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = createPageMetadata(
  'このサイトについて',
  'H3 Incover INFOについて。介護職の仕事に役立つ情報や日常の疑問、介護職ハック、働き方、資格などを紹介するメディアです。介護事業所向けのホームページやWeb活用に関する情報も掲載しています。',
  '/about',
);

export default function AboutPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-5 py-8 md:py-16">
      <Breadcrumbs items={[{ label: 'About' }]} />

      <div className="max-w-3xl mx-auto mt-8">
        <header className="mb-10 pb-8 border-b border-brand-border">
          <span className="text-xs font-black tracking-widest text-brand-red uppercase mb-2 block">
            About Us
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-brand-black tracking-tight leading-tight">
            H3 Incover INFOについて
          </h1>
        </header>

        <div className="prose max-w-none space-y-8 font-medium text-brand-black leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl font-black text-brand-black border-l-4 border-brand-red pl-4 py-1">
              メディアの目的
            </h2>
            <p>
              H3 Incover INFOでは、介護職の仕事に役立つ情報や、日常のちょっとした疑問、介護職ハックなどをご紹介しています。
            </p>
            <p>
              介護の仕事内容、働き方、資格、職場でのあるあるなど、さまざまなテーマを取り上げています。
            </p>
            <p>
              また、介護事業所向けのホームページやWeb活用に関する情報も掲載しています。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brand-black border-l-4 border-brand-red pl-4 py-1">
              こんなことを書いています
            </h2>
            <p>
              介護職の仕事や日常に関わるテーマを取り上げています。
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>介護職ハック</strong></li>
              <li><strong>介護の仕事内容・基本的な疑問</strong></li>
              <li><strong>介護職のあるある</strong></li>
              <li><strong>働き方・転職</strong></li>
              <li><strong>資格・仕事に役立つ情報</strong></li>
              <li><strong>介護事業所向けWeb活用</strong></li>
            </ul>
            <p className="pt-2 text-sm text-brand-muted">
              今後は状況に応じて、その他のテーマについても取り上げていく予定です。
            </p>
          </section>

          <section className="bg-brand-bg/50 border border-brand-border rounded-2xl p-6 md:p-8 space-y-4 mt-12">
            <h3 className="text-lg font-black text-brand-black">お問い合わせ・ご相談</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              掲載内容に関するご質問や、H3 Incoverのサービスについてのご相談は、メールでお問い合わせください。
            </p>
            <div className="pt-2">
              <a
                href="mailto:hiraoka@h3incover.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-black text-white text-xs font-black tracking-wider hover:bg-brand-red transition-all duration-200"
              >
                メールで問い合わせる (hiraoka@h3incover.com)
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
