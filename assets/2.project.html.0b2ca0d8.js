import{_ as t,o as d,c as s,a as e}from"./app.8390b8a1.js";const n="/web-vue3/assets/13.deploy.2dc9f952.png",a={},l=e(`<h1 id="\u4E8C-\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u4E8C-\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u4E8C.\u521B\u5EFA\u9879\u76EE</h1><div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u4E86\u89E3 vue \u9879\u76EE\u521B\u5EFA\u8FC7\u7A0B\u4EE5\u53CA\u5176\u76EE\u5F55\u7ED3\u6784\uFF0C\u5728\u5F00\u53D1\u4E2D\u9700\u8981\u6CE8\u610F\u7684\u5730\u65B9\uFF0C\u80FD\u591F\u66F4\u597D\u5730\u89C4\u8303\u524D\u7AEF\u5F00\u53D1</p></div><h2 id="_1-vue-cli-2-x-\u4E2D" tabindex="-1"><a class="header-anchor" href="#_1-vue-cli-2-x-\u4E2D" aria-hidden="true">#</a> 1.vue-cli 2.x \u4E2D</h2><ul><li>\u5B89\u88C5<code>vue-cli</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">npm install -g vue-cli</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u9879\u76EE\u521B\u5EFA</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">vue init </span><span style="color:#CF222E;">&lt;</span><span style="color:#24292F;">template-name</span><span style="color:#CF222E;">&gt;</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">&lt;</span><span style="color:#24292F;">project-name</span><span style="color:#CF222E;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">npm i</span></span>
<span class="line"><span style="color:#24292F;">npm run dev</span></span>
<span class="line"><span style="color:#6E7781;"># \u4F7F\u7528\u65E7\u7248\uFF082.X\uFF09\u521B\u5EFA</span></span>
<span class="line"><span style="color:#24292F;">npm install -g @vue/cli-init</span></span>
<span class="line"><span style="color:#6E7781;"># &#39;vue init&#39;\u7684\u8FD0\u884C\u6548\u679C\u4E0E\u2018vue-cli@2.x\u2019\u76F8\u540C</span></span>
<span class="line"><span style="color:#24292F;">vue init webpack projectname</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-vue-cli-3-x-\u4E2D" tabindex="-1"><a class="header-anchor" href="#_2-vue-cli-3-x-\u4E2D" aria-hidden="true">#</a> 2.vue-cli 3.x \u4E2D</h2><h3 id="_2-1-\u5B89\u88C5-vue-cli" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5B89\u88C5-vue-cli" aria-hidden="true">#</a> 2.1 \u5B89\u88C5 <code>@vue/cli</code></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">node -v             </span><span style="color:#6E7781;"># Vue-cli3.0 \u9700\u8981\u5728 Node.js 8.9 \u6216\u66F4\u9AD8\u7248\u672C</span></span>
<span class="line"><span style="color:#24292F;">npm -v              </span><span style="color:#6E7781;"># \u5728\u5B89\u88C5 node \u7684\u65F6\u5019\uFF0Cnpm \u5305\u7BA1\u7406\u5668\u4F1A\u81EA\u52A8\u5B89\u88C5\uFF0C\u901A\u8FC7\u67E5\u770B npm \u7248\u672C\u6765\u5224\u65AD\u662F\u5426\u5B89\u88C5\u6210\u529F</span></span>
<span class="line"><span style="color:#24292F;">npm i -g @vue/cli   </span><span style="color:#6E7781;"># \u6216\u8005\u4F7F\u7528yarn\u5B89\u88C5 yarn install -g @vue/cli  \u5168\u5C40\u5B89\u88C5 Vue-cli 3.0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u901A\u8FC7-vue-cli-\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_2-2-\u901A\u8FC7-vue-cli-\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> 2.2 \u901A\u8FC7 <code>@vue/cli</code> \u521B\u5EFA\u9879\u76EE</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">vue create vue3-demo</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-\u8FD0\u884C\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_2-3-\u8FD0\u884C\u9879\u76EE" aria-hidden="true">#</a> 2.3 \u8FD0\u884C\u9879\u76EE</h3><ul><li><p>\u67E5\u770B vue \u7248\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">vue --version </span><span style="color:#6E7781;"># \u67E5\u8BE2\u7248\u672C\u662F\u5426\u4E3A3.x</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u542F\u52A8\u9879\u76EE</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">yarn serve </span><span style="color:#6E7781;"># \u6216\u8005 npm run serve</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="_2-4-\u9879\u76EE\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_2-4-\u9879\u76EE\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 2.4 \u9879\u76EE\u76EE\u5F55\u7ED3\u6784</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">\u251C\u2500\u2500 node_modules     </span><span style="color:#6E7781;"># \u9879\u76EE\u4F9D\u8D56\u5305\u76EE\u5F55\uFF0C\u5B58\u653E\u4E0B\u8F7D\u4F9D\u8D56\u7684\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#24292F;">\u251C\u2500\u2500 public           </span><span style="color:#6E7781;"># \u5B58\u653E\u4E0D\u4F1A\u53D8\u52A8\u9759\u6001\u7684\u6587\u4EF6\uFF0C\u5B83\u4E0Esrc/assets\u7684\u533A\u522B\u5728\u4E8E\uFF0Cpublic\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u4E0D\u88ABwebpack\u6253\u5305\u5904\u7406\uFF0C\u4F1A\u539F\u6837\u62F7\u8D1D\u5230dist\u76EE\u5F55\u4E0B</span></span>
<span class="line"><span style="color:#24292F;">\u2502   \u251C\u2500\u2500 favicon.ico  </span><span style="color:#6E7781;"># \u5728\u6D4F\u89C8\u5668\u4E0A\u663E\u793A\u7684\u56FE\u6807</span></span>
<span class="line"><span style="color:#24292F;">\u2502   \u2514\u2500\u2500 index.html   </span><span style="color:#6E7781;"># \u4E3B\u9875\u9762\u6587\u4EF6</span></span>
<span class="line"><span style="color:#24292F;">\u251C\u2500\u2500 src              </span><span style="color:#6E7781;"># \u6E90\u7801\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#24292F;">\u2502   \u251C\u2500\u2500 assets       </span><span style="color:#6E7781;"># \u5B58\u653E\u7EC4\u4EF6\u4E2D\u7684\u9759\u6001\u8D44\u6E90</span></span>
<span class="line"><span style="color:#24292F;">\u2502   \u251C\u2500\u2500 components   </span><span style="color:#6E7781;"># \u5B58\u653E\u4E00\u4E9B\u516C\u5171\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#24292F;">\u2502   \u251C\u2500\u2500 views        </span><span style="color:#6E7781;"># \u5B58\u653E\u6240\u6709\u7684\u8DEF\u7531\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#24292F;">\u2502   \u251C\u2500\u2500 App.vue      </span><span style="color:#6E7781;"># \u5E94\u7528\u6839\u4E3B\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#24292F;">\u2502   \u251C\u2500\u2500 main.js      </span><span style="color:#6E7781;"># \u5E94\u7528\u5165\u53E3 js</span></span>
<span class="line"><span style="color:#24292F;">\u2502   \u251C\u2500\u2500 router       </span><span style="color:#6E7781;"># \u8DEF\u7531\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#24292F;">\u2502   \u2514\u2500\u2500 store        </span><span style="color:#6E7781;"># vuex\u72B6\u6001\u7BA1\u7406\u6587\u4EF6</span></span>
<span class="line"><span style="color:#24292F;">\u251C\u2500\u2500 .eslintrc.js     </span><span style="color:#6E7781;"># eslint\u76F8\u5173\u914D\u7F6E</span></span>
<span class="line"><span style="color:#24292F;">\u251C\u2500\u2500 .gitignore       </span><span style="color:#6E7781;"># git \u7248\u672C\u7BA1\u5236\u5FFD\u7565\u7684\u914D\u7F6E</span></span>
<span class="line"><span style="color:#24292F;">\u251C\u2500\u2500 .postcssrc.js    </span><span style="color:#6E7781;"># postcss\u4E00\u79CD\u5BF9css\u7F16\u8BD1\u7684\u5DE5\u5177\uFF0C\u7C7B\u4F3Cbabel\u5BF9js\u7684\u5904\u7406</span></span>
<span class="line"><span style="color:#24292F;">\u251C\u2500\u2500 babel.config.js  </span><span style="color:#6E7781;"># babel \u7684\u914D\u7F6E,\u5373ES6\u8BED\u6CD5\u7F16\u8BD1\u914D\u7F6E</span></span>
<span class="line"><span style="color:#24292F;">\u251C\u2500\u2500 package.json     </span><span style="color:#6E7781;"># \u9879\u76EE\u57FA\u672C\u4FE1\u606F,\u5305\u4F9D\u8D56\u914D\u7F6E\u4FE1\u606F\u7B49</span></span>
<span class="line"><span style="color:#24292F;">\u2514\u2500\u2500 yarn.lock        </span><span style="color:#6E7781;"># \u7528\u4E8E\u8BB0\u5F55\u5F53\u524D\u72B6\u6001\u4E0B\u5B9E\u9645\u5B89\u88C5\u7684\u5404\u4E2A\u5305\u7684\u5177\u4F53\u6765\u6E90\u548C\u7248\u672C\u53F7\u7B49, \u4FDD\u8BC1\u5176\u4ED6\u4EBA\u5728 npm install \u9879\u76EE\u65F6\u5927\u5BB6\u7684\u4F9D\u8D56\u80FD\u4FDD\u8BC1\u4E00\u81F4.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5F00\u53D1\u89C4\u8303 <ul><li>\u547D\u540D\u89C4\u8303\uFF08\u6587\u4EF6\u547D\u540D\uFF0C\u53D8\u91CF\uFF0C\u51FD\u6570\uFF0Cclass\uFF0C id\uFF09 \u9A7C\u5CF0\uFF0C - _ \u7EA6\u5B9A\u6CD5</li><li>\u76EE\u5F55\u89C4\u8303\uFF08\u76EE\u5F55\u5982\u4F55\u5EFA\u7ACB\uFF09 \u5212\u5206\u76EE\u5F55\u7ED3\u6784 \u7EA6\u5B9A\u6CD5</li></ul></li></ul><h2 id="_3-\u524D\u7AEF\u6280\u672F\u9009\u578B" tabindex="-1"><a class="header-anchor" href="#_3-\u524D\u7AEF\u6280\u672F\u9009\u578B" aria-hidden="true">#</a> 3.\u524D\u7AEF\u6280\u672F\u9009\u578B</h2><p><img src="`+n+'" alt=""></p><details class="custom-container details"><summary>\u5728 Vue 3.x \u9879\u76EE\u4E2D</summary><ul><li><p>\u6280\u672F\u9009\u578B\uFF08\u7B80\u5355\u9879\u76EE\uFF09</p><table><thead><tr><th>\u5DE5\u5177\u9009\u62E9</th><th>\u4F9D\u8D56\u5305</th><th>\u8BF4\u660E</th><th>\u5176\u4ED6</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>\u811A\u624B\u67B6</td><td>vue-cli3.x</td><td>\u521B\u5EFA\u9879\u76EE\u7528</td><td></td><td>\u2705</td><td></td></tr><tr><td>\u6846\u67B6</td><td>vue2.x</td><td>\u9879\u76EE\u6838\u5FC3\u5305</td><td></td><td>\u2705</td><td></td></tr><tr><td>CSS \u8BED\u8A00</td><td>scss + postcss</td><td>scss \u4FDD\u6301\u548C element plus \u4E00\u81F4\uFF0Cpostcss \u63D0\u9AD8\u517C\u5BB9\u6027</td><td></td><td>\u274C</td><td></td></tr><tr><td>JS \u7F16\u8BD1</td><td>babel</td><td>\u5C06 es6 \u7684\u8BED\u6CD5\u7F16\u8BD1\u6210 es5 \u7684\u8BED\u6CD5</td><td></td><td>\u2705</td><td>\u63D0\u9AD8\u517C\u5BB9\u6027</td></tr><tr><td>\u6A21\u5757\u6253\u5305</td><td>webpack \u5168\u5BB6\u6876</td><td></td><td></td><td>\u2705</td><td></td></tr><tr><td>\u8DEF\u7531</td><td>Vue-router 3.x</td><td></td><td></td><td>\u2705</td><td>\u4E00\u822C\u9879\u76EE\u90FD\u4F1A\u7528\u5230</td></tr><tr><td>\u6570\u636E\u6D41</td><td>Vuex 3.x</td><td></td><td></td><td>\u274C</td><td></td></tr><tr><td>\u8BF7\u6C42\u5E93</td><td>axios</td><td></td><td></td><td>\u2705</td><td>\u4E00\u822C\u9879\u76EE\u4E2D\u90FD\u8981\u7528\u8FD9\u4E2A</td></tr><tr><td>UI</td><td>Element UI</td><td>\u63A8\u8350 ui \u5E93</td><td></td><td>\u2705</td><td></td></tr></tbody></table></li><li><p>\u6280\u672F\u9009\u578B\uFF08\u590D\u6742\u9879\u76EE\uFF09</p><table><thead><tr><th>\u5DE5\u5177\u9009\u62E9</th><th>\u4F9D\u8D56\u5305</th><th>\u8BF4\u660E</th><th>\u5176\u4ED6</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>JS \u8BED\u8A00</td><td>TypeScript</td><td>\u652F\u6301\u9759\u6001\u7C7B\u578B\u68C0\u67E5</td><td></td><td>\u274C</td><td></td></tr><tr><td>\u5355\u5143\u6D4B\u8BD5</td><td>jest + moca</td><td>\u63D0\u9AD8\u524D\u7AEF\u4EE3\u7801\u7684\u5065\u58EE\u6027</td><td></td><td>\u274C</td><td>\u4E00\u822C\u5728\u5F00\u53D1 ui \u7EC4\u4EF6\u5E93\u7684\u65F6\u5019\u4F1A\u7528\u5230</td></tr><tr><td>\u4EE3\u7801\u98CE\u683C</td><td>eslint+prettier</td><td>\u53EF\u4EE5\u5F3A\u5236\u5F00\u53D1\u4EBA\u5458\u7528\u540C\u4E00\u79CD\u89C4\u8303\u5F00\u53D1</td><td></td><td>\u274C</td><td>\u4E0D\u5F3A\u5236\uFF0C\u4F46\u662F\u5EFA\u8BAE\u7EDF\u4E00\u4EE3\u7801\u98CE\u683C</td></tr><tr><td>JS \u538B\u7F29</td><td>TerserJS</td><td>\u63D0\u9AD8\u751F\u4EA7\u73AF\u5883\u6027\u80FD</td><td></td><td>\u2705</td><td></td></tr><tr><td>CSS \u538B\u7F29</td><td>cssnano</td><td>\u63D0\u9AD8\u751F\u4EA7\u73AF\u5883\u6027\u80FD</td><td></td><td>\u2705</td><td></td></tr><tr><td>\u56FD\u9645\u5316</td><td>i18n</td><td></td><td></td><td>\u274C</td><td>\u9700\u8981\u7528\u5230\u56FD\u9645\u5316\u7684\u9879\u76EE\u63A8\u8350\u7528\u8FD9\u4E2A\u5B9E\u73B0</td></tr><tr><td>\u9759\u6001\u6587\u6863</td><td>-</td><td></td><td></td><td>\u274C</td><td></td></tr><tr><td>\u5FAE\u524D\u7AEF</td><td>qiankun</td><td></td><td></td><td>\u274C</td><td>\u5FAE\u524D\u7AEF\u9879\u76EE\u63A8\u8350\u7528\u8FD9\u79CD\u65B9\u6848</td></tr><tr><td>\u56FE\u8868\u5E93</td><td>echarts</td><td></td><td></td><td>\u274C</td><td>\u9700\u8981\u7528\u5230\u56FE\u8868\u7684\u9879\u76EE\u63A8\u8350\u7528\u8FD9\u4E2A</td></tr></tbody></table></li></ul></details><details class="custom-container details"><summary>\u5728 vue3.x \u9879\u76EE\u4E2D</summary><ul><li><p>\u6280\u672F\u9009\u578B\uFF08\u7B80\u5355\u9879\u76EE\uFF09</p><table><thead><tr><th>\u5DE5\u5177\u9009\u62E9</th><th>\u4F9D\u8D56\u5305</th><th>\u8BF4\u660E</th><th>\u5176\u4ED6</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>\u811A\u624B\u67B6</td><td>vue-cli3.x</td><td>\u521B\u5EFA\u9879\u76EE\u7528</td><td></td><td>\u2705</td><td></td></tr><tr><td>\u6846\u67B6</td><td>vue3.x</td><td>\u9879\u76EE\u6838\u5FC3\u5305</td><td></td><td>\u2705</td><td></td></tr><tr><td>CSS \u8BED\u8A00</td><td>scss + postcss</td><td>scss \u4FDD\u6301\u548C element plus \u4E00\u81F4\uFF0Cpostcss \u63D0\u9AD8\u517C\u5BB9\u6027</td><td></td><td>\u274C</td><td></td></tr><tr><td>JS \u7F16\u8BD1</td><td>babel</td><td>\u5C06 es6 \u7684\u8BED\u6CD5\u7F16\u8BD1\u6210 es5 \u7684\u8BED\u6CD5</td><td></td><td>\u2705</td><td>\u63D0\u9AD8\u517C\u5BB9\u6027</td></tr><tr><td>\u6A21\u5757\u6253\u5305</td><td>webpack \u5168\u5BB6\u6876</td><td></td><td></td><td>\u2705</td><td></td></tr><tr><td>\u8DEF\u7531</td><td>Vue-router 4.x</td><td></td><td></td><td>\u2705</td><td>\u4E00\u822C\u9879\u76EE\u90FD\u4F1A\u7528\u5230</td></tr><tr><td>\u6570\u636E\u6D41</td><td>Vuex 4.x</td><td></td><td></td><td>\u274C</td><td>vue2.x \u4E2D\u4E00\u822C\u90FD\u4F1A\u7528\u5230\uFF0Cvue3.x \u4E2D\u6709\u66FF\u4EE3\u65B9\u6848</td></tr><tr><td>\u8BF7\u6C42\u5E93</td><td>axios</td><td></td><td></td><td>\u2705</td><td>\u4E00\u822C\u9879\u76EE\u4E2D\u90FD\u8981\u7528\u8FD9\u4E2A</td></tr><tr><td>UI</td><td>Element Plus</td><td>element ui \u63A8\u8350 ui \u5E93</td><td></td><td>\u2705</td><td></td></tr></tbody></table></li><li><p>\u6280\u672F\u9009\u578B\uFF08\u590D\u6742\u9879\u76EE\uFF09</p><table><thead><tr><th>\u5DE5\u5177\u9009\u62E9</th><th>\u4F9D\u8D56\u5305</th><th>\u8BF4\u660E</th><th>\u5176\u4ED6</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>JS \u8BED\u8A00</td><td>TypeScript</td><td>\u652F\u6301\u9759\u6001\u7C7B\u578B\u68C0\u67E5</td><td></td><td>\u274C</td><td></td></tr><tr><td>\u5355\u5143\u6D4B\u8BD5</td><td>jest + moca</td><td>\u63D0\u9AD8\u524D\u7AEF\u4EE3\u7801\u7684\u5065\u58EE\u6027</td><td></td><td>\u274C</td><td>\u4E00\u822C\u5728\u5F00\u53D1 ui \u7EC4\u4EF6\u5E93\u7684\u65F6\u5019\u4F1A\u7528\u5230</td></tr><tr><td>\u4EE3\u7801\u98CE\u683C</td><td>eslint+prettier</td><td>\u53EF\u4EE5\u5F3A\u5236\u5F00\u53D1\u4EBA\u5458\u7528\u540C\u4E00\u79CD\u89C4\u8303\u5F00\u53D1</td><td></td><td>\u274C</td><td>\u4E0D\u5F3A\u5236\uFF0C\u4F46\u662F\u5EFA\u8BAE\u7EDF\u4E00\u4EE3\u7801\u98CE\u683C</td></tr><tr><td>JS \u538B\u7F29</td><td>TerserJS</td><td>\u63D0\u9AD8\u751F\u4EA7\u73AF\u5883\u6027\u80FD</td><td></td><td>\u2705</td><td></td></tr><tr><td>CSS \u538B\u7F29</td><td>cssnano</td><td>\u63D0\u9AD8\u751F\u4EA7\u73AF\u5883\u6027\u80FD</td><td></td><td>\u2705</td><td></td></tr><tr><td>\u56FD\u9645\u5316</td><td>i18n</td><td></td><td></td><td>\u274C</td><td>\u9700\u8981\u7528\u5230\u56FD\u9645\u5316\u7684\u9879\u76EE\u63A8\u8350\u7528\u8FD9\u4E2A\u5B9E\u73B0</td></tr><tr><td>hooks \u5E93</td><td>VueUse</td><td></td><td></td><td>\u274C</td><td></td></tr><tr><td>\u9759\u6001\u6587\u6863</td><td>-</td><td></td><td></td><td>\u274C</td><td></td></tr><tr><td>\u5FAE\u524D\u7AEF</td><td>qiankun</td><td></td><td></td><td>\u274C</td><td>\u5FAE\u524D\u7AEF\u9879\u76EE\u63A8\u8350\u7528\u8FD9\u79CD\u65B9\u6848</td></tr><tr><td>\u56FE\u8868\u5E93</td><td>echarts</td><td></td><td></td><td>\u274C</td><td>\u9700\u8981\u7528\u5230\u56FE\u8868\u7684\u9879\u76EE\u63A8\u8350\u7528\u8FD9\u4E2A</td></tr></tbody></table></li></ul></details><div class="custom-container tip"><p class="custom-container-title">\u603B\u7ED3</p><p>\u4E86\u89E3 vue \u9879\u76EE\u521B\u5EFA\u8FC7\u7A0B\u4EE5\u53CA\u5176\u76EE\u5F55\u7ED3\u6784\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u7684\u5177\u4F53\u4F5C\u7528\uFF0C\u5728\u5F00\u53D1\u4E2D\u9700\u8981\u6CE8\u610F\u7684\u5730\u65B9\uFF0C\u80FD\u591F\u66F4\u597D\u5730\u89C4\u8303\u524D\u7AEF\u5F00\u53D1</p></div>',22),i=[l];function r(c,p){return d(),s("div",null,i)}const u=t(a,[["render",r],["__file","2.project.html.vue"]]);export{u as default};
