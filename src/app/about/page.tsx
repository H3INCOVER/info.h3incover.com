import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'このサイトについて',
  description: 'H3 Incover Info の運営思想、情報設計に対する考え方、介護DX・Web制作などの活動目的についてご紹介します。',
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
            見つけられる状態を、<br />設計する。
          </h1>
        </header>

        <div className="prose max-w-none space-y-8 font-medium text-brand-black leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl font-black text-brand-black border-l-4 border-brand-red pl-4 py-1">
              メディアの目的
            </h2>
            <p>
              H3 Incover Info は、Web設計・情報設計を行う **H3 Incover** が運営する情報発信メディアです。
            </p>
            <p>
              私たちは、<strong>「必要な情報が、それを必要としている人にストレスなく届く状態」</strong>を整えることをミッションとしています。
            </p>
            <p>
              本メディアでは、日々の現場支援（介護事業所のDX、小規模事業者のWeb制作、営業プロセスの構築）を通じて得られたリアルな知見や研究成果をオープンに公開し、誰でも活用できる「知識ベース（ナレッジベース）」にすることを目指しています。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brand-black border-l-4 border-brand-red pl-4 py-1">
              発信テーマ
            </h2>
            <p>
              主に以下のようなテーマについて、実践に基づいた記事を書いています。
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>AIの活用</strong>: 介護現場や日々の実務を効率化するためのAI連携・実践法。</li>
              <li><strong>介護DX</strong>: 介護事業所が抱える書類業務の負荷を減らし、現場ケアに集中するための仕組みづくり。</li>
              <li><strong>Web制作</strong>: 奇抜さよりも「使いやすさ」「情報の探しやすさ」を重視したWeb制作ノウハウ。</li>
              <li><strong>営業手法</strong>: 売り込まない、お客様の課題整理に伴走する営業コミュニケーション。</li>
              <li><strong>情報設計 (IA)</strong>: 複雑な情報を整理し、見やすく、探しやすく構造化する技術。</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brand-black border-l-4 border-brand-red pl-4 py-1">
              設計ポリシー
            </h2>
            <p>
              私たちは、情報設計において<strong>「小さく、軽く、続けられる設計」</strong>を極めて重要視しています。
            </p>
            <p>
              過度な装飾や、管理が困難になる複雑なシステムは、情報の更新を滞らせ、最終的に「届かない情報」へと変えてしまいます。シンプルで、メンテナンスがしやすく、本質的なコンテンツの価値が際立つ設計こそが、持続可能なWebサイトの正解だと考えています。
            </p>
            <p>
              このメディア自体もそのポリシーに基づいて、データベースを持たない超軽量な構成で構築され、Gitでシンプルに記事を追加できる仕組み（SSG）になっています。
            </p>
          </section>

          <section className="bg-brand-bg/50 border border-brand-border rounded-2xl p-6 md:p-8 space-y-4 mt-12">
            <h3 className="text-lg font-black text-brand-black">お問い合わせ・ご相談</h3>
            <p className="text-sm text-brand-muted">
              介護事業所向けのホームページ作成サービス「Navi-Cover」や、オーダーメイドのWeb制作、情報設計のご相談、また本メディアの記事に関するご質問は、以下よりお気軽にお問い合わせください。
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
