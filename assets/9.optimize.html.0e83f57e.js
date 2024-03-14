import{_ as s,o as n,c as a,a as l}from"./app.8390b8a1.js";const e={},p=l(`<h1 id="\u4E5D-\u9879\u76EE\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u4E5D-\u9879\u76EE\u4F18\u5316" aria-hidden="true">#</a> \u4E5D.\u9879\u76EE\u4F18\u5316</h1><div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>vue \u9879\u76EE\u4E2D\u9700\u8981\u4F18\u5316\u7684\u5730\u65B9\uFF0C\u4EE5\u53CA\u76F8\u5173\u7684\u89E3\u51B3\u65B9\u6848</p></div><h2 id="_1-\u9884\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#_1-\u9884\u6E32\u67D3" aria-hidden="true">#</a> 1.\u9884\u6E32\u67D3</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">npm i prerender-spa-plugin</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7F3A\u9677\u6570\u636E\u4E0D\u591F\u52A8\u6001\uFF0C\u53EF\u4EE5\u4F7F\u7528 ssr \u670D\u52A1\u7AEF\u6E32\u67D3</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">PrerenderSPAPlugin</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">require</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;prerender-spa-plugin&quot;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">path</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">require</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;path&quot;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#0550AE;">module</span><span style="color:#24292F;">.</span><span style="color:#0550AE;">exports</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  configureWebpack: {</span></span>
<span class="line"><span style="color:#24292F;">    plugins: [</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">PrerenderSPAPlugin</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">        staticDir: path.</span><span style="color:#8250DF;">join</span><span style="color:#24292F;">(__dirname, </span><span style="color:#0A3069;">&quot;dist&quot;</span><span style="color:#24292F;">),</span></span>
<span class="line"><span style="color:#24292F;">        routes: [</span><span style="color:#0A3069;">&quot;/&quot;</span><span style="color:#24292F;">, </span><span style="color:#0A3069;">&quot;/about&quot;</span><span style="color:#24292F;">],</span></span>
<span class="line"><span style="color:#24292F;">      }),</span></span>
<span class="line"><span style="color:#24292F;">    ],</span></span>
<span class="line"><span style="color:#24292F;">  },</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u9AA8\u67B6\u5C4F" tabindex="-1"><a class="header-anchor" href="#_2-\u9AA8\u67B6\u5C4F" aria-hidden="true">#</a> 2.\u9AA8\u67B6\u5C4F</h2><p>\u914D\u7F6E webpack \u63D2\u4EF6 vue-skeleton-webpack-plugin</p><p>\u5355\u9875\u9AA8\u67B6\u5C4F\u5E55</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> Vue </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;vue&quot;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> Skeleton </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;./Skeleton.vue&quot;</span></span>
<span class="line"><span style="color:#CF222E;">export</span><span style="color:#953800;"> </span><span style="color:#CF222E;">default</span><span style="color:#953800;"> </span><span style="color:#CF222E;">new</span><span style="color:#953800;"> </span><span style="color:#8250DF;">Vue</span><span style="color:#953800;">({</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">components: {</span></span>
<span class="line"><span style="color:#24292F;">    Skeleton: Skeleton,</span></span>
<span class="line"><span style="color:#24292F;">  }</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">template: </span><span style="color:#0A3069;">\`</span></span>
<span class="line"><span style="color:#0A3069;">        &lt;Skeleton&gt;&lt;/Skeleton&gt;    </span></span>
<span class="line"><span style="color:#0A3069;">    \`</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">})</span></span>
<span class="line"><span style="color:#6E7781;">// \u9AA8\u67B6\u5C4F</span></span>
<span class="line"><span style="color:#953800;">plugins</span><span style="color:#24292F;">: [</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">SkeletonWebpackPlugin</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">    webpackConfig: {</span></span>
<span class="line"><span style="color:#24292F;">      entry: {</span></span>
<span class="line"><span style="color:#24292F;">        app: </span><span style="color:#8250DF;">resolve</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;./src/entry-skeleton.js&quot;</span><span style="color:#24292F;">),</span></span>
<span class="line"><span style="color:#24292F;">      },</span></span>
<span class="line"><span style="color:#24292F;">    },</span></span>
<span class="line"><span style="color:#24292F;">  }),</span></span>
<span class="line"><span style="color:#24292F;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E26\u8DEF\u7531\u7684\u9AA8\u67B6\u5C4F\uFF0C\u7F16\u5199 skeleton.js \u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> Vue </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;vue&quot;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> Skeleton1 </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;./Skeleton1&quot;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> Skeleton2 </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;./Skeleton2&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">export</span><span style="color:#953800;"> </span><span style="color:#CF222E;">default</span><span style="color:#953800;"> </span><span style="color:#CF222E;">new</span><span style="color:#953800;"> </span><span style="color:#8250DF;">Vue</span><span style="color:#953800;">({</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">components: {</span></span>
<span class="line"><span style="color:#24292F;">    Skeleton1,</span></span>
<span class="line"><span style="color:#24292F;">    Skeleton2,</span></span>
<span class="line"><span style="color:#24292F;">  }</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">template: </span><span style="color:#0A3069;">\`</span></span>
<span class="line"><span style="color:#0A3069;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#0A3069;">            &lt;skeleton1 id=&quot;skeleton1&quot; style=&quot;display:none&quot;/&gt;</span></span>
<span class="line"><span style="color:#0A3069;">            &lt;skeleton2 id=&quot;skeleton2&quot; style=&quot;display:none&quot;/&gt;</span></span>
<span class="line"><span style="color:#0A3069;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#0A3069;">    \`</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">SkeletonWebpackPlugin</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">  webpackConfig: {</span></span>
<span class="line"><span style="color:#24292F;">    entry: {</span></span>
<span class="line"><span style="color:#24292F;">      app: path.</span><span style="color:#8250DF;">join</span><span style="color:#24292F;">(__dirname, </span><span style="color:#0A3069;">&quot;./src/skeleton.js&quot;</span><span style="color:#24292F;">),</span></span>
<span class="line"><span style="color:#24292F;">    },</span></span>
<span class="line"><span style="color:#24292F;">  },</span></span>
<span class="line"><span style="color:#24292F;">  router: {</span></span>
<span class="line"><span style="color:#24292F;">    mode: </span><span style="color:#0A3069;">&quot;history&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    routes: [</span></span>
<span class="line"><span style="color:#24292F;">      {</span></span>
<span class="line"><span style="color:#24292F;">        path: </span><span style="color:#0A3069;">&quot;/&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">        skeletonId: </span><span style="color:#0A3069;">&quot;skeleton1&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">      },</span></span>
<span class="line"><span style="color:#24292F;">      {</span></span>
<span class="line"><span style="color:#24292F;">        path: </span><span style="color:#0A3069;">&quot;/about&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">        skeletonId: </span><span style="color:#0A3069;">&quot;skeleton2&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">      },</span></span>
<span class="line"><span style="color:#24292F;">    ],</span></span>
<span class="line"><span style="color:#24292F;">  },</span></span>
<span class="line"><span style="color:#24292F;">  minimize: </span><span style="color:#0550AE;">true</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">  quiet: </span><span style="color:#0550AE;">true</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4F18\u5316\u767D\u5C4F\u6548\u679C \u5B9E\u73B0\u9AA8\u67B6\u5C4F\u63D2\u4EF6</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">class</span><span style="color:#24292F;"> </span><span style="color:#953800;">MyPlugin</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">apply</span><span style="color:#24292F;">(</span><span style="color:#953800;">compiler</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">    compiler.</span><span style="color:#8250DF;">plugin</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;compilation&quot;</span><span style="color:#24292F;">, (</span><span style="color:#953800;">compilation</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">      compilation.</span><span style="color:#8250DF;">plugin</span><span style="color:#24292F;">(</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#0A3069;">&quot;html-webpack-plugin-before-html-processing&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">        (</span><span style="color:#953800;">data</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">          data.html </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> data.html.</span><span style="color:#8250DF;">replace</span><span style="color:#24292F;">(</span></span>
<span class="line"><span style="color:#24292F;">            </span><span style="color:#0A3069;">\`&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;\`</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">            </span><span style="color:#0A3069;">\`</span></span>
<span class="line"><span style="color:#0A3069;">            &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#0A3069;">                &lt;div id=&quot;home&quot; style=&quot;display:none&quot;&gt;\u9996\u9875 \u9AA8\u67B6\u5C4F&lt;/div&gt;</span></span>
<span class="line"><span style="color:#0A3069;">                &lt;div id=&quot;about&quot; style=&quot;display:none&quot;&gt;about\u9875\u9762\u9AA8\u67B6\u5C4F&lt;/div&gt;</span></span>
<span class="line"><span style="color:#0A3069;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#0A3069;">            &lt;script&gt;</span></span>
<span class="line"><span style="color:#0A3069;">                if(window.hash == &#39;#/about&#39; ||  location.pathname==&#39;/about&#39;){</span></span>
<span class="line"><span style="color:#0A3069;">                    document.getElementById(&#39;about&#39;).style.display=&quot;block&quot;</span></span>
<span class="line"><span style="color:#0A3069;">                }else{</span></span>
<span class="line"><span style="color:#0A3069;">                    document.getElementById(&#39;home&#39;).style.display=&quot;block&quot;</span></span>
<span class="line"><span style="color:#0A3069;">                }</span></span>
<span class="line"><span style="color:#0A3069;">            &lt;/script&gt;</span></span>
<span class="line"><span style="color:#0A3069;">            \`</span></span>
<span class="line"><span style="color:#24292F;">          )</span></span>
<span class="line"><span style="color:#24292F;">          </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> data</span></span>
<span class="line"><span style="color:#24292F;">        }</span></span>
<span class="line"><span style="color:#24292F;">      )</span></span>
<span class="line"><span style="color:#24292F;">    })</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[p];function i(c,t){return n(),a("div",null,o)}const d=s(e,[["render",i],["__file","9.optimize.html.vue"]]);export{d as default};
