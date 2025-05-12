import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Personal Portfolio',
  tagline: 'Modern professional portfolio built with Docusaurus',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-portfolio-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-github-username', // Usually your GitHub org/user name.
  projectName: 'personal-portfolio', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  // Required for SCSS support
  plugins: ['docusaurus-plugin-sass'],
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          editUrl: 'https://github.com/your-github-username/personal-portfolio/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          editUrl: 'https://github.com/your-github-username/personal-portfolio/tree/main/',
        },
        theme: {
          customCss: ['./src/scss/custom.scss'], // Updated to use custom.scss instead of styles.scss
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/my-avatar.png',
    
    // Disable default navigation and footer
    navbar: {
      // Hide the navbar
      hideOnScroll: true,
      style: 'dark',
      title: 'Personal Portfolio',
      logo: {
        alt: 'Portfolio Logo',
        src: 'img/logo.ico',
      },
      items: [],  // Empty array to remove navbar items
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Personal Portfolio. Built with Docusaurus.`,
      links: [],  // Empty array to remove footer links
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
