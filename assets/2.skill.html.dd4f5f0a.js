import{_ as s,o as n,c as a,a as l}from"./app.8390b8a1.js";const o={},e=l(`<h1 id="\u4E8C-\u5305\u7BA1\u7406\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u4E8C-\u5305\u7BA1\u7406\u5DE5\u5177" aria-hidden="true">#</a> \u4E8C.\u5305\u7BA1\u7406\u5DE5\u5177</h1><div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u4E3B\u8981\u4ECB\u7ECD npm \u5305\u7BA1\u7406\u5668\u7684\u4E00\u4E9B\u57FA\u7840\u77E5\u8BC6</p></div><h2 id="_1-package-json-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-package-json-\u6587\u4EF6" aria-hidden="true">#</a> 1.package.json \u6587\u4EF6</h2><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u533A\u5206<code>dependencies</code>\u4F9D\u8D56\u548C<code>devDependencies</code>\u4F9D\u8D56</p></div><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">{</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;name&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;vue3-demo&quot;</span><span style="color:#24292F;">, </span><span style="color:#6E7781;">// \u9879\u76EE/\u6A21\u5757\u540D\u79F0\uFF0C\u957F\u5EA6\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E214\u4E2A\u5B57\u7B26\uFF0C\u4E0D\u80FD\u4EE5&quot;.&quot;(\u70B9)\u6216\u8005&quot;_&quot;(\u4E0B\u5212\u7EBF)\u5F00\u5934\uFF0C\u4E0D\u80FD\u5305\u542B\u5927\u5199\u5B57\u6BCD</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;version&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;0.1.0&quot;</span><span style="color:#24292F;">, </span><span style="color:#6E7781;">// \u9879\u76EE\u7248\u672C</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;author&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;zhoubichuan&quot;</span><span style="color:#24292F;">, </span><span style="color:#6E7781;">// \u9879\u76EE\u5F00\u53D1\u8005\uFF0Chttps://npmjs.org\u8D26\u6237\u540D\uFF0C\u9075\u5FAA\u201C\u8D26\u6237\u540D&lt;\u90AE\u4EF6&gt;\u201D\u7684\u89C4\u5219\uFF0C\u4F8B\u5982\uFF1Azhoubichuan zhoubichuan@icloud.com</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;description&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;demo&quot;</span><span style="color:#24292F;">, </span><span style="color:#6E7781;">// \u9879\u76EE\u63CF\u8FF0\uFF0C\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002\u5B83\u53EF\u4EE5\u5E2E\u52A9\u4EBA\u4EEC\u5728\u4F7F\u7528npm search\u65F6\u627E\u5230\u8FD9\u4E2A\u5305</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;keywords&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;demo&quot;</span><span style="color:#24292F;">, </span><span style="color:#6E7781;">// \u9879\u76EE\u5173\u952E\u5B57\uFF0C\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\u3002\u5B83\u53EF\u4EE5\u5E2E\u52A9\u4EBA\u4EEC\u5728\u4F7F\u7528npm search\u65F6\u627E\u5230\u8FD9\u4E2A\u5305</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;private&quot;</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">true</span><span style="color:#24292F;">, </span><span style="color:#6E7781;">// \u662F\u5426\u79C1\u6709\uFF0C\u8BBE\u7F6E\u4E3A true \u65F6\uFF0Cnpm \u62D2\u7EDD\u53D1\u5E03</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;scripts&quot;</span><span style="color:#24292F;">: {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">// \u6267\u884C npm \u811A\u672C\u547D\u4EE4\u7B80\u5199\uFF0C\u6BD4\u5982 \u201Cstart\u201D: \u201Creact-scripts start\u201D, \u6267\u884C npm start \u5C31\u662F\u8FD0\u884C \u201Creact-scripts start\u201D</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;serve&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;vue-cli-service serve&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;build&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;vue-cli-service build&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;test:unit&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;vue-cli-service test:unit&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;test:e2e&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;vue-cli-service test:e2e&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;lint&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;vue-cli-service lint&quot;</span></span>
<span class="line"><span style="color:#24292F;">  },</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;dependencies&quot;</span><span style="color:#24292F;">: {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">// \u751F\u4EA7\u73AF\u5883\u4E0B\uFF0C\u9879\u76EE\u8FD0\u884C\u6240\u9700\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;core-js&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^3.6.5&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;register-service-worker&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^1.7.1&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;vue&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^3.0.0&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;vue-class-component&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^8.0.0-0&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;vue-router&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^4.0.0-0&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;vuex&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^4.0.0-0&quot;</span></span>
<span class="line"><span style="color:#24292F;">  },</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;devDependencies&quot;</span><span style="color:#24292F;">: {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">// \u5F00\u53D1\u73AF\u5883\u4E0B\uFF0C\u9879\u76EE\u6240\u9700\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;@types/chai&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^4.2.11&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;@types/mocha&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^5.2.4&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;@typescript-eslint/eslint-plugin&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^4.18.0&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;@typescript-eslint/parser&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^4.18.0&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;@vue/cli-plugin-babel&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;~4.5.0&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;@vue/cli-plugin-e2e-cypress&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;~4.5.0&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;@vue/cli-plugin-eslint&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;~4.5.0&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;@vue/cli-plugin-pwa&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;~4.5.0&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;@vue/cli-plugin-router&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;~4.5.0&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;@vue/cli-plugin-typescript&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;~4.5.0&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;@vue/cli-plugin-unit-mocha&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;~4.5.0&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;@vue/cli-plugin-vuex&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;~4.5.0&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;@vue/cli-service&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;~4.5.0&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;@vue/compiler-sfc&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^3.0.0&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;@vue/eslint-config-typescript&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^7.0.0&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;@vue/test-utils&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^2.0.0-0&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;chai&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^4.1.2&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;eslint&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^6.7.2&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;eslint-plugin-vue&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^7.0.0&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;sass&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^1.26.5&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;sass-loader&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^8.0.2&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;typescript&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;~4.1.5&quot;</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4ED6\u4E00\u4E9B\u914D\u7F6E\u8BF4\u660E</p><ul><li>license\uFF1A\u8F6F\u4EF6\u6388\u6743\u6761\u6B3E\uFF0C\u8BA9\u7528\u6237\u77E5\u9053\u4ED6\u4EEC\u7684\u4F7F\u7528\u6743\u5229\u548C\u9650\u5236\u3002</li><li>bugs\uFF1Abug \u63D0\u4EA4\u5730\u5740\u3002</li><li>contributors\uFF1A\u9879\u76EE\u8D21\u732E\u8005 \u3002</li><li>repository\uFF1A\u9879\u76EE\u4ED3\u5E93\u5730\u5740\u3002</li><li>homepage\uFF1A\u9879\u76EE\u5305\u7684\u5B98\u7F51 URL\u3002</li><li>bin\uFF1A\u5185\u90E8\u547D\u4EE4\u5BF9\u5E94\u7684\u53EF\u6267\u884C\u6587\u4EF6\u7684\u8DEF\u5F84\u3002</li><li>main\uFF1A\u9879\u76EE\u9ED8\u8BA4\u6267\u884C\u6587\u4EF6\uFF0C\u6BD4\u5982 require(\u2018webpack\u2019)\uFF1B\u5C31\u4F1A\u9ED8\u8BA4\u52A0\u8F7D lib \u76EE\u5F55\u4E0B\u7684 webpack.js \u6587\u4EF6\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\uFF0C\u5219\u9ED8\u8BA4\u52A0\u8F7D\u9879\u76EE\u8DDF\u76EE\u5F55\u4E0B\u7684 index.js \u6587\u4EF6\u3002</li><li>module\uFF1A\u662F\u4EE5 ES Module(\u4E5F\u5C31\u662F ES6)\u6A21\u5757\u5316\u65B9\u5F0F\u8FDB\u884C\u52A0\u8F7D\uFF0C\u56E0\u4E3A\u65E9\u671F\u6CA1\u6709 ES6 \u6A21\u5757\u5316\u65B9\u6848\u65F6\uFF0C\u90FD\u662F\u9075\u5FAA CommonJS \u89C4\u8303\uFF0C\u800C CommonJS \u89C4\u8303\u7684\u5305\u662F\u4EE5 main \u7684\u65B9\u5F0F\u8868\u793A\u5165\u53E3\u6587\u4EF6\u7684\uFF0C\u4E3A\u4E86\u533A\u5206\u5C31\u65B0\u589E\u4E86 module \u65B9\u5F0F\uFF0C\u4F46\u662F ES6 \u6A21\u5757\u5316\u65B9\u6848\u6548\u7387\u66F4\u9AD8\uFF0C\u6240\u4EE5\u4F1A\u4F18\u5148\u67E5\u770B\u662F\u5426\u6709 module \u5B57\u6BB5\uFF0C\u6CA1\u6709\u624D\u4F7F\u7528 main \u5B57\u6BB5\u3002</li><li>eslintConfig\uFF1AEsLint \u68C0\u67E5\u6587\u4EF6\u914D\u7F6E\uFF0C\u81EA\u52A8\u8BFB\u53D6\u9A8C\u8BC1\u3002</li><li>engines\uFF1A\u9879\u76EE\u8FD0\u884C\u7684\u5E73\u53F0\u3002</li><li>browserslist\uFF1A\u4F9B\u6D4F\u89C8\u5668\u4F7F\u7528\u7684\u7248\u672C\u5217\u8868\u3002</li><li>style\uFF1A\u4F9B\u6D4F\u89C8\u5668\u4F7F\u7528\u65F6\uFF0C\u6837\u5F0F\u6587\u4EF6\u6240\u5728\u7684\u4F4D\u7F6E\uFF1B\u6837\u5F0F\u6587\u4EF6\u6253\u5305\u5DE5\u5177 parcelify\uFF0C\u901A\u8FC7\u5B83\u77E5\u9053\u6837\u5F0F\u6587\u4EF6\u7684\u6253\u5305\u4F4D\u7F6E\u3002</li><li>files\uFF1A\u88AB\u9879\u76EE\u5305\u542B\u7684\u6587\u4EF6\u540D\u6570\u7EC4</li></ul><h2 id="_2-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> 2.\u5E38\u7528\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">npm init                </span><span style="color:#6E7781;"># \u751F\u6210package.json\u6587\u4EF6\uFF08\u9700\u8981\u624B\u52A8\u914D\u7F6E\uFF09</span></span>
<span class="line"><span style="color:#24292F;">npm init -y             </span><span style="color:#6E7781;"># \u751F\u6210package.json\u6587\u4EF6\uFF08\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF09</span></span>
<span class="line"><span style="color:#24292F;">npm i                   </span><span style="color:#6E7781;"># \u4E00\u952E\u5B89\u88C5package.json\u4E0B\u7684\u4F9D\u8D56\u5305</span></span>
<span class="line"><span style="color:#24292F;">npm i xxx               </span><span style="color:#6E7781;"># \u5728\u9879\u76EE\u4E2D\u5B89\u88C5\u5305\u540D\u4E3Axxx\u7684\u4F9D\u8D56\u5305\uFF08\u914D\u7F6E\u5728dependences\u4E0B\uFF09</span></span>
<span class="line"><span style="color:#24292F;">npm i xxx --save        </span><span style="color:#6E7781;"># \u5728\u9879\u76EE\u4E2D\u5B89\u88C5\u5305\u540D\u4E3Axxx\u7684\u4F9D\u8D56\u5305\uFF08\u914D\u7F6E\u5728dependencies\u4E0B\uFF09</span></span>
<span class="line"><span style="color:#24292F;">npm i xxx --save-dev    </span><span style="color:#6E7781;"># \u5728\u9879\u76EE\u4E2D\u5B89\u88C5\u5305\u540D\u4E3Axxx\u7684\u4F9D\u8D56\u5305\uFF08\u914D\u7F6E\u5728devDependencies\u4E0B\uFF09</span></span>
<span class="line"><span style="color:#24292F;">npm i -g xxx            </span><span style="color:#6E7781;"># \u5168\u5C40\u5B89\u88C5\u5305\u540D\u4E3A xxx\u7684\u4F9D\u8D56\u5305</span></span>
<span class="line"><span style="color:#24292F;">npm run xxx             </span><span style="color:#6E7781;"># \u8FD0\u884Cpackage.json\u4E2Dscripts\u4E0B\u7684\u547D\u4EE4</span></span>
<span class="line"><span style="color:#24292F;">npm update xxx          </span><span style="color:#6E7781;"># \u66F4\u65B0\u67D0\u4E2A\u5305</span></span>
<span class="line"><span style="color:#24292F;">npm home xxx            </span><span style="color:#6E7781;"># \u6253\u5F00xxx\u5305\u7684\u4E3B\u9875</span></span>
<span class="line"><span style="color:#24292F;">npm repo xxx            </span><span style="color:#6E7781;"># \u6253\u5F00xxx\u5305\u7684\u4EE3\u7801\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#24292F;">npm publish             </span><span style="color:#6E7781;"># \u5C06\u5F53\u524D\u6A21\u5757\u53D1\u5E03\u5230npmjs.com,\u9700\u8981\u5148\u767B\u5F55</span></span>
<span class="line"><span style="color:#24292F;">npm view xxx            </span><span style="color:#6E7781;"># \u67E5\u770B\u5F53\u524D\u4F9D\u8D56\u7684\u7248\u672C</span></span>
<span class="line"><span style="color:#24292F;">npm view xxx version    </span><span style="color:#6E7781;"># \u67E5\u770B\u5F53\u524D\u4F9D\u8D56\u4ED3\u5E93\u7684\u7248\u672C</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u7B2C\u4E09\u65B9\u63D2\u4EF6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-\u7B2C\u4E09\u65B9\u63D2\u4EF6\u914D\u7F6E" aria-hidden="true">#</a> 3.\u7B2C\u4E09\u65B9\u63D2\u4EF6\u914D\u7F6E</h2><p>browserslist \u7B2C\u4E09\u65B9\u63D2\u4EF6\u914D\u7F6E\uFF0C\u8BE5\u914D\u7F6E\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u7528\u4E8E\u5728\u4E0D\u540C\u7684\u524D\u7AEF\u5DE5\u5177\u4E4B\u95F4\u5171\u4EAB\u76EE\u6807\u6D4F\u89C8\u5668\u548C Node.js \u7684\u7248\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#0A3069;">&quot;browserslist&quot;</span><span style="color:#24292F;">:[</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0A3069;">&quot;&gt; 1%&quot;</span><span style="color:#24292F;">,               </span><span style="color:#6E7781;"># \u8868\u793A\u5305\u542B\u4F7F\u7528\u7387 &gt; 1%\u7684\u6D4F\u89C8\u5668</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0A3069;">&quot;last 2 versions&quot;</span><span style="color:#24292F;">,    </span><span style="color:#6E7781;"># \u8868\u793A\u5305\u542B\u6D4F\u89C8\u5668\u6700\u65B0\u7684\u4E24\u4E2A\u7248\u672C</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0A3069;">&quot;not ie &lt;= 9&quot;</span><span style="color:#24292F;">         </span><span style="color:#6E7781;"># \u8868\u793A\u4E0D\u5305\u542B ie8 \u53CA\u4EE5\u4E0B\u7248\u672C</span></span>
<span class="line"><span style="color:#24292F;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5355\u72EC\u5199\u5728<code>.browserslistrc</code>\u7684\u6587\u4EF6\u4E2D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">&gt;</span><span style="color:#24292F;"> 1%</span></span>
<span class="line"><span style="color:#24292F;">last 2 versions</span></span>
<span class="line"><span style="color:#24292F;">not ie </span><span style="color:#CF222E;">&lt;</span><span style="color:#24292F;">= 8</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-autoprefixer" tabindex="-1"><a class="header-anchor" href="#_3-1-autoprefixer" aria-hidden="true">#</a> 3.1 autoprefixer</h3><p><code>autoprefixer</code>\u8FD9\u6837\u7684\u63D2\u4EF6\u9700\u8981\u628A\u4F60\u5199\u7684 css \u6837\u5F0F\u9002\u914D\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\uFF0C\u90A3\u4E48\u8FD9\u91CC\u8981\u9488\u5BF9\u90A3\u4E9B\u6D4F\u89C8\u5668\u5462\uFF0C\u5373\u4F7F\u4E0A\u9762\u914D\u7F6E\u4E2D\u6240\u5305\u542B\u7684\u3002</p><p>\u800C\u5982\u679C\u5199\u5728 autoprefixer \u7684\u914D\u7F6E\u4E2D\uFF0C\u90A3\u4E48\u4F1A\u5B58\u5728\u4E00\u4E2A\u95EE\u9898\uFF0C\u4E07\u4E00\u5176\u4ED6\u7B2C\u4E09\u65B9\u63D2\u4EF6\u4E5F\u9700\u8981\u6D4F\u89C8\u5668\u7684\u5305\u542B\u8303\u56F4\u7528\u4E8E\u5B9E\u73B0\u5176\u7279\u5B9A\u7684\u529F\u80FD\uFF0C\u90A3\u4E48\u5C31\u53C8\u5F97\u5728\u5176\u914D\u7F6E\u4E2D\u8BBE\u7F6E\u4E00\u904D\uFF0C\u8FD9\u6837\u5C31\u65E0\u6CD5\u5F97\u4EE5\u5171\u7528\u3002\u6240\u4EE5\u5728 package.json \u4E2D\u914D\u7F6E browserslist \u7684\u5C5E\u6027\u4F7F\u5F97\u6240\u6709\u5DE5\u5177\u90FD\u4F1A\u81EA\u52A8\u627E\u5230\u76EE\u6807\u6D4F\u89C8\u5668\u3002</p><p>\u81F3\u4E8E\u5B83\u662F\u5982\u4F55\u5E73\u8861\u6D4F\u89C8\u5668\u7684\u4F7F\u7528\u7387\u548C\u7248\u672C\u7684\uFF0C\u6570\u636E\u90FD\u662F\u6765\u6E90\u4E8E Can I Use\u3002\u4F60\u4E5F\u53EF\u4EE5\u641C\u7D22\u914D\u7F6E\u9879\u6240\u5305\u542B\u7684\u6D4F\u89C8\u5668\u5217\u8868\uFF0C\u6BD4\u5982\u641C\u7D22<code>last 2 versions</code> \u4F1A\u5F97\u5230\u4F60\u60F3\u8981\u7684\u7ED3\u679C\uFF0C\u6216\u8005\u5728\u9879\u76EE\u7EC8\u7AEF\u8FD0\u884C\u5982\u4E0B\u547D\u4EE4\u67E5\u770B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">npx browserslist</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),p=[e];function t(c,i){return n(),a("div",null,p)}const u=s(o,[["render",t],["__file","2.skill.html.vue"]]);export{u as default};
