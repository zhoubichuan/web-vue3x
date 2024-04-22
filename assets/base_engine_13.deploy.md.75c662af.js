import{_ as s,c as n,o as a,a as l}from"./app.5e1cd38b.js";const p="/web-vue3x/assets/13.deploy1.1.9e104c32.png",o="/web-vue3x/assets/13.deploy1.821406ad.png",e="/web-vue3x/assets/13.deploy2.ee65a97f.png",h=JSON.parse('{"title":"\u5341\u4E09.\u6784\u5EFA\u90E8\u7F72","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":2,"meta":[{"name":"description","content":"\u4E2A\u4EBA\u603B\u7ED3\u7684vuepress\u5B66\u4E60\u6280\u672F\u6587\u6863-\u8BED\u6CD5"},{"name":"keywords","content":"vuepress,\u6700\u65B0\u6280\u672F\u6587\u6863,vuepress\u8BED\u6CD5,markdown\u8BED\u6CD5"}]},"headers":[],"relativePath":"base/engine/13.deploy.md","lastUpdated":1713694593000}'),t={name:"base/engine/13.deploy.md"},c=l('<h1 id="\u5341\u4E09-\u6784\u5EFA\u90E8\u7F72" tabindex="-1">\u5341\u4E09.\u6784\u5EFA\u90E8\u7F72 <a class="header-anchor" href="#\u5341\u4E09-\u6784\u5EFA\u90E8\u7F72" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u524D\u8A00</p><p>\u524D\u7AEF\u5F00\u53D1\u4E5F\u9700\u8981\u61C2\u4E00\u4E9B\u57FA\u672C\u90E8\u7F72\u77E5\u8BC6\uFF0C\u786E\u8BA4\u5DF2\u53D1\u5E03\uFF0C\u6D4B\u8BD5\u662F\u5426\u6210\u529F\u53D1\u5E03\u672C\u6B21\u9879\u76EE\u4EE3\u7801</p></div><h2 id="_1-\u4EE3\u7801\u63D0\u4EA4" tabindex="-1">1.\u4EE3\u7801\u63D0\u4EA4 <a class="header-anchor" href="#_1-\u4EE3\u7801\u63D0\u4EA4" aria-hidden="true">#</a></h2><p>\u5728 vscode \u4E2D\u5B89\u88C5\u4EE3\u7801\u63D0\u4EA4\u5DE5\u5177<code>GitLens</code>\u63D2\u4EF6</p><p><img src="'+p+'" alt=""></p><ul><li><p>\u5E38\u7528\u529F\u80FD</p><ul><li><p>\u4EE3\u7801\u5408\u5E76\u63D0\u4EA4</p></li><li><p>\u521B\u5EFA\u5206\u652F\u3001\u5207\u6362\u5206\u652F</p></li><li><p>\u4E34\u65F6\u5B58\u50A8</p></li></ul></li></ul><p><a href="https://www.jianshu.com/p/95a1a06ac0fb" target="_blank" rel="noreferrer">\u53C2\u8003\u6559\u7A0B</a></p><h2 id="_2-\u90E8\u7F72\u524D" tabindex="-1">2.\u90E8\u7F72\u524D <a class="header-anchor" href="#_2-\u90E8\u7F72\u524D" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u6709\u65F6\u5019\u90E8\u7F72\u6BD4\u8F83\u654F\u611F\uFF0C\u5982\u4E0A \u7D27\u6025\u4E0A uat \u73AF\u5883\uFF0C\u4E3A\u4E86\u9632\u6B62\u51FA\u610F\u5916\u5BFC\u81F4\u6295\u8BC9\uFF08\u5982\u6D4B\u8BD5\uFF09\u6216\u8005\u786E\u5B9A\u524D\u7AEF\u4EE3\u7801\u90E8\u7F72\u8D28\u91CF\u6392\u67E5\u90E8\u7F72\u4EA7\u751F\u7684\u95EE\u9898\uFF0C\u53EF\u4EE5\u5148\u5728\u672C\u5730\u5B89\u88C5 nginx \u6A21\u62DF\u7EBF\u4E0A\u73AF\u5883\uFF0C\u6821\u9A8C\u524D\u7AEF\u6253\u5305\u540E\u7684\u4EE3\u7801\u662F\u5426\u662F\u6B63\u5E38\u7684\uFF0C\u81EA\u5DF1\u786E\u5B9A\u4FEE\u6539\u65E0\u8BEF\u540E\u518D\u90E8\u7F72</p></div><ul><li><p>1.\u672C\u5730\u914D\u7F6E nginx</p><ul><li><p>windows \u73AF\u5883\u4E2D <a href="https://nginx.org/en/download.html" target="_blank" rel="noreferrer">\u4E0B\u8F7D nginx</a>\uFF0C\u7136\u540E\u5728\u5B89\u88C5\u76EE\u5F55\u4E0B\u89E3\u538B</p><p><img src="'+o+'" alt=""><img src="'+e+`" alt=""></p></li><li><p>\u5728 Nginx \u7684\u76EE\u5F55\u4E0B\u4F7F\u7528 cmd \u547D\u4EE4\u884C\uFF0C\u542F\u52A8\u4E4B\u540E\uFF0C\u6253\u5F00http://localhost:80\u5C31\u80FD\u770B\u7684\u6548\u679C</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">start nginx           </span><span style="color:#676E95;"># \u542F\u52A8</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u5E38\u89C1\u547D\u4EE4</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">start nginx           </span><span style="color:#676E95;"># \u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -s stop         </span><span style="color:#676E95;"># \u5FEB\u901F\u505C\u6B62\uFF08\u4E0D\u4FDD\u5B58\u76F8\u5173\u4FE1\u606F\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -s quit         </span><span style="color:#676E95;"># \u6709\u5E8F\u505C\u6B62\uFF08\u4FDD\u5B58\u76F8\u5173\u4FE1\u606F\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -s reload       </span><span style="color:#676E95;"># \u91CD\u542F\uFF08\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u540E\u7528\u8FD9\u4E2A\uFF09</span></span>
<span class="line"></span></code></pre></div></li></ul></li></ul><ul><li><p>2.\u6253\u5305\u9879\u76EE\u4EE3\u7801\uFF0C\u914D\u7F6E nginx \u6307\u5411\u6253\u5305\u76EE\u5F55</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm run build</span></span>
<span class="line"></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># nginx/conf/nginx.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">location /</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\u9879\u76EE\u4E8C\u7EA7\u76EE\u5F55</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  root D:/project/</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\u9879\u76EE\u540D\u79F0</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  try_fiels </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri/ /</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\u6253\u5305\u76EE\u5F55</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">/index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">  index index.html index.htm</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"></span></code></pre></div></li></ul><ul><li><p>3.\u672C\u5730\u91CD\u542F nginx\uFF0C\u9A8C\u8BC1\u6253\u5305\u4EE3\u7801\uFF08\u5728\u5B89\u88C5\u6839\u76EE\u5F55\u4E0B\u542F\u7528 cmd\uFF09</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nginx -s reload       </span><span style="color:#676E95;"># \u91CD\u542F</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="_3-\u90E8\u7F72\u4E2D" tabindex="-1">3.\u90E8\u7F72\u4E2D <a class="header-anchor" href="#_3-\u90E8\u7F72\u4E2D" aria-hidden="true">#</a></h2><ul><li><p><strong>\u65B9\u5F0F\u4E00</strong>\uFF1A\u76F4\u63A5\u4E0A\u4F20\u672C\u5730\u6253\u5305\u540E\u7684\u4EE3\u7801\u5230\u670D\u52A1\u5668</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm run build:sit</span></span>
<span class="line"></span></code></pre></div><p>\u901A\u8FC7 ftp \u7B49\u5DE5\u5177\u5C06 dist \u76EE\u5F55\u4E0B\u7684\u6253\u5305\u6587\u4EF6\u4F20\u8F93\u5230\u670D\u52A1\u5668\u6307\u5B9A\u76EE\u5F55\uFF08\u670D\u52A1\u5668\u4E0A\u9700\u5148\u542F\u52A8 nginx\uFF09</p></li><li><p><strong>\u65B9\u5F0F\u4E8C</strong>\uFF1A\u901A\u8FC7\u76F8\u5173\u5DE5\u5177\u90E8\u7F72\u6D41\u6C34\u7EBF</p></li></ul><h2 id="_4-\u90E8\u7F72\u540E" tabindex="-1">4.\u90E8\u7F72\u540E <a class="header-anchor" href="#_4-\u90E8\u7F72\u540E" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u6709\u65F6\u5019\u90E8\u7F72\u540E\u9700\u8981\u67E5\u770B\u4EE3\u7801\u662F\u5426\u66F4\u65B0\uFF0C\u4F5C\u51FA\u76F8\u5173\u52A8\u4F5C\uFF08\u5237\u65B0\u9875\u9762\uFF09</p></div><ul><li><p>\u5728 public \u4E0B\u5EFA\u7ACB\u6587\u4EF6\uFF0C/version.json\uFF08\u6253\u5305\u65F6 webpack \u5411\u6B64\u6587\u4EF6\u5199\u5165\u6253\u5305\u4FE1\u606F\uFF09</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">projectName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxx1.13</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">date</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2021/12/19</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">time</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul><ul><li>\u5237\u65B0\u9875\u9762<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// main.js</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/version.json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">time</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">time</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">time</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">time</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">message</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u9879\u76EE\u6709\u66F4\u65B0,10s\u540E\u81EA\u52A8\u5237\u65B0\u9875\u9762</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div></li></ul><div class="warning custom-block"><p class="custom-block-title">\u53EF\u80FD\u9047\u5230\u7684\u95EE\u9898</p><p>linux \u4E0B\u6709\u6743\u9650\u95EE\u9898\uFF0C\u5982\u914D\u7F6E\u5B8C\u6210\u540E\u8BBF\u95EE\u51FA\u73B0 403,\u53EF\u4EE5\u914D\u7F6E SELINUX=disabled \u89E3\u51B3</p></div><div class="tip custom-block"><p class="custom-block-title">\u603B\u7ED3</p><p>\u901A\u8FC7\u5BF9vue\u9879\u76EE\u6784\u5EFA\u90E8\u7F72\u7684\u4E86\u89E3\uFF0C\u53EF\u4EE5\u770B\u5230\u524D\u7AEF\u4E5F\u9700\u8981\u5B66\u4E60\u4E00\u4E9B\u6784\u5EFA\u90E8\u7F72\u77E5\u8BC6\uFF0C\u80FD\u5728\u65E5\u5E38\u5F00\u53D1\u4E2D\u8F7B\u677E\u5904\u7406\u76F8\u5173\u95EE\u9898</p></div>`,20),r=[c];function i(y,D,F,C,d,A){return a(),n("div",null,r)}const g=s(t,[["render",i]]);export{h as __pageData,g as default};
