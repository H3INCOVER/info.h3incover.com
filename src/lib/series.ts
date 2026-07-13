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
    ]
  }
];
