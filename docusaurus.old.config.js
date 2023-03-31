// @ts-check
// 注意：类型注释允许类型检查和 IDE 自动完成
// noinspection JSUnusedLocalSymbols,JSUnresolvedReference

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '慧科云CMS文档',
  staticDirectories: ['public', 'static'],
  tagline: '',
  favicon: 'img/favicon.ico',
  // 在此处设置您网站的生产网址
  url: 'https://help.13aq.com',
  // 设置 <baseUrl> 提供站点或 GitHub 页面部署的路径名，它通常是 '/<projectName>/'
  baseUrl: '/',
  // GitHub 页面部署配置。如果您不使用 GitHub 页面，则不需要这些页面。
  organizationName: '', // 通常是您的 GitHub 组织用户名。
  projectName: '', // 通常是您的存储库名称。
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // 即使您不使用内部化，也可以使用此字段来设置有用的元数据，例如 html lang。例如，如果您的网站是中文网站，您可能希望将 'en' 替换为 'zh-Hans'。
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // 文档内容目录的文件系统路径，相对于站点目录。
          path: 'docs',

          // 编辑文档的基础 URL。
          // 简单用例: string editUrl
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          // 高级用例: functional editUrl
          //editUrl: ({versionDocsDirPath, docPath}) => `https://github.com/facebook/docusaurus/edit/main/website/${versionDocsDirPath}/${docPath}`,

          // 编辑 URL 会指向本地化的文件，而不是原始的未翻译文件。
          editLocalizedFiles: false,

          // 编辑 URL 会永远指向当前版本文档而不是历史版本。
          editCurrentVersion: false,

          // 站点文档部分的 URL 前缀。
          routeBasePath: 'docs',

          // 站点标签列表部分的 URL 前缀。
          tagsBasePath: 'tags',

          // 相对于内容路径的 glob 模式列表，匹配到的 Markdown 文件会被构建。
          include: ['**/*.md', '**/*.mdx'],

          // Glob 模式列表，匹配到的 Markdown 文件会被排除。
          exclude: [
            '**!/_*.{js,jsx,ts,tsx,md,mdx}',
            '**!/_*!/!**',
            '**!/!*.test.{js,jsx,ts,tsx}',
            '**!/__tests__/!**',
          ],

          // 侧边栏配置的路径。
          sidebarPath: 'sidebars.js',

          // 侧边栏类别是否默认可折叠。
          sidebarCollapsible: true,

          // 侧边栏类别是否默认被折叠。
          sidebarCollapsed: true,

          // 用于将类型的侧边栏项目替换为实际侧边栏项目（文档、类别、链接等）的功能。
          /*async sidebarItemsGenerator({
                                        defaultSidebarItemsGenerator,
                                        numberPrefixParser,
                                        item,
                                        version,
                                        docs,
                                        isCategoryIndex,
                                      }) {
            // 使用提供的数据生成自定义侧边栏切片
            return [
              {type: 'doc', id: 'intro'},
              {
                type: 'category',
                label: '教程',
                items: [
                  {type: 'doc', id: 'tutorial1'},
                  {type: 'doc', id: 'tutorial2'},
                ],
              },
            ];
          },*/

          // 自定义从文件名中提取数字前缀的逻辑
          /*numberPrefixParser(filename) {
            // 实现您自己的逻辑以提取潜在的数字前缀
            const numberPrefix = findNumberPrefix(filename);
            // 找到前缀：使用清理后的文件名返回
            if (numberPrefix) {
              return {
                numberPrefix,
                filename: filename.replace(prefix, ''),
              };
            }
            // 未找到数字前缀
            return {numberPrefix: undefined, filename};
          },*/

          // 每个文档页面的根布局组件。
          // docLayoutComponent: '@theme/DocPage',

          // 文档主容器，包括了目录、页面导航等
          // docItemComponent: '@theme/DocItem',

          // 标签列表页的根组件
          // docTagsListComponent: '@theme/DocTagsListPage',

          // 是否显示最后更新文档的作者。
          showLastUpdateAuthor: true,

          // 是否显示最后更新文档的时间。
          showLastUpdateTime: true,

          // 在文档页面上启用或禁用面包屑导航。
          breadcrumbs: true,

          // 即使存在多个版本，也明确禁用分版功能。
          disableVersioning: false,

          // 包含文档的当前版本。
          includeCurrentVersion: true,

          // 文档类的导航栏项会默认显示并跳转到的文档版本。
          lastVersion: undefined,

          // 只包含所有可用版本中的一个子集。
          // onlyIncludeVersions: ['current', '1.0.0', '2.0.0'],

          // 独立自定义每个版本的属性。
          /*versions: {
            current: {
              label: 'Android SDK v2.0.0 (WIP)',
              path: 'android-2.0.0',
              banner: 'none',
            },
            '1.0.0': {
              label: 'Android SDK v1.0.0',
              path: 'android-1.0.0',
              banner: 'unmaintained',
            },
          },*/

          // remarkPlugins: [require('remark-math')],
          // rehypePlugins: [],
          // beforeDefaultRemarkPlugins: [],
          // beforeDefaultRehypePlugins: [],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  /* themes: ['@docusaurus/theme-search-algolia'],*/
  themeConfig:
      {
        metadata: [
          {name: 'keywords', content: '慧科云, CMS文档'},
          {name: 'description', content: '慧科云内容管理系统的帮助文档'},
        ]
        ,
        // 颜色模式
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
          respectPrefersColorScheme: false,
        },
        // 项目元图像
        image: 'img/docusaurus-social-card.jpg',
        // 公告栏
        /*announcementBar: {
          id: 'support_us',
          content:
              'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
          backgroundColor: '#fafbfc',
          textColor: '#091E42',
          isCloseable: false,
        },*/
        // 导航栏
        navbar: {
          title: '慧科云CMS文档',
          logo: {
            alt: 'My Site Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              position: 'left',
              label: '文档',
            },
            /*{
              to: '/blog',
              label: '博客',
              position: 'left',
            },*/
            {
              type: 'search',
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
                  label: 'Tutorial',
                  to: '/docs/intro',
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
                  label: 'Discord',
                  href: 'https://discordapp.com/invite/docusaurus',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/docusaurus',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  to: '/blog',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/facebook/docusaurus',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        // Algolia
        /*algolia: {
          // Algolia 提供的应用程序 ID
          appId: 'YOUR_APP_ID',

          // 公共 API 密钥：提交它是安全的
          apiKey: 'YOUR_SEARCH_API_KEY',

          indexName: 'YOUR_INDEX_NAME',

          // 可选：请参阅下面的文档部分
          contextualSearch: true,

          // 可选：指定导航应通过 window.location 而不是在 history.push 上进行导航的域。当我们的 Algolia 配置抓取多个文档站点并且我们希望使用 window.location.href 导航到它们时很有用。
          externalUrlRegex: 'external\\.com|domain\\.com',

          // 可选：替换来自 Algolia 的部分项目 URL。当使用不同的 baseURL 对多个部署使用相同的搜索索引时很有用。您可以在“from”参数中使用正则表达式或字符串。例如：localhost：3000 vs myCompany.comdocs
          replaceSearchResultPathname: {
            from: '/docs/', // or as RegExp: /\/docs\//
            to: '/',
          },

          // 可选：阿尔戈利亚搜索参数
          searchParameters: {},

          // 可选：默认启用的搜索页面的路径（“false”表示禁用它）
          searchPagePath: 'search',

          //... 其他阿尔戈利亚参数
        },*/
        // 图像缩放插件
        imageZoom: {
          // 要应用插件的CSS选择器，默认为 '.markdown img'
          selector: '.markdown img',
          // 可选的中变焦选项
          // 看: https://www.npmjs.com/package/medium-zoom#options
          options: {
            margin: 24,
            background: '#bada55',
            scrollOffset: 0,
            container: '#zoom-container',
            template: '#zoom-template',
          },
        },
      },
  plugins: [
    'plugin-image-zoom'
  ],
};

module.exports = config;
