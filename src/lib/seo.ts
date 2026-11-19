import type { Metadata } from 'next';

export const SITE_NAME = 'H3 Incover INFO';
export const SITE_URL = 'https://info.h3incover.com';
export const SITE_DESCRIPTION = 'H3 Incover INFOでは、介護職ハック、仕事の疑問、働き方、資格、転職など、介護職として働く人やこれから介護の仕事を始める人に役立つ情報を紹介しています。介護事業所向けのWeb活用情報も掲載しています。';
export const SITE_TITLE = `${SITE_NAME} | 介護職の仕事と暮らしに役立つ情報`;
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
