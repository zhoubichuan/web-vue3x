import{_ as s,c as n,o as a,a as e}from"./app.5e1cd38b.js";const C=JSON.parse('{"title":"\u4E09.genkins","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":2,"meta":[{"name":"description","content":"\u4E2A\u4EBA\u603B\u7ED3\u7684vuepress\u5B66\u4E60\u6280\u672F\u6587\u6863-\u8BED\u6CD5"},{"name":"keywords","content":"vuepress,\u6700\u65B0\u6280\u672F\u6587\u6863,vuepress\u8BED\u6CD5,markdown\u8BED\u6CD5"}]},"headers":[],"relativePath":"senior/3.deploy/3.genkins.md","lastUpdated":1713694593000}'),p={name:"senior/3.deploy/3.genkins.md"},l=e(`<h1 id="\u4E09-genkins" tabindex="-1">\u4E09.genkins <a class="header-anchor" href="#\u4E09-genkins" aria-hidden="true">#</a></h1><h2 id="_1-\u76F8\u5173\u914D\u7F6E" tabindex="-1">1.\u76F8\u5173\u914D\u7F6E <a class="header-anchor" href="#_1-\u76F8\u5173\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u8FDC\u7A0B\u8FDE\u63A5</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">ssh root@  \u540E\u8FB9\u518D\u52A0\u4E0A\u4F60\u7684\u670D\u52A1\u5668ip\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7136\u540E\u8F93\u5165\u5BC6\u7801 \u5C31\u6210\u529F\u8FDE\u63A5\u4E0A\u4E86</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-vscode-\u7684\u914D\u7F6E" tabindex="-1">2.vscode \u7684\u914D\u7F6E <a class="header-anchor" href="#_2-vscode-\u7684\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u5B89\u88C5\u63D2\u4EF6\uFF1A Remote-SSH</p><h2 id="_3-\u6784\u5EFA" tabindex="-1">3.\u6784\u5EFA <a class="header-anchor" href="#_3-\u6784\u5EFA" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">pwd</span></span>
<span class="line"><span style="color:#A6ACCD;">node -v</span></span>
<span class="line"><span style="color:#A6ACCD;">npm -v</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run build</span></span>
<span class="line"><span style="color:#82AAFF;">pwd</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6784\u5EFA\u6210\u529F</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">ls</span></span>
<span class="line"><span style="color:#A6ACCD;">rm -rf /root/mall_project/</span><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#A6ACCD;">cp -rf ./dist/</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> /root/mall_project/</span></span>
<span class="line"></span></code></pre></div>`,8),o=[l];function t(c,r,i,d,h,_){return a(),n("div",null,o)}const y=s(p,[["render",t]]);export{C as __pageData,y as default};
