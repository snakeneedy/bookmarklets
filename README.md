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
javascript:(function()%7Bvar%20b%3Ddocument.getElementsByTagName('body')%5B0%5D%3Bvar%20s%3Ddocument.createElement('script')%3Bs.src%3D'http%3A%2F%2Fcdn.mathjax.org%2Fmathjax%2Flatest%2FMathJax.js%3Fconfig%3DTeX-AMS-MML_HTMLorMML'%3Bb.appendChild(s)%3Bs%3Ddocument.createElement('script')%3Bs.type%3D'text%2Fx-mathjax-config'%3Bs.innerHTML%3D%22MathJax.Hub.Config(%7B%20jax%3A%20%5B'input%2FTeX'%2C%20'output%2FHTML-CSS'%5D%2C%20tex2jax%3A%20%7B%20inlineMath%3A%20%5B%20%5B'%24'%2C%20'%24'%5D%20%5D%2C%20displayMath%3A%20%5B%20%5B'%24%24'%2C%20'%24%24'%5D%5D%2C%20processEscapes%3A%20true%2C%20skipTags%3A%20%5B'script'%2C%20'noscript'%2C%20'style'%2C%20'textarea'%2C%20'pre'%2C%20'code'%5D%20%7D%2C%20messageStyle%3A%20'none'%2C%20'HTML-CSS'%3A%20%7B%20preferredFont%3A%20'TeX'%2C%20availableFonts%3A%20%5B'STIX'%2C'TeX'%5D%20%7D%20%7D)%3B%22%3Bb.appendChild(s)%7D)()
```

## Markdown &lt;code&gt; 套色

```url
javascript: (function() { var s = document.createElement('style'); s.type = 'text/css'; s.innerHTML = 'h1::before{content:"# "}h2::before{content:"## "}h3::before{content:"### "}h4::before{content:"#### "}h5::before{content:"##### "}h6::before{content:"###### "}code,pre{font-family:"Ubuntu Mono",Consolas,Monospace,"Noto Sans CJK TC","微軟正黑體","Microsoft JhengHei","標楷體","Lucida Bright",DFKai-SB,sans-serif,Arial,FontAwesome,"Glyphicons Halflings",ProximaNova-Regular,nova,eg-header-icomoon,Symbol,Ionicons,"Helvetica Neue",Helvetica,"Open Sans",hackpad,tk-sc-icons,icon,entypo,WebHostingHub-Glyphs,wizIcons}li>code,p>code{font-size:85%;color:#B94A48;background-color:#FCF3F2;border:1px solid #E2DADA;border-radius:3px}rt{font-size:small}'; document.head.appendChild(s); })(); 
```

> GitHub 無法顯示 HTML 的 a 標籤，故刪除。

