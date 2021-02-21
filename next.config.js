// next.config.js
module.exports = {
  i18n: {
    locales: ['en-US', 'jp'],
    defaultLocale: 'en-US',

    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en-US',
      },
      {
        domain: 'example.jp',
        defaultLocale: 'jp',
      },
    ],
  },
}