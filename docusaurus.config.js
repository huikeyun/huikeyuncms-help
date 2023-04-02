/*
 * Copyright (c) 2023. 慧科云
 * 此源代码根据 MIT 许可证进行许可，该许可证位于此源代码树根目录中的 LICENSE 文件中。
 * 最后修改时间：2023/4/2 下午9:39
 */

/** @type {import("@docusaurus/types").Config} */
const config = {
    title: '慧科云CMS帮助文档', // 网站标题。
    tagline: '著作权登记号：2022SR1480776', // 网站的标语。
    favicon: 'favicon.ico', // 必须是可以在链接的 href 中使用的 URL。
    url: 'https://help.13aq.com', // 在此处设置您网站的生产网址
    baseUrl: '/', // 站点的路径名; 对于 GitHub 页面部署，它通常是 <projectName
    staticDirectories: ['public', 'static'], // 静态资源

    // GitHub 页面部署配置。
    // 如果您不使用 GitHub 页面，则不需要这些页面。
    organizationName: 'huikeyun', // 通常是您的 GitHub 组织用户名。
    projectName: 'huikeyuncms-help', // 通常是您的存储库名称。
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    // themes: ['@docusaurus/theme-search-algolia'],
    trailingSlash: false, // 允许自定义 URL/链接末尾是否存在尾部斜杠，以及如何生成静态 HTML 文件。

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
                // 全局样式。
                theme: {
                    customCss: [require.resolve('./src/css/custom.scss')],
                },

                // 文档内容插件（false 表示禁用）
                docs: {
                    path: 'docs', // 文档内容目录的文件系统路径，相对于站点目录。
                    routeBasePath: '/', // 站点文档部分的 URL 前缀。
                    sidebarPath: require.resolve('./sidebars.js'), // 请将其更改为您的存储库。
                    sidebarCollapsible: true, // 侧边栏类别是否默认可折叠。
                    sidebarCollapsed: true, // 侧边栏类别是否默认被折叠。
                    docLayoutComponent: '@theme/DocPage', // 每个文档页面的根布局组件。
                    docItemComponent: '@theme/DocItem', // 文档主容器，包括了目录、页面导航等
                    docTagsListComponent: '@theme/DocTagsListPage', // 标签列表页的根组件
                    showLastUpdateAuthor: true, // 是否显示最后更新文档的作者。
                    showLastUpdateTime: true, // 是否显示最后更新文档的时间。
                    breadcrumbs: true, // 在文档页面上启用或禁用面包屑导航。
                },

                // 文档内容插件（false 表示禁用）
                blog: false,

                // 站点地图插件（false 表示禁用）
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/tags/**'],
                    filename: 'sitemap.xml',
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

                    // {to: 'blog', label: 'Blog', position: 'left'},

                    // 请保持右侧的 GitHub 链接以保持一致性。
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
                            }, // ... more items
                        ],
                    },
                ],
            },

            // 页脚
            footer: {
                style: 'dark',
                links: [
                    {
                        title: '学习',
                        items: [
                            {
                                label: '风格指南',
                                href: 'https://docusaurus.io',
                            },
                            {
                                label: '第二个文档',
                                href: 'https://docusaurus.community/',
                            },
                        ],
                    },
                    {
                        title: '社区',
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
                        title: '更多',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/facebook/docusaurus',
                            },
                        ],
                    },
                    {
                        title: '法律', // 请不要删除隐私和条款，这是法律要求。
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
                copyright: `<p><a href="https://beian.miit.gov.cn/" >粤ICP备2022065970号-1</a></p><p>Copyright © 2020 - ${new Date().getFullYear()} 慧科云 基于 <a href="https://docusaurus.io/" >Docusaurus</a> 构建</p>`,
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

    // Algolia 插件
    /* algolia: {
        // Algolia 提供的应用程序 ID
        appId: 'YOUR_APP_ID',

        // 公共 API 密钥：提交它是安全的
        apiKey: 'YOUR_SEARCH_API_KEY',

        indexName: 'YOUR_INDEX_NAME',

        // 可选：上下文搜索
        contextualSearch: true,

        // 可选：指定导航应通过 window.location 而不是在 history.push 上进行导航的域。当我们的 Algolia 配置抓取多个文档站点并且我们希望使用 window.location.href 导航到它们时很有用。
        externalUrlRegex: 'external\\.com|domain\\.com',

        // 可选：替换来自 Algolia 的部分项目 URL。当使用不同的 baseURL 对多个部署使用相同的搜索索引时很有用。您可以在“from”参数中使用正则表达式或字符串。例如：localhost：3000 vs myCompany.comdocs
        replaceSearchResultPathname: {
            from: '/', // or as RegExp: /\/docs\//
            to: '/',
        },

        // 可选：Algolia 搜索参数
        searchParameters: {},

        // 可选：默认启用的搜索页面的路径（“false”表示禁用它）
        searchPagePath: 'search',

        //... 其他 Algolia 参数
    }, */

    // 插件
    plugins: [
        // 图像缩放插件
        'docusaurus-plugin-image-zoom',

        // Sass/SCSS 插件
        'docusaurus-plugin-sass',
    ],
};

module.exports = config;
