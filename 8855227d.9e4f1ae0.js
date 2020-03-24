(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(6),r=(n(0),n(171)),c={id:"capabilities",title:"Capabilities"},l={id:"capabilities",title:"Capabilities",description:"*Since 3.8*",source:"@site/docs/capabilities.md",permalink:"/watchman/docs/capabilities",editUrl:"https://github.com/facebook/watchman/edit/master/website/docs/capabilities.md",sidebar:"sidebar",previous:{title:"Compatibility Rules",permalink:"/watchman/docs/compatibility"},next:{title:"find",permalink:"/watchman/docs/find"}},b=[{value:"Commands",id:"commands",children:[]},{value:"Expression Terms",id:"expression-terms",children:[]},{value:"File Result Fields",id:"file-result-fields",children:[]},{value:"Feature Enhancements",id:"feature-enhancements",children:[]}],o={rightToc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 3.8")),Object(r.b)("p",null,"Capability names are used to identify modules that are either conditionally\nconfigured or that are introduced over time."),Object(r.b)("p",null,"You can use the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"version"}),"expanded version command"),"\nto query capabilities and avoid building knowledge of version numbers in\nyour client application(s)."),Object(r.b)("p",null,"You can use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"list-capabilities"}),"list-capabilities"),"\ncommand to obtain a list of capabilities supported by your watchman server."),Object(r.b)("h3",{id:"commands"},"Commands"),Object(r.b)("p",null,"Every command is identified by the command name prefixed by the string ",Object(r.b)("inlineCode",{parentName:"p"},"cmd-"),".\nFor example, the ",Object(r.b)("inlineCode",{parentName:"p"},"watch-project")," command is indicated by the capability name\n",Object(r.b)("inlineCode",{parentName:"p"},"cmd-watch-project"),"."),Object(r.b)("h3",{id:"expression-terms"},"Expression Terms"),Object(r.b)("p",null,"Every expression term is identified by the term name prefixed by the string\n",Object(r.b)("inlineCode",{parentName:"p"},"term-"),".  For example, the ",Object(r.b)("inlineCode",{parentName:"p"},"match")," term is indicated by the capability name\n",Object(r.b)("inlineCode",{parentName:"p"},"term-match"),"."),Object(r.b)("h3",{id:"file-result-fields"},"File Result Fields"),Object(r.b)("p",null,"Every field is identified by the field name prefixed by the string ",Object(r.b)("inlineCode",{parentName:"p"},"field-"),".\nFor example, the ",Object(r.b)("inlineCode",{parentName:"p"},"size")," field is indicated by the capability name ",Object(r.b)("inlineCode",{parentName:"p"},"field-size"),"."),Object(r.b)("h3",{id:"feature-enhancements"},"Feature Enhancements"),Object(r.b)("p",null,"Sometimes we will enhance existing functionality by adding new options to\nexisting commands.  Since these changes won't result in adding a new command\nthey won't implicitly gain a capability name.  In these cases we'll assign\nan appropriate capability name by hand."),Object(r.b)("p",null,"The following feature capabilities are possible / released:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Capability Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Since version"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"relative_root")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3.3"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"relative_root")," query option")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"wildmatch")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3.7"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"match#wildmatch"}),"Expanded ",Object(r.b)("inlineCode",{parentName:"a"},"match")," term with recursive globs"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"suffix-set")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5.0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"suffix#suffixset"}),"Expanded ",Object(r.b)("inlineCode",{parentName:"a"},"suffix")," to support set of suffixes"))))))}p.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),p=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=p(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,u=d["".concat(c,".").concat(s)]||d[s]||m[s]||r;return n?i.a.createElement(u,l({ref:t},o,{components:n})):i.a.createElement(u,l({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<r;o++)c[o]=n[o];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);