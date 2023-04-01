const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

const config = {
    // 网站标题。
    title: '慧科云CMS文档',

    // 网站网址。 你可以把它看作是顶级主机名。
    url: 'https://help.13aq.com',

    // 站点的 base URL。 可以被看作是主机名后的路径。
    baseUrl: '/',

    // 您的网站网站图标的路径;
    // 必须是可以在链接的 href 中使用的 URL。
    favicon: 'img/favicon.ico',

    // 允许自定义 URL/链接末尾是否存在尾部斜杠，以及如何生成静态 HTML 文件。
    trailingSlash: undefined,

    // 用于本地化站点的 i18n 配置对象。
    i18n: {
        // 没有其名称的区域设置将用于标记docusaurus start--locale<link hrefLang="x-default">
        defaultLocale: 'zh-Hans',

        // 站点上部署的区域设置列表。
        locales: [
            'en',
            'zh-Hans'
        ],

        // 所有区域设置文件夹都相对于的根文件夹。
        path: 'i18n',

        // 每个区域设置的单独选项。
    },

    // 此选项添加到每个页面，以告诉搜索引擎避免将您的网站编入索引。
    noIndex: false, // 默认为 'false'

    // 检测到任何断开的链接时的行为。
    onBrokenLinks: 'throw',

    // 检测到任何断开的 Markdown 链接时的行为
    onBrokenMarkdownLinks: 'throw',

    // 检测到任何重复路由时的行为。
    onDuplicateRoutes: 'throw',

    // 网站的标语。
    tagline: '著作权登记号：2022SR1480776',

    // 拥有仓库的 GitHub 用户或组织。
    // organizationName: 'facebook',

    // GitHub 存储库的名称。
    // projectName: 'docusaurus',

    // 要将静态文件部署到的分支的名称。
    // deploymentBranch: 'gh-pages',

    // 服务器的主机名。
    // githubHost: 'github.com',

    // 服务器的端口。
    // githubPort: '22',

    // 预设配置
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                // 调试在开发中默认为 true，在生产中默认为 false。
                debug: undefined,

                // 全局样式。
                theme: {
                    customCss: [require.resolve('./src/css/custom.scss')],
                },

                // 文档内容插件（false 表示禁用）
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
                    include: [
                        '**/*.md',
                        '**/*.mdx'
                    ],

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
                    sidebarCollapsed: false,

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
                    //docLayoutComponent: '@theme/DocPage',

                    // 文档主容器，包括了目录、页面导航等
                    docItemComponent: '@theme/DocItem',

                    // 标签列表页的根组件
                    docTagsListComponent: '@theme/DocTagsListPage',

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
                    /*onlyIncludeVersions: [
                        'current',
                        '1.0.0',
                    ],*/

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

                    // 备注插件传递给 MDX。
                    remarkPlugins: [math],

                    // Rehype 插件传递给 MDX。
                    rehypePlugins: [
                        [
                            katex,
                            {strict: false}
                        ],
                    ],

                    beforeDefaultRemarkPlugins: [],
                    beforeDefaultRehypePlugins: [],
                },

                // 博客内容插件（false 表示禁用）
                blog: false,

                // 页面内容插件 （false 表示禁用）
                pages: {
                    // 文件系统上相对于站点目录的数据路径。此目录中的组件将自动转换为页面。
                    path: 'src/pages',

                    // 您网站的网页部分的网址路由。不要包含尾部斜杠。
                    routeBasePath: '/',

                    // 将包含并处理匹配的文件。
                    include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],

                    // 	不会为匹配文件创建路由。
                    exclude: [
                        '**!/_*.{js,jsx,ts,tsx,md,mdx}',
                        '**!/_*/**',
                        '**/*.test.{js,jsx,ts,tsx}',
                        '**/__tests__/**',
                    ],

                    // 每个 MDX 页面使用的组件。
                    mdxPageComponent: '@theme/MDXPage',

                    // 	备注插件传递给 MDX。
                    remarkPlugins: [math],

                    // 	Rehype 插件传递给 MDX。
                    rehypePlugins: [
                        [
                            katex,
                            {strict: false}
                        ],
                    ],

                    // 	在默认文档龙备注插件之前传递给 MDX 的自定义备注插件。
                    beforeDefaultRemarkPlugins: [],

                    //	自定义 Rehype 插件在默认 Docusaurus Rehype 插件之前传递给 MDX。
                    beforeDefaultRehypePlugins: [],
                },

                // 站点地图插件（false 表示禁用）
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/tags/**'],
                    filename: 'sitemap.xml',
                },

                // 谷歌标签插件（仅在明确指定时启用）
                gtag: false,

                // 将传递给@docusaurusplugin-google-tag-manager（仅在明确指定时启用）
                googleTagManager: {
                    // 跟踪代码管理器容器 ID
                    containerId: 'GTM-KNGLGM9',
                },
            },
        ],
    ], // 用于自定义网站 UI 的主题配置对象，如导航栏和页脚。
    themeConfig: {
        docs: {
            sidebar: {
                hideable: false,
                autoCollapseCategories: false,
            },
        },

        // 颜色模式
        colorMode: {
            // 用户首次访问网站时的颜色模式。
            defaultMode: 'light',

            // 隐藏导航栏中的开关。
            disableSwitch: false,

            // 是否使用媒体查询，使用用户系统首选项，而不是硬编码。
            respectPrefersColorScheme: true,
        },

        // 元图像
        image: 'img/docusaurus-social-card.jpg',

        // 元数据
        metadata: [
            {
                name: 'keywords',
                content: '慧科云, CMS文档'
            },
            {
                name: 'description',
                content: '慧科云内容管理系统的帮助文档'
            },
        ],

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
            // 导航栏的标题。
            title: '慧科云CMS文档',

            // 徽标对象的自定义。
            logo: {
                // 徽标图像的 Alt 标记。
                alt: '慧科云CMS文档',

                // 徽标图像的网址。
                src: 'img/logo.svg',

                // 在深色模式下使用的备用图像 URL。
                srcDark: 'img/logo.svg',

                // 单击徽标时导航到的链接。
                href: 'https://help.13aq.com/',

                // 图像宽度
                width: 32,

                // 图像高度
                height: 32,

                // 链接的属性
                target: '_self',

                // 应用于图像的 CSS 类。
                className: 'custom-navbar-logo-class',

                // 应用于图像的 CSS 类。
                // style: {border: 'solid red'},
            },

            // 导航栏项。
            items: [
                {
                    // 要为此项目显示的名称。
                    label: '文档',

                    // 客户端路由，用于在网站内导航。
                    // 只应使用 'to' 或 'href' 中的一个
                    // href: 'https://www.facebook.com',
                    to: '/docs/新手入门/慧科云CMS介绍',

                    // 此项应显示在导航栏的一侧。
                    position: 'left',

                    // 自定义 CSS 类
                    className: 'slide-class',
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
                // 将此项目的类型设置为搜索栏。
                {
                    type: 'search',
                    position: 'right',
                },
                /*{
                    type: 'docsVersionDropdown',
                    position: 'right',
                },*/
                /*{
                    type: 'localeDropdown',
                    position: 'right',
                },*/
            ],
        },

        // 主题
        prism: {
            // 浅色模式主题
            theme: lightCodeTheme,

            // 暗黑模式主题
            darkTheme: darkCodeTheme,

            // 默认语言
            defaultLanguage: 'Markup',
        },

        // 页脚
        footer: {
            // 徽标对象的自定义。
            logo: {
                alt: 'Meta Open Source Logo',
                src: 'img/meta_oss_logo.png',
                href: 'https://opensource.fb.com',
                width: 160,
                height: 51,
            }, // 要显示在底部的版权消息，也支持自定义 HTML。
            // 你也可以在这里放自己的HTML
            copyright: `Copyright © ${new Date().getFullYear()} 慧科云CMS文档`,
            style: 'dark',
            links: [
                {
                    label: '粤ICP备2022065970号-1',
                    href: 'https://beian.miit.gov.cn/',
                },
                {
                    label: '基于 Docusaurus 构建',
                    href: 'https://twitter.com/docusaurus',
                },
            ],
        },

        // 目录
        tableOfContents: {
            // 目录中显示的最低标题级别。
            minHeadingLevel: 2,

            // 目录中显示的最大标题级别。
            maxHeadingLevel: 5,
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
    },
    plugins: [
        // 图像缩放插件
        'docusaurus-plugin-image-zoom',
        'docusaurus-plugin-sass'
    ],
}

module.exports = config;
