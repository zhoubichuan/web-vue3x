import{_ as e,c as a,o,ak as r}from"./chunks/framework.CIfWUXOX.js";const d="/web-vue3x/assets/1.1.DbkUmSAu.png",u=JSON.parse('{"title":"Vue 的工程化流程","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":0,"meta":[{"name":"description","content":"个人总结的vuepress学习技术文档-语法"},{"name":"keywords","content":"vuepress,最新技术文档,vuepress语法,markdown语法"}]},"headers":[],"relativePath":"base/engine/1.index.md","filePath":"base/engine/1.index.md","lastUpdated":1728663780000}'),n={name:"base/engine/1.index.md"};function s(c,t,l,p,i,h){return o(),a("div",null,t[0]||(t[0]=[r('<h1 id="vue-的工程化流程" tabindex="-1">Vue 的工程化流程 <a class="header-anchor" href="#vue-的工程化流程" aria-label="Permalink to &quot;Vue 的工程化流程&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">前言</p><p>前端项目虽然在不同的项目流程有些差异，但是也有很多相同的部分，可以总结一下这些相同的部分，这里简要地列举了一些常见的开发流程分门别类列举了一些可能遇到的问题</p><table tabindex="0"><thead><tr><th>-</th><th>需求评审（产品确定做什么）</th><th>静态页面（配合 UI 完成设计界面）</th><th>接口联调（配合后端完成逻辑交互）</th><th>部署上线（发布到网上）</th></tr></thead><tbody><tr><td>前端开发</td><td>1.开发工具 <br> 2.创建项目 <br> 3.Vue CLI 配置 <br> 4.环境配置 <br> 5.UI 框架</td><td>6.页面布局 <br> 7.单页应用 <br> 8.多页应用 <br> 9.模板解析 <br> 10.编码技巧</td><td>11.Mock 数据<br>12.代码优化</td><td>13.构建部署</td></tr></tbody></table></div><p><img src="'+d+`" alt="" loading="lazy"></p><h2 id="_1-开发工具" tabindex="-1">1.开发工具 <a class="header-anchor" href="#_1-开发工具" aria-label="Permalink to &quot;1.开发工具&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">背景</p><p>早期写前端项目，只需要在编辑器里写 html+css+javascript 的前端代码，svn 管控代码，chrome 调试代码，一些库或插件以 cdn 的形式引入到项目中；随着前端工程化的普及，前端开发以 node 为基础，通过脚手架、npm 包、相关命令，创建和开发项目</p></div><p>工具清单，按先后顺序安装</p><table tabindex="0"><thead><tr><th>事项</th><th>版本</th><th>说明</th><th>其他</th><th>是否必须</th><th>备注</th></tr></thead><tbody><tr><td>1.<a href="http://nodejs.cn" target="_blank" rel="noreferrer">安装 node.js</a></td><td>&gt;= 8.9</td><td>开发环境支持</td><td>前端工程化依赖 node 环境</td><td>✅</td><td>node -v 查看版本</td></tr><tr><td>2.<a href="https://git-scm.com" target="_blank" rel="noreferrer">安装 git</a></td><td>-</td><td>代码管理</td><td>提交代码用</td><td>✅</td><td></td></tr><tr><td>3.<a href="https://code.visualstudio.com" target="_blank" rel="noreferrer">安装 VSCode</a></td><td>-</td><td>编辑器</td><td>推荐一些默认配置，以及常用插件</td><td>✅</td><td></td></tr><tr><td>4.安装 谷歌浏览器</td><td>最近两年</td><td>调试代码</td><td>熟悉 chrome 代码调试</td><td>✅</td><td></td></tr><tr><td>5.升级 npm</td><td>最新</td><td>包管理器</td><td>熟悉相关命令</td><td>✅</td><td>npm install -g npm@latest</td></tr></tbody></table><p><strong>可能遇到的问题：</strong></p><p>🏷️ 问题一：项目运行一段时间老是提示内存泄露</p><p>查看是否是64位系统安装了32位的node</p><hr><p>🏷️ 问题二：本地代码和线上代码一致，但是某个环境有些语法用不了</p><p>查看是否是依赖没有固定导致的，如：vue没有固定版本，导致有些新的语法在老版本中不支持，每次下载依赖时线上的版本和本地的版本不一致</p><h2 id="_2-创建项目" tabindex="-1">2.创建项目 <a class="header-anchor" href="#_2-创建项目" aria-label="Permalink to &quot;2.创建项目&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">背景</p><p>早期前端创建项目，只需要新建一个文件夹，然后新建 html 将 css、 js 引入，后来有了工程化开发方式，通过脚手架及相关命令，拉取仓库模板，组合相关配置，安装相关依赖，可以很轻松初始化配置标准项目</p></div><p><a href="https://cli.vuejs.org/zh/" target="_blank" rel="noreferrer">vue 脚手架介绍</a></p><p>安装 vue 脚手架</p><p>使用 命令/图形界面 创建 vue 应用</p><pre><code>🏷️ 问题一：打包文件静态分析每个包的大小

    使用【vue ui】启动，脚手架图形界面，有以图的形式分析包的大小的功能，具体查看官网介绍
</code></pre><h2 id="_3-vite-配置" tabindex="-1">3.vite 配置 <a class="header-anchor" href="#_3-vite-配置" aria-label="Permalink to &quot;3.vite 配置&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">背景</p><p>内置的 webpack 无法满足开发需求，例如需要对图片做一些配置，需要对打包做一些配置</p></div><p><strong>可能遇到的问题：</strong></p><pre><code>🏷️ 问题一：本地开发环境请求服务器接口跨域的问题

    利用webpack中proxy配置本地代理解决跨域问题
</code></pre><h2 id="_4-环境配置" tabindex="-1">4.环境配置 <a class="header-anchor" href="#_4-环境配置" aria-label="Permalink to &quot;4.环境配置&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">背景</p><ul><li>开发环境（开发阶段，本地开发版本，一般会使用一些调试工具或额外的辅助功能）</li><li>测试环境（测试阶段，上线前版本，除了一些 bug 的修复，基本不会和上线版本有很大差别）</li><li>生产环境（上线阶段，正式对外发布的版本，一般会进行优化，关掉错误xx)</li></ul></div><p><strong>可能遇到的问题：</strong></p><pre><code>🏷️ 问题一：需要区分不通环境，添加不通链接，有些开发以不同域名判断(\`location.host.includes(&#39;prod&#39;) &amp;&amp; (相关逻辑)\`)，当域名有变化时，相关逻辑失效

    配置相关环境的打包方式，不同环境与打包部署相关联，不与域名相关联
</code></pre><hr><pre><code>🏷️ 问题二：测试环境希望方便调试代码，生产环境希望去掉多余的代码

    配置相关环境，不同环境打包时会走不同的逻辑
</code></pre><h2 id="_5-ui-框架" tabindex="-1">5.UI 框架 <a class="header-anchor" href="#_5-ui-框架" aria-label="Permalink to &quot;5.UI 框架&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">背景</p><p>前端代码开发，会重复开发某些功能（如日历组件），把这些重复的功能封装起来，统一管理，使用时直接调用会大大提高开发效率，这些公共的组件放在一起形成了我们现在看到的 ui 框架</p></div><p><strong>可能遇到的问题：</strong></p><pre><code>🏷️ 问题一：打包文件中有大量未使用过的UI组件

    配置按需加载，页面使用组件时单个引入使用
</code></pre><hr><pre><code>🏷️ 问题 二：如何优雅的只在当前页面中覆盖ui库中组件的样式

    在框架稳定的时候可以考虑配置一套全局风格，或者单独封装每个组件，内部修改本组件样式
</code></pre><hr><pre><code>🏷️ 问题 三：打包之后文件、图片、背景图资源不存在或者路径错误的问题

    注意\`publicPath\`参数配置
</code></pre><h2 id="_6-页面布局" tabindex="-1">6.页面布局 <a class="header-anchor" href="#_6-页面布局" aria-label="Permalink to &quot;6.页面布局&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">背景</p><p>将页面中组件归类，页面清晰</p></div><p><strong>可能遇到的问题：</strong></p><pre><code>🏷️ 问题 一：一个文件的代码很多，既存在应用数据的读取和处理，又存在数据的显示，而且每个组件还不能复用

    数据的请求和数据的展示都在一个组件进行，要实现组件的复用，我们就需要将展示组件和容器组件分离出来
</code></pre><h2 id="_7-单页应用" tabindex="-1">7.单页应用 <a class="header-anchor" href="#_7-单页应用" aria-label="Permalink to &quot;7.单页应用&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">背景</p><p>前端工程化项目后，默认搭建的项目就是单页应用</p></div><p><strong>可能遇到的问题：</strong></p><pre><code>🏷️ 问题 一：项目比较大，加载比较慢

    由于是单页应用，如果页面不做处理，打包时会将所有页面打包成一个文件，浏览器加载这个文件就比较大，耗费时间长，可以考虑按需加载页面，打包时就不会将整个页面打包进去
</code></pre><h2 id="_8-多页应用" tabindex="-1">8.多页应用 <a class="header-anchor" href="#_8-多页应用" aria-label="Permalink to &quot;8.多页应用&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">背景</p><p>有时候需要在项目中配置多入口，满足不同的业务需求，如 pc 端扫码展示 h5 页面</p></div><p><strong>可能遇到的问题：</strong></p><pre><code>🏷️ 问题 一：打包后的入口文件加载比较慢，经过分析发现是入口文件体积比较大，需要优化入口文件体积

    可以配置多入口来分流文件
</code></pre><h2 id="_9-模板解析" tabindex="-1">9.模板解析 <a class="header-anchor" href="#_9-模板解析" aria-label="Permalink to &quot;9.模板解析&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">背景</p><p>有些页面布局及结构固定，只是内容文字不同，这里可以将文字内容部分抽离为变量，和一般页面不同的是，这里的变量是配置的变量，不是从后端请求的数据，当打包项目后，这个页面内容就固定了。</p></div><p><strong>可能遇到的问题：</strong></p><pre><code>🏷️ 问题 一：html 页面有些变量在不同的环境会有不同的值，这些变量是在 webpack 中不同环境中配置好的，打包后会从不同环境中取值

    可以在html页面配置一个通用模板来解析这些变量
</code></pre><h2 id="_10-编码技巧" tabindex="-1">10.编码技巧 <a class="header-anchor" href="#_10-编码技巧" aria-label="Permalink to &quot;10.编码技巧&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">背景</p><p>不同的人写的代码风格不一致，给其他开发人员造成了理解困难</p></div><p><strong>可能遇到的问题：</strong></p><pre><code>🏷️ 问题一：在一个项目中会发现同一个功能的工具类方法，会有很多种写法，逐渐的项目里就累积了很多重复的工具类方法（防抖、节流、深拷贝...），其他开发接手需要从头看这些方法的用法

    使用 lodash 函数库替代自己写的方法、日期相关处理推荐使用moment.js
</code></pre><h2 id="_11-mock-数据" tabindex="-1">11.Mock 数据 <a class="header-anchor" href="#_11-mock-数据" aria-label="Permalink to &quot;11.Mock 数据&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">背景</p><p>后端接口不阻塞前端开发，前端可以根据接口文档，使用相关工具或配置实现接口功能，待后端完成接口，切换地址即可替换真实接口</p></div><p><strong>可能遇到的问题：</strong></p><pre><code>🏷️ 问题一：某些需求比较抽象复杂，前端界面比较统一（toB项目），前端静态页面很快就写好了，需要等后端好久才能提供接口，然后边联调边进行逻辑部分开发，延长了开发周期

    前端写好静态页面后，可以在后端不提供接口的情况下，用接口文档自己mock数据，完成后面的逻辑部分开发，待后端完成接口后前端与之联调，加快开发进度
</code></pre><h2 id="_12-webpack-优化" tabindex="-1">12.webpack 优化 <a class="header-anchor" href="#_12-webpack-优化" aria-label="Permalink to &quot;12.webpack 优化&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">背景</p><p>例如：由于 vue 默认是单页应用，如果不做优化，会随着项目的复杂，打包入口文件会越来越大，影响页面性能；本地构建比较慢，影响开发效率</p></div><p><strong>可能遇到的问题：</strong></p><pre><code>🏷️ 问题一：开启gzip压缩代码

    这时前端需要在本地模拟线上发布环境，配置启动 nginx，访问本地的打包文件，验证通过后进行发布
</code></pre><h2 id="_13-构建部署" tabindex="-1">13.构建部署 <a class="header-anchor" href="#_13-构建部署" aria-label="Permalink to &quot;13.构建部署&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">背景</p><p>早期网页部署直接是通过 ftp 将本地的 html 代码传输到后端服务器，然后在页面就可以打开网页，随着前端工程越来越复杂，需要提前准备的工作也越来越多（安全问题、权限问题、回滚操作、错误日志...）</p></div><p><strong>可能遇到的问题：</strong></p><pre><code>🏷️ 问题一：在某个重要的环境，紧急修改了某个问题，由于某种原因需要直接发布到这个环境，跳过了前面的环境验证，结果运维发布了页面出现了问题，访问不了。

    这时前端需要在本地模拟线上发布环境，配置启动 nginx，访问本地的打包文件，验证通过后进行发布
</code></pre><hr><pre><code>🏷️ 问题二：每一次更新都需要清除浏览器缓存才能看到效果

    部署时，生成项目版本号存于项目某个文件中，当页面打开时一直请求这个文件，隔一段时间与浏览器本地存储的版本号做对比，有差异就更新页面
</code></pre><div class="tip custom-block"><p class="custom-block-title">总结</p><p>通过以上对 vue 项目开发的流程，我们可以大概了解到实际开发中所进行的环节，以及相关环节下需要做的事情，对全面理解 vue 的前端开发做好铺垫。</p></div>`,72)]))}const m=e(n,[["render",s]]);export{u as __pageData,m as default};
