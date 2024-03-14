import{_ as s,o as n,c as a,a as l}from"./app.8390b8a1.js";const e={},p=l(`<h1 id="\u5341\u4E03-\u6A21\u5757\u548C\u547D\u540D\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u5341\u4E03-\u6A21\u5757\u548C\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a> \u5341\u4E03.\u6A21\u5757\u548C\u547D\u540D\u7A7A\u95F4</h1><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u7F16\u5199\u7684\u5927\u95E8\u5904\u4E8E\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u4E2D</p><h2 id="_1-\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_1-\u6A21\u5757" aria-hidden="true">#</a> 1.\u6A21\u5757</h2><p>\u6587\u4EF6\u6A21\u5757\uFF1A\u5982\u679C\u5728\u4F60\u7684 TypeScript \u6587\u4EF6\u7684\u6839\u7EA7\u4F4D\u7F6E\u542B\u6709<code>import</code>\u6216\u8005<code>export</code>\uFF0C\u90A3\u4E48\u5B83\u4F1A\u5728\u8FD9\u4E2A\u6587\u4EF6\u4E2D\u521B\u5EFA\u4E00\u4E2A\u672C\u5730\u7684\u4F5C\u7528\u57DF</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#6E7781;">// a.ts \u5BFC\u51FA</span></span>
<span class="line"><span style="color:#24292F;">exprot </span><span style="color:#CF222E;">default</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;aaa&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;">//index.ts \u5BFC\u5165</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> name </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;./a&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u547D\u540D\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#_2-\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a> 2.\u547D\u540D\u7A7A\u95F4</h2><p>\u547D\u540D\u7A7A\u95F4\u53EF\u4EE5\u7528\u4E8E\u7EC4\u7EC7\u4EE3\u7801\uFF0C\u907F\u514D\u6587\u4EF6\u5185\u547D\u540D\u51B2\u7A81</p><ul><li>\u547D\u540D\u7A7A\u95F4\u7684\u4F7F\u7528</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">export</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">namespace</span><span style="color:#24292F;"> </span><span style="color:#953800;">zoo</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">export</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">class</span><span style="color:#24292F;"> </span><span style="color:#953800;">Dog</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">eat</span><span style="color:#24292F;">() {</span></span>
<span class="line"><span style="color:#24292F;">      console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;zoo dog&quot;</span><span style="color:#24292F;">);</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">export</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">namespace</span><span style="color:#24292F;"> </span><span style="color:#953800;">home</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">export</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">class</span><span style="color:#24292F;"> </span><span style="color:#953800;">Dog</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">eat</span><span style="color:#24292F;">() {</span></span>
<span class="line"><span style="color:#24292F;">      console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;home dog&quot;</span><span style="color:#24292F;">);</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> dog_of_zoo </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> zoo.</span><span style="color:#8250DF;">Dog</span><span style="color:#24292F;">();</span></span>
<span class="line"><span style="color:#24292F;">dog_of_zoo.</span><span style="color:#8250DF;">eat</span><span style="color:#24292F;">();</span></span>
<span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> dog_of_home </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> home.</span><span style="color:#8250DF;">Dog</span><span style="color:#24292F;">();</span></span>
<span class="line"><span style="color:#24292F;">dog_of_home.</span><span style="color:#8250DF;">eat</span><span style="color:#24292F;">();</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u547D\u540D\u7A7A\u95F4\u5D4C\u5957\u4F7F\u7528</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">export</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">namespace</span><span style="color:#24292F;"> </span><span style="color:#953800;">zoo</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">export</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">class</span><span style="color:#24292F;"> </span><span style="color:#953800;">Dog</span><span style="color:#24292F;"> { </span><span style="color:#8250DF;">eat</span><span style="color:#24292F;"> () {</span></span>
<span class="line"><span style="color:#24292F;">    console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;zoo dog&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">  }}</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">export</span><span style="color:#24292F;"> namesapce bear{</span></span>
<span class="line"><span style="color:#24292F;">    export const name =&#39;xxxx&#39;</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#24292F;">console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(zoo.bear.name)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u547D\u540D\u7A7A\u95F4\u4E2D\u5BFC\u51FA\u7684\u53D8\u91CF\u53EF\u4EE5\u901A\u8FC7\u547D\u540D\u7A7A\u95F4\u4F7F\u7528</p>`,12),o=[p];function c(r,i){return n(),a("div",null,o)}const d=s(e,[["render",c],["__file","17.module.html.vue"]]);export{d as default};
