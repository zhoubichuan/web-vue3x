import{_ as s,o as n,c as a,a as l}from"./app.8390b8a1.js";const p={},o=l(`<h1 id="\u4E03-\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E03-\u6CDB\u578B" aria-hidden="true">#</a> \u4E03.\u6CDB\u578B</h1><h2 id="_1-\u6307\u5B9A\u51FD\u6570\u53C2\u6570\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-\u6307\u5B9A\u51FD\u6570\u53C2\u6570\u7C7B\u578B" aria-hidden="true">#</a> 1.\u6307\u5B9A\u51FD\u6570\u53C2\u6570\u7C7B\u578B</h2><ul><li>\u5355\u4E2A\u6CDB\u578B</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">getArray</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> &lt;</span><span style="color:#953800;">T</span><span style="color:#24292F;">&gt;(</span><span style="color:#953800;">times</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span><span style="color:#24292F;">, </span><span style="color:#953800;">val</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">)</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">[] </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">let</span><span style="color:#24292F;"> result</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">[] </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> [];</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">for</span><span style="color:#24292F;"> (</span><span style="color:#CF222E;">let</span><span style="color:#24292F;"> i </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">0</span><span style="color:#24292F;">; i </span><span style="color:#CF222E;">&lt;</span><span style="color:#24292F;"> times; i</span><span style="color:#CF222E;">++</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">    result.</span><span style="color:#8250DF;">push</span><span style="color:#24292F;">(val);</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> result;</span></span>
<span class="line"><span style="color:#24292F;">};</span></span>
<span class="line"><span style="color:#8250DF;">getArray</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">3</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">3</span><span style="color:#24292F;">); </span><span style="color:#6E7781;">// 3 =&gt; T =&gt; number</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u591A\u4E2A\u6CDB\u578B</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">swap</span><span style="color:#24292F;">&lt;</span><span style="color:#953800;">T</span><span style="color:#24292F;">, </span><span style="color:#953800;">K</span><span style="color:#24292F;">&gt;(</span><span style="color:#953800;">tuple</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> [</span><span style="color:#953800;">T</span><span style="color:#24292F;">, </span><span style="color:#953800;">K</span><span style="color:#24292F;">])</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> [</span><span style="color:#953800;">K</span><span style="color:#24292F;">, </span><span style="color:#953800;">T</span><span style="color:#24292F;">] {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> [tuple[</span><span style="color:#0550AE;">1</span><span style="color:#24292F;">], tuple[</span><span style="color:#0550AE;">0</span><span style="color:#24292F;">]];</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#24292F;">console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(</span><span style="color:#8250DF;">swap</span><span style="color:#24292F;">([</span><span style="color:#0A3069;">&quot;a&quot;</span><span style="color:#24292F;">, </span><span style="color:#0A3069;">&quot;b&quot;</span><span style="color:#24292F;">]));</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u51FD\u6570\u6807\u6CE8\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-\u51FD\u6570\u6807\u6CE8\u7684\u65B9\u5F0F" aria-hidden="true">#</a> 2.\u51FD\u6570\u6807\u6CE8\u7684\u65B9\u5F0F</h2><ul><li>\u7C7B\u578B\u522B\u540D</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">type</span><span style="color:#24292F;"> </span><span style="color:#953800;">TArray</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> &lt;</span><span style="color:#953800;">T</span><span style="color:#24292F;">, </span><span style="color:#953800;">K</span><span style="color:#24292F;">&gt;(</span><span style="color:#953800;">tuple</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> [</span><span style="color:#953800;">T</span><span style="color:#24292F;">, </span><span style="color:#953800;">K</span><span style="color:#24292F;">]) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> [</span><span style="color:#953800;">K</span><span style="color:#24292F;">, </span><span style="color:#953800;">T</span><span style="color:#24292F;">];</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">getArray</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">TArray</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> &lt;</span><span style="color:#953800;">T</span><span style="color:#24292F;">, </span><span style="color:#953800;">K</span><span style="color:#24292F;">&gt;(</span><span style="color:#953800;">tuple</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> [</span><span style="color:#953800;">T</span><span style="color:#24292F;">, </span><span style="color:#953800;">K</span><span style="color:#24292F;">])</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> [</span><span style="color:#953800;">K</span><span style="color:#24292F;">, </span><span style="color:#953800;">T</span><span style="color:#24292F;">] </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> [tuple[</span><span style="color:#0550AE;">1</span><span style="color:#24292F;">], tuple[</span><span style="color:#0550AE;">0</span><span style="color:#24292F;">]];</span></span>
<span class="line"><span style="color:#24292F;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u4F7F\u7528\u7C7B\u578B\u522B\u540D\uFF0C\u4F46\u662F\u7C7B\u578B\u522B\u540D\u4E0D\u80FD\u88AB\u7EE7\u627F\u548C\u5B9E\u73B0\u3002\u4E00\u822C\u8054\u5408\u7C7B\u578B\u53EF\u4EE5\u4F7F\u7528\u7C7B\u578B\u522B\u540D\u6765\u58F0\u660E</p><ul><li>\u63A5\u53E3</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">interface</span><span style="color:#24292F;"> </span><span style="color:#953800;">TArray</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  &lt;</span><span style="color:#953800;">T</span><span style="color:#24292F;">,</span><span style="color:#953800;">K</span><span style="color:#24292F;">&gt;(</span><span style="color:#953800;">typle</span><span style="color:#CF222E;">:</span><span style="color:#24292F;">[</span><span style="color:#953800;">T</span><span style="color:#24292F;">,</span><span style="color:#953800;">K</span><span style="color:#24292F;">]</span><span style="color:#CF222E;">:</span><span style="color:#24292F;">[</span><span style="color:#953800;">K</span><span style="color:#24292F;">,</span><span style="color:#953800;">T</span><span style="color:#24292F;">])</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">getArray</span><span style="color:#CF222E;">:</span><span style="color:#953800;">TArray</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> &lt;</span><span style="color:#953800;">T</span><span style="color:#24292F;">,</span><span style="color:#953800;">K</span><span style="color:#24292F;">&gt;(</span><span style="color:#953800;">tuple</span><span style="color:#CF222E;">:</span><span style="color:#24292F;">[</span><span style="color:#953800;">T</span><span style="color:#24292F;">,</span><span style="color:#953800;">K</span><span style="color:#24292F;">])</span><span style="color:#CF222E;">:</span><span style="color:#24292F;">[</span><span style="color:#953800;">K</span><span style="color:#24292F;">,</span><span style="color:#953800;">T</span><span style="color:#24292F;">] </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> [tuple[</span><span style="color:#0550AE;">1</span><span style="color:#24292F;">],tuple[</span><span style="color:#0550AE;">0</span><span style="color:#24292F;">]]</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u80FD\u4F7F\u7528 interface \u5C3D\u91CF\u4F7F\u7528 interface</p><h2 id="_3-\u6CDB\u578B\u63A5\u53E3\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-\u6CDB\u578B\u63A5\u53E3\u4F7F\u7528" aria-hidden="true">#</a> 3.\u6CDB\u578B\u63A5\u53E3\u4F7F\u7528</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">interface</span><span style="color:#24292F;"> </span><span style="color:#953800;">ISum</span><span style="color:#24292F;">&lt;</span><span style="color:#953800;">T</span><span style="color:#24292F;">&gt; {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#6E7781;">//\u8FD9\u91CC\u7684T\u662F\u4F7F\u7528\u63A5\u53E3\u7684\u65F6\u5019\u4F20\u5165</span></span>
<span class="line"><span style="color:#24292F;">  &lt;</span><span style="color:#953800;">U</span><span style="color:#24292F;">&gt;(</span><span style="color:#953800;">a</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">, </span><span style="color:#953800;">b</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">)</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">U</span><span style="color:#24292F;">; </span><span style="color:#6E7781;">//\u8FD9\u91CC\u7684U\u662F\u8C03\u7528\u51FD\u6570\u7684\u65F6\u5019\u4F20\u5165</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">sum</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">ISum</span><span style="color:#24292F;">&lt;</span><span style="color:#0550AE;">number</span><span style="color:#24292F;">&gt; </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> (</span><span style="color:#953800;">a</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span><span style="color:#24292F;">, </span><span style="color:#953800;">b</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">3</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">as</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">any</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u9ED8\u8BA4\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#_4-\u9ED8\u8BA4\u6CDB\u578B" aria-hidden="true">#</a> 4.\u9ED8\u8BA4\u6CDB\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">interface</span><span style="color:#24292F;"> </span><span style="color:#953800;">T2</span><span style="color:#24292F;">&lt;</span><span style="color:#953800;">T</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;">&gt; {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">name</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">type</span><span style="color:#24292F;"> </span><span style="color:#953800;">T22</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#953800;">T2</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> name1</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">T22</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> { name: </span><span style="color:#0A3069;">&quot;ab&quot;</span><span style="color:#24292F;"> };</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u6307\u5B9A\u6CDB\u578B\u7684\u9ED8\u8BA4\u7C7B\u578B\uFF0C\u65B9\u4FBF\u4F7F\u7528</p><h2 id="_5-\u7C7B\u4E2D\u7684\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#_5-\u7C7B\u4E2D\u7684\u6CDB\u578B" aria-hidden="true">#</a> 5.\u7C7B\u4E2D\u7684\u6CDB\u578B</h2><ul><li>\u521B\u5EFA\u5B9E\u4F8B\u65F6\u63D0\u4F9B\u7C7B\u578B</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">class</span><span style="color:#24292F;"> </span><span style="color:#953800;">MyArray</span><span style="color:#24292F;">&lt;</span><span style="color:#953800;">T</span><span style="color:#24292F;">&gt; {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#6E7781;">// T=&gt; number</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">arr</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">[] </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> [];</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">add</span><span style="color:#24292F;">(</span><span style="color:#953800;">num</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.arr.</span><span style="color:#8250DF;">push</span><span style="color:#24292F;">(num);</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">getMaxNum</span><span style="color:#24292F;">()</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">let</span><span style="color:#24292F;"> arr </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.arr;</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">let</span><span style="color:#24292F;"> max </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> arr[</span><span style="color:#0550AE;">0</span><span style="color:#24292F;">];</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">for</span><span style="color:#24292F;"> (</span><span style="color:#CF222E;">let</span><span style="color:#24292F;"> i </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">1</span><span style="color:#24292F;">; i </span><span style="color:#CF222E;">&lt;</span><span style="color:#24292F;"> arr.</span><span style="color:#0550AE;">length</span><span style="color:#24292F;">; i</span><span style="color:#CF222E;">++</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#CF222E;">let</span><span style="color:#24292F;"> current </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> arr[i];</span></span>
<span class="line"><span style="color:#24292F;">      current </span><span style="color:#CF222E;">&gt;</span><span style="color:#24292F;"> max </span><span style="color:#CF222E;">?</span><span style="color:#24292F;"> (max </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> current) </span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">null</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> myArr </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">MyArray</span><span style="color:#24292F;">&lt;</span><span style="color:#0550AE;">number</span><span style="color:#24292F;">&gt;();</span></span>
<span class="line"><span style="color:#24292F;">myArr.</span><span style="color:#8250DF;">add</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">3</span><span style="color:#24292F;">);</span></span>
<span class="line"><span style="color:#24292F;">myArr.</span><span style="color:#8250DF;">add</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">1</span><span style="color:#24292F;">);</span></span>
<span class="line"><span style="color:#24292F;">myArr.</span><span style="color:#8250DF;">add</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">2</span><span style="color:#24292F;">);</span></span>
<span class="line"><span style="color:#24292F;">console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(myArr.</span><span style="color:#8250DF;">getMaxNum</span><span style="color:#24292F;">());</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6821\u9A8C\u6784\u9020\u51FD\u6570\u7C7B\u578B</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">createClass</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> &lt;</span><span style="color:#953800;">T</span><span style="color:#24292F;">&gt;(</span><span style="color:#953800;">clazz</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> (</span><span style="color:#953800;">name</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;">, </span><span style="color:#953800;">age</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">)</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">clazz</span><span style="color:#24292F;">(name, age);</span></span>
<span class="line"><span style="color:#24292F;">};</span></span>
<span class="line"><span style="color:#8250DF;">createClass</span><span style="color:#24292F;">&lt;</span><span style="color:#953800;">Person2</span><span style="color:#24292F;">&gt;(Person2);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u6CDB\u578B\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#_6-\u6CDB\u578B\u7EA6\u675F" aria-hidden="true">#</a> 6.\u6CDB\u578B\u7EA6\u675F</h2><ul><li>\u6CDB\u578B\u5FC5\u987B\u5305\u542B\u67D0\u4E9B\u5C5E\u6027</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">interface</span><span style="color:#24292F;"> </span><span style="color:#953800;">IWithLength</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">length</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">getLen</span><span style="color:#24292F;">&lt;</span><span style="color:#953800;">T</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">extends</span><span style="color:#24292F;"> </span><span style="color:#953800;">IWithLength</span><span style="color:#24292F;">&gt;(</span><span style="color:#953800;">val</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> val.</span><span style="color:#0550AE;">length</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#8250DF;">getLen</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;hello&quot;</span><span style="color:#24292F;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">sum</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> &lt;</span><span style="color:#953800;">T</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">extends</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span><span style="color:#24292F;">&gt;(</span><span style="color:#953800;">a</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">, </span><span style="color:#953800;">b</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">)</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> (a </span><span style="color:#CF222E;">+</span><span style="color:#24292F;"> b) </span><span style="color:#CF222E;">as</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">};</span></span>
<span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> r </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">sum</span><span style="color:#24292F;">&lt;</span><span style="color:#0550AE;">number</span><span style="color:#24292F;">&gt;(</span><span style="color:#0550AE;">1</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">2</span><span style="color:#24292F;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u6CDB\u578B\u4E2D\u6307\u5B9A\u5C5E\u6027</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">getVal</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> &lt;</span><span style="color:#953800;">T</span><span style="color:#24292F;">, </span><span style="color:#953800;">K</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">extends</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">keyof</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">&gt;(</span><span style="color:#953800;">obj</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">, </span><span style="color:#953800;">key</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">K</span><span style="color:#24292F;">)</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">T</span><span style="color:#24292F;">[</span><span style="color:#953800;">K</span><span style="color:#24292F;">] </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> obj[key];</span></span>
<span class="line"><span style="color:#24292F;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),e=[o];function r(c,t){return n(),a("div",null,e)}const i=s(p,[["render",r],["__file","7.generic.html.vue"]]);export{i as default};
