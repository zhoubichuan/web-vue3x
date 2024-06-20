import demoblock from './demoblock';
import nav from './nav'
import sidebar from './sidebar'
export default {
    base: "/web-vue3x/", // 部署站点的基础路径
    srcDir: "./",
    outDir: './web-vue3x',
    lang: 'zh-CN',
    title: 'web-vue3.x',    // 标题
    description: '基于vitepress最新版的组件库代码示例插件',    // 描述
    lastUpdated: true, // 上次更新时间
    markdown: {
        headers: {
            level: [0, 0]
        },
        config: (md) => {
            md.use(demoblock)
        }
    },
    themeConfig: {
        nav,
        sidebar,
        algolia: {
            indexName: 'vuejs_cn2',
            appId: 'UURH1MHAF7',
            apiKey: 'c23eb8e7895f42daeaf2bf6f63eb4bf6',
            searchParameters: {
                facetFilters: ['version:v3']
            },
            placeholder: '搜索文档',
            translations: {
                button: {
                    buttonText: '搜索'
                },
                modal: {
                    searchBox: {
                        resetButtonTitle: '清除查询条件',
                        resetButtonAriaLabel: '清除查询条件',
                        cancelButtonText: '取消',
                        cancelButtonAriaLabel: '取消'
                    },
                    startScreen: {
                        recentSearchesTitle: '搜索历史',
                        noRecentSearchesText: '没有搜索历史',
                        saveRecentSearchButtonTitle: '保存到搜索历史',
                        removeRecentSearchButtonTitle: '从搜索历史中移除',
                        favoriteSearchesTitle: '收藏',
                        removeFavoriteSearchButtonTitle: '从收藏中移除'
                    },
                    errorScreen: {
                        titleText: '无法获取结果',
                        helpText: '你可能需要检查你的网络连接'
                    },
                    footer: {
                        selectText: '选择',
                        navigateText: '切换',
                        closeText: '关闭',
                        searchByText: '搜索供应商'
                    },
                    noResultsScreen: {
                        noResultsText: '无法找到相关结果',
                        suggestedQueryText: '你可以尝试查询',
                        reportMissingResultsText: '你认为这个查询应该有结果？',
                        reportMissingResultsLinkText: '向我们反馈'
                    }
                }
            },
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/zhoubichuan/web-vue3x/' },
        ],

        // editLink: {
        //     repo: 'vuejs-translations/docs-zh-cn',
        //     text: '在 GitHub 上编辑此页'
        // },

        footer: {
            license: {
                text: '版权声明',
                link: 'https://github.com/zhoubichuan/web-vue3x/'
            },
            copyright: '本中文文档采用 知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议  (CC BY-NC-SA 4.0) 进行许可。'
        }
    }
}