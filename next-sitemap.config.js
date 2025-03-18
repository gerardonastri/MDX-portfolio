/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://gerardonastri.it", // Assicurati che sia il dominio corretto
    generateRobotsTxt: true, // Genera anche il file robots.txt
    sitemapSize: 5000, // Numero massimo di URL per sitemap
    exclude: ["/admin", "/login", "/create"], // Escludi solo le pagine non indicizzabili
    robotsTxtOptions: {
      policies: [
        { userAgent: "*", allow: "/" },
        { userAgent: "*", disallow: ["/admin", "/login", "/create"] },
      ],
      additionalSitemaps: [
        "https://gerardonastri.it/sitemap.xml",
      ],
    },
  };