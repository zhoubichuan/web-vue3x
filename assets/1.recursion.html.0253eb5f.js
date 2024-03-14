import{_ as s,o as n,c as l,a}from"./app.8390b8a1.js";const p={},e=a(`<h1 id="\u516D-\u5BFC\u822A-\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u516D-\u5BFC\u822A-\u83DC\u5355" aria-hidden="true">#</a> \u516D.\u5BFC\u822A\uFF08\u83DC\u5355\uFF09</h1><div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00 --&gt; \u83DC\u5355\u7EC4\u4EF6\u7279\u70B9</p><p>\u9012\u5F52\u7EC4\u4EF6\u5C31\u662F\u7EC4\u4EF6\u5728\u6A21\u677F\u4E2D\u8C03\u7528\u81EA\u5DF1\uFF0C\u9700\u8981\u6EE1\u8DB3\u4E24\u4E2A\u6761\u4EF6\uFF1A</p><ul><li>\u5728\u7EC4\u4EF6\u4E2D\u8BBE\u7F6E\u4E00\u4E2A<code>name</code>\u9009\u9879\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u5B57\u6BB5\u62FF\u5230\u7EC4\u4EF6</li><li>\u52A0\u4E0A\u7ED3\u675F\u6761\u4EF6\uFF0C\u9632\u6B62\u4E00\u76F4\u9012\u5F52\u4E0B\u53BB\uFF0C\u629B\u51FA<code>max stack size exeeded</code>\u9519\u8BEF</li></ul></div><h2 id="_1-\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_1-\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 1.\u76EE\u5F55\u7ED3\u6784</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">\u251C\u2500\u2500 table                      </span></span>
<span class="line"><span style="color:#24292F;">\u2502   \u251C\u2500\u2500 dropdown-item.vue       </span></span>
<span class="line"><span style="color:#24292F;">\u2502   \u251C\u2500\u2500 dropdown-menu.vue           </span></span>
<span class="line"><span style="color:#24292F;">\u2502   \u251C\u2500\u2500 dropdown.vue                 </span></span>
<span class="line"><span style="color:#24292F;">\u2502   \u2514\u2500\u2500 index.js                 </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-\u5B9E\u73B0\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-\u5B9E\u73B0\u65B9\u5F0F" aria-hidden="true">#</a> 1.\u5B9E\u73B0\u65B9\u5F0F</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">  &lt;</span><span style="color:#116329;">my-component</span><span style="color:#24292F;"> :</span><span style="color:#0550AE;">count</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">count </span><span style="color:#CF222E;">+</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">1</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">v-if</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">count </span><span style="color:#CF222E;">&lt;=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">5</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">&gt;&lt;/</span><span style="color:#116329;">my-component</span><span style="color:#24292F;">&gt; </span><span style="color:#6E7781;">&lt;!-- 2.\u6DFB\u52A0\u9650\u5B9A\u6761\u4EF6 --&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#CF222E;">export</span><span style="color:#953800;"> </span><span style="color:#CF222E;">default</span><span style="color:#953800;"> {</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">name: </span><span style="color:#0A3069;">&quot;my-component&quot;</span><span style="color:#953800;">, </span><span style="color:#6E7781;">// 1.\u6DFB\u52A0\u540D\u79F0\u6807\u8BC6</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">props: {</span></span>
<span class="line"><span style="color:#24292F;">    count: {</span></span>
<span class="line"><span style="color:#24292F;">      type: </span><span style="color:#0550AE;">Number</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">      default: </span><span style="color:#0550AE;">1</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    },</span></span>
<span class="line"><span style="color:#24292F;">  }</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">}</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u63D0\u793A</p><p>\u9012\u5F52\u7EC4\u4EF6\u5E38\u7528\u6765\u5F00\u53D1\u5177\u6709\u4F4D\u7F6E\u5C42\u7EA7\u5173\u7CFB\u7684\u72EC\u7ACB\u7EC4\u4EF6\uFF0C\u8FD9\u7C7B\u7EC4\u4EF6\u4E00\u822C\u90FD\u662F\u6570\u636E\u9A71\u52A8\u578B\u7684\uFF0C\u7236\u7EA7\u6709\u4E00\u4E2A\u5B57\u6BB5 children,\u7136\u540E\u9012\u5F52</p></div><h2 id="_2-\u4F7F\u7528\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528\u6848\u4F8B" aria-hidden="true">#</a> 2.\u4F7F\u7528\u6848\u4F8B</h2><p>\u4F7F\u7528 vue \u7684\u9012\u5F52\u7EC4\u4EF6\u5199\u4E00\u4E2A\u83DC\u5355\u7EC4\u4EF6\uFF0C\u5B9E\u73B0\u65E0\u9650\u83DC\u5355</p><details class="custom-container details"><summary>App.vue \u6848\u4F8B</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">  &lt;</span><span style="color:#116329;">div</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">id</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;app&quot;</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">    &lt;</span><span style="color:#116329;">Menu</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">      &lt;</span><span style="color:#116329;">template</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">v-for</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">menu </span><span style="color:#CF222E;">in</span><span style="color:#24292F;"> menuList</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">        &lt;</span><span style="color:#116329;">MenuItem</span><span style="color:#24292F;"> :</span><span style="color:#0550AE;">key</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">menu.title</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">v-if</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;</span><span style="color:#CF222E;">!</span><span style="color:#24292F;">menu.children</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">          {{ menu.title }}</span></span>
<span class="line"><span style="color:#24292F;">        &lt;/</span><span style="color:#116329;">MenuItem</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">        &lt;</span><span style="color:#116329;">ReSubMenu</span><span style="color:#24292F;"> :</span><span style="color:#0550AE;">key</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">menu.title</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">v-else</span><span style="color:#24292F;"> :</span><span style="color:#0550AE;">data</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">menu</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">&gt;&lt;/</span><span style="color:#116329;">ReSubMenu</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">      &lt;/</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">    &lt;/</span><span style="color:#116329;">Menu</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">  &lt;/</span><span style="color:#116329;">div</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> Menu </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;./Menu&quot;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> MenuItem </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;./MenuItem&quot;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> SubMenu </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;./SubMenu&quot;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> ReSubMenu </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;./ReSubMenu&quot;</span></span>
<span class="line"><span style="color:#CF222E;">export</span><span style="color:#953800;"> </span><span style="color:#CF222E;">default</span><span style="color:#953800;"> {</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#8250DF;">data</span><span style="color:#953800;">() </span><span style="color:#24292F;">{</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">      msg: </span><span style="color:#0A3069;">&quot;hello&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">      menuList: [</span></span>
<span class="line"><span style="color:#24292F;">        {</span></span>
<span class="line"><span style="color:#24292F;">          title: </span><span style="color:#0A3069;">&quot;\u83DC\u53551&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">          children: [</span></span>
<span class="line"><span style="color:#24292F;">            {</span></span>
<span class="line"><span style="color:#24292F;">              title: </span><span style="color:#0A3069;">&quot;\u83DC\u53551-1&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">              children: [</span></span>
<span class="line"><span style="color:#24292F;">                { title: </span><span style="color:#0A3069;">&quot;\u83DC\u53551-1-1&quot;</span><span style="color:#24292F;"> },</span></span>
<span class="line"><span style="color:#24292F;">                { title: </span><span style="color:#0A3069;">&quot;\u83DC\u53551-1-2&quot;</span><span style="color:#24292F;"> },</span></span>
<span class="line"><span style="color:#24292F;">                {</span></span>
<span class="line"><span style="color:#24292F;">                  title: </span><span style="color:#0A3069;">&quot;\u83DC\u53551-1-3&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">                  children: [</span></span>
<span class="line"><span style="color:#24292F;">                    { title: </span><span style="color:#0A3069;">&quot;\u83DC\u53551-1-1&quot;</span><span style="color:#24292F;"> },</span></span>
<span class="line"><span style="color:#24292F;">                    { title: </span><span style="color:#0A3069;">&quot;\u83DC\u53551-1-2&quot;</span><span style="color:#24292F;"> },</span></span>
<span class="line"><span style="color:#24292F;">                    {</span></span>
<span class="line"><span style="color:#24292F;">                      title: </span><span style="color:#0A3069;">&quot;\u83DC\u53551-1-3&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">                      children: [</span></span>
<span class="line"><span style="color:#24292F;">                        { title: </span><span style="color:#0A3069;">&quot;\u83DC\u53551-1-1&quot;</span><span style="color:#24292F;"> },</span></span>
<span class="line"><span style="color:#24292F;">                        { title: </span><span style="color:#0A3069;">&quot;\u83DC\u53551-1-2&quot;</span><span style="color:#24292F;"> },</span></span>
<span class="line"><span style="color:#24292F;">                        {</span></span>
<span class="line"><span style="color:#24292F;">                          title: </span><span style="color:#0A3069;">&quot;\u83DC\u53551-1-3&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">                          children: [</span></span>
<span class="line"><span style="color:#24292F;">                            { title: </span><span style="color:#0A3069;">&quot;\u83DC\u53551-1-1&quot;</span><span style="color:#24292F;"> },</span></span>
<span class="line"><span style="color:#24292F;">                            { title: </span><span style="color:#0A3069;">&quot;\u83DC\u53551-1-2&quot;</span><span style="color:#24292F;"> },</span></span>
<span class="line"><span style="color:#24292F;">                            { title: </span><span style="color:#0A3069;">&quot;\u83DC\u53551-1-3&quot;</span><span style="color:#24292F;"> },</span></span>
<span class="line"><span style="color:#24292F;">                          ],</span></span>
<span class="line"><span style="color:#24292F;">                        },</span></span>
<span class="line"><span style="color:#24292F;">                      ],</span></span>
<span class="line"><span style="color:#24292F;">                    },</span></span>
<span class="line"><span style="color:#24292F;">                  ],</span></span>
<span class="line"><span style="color:#24292F;">                },</span></span>
<span class="line"><span style="color:#24292F;">              ],</span></span>
<span class="line"><span style="color:#24292F;">            },</span></span>
<span class="line"><span style="color:#24292F;">            { title: </span><span style="color:#0A3069;">&quot;\u83DC\u53551-2&quot;</span><span style="color:#24292F;"> },</span></span>
<span class="line"><span style="color:#24292F;">            { title: </span><span style="color:#0A3069;">&quot;\u83DC\u53551-3&quot;</span><span style="color:#24292F;"> },</span></span>
<span class="line"><span style="color:#24292F;">          ],</span></span>
<span class="line"><span style="color:#24292F;">        },</span></span>
<span class="line"><span style="color:#24292F;">        {</span></span>
<span class="line"><span style="color:#24292F;">          title: </span><span style="color:#0A3069;">&quot;\u83DC\u53552&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">        },</span></span>
<span class="line"><span style="color:#24292F;">        {</span></span>
<span class="line"><span style="color:#24292F;">          title: </span><span style="color:#0A3069;">&quot;\u83DC\u53553&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">        },</span></span>
<span class="line"><span style="color:#24292F;">      ],</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">  }</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">components: {</span></span>
<span class="line"><span style="color:#24292F;">    Menu,</span></span>
<span class="line"><span style="color:#24292F;">    MenuItem,</span></span>
<span class="line"><span style="color:#24292F;">    SubMenu,</span></span>
<span class="line"><span style="color:#24292F;">    ReSubMenu,</span></span>
<span class="line"><span style="color:#24292F;">  }</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">}</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">style</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#0550AE;">#app</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">color</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">red</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">style</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><ul><li>Menu.vue</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">  &lt;</span><span style="color:#116329;">ul</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">class</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;menu&quot;</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">    &lt;</span><span style="color:#116329;">slot</span><span style="color:#24292F;">&gt;&lt;/</span><span style="color:#116329;">slot</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">  &lt;/</span><span style="color:#116329;">ul</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MenuItem</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">  &lt;</span><span style="color:#116329;">li</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">    &lt;</span><span style="color:#116329;">slot</span><span style="color:#24292F;">&gt;&lt;/</span><span style="color:#116329;">slot</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">  &lt;/</span><span style="color:#116329;">li</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ReSubMenu.vue</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">  &lt;</span><span style="color:#116329;">SubMenu</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">    &lt;</span><span style="color:#116329;">template</span><span style="color:#24292F;"> #</span><span style="color:#0550AE;">title</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">      {{ data.title }}</span></span>
<span class="line"><span style="color:#24292F;">    &lt;/</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">    &lt;</span><span style="color:#116329;">template</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">v-for</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">child </span><span style="color:#CF222E;">in</span><span style="color:#24292F;"> data.children</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#6E7781;">&lt;!-- \u5982\u679C\u6CA1\u513F\u5B50 \u76F4\u63A5\u6E32\u67D3MenuItem \u5982\u679C\u6709\u513F\u5B50 \u5C06\u513F\u5B50\u9012\u5F52\u4F20\u5165 --&gt;</span></span>
<span class="line"><span style="color:#24292F;">      &lt;</span><span style="color:#116329;">MenuItem</span><span style="color:#24292F;"> :</span><span style="color:#0550AE;">key</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">child.title</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">v-if</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;</span><span style="color:#CF222E;">!</span><span style="color:#24292F;">child.children</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">&gt;{{</span></span>
<span class="line"><span style="color:#24292F;">        child.title</span></span>
<span class="line"><span style="color:#24292F;">      }}&lt;/</span><span style="color:#116329;">MenuItem</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">      &lt;</span><span style="color:#116329;">ReSub</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">v-else</span><span style="color:#24292F;"> :</span><span style="color:#0550AE;">key</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">child.title</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;"> :</span><span style="color:#0550AE;">data</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">child</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">&gt;&lt;/</span><span style="color:#116329;">ReSub</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">    &lt;/</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">  &lt;/</span><span style="color:#116329;">SubMenu</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> SubMenu </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;./SubMenu&quot;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> MenuItem </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;./MenuItem&quot;</span></span>
<span class="line"><span style="color:#CF222E;">export</span><span style="color:#953800;"> </span><span style="color:#CF222E;">default</span><span style="color:#953800;"> {</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">name: </span><span style="color:#0A3069;">&quot;ReSub&quot;</span><span style="color:#953800;">, </span><span style="color:#6E7781;">//\u53EF\u4EE5\u4F7F\u7528\u9012\u5F52\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">props: {</span></span>
<span class="line"><span style="color:#24292F;">    data: {</span></span>
<span class="line"><span style="color:#24292F;">      type: </span><span style="color:#0550AE;">Object</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#8250DF;">default</span><span style="color:#24292F;">: () </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> ({}),</span></span>
<span class="line"><span style="color:#24292F;">    },</span></span>
<span class="line"><span style="color:#24292F;">  }</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">components: {</span></span>
<span class="line"><span style="color:#24292F;">    SubMenu,</span></span>
<span class="line"><span style="color:#24292F;">    MenuItem,</span></span>
<span class="line"><span style="color:#24292F;">  }</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">}</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>SubMenu.vue</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">  &lt;</span><span style="color:#116329;">div</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">    &lt;</span><span style="color:#116329;">div</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">class</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;title&quot;</span><span style="color:#24292F;"> @</span><span style="color:#0550AE;">click</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">change</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">      &lt;</span><span style="color:#116329;">slot</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">name</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;title&quot;</span><span style="color:#24292F;">&gt;&lt;/</span><span style="color:#116329;">slot</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">    &lt;/</span><span style="color:#116329;">div</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">    &lt;</span><span style="color:#116329;">div</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">v-show</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;">flag</span><span style="color:#0A3069;">&quot;</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">class</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;sub&quot;</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">      &lt;</span><span style="color:#116329;">slot</span><span style="color:#24292F;">&gt;&lt;/</span><span style="color:#116329;">slot</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">    &lt;/</span><span style="color:#116329;">div</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">  &lt;/</span><span style="color:#116329;">div</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#CF222E;">export</span><span style="color:#953800;"> </span><span style="color:#CF222E;">default</span><span style="color:#953800;"> {</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#8250DF;">data</span><span style="color:#953800;">() </span><span style="color:#24292F;">{</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> { flag: </span><span style="color:#0550AE;">false</span><span style="color:#24292F;"> }</span></span>
<span class="line"><span style="color:#24292F;">  }</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">methods: {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">change</span><span style="color:#24292F;">() {</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.flag </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">!</span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.flag</span></span>
<span class="line"><span style="color:#24292F;">    },</span></span>
<span class="line"><span style="color:#24292F;">  }</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">}</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">style</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#0550AE;">.sub</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">padding-left</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">10</span><span style="color:#CF222E;">px</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">style</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> 3.\u4F7F\u7528\u573A\u666F</h2><ul><li>\u7EA7\u8054\u9009\u62E9\u5668</li><li>\u6811\u5F62\u63A7\u4EF6</li><li>\u83DC\u5355</li></ul><div class="custom-container tip"><p class="custom-container-title">\u603B\u7ED3</p><p>\u5408\u7406\u4F7F\u7528\u52A8\u6001\u7EC4\u4EF6\u53EF\u4EE5\u8BA9\u6211\u4EEC\u5199\u51FA\u7684\u4EE3\u7801\u66F4\u52A0\u7B80\u6D01\uFF0C\u51CF\u5C11\u5197\u4F59\u4EE3\u7801</p></div>`,21),o=[e];function c(t,i){return n(),l("div",null,o)}const y=s(p,[["render",c],["__file","1.recursion.html.vue"]]);export{y as default};
