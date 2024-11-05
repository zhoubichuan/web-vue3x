import{_ as d,c as e,a6 as a,o as r}from"./chunks/framework.Cb3YA3gp.js";const p=JSON.parse('{"title":"Vue的组件开发","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":0,"meta":[{"name":"description","content":"个人总结的vuepress学习技术文档-语法"},{"name":"keywords","content":"vuepress,最新技术文档,vuepress语法,markdown语法"}]},"headers":[],"relativePath":"senior/4.component/1.index.md","filePath":"senior/4.component/1.index.md","lastUpdated":1718897544000}'),l={name:"senior/4.component/1.index.md"};function i(o,t,s,n,h,c){return r(),e("div",null,t[0]||(t[0]=[a('<h1 id="vue的组件开发" tabindex="-1">Vue的组件开发 <a class="header-anchor" href="#vue的组件开发" aria-label="Permalink to &quot;Vue的组件开发&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">前言</p><p>了解常见组件的开发思路，项目中有很多二次封装的组件，大体设计思路上都是想通的，当遇到组件相关的问题时，可以直接查看相关组件的源码，从而快速定位问题。</p></div><h2 id="_1-组件特性" tabindex="-1">1.组件特性 <a class="header-anchor" href="#_1-组件特性" aria-label="Permalink to &quot;1.组件特性&quot;">​</a></h2><ul><li><p>从不同角度分析组件的特性</p><table tabindex="0"><thead><tr><th>构成</th><th>易变性</th><th>影响因素</th></tr></thead><tbody><tr><td>结构（视觉）</td><td>不易变</td><td>内容结构、布局类样式</td></tr><tr><td>结构（内容）</td><td>较易变</td><td>生成 html 的 js 库/框架的源码、平台限定的视图结构描述语言</td></tr><tr><td>表现（主题风格）</td><td>很易变</td><td>GUI 设计人员的审美和想法、非布局类样式、图标与图片</td></tr><tr><td>行为（交互逻辑）</td><td>不易变</td><td>交互设计人员的想法</td></tr><tr><td>行为（业务逻辑）</td><td>很易变</td><td>业务规则</td></tr></tbody></table></li><li><p>组件封装主要就是为了复用相关代码，所以需要重点考虑不易变的部分</p><table tabindex="0"><thead><tr><th>易变等级</th><th>影响因素</th></tr></thead><tbody><tr><td>不易变</td><td>交互方式</td></tr><tr><td>较易变</td><td>源码语法</td></tr><tr><td>很易变</td><td>业务和人</td></tr></tbody></table></li></ul><h2 id="_2-组件分类" tabindex="-1">2.组件分类 <a class="header-anchor" href="#_2-组件分类" aria-label="Permalink to &quot;2.组件分类&quot;">​</a></h2><ul><li>原子性 <ul><li>原子组件：不可再分的 ui 组件（按钮、图标、分割线）</li><li>复合组件：由一个以上的原子组件构成（菜单、选项卡、对话框）</li></ul></li><li>通用性 <ul><li>通用组件：一般作为公共组件维护</li><li>专用组件</li></ul></li><li>功能性<table tabindex="0"><thead><tr><th>组件类别</th><th>案例组件</th></tr></thead><tbody><tr><td>一.命令输入</td><td>按钮组件、下拉菜单组件</td></tr><tr><td>二.数据输入</td><td>表单组件、输入框组件、单/复选框组件、级联选择组件、日期拾取器组件、动态渲染组件、动态组件</td></tr><tr><td>三.数据输出</td><td>树组件、列表组件、表格组件</td></tr><tr><td>四.信息展示</td><td>图标组件、加载状态组件、工具提示组件</td></tr><tr><td>五.容器</td><td>手风琴组件、面板组件、选项卡组件、字段集组件</td></tr><tr><td>六.导航</td><td>导航菜单组件、面包屑组件、超链接组件</td></tr><tr><td>七.特殊窗口</td><td>对话框组件、警告提示组件</td></tr></tbody></table></li></ul><h2 id="_3-组件开发" tabindex="-1">3.组件开发 <a class="header-anchor" href="#_3-组件开发" aria-label="Permalink to &quot;3.组件开发&quot;">​</a></h2><p>编写一个 Vue.js 组件，最重要的是设计好它的接口，一个 Vue.js 组件的接口来自三个部分：props、slots、events。</p><h2 id="_4-环境搭建" tabindex="-1">4.环境搭建 <a class="header-anchor" href="#_4-环境搭建" aria-label="Permalink to &quot;4.环境搭建&quot;">​</a></h2><h2 id="_5-组件发布" tabindex="-1">5.组件发布 <a class="header-anchor" href="#_5-组件发布" aria-label="Permalink to &quot;5.组件发布&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">总结</p><p>通过对前端组件的分析，需要重点关注组件中易变性对组件封装的影响，它会对组件的可复用性、可扩展性产生很大影响</p></div>',11)]))}const b=d(l,[["render",i]]);export{p as __pageData,b as default};