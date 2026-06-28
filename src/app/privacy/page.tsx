import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'プライバシーポリシー',
  description: 'H3 Incover のプライバシーポリシーです。個人情報の取り扱い方針について定めています。',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-5 py-8 md:py-16">
      <Breadcrumbs items={[{ label: 'プライバシーポリシー' }]} />

      <div className="max-w-3xl mx-auto mt-8">
        <header className="mb-10 pb-8 border-b border-brand-border">
          <span className="text-xs font-black tracking-widest text-brand-red uppercase mb-2 block">
            Privacy Policy
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-brand-black tracking-tight leading-tight">
            プライバシーポリシー
          </h1>
          <p className="text-sm text-brand-muted font-medium mt-3">
            H3 Incover（以下「当方」）は、取得した個人情報を適切に取り扱います。
          </p>
        </header>

        <div className="prose max-w-none space-y-6 font-medium text-brand-black leading-relaxed">
          <div className="bg-brand-bg/50 border border-brand-border rounded-2xl p-6 md:p-8 space-y-6">
            <section className="space-y-2">
              <h2 className="text-lg font-black text-brand-black">1. 取得する情報</h2>
              <ul className="list-disc pl-6 space-y-1 text-sm text-brand-muted">
                <li>事業所名、所在地、電話番号、受付時間、対応エリア等の入力情報</li>
                <li>メールアドレス、お問い合わせ内容</li>
                <li>アップロードされたPDF（重要事項説明書等）</li>
                <li>アクセス情報（Cookie等を利用する場合はその範囲）</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-black text-brand-black">2. 利用目的</h2>
              <ul className="list-disc pl-6 space-y-1 text-sm text-brand-muted">
                <li>Webサイト制作・運用提供のため</li>
                <li>お問い合わせへの回答のため</li>
                <li>PDF差し替え等の対応のため</li>
                <li>サービス改善のため</li>
              </ul>
              <p className="text-xs text-brand-red font-bold">
                ※当方から営業目的の電話連絡は行いません（原則メール対応）。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-black text-brand-black">3. 第三者提供</h2>
              <p className="text-sm text-brand-muted">
                法令に基づく場合を除き、本人の同意なく第三者に提供しません。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-black text-brand-black">4. 委託</h2>
              <p className="text-sm text-brand-muted">
                サーバー提供会社等、運用に必要な範囲で業務を委託する場合があります。その場合も適切に管理します。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-black text-brand-black">5. 保管期間</h2>
              <p className="text-sm text-brand-muted">
                契約期間中および解約後一定期間、合理的な範囲で保管する場合があります。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-black text-brand-black">6. 安全管理</h2>
              <p className="text-sm text-brand-muted">
                不正アクセス防止等、合理的な安全対策を講じます。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-black text-brand-black">7. 開示・訂正・削除</h2>
              <p className="text-sm text-brand-muted">
                ご本人からの申し出により、合理的な範囲で対応します。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-black text-brand-black">8. 改定</h2>
              <p className="text-sm text-brand-muted">
                必要に応じて本ポリシーを変更することがあります。変更後は本ページへの掲載をもって効力を生じます。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-black text-brand-black">9. お問い合わせ窓口</h2>
              <p className="text-sm text-brand-red font-bold">
                hiraoka@h3incover.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
