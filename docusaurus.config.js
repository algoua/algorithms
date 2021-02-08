const remarkAbbr = require('remark-abbr')
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

module.exports = {
  title: 'Algoua',
  tagline: 'Алгоритмічні навчальні матеріали',
  url: 'https://algoua.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'algoua',
  projectName: 'algoua',
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    navbar: {
      title: 'Algoua',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'algorithms/',
          activeBasePath: 'algorithms',
          label: 'Алгоритми',
          position: 'left',
        },
        {
          to: 'courses/',
          activeBasePath: 'courses',
          label: 'Курси',
          position: 'left',
        },
        {
          href: 'https://github.com/algoua/algoua',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Категорії',
          items: [
            {
              label: 'Алгоритми',
              to: 'algorithms/',
            },
            {
              label: 'Курси',
              to: 'courses/',
            },
          ],
        },
        {
          title: 'Більше',
          items: [
            {
              label: 'Зв\'язатися',
              href: 'https://github.com/algoua/algoua/issues/new',
            },
            {
              label: 'Як запропонувати зміни чи додати нову статтю?',
              href: 'https://github.com/algoua/algoua',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Algoua<br/>
                  Logo icon made by <a href="https://www.flaticon.com/authors/becris" title="Becris" class="footer__link-item">Becris</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [remarkAbbr, remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateTime: true,
          editUrl: 'https://github.com/algoua/algoua/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};