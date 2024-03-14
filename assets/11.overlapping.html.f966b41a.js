import{_ as s,o as n,c as a,a as l}from"./app.8390b8a1.js";const p={},o=l(`<h1 id="\u5341\u4E00-\u4EA4\u53C9\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5341\u4E00-\u4EA4\u53C9\u7C7B\u578B" aria-hidden="true">#</a> \u5341\u4E00.\u4EA4\u53C9\u7C7B\u578B</h1><div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u4EA4\u53C9\u7C7B\u578B\u662F\u5C06\u591A\u4E2A\u7C7B\u578B\u5408\u5E76\u4E3A\u4E00\u4E2A\u7C7B\u578B</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">interface</span><span style="color:#24292F;"> </span><span style="color:#953800;">Person1</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">handsome</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">interface</span><span style="color:#24292F;"> </span><span style="color:#953800;">Person2</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">high</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">type</span><span style="color:#24292F;"> </span><span style="color:#953800;">P1P2</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#953800;">Person1</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">&amp;</span><span style="color:#24292F;"> </span><span style="color:#953800;">Person2</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> p</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">P1P2</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> { handsome: </span><span style="color:#0A3069;">&quot;\u5E05&quot;</span><span style="color:#24292F;">, high: </span><span style="color:#0A3069;">&quot;\u9AD8&quot;</span><span style="color:#24292F;"> };</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4EA4\u53C9\u7C7B\u578B</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">mixin</span><span style="color:#24292F;">&lt;</span><span style="color:#953800;">T</span><span style="color:#24292F;">, </span><span style="color:#953800;">K</span><span style="color:#24292F;">&gt;(</span><span style="color:#953800;">a</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">, </span><span style="color:#953800;">b</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">K</span><span style="color:#24292F;">)</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">&amp;</span><span style="color:#24292F;"> </span><span style="color:#953800;">K</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> { </span><span style="color:#CF222E;">...</span><span style="color:#24292F;">a, </span><span style="color:#CF222E;">...</span><span style="color:#24292F;">b };</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">x</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">mixin</span><span style="color:#24292F;">({ name: </span><span style="color:#0A3069;">&quot;abc&quot;</span><span style="color:#24292F;"> }, { age: </span><span style="color:#0550AE;">11</span><span style="color:#24292F;"> });</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">interface</span><span style="color:#24292F;"> </span><span style="color:#953800;">IPerson1</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">name</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">age</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">interface</span><span style="color:#24292F;"> </span><span style="color:#953800;">IPerson2</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">name</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">age</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">type</span><span style="color:#24292F;"> </span><span style="color:#953800;">person</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#953800;">IPerson1</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">&amp;</span><span style="color:#24292F;"> </span><span style="color:#953800;">IPerson2</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> name</span><span style="color:#CF222E;">!:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">never</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> person</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">person</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> { name, age: </span><span style="color:#0550AE;">11</span><span style="color:#24292F;"> }; </span><span style="color:#6E7781;">//\u4E24\u4E2A\u5C5E\u6027\u4E4B\u95F4string &amp; number\u7684\u503C\u4E3Anever</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),e=[o];function c(r,t){return n(),a("div",null,e)}const y=s(p,[["render",c],["__file","11.overlapping.html.vue"]]);export{y as default};
