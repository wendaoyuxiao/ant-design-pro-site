webpackJsonp([81],{2444:function(n,s){n.exports={content:["article",["h2","\u6784\u5efa"],["p","\u5f53\u9879\u76ee\u5f00\u53d1\u5b8c\u6bd5\uff0c\u53ea\u9700\u8981\u8fd0\u884c\u4e00\u884c\u547d\u4ee4\u5c31\u53ef\u4ee5\u6253\u5305\u4f60\u7684\u5e94\u7528\uff1a"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> run build'},["code","$ npm run build"]],["p",["a",{title:null,href:"https://asciinema.org/a/198144"},["img",{title:null,src:"https://asciinema.org/a/198144.png",alt:"asciicast"}]]],["p","\u7531\u4e8e Ant Design Pro \u4f7f\u7528\u7684\u5de5\u5177 ",["a",{title:null,href:"https://umijs.org/"},"Umi"]," \u5df2\u7ecf\u5c06\u590d\u6742\u7684\u6d41\u7a0b\u5c01\u88c5\u5b8c\u6bd5\uff0c\u6784\u5efa\u6253\u5305\u6587\u4ef6\u53ea\u9700\u8981\u4e00\u4e2a\u547d\u4ee4 ",["code","umi build"],"\uff0c\u6784\u5efa\u6253\u5305\u6210\u529f\u4e4b\u540e\uff0c\u4f1a\u5728\u6839\u76ee\u5f55\u751f\u6210 ",["code","dist"]," \u6587\u4ef6\u5939\uff0c\u91cc\u9762\u5c31\u662f\u6784\u5efa\u6253\u5305\u597d\u7684\u6587\u4ef6\uff0c\u901a\u5e38\u662f ",["code","*.js"],"\u3001",["code","*.css"],"\u3001",["code","index.html"]," \u7b49\u9759\u6001\u6587\u4ef6\u3002\u3002"],["p","\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u6784\u5efa\uff0c\u6bd4\u5982\u6307\u5b9a ",["code","dist"]," \u76ee\u5f55\u7b49\uff0c\u53ef\u4ee5\u901a\u8fc7 ",["code","config/config.js"]," \u8fdb\u884c\u914d\u7f6e\uff0c\u8be6\u60c5\u53c2\u770b\uff1a",["a",{title:null,href:"https://umijs.org/guide/config.html"},"Umi \u914d\u7f6e"],"\u3002"],["h3","\u5206\u6790\u6784\u5efa\u6587\u4ef6\u4f53\u79ef"],["p","\u5982\u679c\u4f60\u7684\u6784\u5efa\u6587\u4ef6\u5f88\u5927\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",["code","analyze"]," \u547d\u4ee4\u6784\u5efa\u5e76\u5206\u6790\u4f9d\u8d56\u6a21\u5757\u7684\u4f53\u79ef\u5206\u5e03\uff0c\u4ece\u800c\u4f18\u5316\u4f60\u7684\u4ee3\u7801\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> run analyze'},["code","$ npm run analyze"]],["p","\u4e0a\u9762\u7684\u547d\u4ee4\u4f1a\u81ea\u52a8\u5728\u6d4f\u89c8\u5668\u6253\u5f00\u663e\u793a\u4f53\u79ef\u5206\u5e03\u6570\u636e\u7684\u7f51\u9875\u3002"],["h2","\u53d1\u5e03"],["p","\u5bf9\u4e8e\u53d1\u5e03\u6765\u8bb2\uff0c\u53ea\u9700\u8981\u5c06\u6700\u7ec8\u751f\u6210\u7684\u9759\u6001\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f\u901a\u5e38\u60c5\u51b5\u4e0b ",["code","dist"]," \u6587\u4ef6\u5939\u7684\u9759\u6001\u6587\u4ef6\u53d1\u5e03\u5230\u4f60\u7684 cdn \u6216\u8005\u9759\u6001\u670d\u52a1\u5668\u5373\u53ef\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u5176\u4e2d\u7684 ",["code","index.html"]," \u901a\u5e38\u4f1a\u662f\u4f60\u540e\u53f0\u670d\u52a1\u7684\u5165\u53e3\u9875\u9762\uff0c\u5728\u786e\u5b9a\u4e86 js \u548c css \u7684\u9759\u6001\u4e4b\u540e\u53ef\u80fd\u9700\u8981\u6539\u53d8\u9875\u9762\u7684\u5f15\u5165\u8def\u5f84\u3002"],["h3","\u524d\u7aef\u8def\u7531\u4e0e\u670d\u52a1\u7aef\u7684\u7ed3\u5408"],["p","Ant Design Pro \u4f7f\u7528\u7684 Umi \u652f\u6301\u4e24\u79cd\u8def\u7531\u65b9\u5f0f\uff1a",["code","browserHistory"]," \u548c ",["code","hashHistory"],"\u3002"],["p","\u53ef\u4ee5\u5728 ",["code","config/config.js"]," \u4e2d\u8fdb\u884c\u914d\u7f6e\u9009\u62e9\u7528\u54ea\u4e2a\u65b9\u5f0f\uff1a"],["pre",{lang:"javascript",highlighted:'<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  history<span class="token punctuation">:</span> <span class="token string">\'hash\'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// \u9ed8\u8ba4\u662f browser</span>\n<span class="token punctuation">}</span>'},["code","export default {\n  history: 'hash', // \u9ed8\u8ba4\u662f browser\n}"]],["p",["code","hashHistory"]," \u4f7f\u7528\u5982 ",["code","https://cdn.com/#/users/123"]," \u8fd9\u6837\u7684 URL\uff0c\u53d6\u4e95\u53f7\u540e\u9762\u7684\u5b57\u7b26\u4f5c\u4e3a\u8def\u5f84\u3002",["code","browserHistory"]," \u5219\u76f4\u63a5\u4f7f\u7528 ",["code","https://cdn.com/users/123"]," \u8fd9\u6837\u7684 URL\u3002\u4f7f\u7528 ",["code","hashHistory"]," \u65f6\u6d4f\u89c8\u5668\u8bbf\u95ee\u5230\u7684\u59cb\u7ec8\u90fd\u662f\u6839\u76ee\u5f55\u4e0b ",["code","index.html"],"\u3002\u4f7f\u7528 ",["code","browserHistory"]," \u5219\u9700\u8981\u670d\u52a1\u5668\u505a\u597d\u5904\u7406 URL \u7684\u51c6\u5907\uff0c\u5904\u7406\u5e94\u7528\u542f\u52a8\u6700\u521d\u7684 ",["code","/"]," \u8fd9\u6837\u7684\u8bf7\u6c42\u5e94\u8be5\u6ca1\u95ee\u9898\uff0c\u4f46\u5f53\u7528\u6237\u6765\u56de\u8df3\u8f6c\u5e76\u5728 ",["code","/users/123"]," \u5237\u65b0\u65f6\uff0c\u670d\u52a1\u5668\u5c31\u4f1a\u6536\u5230\u6765\u81ea ",["code","/users/123"]," \u7684\u8bf7\u6c42\uff0c\u8fd9\u65f6\u4f60\u9700\u8981\u914d\u7f6e\u670d\u52a1\u5668\u80fd\u5904\u7406\u8fd9\u4e2a URL \u8fd4\u56de\u6b63\u786e\u7684 ",["code","index.html"],"\u3002\u5982\u679c\u4f60\u80fd\u63a7\u5236\u670d\u52a1\u7aef\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",["code","browserHistory"],"\u3002"],["p",["a",{title:null,href:"http://expressjs.com/"},"express"]," \u7684\u4f8b\u5b50"],["pre",{lang:null,highlighted:'app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'build\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'/*\'</span><span class="token punctuation">,</span> function <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> {\n  res<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'build\'</span><span class="token punctuation">,</span> <span class="token string">\'index.html\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","app.use(express.static(path.join(__dirname, 'build')));\n\napp.get('/*', function (req, res) {\n  res.sendFile(path.join(__dirname, 'build', 'index.html'));\n});"]],["p",["a",{title:null,href:"https://eggjs.org/"},"egg"]," \u7684\u4f8b\u5b50"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> controller\nexports<span class="token punctuation">.</span>index <span class="token operator">=</span> function<span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> {\n  yield this<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">\'App.jsx\'</span><span class="token punctuation">,</span> {\n    context<span class="token punctuation">:</span> {\n      user<span class="token punctuation">:</span> this<span class="token punctuation">.</span>session<span class="token punctuation">.</span>user<span class="token punctuation">,</span>\n    }<span class="token punctuation">,</span>\n  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}<span class="token comment" spellcheck="true">;</span>\n\n<span class="token operator">/</span><span class="token operator">/</span> router\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'home\'</span><span class="token punctuation">,</span> <span class="token string">\'/*\'</span><span class="token punctuation">,</span> <span class="token string">\'home.index\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","// controller\nexports.index = function* () {\n  yield this.render('App.jsx', {\n    context: {\n      user: this.session.user,\n    },\n  });\n};\n\n// router\napp.get('home', '/*', 'home.index');"]],["p","\u5173\u4e8e\u8def\u7531\u66f4\u591a\u53ef\u4ee5\u53c2\u770b ",["a",{title:null,href:"https://umijs.org/guide/router.html"},"Umi \u7684\u8def\u7531\u6587\u6863"]," \u3002"]],meta:{order:8,title:"\u6784\u5efa\u548c\u53d1\u5e03",type:"\u5165\u95e8",filename:"docs/deploy.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u6784\u5efa",title:"\u6784\u5efa"},"\u6784\u5efa"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u53d1\u5e03",title:"\u53d1\u5e03"},"\u53d1\u5e03"]]]}}});