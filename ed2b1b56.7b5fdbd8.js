(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),c=n(6),a=(n(0),n(171)),i={id:"exp-since",title:"since"},o={id:"exp-since",title:"since",description:"Evaluates as true if the specified time property of the file is greater than",source:"@site/docs/exp.since.md",permalink:"/watchman/docs/exp-since",editUrl:"https://github.com/facebook/watchman/edit/master/website/docs/exp.since.md",sidebar:"sidebar",previous:{title:"pcre & ipcre",permalink:"/watchman/docs/pcre"},next:{title:"size",permalink:"/watchman/docs/size"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Evaluates as true if the specified time property of the file is greater than\nthe since value.  Note that this is not the same as the ",Object(a.b)("inlineCode",{parentName:"p"},"since")," generator; when\nused as an expression term we are performing a straight clockspec comparison.\nWhen used as a generator, candidate files are selected based on the ",Object(a.b)("inlineCode",{parentName:"p"},"since"),"\ntime index.  The end result might or might not be the same--in particular, if\nthe ",Object(a.b)("inlineCode",{parentName:"p"},"since")," time index is not passed in, it will be treated the same as a fresh\ninstance, and only files that exist will be returned. The efficiency can vary\nbased on the size and shape of the file tree that you are watching; it may be\ncheaper to generate the candidate set of files by suffix and then check the\nmodification time if many files were changed since your last query."),Object(a.b)("p",null,'This will yield a true value if the observed change time is more recent than\nthe specified clockspec (this is equivalent to specifying "oclock" as the third\nparameter):'),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),' ["since", "c:12345:234"]\n')),Object(a.b)("p",null,"You may specify particular fields from the filesystem metadata.  In this case\nyour clockspec should be a unix time value:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),' ["since", 12345668, "mtime"]\n ["since", 12345668, "ctime"]\n')),Object(a.b)("p",null,"You may explicitly request the observed clock values too; in these cases we'll\naccept either a timestamp or a clock value.  The ",Object(a.b)("inlineCode",{parentName:"p"},"oclock")," is the last observed\nchange clock value (observed clock) and the ",Object(a.b)("inlineCode",{parentName:"p"},"cclock")," is the clock value where\nwe first observed the file come into existence (created clock):"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),' ["since", 12345668, "oclock"]\n ["since", "c:1234:123", "oclock"]\n ["since", 12345668, "cclock"]\n ["since", "c:1234:2342", "cclock"]\n')))}p.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||f[b]||a;return n?c.a.createElement(d,o({ref:t},l,{components:n})):c.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);