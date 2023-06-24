// import path from 'path'
import { defaultTheme } from 'vuepress'
import navbar from './navbar'
import sidebar from './sidebar'
import { demoblockPlugin } from 'vuepress-plugin-demoblock-plus'
import Webpack from 'webpack'
import bodyParser from 'body-parser'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
const httpRequest = require("../../mock/http.js");

export default{
  title: "Vue3.x学习笔记",
  description: "风浪没平息 我宣告奔跑的意义",
  base: "/web-vue3/", // 部署站点的基础路径
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  repo: "https://github.com/zhoubichuan/web-vue", // 源码地址
  logo: 'favicon.png', //文件在public文件夹内

  port: 3009,
  // head: [["script", { src: "/dll/vendor.dll.js" }]],
  beforeDevServer(app, server, compiler) {
    // app.use(bodyParser?.json())
    // app.use(bodyParser?.urlencoded({ extended: false }))
  
    httpRequest(app);
  },
  // alias: {
  //   "@": path.resolve(__dirname, "../../src/"),
  //   vue$: "vue/dist/vue.esm.js",
  // },
  scss: {
    data: `
    @import "~@/assets/style/var.scss";
    @import "~@/assets/style/variables.scss";
    @import "~@/assets/style/reset.scss";
    @import "~@/assets/style/mixins.scss";
    `,
  },
  plugins: [
    // 设置环境变量
    // new Webpack.DefinePlugin({
    //   "process.env": {
    //     NODE_ENV: "production",
    //     BASE_API: "/",
    //   },
    // }),
    // new Webpack.DllReferencePlugin({
    //   manifest: require(path.resolve(
    //     __dirname,
    //     "public/dll/vendor-manifest.json"
    //   )),
    //   name: "[name]_[hash]",
    //   context: process.cwd(),
    // }),
    backToTopPlugin(),
    prismjsPlugin(),
    demoblockPlugin({
      scriptImports: ["import * as ElementPlus from 'element-plus'"],
      // locales,
      customClass: 'demoblock-custom',
      theme: 'github-light',
      cssPreprocessor: 'scss',
      customStyleTagName: 'style lang="scss"',
      scriptReplaces: [
        {
          searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
          replaceValue: 'const { defineComponent: _defineComponent } = Vue',
        },
        { searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
        replaceValue: 'const { defineComponent: _defineComponent } = Vue'
      },
      { searchValue: /import ({.*}) from 'element-plus'/g,
        replaceValue: (s, s1) => `const ${s1} = ElementPlus`
      }
      ],
    })
  ],
  dest: "web-vue3", // 指定 vuepress 的输出目录
  markdown: {
    toc: { includeLevel: [2, 3] },
    lineNumbers: true, // 代码块显示行号
  },
  theme: defaultTheme({
    repoLabel: "查看源码", // (查看源码的)组件名称
    docsBranch: "main", // git 源仓库 仓库分支
    docsDir: "src", // 假如文档不是放在仓库的根目录下
    sidebarDepth: 2,
    navbar,
    sidebar,
    editLinkText: '在github上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    notFound:['Not Found','没找到','网页走丢了'],
    backToHome:'返回首页' //404 页面中 返回首页链接的文字。
  }),
};
