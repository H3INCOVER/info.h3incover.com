import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: '利用規約',
  description: 'H3 Incover が運営するWebサイトの利用規約です。本サイトの利用条件を定めています。',
};

export default function TermsPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-5 py-8 md:py-16">
      <Breadcrumbs items={[{ label: '利用規約' }]} />

      <div className="max-w-3xl mx-auto mt-8">
        <header className="mb-10 pb-8 border-b border-brand-border">
          <span className="text-xs font-black tracking-widest text-brand-red uppercase mb-2 block">
            Terms of Service
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-brand-black tracking-tight leading-tight">
            利用規約
          </h1>
          <p className="text-sm text-brand-muted font-medium mt-3">
            本規約は、H3 Incover（以下「当方」）が運営するWebサイト（以下「本サイト」）の利用条件を定めるものです。
          </p>
        </header>

        <div className="prose max-w-none space-y-6 font-medium text-brand-black leading-relaxed">
          <div className="bg-brand-bg/50 border border-brand-border rounded-2xl p-6 md:p-8 space-y-6 text-sm">
            <section className="space-y-2">
              <h2 className="text-base font-black text-brand-black">第1条（目的）</h2>
              <p className="text-brand-muted">
                本規約は、当方が運営する本サイトの利用条件を定めるものです。本サイトを利用される皆様には、本規約に従ってご利用いただきます。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-black text-brand-black">第2条（本サイトについて）</h2>
              <p className="text-brand-muted">
                本サイトでは、以下の活動およびサービス提供を行います。
              </p>
              <ul className="list-disc pl-6 space-y-1 text-brand-muted">
                <li>記事コンテンツ・コラムの公開および情報の提供</li>
                <li>当方が提供する各種サービスのご案内・紹介</li>
                <li>お問い合わせおよびご意見の受付</li>
                <li>その他、本サイトに付随する各種機能の提供</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-black text-brand-black">第3条（著作権）</h2>
              <p className="text-brand-muted">
                本サイトに掲載されている文章、画像、デザイン、およびその他のコンテンツに関する著作権その他の権利は、当方または正当な権利を有する第三者に帰属します。これらを法律で認められた範囲を超えて、無断で転載、複製、改変、二次利用等することはできません。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-black text-brand-black">第4条（禁止事項）</h2>
              <p className="text-brand-muted">
                利用者は、本サイトの利用にあたり、以下の行為を行ってはなりません。
              </p>
              <ul className="list-disc pl-6 space-y-1 text-brand-muted">
                <li>虚偽の情報を入力または送信する行為</li>
                <li>法令に反する行為、または公序良俗に反する行為</li>
                <li>当方または第三者の知的財産権、プライバシー、名誉、その他の権利を侵害する行為</li>
                <li>本サイトのシステムやネットワークに負荷をかけるなど、運営を妨げる行為</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-black text-brand-black">第5条（免責事項）</h2>
              <ul className="list-disc pl-6 space-y-1 text-brand-muted">
                <li>本サイトに掲載されている情報は公開時点のものであり、その正確性、完全性、最新性を保証するものではありません。</li>
                <li>本サイトの利用（掲載情報の参照、およびこれらに基づいて発生した結果を含みます）により利用者に生じた損害等について、当方は一切の責任を負いかねます。</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-black text-brand-black">第6条（外部リンク）</h2>
              <p className="text-brand-muted">
                本サイトには、外部サイトへのリンクが含まれる場合があります。リンク先の外部サイトにおけるコンテンツや信頼性、またそこで発生したトラブルや損害等について、当方は何ら責任を負いません。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-black text-brand-black">第7条（アフィリエイトについて）</h2>
              <p className="text-brand-muted">
                本サイトでは、アフィリエイトプログラム等を利用して外部のサービスや商品をご紹介する場合があります。掲載する記事やご紹介内容は紹介料の有無に左右されるものではなく、読者にとって有益と思われる情報を提供することを基本方針とします。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-black text-brand-black">第8条（規約の変更）</h2>
              <p className="text-brand-muted">
                当方は、必要に応じて本規約をいつでも変更することができます。変更後の規約は、本ページに掲載された時点から効力を生じるものとします。
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-brand-border text-xs text-brand-muted">
              <p>制定日：2026年2月1日</p>
              <p>改定日：2026年6月28日</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
