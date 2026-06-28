import Link from 'next/link';

export interface TocHeading {
  text: string;
  id: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TocHeading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  if (!headings || headings.length === 0) {
    return null;
  }

  return (
    <div className="bg-brand-bg/60 border border-brand-border rounded-2xl p-6 mb-8">
      <span className="block text-xs font-black tracking-widest uppercase text-brand-muted mb-4">
        目次 (Table of Contents)
      </span>
      <nav>
        <ul className="space-y-2 text-sm font-semibold">
          {headings.map((heading, index) => {
            const paddingLeft = heading.level === 3 ? 'pl-4 text-xs font-bold text-brand-muted' : 'text-brand-black';
            return (
              <li key={index} style={{ paddingLeft: heading.level === 3 ? '1rem' : '0' }}>
                <Link
                  href={`#${heading.id}`}
                  className={`hover:text-brand-red transition-colors duration-200 block py-1 truncate ${paddingLeft}`}
                >
                  {heading.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
