import{_ as t,r as l,o as i,c as r,b as n,d as e,e as o,f as c,a}from"./app.8390b8a1.js";const d={},p=a('<h1 id="\u4E94-ui-\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#\u4E94-ui-\u6846\u67B6" aria-hidden="true">#</a> \u4E94.UI \u6846\u67B6</h1><div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u5982\u679C\u4F60\u60F3\u5FEB\u901F\u5F00\u53D1\u4E00\u6B3E\u5E94\u7528\uFF0C\u5E76\u4E14\u4E0D\u60F3\u8FC7\u591A\u7684\u64CD\u5FC3\u9875\u9762 <code>UI</code> \u7684\u5185\u5BB9\uFF0C\u6BD4\u5982\u4F60\u4E0D\u60F3\u53BB\u5B9E\u73B0\u4E00\u4E2A\u4E0B\u62C9 UI \u7EC4\u4EF6\u6216\u8BBE\u8BA1\u4E00\u4E2A <code>icon</code> \u56FE\u6807\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u73B0\u6709\u7684\u522B\u4EBA\u505A\u597D\u7684 UI \u5E93\u548C\u56FE\u6807\u5E93\u5B9E\u73B0\u5FEB\u901F\u5F00\u53D1\u3002</p><ul><li>UI \u5E93\u662F\u8131\u79BB JS \u6846\u67B6\u5916\u7684\u4E00\u79CD \u201C\u5DE5\u5177\u201D\uFF0C\u76F8\u6BD4 JS \u6846\u67B6\u53EF\u4EE5\u5E2E\u52A9\u4F60\u5B9E\u73B0\u5404\u79CD\u4E1A\u52A1\u903B\u8F91\uFF0C\u5176\u66F4\u5173\u6CE8\u4E8E\u9875\u9762 UI \u5C42\u9762\u7684\u5B9E\u73B0\uFF0C\u6BD4\u5982\u63D0\u4F9B\u548C\u4E1A\u52A1\u65E0\u5173\u7684\u5F39\u7A97\u3001\u5BFC\u822A\u3001\u8868\u5355\u7EC4\u4EF6\u7B49\uFF0C\u4E3A\u9879\u76EE UI \u5C42\u9762\u7684\u529F\u80FD\u63D0\u4F9B\u89E3\u51B3\u65B9\u6848\u3002</li></ul><!-- - \u56FE\u6807\u5E93\uFF0C\u5C31\u662F\u6C47\u805A\u4E86\u5927\u91CF\u56FE\u6807\u7684\u4ED3\u5E93\uFF0C\u5728\u8FD9\u6837\u7684\u4ED3\u5E93\u4E2D\u6211\u4EEC\u53EF\u4EE5\u67E5\u627E\u5E76\u4E0B\u8F7D\u6211\u4EEC\u60F3\u8981\u7684\u56FE\u6807\uFF0C\u751A\u81F3\u8FD8\u53EF\u4EE5\u5236\u5B9A\u989C\u8272\u548C\u5927\u5C0F\uFF0C\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\u56FE\u6807\u5E93\u53EF\u4EE5\u4E3A\u6211\u4EEC\u7684\u9879\u76EE\u5236\u5B9A\u7EDF\u4E00\u7684\u56FE\u6807\u7BA1\u7406\u6807\u51C6\uFF0C\u540C\u65F6\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u4E5F\u53EF\u4EE5\u51CF\u5C11\u9879\u76EE\u56FE\u7247\u7684\u6570\u91CF\u3002 --></div><h2 id="_1-vue-3-x-\u4E2D" tabindex="-1"><a class="header-anchor" href="#_1-vue-3-x-\u4E2D" aria-hidden="true">#</a> 1.Vue 3.x \u4E2D</h2>',3),h={href:"http://element-cn.eleme.io/#/zh-CN",target:"_blank",rel:"noopener noreferrer"},u=a(`<h3 id="_1-1-\u4E3B\u9898\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4E3B\u9898\u8BBE\u7F6E" aria-hidden="true">#</a> 1.1 \u4E3B\u9898\u8BBE\u7F6E</h3><h3 id="_1-2-\u5168\u5C40\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5168\u5C40\u914D\u7F6E" aria-hidden="true">#</a> 1.2 \u5168\u5C40\u914D\u7F6E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">Vue.</span><span style="color:#8250DF;">use</span><span style="color:#24292F;">(Element, { size: </span><span style="color:#0A3069;">&quot;small&quot;</span><span style="color:#24292F;">, zIndex: </span><span style="color:#0550AE;">3000</span><span style="color:#24292F;"> });</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-\u5168\u5C40\u6587\u6848" tabindex="-1"><a class="header-anchor" href="#_1-3-\u5168\u5C40\u6587\u6848" aria-hidden="true">#</a> 1.3 \u5168\u5C40\u6587\u6848</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">Vue.</span><span style="color:#8250DF;">locale</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;zh-cn&#39;</span><span style="color:#24292F;">, { </span><span style="color:#CF222E;">...</span><span style="color:#24292F;">local,aaa:</span><span style="color:#0A3069;">&#39;\u56FD\u9645\u5316\u5B57\u6BB5&#39;</span><span style="color:#24292F;"> });</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-4-\u7EC4\u4EF6\u7684\u4E8C\u6B21\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-4-\u7EC4\u4EF6\u7684\u4E8C\u6B21\u5C01\u88C5" aria-hidden="true">#</a> 1.4 \u7EC4\u4EF6\u7684\u4E8C\u6B21\u5C01\u88C5</h3><ul><li>button \u9632\u6296</li><li>table+page \u5C01\u88C5\u5728\u4E00\u8D77</li><li>form \u8868\u5355\u5C01\u88C5</li></ul><h2 id="_2-vue-3-x-\u4E2D" tabindex="-1"><a class="header-anchor" href="#_2-vue-3-x-\u4E2D" aria-hidden="true">#</a> 2.Vue 3.x \u4E2D</h2>`,8),f={href:"https://element-plus.gitee.io/zh-CN/",target:"_blank",rel:"noopener noreferrer"},m=a(`<h3 id="_2-1-\u4E3B\u9898\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-1-\u4E3B\u9898\u8BBE\u7F6E" aria-hidden="true">#</a> 2.1 \u4E3B\u9898\u8BBE\u7F6E</h3><h3 id="_2-2-\u5168\u5C40\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5168\u5C40\u914D\u7F6E" aria-hidden="true">#</a> 2.2 \u5168\u5C40\u914D\u7F6E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">app.</span><span style="color:#8250DF;">use</span><span style="color:#24292F;">(Element, { size: </span><span style="color:#0A3069;">&quot;small&quot;</span><span style="color:#24292F;">, zIndex: </span><span style="color:#0550AE;">3000</span><span style="color:#24292F;"> });</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-\u7EC4\u4EF6\u7684\u4E8C\u6B21\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#_2-3-\u7EC4\u4EF6\u7684\u4E8C\u6B21\u5C01\u88C5" aria-hidden="true">#</a> 2.3 \u7EC4\u4EF6\u7684\u4E8C\u6B21\u5C01\u88C5</h3><ul><li>button\uFF08\u9ED8\u8BA4\u6DFB\u52A0\u9632\u6296\uFF09</li><li>table</li><li>form</li></ul>`,5),b=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u603B\u7ED3"),n("p",null,"\u4E86\u89E3 vue \u9879\u76EE\u521B\u5EFA\u8FC7\u7A0B\u4EE5\u53CA\u5176\u76EE\u5F55\u7ED3\u6784\uFF0C\u5728\u5F00\u53D1\u4E2D\u9700\u8981\u6CE8\u610F\u7684\u5730\u65B9\uFF0C\u80FD\u591F\u66F4\u597D\u5730\u89C4\u8303\u524D\u7AEF\u5F00\u53D1")],-1);function _(v,x){const s=l("ExternalLinkIcon");return i(),r("div",null,[p,n("p",null,[e("ElementPlus\uFF0C\u9002\u7528\u4E8E Vue 3.x"),n("a",h,[e("\u53C2\u8003\u6587\u6863"),o(s)])]),u,n("p",null,[e("Element Plus\uFF0C\u9002\u7528\u4E8E Vue 3.x"),n("a",f,[e("\u53C2\u8003\u6587\u6863"),o(s)])]),m,c(` ## 3.\u56FE\u6807\u5E93

