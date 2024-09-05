import{_ as a,c as r,a3 as t,o as l}from"./chunks/framework.ximtt7Xo.js";const d=JSON.parse('{"title":"Vue3.x 全家桶","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":0,"meta":[{"name":"description","content":"个人总结的vuepress学习技术文档-语法"},{"name":"keywords","content":"vuepress,最新技术文档,vuepress语法,markdown语法"}]},"headers":[],"relativePath":"base/vue3.x/1.index.md","filePath":"base/vue3.x/1.index.md","lastUpdated":1719210487000}'),o={name:"base/vue3.x/1.index.md"};function s(i,e,n,u,c,h){return l(),r("div",null,e[0]||(e[0]=[t('<h1 id="vue3-x-全家桶" tabindex="-1">Vue3.x 全家桶 <a class="header-anchor" href="#vue3-x-全家桶" aria-label="Permalink to &quot;Vue3.x 全家桶&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">前言</p><p>这里将介绍 vue3.x 项目开发所需要的技术选型，以及相关基础知识的介绍</p></div><h2 id="_1-脚手架" tabindex="-1">1.脚手架 <a class="header-anchor" href="#_1-脚手架" aria-label="Permalink to &quot;1.脚手架&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">前言</p><p><strong>vue-cli3.x，<a href="https://cli.vuejs.org/zh/" target="_blank" rel="noreferrer">参考文档</a></strong></p></div><h3 id="_1-1-vuecli" tabindex="-1">1.1 VueCLI <a class="header-anchor" href="#_1-1-vuecli" aria-label="Permalink to &quot;1.1 VueCLI&quot;">​</a></h3><ul><li>vue create demo</li><li>npm run serve</li><li>npm install</li></ul><h2 id="_2-vue3-x-全家桶" tabindex="-1">2.vue3.x 全家桶 <a class="header-anchor" href="#_2-vue3-x-全家桶" aria-label="Permalink to &quot;2.vue3.x 全家桶&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">前言</p><p><strong>vue3.x：渐进式 js 框架，<a href="https://v3.cn.vuejs.org/" target="_blank" rel="noreferrer">参考文档</a></strong></p><p><strong>vue-router4.x：vue 官方路由管理器，<a href="https://next.router.vuejs.org/zh/" target="_blank" rel="noreferrer">参考文档</a></strong></p><p><strong>vuex4.x：vue 状态管理器，<a href="https://next.vuex.vuejs.org/zh/index.html" target="_blank" rel="noreferrer">参考文档</a></strong></p></div><h3 id="_2-1vue3-x" tabindex="-1">2.1vue3.x <a class="header-anchor" href="#_2-1vue3-x" aria-label="Permalink to &quot;2.1vue3.x&quot;">​</a></h3><h4 id="_2-1-1-创建应用-main-js" tabindex="-1">2.1.1 创建应用(main.js) <a class="header-anchor" href="#_2-1-1-创建应用-main-js" aria-label="Permalink to &quot;2.1.1 创建应用(main.js)&quot;">​</a></h4><ul><li>Vue.createApp()</li><li>app.use()</li><li>app.mount()</li></ul><h4 id="_2-1-2-模板语法-template" tabindex="-1">2.1.2 模板语法(template) <a class="header-anchor" href="#_2-1-2-模板语法-template" aria-label="Permalink to &quot;2.1.2 模板语法(template)&quot;">​</a></h4><ul><li>teleport</li><li>插值表达式</li><li>指令 <ul><li>v-html</li><li>v-bind(:)</li><li>v-once</li><li>v-if</li><li>v-show</li><li>v-on(@)</li><li>ref</li></ul></li></ul><h4 id="_2-1-3-setup" tabindex="-1">2.1.3 setup <a class="header-anchor" href="#_2-1-3-setup" aria-label="Permalink to &quot;2.1.3 setup&quot;">​</a></h4><ul><li>ref</li><li>reactive</li><li>readonly</li><li>toRefs</li><li>computed</li><li>watch</li><li>watchEffect</li><li>provide/inject</li></ul><h4 id="_2-1-4-生命周期" tabindex="-1">2.1.4 生命周期 <a class="header-anchor" href="#_2-1-4-生命周期" aria-label="Permalink to &quot;2.1.4 生命周期&quot;">​</a></h4><ul><li>setup</li><li>onBeforeMount</li><li>onMounted</li><li>onBeforeUpdate</li><li>onUpdated</li><li>onBeforeUnmount</li><li>onUnmounted</li><li>onErrorCaptured</li><li>onRenderTracked</li><li>onRenderTriggered</li></ul><h2 id="_3-ui-组件库" tabindex="-1">3.UI 组件库 <a class="header-anchor" href="#_3-ui-组件库" aria-label="Permalink to &quot;3.UI 组件库&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">前言</p><p><strong>element plus，饿了么推出的 UI 组件库，<a href="https://element-plus.gitee.io/zh-CN/" target="_blank" rel="noreferrer">参考文档</a></strong></p></div><h2 id="_4-工具类-参考-vue2-x-部分" tabindex="-1">4.工具类（参考 vue2.x 部分） <a class="header-anchor" href="#_4-工具类-参考-vue2-x-部分" aria-label="Permalink to &quot;4.工具类（参考 vue2.x 部分）&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">前言</p><p><strong>axios，基于 promise 的网络请求库，<a href="http://www.axios-js.com/zh-cn/docs/" target="_blank" rel="noreferrer">参考文档</a></strong></p><p><strong>Moment.js，JavaScript 日期处理类库，<a href="http://momentjs.cn/" target="_blank" rel="noreferrer">参考文档</a></strong></p><p><strong>lodash，一个一致性、模块化、高性能的 JavaScript 实用工具库，<a href="https://www.lodashjs.com/" target="_blank" rel="noreferrer">参考文档</a></strong></p><p><strong>vue-devtools，是专门调试 vue 项目的调试工具<a href="https://github.com/vuejs/devtools" target="_blank" rel="noreferrer">查看工具</a></strong></p><p><strong>Vue performance Devtool，是专门检查 vue 组件性能的测试工具<a href="https://github.com/vuejs/devtools" target="_blank" rel="noreferrer">查看工具</a></strong></p><p><strong>VueUse，基本 Vue 组合实用程序的集合，<a href="http://www.axios-js.com/zh-cn/docs/" target="_blank" rel="noreferrer">参考文档</a></strong></p></div><h2 id="_5-css-预处理器-参考-vue2-x-部分" tabindex="-1">5.css 预处理器（参考 vue2.x 部分） <a class="header-anchor" href="#_5-css-预处理器-参考-vue2-x-部分" aria-label="Permalink to &quot;5.css 预处理器（参考 vue2.x 部分）&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">前言</p><p><strong>SASS，世界上最成熟、最稳定、最强大的专业级 CSS 扩展语言！，<a href="https://www.sass.hk/" target="_blank" rel="noreferrer">参考文档</a></strong></p><p><strong>Less，是一门向后兼容的 CSS 扩展语言，<a href="https://less.bootcss.com/" target="_blank" rel="noreferrer">参考文档</a></strong></p><p><strong>Stylus，富于表现力、动态的、健壮的 CSS，<a href="https://www.stylus-lang.cn/" target="_blank" rel="noreferrer">参考文档</a></strong></p></div><h2 id="_6-代码校验-参考-vue2-x-部分" tabindex="-1">6.代码校验（参考 vue2.x 部分） <a class="header-anchor" href="#_6-代码校验-参考-vue2-x-部分" aria-label="Permalink to &quot;6.代码校验（参考 vue2.x 部分）&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">前言</p><p><strong>eslint，可组装的 JavaScript 和 JSX 检查工具，<a href="https://eslint.bootcss.com" target="_blank" rel="noreferrer">参考文档</a></strong></p><p><strong>vue3 风格指南，官方的 Vue 特有代码的风格指南，<a href="https://v3.cn.vuejs.org/style-guide/" target="_blank" rel="noreferrer">参考文档</a></strong></p></div>',25)]))}const v=a(o,[["render",s]]);export{d as __pageData,v as default};
