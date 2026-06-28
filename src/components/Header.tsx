import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-border/90">
      <div className="max-w-[1120px] mx-auto px-5 h-[76px] flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-3 font-black text-brand-black group">
          <div className="w-[38px] h-[38px] rounded-full bg-brand-black text-white grid place-items-center text-sm font-bold tracking-wider group-hover:bg-brand-red transition-colors duration-200">
            H3
          </div>
          <div className="flex flex-col">
            <span className="text-base tracking-wide leading-tight">H3 Incover</span>
            <span className="text-[10px] text-brand-muted tracking-widest uppercase leading-none font-bold">Info</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-[34px] text-sm font-bold">
          <Link href="/" className="relative py-2 text-brand-black hover:text-brand-red transition-colors duration-200">
            ホーム
          </Link>
          <Link href="/posts" className="relative py-2 text-brand-black hover:text-brand-red transition-colors duration-200">
            記事一覧
          </Link>
          <Link href="/categories" className="relative py-2 text-brand-black hover:text-brand-red transition-colors duration-200">
            カテゴリ
          </Link>
          <Link href="/tags" className="relative py-2 text-brand-black hover:text-brand-red transition-colors duration-200">
            タグ
          </Link>
          <Link href="/about" className="relative py-2 text-brand-black hover:text-brand-red transition-colors duration-200">
            About
          </Link>
          <a
            href="mailto:hiraoka@h3incover.com"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-brand-black text-xs font-black tracking-wider text-brand-black hover:bg-brand-black hover:text-white transition-all duration-200"
          >
            お問い合わせ
          </a>
        </nav>

        {/* モバイル用ナビゲーション（簡易） */}
        <div className="flex md:hidden items-center gap-4 text-xs font-bold">
          <Link href="/posts" className="text-brand-black hover:text-brand-red">
            一覧
          </Link>
          <Link href="/about" className="text-brand-black hover:text-brand-red">
            About
          </Link>
          <a href="mailto:hiraoka@h3incover.com" className="text-brand-black hover:text-brand-red">
            連絡先
          </a>
        </div>
      </div>
    </header>
  );
}
