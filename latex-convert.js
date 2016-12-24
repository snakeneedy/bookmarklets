//javascript:
(function() {
  var b = document.getElementsByTagName('body')[0];
  var s = document.createElement('script');
  s.src = 'http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
  b.appendChild(s);
  s = document.createElement('script');
  s.type = 'text/x-mathjax-config';
  s.innerHTML = "MathJax.Hub.Config({ jax: ['input/TeX', 'output/HTML-CSS'], tex2jax: { inlineMath: [ ['$', '$'] ], displayMath: [ ['$$', '$$']], processEscapes: true, skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'] }, messageStyle: 'none', 'HTML-CSS': { preferredFont: 'TeX', availableFonts: ['STIX','TeX'] } });";
  b.appendChild(s);
})();

