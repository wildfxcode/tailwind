/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'WildFx.io',
  author: 'Jason Deramo',
  headerTitle: 'WildFx.io',
  description: 'How I became a Developer, and so can you' + '!',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://wildfx.io/',
  siteRepo: 'https://github.com/wildfxcode/tailwind',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'ask@wildfx.io',
  github: 'https://github.com/wildfxcode',
  youtube: 'https://youtube.com/@wild-fx',
  facebook: 'https://www.facebook.com/jasonderamo',
  linkedin: 'https://www.linkedin.com/in/jasonderamo',
  discord: 'https://discord.gg/f8fk4uCH',
  medium: 'https://medium.com/@jasonderamo',
  locale: 'en-US',
  stickyNav: false,
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
};

module.exports = siteMetadata;
