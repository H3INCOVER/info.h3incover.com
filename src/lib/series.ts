export interface SeriesPost {
  title: string;
  slug: string;
}

export interface Series {
  id: string;
  name: string;
  posts: SeriesPost[];
}

export const seriesList: Series[] = [
  {
    id: "care-website-improvement",
    name: "介護事業所ホームページ改善シリーズ",
    posts: [
      { title: "介護事業所にホームページは必要？掲載しておきたい最低限の情報とは", slug: "care-website-essentials" },
      { title: "ホームページがないことで起こる5つの困りごと", slug: "care-website-absence-problems" },
      { title: "利用者・家族は介護事業所のホームページのどこを見ている？", slug: "care-website-user-perspective" },
      { title: "ケアマネジャーはホームページを見ている？｜介護事業所の情報発信を考える", slug: "care-website-caremanager-perspective" },
      { title: "Google検索とGoogleマップの違い｜介護事業所の情報への入口を整える", slug: "care-website-search-and-map" },
      { title: "介護事業所のホームページに最低限載せたい情報10項目", slug: "care-website-minimum-items" },
      { title: "介護事業所のホームページは自作？制作会社？3つの作り方を比較", slug: "care-website-how-to-create" },
      { title: "介護事業所に合ったホームページ制作パートナーの選び方｜依頼前に確認したいポイント", slug: "care-website-agency-selection" },
      { title: "介護ホームページの見積書はどう比べる？「誰が何をするか」を確認する4つのポイント", slug: "care-website-estimate-scope" },
      { title: "介護ホームページの「保守契約」は何のため？月額料金より確かめたい「何をしてくれるか」", slug: "care-website-maintenance-contract" },
      { title: "介護ホームページのドメイン・サーバー名義は誰のもの？契約前に確かめたい「将来困らないため」の確認ポイント", slug: "care-website-domain-server-ownership" },
      { title: "ホームページ解約時のトラブルを防ぐ！著作権とデータ引き渡しのルール", slug: "care-website-copyright-cancellation" },
    ]
  }
];
