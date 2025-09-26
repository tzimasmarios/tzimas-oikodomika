/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.gr',
  generateRobotsTxt: true,
  exclude: ['/admin/*'],
};
