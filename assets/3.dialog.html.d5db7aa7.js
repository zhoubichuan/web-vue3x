import{_ as s,o as n,c as a,a as l}from"./app.8390b8a1.js";const e="/web-vue3/assets/3.dialog.7821e346.png",p={},o=l('<h1 id="\u4E03-\u7279\u6B8A\u7A97\u53E3-\u5BF9\u8BDD\u6846" tabindex="-1"><a class="header-anchor" href="#\u4E03-\u7279\u6B8A\u7A97\u53E3-\u5BF9\u8BDD\u6846" aria-hidden="true">#</a> \u4E03.\u7279\u6B8A\u7A97\u53E3\uFF08\u5BF9\u8BDD\u6846\uFF09</h1><div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00 --&gt; \u5F39\u6846\u7EC4\u4EF6\u7279\u70B9</p><ul><li>\u4E0B\u62C9\u83DC\u5355\u7EC4\u4EF6\u5E94\u8BE5\u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF1A <ul><li>\u9009\u4E2D\u9879\u7684\u6587\u672C</li><li>\u5F85\u9009\u83DC\u5355\uFF08\u9ED8\u8BA4\u9690\u85CF\uFF09</li></ul></li><li>\u5B83\u7684\u4E3B\u8981\u529F\u80FD\u5305\u62EC\uFF1A <ul><li>\u9F20\u6807\u7ECF\u8FC7\u4E0B\u62C9\u83DC\u5355\u7EC4\u4EF6\uFF0C\u663E\u793A\u5F85\u9009\u83DC\u5355</li><li>\u9F20\u6807\u6ED1\u51FA\u4E0B\u62C9\u83DC\u5355\u7EC4\u4EF6\uFF0C\u9690\u85CF\u5F85\u9009\u83DC\u5355</li><li>\u9F20\u6807\u70B9\u51FB\u5F85\u9009\u83DC\u5355\u4E2D\u7684\u6761\u76EE\uFF0C\u9009\u4E2D\u9879\u6587\u672C\u66F4\u65B0\uFF0C\u7EC4\u4EF6\u6D3E\u53D1 change \u4E8B\u4EF6</li></ul></li></ul></div><p><img src="'+e+`" alt=""></p><pre><code>\u{1F3F7}\uFE0F \u95EE\u9898\u4E00\uFF1A\u591A\u4E2A\u5F39\u6846\uFF0C\u6709\u5C42\u7EA7\u95EE\u9898\uFF0C\u9700\u8981\u5168\u5C40\u8C03\u6574\u5C42\u7EA7
</code></pre><h2 id="_1-\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_1-\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 1.\u76EE\u5F55\u7ED3\u6784</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">\u251C\u2500\u2500 dialog                      </span></span>
<span class="line"><span style="color:#24292F;">\u2502   \u251C\u2500\u2500 dialog.vue       </span></span>
<span class="line"><span style="color:#24292F;">\u2502   \u2514\u2500\u2500 index.js                 </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> 1.\u4F7F\u7528\u573A\u666F</h2><p>\u5E73\u65F6\u6211\u4EEC\u5F00\u53D1\u65F6\u6211\u4EEC\u5199\u7684\u7EC4\u4EF6\u57FA\u672C\u4E0A\u90FD\u662F\u901A\u8FC7#app \u5B9E\u73B0\u6302\u8F7D\u5728\u9875\u9762\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> Vue </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;vue&quot;</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> App </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;./app.vue&quot;</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">Vue</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">  el: </span><span style="color:#0A3069;">&quot;#app&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">render</span><span style="color:#24292F;">: (</span><span style="color:#953800;">h</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">h</span><span style="color:#24292F;">(App),</span></span>
<span class="line"><span style="color:#24292F;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u7684\u7EC4\u5EFA\u4F7F\u7528\u65B9\u5F0F\uFF0C\u6709\u51E0\u4E2A\u7279\u70B9\uFF1A</p><ul><li>\u6240\u6709\u7684\u5185\u5BB9\uFF0C\u90FD\u662F\u5728<code>#app</code>\u8282\u70B9\u5185\u6E32\u67D3\u7684</li><li>\u7EC4\u4EF6\u7684\u6A21\u677F\uFF0C\u662F\u4E8B\u5148\u5B9A\u4E49\u597D\u7684</li><li>\u7531\u4E8E\u7EC4\u4EF6\u7684\u7279\u6027\uFF0C\u6CE8\u518C\u7684\u7EC4\u4EF6\u53EA\u80FD\u5728\u5F53\u524D\u4F4D\u7F6E\u6E32\u67D3</li></ul><p>\u5982\u679C\u5728\u4E00\u4E9B\u7279\u6B8A\u7684\u573A\u666F\u4E0B\u5C31\u6BD4\u8F83\u5C40\u9650\u4E86\uFF1A</p><ul><li>\u7EC4\u4EF6\u7684\u6A21\u677F\u662F\u901A\u8FC7\u8C03\u7528\u63A5\u53E3\u4ECE\u670D\u52A1\u7AEF\u83B7\u53D6\u7684\uFF0C\u9700\u8981\u52A8\u6001\u6E32\u67D3\u7EC4\u4EF6</li><li>\u5B9E\u73B0\u7C7B\u4F3C\u539F\u751F<code>window.alert()</code>\u7684\u63D0\u793A\u6846\u7EC4\u4EF6\uFF0C\u5B83\u7684\u4F4D\u7F6E\u662F\u5728<code>&lt;body&gt;</code>\u4E0B\uFF0C\u800C\u975E<code>&lt;div id=&quot;app&quot;&gt;</code>\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u901A\u8FC7\u5E38\u89C4\u7684\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u6807\u7B7E\u7684\u5F62\u5F0F\u4F7F\u7528\uFF0C\u800C\u662F\u50CF JS \u8C03\u7528\u51FD\u6570\u4E00\u6837\u4F7F\u7528\u3002</li></ul><p>\u4E00\u822C\u6765\u8BF4\uFF0C\u5728\u6211\u4EEC\u8BBF\u95EE\u9875\u9762\u65F6\uFF0C\u7EC4\u4EF6\u5C31\u5DF2\u7ECF\u6E32\u67D3\u597D\u4E86\uFF0C\u5BF9\u4E8E\u7B2C\u4E00\u4E2A\u573A\u666F\uFF0C\u7EC4\u4EF6\u7684\u6E32\u67D3\u662F\u5F02\u6B65\u7684\uFF0C\u751A\u81F3\u9884\u5148\u4E0D\u77E5\u9053\u6A21\u677F\u662F\u4EC0\u4E48\u3002\u5BF9\u4E8E\u7B2C\u4E8C\u4E2A\u573A\u666F\uFF0C\u901A\u8FC7\u64CD\u4F5C dom \u5F88\u5BB9\u6613\u5B9E\u73B0\u3002\u5BF9\u4E8E\u8FD9\u4E24\u79CD\u573A\u666F\uFF0C\u5728 vue \u4E2D\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 Vue.extend \u548C vm.$mount \u6765\u5B9E\u73B0</p><h2 id="_2-\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u7528\u6CD5" aria-hidden="true">#</a> 2.\u7528\u6CD5</h2><p>\u521B\u5EFA\u4E00\u4E2A vue \u5B9E\u4F8B\uFF0C\u90FD\u4F1A\u6709\u4E00\u4E2A\u9009\u9879<code>el</code>,\u6765\u6307\u5B9A\u5B9E\u4F8B\u7684\u6839\u8282\u70B9\uFF0C\u5982\u679C\u4E0D\u5199<code>el</code>\u9009\u9879\uFF0C\u90A3\u7EC4\u4EF6\u5C31\u5904\u4E8E\u672A\u6302\u8F7D\u72B6\u6001\u3002<code>Vue.extend</code>\u7684\u4F5C\u7528\uFF0C\u5C31\u662F\u57FA\u4E8E Vue \u6784\u9020\u5668\uFF0C\u521B\u5EFA\u4E00\u4E2A\u5B50\u7C7B\uFF0C\u5B83\u7684\u53C2\u6570\u548C<code>new Vue</code>\u7684\u57FA\u672C\u4E00\u81F4\uFF0C\u4F46<code>data</code>\u8981\u548C\u7EC4\u4EF6\u4E00\u6837\uFF0C\u662F\u4E2A\u51FD\u6570\uFF0C\u518D\u914D\u5408<code>$mount</code>\uFF0C\u5C31\u53EF\u4EE5\u8BA9\u7EC4\u4EF6\u6E32\u67D3\uFF0C\u5E76\u4E14\u6302\u8F7D\u5230\u4EFB\u610F\u6307\u5B9A\u7684\u8282\u70B9\u4E0A\u3002</p><p>\u521B\u5EFA\u4E00\u4E2A\u6784\u9020\u5668\uFF0C\u89E3\u51B3\u5F02\u6B65\u83B7\u53D6 template \u6A21\u677F\u7684\u95EE\u9898</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> Vue </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;vue&quot;</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">AlertComponent</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> Vue.</span><span style="color:#8250DF;">extend</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">  template: </span><span style="color:#0A3069;">&quot;&lt;div&gt;{{message}}&lt;/div&gt;&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">data</span><span style="color:#24292F;">() {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">      message: </span><span style="color:#0A3069;">&quot;hello&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    };</span></span>
<span class="line"><span style="color:#24292F;">  },</span></span>
<span class="line"><span style="color:#24292F;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u624B\u52A8\u6E32\u67D3\u7EC4\u4EF6\uFF0C\u5E76\u4E14\u6302\u8F7D\u5230 body \u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">component</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">AlertComponent</span><span style="color:#24292F;">().</span><span style="color:#8250DF;">$mount</span><span style="color:#24292F;">();</span></span>
<span class="line"><span style="color:#24292F;">document.body.</span><span style="color:#8250DF;">appendChild</span><span style="color:#24292F;">(component.$el);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u9664\u4E86 body\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u6302\u8F7D\u5230\u5176\u4ED6\u8282\u70B9\u4E0A</p><p><code>$mount</code>\u4E5F\u6709\u4E00\u4E9B\u5FEB\u6377\u7684\u6302\u8F7D\u65B9\u5F0F\uFF0C\u4EE5\u4E0B\u4E24\u79CD\u90FD\u662F\u53EF\u4EE5\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#6E7781;">// \u5728$mount\u91CC\u5199\u53C2\u6570\u6765\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9</span></span>
<span class="line"><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">AlertComponent</span><span style="color:#24292F;">().</span><span style="color:#8250DF;">$mount</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;#app&quot;</span><span style="color:#24292F;">);</span></span>
<span class="line"><span style="color:#6E7781;">// \u4E0D\u7528$mount\uFF0C\u76F4\u63A5\u5728\u521B\u5EFA\u5B9E\u4F8B\u662F\u6307\u5B9Ael\u9009\u9879</span></span>
<span class="line"><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">AlertComponent</span><span style="color:#24292F;">({ el: </span><span style="color:#0A3069;">&quot;#app&quot;</span><span style="color:#24292F;"> });</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9664\u4E86\u7528 extend \u5916\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u521B\u5EFA Vue \u5B9E\u4F8B\uFF0C\u5E76\u4E14\u7528\u4E00\u4E2A Render \u51FD\u6570\u6765\u6E32\u67D3\u4E00\u4E2A.vue \u6587\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> Vue </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;vue&quot;</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> Notification </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;./notification.vue&quot;</span><span style="color:#24292F;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">props</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Instance</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">Vue</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">render</span><span style="color:#24292F;">(</span><span style="color:#953800;">h</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">h</span><span style="color:#24292F;">(Notification, {</span></span>
<span class="line"><span style="color:#24292F;">      props: props,</span></span>
<span class="line"><span style="color:#24292F;">    });</span></span>
<span class="line"><span style="color:#24292F;">  },</span></span>
<span class="line"><span style="color:#24292F;">});</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">component</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> Instance.</span><span style="color:#8250DF;">$mount</span><span style="color:#24292F;">();</span></span>
<span class="line"><span style="color:#24292F;">document.body.</span><span style="color:#8250DF;">appendChild</span><span style="color:#24292F;">(component.$el);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u65E2\u53EF\u4EE5\u4F7F\u7528.vue \u6765\u5199\u590D\u6742\u7684\u7EC4\u4EF6\uFF0C\u8FD8\u53EF\u4EE5\u6839\u636E\u9700\u8981\u4F20\u5165\u9002\u5F53\u7684 props\u3002\u6E32\u67D3\u540E\uFF0C\u5982\u679C\u60F3\u64CD\u4F5C Render \u7684<code>Notfication</code>\u5B9E\u4F8B\uFF0C\u4E5F\u662F\u5F88\u7B80\u5355\u7684\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">notification</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> Instance.$children[</span><span style="color:#0550AE;">0</span><span style="color:#24292F;">];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u56E0\u4E3A Instance \u4E0B\u53EA render \u4E86 Notification \u4E00\u4E2A\u5B50\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u53EF\u4EE5\u989D\u7528<code>$children[0]</code>\u8BBF\u95EE\u5230</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6211\u4EEC\u4F7F\u7528<code>$mount</code>\u624B\u52A8\u6E32\u67D3\u7EC4\u4EF6\uFF0C\u5982\u679C\u8981\u9500\u6BC1\uFF0C\u4E5F\u8981\u7528<code>$destory</code>\u6765\u624B\u52A8\u9500\u6BC1\u5B9E\u4F8B\uFF0C\u5FC5\u8981\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u7528<code>removeChild</code>\u628A\u8282\u70B9\u4ECE DOM \u4E2D\u79FB\u9664</p><div class="custom-container warning"><p class="custom-container-title">\u4F7F\u7528\u573A\u666F</p><p>\u6211\u4EEC\u5728\u5199 Vue.js \u65F6\uFF0C\u4E0D\u8BBA\u662F\u7528 CDN \u7684\u65B9\u5F0F\u8FD8\u662F\u5728 Webpack \u91CC\u7528 npm \u5F15\u5165 Vue.js,\u90FD\u4F1A\u6709\u4E00\u4E2A\u6839\u8282\u70B9\uFF0C\u5E76\u4E14\u521B\u5EFA\u4E00\u4E2A\u6839\u5B9E\u4F8B\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292F;">  &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">app</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">Vue</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">  el: </span><span style="color:#0A3069;">&quot;#app&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">});</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Webpack \u4E5F\u7C7B\u4F3C\uFF0C\u4E00\u822C\u5728\u5165\u53E3\u6587\u4EF6 main.js \u91CC\uFF0C\u6700\u540E\u4F1A\u521B\u5EFA\u4E00\u4E2A\u5B9E\u5217\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> Vue </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;vue&quot;</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> App </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;./app.vue&quot;</span><span style="color:#24292F;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">Vue</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">  el: </span><span style="color:#0A3069;">&quot;#app&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">render</span><span style="color:#24292F;">: (</span><span style="color:#953800;">h</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> App,</span></span>
<span class="line"><span style="color:#24292F;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3A\u7528 Webpack \u57FA\u672C\u90FD\u662F\u524D\u7AEF\u8DEF\u7531\u7684\uFF0C\u5B83\u7684 html \u91CC\u4E00\u822C\u90FD\u53EA\u6709\u4E00\u4E2A\u6839\u8282\u70B9<code>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code>,\u5176\u4F59\u90FD\u662F\u901A\u8FC7 JavaScript \u5B8C\u6210\uFF0C\u4E5F\u5C31\u662F\u8BB8\u591A\u7684 Vue.js \u7EC4\u4EF6\uFF08\u6BCF\u4E2A\u9875\u9762\u4E5F\u662F\u4E00\u4E2A\uFF09\u3002</p><p>\u6709\u4E86\u521D\u59CB\u5316\u7684\u5B9E\u4F8B\uFF0C\u4E4B\u540E\u6240\u6709\u7684\u9875\u9762\uFF0C\u90FD\u7531 vue-router \u5E2E\u6211\u4EEC\u7BA1\u7406\uFF0C\u7EC4\u4EF6\u4E5F\u90FD\u662F\u7528<code>import</code>\u5BFC\u5165\u540E\u5C40\u90E8\u6CE8\u518C\uFF08\u4E5F\u6709\u5728 main.js \u5168\u5C40\u6CE8\u518C\u7684\uFF09,\u4E0D\u7BA1\u54EA\u79CD\u65B9\u5F0F\uFF0C\u7EC4\u4EF6\uFF08\u6216\u9875\u9762\uFF09\u7684\u521B\u5EFA\u8FC7\u7A0B\u6211\u4EEC\u662F\u65E0\u9700\u5173\u5FC3\u7684\uFF0C\u53EA\u662F\u5199\u597D<code>.vue</code>\u6587\u4EF6\u5E76\u5BFC\u5165\u5373\u53EF\u3002\u8FD9\u6837\u7684\u7EC4\u4EF6\u4F7F\u7528\u65B9\u5F0F\uFF0C\u6709\u51E0\u4E2A\u7279\u70B9\uFF1A</p><ul><li>1.\u6240\u6709\u7684\u5185\u5BB9\uFF0C\u90FD\u662F\u5728<code>#app</code>\u8282\u70B9\u5185\u6E32\u67D3\u7684\uFF1B</li><li>2.\u7EC4\u4EF6\u7684\u6A21\u677F\uFF0C\u662F\u4E8B\u5148\u5B9A\u4E49\u597D\u7684</li><li>3.\u7531\u4E8E\u7EC4\u4EF6\u7684\u7279\u6027\uFF0C\u6CE8\u518C\u7684\u7EC4\u4EF6\u53EA\u80FD\u5728\u5F53\u524D\u4F4D\u7F6E\u6E32\u67D3</li></ul></div>`,30),c=[o];function i(r,t){return n(),a("div",null,c)}const y=s(p,[["render",i],["__file","3.dialog.html.vue"]]);export{y as default};