\u5BF9\u4E00\u4E9B\u788E\u56FE\u6211\u4EEC\u53EF\u4EE5\u7528\u56FE\u6807\u5E93\u7BA1\u7406\uFF0C\u8F6C\u6362\u4E3A\u5B57\u4F53\u56FE\u6807\uFF0C\u901A\u8FC7\u6837\u5F0F\u6765\u63A7\u5236\u56FE\u7247\u7684\u5927\u5C0F\u548C\u989C\u8272\uFF0C\u6BD4\u5355\u7EAF\u7BA1\u7406\u56FE\u7247\u66F4\u52A0\u65B9\u4FBF\u3002

### 3.1 Iconfont \u7684\u4F7F\u7528

- \u4F7F\u7528 Iconfont \u4E0B\u8F7D\u9009\u62E9\u7684\u56FE\u6807\uFF0C\u7136\u540E\u5C06\u6587\u4EF6\u5939\u4E2D\u7684 \`iconfont.css\`\u3001\`iconfont.eot\`\u3001\`iconfont.svg\`\u3001\`iconfont.ttf\` \u548C \`iconfont.woff\` \u6587\u4EF6\u7EDF\u4E00\u653E\u5230 assets \u6587\u4EF6\u5939\u7684 iconfont \u4E2D
- \u5C06 iconfont.css \u5F15\u5165\u5230\u5165\u53E3\u6587\u4EF6\u4E2D

  \`\`\`js
  // main.js
  import "./assets/iconfont/iconfont.css"
  \`\`\`

- \u6DFB\u52A0\u6837\u5F0F\u540D\u79F0\u7684\u65B9\u5F0F\u6765\u8FDB\u884C\u56FE\u6807\u7684\u4F7F\u7528
  \`\`\`vue
  <template>
    <div id="app">
      <router-view />
      <tabbar>
        <tabbar-item :link="{ name: 'demo' }">
          <span slot="icon" class="iconfont icon-bulb"></span>
          <span slot="label">Demo</span>
        </tabbar-item>
        <tabbar-item>
          <span slot="icon" class="iconfont icon-experiment"></span>
          <span slot="label">\u5B9E\u9A8C\u5BA4</span>
        </tabbar-item>
        <tabbar-item>
          <span slot="icon" class="iconfont icon-deploymentunit"></span>
          <span slot="label">\u5173\u4E8E</span>
        </tabbar-item>
      </tabbar>
    </div>
  </template>
  \`\`\`

::: tip \u5176\u4ED6\u56FE\u6807\u5E93

- [Font Awesome](https://fontawesome.com)\uFF1A\u4E16\u754C\u4E0A\u6700\u53D7\u6B22\u8FCE\u4E14\u6700\u6613\u4E8E\u4F7F\u7528\u7684\u56FE\u6807\u96C6
- [Ionicons](https://ionicons.com/) \uFF1A\u7CBE\u7F8E\u7684\u5F00\u6E90\u56FE\u6807\u5E93\uFF0C\u53EF\u4EE5\u7528\u4E8E Web\uFF0CiOS\uFF0CAndroid \u548C\u684C\u9762\u5E94\u7528\u7A0B\u5E8F
- [Themify](https://themify.me/themify-icons)\uFF1A\u4E00\u5957\u7528\u4E8E\u7F51\u9875\u8BBE\u8BA1\u548C\u5E94\u7528\u7A0B\u5E8F\u7684\u5B8C\u6574\u56FE\u6807
  ::: `),b])}const F=t(d,[["render",_],["__file","5.ui.html.vue"]]);export{F as default};
