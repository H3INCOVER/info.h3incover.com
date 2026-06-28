import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-16 mt-auto border-t border-brand-border">
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-4">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3 font-black text-white group">
              <div className="w-[34px] h-[34px] rounded-full bg-white text-brand-black grid place-items-center text-xs font-bold tracking-wider group-hover:bg-brand-red group-hover:text-white transition-colors duration-200">
                H3
              </div>
              <div className="flex flex-col">
                <span className="text-sm tracking-wide">H3 Incover Info</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-400 font-medium leading-relaxed">
              「見つけられる状態を、設計する。」<br />
              情報・導線・Web設計を通じて、必要な情報が必要な人に届く状態を整えるための研究ノート・知識庫メディアです。
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs text-gray-500 font-black tracking-widest uppercase">Navigation</span>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-gray-300">
              <Link href="/" className="hover:text-white transition-colors duration-200">
                ホーム
              </Link>
              <Link href="/posts" className="hover:text-white transition-colors duration-200">
                記事一覧
              </Link>
              <Link href="/about" className="hover:text-white transition-colors duration-200">
                About
              </Link>
              <a 
                href="https://h3incover.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors duration-200"
              >
                H3 Incover 公式サイト
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs text-gray-500 font-black tracking-widest uppercase">Legal</span>
            <div className="flex flex-wrap md:flex-col gap-x-6 gap-y-3 text-sm font-semibold text-gray-300">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                利用規約
              </Link>
              <Link href="/operator" className="hover:text-white transition-colors duration-200">
                運営者情報
              </Link>
              <Link href="/legal" className="hover:text-white transition-colors duration-200">
                特定商取引法に基づく表記
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-semibold">
          <div>© {new Date().getFullYear()} H3 Incover. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="/sitemap.xml" className="hover:text-white">Sitemap</a>
            <a href="/feed.xml" className="hover:text-white">RSS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
