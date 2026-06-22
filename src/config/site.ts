/**
 * Site configuration
 */
export const siteConfig = {
  name: 'Sajeda PDF',
  description: 'Sajeda PDF - Professional PDF Tools. Free, Private & Browser-Based. Merge, split, compress, convert, and edit PDF files online without uploading to servers.',
  url: 'https://sajedapdf.com',
  ogImage: '/images/og-image.png',
  links: {
    github: 'https://github.com/sajedapdf',
    twitter: 'https://twitter.com/sajedapdf',
  },
  creator: 'Sajeda PDF Team',
  keywords: [
    'PDF tools',
    'PDF editor',
    'merge PDF',
    'split PDF',
    'compress PDF',
    'convert PDF',
    'free PDF tools',
    'online PDF editor',
    'browser-based PDF',
    'private PDF processing',
  ],
  // SEO-related settings
  seo: {
    titleTemplate: '%s | Sajeda PDF',
    defaultTitle: 'Sajeda PDF - Professional PDF Tools',
    twitterHandle: '@sajedapdf',
    locale: 'en_US',
  },
};

/**
 * Navigation configuration
 */
export const navConfig = {
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'Tools', href: '/tools' },
    { title: 'About', href: '/about' },
    { title: 'FAQ', href: '/faq' },
  ],
  footerNav: [
    { title: 'Privacy', href: '/privacy' },
    { title: 'Terms', href: '/terms' },
    { title: 'Contact', href: '/contact' },
  ],
};
