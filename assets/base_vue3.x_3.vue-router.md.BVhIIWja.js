import{_ as a,o as e,c as i,a4 as n}from"./chunks/framework.P-dDI4ot.js";const d=JSON.parse('{"title":"三.Vue-Router 4.x","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":2,"meta":[{"name":"description","content":"个人总结的vuepress学习技术文档-语法"},{"name":"keywords","content":"vuepress,最新技术文档,vuepress语法,markdown语法"}]},"headers":[],"relativePath":"base/vue3.x/3.vue-router.md","filePath":"base/vue3.x/3.vue-router.md","lastUpdated":1718897544000}'),t={name:"base/vue3.x/3.vue-router.md"};function r(l,s,p,h,k,o){return e(),i("div",null,s[0]||(s[0]=[n('<h1 id="三-vue-router-4-x" tabindex="-1">三.Vue-Router 4.x <a class="header-anchor" href="#三-vue-router-4-x" aria-label="Permalink to &quot;三.Vue-Router 4.x&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">前言</p><p>补充一些官方文档中没有的，但是实际开发中最好需要了解的内容</p></div><ul><li>vue-router 4 的新功能</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 守卫不再需要next，并且支持async</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">router.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">beforeEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // canUserAccess() returns `true` or `false`</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> canUserAccess</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(to)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="知识结构" tabindex="-1">知识结构 <a class="header-anchor" href="#知识结构" aria-label="Permalink to &quot;知识结构&quot;">​</a></h2><ul><li>路由对象</li></ul>',6)]))}const c=a(t,[["render",r]]);export{d as __pageData,c as default};