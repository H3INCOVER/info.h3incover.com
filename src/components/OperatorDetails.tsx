export default function OperatorDetails() {
  const rows = [
    { key: '事業者名', val: 'H3 Incover' },
    { key: '運営責任者', val: 'Hiroshi Hiraoka' },
    {
      key: '所在地',
      val: '福岡県糟屋郡',
      note: '※詳細な所在地は、ご請求をいただければ遅滞なく開示いたします。',
    },
    {
      key: '電話番号',
      val: '',
      note: '※ご請求をいただければ遅滞なく開示いたします。',
    },
    {
      key: '連絡先',
      val: 'hiraoka@h3incover.com',
      note: '※お問い合わせは原則メールにて承っております。',
    },
    { key: '販売価格', val: '各サービスページに記載しております。' },
    {
      key: '商品代金以外の必要料金',
      val: 'サービス内容や契約内容に応じて異なります。詳細は各サービスページまたはお見積りにてご案内いたします。',
    },
    { key: '支払方法', val: '銀行振込' },
    {
      key: '支払時期',
      val: 'お申し込み後、当方がご案内する指定期日までにお支払いください。',
    },
    {
      key: '提供時期',
      val: 'ご入金確認後、サービス内容に応じて順次提供いたします。',
    },
    { key: '契約期間', val: '1か月単位の自動更新となります。' },
    {
      key: '解約について',
      val: '解約を希望される場合は、次回更新日の前日までに、登録メールアドレスから当方指定の連絡先へメールにてご連絡ください。',
    },
    {
      key: '返金について',
      val: 'サービスの性質上、提供開始後の返金には原則として対応しておりません。',
    },
  ];

  return (
    <div className="bg-white border border-brand-border rounded-2xl overflow-hidden">
      <div className="divide-y divide-brand-border">
        {rows.map((row, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 p-6">
            <span className="text-xs font-black text-brand-muted uppercase self-center">
              {row.key}
            </span>
            <div className="md:col-span-2 font-black text-brand-black leading-relaxed">
              {row.val && <span>{row.val}</span>}
              {row.note && (
                <span className="block text-xs font-semibold text-brand-muted mt-1 leading-normal">
                  {row.note}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
