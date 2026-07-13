import Link from 'next/link';
import { getSortedPostsData } from '@/lib/markdown';
import ImageWithFallback from '@/components/ImageWithFallback';
import { ArrowRight, BookOpen, Tag, Calendar, User } from 'lucide-react';

export default function Home() {
  const allPosts = getSortedPostsData();
  const featuredPosts = allPosts.filter((post) => post.recommend).slice(0, 3);
  const latestPosts = allPosts.slice(0, 4);
  const categories = ['AI', '介護', 'Web', '営業', '情報設計', 'H3開発日誌'];

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="bg-white border-b border-brand-border py-20 md:py-32">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="max-w-3xl">
            <span className="text-xs font-black tracking-widest text-brand-red uppercase mb-4 block">
              H3 Incover Info
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-brand-black leading-tight tracking-tight mb-6">
              情報を、<br className="md:hidden" /><span className="text-brand-red">届く形</span>に整えるための記録。
            </h1>
            <p className="text-lg md:text-xl text-brand-muted font-semibold leading-relaxed mb-8">
              AI、介護、Web、営業、情報設計について、日々の現場で実践しながら学んだことを整理した知識庫・研究ノートメディアです。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/posts"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-black text-white text-sm font-black tracking-wider hover:bg-brand-red transition-all duration-200"
              >
                記事一覧を見る
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-brand-border text-sm font-black tracking-wider text-brand-black hover:bg-brand-bg transition-all duration-200"
              >
                このサイトについて
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured (おすすめ記事) */}
      {featuredPosts.length > 0 && (
        <section className="py-16 md:py-24 border-b border-brand-border bg-brand-bg/30">
          <div className="max-w-[1120px] mx-auto px-5">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-xs font-black tracking-widest text-brand-red uppercase mb-1 block">
                  Featured
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-brand-black tracking-tight">
                  おすすめ記事
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-brand-border rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    {/* アイキャッチ画像 */}
                    <Link
                      href={`/posts/${post.slug}`}
                      className="block relative w-full aspect-video rounded-2xl overflow-hidden mb-5 border border-brand-border bg-brand-bg-soft"
                    >
                      <ImageWithFallback
                        src={post.eyecatch}
                        alt={post.title}
                        className="object-cover w-full h-full hover:scale-102 transition-transform duration-300"
                        fallbackSrc="/images/categories/other.png"
                      />
                    </Link>

                    <div className="flex items-center gap-3 text-xs font-bold text-brand-muted mb-4">
                      <span className="bg-brand-bg text-brand-black px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span>{post.publishedAt}</span>
                    </div>
                    <Link href={`/posts/${post.slug}`} className="group">
                      <h3 className="text-lg font-black text-brand-black leading-snug group-hover:text-brand-red transition-colors duration-200 mb-3">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-brand-muted font-medium line-clamp-3 leading-relaxed mb-6">
                      {post.description}
                    </p>
                  </div>
                  <Link
                    href={`/posts/${post.slug}`}
                    className="inline-flex items-center text-xs font-black tracking-wider text-brand-black border-b-2 border-brand-red pb-0.5 self-start hover:text-brand-red transition-colors duration-200"
                  >
                    続きを読む
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Latest (新着記事) */}
      <section className="py-16 md:py-24 border-b border-brand-border">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-black tracking-widest text-brand-red uppercase mb-1 block">
                Latest
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-brand-black tracking-tight">
                新着記事
              </h2>
            </div>
            <Link
              href="/posts"
              className="inline-flex items-center text-sm font-bold text-brand-black hover:text-brand-red transition-colors duration-200"
            >
              すべて見る
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {latestPosts.map((post) => (
              <article key={post.slug} className="group flex flex-col justify-between">
                <div>
                  {/* アイキャッチ画像 */}
                  <Link
                    href={`/posts/${post.slug}`}
                    className="block relative w-full aspect-video rounded-3xl overflow-hidden mb-5 border border-brand-border bg-brand-bg-soft"
                  >
                    <ImageWithFallback
                      src={post.eyecatch}
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-300"
                      fallbackSrc="/images/categories/other.png"
                    />
                  </Link>

                  <div className="flex items-center gap-3 text-xs font-bold text-brand-muted mb-3">
                    <span className="text-brand-red">{post.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.publishedAt}
                    </span>
                  </div>
                  
                  <Link href={`/posts/${post.slug}`}>
                    <h3 className="text-xl font-black text-brand-black leading-snug group-hover:text-brand-red transition-colors duration-200 mb-3">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-brand-muted font-medium line-clamp-2 leading-relaxed mb-4">
                    {post.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tags/${tag}`}
                      className="text-xs font-bold text-brand-muted hover:text-brand-red transition-colors duration-200"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Categories */}
      <section className="py-16 md:py-24 border-b border-brand-border bg-brand-bg/10">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="mb-10 text-center md:text-left">
            <span className="text-xs font-black tracking-widest text-brand-red uppercase mb-1 block">
              Categories
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-brand-black tracking-tight">
              カテゴリから探す
            </h2>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/categories/${category}`}
                className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-brand-border text-sm font-black text-brand-black hover:border-brand-red hover:text-brand-red transition-all duration-200"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About */}
      <section className="py-16 md:py-24 border-b border-brand-border">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-black tracking-widest text-brand-red uppercase mb-1 block">
                About Media
              </span>
              <h2 className="text-3xl font-black text-brand-black tracking-tight mb-6">
                H3 Incover Info について
              </h2>
              <div className="text-brand-muted font-medium space-y-4 text-base leading-relaxed">
                <p>
                  このメディアは、Webデザインおよび情報設計を行う H3 Incover（エイチスリー・インカバー）の情報発信拠点です。
                </p>
                <p>
                  派手なトレンドニュースを追うのではなく、日々の介護現場のDX支援、Webサイトの制作、営業、そして情報の整理設計といった実務を通して得られた知見を蓄積する「研究ノート」または「知識庫」として運営しています。
                </p>
                <p>
                  「小さく、軽く、続けられる設計」を体現したこの静的サイトは、情報を必要としている人へと届く形に整える試みの一つです。
                </p>
              </div>
            </div>
            <div className="bg-brand-bg rounded-3xl p-8 border border-brand-border flex flex-col justify-center">
              <span className="text-xs font-black tracking-widest text-brand-muted uppercase mb-4 block">
                Core Philosophy
              </span>
              <ul className="space-y-4 text-sm font-bold text-brand-black">
                <li className="flex items-start gap-3">
                  <span className="text-brand-red font-black">01</span>
                  <span>見つけられる状態を、設計する。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red font-black">02</span>
                  <span>情報・導線・Web設計で必要を届ける。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red font-black">03</span>
                  <span>小さく、軽く、続けられる運用設計。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-20 md:py-32 bg-brand-black text-white">
        <div className="max-w-[1120px] mx-auto px-5 text-center">
          <span className="text-xs font-black tracking-widest text-brand-red uppercase mb-4 block">
            Contact & Service
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8">
            情報の伝わり方を、変えていく。
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 font-semibold text-sm md:text-base leading-relaxed mb-12">
            H3 Incover では、介護事業所向けの簡単ホームページサービスや、小規模事業者向けのオーダーメイドWebサイト制作、情報設計のご相談を承っています。
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://h3incover.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-brand-black text-sm font-black hover:bg-brand-red hover:text-white transition-all duration-200"
            >
              H3 Incover 本体サイトを見る
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="https://h3incover.com/care/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-gray-700 text-sm font-black hover:bg-gray-800 transition-all duration-200"
            >
              介護ホームページサービス（詳細）
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
