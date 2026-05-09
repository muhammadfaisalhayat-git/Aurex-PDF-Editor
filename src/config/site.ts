/**
 * Site configuration
 */
export const siteConfig = {
  name: 'Aurex PDF Editor',
  description: 'Aurex PDF Editor - Professional PDF Tools. Free, Private & Browser-Based. Merge, split, compress, convert, and edit PDF files online without uploading to servers.',
  url: 'https://aurex-pdf-editor.aurex-erp.com',
  ogImage: '/images/og-image.png',
  links: {
    github: 'https://github.com/aurex',
    twitter: 'https://twitter.com/aurex',
  },
  creator: 'Aurex Team',
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
    titleTemplate: '%s | Aurex PDF Editor',
    defaultTitle: 'Aurex PDF Editor - Professional PDF Tools',
    twitterHandle: '@aurex',
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
