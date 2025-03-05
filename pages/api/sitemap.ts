import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Daftar halaman yang ingin dimasukkan ke dalam sitemap
  const pages = [
    { url: 'https://nizarmarifat.com/', changefreq: 'yearly', priority: 1.0 },
  ];

  // Membuat XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
      <url>
        <loc>${page.url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>
    `
      )
      .join('')}
  </urlset>`;

  // Set header dan kirim response
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap);
}
