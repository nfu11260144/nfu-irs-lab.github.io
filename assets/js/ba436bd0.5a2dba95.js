"use strict";(self.webpackChunkirs_lab=self.webpackChunkirs_lab||[]).push([[1818],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6826:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={sidebar_position:2,title:"\u7a0b\u5f0f\u78bc\u98a8\u683c Coding Style"},s=void 0,c={unversionedId:"software-engineering/coding-style",id:"software-engineering/coding-style",title:"\u7a0b\u5f0f\u78bc\u98a8\u683c Coding Style",description:"Coding Style \u4ee3\u8868\u7684\u662f\u5beb\u7a0b\u5f0f\u78bc\u7684\u683c\u5f0f\u98a8\u683c\uff0c\u5305\u542b\u4e86\u7e2e\u6392\u548c\u547d\u540d\u898f\u5247\u7b49\u3002",source:"@site/docs/software-engineering/coding-style.md",sourceDirName:"software-engineering",slug:"/software-engineering/coding-style",permalink:"/docs/software-engineering/coding-style",editUrl:"https://github.com/nfu-irs-lab/nfu-irs-lab.github.io/tree/main/docs/software-engineering/coding-style.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u7a0b\u5f0f\u78bc\u98a8\u683c Coding Style"},sidebar:"tutorialSidebar",previous:{title:"\u7c21\u4ecb",permalink:"/docs/software-engineering/intro"},next:{title:"\u7d71\u4e00\u5851\u6a21\u8a9e\u8a00 UML",permalink:"/docs/software-engineering/uml"}},d={},u=[{value:"\u9075\u5b88\u683c\u5f0f",id:"\u9075\u5b88\u683c\u5f0f",level:2},{value:"\u4fdd\u6301\u683c\u5f0f\u4e00\u81f4",id:"\u4fdd\u6301\u683c\u5f0f\u4e00\u81f4",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}],p={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Coding Style \u4ee3\u8868\u7684\u662f\u5beb\u7a0b\u5f0f\u78bc\u7684\u683c\u5f0f\u98a8\u683c\uff0c\u5305\u542b\u4e86\u7e2e\u6392\u548c\u547d\u540d\u898f\u5247\u7b49\u3002"),(0,o.kt)("h2",{id:"\u9075\u5b88\u683c\u5f0f"},"\u9075\u5b88\u683c\u5f0f"),(0,o.kt)("p",null,"\u4e16\u754c\u4e0a\u6709\u5f88\u591a\u4e0d\u540c\u7684 Coding Style\uff0c\u5b83\u5011\u4e4b\u9593\u6c92\u6709\u7d55\u5c0d\u7684\u597d\u58de\uff0c\u53ea\u6709\u4e00\u9805\u552f\u4e00\u7684\u6e96\u5247\uff1a\u300c\u540c\u4e00\u500b\u7a0b\u5f0f\u3001\u5c08\u6848\u8207\u5718\u968a\u61c9\u8a72\u9075\u5b88\u540c\u4e00\u5957 Coding Style\uff0c\u8b93\u5404\u7a0b\u5f0f\u78bc\u7684\u98a8\u683c\u7d71\u4e00\u300d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'// \u5176\u4e2d\u4e00\u7a2e\u5e38\u898b\u7684 Coding Style: K&R\nif (x == y) {\n    printf("Hello World");\n} else {\n    printf("Goodbye World");\n}\n\n// \u4ee4\u4e00\u7a2e\u5e38\u898b\u7684 Coding Style: Allman\nif (x == y)\n{\n    printf("Hello World");\n}\nelse\n{\n    printf("Goodbye World");\n}\n')),(0,o.kt)("p",null,"\u4ee5 C# \u4f86\u8aaa\uff0c\u61c9\u8a72\u5118\u91cf\u9075\u5b88 Microsoft \u5b98\u65b9\u6240\u5efa\u8b70\u7684 Coding Style\u3002\u7c21\u55ae\u6b78\u7d0d\u7684\u8a71\uff0c\u7e2e\u6392\u683c\u5f0f\u4f7f\u7528\u300cAllman\u300d\uff0c\u800c\u8b8a\u6578\u548c\u65b9\u6cd5\u7b49\u7684\u547d\u540d\u898f\u5247\u7232\u9664\u4e86\u53c3\u6578\uff08Parameter\uff09\u3001\u5340\u57df\u8b8a\u6578\uff08Local variable\uff09\u53ca\u79c1\u6709\u6b04\u4f4d\uff08Private field\uff09\u4f7f\u7528\u5c0f\u99dd\u5cf0\uff08Lower camel case\uff09\u5916\uff0c\u5176\u5b83\u7d71\u7d71\u4f7f\u7528\u5927\u99dd\u5cf0\uff08Upper camel case\uff0c\u53c8\u7a31\u5e15\u65af\u5361 Pascal case\uff09\uff0c\u4e14\u79c1\u6709\u6b04\u4f4d\uff08Private field\uff09\u52a0\u4e0a\u5b57\u9996\u5e95\u7dda ",(0,o.kt)("inlineCode",{parentName:"p"},"_"),"\u3002\u5728\u547d\u540d\u6642\u5118\u91cf\u907f\u514d\u4f7f\u7528\u7e2e\u5beb\u3002\u800c\u8a3b\u89e3\u6587\u5b57\u8207\u8a3b\u89e3\u7b26\u865f\u9593\u52a0\u5165\u4e00\u500b\u7a7a\u767d\uff0c\u4e26\u4e14\u4ee5\u53e5\u865f\u7d50\u5c3e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'// C# Coding Style \u7c21\u6613\u7bc4\u4f8b\u3002\npublic class ArmController\n{\n    private int _deviceId;\n    public string IpAddress = "127.0.0.1";\n    \n    public string GoHome(double motorSpeed)\n    {\n        int errorCode;\n        \n        // Some code here.\n        \n        if (errorCode > 0)\n        {\n            return "Error";\n        }\n        else if (errorCode == 0)\n        {\n            return "Done";\n        }\n        else\n        {\n            return "Unknown";\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"\u4fdd\u6301\u683c\u5f0f\u4e00\u81f4"},"\u4fdd\u6301\u683c\u5f0f\u4e00\u81f4"),(0,o.kt)("p",null,"\u73fe\u5728\u6709\u8a31\u591a IDE \u90fd\u6709\u81ea\u52d5\u683c\u5f0f\u5316\uff08Auto format\uff09\u7684\u529f\u80fd\uff0c\u4f8b\u5982 Visual Studio \u53ef\u4ee5\u4f7f\u7528\u5feb\u6377\u9375 ",(0,o.kt)("kbd",null,"Ctrl"),"+",(0,o.kt)("kbd",null,"K"),", ",(0,o.kt)("kbd",null,"Ctrl"),"+",(0,o.kt)("kbd",null,"D")," \u4f86\u81ea\u52d5\u683c\u5f0f\u5316\u6574\u500b\u6a94\u6848\u3002\u53e6\u5916\u4e5f\u6709\u50cf ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=SteveCadwallader.CodeMaid"},"CodeMaid")," \u9019\u7a2e\u64f4\u5145\u63d2\u4ef6\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u800c Visual Studio \u4e5f\u53ef\u4ee5\u4f7f\u7528\u5feb\u6377\u9375 ",(0,o.kt)("kbd",null,"F2")," \u4f86\u5feb\u901f\u91cd\u65b0\u547d\u540d\u8b8a\u6578\u548c\u65b9\u6cd5\u3002"),(0,o.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/zh-tw/dotnet/csharp/programming-guide/inside-a-program/coding-conventions"},"C# \u7de8\u78bc\u6163\u4f8b (C# \u7a0b\u5f0f\u8a2d\u8a08\u624b\u518a)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/zh-tw/dotnet/standard/design-guidelines/naming-guidelines"},"\u547d\u540d\u65b9\u91dd")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/zh-tw/dotnet/standard/design-guidelines/capitalization-conventions"},"\u5927\u5c0f\u5beb\u6163\u4f8b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/zh-tw/dotnet/standard/design-guidelines/general-naming-conventions"},"\u4e00\u822c\u547d\u540d\u6163\u4f8b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ktaranov/naming-convention/blob/master/C%23%20Coding%20Standards%20and%20Naming%20Conventions.md"},"C# Coding Standards and Naming Conventions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.c-sharpcorner.com/UploadFile/8a67c0/C-Sharp-coding-standards-and-naming-conventions/"},"C# Naming Conventions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/%E9%A7%9D%E5%B3%B0%E5%BC%8F%E5%A4%A7%E5%B0%8F%E5%AF%AB"},"WiKi \u99dd\u5cf0\u5f0f\u5927\u5c0f\u5beb"))))}m.isMDXComponent=!0}}]);