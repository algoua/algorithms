(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{74:function(a,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return s})),t.d(e,"metadata",(function(){return p})),t.d(e,"toc",(function(){return b})),t.d(e,"default",(function(){return l}));var m=t(3),n=t(7),r=(t(0),t(86)),s={id:"dfs",title:"\u041f\u043e\u0448\u0443\u043a \u0432 \u0433\u043b\u0438\u0431\u0438\u043d\u0443",sidebar_label:"\u041f\u043e\u0448\u0443\u043a \u0432 \u0433\u043b\u0438\u0431\u0438\u043d\u0443"},p={unversionedId:"algorithms/graphs/dfs",id:"algorithms/graphs/dfs",isDocsHomePage:!1,title:"\u041f\u043e\u0448\u0443\u043a \u0432 \u0433\u043b\u0438\u0431\u0438\u043d\u0443",description:"*[DFS]: Depth-First Search",source:"@site/docs/algorithms/graphs/dfs.md",slug:"/algorithms/graphs/dfs",permalink:"/algorithms/graphs/dfs",editUrl:"https://github.com/algoua/algoua/edit/main/docs/algorithms/graphs/dfs.md",version:"current",lastUpdatedAt:1612552688,sidebar_label:"\u041f\u043e\u0448\u0443\u043a \u0432 \u0433\u043b\u0438\u0431\u0438\u043d\u0443",sidebar:"algorithmsSidebar",previous:{title:"\u0424\u0443\u043d\u043a\u0446\u0456\u044f \u0415\u0439\u043b\u0435\u0440\u0430",permalink:"/algorithms/algebra/euler_function"},next:{title:"\u041f\u043e\u0448\u0443\u043a \u0432 \u0448\u0438\u0440\u0438\u043d\u0443",permalink:"/algorithms/graphs/bfs"}},b=[{value:"\u041e\u043f\u0438\u0441 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0443",id:"\u043e\u043f\u0438\u0441-\u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0443",children:[]},{value:"\u0420\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u044f",id:"\u0440\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u044f",children:[]},{value:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f",id:"\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f",children:[]},{value:"\u0417\u0430\u0434\u0430\u0447\u0456",id:"\u0437\u0430\u0434\u0430\u0447\u0456",children:[]}],c={toc:b};function l(a){var e=a.components,t=Object(n.a)(a,["components"]);return Object(r.b)("wrapper",Object(m.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u041f\u043e\u0448\u0443\u043a \u0432 \u0433\u043b\u0438\u0431\u0438\u043d\u0443 (\u043e\u0431\u0445\u0456\u0434 \u0432 \u0433\u043b\u0438\u0431\u0438\u043d\u0443,"," ",Object(r.b)("abbr",{parentName:"p",title:"Depth-First Search"},"DFS"),"",") - \u0446\u0435 \u043e\u0434\u0438\u043d \u0437 \u043e\u0441\u043d\u043e\u0432\u043d\u0438\u0445 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0456\u0432 \u043d\u0430 \u0433\u0440\u0430\u0444\u0430\u0445."),Object(r.b)("p",null,"\u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456 \u043f\u043e\u0448\u0443\u043a\u0443 \u0432 \u0433\u043b\u0438\u0431\u0438\u043d\u0443 \u0437\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u043b\u0435\u043a\u0441\u0438\u043a\u043e\u0433\u0440\u0430\u0444\u0456\u0447\u043d\u043e \u043f\u0435\u0440\u0448\u0438\u0439 \u0448\u043b\u044f\u0445 \u0432 \u0433\u0440\u0430\u0444\u0456."),Object(r.b)("p",null,"\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u043f\u0440\u0430\u0446\u044e\u0454 \u0437\u0430 ",Object(r.b)("span",{parentName:"p",className:"math math-inline"},Object(r.b)("span",{parentName:"span",className:"katex"},Object(r.b)("span",{parentName:"span",className:"katex-mathml"},Object(r.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("mi",{parentName:"mrow"},"O"),Object(r.b)("mo",{parentName:"mrow",stretchy:"false"},"("),Object(r.b)("mi",{parentName:"mrow"},"n"),Object(r.b)("mo",{parentName:"mrow"},"+"),Object(r.b)("mi",{parentName:"mrow"},"m"),Object(r.b)("mo",{parentName:"mrow",stretchy:"false"},")")),Object(r.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n+m)")))),Object(r.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(r.b)("span",{parentName:"span",className:"base"},Object(r.b)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),Object(r.b)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),Object(r.b)("span",{parentName:"span",className:"mopen"},"("),Object(r.b)("span",{parentName:"span",className:"mord mathnormal"},"n"),Object(r.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),Object(r.b)("span",{parentName:"span",className:"mbin"},"+"),Object(r.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(r.b)("span",{parentName:"span",className:"base"},Object(r.b)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),Object(r.b)("span",{parentName:"span",className:"mord mathnormal"},"m"),Object(r.b)("span",{parentName:"span",className:"mclose"},")"))))),", \u0434\u0435 ",Object(r.b)("span",{parentName:"p",className:"math math-inline"},Object(r.b)("span",{parentName:"span",className:"katex"},Object(r.b)("span",{parentName:"span",className:"katex-mathml"},Object(r.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("mi",{parentName:"mrow"},"n")),Object(r.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),Object(r.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(r.b)("span",{parentName:"span",className:"base"},Object(r.b)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),Object(r.b)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," - \u0447\u0438\u0441\u043b\u043e \u0432\u0435\u0440\u0448\u0438\u043d, ",Object(r.b)("span",{parentName:"p",className:"math math-inline"},Object(r.b)("span",{parentName:"span",className:"katex"},Object(r.b)("span",{parentName:"span",className:"katex-mathml"},Object(r.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("mi",{parentName:"mrow"},"m")),Object(r.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m")))),Object(r.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(r.b)("span",{parentName:"span",className:"base"},Object(r.b)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),Object(r.b)("span",{parentName:"span",className:"mord mathnormal"},"m")))))," - \u0447\u0438\u0441\u043b\u043e \u0440\u0435\u0431\u0435\u0440."),Object(r.b)("h2",{id:"\u043e\u043f\u0438\u0441-\u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0443"},"\u041e\u043f\u0438\u0441 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0443"),Object(r.b)("p",null,"TODO: add detailed description for"," ",Object(r.b)("abbr",{parentName:"p",title:"Depth-First Search"},"DFS"),"","."),Object(r.b)("h2",{id:"\u0440\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u044f"},"\u0420\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u044f"),Object(r.b)("p",null,"\u041d\u0430\u0439\u043f\u0440\u043e\u0441\u0442\u0456\u0448\u0430 \u0440\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u044f:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"vector<vector<int>> g; // \u0433\u0440\u0430\u0444\nint n; // \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432\u0435\u0440\u0448\u0438\u043d\n\nvector<char> used;\n\nvoid dfs(int v) {\n    used[v] = true;\n    for (size_t i = 0; i < g[v].size(); i++) {\n        int to = g[v][i];\n        if (!used[to]) {\n            dfs(to);\n        }\n    }\n}\n")),Object(r.b)("p",null,'\u0406\u043d\u043a\u043e\u043b\u0438 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e \u0437\u043d\u0430\u0442\u0438 \u043a\u043e\u043b\u044c\u043e\u0440\u0438 \u0432\u0435\u0440\u0448\u0438\u043d (0 - \u043d\u0435 \u0432\u0456\u0434\u0432\u0456\u0434\u0430\u043d\u0430 \u0432\u0435\u0440\u0448\u0438\u043d\u0430; 1 - \u0432\u0456\u0434\u0432\u0456\u0434\u0430\u043d\u0430 \u0432\u0435\u0440\u0448\u0438\u043d\u0430, \u0430\u043b\u0435 \u0434\u043e\u0441\u0456 \u0443 \u0441\u0442\u0435\u0446\u0456; 2 - \u0432\u0456\u0434\u0432\u0456\u0434\u0430\u043d\u0430 \u0456 \u0431\u0456\u043b\u044c\u0448\u0435 \u043d\u0435\u043c\u0430\u0454 \u0443 \u0441\u0442\u0435\u0446\u0456) \u0442\u0430 "\u0447\u0430\u0441" \u0437\u0430\u0445\u043e\u0434\u0443 \u0442\u0430 \u0432\u0438\u0445\u043e\u0434\u0443 \u0437 \u0432\u0435\u0440\u0448\u0438\u043d. \u0426\u0456 \u0434\u043e\u043f\u043e\u043c\u0456\u0436\u043d\u0456 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0442\u044c\u0441\u044f \u0443 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u043e\u0445 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0445 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0430\u0445 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0443.'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},'vector < vector<int> > g; // \u0433\u0440\u0430\u0444\nint n; // \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432\u0435\u0440\u0448\u0438\u043d\n\nvector<int> color; // \u043a\u043e\u043b\u044c\u043e\u0440\u0438 \u0432\u0435\u0440\u0448\u0438\u043d (0, 1, \u0430\u0431\u043e 2)\n\nvector<int> time_in, time_out; // "\u0447\u0430\u0441\u0438" \u0437\u0430\u0445\u043e\u0434\u0443 \u0442\u0430 \u0432\u0438\u0445\u043e\u0434\u0443 \u0437 \u0432\u0435\u0440\u0448\u0438\u043d\nint dfs_timer = 0; // "\u0442\u0430\u0439\u043c\u0435\u0440" \u0434\u043b\u044f \u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f "\u0447\u0430\u0441\u0456\u0432"\n\nvoid dfs(int v) {\n    time_in[v] = dfs_timer++;\n    color[v] = 1;\n    for (size_t i = 0; i < g[v].size(); i++) {\n        int to = g[v][i];\n        if (color[to] == 0) {\n            dfs(to);\n        }\n    }\n    color[v] = 2;\n    time_out[v] = dfs_timer++;\n}\n')),Object(r.b)("h2",{id:"\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f"},"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u041f\u043e\u0448\u0443\u043a \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u0433\u043e \u0448\u043b\u044f\u0445\u0443 \u0443 \u0433\u0440\u0430\u0444\u0456.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u041f\u043e\u0448\u0443\u043a \u043b\u0435\u043a\u0441\u0438\u043a\u043e\u0433\u0440\u0430\u0444\u0456\u0447\u043d\u043e \u043f\u0435\u0440\u0448\u043e\u0433\u043e \u0448\u043b\u044f\u0445\u0443 \u0432 \u0433\u0440\u0430\u0444\u0456.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0430 \u0447\u0438 \u043e\u0434\u043d\u0430 \u0432\u0435\u0440\u0448\u0438\u043d\u0430 \u0434\u0435\u0440\u0435\u0432\u0430 \u0454 \u043f\u0440\u0435\u0434\u043a\u043e\u043c \u0456\u043d\u0448\u043e\u0457."),Object(r.b)("p",{parentName:"li"},'  \u041d\u0430 \u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u0456 \u0443 \u043a\u0456\u043d\u0446\u0456 \u0456\u0442\u0435\u0440\u0430\u0446\u0456\u0457 \u043f\u043e\u0448\u0443\u043a\u0443 \u0432 \u0433\u043b\u0438\u0431\u0438\u043d\u0443 \u0431\u0443\u0434\u0435\u043c\u043e \u0437\u0430\u043f\u0430\u043c\'\u044f\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 "\u0447\u0430\u0441" \u0437\u0430\u0445\u043e\u0434\u0443 \u0456 \u0432\u0438\u0445\u043e\u0434\u0443 \u0437 \u043a\u043e\u0436\u043d\u043e\u0457 \u0432\u0435\u0440\u0448\u0438\u043d\u0456. \u0422\u0435\u043f\u0435\u0440 \u0437\u0430 ',Object(r.b)("span",{parentName:"p",className:"math math-inline"},Object(r.b)("span",{parentName:"span",className:"katex"},Object(r.b)("span",{parentName:"span",className:"katex-mathml"},Object(r.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("mi",{parentName:"mrow"},"O"),Object(r.b)("mo",{parentName:"mrow",stretchy:"false"},"("),Object(r.b)("mn",{parentName:"mrow"},"1"),Object(r.b)("mo",{parentName:"mrow",stretchy:"false"},")")),Object(r.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),Object(r.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(r.b)("span",{parentName:"span",className:"base"},Object(r.b)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),Object(r.b)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),Object(r.b)("span",{parentName:"span",className:"mopen"},"("),Object(r.b)("span",{parentName:"span",className:"mord"},"1"),Object(r.b)("span",{parentName:"span",className:"mclose"},")")))))," \u043c\u043e\u0436\u043d\u0430 \u0437\u043d\u0430\u0439\u0442\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c: \u0432\u0435\u0440\u0448\u0438\u043d\u0430 ",Object(r.b)("span",{parentName:"p",className:"math math-inline"},Object(r.b)("span",{parentName:"span",className:"katex"},Object(r.b)("span",{parentName:"span",className:"katex-mathml"},Object(r.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("mi",{parentName:"mrow"},"a")),Object(r.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),Object(r.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(r.b)("span",{parentName:"span",className:"base"},Object(r.b)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),Object(r.b)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," \u0454 \u043f\u0440\u0435\u0434\u043a\u043e\u043c \u0432\u0435\u0440\u0448\u0438\u043d\u0438 ",Object(r.b)("span",{parentName:"p",className:"math math-inline"},Object(r.b)("span",{parentName:"span",className:"katex"},Object(r.b)("span",{parentName:"span",className:"katex-mathml"},Object(r.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("mi",{parentName:"mrow"},"b")),Object(r.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),Object(r.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(r.b)("span",{parentName:"span",className:"base"},Object(r.b)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),Object(r.b)("span",{parentName:"span",className:"mord mathnormal"},"b")))))," \u0442\u043e\u0434\u0456 \u0456 \u0442\u0456\u043b\u044c\u043a\u0438 \u0442\u043e\u0434\u0456, \u043a\u043e\u043b\u0438 ",Object(r.b)("span",{parentName:"p",className:"math math-inline"},Object(r.b)("span",{parentName:"span",className:"katex"},Object(r.b)("span",{parentName:"span",className:"katex-mathml"},Object(r.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"t"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"i"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"m"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"e"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"i"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"n"),Object(r.b)("mo",{parentName:"mrow",stretchy:"false"},"["),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"a"),Object(r.b)("mo",{parentName:"mrow",stretchy:"false"},"]"),Object(r.b)("mo",{parentName:"mrow"},"<"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"t"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"i"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"m"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"e"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"i"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"n"),Object(r.b)("mo",{parentName:"mrow",stretchy:"false"},"["),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"b"),Object(r.b)("mo",{parentName:"mrow",stretchy:"false"},"]")),Object(r.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\rm time\\_in[a] < time\\_in[b]")))),Object(r.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(r.b)("span",{parentName:"span",className:"base"},Object(r.b)("span",{parentName:"span",className:"strut",style:{height:"1.06em",verticalAlign:"-0.31em"}}),Object(r.b)("span",{parentName:"span",className:"mord"},Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"t"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"i"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"m"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"e"),Object(r.b)("span",{parentName:"span",className:"mord mathrm",style:{marginRight:"0.02778em"}},"_"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"i"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"n"),Object(r.b)("span",{parentName:"span",className:"mopen"},"["),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"a"),Object(r.b)("span",{parentName:"span",className:"mclose"},"]"),Object(r.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),Object(r.b)("span",{parentName:"span",className:"mrel"},"<"),Object(r.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"t"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"i"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"m"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"e"),Object(r.b)("span",{parentName:"span",className:"mord mathrm",style:{marginRight:"0.02778em"}},"_"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"i"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"n"),Object(r.b)("span",{parentName:"span",className:"mopen"},"["),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"b"),Object(r.b)("span",{parentName:"span",className:"mclose"},"]"))))))," \u0442\u0430 ",Object(r.b)("span",{parentName:"p",className:"math math-inline"},Object(r.b)("span",{parentName:"span",className:"katex"},Object(r.b)("span",{parentName:"span",className:"katex-mathml"},Object(r.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"t"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"i"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"m"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"e"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"o"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"u"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"t"),Object(r.b)("mo",{parentName:"mrow",stretchy:"false"},"["),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"a"),Object(r.b)("mo",{parentName:"mrow",stretchy:"false"},"]"),Object(r.b)("mo",{parentName:"mrow"},">"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"t"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"i"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"m"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"e"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"o"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"u"),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"t"),Object(r.b)("mo",{parentName:"mrow",stretchy:"false"},"["),Object(r.b)("mi",{parentName:"mrow",mathvariant:"normal"},"b"),Object(r.b)("mo",{parentName:"mrow",stretchy:"false"},"]")),Object(r.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\rm time\\_out[a] > time\\_out[b]")))),Object(r.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(r.b)("span",{parentName:"span",className:"base"},Object(r.b)("span",{parentName:"span",className:"strut",style:{height:"1.06em",verticalAlign:"-0.31em"}}),Object(r.b)("span",{parentName:"span",className:"mord"},Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"t"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"i"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"m"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"e"),Object(r.b)("span",{parentName:"span",className:"mord mathrm",style:{marginRight:"0.02778em"}},"_"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"o"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"u"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"t"),Object(r.b)("span",{parentName:"span",className:"mopen"},"["),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"a"),Object(r.b)("span",{parentName:"span",className:"mclose"},"]"),Object(r.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),Object(r.b)("span",{parentName:"span",className:"mrel"},">"),Object(r.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"t"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"i"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"m"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"e"),Object(r.b)("span",{parentName:"span",className:"mord mathrm",style:{marginRight:"0.02778em"}},"_"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"o"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"u"),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"t"),Object(r.b)("span",{parentName:"span",className:"mopen"},"["),Object(r.b)("span",{parentName:"span",className:"mord mathrm"},"b"),Object(r.b)("span",{parentName:"span",className:"mclose"},"]")))))),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"../graphs/lca"},"\u041d\u0430\u0439\u043c\u0435\u043d\u0448\u0438\u0439 \u0441\u043f\u0456\u043b\u044c\u043d\u0438\u0439 \u043f\u0440\u0435\u0434\u043e\u043a"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"../graphs/topological_sort"},"\u0422\u043e\u043f\u043e\u043b\u043e\u0433\u0456\u0447\u043d\u0435 \u0441\u043e\u0440\u0442\u0443\u0432\u0430\u043d\u043d\u044f"),"."),Object(r.b)("p",{parentName:"li"},"  \u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0454\u043c\u043e \u0441\u0435\u0440\u0456\u044e \u043f\u043e\u0448\u0443\u043a\u0456\u0432 \u0432 \u0433\u043b\u0438\u0431\u0438\u043d\u0443, \u0449\u043e\u0431 \u043e\u0431\u0456\u0439\u0442\u0438 \u0432\u0441\u0456 \u0432\u0435\u0440\u0448\u0438\u043d\u0438 \u0433\u0440\u0430\u0444\u0430. \u0412\u0456\u0434\u0441\u043e\u0440\u0442\u0443\u0454\u043c\u043e \u0432\u0435\u0440\u0448\u0438\u043d\u0438 \u043f\u043e \u0441\u043f\u0430\u0434\u0430\u043d\u043d\u044e \u0447\u0430\u0441\u0443 \u0432\u0438\u0445\u043e\u0434\u0443 - \u0446\u0435 \u0456 \u0431\u0443\u0434\u0435 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0434\u044e.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"../graphs/finding_cycle"},"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0430 \u0433\u0440\u0430\u0444\u0430 \u043d\u0430 \u0430\u0446\u0438\u043a\u043b\u0456\u0447\u043d\u0456\u0441\u0442\u044c \u0456 \u0437\u043d\u0430\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f \u0446\u0438\u043a\u043b\u0443"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"strong_connected_components"},"\u041f\u043e\u0448\u0443\u043a \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0441\u0438\u043b\u044c\u043d\u043e\u0457 \u0437\u0432'\u044f\u0437\u043d\u043e\u0441\u0442\u0456"),"."),Object(r.b)("p",{parentName:"li"},"  \u0421\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u043c\u043e \u0442\u043e\u043f\u043e\u043b\u043e\u0433\u0456\u0447\u043d\u0435 \u0441\u043e\u0440\u0442\u0443\u0432\u0430\u043d\u043d\u044f, \u0430 \u043f\u043e\u0442\u0456\u043c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u043d\u0443\u0454\u043c\u043e \u0433\u0440\u0430\u0444. \u041f\u0456\u0441\u043b\u044f \u0442\u043e\u0433\u043e \u0437\u043d\u043e\u0432\u0443 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u043c\u043e \u0441\u0435\u0440\u0456\u044e \u043f\u043e\u0448\u0443\u043a\u0456\u0432 \u0443 \u0433\u043b\u0438\u0431\u0438\u043d\u0443, \u0430\u043b\u0435 \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0443 \u0432\u0435\u0440\u0448\u0438\u043d, \u044f\u043a\u0438\u0439 \u0431\u0443\u043b\u043e \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043e \u0442\u043e\u043f\u043e\u043b\u043e\u0433\u0456\u0447\u043d\u0438\u043c \u0441\u043e\u0440\u0442\u0443\u0432\u0430\u043d\u043d\u044f\u043c. \u041a\u043e\u0436\u043d\u0435 \u0434\u0435\u0440\u0435\u0432\u043e \u043f\u043e\u0448\u0443\u043a\u0443 - \u0441\u0438\u043b\u044c\u043d\u043e\u0437\u0432'\u044f\u0437\u0430\u043d\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"../graphs/bridge_searching"},"\u041f\u043e\u0448\u0443\u043a \u043c\u043e\u0441\u0442\u0456\u0432"),"."),Object(r.b)("p",{parentName:"li"},"  \u0421\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u044e\u0454\u043c\u043e \u0433\u0440\u0430\u0444 \u0432 \u043e\u0440\u0456\u0454\u043d\u0442\u043e\u0432\u0430\u043d\u0438\u0439, \u0440\u043e\u0431\u043b\u044f\u0447\u0438 \u0441\u0435\u0440\u0456\u044e \u043f\u043e\u0448\u0443\u043a\u0456\u0432 \u0432 \u0433\u043b\u0438\u0431\u0438\u043d\u0443, \u0456 \u043e\u0440\u0456\u0454\u043d\u0442\u0443\u044e\u0447\u0438 \u043a\u043e\u0436\u043d\u0435 \u0440\u0435\u0431\u0440\u043e \u0442\u0430\u043a, \u044f\u043a \u043c\u0438 \u043d\u0430\u043c\u0430\u0433\u0430\u043b\u0438\u0441\u044f \u043f\u043e \u043d\u044c\u043e\u043c\u0443 \u043f\u0440\u043e\u0439\u0442\u0438. \u041f\u043e\u0442\u0456\u043c \u0437\u043d\u0430\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u0438\u043b\u044c\u043d\u043e\u0437\u0432'\u044f\u0437\u0430\u043d\u0456 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0438. \u041c\u043e\u0441\u0442\u0430\u043c\u0438 \u0454 \u0442\u0456 \u0440\u0435\u0431\u0440\u0430, \u043a\u0456\u043d\u0446\u0456 \u044f\u043a\u0438\u0445 \u043d\u0430\u043b\u0435\u0436\u0430\u0442\u044c \u0440\u0456\u0437\u043d\u0438\u043c \u0441\u0438\u043b\u044c\u043d\u043e\u0437\u0432'\u044f\u0437\u0430\u043d\u0438\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c."))),Object(r.b)("h2",{id:"\u0437\u0430\u0434\u0430\u0447\u0456"},"\u0417\u0430\u0434\u0430\u0447\u0456"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.e-olymp.com/uk/problems/122"},Object(r.b)("em",{parentName:"a"},"e-olymp")," - 122 - ",Object(r.b)("strong",{parentName:"a"},"\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u0438 \u0432 \u0433\u043e\u0440\u0430\u0445"))," | \u0420\u043e\u0437\u0432'\u044f\u0437\u043a\u0438: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/memo735/e-olymp/blob/master/0000-0999/0122%20-%20Mountain%20routes%20-%20%D0%93%D0%BE%D1%80%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B0%D1%80%D1%88%D1%80%D1%83%D1%82%D1%8B%20-%20Da%C4%9Fl%C4%B1q%20mar%C5%9Frutlar%20-%20%D0%9C%D0%B0%D1%80%D1%88%D1%80%D1%83%D1%82%D0%B8%20%D0%B2%20%D0%B3%D0%BE%D1%80%D0%B0%D1%85.cpp"},"C++")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.e-olymp.com/uk/problems/977"},Object(r.b)("em",{parentName:"a"},"e-olymp")," - 977 - ",Object(r.b)("strong",{parentName:"a"},"\u0414\u0435\u0440\u0435\u0432\u043e?"))," | \u0420\u043e\u0437\u0432'\u044f\u0437\u043a\u0438: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/memo735/e-olymp/blob/master/0000-0999/0977%20-%20Is%20it%20a%20Tree%3F%20-%20%D0%94%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%3F.cpp"},"C++")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.e-olymp.com/uk/problems/978"},Object(r.b)("em",{parentName:"a"},"e-olymp")," - 978 - ",Object(r.b)("strong",{parentName:"a"},"\u041e\u0442\u0440\u0438\u043c\u0430\u0439 \u0434\u0435\u0440\u0435\u0432\u043e"))," | \u0420\u043e\u0437\u0432'\u044f\u0437\u043a\u0438: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/memo735/e-olymp/blob/master/0000-0999/Problem0978_C%23"},"C#")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.e-olymp.com/uk/problems/1941"},Object(r.b)("em",{parentName:"a"},"e-olymp")," - 1941 - ",Object(r.b)("strong",{parentName:"a"},"\u041f\u0440\u0435\u0434\u043e\u043a"))," | \u0420\u043e\u0437\u0432'\u044f\u0437\u043a\u0438: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/memo735/e-olymp/blob/master/1000-1999/1941%20-%20Parent%20-%20%D0%9F%D1%80%D0%B5%D0%B4%D0%BE%D0%BA.cpp"},"C++")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.e-olymp.com/uk/problems/2270"},Object(r.b)("em",{parentName:"a"},"e-olymp")," - 2270 - ",Object(r.b)("strong",{parentName:"a"},"\u041f\u043e\u0448\u0443\u043a \u0446\u0438\u043a\u043b\u0443"))," | \u0420\u043e\u0437\u0432'\u044f\u0437\u043a\u0438: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/memo735/e-olymp/blob/master/2000-2999/2270%20-%20Find%20a%20cycle%20-%20%D0%9F%D0%BE%D0%B8%D1%81%D0%BA%20%D1%86%D0%B8%D0%BA%D0%BB%D0%B0%20-%20%D0%9F%D0%BE%D1%88%D1%83%D0%BA%20%D1%86%D0%B8%D0%BA%D0%BB%D1%83.cpp"},"C++")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.e-olymp.com/uk/problems/2382"},Object(r.b)("em",{parentName:"a"},"e-olymp")," - 2382 - ",Object(r.b)("strong",{parentName:"a"},"\u0413\u0440\u0430\u0444\u0456\u0447\u043d\u0430 \u043c\u0430\u0441\u043a\u0430"))," | \u0420\u043e\u0437\u0432'\u044f\u0437\u043a\u0438: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/memo735/e-olymp/blob/master/2000-2999/2382%20-%20Grafix%20Mask%20-%20%D0%93%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BC%D0%B0%D1%81%D0%BA%D0%B0%20-%20%D0%93%D1%80%D0%B0%D1%84%D1%96%D1%87%D0%BD%D0%B0%20%D0%BC%D0%B0%D1%81%D0%BA%D0%B0.cpp"},"C++")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.e-olymp.com/uk/problems/2383"},Object(r.b)("em",{parentName:"a"},"e-olymp")," - 2383 - ",Object(r.b)("strong",{parentName:"a"},"\u0415\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u043d\u0456 \u043f\u0440\u043e\u0432\u043e\u0434\u0430"))," | \u0420\u043e\u0437\u0432'\u044f\u0437\u043a\u0438: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/memo735/e-olymp/blob/master/2000-2999/2383%20-%20Electrical%20Wires%20-%20%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%B0%20-%20%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%BD%D1%96%20%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%B0.cpp"},"C++")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.e-olymp.com/uk/problems/3165"},Object(r.b)("em",{parentName:"a"},"e-olymp")," - 3165 - ",Object(r.b)("strong",{parentName:"a"},"\u0414\u0432\u043e\u043a\u043e\u043b\u044c\u043e\u0440\u043e\u0432\u0456\u0441\u0442\u044c"))," | \u0420\u043e\u0437\u0432'\u044f\u0437\u043a\u0438: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/memo735/e-olymp/blob/master/3000-3999/3165%20-%20Bicoloring%20-%20%D0%94%D0%B2%D1%83%D1%85%D1%86%D0%B2%D0%B5%D1%82%D0%BD%D0%BE%D1%81%D1%82%D1%8C%20-%20%D0%94%D0%B2%D0%BE%D0%BA%D0%BE%D0%BB%D1%8C%D0%BE%D1%80%D0%BE%D0%B2%D1%96%D1%81%D1%82%D1%8C.cpp"},"C++")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.e-olymp.com/uk/problems/4077"},Object(r.b)("em",{parentName:"a"},"e-olymp")," - 4077 - ",Object(r.b)("strong",{parentName:"a"},"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0432 \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0446\u0456\u0457"))," | \u0420\u043e\u0437\u0432'\u044f\u0437\u043a\u0438: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/memo735/e-olymp/blob/master/4000-4999/4077%20-%20Corporation%20Salary%20-%20%D0%97%D0%B0%D1%80%D0%BF%D0%BB%D0%B0%D1%82%D0%B0%20%D0%B2%20%D0%BA%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%D1%86%D0%B8%D0%B8%20-%20%C5%9Eirk%C9%99td%C9%99ki%20%C9%99m%C9%99k%20haqq%C4%B1%20-%20%D0%97%D0%B0%D1%80%D0%BF%D0%BB%D0%B0%D1%82%D0%B0%20%D0%B2%20%D0%BA%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%D1%86%D1%96%D1%97.cpp"},"C++"))))}l.isMDXComponent=!0},86:function(a,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return O}));var m=t(0),n=t.n(m);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);e&&(m=m.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,m)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function b(a,e){if(null==a)return{};var t,m,n=function(a,e){if(null==a)return{};var t,m,n={},r=Object.keys(a);for(m=0;m<r.length;m++)t=r[m],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(m=0;m<r.length;m++)t=r[m],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var c=n.a.createContext({}),l=function(a){var e=n.a.useContext(c),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},o=function(a){var e=l(a.components);return n.a.createElement(c.Provider,{value:e},a.children)},i={inlineCode:"code",wrapper:function(a){var e=a.children;return n.a.createElement(n.a.Fragment,{},e)}},N=n.a.forwardRef((function(a,e){var t=a.components,m=a.mdxType,r=a.originalType,s=a.parentName,c=b(a,["components","mdxType","originalType","parentName"]),o=l(t),N=m,O=o["".concat(s,".").concat(N)]||o[N]||i[N]||r;return t?n.a.createElement(O,p(p({ref:e},c),{},{components:t})):n.a.createElement(O,p({ref:e},c))}));function O(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var r=t.length,s=new Array(r);s[0]=N;var p={};for(var b in e)hasOwnProperty.call(e,b)&&(p[b]=e[b]);p.originalType=a,p.mdxType="string"==typeof a?a:m,s[1]=p;for(var c=2;c<r;c++)s[c]=t[c];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,t)}N.displayName="MDXCreateElement"}}]);