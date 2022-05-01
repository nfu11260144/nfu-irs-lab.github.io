// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// Ref: https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NFU 機器人實驗室',
  tagline: 'NFU Intelligent Robot System Lab.',
  url: 'https://nfu-irs-lab.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/nfu-irs-lab.jpg',
  organizationName: 'nfu-irs-lab', // Usually your GitHub org/user name.
  projectName: 'nfu-irs-lab.github.io', // Usually your repo name.
  deploymentBranch: 'deploy', // The branch for deployment.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/nfu-irs-lab/nfu-irs-lab.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/nfu-irs-lab/nfu-irs-lab.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'NFU I.R.S Lab.',
        logo: {
          alt: 'Site Logo',
          src: 'img/nfu-irs-lab.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文件',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/nfu-irs-lab',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '文件',
                to: '/docs/intro/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/nfu-irs-lab',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Onshape',
                to: 'https://cad.onshape.com/',
              },
              {
                label: '綜合事務管理看板',
                to: 'https://trello.com/b/P0X14upz/irs-lab-%E7%B6%9C%E5%90%88%E4%BA%8B%E5%8B%99%E7%AE%A1%E7%90%86%E7%9C%8B%E6%9D%BF',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NFU I.R.S Lab. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp'], // Ref: https://docusaurus.io/docs/next/markdown-features/code-blocks#supported-languages
      },
    }),
};

module.exports = config;
