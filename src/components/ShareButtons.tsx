'use client';

import { useState, useEffect } from 'react';
import { Link as LinkIcon, Check } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const shareText = `${title} | H3 Incover Info`;

  const xShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const lineShareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`;

  return (
    <div className="flex flex-col gap-3 py-6 border-y border-brand-border my-8">
      <span className="text-xs font-black tracking-widest text-brand-muted uppercase">
        この記事を共有する (Share)
      </span>
      <div className="flex items-center gap-3">
        {/* X (Twitter) */}
        <a
          href={xShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-black hover:bg-brand-black hover:text-white transition-all duration-200"
          aria-label="Xで共有"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>

        {/* Facebook */}
        <a
          href={facebookShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-black hover:bg-brand-black hover:text-white transition-all duration-200"
          aria-label="Facebookで共有"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
          </svg>
        </a>

        {/* LINE */}
        <a
          href={lineShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-black hover:bg-brand-black hover:text-white transition-all duration-200 font-bold text-[10px] tracking-wider"
          aria-label="LINEで共有"
        >
          LINE
        </a>

        {/* Link Copy */}
        <button
          onClick={handleCopy}
          className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-black hover:bg-brand-black hover:text-white transition-all duration-200"
          aria-label="リンクをコピー"
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <LinkIcon className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
