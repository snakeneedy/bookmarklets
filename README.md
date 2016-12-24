# Bookmarklets 小書籤

Introduction 簡介

> 小書籤（bookmarklet），又叫書籤小程式，是一種小型的程式（Applet），以網址（URL）的形式被存為瀏覽器中的書籤，也可以是網頁上的一個連結。
> 
> 引用自[小書籤 - 維基百科，自由的百科全書](https://zh.wikipedia.org/zh-tw/%E5%B0%8F%E4%B9%A6%E7%AD%BE)

<!-- -->
> A bookmarklet is a bookmark stored in a web browser that contains JavaScript commands that add new features to the browser.
>
> Quoted from [Bookmarklet - Wikipedia](https://en.wikipedia.org/wiki/Bookmarklet)

## LaTex 轉換

將以下文字存成書籤
```url
javascript: (function() { var b = document.getElementsByTagName('body')[0]; var s = document.createElement('script'); s.src = 'http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML'; b.appendChild(s); s = document.createElement('script'); s.type = 'text/x-mathjax-config'; s.innerHTML = "MathJax.Hub.Config({ jax: ['input/TeX', 'output/HTML-CSS'], tex2jax: { inlineMath: [ ['$', '$'] ], displayMath: [ ['$$', '$$']], processEscapes: true, skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'] }, messageStyle: 'none', 'HTML-CSS': { preferredFont: 'TeX', availableFonts: ['STIX','TeX'] } });"; b.appendChild(s); })(); 
```

## Markdown &lt;code&gt; 套色

```url
javascript: (function() { var s = document.createElement('style'); s.type = 'text/css'; s.innerHTML = 'h1::before{content:"# "}h2::before{content:"## "}h3::before{content:"### "}h4::before{content:"#### "}h5::before{content:"##### "}h6::before{content:"###### "}code,pre{font-family:"Ubuntu Mono",Consolas,Monospace,"Noto Sans CJK TC","微軟正黑體","Microsoft JhengHei","標楷體","Lucida Bright",DFKai-SB,sans-serif,Arial,FontAwesome,"Glyphicons Halflings",ProximaNova-Regular,nova,eg-header-icomoon,Symbol,Ionicons,"Helvetica Neue",Helvetica,"Open Sans",hackpad,tk-sc-icons,icon,entypo,WebHostingHub-Glyphs,wizIcons}li>code,p>code{font-size:85%;color:#B94A48;background-color:#FCF3F2;border:1px solid #E2DADA;border-radius:3px}rt{font-size:small}'; document.head.appendChild(s); })(); 
```

> GitHub 無法顯示 HTML 的 a 標籤，故刪除。

