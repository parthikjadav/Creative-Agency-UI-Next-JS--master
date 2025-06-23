export default async function sitemap(req, res) {
  // Set response headers for XML content
  res.setHeader('Content-Type', 'text/xml');

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';

    // Static pages
    const staticPages = [
      { url: baseUrl, lastModified: new Date() },
      { url: `${baseUrl}/agency`, lastModified: new Date() },
      { url: `${baseUrl}/contact`, lastModified: new Date() },
      { url: `${baseUrl}/services`, lastModified: new Date() },
      { url: `${baseUrl}/showcase`, lastModified: new Date() },
      { url: `${baseUrl}/pricing`, lastModified: new Date() },
      // Add more static pages as needed
    ];

    // Combine all URLs
    const allPages = [...staticPages];

    // Generate XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPages
          .map(
            (page) => `
            <url>
              <loc>${page.url}</loc>
              <lastmod>${page.lastModified.toISOString()}</lastmod>
              <changefreq>${page.changeFrequency || 'daily'}</changefreq>
              <priority>${page.priority || '0.7'}</priority>
            </url>
          `
          )
          .join('')}
      </urlset>
    `;

    // Send the XML to the browser
    res.status(200).send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).end();
  }
}
