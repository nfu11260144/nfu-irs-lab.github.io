"use strict";(self.webpackChunkirs_lab=self.webpackChunkirs_lab||[]).push([[6714],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var i=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,i,n=function(t,e){if(null==t)return{};var r,i,n={},a=Object.keys(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=i.createContext({}),c=function(t){var e=i.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=c(t.components);return i.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),h=c(r),m=n,b=h["".concat(u,".").concat(m)]||h[m]||s[m]||a;return r?i.createElement(b,o(o({ref:e},p),{},{components:r})):i.createElement(b,o({ref:e},p))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,o=new Array(a);o[0]=h;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5360:function(t,e,r){r.d(e,{Z:function(){return d}});var i=r(7294),n=r(9960),a=r(5979),o=r(6010),l="cardContainer_woeA",u="cardTitle_pNjP",c="cardDescription_qC_k",p=r(3919),s=r(5999);function h(t){var e=t.href,r=t.children;return i.createElement(n.Z,{href:e,className:(0,o.Z)("card padding--lg",l)},r)}function m(t){var e=t.href,r=t.icon,n=t.title,a=t.description;return i.createElement(h,{href:e},i.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:n},r," ",n),a&&i.createElement("p",{className:(0,o.Z)("text--truncate",c),title:a},a))}function b(t){var e=t.item,r=(0,a.Wl)(e);return r?i.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f(t){var e,r=t.item,n=(0,p.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(null!=(e=r.docId)?e:void 0);return i.createElement(m,{href:r.href,icon:n,title:r.label,description:null==o?void 0:o.description})}function k(t){var e=t.item;switch(e.type){case"link":return i.createElement(f,{item:e});case"category":return i.createElement(b,{item:e});default:throw new Error("unknown item type "+JSON.stringify(e))}}function d(t){var e=t.items;return i.createElement("div",{className:"row"},function(t){return t.filter((function(t){return"category"!==t.type||!!(0,a.Wl)(t)}))}(e).map((function(t,e){return i.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},i.createElement(k,{key:e,item:t}))})))}},1170:function(t,e,r){r.r(e),r.d(e,{assets:function(){return h},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var i=r(7462),n=r(3366),a=(r(7294),r(3905)),o=r(5360),l=r(5979),u=["components"],c={title:"HIWIN",slug:"/hiwin"},p=void 0,s={unversionedId:"hiwin/index",id:"hiwin/index",title:"HIWIN",description:"\u76f8\u95dc\u9023\u7d50",source:"@site/docs/hiwin/index.md",sourceDirName:"hiwin",slug:"/hiwin",permalink:"/docs/hiwin",editUrl:"https://github.com/nfu-irs-lab/nfu-irs-lab.github.io/tree/main/docs/hiwin/index.md",tags:[],version:"current",frontMatter:{title:"HIWIN",slug:"/hiwin"},sidebar:"docsSidebar",previous:{title:"3D \u5217\u5370\u6a5f",permalink:"/docs/tools/3d-printer"},next:{title:"\u76f8\u95dc\u6559\u5b78",permalink:"/docs/hiwin/tutorial"}},h={},m=[{value:"\u76f8\u95dc\u9023\u7d50",id:"\u76f8\u95dc\u9023\u7d50",level:2},{value:"\u5404\u5c46\u7a0b\u5f0f",id:"\u5404\u5c46\u7a0b\u5f0f",level:2}],b={toc:m};function f(t){var e=t.components,r=(0,n.Z)(t,u);return(0,a.kt)("wrapper",(0,i.Z)({},b,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u76f8\u95dc\u9023\u7d50"},"\u76f8\u95dc\u9023\u7d50"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u672c\u5171\u7528\u7a0b\u5f0f\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/robotic-arm-control-panel"},"robotic-arm-control-panel")),(0,a.kt)("li",{parentName:"ul"},"\u624b\u6a5f\u63a7\u5236\u7a0b\u5f0f\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-controller-app"},"hiwinrobot-controller-app")),(0,a.kt)("li",{parentName:"ul"},"RASDK (NuGet Package)\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/robotic-arm-sdk"},"robotic-arm-sdk")),(0,a.kt)("li",{parentName:"ul"},"HRTK \uff08\u505c\u6b62\u66f4\u65b0\uff0c\u5df2\u8f49\u79fb\u81f3 RASDK\uff09\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-toolkit"},"hiwinrobot-toolkit")),(0,a.kt)("li",{parentName:"ul"},"\u820a\u7bc4\u4f8b\u7a0b\u5f0f\uff08\u4e0d\u63a8\u85a6\uff09\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-old-example/tree/master"},"hiwinrobot-old-example")),(0,a.kt)("li",{parentName:"ul"},"XEG \u593e\u722a\u7bc4\u4f8b\u7a0b\u5f0f\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-xeg-gripper-example"},"hiwinrobot-xeg-gripper-example"))),(0,a.kt)("h2",{id:"\u5404\u5c46\u7a0b\u5f0f"},"\u5404\u5c46\u7a0b\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./hiwin/14th"},"14\u5c46 2022")," (\u539f2021)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u667a\u6167\u649e\u7403\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-14-billiards"},"hiwinrobot-14-billiards")),(0,a.kt)("li",{parentName:"ul"},"\u667a\u6167\u62fc\u5716\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-14-puzzle"},"hiwinrobot-14-puzzle")),(0,a.kt)("li",{parentName:"ul"},"\u667a\u6167\u5275\u4f5c\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-14-creation"},"hiwinrobot-14-creation")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./hiwin/13th"},"13\u5c46 2020"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u667a\u6167\u649e\u7403\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-13-billiards"},"hiwinrobot-13-billiards")),(0,a.kt)("li",{parentName:"ul"},"\u667a\u6167\u62fc\u5716\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-13-puzzle"},"hiwinrobot-13-puzzle")),(0,a.kt)("li",{parentName:"ul"},"\u667a\u6167\u5206\u985e\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-13-classification"},"hiwinrobot-13-classification")))),(0,a.kt)("li",{parentName:"ul"},"12\u5c46 2019",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u667a\u6167\u649e\u7403\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-12-billiards"},"hiwinrobot-12-billiards")),(0,a.kt)("li",{parentName:"ul"},"\u667a\u6167\u6416\u98f2\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-12-shake-drink"},"hiwinrobot-12-shake-drink")),(0,a.kt)("li",{parentName:"ul"},"\u667a\u6167\u5206\u985e\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-12-classification"},"hiwinrobot-12-classification")))),(0,a.kt)("li",{parentName:"ul"},"11\u5c46 2018",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u667a\u6167\u5806\u758a\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-11-stacked"},"hiwinrobot-11-stacked")),(0,a.kt)("li",{parentName:"ul"},"\u667a\u6167\u5206\u985e\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-11-classification"},"hiwinrobot-11-classification")),(0,a.kt)("li",{parentName:"ul"},"\u6a5f\u68b0\u63ee\u6beb\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-11-brush"},"hiwinrobot-11-brush")),(0,a.kt)("li",{parentName:"ul"},"\u667a\u6167\u6f86\u6ce8\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-11-pouring"},"hiwinrobot-11-pouring")))),(0,a.kt)("li",{parentName:"ul"},"10\u5c46 2017",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u667a\u6167\u5806\u758a\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-10-stacked"},"hiwinrobot-10-stacked")),(0,a.kt)("li",{parentName:"ul"},"\u6a5f\u68b0\u63ee\u6beb\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-10-brush"},"hiwinrobot-10-brush")),(0,a.kt)("li",{parentName:"ul"},"\u773c\u660e\u624b\u5feb\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-10-sharp-eyes"},"hiwinrobot-10-sharp-eyes")),(0,a.kt)("li",{parentName:"ul"},"\u667a\u6167\u88dd\u914d\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfu-irs-lab/hiwinrobot-10-assembly"},"hiwinrobot-10-assembly"))))),(0,a.kt)("hr",null),(0,a.kt)(o.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);