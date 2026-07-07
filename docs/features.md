# 機能定義書 (Features)

本メディアサイトに実装されている主要機能の一覧と定義です。

---

## 1. 記事一覧
* **目的**: 投稿されたすべての記事を新着順に俯瞰し、関心のあるテーマを効率的に探せるようにする。
* **概要**: トップページおよび記事一覧ページにおいて、カード形式で記事タイトル、説明文、公開日、カテゴリ、タグを表示。アイキャッチが空欄の場合はカテゴリに応じたイラストが自動適用されます。
* **関連ファイル**:
  * [src/app/page.tsx](file:///c:/Projects/info.h3incover.com/src/app/page.tsx) (トップ新着)
  * [src/app/posts/page.tsx](file:///c:/Projects/info.h3incover.com/src/app/posts/page.tsx) (全件一覧)
* **今後の拡張案**: ページネーション（件数が増えた場合の分割表示）または無限スクロールの実装。

---

## 2. 記事詳細
* **目的**: Markdownで執筆された知見を、読みやすく整理された静的HTMLとしてレンダリングする。
* **概要**: `gray-matter` と `marked` を通じてフロントマターと本文をパースし、指定された記事構造（ヘッダー ➡ 導入 ➡ 目次 ➡ 本文 ➡ CTA ➡ 関連記事等）に沿って表示します。
* **関連ファイル**:
  * [src/app/posts/[slug]/page.tsx](file:///c:/Projects/info.h3incover.com/src/app/posts/[slug]/page.tsx)
* **今後の拡張案**: コードブロックのシンタックスハイライト（Prism.jsやShiki）のインテグレーション。

---

## 3. カテゴリ
* **目的**: AI、介護、Webなどの大枠のテーマに沿って情報を分類し、読者が興味あるドメインを網羅的に確認しやすくする。
* **概要**: 記事ごとに1つの `category` をフロントマターで指定。カテゴリ別の一覧表示と、対応するアイキャッチ画像の自動フォールバックマップを提供。
* **関連ファイル**:
  * [src/app/categories/page.tsx](file:///c:/Projects/info.h3incover.com/src/app/categories/page.tsx) (カテゴリ一覧)
  * [src/app/categories/[category]/page.tsx](file:///c:/Projects/info.h3incover.com/src/app/categories/[category]/page.tsx) (カテゴリ別記事)
  * [src/lib/markdown.ts](file:///c:/Projects/info.h3incover.com/src/lib/markdown.ts) (カテゴリ解析ロジック)
* **今後の拡張案**: カテゴリごとの解説ディスクリプション（リード文）を動的に差し込める仕組みの導入。

---

## 4. タグ
* **目的**: カテゴリを横断する細かいキーワード（例：「ビジネス」「情報設計」「ツール」）によって多角的な検索・巡回ルートを形成する。
* **概要**: 記事に複数付与されたタグをパースし、タグ別の記事一覧およびタグクラウドを動的に生成します。
* **関連ファイル**:
  * [src/app/tags/page.tsx](file:///c:/Projects/info.h3incover.com/src/app/tags/page.tsx) (タグ一覧)
  * [src/app/tags/[tag]/page.tsx](file:///c:/Projects/info.h3incover.com/src/app/tags/[tag]/page.tsx) (タグ別記事)
* **今後の拡張案**: タグの階層化、または記事数の多いタグを強調表示するダイナミック・タグクラウド。

---

## 5. 関連記事
* **目的**: 読み終えた読者に対して、関連性の高い別の知識ドキュメントを提示し、サイトからの離脱を防ぐ。
* **概要**: フロントマターの `relatedPosts: ["slug1", "slug2"]` に基づき、下部に最大3つの関連記事カードを自動で引き当て表示します。
* **関連ファイル**:
  * [src/app/posts/[slug]/page.tsx](file:///c:/Projects/info.h3incover.com/src/app/posts/[slug]/page.tsx)
* **今後の拡張案**: 自動レコメンド（同カテゴリや同タグの多さを判定して自動で引き当てるロジック）の実装。

---

## 6. 目次 (Table of Contents)
* **目的**: 記事全体の構成をすばやく俯瞰させ、読みたい見出しへスキップできるようにする。
* **概要**: 本文内の `H2`, `H3` タグをMarkdownパース時に抽出し、見出しレベルに応じたインデントを持つリンク付き目次を自動生成します。
* **関連ファイル**:
  * [src/components/TableOfContents.tsx](file:///c:/Projects/info.h3incover.com/src/components/TableOfContents.tsx)
  * [src/lib/markdown.ts](file:///c:/Projects/info.h3incover.com/src/lib/markdown.ts) (見出し抽出)
* **今後の拡張案**: 画面スクロール時に、現在の閲覧位置に追従してアクティブな目次をハイライトするスクロールスパイ（ScrollSpy）機能。

---

## 7. 共通CTA (Call to Action)
* **目的**: 記事に関心を持った読者に、相談や問い合わせのアクションを促す。
* **概要**: 記事詳細の下部に配置されたカード。H3 Incoverの制作相談窓口（メールリンク）と本体公式サイトへの導線を配置したクリーンなカードUIです。
* **関連ファイル**:
  * [src/app/posts/[slug]/page.tsx](file:///c:/Projects/info.h3incover.com/src/app/posts/[slug]/page.tsx)
* **今後の拡張案**: カテゴリごとにCTAの内容を動的に切り替える仕組み（例：介護系の記事には介護制作サービスのCTAを表示し、Web設計の記事にはコンサルティングのCTAを表示するなど）。

---

## 8. シリーズ記事
* **目的**: 連載形式の複数記事（例：「介護事業所ホームページ改善シリーズ」）のつながりを示し、順序立った理解を助ける。
* **概要**: Markdown本文の冒頭にHTMLタグで薄いグレーのカードを配置し、連載の第1回〜現在記事などのリンクを美しく表示する。
* **関連ファイル**:
  * 各記事Markdownファイル
* **今後の拡張案**: シリーズごとのメタデータをフロントマターに統合し、自動で前後記事へのリンクと進行度を表示するシステムコンポーネント化。

---

## 9. RSSフィード (feed.xml)
* **目的**: RSSリーダーや外部のアグリゲーターに対して、最新の記事更新情報を自動配信する。
* **概要**: 配信URL `/feed.xml` にアクセスした際、最新記事から順にXML規格（RSS 2.0）のデータを動的生成して返します。
* **関連ファイル**:
  * [src/app/feed.xml/route.ts](file:///c:/Projects/info.h3incover.com/src/app/feed.xml/route.ts)
* **今後の拡張案**: 概要 (`description`) 配信だけでなく、XML内の `<content:encoded>` 要素として記事本文を全文配信する仕様の追加。

---

## 10. サイトマップ (sitemap.xml)
* **目的**: Googleなどの検索エンジンクローラーに対し、サイト全体の構成と最終更新日を漏れなく伝える（SEO対策）。
* **概要**: `/sitemap.xml` へアクセスした際に、全記事、全カテゴリ、全タグのルートを網羅した標準XMLサイトマップを自動生成します。
* **関連ファイル**:
  * [src/app/sitemap.xml/route.ts](file:///c:/Projects/info.h3incover.com/src/app/sitemap.xml/route.ts)

---

## 11. SEO & JSON-LD
* **目的**: 検索エンジンでの評価を高め、検索結果にリッチリザルト（パンくず、記事情報など）を表示させる。
* **概要**: `next` の標準Metadataを使用し、`title`, `description`, `openGraph` 情報をヘッダーへ挿入。また、構造化データ（Schema.org JSON-LD）として `BlogPosting` 規格のデータを各記事ページに埋め込みます。
* **関連ファイル**:
  * [src/app/posts/[slug]/page.tsx](file:///c:/Projects/info.h3incover.com/src/app/posts/[slug]/page.tsx) (Metadata定義 ＆ JSON-LD生成)
* **今後の拡張案**: Twitter Card用イメージの最適化、OGP自動生成機能の追加。

---

## 12. パンくずリスト (Breadcrumbs)
* **目的**: ユーザーが現在サイトのどこにいるのか（階層）を視覚的に理解させ、親階層への逆戻りを容易にする。
* **概要**: `ホーム ＞ 記事一覧 ＞ [カテゴリ] ＞ [記事タイトル]` という構造をナビゲーションとして表示します。
* **関連ファイル**:
  * [src/app/posts/[slug]/page.tsx](file:///c:/Projects/info.h3incover.com/src/app/posts/[slug]/page.tsx)
* **今後の拡張案**: 動的なカテゴリネームの多言語対応や、構造化データ（BreadcrumbList）のJSON-LDとの完全連携。
