import{_ as s,o as n,c as a,a as l}from"./app.8390b8a1.js";const o={},e=l(`<h1 id="\u5341\u516D-unknown" tabindex="-1"><a class="header-anchor" href="#\u5341\u516D-unknown" aria-hidden="true">#</a> \u5341\u516D.unknown</h1><h2 id="_1-unknown-\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-unknown-\u7C7B\u578B" aria-hidden="true">#</a> 1.unknown \u7C7B\u578B</h2><p><code>unknown</code>\u7C7B\u578B\uFF0C\u4EFB\u4F55\u7C7B\u578B\u90FD\u53EF\u4EE5\u8D4B\u503C\u4E3A<code>unknown</code>\u7C7B\u578B\u3002\u5B83\u662F<code>any</code>\u7C7B\u578B\u5BF9\u5E94\u7684\u5B89\u5168\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> unknown</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">unknown</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">unknown </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;bbb&quot;</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">unknown </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">11</span><span style="color:#24292F;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u80FD\u8BBF\u95EE<code>unknown</code>\u7C7B\u578B\u4E0A\u7684\u5C5E\u6027\uFF0C\u4E0D\u80FD\u4F5C\u4E3A\u51FD\u6570\u3001\u7C7B\u6765\u4F7F\u7528</p><ul><li>\u8054\u5408\u7C7B\u578B\u4E2D\u7684<code>unknown</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">type</span><span style="color:#24292F;"> </span><span style="color:#953800;">UnionUnknown</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">unknown</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">null</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span><span style="color:#24292F;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8054\u5408\u7C7B\u578B\u4E0E<code>unknown</code>\u90FD\u662F<code>unknown</code>\u7C7B\u578B</p><ul><li>\u4EA4\u53C9\u7C7B\u578B\u4E2D\u7684<code>unknown</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">type</span><span style="color:#24292F;"> </span><span style="color:#953800;">inter</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">unknown</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">&amp;</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">null</span><span style="color:#24292F;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4EA4\u53C9\u7C7B\u578B\u4E0E<code>unknown</code>\u90FD\u662F\u5176\u4ED6\u7C7B\u578B</p><h2 id="_2-unknown-\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#_2-unknown-\u7279\u6027" aria-hidden="true">#</a> 2.unknown \u7279\u6027</h2><ul><li>never \u662F<code>unknown</code>\u7684\u5B50\u7C7B\u578B</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">type</span><span style="color:#24292F;"> </span><span style="color:#953800;">isNever</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">never</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">extends</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">unknown</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">?</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">true</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">false</span><span style="color:#24292F;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>keyof unknown \u662F never</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">type</span><span style="color:#24292F;"> </span><span style="color:#953800;">key</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">keyof</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">unknown</span><span style="color:#24292F;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>unknown \u7C7B\u578B\u4E0D\u80FD\u88AB\u904D\u5386</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">type</span><span style="color:#24292F;"> </span><span style="color:#953800;">IMap</span><span style="color:#24292F;">&lt;</span><span style="color:#953800;">T</span><span style="color:#24292F;">&gt; </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  [</span><span style="color:#953800;">P</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">in</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">keyof</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">]</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">};</span></span>
<span class="line"><span style="color:#CF222E;">type</span><span style="color:#24292F;"> </span><span style="color:#953800;">t</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#953800;">IMap</span><span style="color:#24292F;">&lt;</span><span style="color:#0550AE;">unknown</span><span style="color:#24292F;">&gt;;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>unknown \u7C7B\u578B\u4E0D\u80FD\u548C number \u7C7B\u578B\u8FDB\u884C<code>+</code>\u8FD0\u7B97\uFF0C\u53EF\u4EE5\u7528\u4E8E\u7B49\u6216\u4E0D\u7B49\u64CD\u4F5C</p>`,19),p=[e];function c(r,t){return n(),a("div",null,p)}const y=s(o,[["render",c],["__file","16.unknown.html.vue"]]);export{y as default};
