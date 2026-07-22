import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'このサイトについて',
  description: '介護事業所のWebまわりで役立つ情報や、ホームページ、サーバー、ドメイン、Google検索などについて分かりやすく紹介する「H3 Incover Info」についてご紹介します。',
};

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
            H3 Incover Info について
          </h1>
        </header>

        <div className="prose max-w-none space-y-8 font-medium text-brand-black leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl font-black text-brand-black border-l-4 border-brand-red pl-4 py-1">
              メディアの目的
            </h2>
            <p>
              介護事業所のWebまわりで役立つ情報をまとめています。
            </p>
            <p>
              ホームページ、サーバー、ドメイン、Google検索、SEOなど、Webに関する言葉や仕組みをできるだけ分かりやすく紹介しています。
            </p>
            <p>
              「何から始めればいいの？」「この言葉ってどういう意味？」と思った時に、気軽に立ち寄れる場所になればと考えています。
            </p>
            <p>
              必要な時に、少しでもお役に立てれば幸いです。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brand-black border-l-4 border-brand-red pl-4 py-1">
              こんなことを書いています
            </h2>
            <p>
              現在は主に、介護事業所のWebまわりについて取り上げています。
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>ホームページ</strong></li>
              <li><strong>Google検索</strong></li>
              <li><strong>Googleビジネスプロフィール</strong></li>
              <li><strong>サーバー・ドメイン</strong></li>
              <li><strong>SEO</strong></li>
              <li><strong>保守・運用</strong></li>
              <li><strong>AI活用</strong></li>
            </ul>
            <p className="pt-2 text-sm text-brand-muted">
              今後は状況に応じて、その他のテーマについても取り上げていく予定です。
            </p>
          </section>

          <section className="bg-brand-bg/50 border border-brand-border rounded-2xl p-6 md:p-8 space-y-4 mt-12">
            <h3 className="text-lg font-black text-brand-black">お問い合わせ・ご相談</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              介護事業所向けホームページサービスについてのご相談や、ご質問などがありましたら、お気軽にお問い合わせください。
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
