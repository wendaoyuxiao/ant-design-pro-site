webpackJsonp([48,59],{1565:function(n,s){n.exports={content:["article",["p","Ant Design Pro \u63d0\u4f9b\u4e86\u7531\u8bbe\u8ba1\u5e08\u7cbe\u5fc3\u8bbe\u8ba1\u62bd\u8c61\u7684\u4e1a\u52a1\u5e38\u7528\u7684\u56fe\u8868\u7c7b\u578b\u3002 "],["p","\u662f\u5728 ",["a",{title:null,href:"https://antv.alipay.com/g2/doc/index.html"},"G2"]," \u56fe\u8868\u5e93\u57fa\u7840\u4e0a\u7684\u4e8c\u6b21\u5c01\u88c5\uff0c\u63d0\u4f9b\u4e86\u4e1a\u52a1\u4e2d\u5e38\u7528\u7684\u56fe\u8868\u5957\u4ef6\uff0c\u53ef\u4ee5\u5355\u72ec\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u7ec4\u5408\u8d77\u6765\u5b9e\u73b0\u590d\u6742\u7684\u5c55\u793a\u6548\u679c\u3002"],["blockquote",["p","\u9700\u8981\u6ce8\u610f\u7684\u662f\u540e\u671f\u5e95\u5c42\u4f1a\u6362\u6210\u57fa\u4e8e G2 \u7684 React \u56fe\u8868\u5e93 BizCharts\uff0c\u4f1a\u66f4\u52a0\u5feb\u901f\u8f7b\u91cf"]],["p","\u76ee\u524d\u4e00\u5171\u5305\u6db5 10 \u4e2a\u56fe\u8868\u7c7b\u578b\uff0c\u4ee5\u53ca 2 \u4e2a\u56fe\u8868\u5957\u4ef6\uff1a"],["ul",["li",["p","\u997c\u72b6\u56fe\uff08Pie\uff09"]],["li",["p","\u67f1\u72b6\u56fe\uff08Bar\uff09"]],["li",["p","\u4eea\u8868\u76d8\uff08Gauge\uff09"]],["li",["p","\u96f7\u8fbe\u56fe\uff08Radar\uff09"]],["li",["p","\u6807\u7b7e\u4e91\uff08TagCloud\uff09"]],["li",["p","\u6c34\u6ce2\u56fe\uff08WaterWave\uff09"]],["li",["p","\u8ff7\u4f60\u67f1\u72b6\u56fe\uff08MiniBar\uff09"]],["li",["p","\u8ff7\u4f60\u533a\u57df\u56fe\uff08MiniArea\uff09"]],["li",["p","\u8ff7\u4f60\u8fdb\u5ea6\u6761\uff08MiniProgress\uff09"]],["li",["p","\u5e26\u6709\u65f6\u95f4\u8f74\u7684\u6298\u7ebf\u56fe\uff08TimelineChart\uff09"]],["li",["p","\u56fe\u8868\u5361\u7247\uff08ChartCard\uff09"]],["li",["p","\u56fe\u8868\u5b57\u6bb5\uff08Field\uff09"]]],["p",["a",{title:null,href:"http://pro.ant.design/components/Charts"},"\u67e5\u770b\u56fe\u8868\u7ec4\u4ef6"]],["h2","\u4f7f\u7528 Ant Design Pro \u7684\u56fe\u8868"],["p","Charts \u56fe\u8868\u5957\u4ef6\u662f\u5728 ",["code","ant-design-pro/lib/Charts"]," \u5305\u4e2d\uff0c\u5f15\u7528\u5230\u9879\u76ee\u5c31\u50cf\u4f7f\u7528\u5176\u5b83\u7ec4\u4ef6\u4e00\u6837\uff1a"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ChartCard<span class="token punctuation">,</span> MiniBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'ant-design-pro/lib/Charts\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Tooltip<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> visitData <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    x<span class="token punctuation">:</span> <span class="token string">\'2017-09-01\'</span><span class="token punctuation">,</span>\n    y<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    x<span class="token punctuation">:</span> <span class="token string">\'2017-09-02\'</span><span class="token punctuation">,</span>\n    y<span class="token punctuation">:</span> <span class="token number">120</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    x<span class="token punctuation">:</span> <span class="token string">\'2017-09-03\'</span><span class="token punctuation">,</span>\n    y<span class="token punctuation">:</span> <span class="token number">88</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    x<span class="token punctuation">:</span> <span class="token string">\'2017-09-04\'</span><span class="token punctuation">,</span>\n    y<span class="token punctuation">:</span> <span class="token number">65</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChartCard</span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u652f\u4ed8\u7b14\u6570<span class="token punctuation">"</span></span>\n    <span class="token attr-name">action={&lt;Tooltip</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u652f\u4ed8\u7b14\u6570\u53cd\u5e94\u4ea4\u6613\u8d28\u91cf<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>exclamation-circle-o<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n    total<span class="token operator">=</span><span class="token string">"6,500"</span>\n    contentHeight<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">46</span><span class="token punctuation">}</span>\n  <span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MiniBar</span>\n      <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">46</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>visitData<span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ChartCard</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { ChartCard, MiniBar } from 'ant-design-pro/lib/Charts';\nimport { Tooltip, Icon } from 'antd';\n\nconst visitData = [\n  {\n    x: '2017-09-01',\n    y: 100,\n  },\n  {\n    x: '2017-09-02',\n    y: 120,\n  },\n  {\n    x: '2017-09-03',\n    y: 88,\n  },\n  {\n    x: '2017-09-04',\n    y: 65,\n  },\n];\n\nReactDOM.render(\n  <ChartCard\n    title=\"\u652f\u4ed8\u7b14\u6570\"\n    action={<Tooltip title=\"\u652f\u4ed8\u7b14\u6570\u53cd\u5e94\u4ea4\u6613\u8d28\u91cf\"><Icon type=\"exclamation-circle-o\" /></Tooltip>}\n    total=\"6,500\"\n    contentHeight={46}\n  >\n    <MiniBar\n      height={46}\n      data={visitData}\n    />\n  </ChartCard>\n, mountNode);"]],["p","\u5c31\u53ef\u4ee5\u5b9e\u73b0\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u56fe\u8868\u7ec4\u5408\uff1a"],["p",["img",{width:"260",src:"https://gw.alipayobjects.com/zos/rmsportal/yzmUFELvhCXXhsIRZOLT.png"}]],["h2","\u4f7f\u7528 G2 \u7ed8\u5236\u56fe\u8868"],["p","\u5982\u679c Ant Design Pro \u4e0d\u80fd\u6ee1\u8db3\u4f60\u7684\u4e1a\u52a1\u9700\u6c42\uff0c\u53ef\u4ee5\u76f4\u63a5\u8bd5\u7528 ",["a",{title:null,href:"https://antv.alipay.com/g2/doc/index.html"},"G2"]," \u5c01\u88c5\u81ea\u5df1\u7684\u56fe\u8868\u7ec4\u4ef6\u3002"],["h3","\u5f15\u5165 G2"],["p","\u901a\u8fc7 npm \u5b89\u88c5 g2 \u5305"],["pre",{lang:null,highlighted:'npm install g2 <span class="token operator">-</span><span class="token operator">-</span>save'},["code","npm install g2 --save"]],["p","\u5f15\u5165 g2 \u5230\u81ea\u5df1\u7684\u9879\u76ee"],["pre",{lang:null,highlighted:'import G2 from <span class="token string">\'g2\'</span><span class="token comment" spellcheck="true">;</span>\n\n<span class="token keyword">const</span> chart <span class="token operator">=</span> new G2<span class="token punctuation">.</span><span class="token function">Chart</span><span class="token punctuation">(</span>{\n  id<span class="token punctuation">:</span> <span class="token string">\'c1\'</span><span class="token punctuation">,</span>\n  width<span class="token punctuation">:</span> <span class="token number">600</span><span class="token punctuation">,</span>\n  height<span class="token punctuation">:</span> <span class="token number">300</span>\n}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","import G2 from 'g2';\n\nconst chart = new G2.Chart({\n  id: 'c1',\n  width: 600,\n  height: 300\n});"]],["h3","\u7ed3\u5408 G2 \u5230 React \u4ee3\u7801\u4e2d"],["p","\u901a\u5e38\u6765\u8bf4\uff0cG2 \u548c React \u7684\u7ed3\u5408\u90fd\u4f1a\u62bd\u8c61\u6210\u4e00\u4e2a Chart \u7ec4\u4ef6\uff0c\u653e\u5230 ",["code","components"]," \u4e0b\uff0c\u53ef\u53c2\u8003 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/tree/master/src/components/Charts"},"Ant Design Pro \u7684\u7ed3\u6784"],"\u3002"],["p","G2 \u672c\u8eab\u662f\u6e32\u67d3\u5728\u4e00\u4e2a\u9875\u9762\u7684 dom \u4e2d\uff0c\u6240\u4ee5\u5728 React \u4e2d\uff0c\u6211\u4eec\u5e38\u5e38\u901a\u8fc7 ",["a",{title:null,href:"https://facebook.github.io/react/docs/refs-and-the-dom.html"},"refs"]," \u83b7\u53d6 G2 \u9700\u8981\u6e32\u67d3\u7684\u5bb9\u5668\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> G2 <span class="token keyword">from</span> <span class="token string">\'g2\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> MyCharts <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    G2<span class="token punctuation">.</span><span class="token function">Chart</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      container<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>node<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>n <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>node <span class="token operator">=</span> n<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","import G2 from 'g2';\n\nconst MyCharts extends Component {\n  componentDidMount() {\n    G2.Chart({\n      container: this.node,\n    });\n  }\n  render() {\n    return <div ref={n => this.node = n} />\n  }\n}"]],["p","\u5e76\u4e14\u7531\u4e8e G2 \u4f9d\u8d56\u4e8e dom \u7ed3\u6784\uff0c\u6240\u4ee5\u6211\u4eec\u7b2c\u4e00\u6b21\u6e32\u67d3\u9700\u8981\u5728 ",["code","componentDidMount"]," \u4e2d\u65b0\u5efa G2 \u5bf9\u8c61\u3002"],["p","\u4e0b\u9762\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u5b9e\u9645\u7684\u4f8b\u5b50\uff0c\u6bd4\u5982\u5b98\u7f51\u4e0a\uff1a",["a",{title:null,href:"https://antv.alipay.com/g2/demo/01-point/scatter-a.html"},"G2 \u5b98\u7f51\u6837\u4f8b - \u7537\u5973\u8eab\u9ad8\u4f53\u91cd\u5206\u5e03"]," \u7684\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u5982\u4f55\u878d\u5165\u5230 React \u4e2d\u3002"],["p","G2 \u672c\u8eab\u7684\u4ee3\u7801\u90fd\u662f\u6e32\u67d3\u56fe\u8868\u7684\u4ee3\u7801\uff0c\u6240\u4ee5\u53ef\u4ee5\u6574\u4f53\u79fb\u52a8\u5230 ",["code","renderChart"]," \u51fd\u6570\u4e2d\uff0c\u5982\uff1a"],["pre",{lang:"jsx",highlighted:'<span class="token function">renderChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> frame <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">G2<span class="token punctuation">.</span>Frame</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token operator">...</span>\n  <span class="token keyword">var</span> chart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">G2<span class="token punctuation">.</span>Chart</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token string">\'c1\'</span><span class="token punctuation">,</span>\n    forceFit<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    height<span class="token punctuation">:</span> <span class="token number">450</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span>'},["code","renderChart() {\n  var frame = new G2.Frame(data);\n  ...\n  var chart = new G2.Chart({\n    id: 'c1',\n    forceFit: true,\n    height: 450\n  });\n  ...\n}"]],["p","\u63a5\u4e0b\u6765\u7531\u4e8e\u5728 React \u4e2d\u5f15\u7528 Dom \u5143\u7d20\u901a\u5e38\u662f\u901a\u8fc7 ref\uff0c\u6240\u4ee5\u9700\u8981\u6539\u9020 G2 \u7684\u6784\u9020\u51fd\u6570\u53c2\u6570\uff1a"],["pre",{lang:"jsx",highlighted:'<span class="token function">renderChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> frame <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">G2<span class="token punctuation">.</span>Frame</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token operator">...</span>\n  <span class="token keyword">var</span> chart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">G2<span class="token punctuation">.</span>Chart</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    container<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>node<span class="token punctuation">,</span>\n    forceFit<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    height<span class="token punctuation">:</span> <span class="token number">450</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>n <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>node <span class="token operator">=</span> n<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token punctuation">}</span>'},["code","renderChart() {\n  var frame = new G2.Frame(data);\n  ...\n  var chart = new G2.Chart({\n    container: this.node,\n    forceFit: true,\n    height: 450\n  });\n  ...\n}\nrender() {\n  return <div ref={n => this.node = n} />\n}"]],["p","\u5269\u4e0b\u7684\u5173\u952e\u6b65\u9aa4\u5c31\u662f\u5c06\u56fe\u8868\u914d\u7f6e\u6309\u7167\u9700\u6c42\u62bd\u79bb\u5230 ",["code","props"]," \u6216\u8005 ",["code","state"]," \uff0c\u8fd9\u6837\u5c31\u5927\u529f\u544a\u6210\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token function">renderChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> height <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> forceFit <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n  <span class="token keyword">var</span> frame <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">G2<span class="token punctuation">.</span>Frame</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token operator">...</span>\n  <span class="token keyword">var</span> chart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">G2<span class="token punctuation">.</span>Chart</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    container<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>node<span class="token punctuation">,</span>\n    forceFit<span class="token punctuation">,</span><span class="token punctuation">,</span>\n    height<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>n <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>node <span class="token operator">=</span> n<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token punctuation">}</span>'},["code","renderChart() {\n  const { data, height } = this.props;\n  const { forceFit } = this.state;\n  var frame = new G2.Frame(data);\n  ...\n  var chart = new G2.Chart({\n    container: this.node,\n    forceFit,,\n    height,\n  });\n  ...\n}\nrender() {\n  return <div ref={n => this.node = n} />\n}"]],["h3","\u56fe\u8868\u6e32\u67d3\u66f4\u65b0"],["p","\u5f53\u6570\u636e\u53d1\u751f\u53d8\u5316\uff0c\u56fe\u8868\u5c55\u793a\u7684\u66f4\u65b0\u53d8\u5316\uff0c\u9700\u8981\u6211\u4eec\u81ea\u5df1\u5728\u56fe\u8868\u7ec4\u4ef6\u4e2d\u5904\u7406\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> G2 <span class="token keyword">from</span> <span class="token string">\'g2\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> MyCharts <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">componentWillReceiveProps</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>data <span class="token operator">!==</span> nextProps<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderChart</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">renderChart</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>chart <span class="token operator">=</span> G2<span class="token punctuation">.</span><span class="token function">Chart</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        container<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>node<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">.</span><span class="token function">changeData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">.</span><span class="token function">repaint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment" spellcheck="true">// \u6216\u8005\u4e3a\u4e86\u5904\u7406\u590d\u6742\u7684 props \u53d8\u5316\uff0c\u53ef\u4ee5\u76f4\u63a5</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment" spellcheck="true">// \u6bcf\u6b21\u91cd\u65b0\u6e32\u67d3\u5373\u53ef</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>chart <span class="token operator">=</span> G2<span class="token punctuation">.</span><span class="token function">Chart</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      container<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>node<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>n <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>node <span class="token operator">=</span> n<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","import G2 from 'g2';\n\nconst MyCharts extends Component {\n  componentDidMount() {\n    this.renderChart();\n  }\n  componentWillReceiveProps(nextProps) {\n    if(this.props.data !== nextProps.data) {\n      this.renderChart(nextProps);\n    }\n  }\n  renderChart(props) {\n    const { data } = (props || this.props);\n    if (!this.chart) {\n      this.chart = G2.Chart({\n        container: this.node,\n      });\n      this.chart.source(data);\n      this.chart.render();\n    } else {\n      this.chart.changeData(data);\n      this.chart.repaint();\n    }\n    // \u6216\u8005\u4e3a\u4e86\u5904\u7406\u590d\u6742\u7684 props \u53d8\u5316\uff0c\u53ef\u4ee5\u76f4\u63a5\n    if (this.chart) {\n      this.chart.destroy();\n    }\n    // \u6bcf\u6b21\u91cd\u65b0\u6e32\u67d3\u5373\u53ef\n    this.chart = G2.Chart({\n      container: this.node,\n    });\n    this.chart.source(data);\n    this.chart.render();\n  }\n  render() {\n    return <div ref={n => this.node = n} />\n  }\n}"]],["p","\u5176\u4e2d\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u518d\u6b21\u6e32\u67d3\u56fe\u8868\u7684\u65f6\u5019\u9700\u8981\u6e05\u7406\u4e4b\u524d\u7684\u5185\u5bb9\u3002"],["h3","\u56fe\u8868\u91cd\u7ed8\u65f6\u673a"],["p","G2 \u6bcf\u4e00\u4e2a\u5c5e\u6027\u53d8\u5316\uff0c\u90fd\u9700\u8981\u91cd\u65b0\u7ed8\u5236\u56fe\u8868\uff0c\u4f46\u662f\u5982\u679c\u6570\u636e\u6216\u8005\u914d\u7f6e\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff0c\u90a3\u4e48\u51cf\u5c11\u56fe\u8868\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\u80fd\u591f\u63d0\u5347\u7f51\u9875\u7684\u6027\u80fd\u3002"],["p","\u5728 ",["code","componentWillReceiveProps"]," \u4e2d\u76f4\u63a5\u5bf9\u6bd4 ",["code","this.props"]," \u548c ",["code","nextProps"]," \u662f\u4e0d\u4e25\u8c28\u7684\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u5bf9\u8c61\u7684\u5bf9\u6bd4\u51fd\u6570\uff1a"],["pre",{lang:"js",highlighted:'<span class="token keyword">function</span> <span class="token function">equal</span><span class="token punctuation">(</span>old<span class="token punctuation">,</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> prop <span class="token keyword">in</span> old<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> old<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">\'function\'</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> target<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">\'function\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>old<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> target<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        r <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>old<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">!=</span> target<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      r <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> r<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> equal<span class="token punctuation">;</span>'
},["code","function equal(old, target) {\n  let r = true;\n  for (const prop in old) {\n    if (typeof old[prop] === 'function' && typeof target[prop] === 'function') {\n      if (old[prop].toString() != target[prop].toString()) {\n        r = false;\n      }\n    } else if (old[prop] != target[prop]) {\n      r = false;\n    }\n  }\n  return r;\n}\n\nexport default equal;"]],["p","\u907f\u514d ",["code","function"]," \u53c2\u6570\u7684\u5e72\u6270\uff0c\u6d45\u5bf9\u6bd4\u5176\u4ed6\u914d\u7f6e\u7684\u5f02\u540c\uff0c\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u91cd\u7ed8\uff0c\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token function">componentWillReceiveProps</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">,</span> nextProps<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderChart</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","componentWillReceiveProps(nextProps) {\n  if (!equal(this.props, nextProps)) {\n    this.renderChart(nextProps);\n  }\n}"]]],meta:{order:10,title:{"en-US":"Charts","zh-CN":"\u56fe\u8868"},type:"\u8fdb\u9636",filename:"docs/graph.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f7f\u7528-Ant-Design-Pro-\u7684\u56fe\u8868",title:"\u4f7f\u7528 Ant Design Pro \u7684\u56fe\u8868"},"\u4f7f\u7528 Ant Design Pro \u7684\u56fe\u8868"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4f7f\u7528-G2-\u7ed8\u5236\u56fe\u8868",title:"\u4f7f\u7528 G2 \u7ed8\u5236\u56fe\u8868"},"\u4f7f\u7528 G2 \u7ed8\u5236\u56fe\u8868"]]]}}});