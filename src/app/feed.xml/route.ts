import { NextResponse } from 'next/server';
import { getSortedPostsData } from '@/lib/markdown';

export async function GET() {
  const posts = getSortedPostsData();
  const baseUrl = 'https://info.h3incover.com';

  const rssItemsXml = posts
    .map((post) => {
      // 投稿日を有効なDateオブジェクトにする
      const pubDate = new Date(post.publishedAt);
      const pubDateString = isNaN(pubDate.getTime()) ? new Date().toUTCString() : pubDate.toUTCString();

      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${baseUrl}/posts/${post.slug}</link>
          <guid isPermaLink="true">${baseUrl}/posts/${post.slug}</guid>
          <pubDate>${pubDateString}</pubDate>
          <description><![CDATA[${post.description}]]></description>
          <category><![CDATA[${post.category}]]></category>
        </item>
      `;
    })
    .join('');

  const rssFeedXml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title><![CDATA[H3 Incover Info]]></title>
        <link>${baseUrl}</link>
        <description><![CDATA[情報を、届く形に整えるための記録。AI・介護・Web・営業・情報設計の知識庫メディア]]></description>
        <language>ja</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
        ${rssItemsXml}
      </channel>
    </rss>
  `;

  return new NextResponse(rssFeedXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  });
}
