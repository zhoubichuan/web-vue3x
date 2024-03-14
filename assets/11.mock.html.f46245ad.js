import{V as v}from"./vue.runtime.esm-bundler.82c7c109.js";import{_ as B,r as C,o as D,c as b,b as s,d as l,e as c,w as m,a as f}from"./app.8390b8a1.js";const _={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:y,createElementVNode:r,renderList:h,Fragment:a,openBlock:F,createElementBlock:i}=v,t={class:"content"},E=["list"],d={style:{color:"#409eff"}};function o(n,u){return F(),i("div",null,[r("p",null,"\u4ECA\u5929\u65E5\u671F: "+y(n.value),1),r("button",{class:"btn",onClick:u[0]||(u[0]=(...e)=>n.getHistoryData&&n.getHistoryData(...e))},"\u70B9\u51FB\u67E5\u770B"),r("ul",t,[(F(!0),i(a,null,h(n.list,(e,A)=>(F(),i("li",{key:A,list:n.list},[r("p",d,y(e.title),1)],8,E))),128))])])}return{render:o,...{data(){return{value:new Date().toLocaleString(),list:[{day:"1/1",date:"-45\u5E741\u67081\u65E5",title:"\u7F57\u9A6C\u5171\u548C\u56FD\u5F00\u59CB\u4F7F\u7528\u5112\u7565\u5386",e_id:"1"},{day:"1/1",date:"404\u5E741\u67081\u65E5",title:"\u4E1C\u664B\u5C06\u9886\u6853\u7384\u6B63\u5F0F\u79F0\u5E1D\uFF0C\u56FD\u53F7\u695A",e_id:"2"},{day:"1/1",date:"860\u5E741\u67081\u65E5",title:"\u897F\u6CD5\u5170\u514B\u56FD\u738B\u5384\u5FB7\u4E00\u4E16\u8BDE\u751F",e_id:"3"}]}},methods:{getHistoryData(){let n=this.value.toLocaleString().split(" ")[0].split("/"),u="cd32de53098100d56ae1b7a25306ddd3";console.log(n),this.list=[],fetch(`https://v.juhe.cn/todayOnhistory/queryEvent.php?key=${u}&date=${n[1]}/${n[2]}`,{method:"GET"}).then(e=>{e.error_code||e.result.map(A=>{this.list.push({title:A.title,desc:A.des,src:A.pic})})},e=>{})}}}}}(),"render-demo-1":function(){const{vModelText:y,createElementVNode:r,withDirectives:h,toDisplayString:a,createTextVNode:F,openBlock:i,createElementBlock:t}=v;function E(o,p){return i(),t("div",null,[F(" ip:"),h(r("input",{"onUpdate:modelValue":p[0]||(p[0]=n=>o.value=n)},null,512),[[y,o.value]]),r("button",{class:"btn",onClick:p[1]||(p[1]=(...n)=>o.getIpData&&o.getIpData(...n))},"\u70B9\u51FB\u67E5\u770B"),r("p",null," \u5730\u5740\uFF1A"+a(o.res.Country)+"-"+a(o.res.Province)+"-"+a(o.res.City)+"-"+a(o.res.District)+" \u7C7B\u578B\uFF1A"+a(o.res.Isp),1)])}return{render:E,...{data(){return{value:"120.235.95.64",res:{Country:"\u4E2D\u56FD",Province:"\u5E7F\u4E1C",City:"\u4F5B\u5C71",District:"\u4E09\u6C34\u533A",Isp:"\u79FB\u52A8"}}},methods:{getIpData(){let o="d0ad7563a875b7459410d4da2c5b678f";this.list=[],fetch(`https://apis.juhe.cn/ip/ipNewV3?key=${o}&ip=${this.value}`,{method:"GET"}).then(p=>{p.error_code||(this.res=p.result)},p=>{})}}}}}(),"render-demo-2":function(){const{createElementVNode:y,renderList:r,Fragment:h,openBlock:a,createElementBlock:F,toDisplayString:i}=v,t={class:"content"},E=["list"],d={style:{color:"#409eff"}};function o(n,u){return a(),F("div",null,[y("button",{class:"btn",onClick:u[0]||(u[0]=(...e)=>n.getIpData&&n.getIpData(...e))},"\u70B9\u51FB\u67E5\u770B"),y("ul",t,[(a(!0),F(h,null,r(n.list,(e,A)=>(a(),F("li",{key:A,list:n.list},[y("p",d,i(e.city)+"\uFF1A"+i(e.b0)+"\u5143",1)],8,E))),128))])])}return{render:o,...{data(){return{list:[{city:"\u6CB3\u5317",b90:"-",b93:"",b97:"",b0:"8.15","92h":"8.46","95h":"8.94","98h":"9.76","0h":"8.15"},{city:"\u5929\u6D25",b90:"-",b93:"",b97:"",b0:"8.15","92h":"8.46","95h":"8.94","98h":"0.00","0h":"8.15"},{city:"\u5C71\u897F",b90:"-",b93:"",b97:"",b0:"8.22","92h":"8.40","95h":"9.07","98h":"9.77","0h":"8.22"}]}},methods:{getIpData(){let n="22044931eb3973d36300331491b0546f";this.list=[],fetch(`https://apis.juhe.cn/cnoil/oil_city?key=${n}`,{method:"GET"}).then(u=>{u.error_code||u.result.map(e=>{this.list.push({title:e.title,desc:e.des,src:e.pic})})},u=>{})}}}}}()}},k="/web-vue3/assets/1.utils5.f0eec5a2.png";const g=f('<h1 id="\u5341\u4E00-mock-\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5341\u4E00-mock-\u6570\u636E" aria-hidden="true">#</a> \u5341\u4E00.Mock \u6570\u636E</h1><div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u524D\u540E\u7AEF\u540C\u65F6\u5F00\u53D1\u7684\u65F6\u5019\uFF0C\u540E\u7AEF\u63A5\u53E3\u6570\u636E\u6CA1\u6709\u51FA\u6765\uFF0C\u524D\u7AEF\u53EF\u4EE5 mock \u5047\u6570\u636E\uFF0C\u6A21\u62DF\u5F00\u53D1\uFF0C\u65E0\u9700\u7B49\u5F85\u540E\u7684\u5F00\u53D1\u5B8C\u6210</p></div><ul><li><p>\u63A5\u53E3\u89C4\u8303\uFF08\u6210\u529F\uFF0C\u5931\u8D25\uFF0C\u72B6\u6001\u7801\uFF0C\u5B89\u5168\uFF09 \u548C\u540E\u7AEF\u7EA6\u5B9A</p></li><li><p>Postman \u4E00\u6B3E\u975E\u5E38\u6D41\u884C\u7684 API \u8C03\u8BD5\u5DE5\u5177\uFF0C\u901A\u8FC7\u5DE5\u5177\u53EF\u4EE5\u66F4\u597D\u5730\u6D4B\u8BD5\u63A5\u53E3\u3002\u5B89\u88C5\u540E\u76F8\u5173\u529F\u80FD\u5C55\u793A\u5982\u4E0B</p><p><img src="'+k+`" alt=""></p></li></ul><h2 id="_1-\u672C\u5730\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_1-\u672C\u5730\u8BF7\u6C42" aria-hidden="true">#</a> 1. \u672C\u5730\u8BF7\u6C42</h2><h3 id="_1-1-mock\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_1-1-mock\u6570\u636E" aria-hidden="true">#</a> 1.1 mock\u6570\u636E</h3><p>\u5728 public \u4E0B\u5EFA\u7ACB\u6587\u4EF6\uFF0C/mock/user/login.json</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">{</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;status&quot;</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">0</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;data&quot;</span><span style="color:#24292F;">: {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;xxx&quot;</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">123</span></span>
<span class="line"><span style="color:#24292F;">  },</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;msg&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;success&quot;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-mock\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_1-2-mock\u8BF7\u6C42" aria-hidden="true">#</a> 1.2 mock\u8BF7\u6C42</h3><p>App.vue\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#6E7781;">//\u672C\u5730\u52A0\u8F7D\u8BF7\u6C42\u9759\u6001json\u6587\u4EF6\u7684\u5F62\u5F0F</span></span>
<span class="line"><span style="color:#0550AE;">this</span><span style="color:#24292F;">.$axios.</span><span style="color:#8250DF;">get</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;/mock/user/login.json&quot;</span><span style="color:#24292F;">).</span><span style="color:#8250DF;">then</span><span style="color:#24292F;">((</span><span style="color:#953800;">res</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.res </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> res</span></span>
<span class="line"><span style="color:#24292F;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u65B9\u5F0F\u7B80\u5355\u65B9\u4FBF\uFF0C\u4F46\u662F\u7F3A\u70B9\u5F88\u660E\u663E\uFF0Cmock\u6570\u636E\u5199\u6B7B\u4E86\uFF0C\u6BCF\u6B21\u8BF7\u6C42\u90FD\u662F\u76F8\u540C\u7684\u5185\u5BB9\uFF0C\u65E0\u6CD5\u5E94\u5BF9\u590D\u6742\u7684\u573A\u666F</p><h2 id="_2-\u7B2C\u4E09\u65B9\u5E73\u53F0" tabindex="-1"><a class="header-anchor" href="#_2-\u7B2C\u4E09\u65B9\u5E73\u53F0" aria-hidden="true">#</a> 2. \u7B2C\u4E09\u65B9\u5E73\u53F0</h2><h3 id="_2-1-mock\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_2-1-mock\u6570\u636E" aria-hidden="true">#</a> 2.1 mock\u6570\u636E</h3><p>\u5728\u7B2C\u4E09\u65B9\u5E73\u53F0\u4E0A\u5199\u597D\u76F8\u5173\u63A5\u53E3\u548C\u6570\u636E</p><h3 id="_2-2-mock\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_2-2-mock\u8BF7\u6C42" aria-hidden="true">#</a> 2.2 mock\u8BF7\u6C42</h3><p>app.vue</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#6E7781;">//\u4F7F\u7528mock \u7F51\u7AD9\u505A\u6A21\u62DF\u63A5\u53E3\uFF0C\u6CE8\u610F\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898\uFF08\u53EF\u4EE5\u964D\u7EA7\u6D4F\u89C8\u5668\u89E3\u51B3\uFF09</span></span>
<span class="line"><span style="color:#0550AE;">this</span><span style="color:#24292F;">.$axios.</span><span style="color:#8250DF;">get</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;/user/login&quot;</span><span style="color:#24292F;">).</span><span style="color:#8250DF;">then</span><span style="color:#24292F;">((</span><span style="color:#953800;">res</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.res </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> res</span></span>
<span class="line"><span style="color:#24292F;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main.js:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">axios.defaults.baseURL </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;mock \u7F51\u7AD9\u751F\u6210\u9879\u76EE mock \u6570\u636E\u5730\u5740&#39;</span><span style="color:#24292F;"> </span><span style="color:#6E7781;">//\u7528\u672A\u6765\u5B9E\u9645\u5730\u5740\u66FF\u6362</span></span>
<span class="line"><span style="color:#CF222E;">...</span></span>
<span class="line"><span style="color:#24292F;">axios.</span><span style="color:#8250DF;">get</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;/user/login&#39;</span><span style="color:#24292F;">).</span><span style="color:#8250DF;">then</span><span style="color:#24292F;">( </span><span style="color:#953800;">res</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-webpack-\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-webpack-\u65B9\u5F0F" aria-hidden="true">#</a> 3. webpack \u65B9\u5F0F</h2><h3 id="_3-1-mock\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_3-1-mock\u6570\u636E" aria-hidden="true">#</a> 3.1 mock\u6570\u636E</h3><p>\u5728 public \u4E0B\u5EFA\u7ACB\u6587\u4EF6\uFF0C/mock/user/login.json</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">{</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;status&quot;</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">0</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;data&quot;</span><span style="color:#24292F;">: {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;xxx&quot;</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">123</span></span>
<span class="line"><span style="color:#24292F;">  },</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;msg&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;success&quot;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/mock/http.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#0550AE;">module</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">export</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">http</span><span style="color:#24292F;">(</span><span style="color:#953800;">app</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">  app.</span><span style="color:#8250DF;">get</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;/mock/user/login.json&quot;</span><span style="color:#24292F;">, (</span><span style="color:#953800;">req</span><span style="color:#24292F;">, </span><span style="color:#953800;">res</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">if</span><span style="color:#24292F;">(xxx){</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#CF222E;">...</span><span style="color:#24292F;">.</span></span>
<span class="line"><span style="color:#24292F;">      res.</span><span style="color:#8250DF;">json</span><span style="color:#24292F;">({ data: </span><span style="color:#0A3069;">&quot;&quot;</span><span style="color:#24292F;"> })</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">  })</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue.config.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">httpRequest</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">require</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;./mock/http&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#CF222E;">...</span></span>
<span class="line"><span style="color:#953800;">devServer</span><span style="color:#24292F;">:{</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">before</span><span style="color:#24292F;">(app) { </span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">httpRequest</span><span style="color:#24292F;">(app) </span><span style="color:#6E7781;">// \u8C03\u7528 mock \u51FD\u6570\uFF0C\u7531\u4E8Ewebpack\u53EF\u4EE5\u8BFB\u5199\u6587\u4EF6\uFF0C\u53EF\u4EE5\u5BF9/mock/user/login.json\u8FDB\u884C\u8BFB\u5199\u64CD\u4F5C\uFF0C\u7528\u6237\u63D0\u4EA4\u7684post\u8BF7\u6C42\uFF0C\u53EF\u4EE5\u4FDD\u5B58\u6570\u636E</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">...</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-mock\u8BF7\u6C42-1" tabindex="-1"><a class="header-anchor" href="#_2-2-mock\u8BF7\u6C42-1" aria-hidden="true">#</a> 2.2 mock\u8BF7\u6C42</h3><p>App.vue\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#6E7781;">//\u672C\u5730\u52A0\u8F7D\u8BF7\u6C42\u9759\u6001json\u6587\u4EF6\u7684\u5F62\u5F0F</span></span>
<span class="line"><span style="color:#0550AE;">this</span><span style="color:#24292F;">.$axios.</span><span style="color:#8250DF;">get</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;/mock/user/login.json&quot;</span><span style="color:#24292F;">).</span><span style="color:#8250DF;">then</span><span style="color:#24292F;">((</span><span style="color:#953800;">res</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.res </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> res</span></span>
<span class="line"><span style="color:#24292F;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u7B2C\u4E09\u65B9\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_4-\u7B2C\u4E09\u65B9\u63A5\u53E3" aria-hidden="true">#</a> 4.\u7B2C\u4E09\u65B9\u63A5\u53E3</h2><h3 id="_4-1-\u805A\u5408\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_4-1-\u805A\u5408\u6570\u636E" aria-hidden="true">#</a> 4.1 \u805A\u5408\u6570\u636E</h3>`,32),x={href:"https://www.juhe.cn/docs",target:"_blank",rel:"noopener noreferrer"},j=s("ul",null,[s("li",null,[s("strong",null,"\u6848\u4F8B\uFF08\u5386\u53F2\u4E0A\u7684\u4ECA\u5929\uFF09")])],-1),q=s("div",{class:"language-vue"},[s("pre",{class:"shiki",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"p"),s("span",{style:{color:"#24292F"}},">\u4ECA\u5929\u65E5\u671F: {{ value }}</"),s("span",{style:{color:"#116329"}},"p"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"btn"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"getHistoryData"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},">\u70B9\u51FB\u67E5\u770B</"),s("span",{style:{color:"#116329"}},"button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"ul"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"content"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"li"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-for"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"(item, index) "),s("span",{style:{color:"#CF222E"}},"in"),s("span",{style:{color:"#24292F"}}," list"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"key"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"list"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"list"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        <"),s("span",{style:{color:"#116329"}},"p"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"color:#409eff;"'),s("span",{style:{color:"#24292F"}},">{{ item.title }}</"),s("span",{style:{color:"#116329"}},"p"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      </"),s("span",{style:{color:"#116329"}},"li"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"ul"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  "),s("span",{style:{color:"#8250DF"}},"data"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      value: "),s("span",{style:{color:"#CF222E"}},"new"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"Date"),s("span",{style:{color:"#24292F"}},"()."),s("span",{style:{color:"#8250DF"}},"toLocaleString"),s("span",{style:{color:"#24292F"}},"(),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      list: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          day: "),s("span",{style:{color:"#0A3069"}},'"1'),s("span",{style:{color:"#0550AE"}},"\\/"),s("span",{style:{color:"#0A3069"}},'1"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},'"-45\u5E741\u67081\u65E5"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          title: "),s("span",{style:{color:"#0A3069"}},'"\u7F57\u9A6C\u5171\u548C\u56FD\u5F00\u59CB\u4F7F\u7528\u5112\u7565\u5386"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          e_id: "),s("span",{style:{color:"#0A3069"}},'"1"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          day: "),s("span",{style:{color:"#0A3069"}},'"1'),s("span",{style:{color:"#0550AE"}},"\\/"),s("span",{style:{color:"#0A3069"}},'1"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},'"404\u5E741\u67081\u65E5"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          title: "),s("span",{style:{color:"#0A3069"}},'"\u4E1C\u664B\u5C06\u9886\u6853\u7384\u6B63\u5F0F\u79F0\u5E1D\uFF0C\u56FD\u53F7\u695A"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          e_id: "),s("span",{style:{color:"#0A3069"}},'"2"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          day: "),s("span",{style:{color:"#0A3069"}},'"1'),s("span",{style:{color:"#0550AE"}},"\\/"),s("span",{style:{color:"#0A3069"}},'1"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},'"860\u5E741\u67081\u65E5"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          title: "),s("span",{style:{color:"#0A3069"}},'"\u897F\u6CD5\u5170\u514B\u56FD\u738B\u5384\u5FB7\u4E00\u4E16\u8BDE\u751F"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          e_id: "),s("span",{style:{color:"#0A3069"}},'"3"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }"),s("span",{style:{color:"#953800"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  "),s("span",{style:{color:"#24292F"}},"methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#6E7781"}},"// \u6CE8\u610F\uFF1A\u63A5\u53E3\u5B58\u5728\u8DE8\u57DF\uFF0C\u9700\u8981\u540E\u7AEF\u5148\u62FF\u5230\u6570\u636E\u7136\u540E\u4F20\u7ED9\u524D\u7AEF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#8250DF"}},"getHistoryData"),s("span",{style:{color:"#24292F"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"let"),s("span",{style:{color:"#24292F"}}," date "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"this"),s("span",{style:{color:"#24292F"}},".value."),s("span",{style:{color:"#8250DF"}},"toLocaleString"),s("span",{style:{color:"#24292F"}},"()."),s("span",{style:{color:"#8250DF"}},"split"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},'" "'),s("span",{style:{color:"#24292F"}},")["),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},"]."),s("span",{style:{color:"#8250DF"}},"split"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},'"/"'),s("span",{style:{color:"#24292F"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        key "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},'"cd32de53098100d56ae1b7a25306ddd3"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      console."),s("span",{style:{color:"#8250DF"}},"log"),s("span",{style:{color:"#24292F"}},"(date)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#0550AE"}},"this"),s("span",{style:{color:"#24292F"}},".list "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," []")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#8250DF"}},"fetch"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#0A3069"}},"`https://v.juhe.cn/todayOnhistory/queryEvent.php?key=${"),s("span",{style:{color:"#24292F"}},"key"),s("span",{style:{color:"#0A3069"}},"}&date=${"),s("span",{style:{color:"#24292F"}},"date"),s("span",{style:{color:"#0A3069"}},"["),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#0A3069"}},"]"),s("span",{style:{color:"#0A3069"}},"}/${"),s("span",{style:{color:"#24292F"}},"date"),s("span",{style:{color:"#0A3069"}},"["),s("span",{style:{color:"#0550AE"}},"2"),s("span",{style:{color:"#0A3069"}},"]"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          method: "),s("span",{style:{color:"#0A3069"}},'"GET"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      )."),s("span",{style:{color:"#8250DF"}},"then"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        ("),s("span",{style:{color:"#953800"}},"response"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#CF222E"}},"!"),s("span",{style:{color:"#24292F"}},"response.error_code) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            response.result."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"e"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              "),s("span",{style:{color:"#0550AE"}},"this"),s("span",{style:{color:"#24292F"}},".list."),s("span",{style:{color:"#8250DF"}},"push"),s("span",{style:{color:"#24292F"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                title: e.title,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                desc: e.des,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                src: e.pic,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        ("),s("span",{style:{color:"#953800"}},"error"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#6E7781"}},"//\u5904\u7406\u9519\u8BEF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }"),s("span",{style:{color:"#953800"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),w=s("ul",null,[s("li",null,[s("strong",null,"\u6848\u4F8B\uFF08ip \u5730\u5740\u67E5\u8BE2\uFF09")])],-1),I=s("div",{class:"language-vue"},[s("pre",{class:"shiki",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    ip:<"),s("span",{style:{color:"#116329"}},"input"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"btn"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"getIpData"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},">\u70B9\u51FB\u67E5\u770B</"),s("span",{style:{color:"#116329"}},"button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"p"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      \u5730\u5740\uFF1A{{ res.Country }}-{{ res.Province }}-{{ res.City }}-{{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        res.District")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      \u7C7B\u578B\uFF1A{{ res.Isp }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"p"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  "),s("span",{style:{color:"#8250DF"}},"data"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      value: "),s("span",{style:{color:"#0A3069"}},'"120.235.95.64"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      res: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Country: "),s("span",{style:{color:"#0A3069"}},'"\u4E2D\u56FD"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Province: "),s("span",{style:{color:"#0A3069"}},'"\u5E7F\u4E1C"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        City: "),s("span",{style:{color:"#0A3069"}},'"\u4F5B\u5C71"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        District: "),s("span",{style:{color:"#0A3069"}},'"\u4E09\u6C34\u533A"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Isp: "),s("span",{style:{color:"#0A3069"}},'"\u79FB\u52A8"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }"),s("span",{style:{color:"#953800"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  "),s("span",{style:{color:"#24292F"}},"methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#6E7781"}},"// \u6CE8\u610F\uFF1A\u63A5\u53E3\u5B58\u5728\u8DE8\u57DF\uFF0C\u9700\u8981\u540E\u7AEF\u5148\u62FF\u5230\u6570\u636E\u7136\u540E\u4F20\u7ED9\u524D\u7AEF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#8250DF"}},"getIpData"),s("span",{style:{color:"#24292F"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"let"),s("span",{style:{color:"#24292F"}}," key "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},'"d0ad7563a875b7459410d4da2c5b678f"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#0550AE"}},"this"),s("span",{style:{color:"#24292F"}},".list "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," []")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#8250DF"}},"fetch"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"`https://apis.juhe.cn/ip/ipNewV3?key=${"),s("span",{style:{color:"#24292F"}},"key"),s("span",{style:{color:"#0A3069"}},"}&ip=${"),s("span",{style:{color:"#0550AE"}},"this"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},", {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        method: "),s("span",{style:{color:"#0A3069"}},'"GET"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      })."),s("span",{style:{color:"#8250DF"}},"then"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        ("),s("span",{style:{color:"#953800"}},"response"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#CF222E"}},"!"),s("span",{style:{color:"#24292F"}},"response.error_code) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            "),s("span",{style:{color:"#0550AE"}},"this"),s("span",{style:{color:"#24292F"}},".res "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," response.result")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        ("),s("span",{style:{color:"#953800"}},"error"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#6E7781"}},"//\u5904\u7406\u9519\u8BEF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }"),s("span",{style:{color:"#953800"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},".btn"),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},"background-color"),s("span",{style:{color:"#24292F"}},":"),s("span",{style:{color:"#0550AE"}},"#409eff"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},"font-size"),s("span",{style:{color:"#24292F"}},":"),s("span",{style:{color:"#0550AE"}},"16"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},".content"),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},"max-height"),s("span",{style:{color:"#24292F"}},":"),s("span",{style:{color:"#0550AE"}},"100"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},"overflow-y"),s("span",{style:{color:"#24292F"}},":"),s("span",{style:{color:"#0550AE"}},"auto")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),$=s("ul",null,[s("li",null,[s("strong",null,"\u6848\u4F8B\uFF08\u4ECA\u65E5\u56FD\u5185\u6CB9\u4EF7\u67E5\u8BE2\uFF09")])],-1),V=s("div",{class:"language-vue"},[s("pre",{class:"shiki",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"btn"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"getIpData"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},">\u70B9\u51FB\u67E5\u770B</"),s("span",{style:{color:"#116329"}},"button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"ul"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"content"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"li"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-for"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"(item, index) "),s("span",{style:{color:"#CF222E"}},"in"),s("span",{style:{color:"#24292F"}}," list"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"key"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"list"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"list"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        <"),s("span",{style:{color:"#116329"}},"p"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"color:#409eff;"'),s("span",{style:{color:"#24292F"}},">{{ item.city }}\uFF1A{{ item.b0 }}\u5143</"),s("span",{style:{color:"#116329"}},"p"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      </"),s("span",{style:{color:"#116329"}},"li"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"ul"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  "),s("span",{style:{color:"#8250DF"}},"data"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      list: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          city: "),s("span",{style:{color:"#0A3069"}},'"\u6CB3\u5317"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          b90: "),s("span",{style:{color:"#0A3069"}},'"-"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          b93: "),s("span",{style:{color:"#0A3069"}},'""'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          b97: "),s("span",{style:{color:"#0A3069"}},'""'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          b0: "),s("span",{style:{color:"#0A3069"}},'"8.15"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0A3069"}},'"92h"'),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0A3069"}},'"8.46"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0A3069"}},'"95h"'),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0A3069"}},'"8.94"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0A3069"}},'"98h"'),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0A3069"}},'"9.76"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0A3069"}},'"0h"'),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0A3069"}},'"8.15"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          city: "),s("span",{style:{color:"#0A3069"}},'"\u5929\u6D25"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          b90: "),s("span",{style:{color:"#0A3069"}},'"-"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          b93: "),s("span",{style:{color:"#0A3069"}},'""'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          b97: "),s("span",{style:{color:"#0A3069"}},'""'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          b0: "),s("span",{style:{color:"#0A3069"}},'"8.15"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0A3069"}},'"92h"'),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0A3069"}},'"8.46"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0A3069"}},'"95h"'),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0A3069"}},'"8.94"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0A3069"}},'"98h"'),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0A3069"}},'"0.00"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0A3069"}},'"0h"'),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0A3069"}},'"8.15"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          city: "),s("span",{style:{color:"#0A3069"}},'"\u5C71\u897F"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          b90: "),s("span",{style:{color:"#0A3069"}},'"-"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          b93: "),s("span",{style:{color:"#0A3069"}},'""'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          b97: "),s("span",{style:{color:"#0A3069"}},'""'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          b0: "),s("span",{style:{color:"#0A3069"}},'"8.22"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0A3069"}},'"92h"'),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0A3069"}},'"8.40"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0A3069"}},'"95h"'),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0A3069"}},'"9.07"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0A3069"}},'"98h"'),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0A3069"}},'"9.77"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0A3069"}},'"0h"'),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0A3069"}},'"8.22"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }"),s("span",{style:{color:"#953800"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  "),s("span",{style:{color:"#24292F"}},"methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#6E7781"}},"// \u6CE8\u610F\uFF1A\u63A5\u53E3\u5B58\u5728\u8DE8\u57DF\uFF0C\u9700\u8981\u540E\u7AEF\u5148\u62FF\u5230\u6570\u636E\u7136\u540E\u4F20\u7ED9\u524D\u7AEF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#8250DF"}},"getIpData"),s("span",{style:{color:"#24292F"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"let"),s("span",{style:{color:"#24292F"}}," key "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},'"22044931eb3973d36300331491b0546f"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#0550AE"}},"this"),s("span",{style:{color:"#24292F"}},".list "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," []")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#8250DF"}},"fetch"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"`https://apis.juhe.cn/cnoil/oil_city?key=${"),s("span",{style:{color:"#24292F"}},"key"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},", {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        method: "),s("span",{style:{color:"#0A3069"}},'"GET"'),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      })."),s("span",{style:{color:"#8250DF"}},"then"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        ("),s("span",{style:{color:"#953800"}},"response"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#CF222E"}},"!"),s("span",{style:{color:"#24292F"}},"response.error_code) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            response.result."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"e"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              "),s("span",{style:{color:"#0550AE"}},"this"),s("span",{style:{color:"#24292F"}},".list."),s("span",{style:{color:"#8250DF"}},"push"),s("span",{style:{color:"#24292F"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                title: e.title,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                desc: e.des,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                src: e.pic,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        ("),s("span",{style:{color:"#953800"}},"error"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#6E7781"}},"//\u5904\u7406\u9519\u8BEF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }"),s("span",{style:{color:"#953800"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),N=s("h3",{id:"_4-2-\u5176\u4ED6\u7B2C\u4E09\u65B9\u63A5\u53E3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_4-2-\u5176\u4ED6\u7B2C\u4E09\u65B9\u63A5\u53E3","aria-hidden":"true"},"#"),l(" 4.2 \u5176\u4ED6\u7B2C\u4E09\u65B9\u63A5\u53E3")],-1),S=s("p",null,"\u9664\u4E86\u6574\u5408\u578B\u7684\u7B2C\u4E09\u65B9\u63A5\u53E3\u805A\u5408\u6570\u636E\u5916\uFF0C\u5176\u4ED6\u6BD4\u8F83\u5B9E\u7528\u7684\u7B2C\u4E09\u65B9\u63A5\u53E3\u8FD8\u6709\uFF1A",-1),T={href:"https://lbs.amap.com/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://developer.github.com/v3/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://api.fanyi.baidu.com/api/trans/product/index",target:"_blank",rel:"noopener noreferrer"},G={href:"https://www.heweather.com/documents/",target:"_blank",rel:"noopener noreferrer"},H={href:"https://www.avatardata.cn/Docs",target:"_blank",rel:"noopener noreferrer"},M=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"\u603B\u7ED3"),s("p",null,"\u901A\u8FC7\u5BF9 mock \u6570\u636E\u7684\u4E86\u89E3\uFF0C\u53EF\u4EE5\u5728\u4EE5\u540E\u9879\u76EE\u5F00\u53D1\u4E2D\u4E0E\u540E\u7AEF\u5E76\u884C\u5F00\u53D1\u9879\u76EE\uFF0C\u5B9E\u73B0\u5FEB\u901F\u8FED\u4EE3\u9700\u6C42\u7684\u76EE\u7684")],-1);function O(y,r,h,a,F,i){const t=C("ExternalLinkIcon"),E=C("render-demo-0"),d=C("demo"),o=C("render-demo-1"),p=C("render-demo-2");return D(),b("div",null,[g,s("blockquote",null,[s("p",null,[l("\u805A\u5408\u6570\u636E\uFF08"),s("a",x,[l("https://www.juhe.cn/docs"),c(t)]),l("\uFF09\u662F\u56FD\u5185\u9886\u5148\u7684\u57FA\u7840\u6570\u636E\u670D\u52A1\u5546\uFF0C \u4EE5\u81EA\u6709\u6570\u636E\u4E3A\u57FA\u7840\uFF0C\u5404\u79CD\u4FBF\u6377\u670D\u52A1\u6574\u5408\u4EE5\u53CA\u7B2C\u4E09\u65B9\u6570\u636E\u63A5\u5165\uFF0C\u4E3A\u4E92\u8054\u7F51\u5F00\u53D1\u5168\u884C\u4E1A\u63D0\u4F9B\u6807\u51C6\u5316 API \u6280\u672F\u652F\u6491\u670D\u52A1\u7684 DaaS \u5E73\u53F0\u3002")])]),j,c(d,{customClass:"demoblock-custom",sourceCode:`<template>
  <div>
    <p>\u4ECA\u5929\u65E5\u671F: {{ value }}</p>
    <button class="btn" @click="getHistoryData">\u70B9\u51FB\u67E5\u770B</button>
    <ul class="content">
      <li v-for="(item, index) in list" :key="index" :list="list">
        <p style="color:#409eff;">{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: new Date().toLocaleString(),
      list: [
        {
          day: "1\\/1",
          date: "-45\u5E741\u67081\u65E5",
          title: "\u7F57\u9A6C\u5171\u548C\u56FD\u5F00\u59CB\u4F7F\u7528\u5112\u7565\u5386",
          e_id: "1",
        },
        {
          day: "1\\/1",
          date: "404\u5E741\u67081\u65E5",
          title: "\u4E1C\u664B\u5C06\u9886\u6853\u7384\u6B63\u5F0F\u79F0\u5E1D\uFF0C\u56FD\u53F7\u695A",
          e_id: "2",
        },
        {
          day: "1\\/1",
          date: "860\u5E741\u67081\u65E5",
          title: "\u897F\u6CD5\u5170\u514B\u56FD\u738B\u5384\u5FB7\u4E00\u4E16\u8BDE\u751F",
          e_id: "3",
        },
      ],
    }
  },
  methods: {
    // \u6CE8\u610F\uFF1A\u63A5\u53E3\u5B58\u5728\u8DE8\u57DF\uFF0C\u9700\u8981\u540E\u7AEF\u5148\u62FF\u5230\u6570\u636E\u7136\u540E\u4F20\u7ED9\u524D\u7AEF
    getHistoryData() {
      let date = this.value.toLocaleString().split(" ")[0].split("/"),
        key = "cd32de53098100d56ae1b7a25306ddd3"
      console.log(date)
      this.list = []
      fetch(
        \`https://v.juhe.cn/todayOnhistory/queryEvent.php?key=\${key}&date=\${date[1]}/\${date[2]}\`,
        {
          method: "GET",
        }
      ).then(
        (response) => {
          if (!response.error_code) {
            response.result.map((e) => {
              this.list.push({
                title: e.title,
                desc: e.des,
                src: e.pic,
              })
            })
          }
        },
        (error) => {
          //\u5904\u7406\u9519\u8BEF
        }
      )
    },
  },
}
<\/script>
`},{highlight:m(()=>[q]),default:m(()=>[c(E)]),_:1}),w,c(d,{customClass:"demoblock-custom",sourceCode:`<template>
  <div>
    ip:<input v-model="value" />
    <button class="btn" @click="getIpData">\u70B9\u51FB\u67E5\u770B</button>
    <p>
      \u5730\u5740\uFF1A{{ res.Country }}-{{ res.Province }}-{{ res.City }}-{{
        res.District
      }}
      \u7C7B\u578B\uFF1A{{ res.Isp }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "120.235.95.64",
      res: {
        Country: "\u4E2D\u56FD",
        Province: "\u5E7F\u4E1C",
        City: "\u4F5B\u5C71",
        District: "\u4E09\u6C34\u533A",
        Isp: "\u79FB\u52A8",
      },
    }
  },
  methods: {
    // \u6CE8\u610F\uFF1A\u63A5\u53E3\u5B58\u5728\u8DE8\u57DF\uFF0C\u9700\u8981\u540E\u7AEF\u5148\u62FF\u5230\u6570\u636E\u7136\u540E\u4F20\u7ED9\u524D\u7AEF
    getIpData() {
      let key = "d0ad7563a875b7459410d4da2c5b678f"
      this.list = []
      fetch(\`https://apis.juhe.cn/ip/ipNewV3?key=\${key}&ip=\${this.value}\`, {
        method: "GET",
      }).then(
        (response) => {
          if (!response.error_code) {
            this.res = response.result
          }
        },
        (error) => {
          //\u5904\u7406\u9519\u8BEF
        }
      )
    },
  },
}
<\/script>
<style>
  .btn{
background-color:#409eff;
font-size:16px;
  }
  .content{
max-height:100px;
overflow-y:auto
  }
</style>
`},{highlight:m(()=>[I]),default:m(()=>[c(o)]),_:1}),$,c(d,{customClass:"demoblock-custom",sourceCode:`<template>
  <div>
    <button class="btn" @click="getIpData">\u70B9\u51FB\u67E5\u770B</button>
    <ul class="content">
      <li v-for="(item, index) in list" :key="index" :list="list">
        <p style="color:#409eff;">{{ item.city }}\uFF1A{{ item.b0 }}\u5143</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          city: "\u6CB3\u5317",
          b90: "-",
          b93: "",
          b97: "",
          b0: "8.15",
          "92h": "8.46",
          "95h": "8.94",
          "98h": "9.76",
          "0h": "8.15",
        },
        {
          city: "\u5929\u6D25",
          b90: "-",
          b93: "",
          b97: "",
          b0: "8.15",
          "92h": "8.46",
          "95h": "8.94",
          "98h": "0.00",
          "0h": "8.15",
        },
        {
          city: "\u5C71\u897F",
          b90: "-",
          b93: "",
          b97: "",
          b0: "8.22",
          "92h": "8.40",
          "95h": "9.07",
          "98h": "9.77",
          "0h": "8.22",
        },
      ],
    }
  },
  methods: {
    // \u6CE8\u610F\uFF1A\u63A5\u53E3\u5B58\u5728\u8DE8\u57DF\uFF0C\u9700\u8981\u540E\u7AEF\u5148\u62FF\u5230\u6570\u636E\u7136\u540E\u4F20\u7ED9\u524D\u7AEF
    getIpData() {
      let key = "22044931eb3973d36300331491b0546f"
      this.list = []
      fetch(\`https://apis.juhe.cn/cnoil/oil_city?key=\${key}\`, {
        method: "GET",
      }).then(
        (response) => {
          if (!response.error_code) {
            response.result.map((e) => {
              this.list.push({
                title: e.title,
                desc: e.des,
                src: e.pic,
              })
            })
          }
        },
        (error) => {
          //\u5904\u7406\u9519\u8BEF
        }
      )
    },
  },
}
<\/script>
`},{highlight:m(()=>[V]),default:m(()=>[c(p)]),_:1}),N,S,s("ul",null,[s("li",null,[s("a",T,[l("\u9AD8\u5FB7\u5730\u56FE"),c(t)]),l("\uFF1A\u8BBF\u95EE\u9AD8\u5FB7\u5730\u56FE\u7684 Web API")]),s("li",null,[s("a",L,[l("GitHub"),c(t)]),l("\uFF1A\u4E16\u754C\u4E0A\u9886\u5148\u7684\u8F6F\u4EF6\u5F00\u53D1\u5E73\u53F0")]),s("li",null,[s("a",P,[l("\u767E\u5EA6\u7FFB\u8BD1"),c(t)]),l("\uFF1A\u652F\u6301\u591A\u79CD\u8BED\u8A00\u4E4B\u95F4\u7684\u76F8\u4E92\u7FFB\u8BD1")]),s("li",null,[s("a",G,[l("\u548C\u98CE\u5929\u6C14"),c(t)]),l("\uFF1A\u4E2D\u56FD\u5929\u6C14\u4FE1\u606F")]),s("li",null,[s("a",H,[l("\u963F\u51E1\u8FBE\u6570\u636E"),c(t)]),l(" \uFF1A\u63D0\u4F9B\u4E2D\u56FD\u53EF\u7528\u7684 API")])]),M])}const U=B(_,[["render",O],["__file","11.mock.html.vue"]]);export{U as default};
