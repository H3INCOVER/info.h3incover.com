import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-16 mt-auto border-t border-brand-border">
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          
          {/* 左カラム: ロゴ・説明文 & Networkカード */}
          <div className="md:col-span-6 lg:col-span-7 space-y-8">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 font-black text-white group mb-4">
                <div className="w-[34px] h-[34px] rounded-full bg-white text-brand-black grid place-items-center text-xs font-bold tracking-wider group-hover:bg-brand-red group-hover:text-white transition-colors duration-200">
                  H3
                </div>
                <div className="flex flex-col">
                  <span className="text-sm tracking-wide">H3 Incover Info</span>
                </div>
              </Link>
              <p className="text-sm text-gray-400 font-medium leading-relaxed whitespace-pre-line">
                「見つけられる状態を、設計する。」{"\n"}
                {"\n"}
                H3 Incover INFO は、{"\n"}
                AI・Web・営業・介護・情報設計について、{"\n"}
                実践しながら学んだことを整理・発信する{"\n"}
                知識・研究ノートです。
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs text-gray-500 font-black tracking-widest uppercase block">
                【H3 Incover Network】
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://h3incover.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-red/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="text-xs font-black text-white mb-1 flex items-center gap-1.5">
                    <span>🏠</span> H3 Incover 公式サイト
                  </div>
                  <div className="text-[11px] text-gray-400 font-medium leading-snug">
                    サービス紹介・制作実績・お問い合わせ
                  </div>
                </a>

                <a
                  href="https://info.h3incover.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-red/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="text-xs font-black text-white mb-1 flex items-center gap-1.5">
                    <span>📰</span> H3 Incover INFO
                  </div>
                  <div className="text-[11px] text-gray-400 font-medium leading-snug">
                    AI・Web・営業・介護・情報設計の情報メディア
                  </div>
                </a>

                <a
                  href="https://portal.h3incover.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-red/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="text-xs font-black text-white mb-1 flex items-center gap-1.5">
                    <span>🏥</span> 介護制度ポータル
                  </div>
                  <div className="text-[11px] text-gray-400 font-medium leading-snug">
                    介護事業所向け制度・補助金・加算情報
                  </div>
                </a>

                <a
                  href="https://h3incover.com/care"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-red/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="text-xs font-black text-white mb-1 flex items-center gap-1.5">
                    <span>💻</span> 介護ホームページサービス
                  </div>
                  <div className="text-[11px] text-gray-400 font-medium leading-snug">
                    介護事業所向けホームページ制作サービス
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* 中央カラム: NAVIGATION */}
          <div className="flex flex-col gap-4 md:col-span-3 lg:col-span-2">
            <span className="text-xs text-gray-500 font-black tracking-widest uppercase">NAVIGATION</span>
            <div className="flex flex-col gap-3 text-sm font-semibold text-gray-300">
              <Link href="/" className="hover:text-white transition-colors duration-200 self-start">
                ホーム
              </Link>
              <Link href="/posts" className="hover:text-white transition-colors duration-200 self-start">
                記事一覧
              </Link>
              <Link href="/categories" className="hover:text-white transition-colors duration-200 self-start">
                カテゴリ
              </Link>
              <Link href="/tags" className="hover:text-white transition-colors duration-200 self-start">
                タグ
              </Link>
              <Link href="/about" className="hover:text-white transition-colors duration-200 self-start">
                About
              </Link>
              <a href="mailto:hiraoka@h3incover.com" className="hover:text-white transition-colors duration-200 self-start">
                お問い合わせ
              </a>
            </div>
          </div>

          {/* 右カラム: LEGAL */}
          <div className="flex flex-col gap-4 md:col-span-3 lg:col-span-3">
            <span className="text-xs text-gray-500 font-black tracking-widest uppercase">LEGAL</span>
            <div className="flex flex-col gap-3 text-sm font-semibold text-gray-300">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200 self-start">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200 self-start">
                利用規約
              </Link>
              <Link href="/operator" className="hover:text-white transition-colors duration-200 self-start">
                運営者情報
              </Link>
              <Link href="/legal" className="hover:text-white transition-colors duration-200 self-start">
                特定商取引法に基づく表記
              </Link>
            </div>
          </div>

        </div>

        {/* 下部 copyright & feed */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-semibold">
          <div>© 2026 H3 Incover. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="/sitemap.xml" className="hover:text-white">Sitemap</a>
            <a href="/feed.xml" className="hover:text-white">RSS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
