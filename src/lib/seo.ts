import type { Metadata } from 'next';

export const SITE_NAME = 'H3 Incover INFO';
export const SITE_URL = 'https://info.h3incover.com';
export const SITE_DESCRIPTION = 'H3 Incover INFOは、介護事業所のWeb活用・情報発信・業務改善を中心に、事業運営に役立つ実務情報を発信するメディアです。';
export const SITE_TITLE = `${SITE_NAME} | 介護事業所のWeb活用・情報発信・業務改善`;
export const SITE_LOGO = `${SITE_URL}/images/favicon.jpg`;

// Nested metadata is replaced by Next.js, so each page supplies its full share metadata.
export function createPageMetadata(
  title: string,
  description: string,
  path: string,
  image = '/images/ogp.jpg',
): Metadata {
  const url = new URL(path, SITE_URL).href;
  const imageUrl = new URL(image, SITE_URL).href;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      types: { 'application/rss+xml': `${SITE_URL}/feed.xml` },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'ja_JP',
      type: 'website',
      images: [{ url: imageUrl, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}
