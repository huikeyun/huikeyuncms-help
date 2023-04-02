/*
 * Copyright (c) 2023. 慧科云
 * 此源代码根据 MIT 许可证进行许可，该许可证位于此源代码树根目录中的 LICENSE 文件中。
 * 最后修改时间：2023/4/2 下午4:36
 */
// @ts-check
// 注意：类型注释允许类型检查和 IDE 自动完成

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: '慧科云CMS帮助文档', // 网站标题。
  tagline: '著作权登记号：2022SR1480776', // 网站的标语。
  favicon: 'favicon.ico', // 必须是可以在链接的 href 中使用的 URL。

  url: 'https://help.13aq.com', // 在此处设置您网站的生产网址
  baseUrl: '/', // 站点的路径名; 对于 GitHub 页面部署，它通常是 <projectName>

  // GitHub 页面部署配置。
  // 如果您不使用 GitHub 页面，则不需要这些页面。
  // organizationName: 'facebook', // 通常是您的 GitHub 组织用户名。
  // projectName: 'docusaurus', // 通常是您的存储库名称。

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 用于本地化站点的 i18n 配置对象。
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'], // 站点上部署的区域设置列表。
    path: 'i18n', // 所有区域设置文件夹都相对于的根文件夹。
  },
  presets: [
    [
      'classic',
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          path: 'docs', // 文档内容目录的文件系统路径，相对于站点目录。
          routeBasePath: '/', // 站点文档部分的 URL 前缀。
          sidebarPath: require.resolve('./sidebars.js'), // 请将其更改为您的存储库。
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      // 元图像
      image: 'img/docusaurus-social-card.jpg',

      // 元数据
      metadata: [
        {
          name: 'keywords',
          content: '慧科云CMS, 帮助文档, 内容管理系统',
        },
        {
          name: 'description',
          content: '慧科云内容管理系统的帮助文档',
        },
      ],

      // 导航栏
      navbar: {
        title: '慧科云CMS文档', // 导航栏的标题

        // 徽标对象的自定义
        logo: {
          alt: '慧科云CMS帮助文档', // 徽标图像的 Alt 标记。
          src: 'img/logo.svg', // 浅色模式下徽标图像的网址
          srcDark: 'img/logo.svg', // 在深色模式下使用的备用图像 URL。
        },

        // 导航栏项
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left', // 此项应显示在导航栏的一侧
            label: '文档', // 要为此项目显示的名称
          },
          // {to: 'blog', label: 'Blog', position: 'left'}, // 请保持右侧的 GitHub 链接以保持一致性。
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'dropdown',
            label: '社区',
            position: 'right',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com',
              },
              // ... more items
            ],
          },
        ],
      },

      // 页脚
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Style Guide',
                href: 'https://docusaurus.io',
              },
              {
                label: 'Second Doc',
                href: 'https://docusaurus.community/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
          {
            title: 'Legal', // 请不要删除隐私和条款，这是法律要求。
            items: [
              {
                label: '隐私',
                href: 'https://opensource.fb.com/legal/privacy/',
              },
              {
                label: '条款',
                href: 'https://opensource.fb.com/legal/terms/',
              },
              {
                label: '数据政策',
                href: 'https://opensource.fb.com/legal/data-policy/',
              },
              {
                label: 'Cookie 政策',
                href: 'https://opensource.fb.com/legal/cookie-policy/',
              },
            ],
          },
        ],
        logo: {
          // 此默认值包括正面和负面版本，允许根据您网站的样式适当使用。
          alt: 'Meta Open Source Logo',
          src: '/img/meta_opensource_logo_negative.svg',
          href: 'https://opensource.fb.com',
        }, // 请不要删除演职员表，帮助宣传纪录片:)
        copyright: `Copyright © ${new Date().getFullYear()} 慧科云, Inc. Built with Docusaurus.`,
      },

      // 图像缩放插件
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
        config: {},
      },
    }),

  // 插件
  plugins: [
    // 图像缩放插件
    'docusaurus-plugin-image-zoom',
  ],
};

module.exports = config;
