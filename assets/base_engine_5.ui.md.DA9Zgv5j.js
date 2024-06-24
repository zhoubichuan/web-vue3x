import{_ as a,c as e,o as s,aR as i}from"./chunks/framework.DScHNprs.js";const E=JSON.parse('{"title":"五.UI 框架","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":3,"meta":[{"name":"description","content":"个人总结的vuepress学习技术文档-语法"},{"name":"keywords","content":"vuepress,最新技术文档,vuepress语法,markdown语法"}]},"headers":[],"relativePath":"base/engine/5.ui.md","filePath":"base/engine/5.ui.md","lastUpdated":1718897544000}'),t={name:"base/engine/5.ui.md"},l=i('<h1 id="五-ui-框架" tabindex="-1">五.UI 框架 <a class="header-anchor" href="#五-ui-框架" aria-label="Permalink to &quot;五.UI 框架&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">前言</p><p>如果你想快速开发一款应用，并且不想过多的操心页面 <code>UI</code> 的内容，比如你不想去实现一个下拉 UI 组件或设计一个 <code>icon</code> 图标，那么我们可以使用现有的别人做好的 UI 库和图标库实现快速开发。</p><ul><li>UI 库是脱离 JS 框架外的一种 “工具”，相比 JS 框架可以帮助你实现各种业务逻辑，其更关注于页面 UI 层面的实现，比如提供和业务无关的弹窗、导航、表单组件等，为项目 UI 层面的功能提供解决方案。</li></ul></div><h2 id="_1-vue-3-x-中" tabindex="-1">1.Vue 3.x 中 <a class="header-anchor" href="#_1-vue-3-x-中" aria-label="Permalink to &quot;1.Vue 3.x 中&quot;">​</a></h2><p>ElementPlus，适用于 Vue 3.x<a href="http://element-cn.eleme.io/#/zh-CN" target="_blank" rel="noreferrer">参考文档</a></p><h3 id="_1-1-主题设置" tabindex="-1">1.1 主题设置 <a class="header-anchor" href="#_1-1-主题设置" aria-label="Permalink to &quot;1.1 主题设置&quot;">​</a></h3><h3 id="_1-2-全局配置" tabindex="-1">1.2 全局配置 <a class="header-anchor" href="#_1-2-全局配置" aria-label="Permalink to &quot;1.2 全局配置&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Element, { size: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;small&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, zIndex: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_1-3-全局文案" tabindex="-1">1.3 全局文案 <a class="header-anchor" href="#_1-3-全局文案" aria-label="Permalink to &quot;1.3 全局文案&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">locale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;zh-cn&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">local,aaa:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;国际化字段&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_1-4-组件的二次封装" tabindex="-1">1.4 组件的二次封装 <a class="header-anchor" href="#_1-4-组件的二次封装" aria-label="Permalink to &quot;1.4 组件的二次封装&quot;">​</a></h3><ul><li>button 防抖</li><li>table+page 封装在一起</li><li>form 表单封装</li></ul><h2 id="_2-vue-3-x-中" tabindex="-1">2.Vue 3.x 中 <a class="header-anchor" href="#_2-vue-3-x-中" aria-label="Permalink to &quot;2.Vue 3.x 中&quot;">​</a></h2><p>Element Plus，适用于 Vue 3.x<a href="https://element-plus.gitee.io/zh-CN/" target="_blank" rel="noreferrer">参考文档</a></p><h3 id="_2-1-主题设置" tabindex="-1">2.1 主题设置 <a class="header-anchor" href="#_2-1-主题设置" aria-label="Permalink to &quot;2.1 主题设置&quot;">​</a></h3><h3 id="_2-2-全局配置" tabindex="-1">2.2 全局配置 <a class="header-anchor" href="#_2-2-全局配置" aria-label="Permalink to &quot;2.2 全局配置&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Element, { size: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;small&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, zIndex: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-3-组件的二次封装" tabindex="-1">2.3 组件的二次封装 <a class="header-anchor" href="#_2-3-组件的二次封装" aria-label="Permalink to &quot;2.3 组件的二次封装&quot;">​</a></h3><ul><li>button（默认添加防抖）</li><li>table</li><li>form</li></ul><div class="tip custom-block"><p class="custom-block-title">总结</p><p>了解 vue 项目创建过程以及其目录结构，在开发中需要注意的地方，能够更好地规范前端开发</p></div>',19),n=[l];function h(r,p,d,o,k,c){return s(),e("div",null,n)}const b=a(t,[["render",h]]);export{E as __pageData,b as default};
