(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var i=n(1),a=n(6),r=(n(0),n(171)),o={id:"query",title:"query"},l={id:"query",title:"query",description:"*Since 1.6.*",source:"@site/docs/query.md",permalink:"/watchman/docs/query",editUrl:"https://github.com/facebook/watchman/edit/master/website/docs/query.md",sidebar:"sidebar",previous:{title:"log-level",permalink:"/watchman/docs/log-level"},next:{title:"shutdown-server",permalink:"/watchman/docs/shutdown-server"}},s=[{value:"Available fields",id:"available-fields",children:[]},{value:"Synchronization timeout (since 2.1)",id:"synchronization-timeout-since-21",children:[]},{value:"Lock timeout",id:"lock-timeout",children:[]},{value:"Case sensitivity",id:"case-sensitivity",children:[]}],c={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 1.6.")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'$ watchman -j <<-EOT\n["query", "/path/to/root", {\n  "suffix": "php",\n  "expression": ["allof",\n    ["type", "f"],\n    ["not", "empty"],\n    ["ipcre", "test", "basename"]\n  ],\n  "fields": ["name"]\n}]\nEOT\n')),Object(r.b)("p",null,"Executes a query against the specified root. This example uses the ",Object(r.b)("inlineCode",{parentName:"p"},"-j")," flag to\nthe watchman binary that tells it to read stdin and interpret it as the JSON\nrequest object to send to the watchman service.  This flag allows you to send\nin a pretty JSON object (as shown above), but if you're using the socket\ninterface you must still format the object as a single line JSON request as\ndocumented in the protocol spec."),Object(r.b)("p",null,"The first argument to query is the path to the watched root.  The second\nargument holds a JSON object describing the query to be run.  The query object\nis processed by passing it to the query engine (see ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"file-query"}),"File Queries"),") which will generate a set of matching files."),Object(r.b)("p",null,"The query command will then consult the ",Object(r.b)("inlineCode",{parentName:"p"},"fields")," member of the query object;\nif it is not present it will default to:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'"fields": ["name", "exists", "new", "size", "mode"]\n')),Object(r.b)("p",null,"For each file in the result set, the query command will generate a JSON object\nvalue populated with the requested fields.  For example, the default set of\nfields will return a response something like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n    "version": "2.9",\n    "clock": "c:80616:59",\n    "is_fresh_instance": false,\n    "files": [\n        {\n            "exists": true,\n            "mode": 33188,\n            "new": false,\n            "name": "argv.c",\n            "size": 1340,\n        }\n    ]\n}\n')),Object(r.b)("p",null,"If a field's value cannot be computed, a field's value may be ",Object(r.b)("inlineCode",{parentName:"p"},"null"),", or may\nbe an object with an ",Object(r.b)("inlineCode",{parentName:"p"},"error")," key containing a descriptive message string:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n    "version": "2019-07-22T13:50:36Z",\n    "is_fresh_instance": false,\n    "clock": "c:1563834049:1830370:791543813:2257494",\n    "files": [\n        {\n            "content.sha1hex": null,\n            "name": "docs"\n            "symlink_target": null,\n            "type": "d",\n        },\n        {\n            "content.sha1hex": {\n                "error": "eloop: file is a symlink: Invalid argument: Invalid argument"\n            },\n            "type": "l",\n            "symlink_target": "eloop",\n            "name": "eloop"\n        }\n    ]\n}\n')),Object(r.b)("p",null,"For queries using the ",Object(r.b)("inlineCode",{parentName:"p"},"since")," generator, the ",Object(r.b)("inlineCode",{parentName:"p"},"is_fresh_instance")," member is true\nif the particular clock value indicates that it was returned by a different\ninstance of watchman, or a named cursor hasn't been seen before. In that case,\nonly files that currently exist will be returned, and all files will have ",Object(r.b)("inlineCode",{parentName:"p"},"new"),"\nset to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),". For all other queries, is_fresh_instance will always be true.\nAdvanced users may set the input parameter ",Object(r.b)("inlineCode",{parentName:"p"},"empty_on_fresh_instance")," to true,\nin which case no files will be returned for fresh instances."),Object(r.b)("p",null,"If the ",Object(r.b)("inlineCode",{parentName:"p"},"fields")," member consists of a single entry, the files result will be a\nsimple array of values; ",Object(r.b)("inlineCode",{parentName:"p"},'"fields": ["name"]')," produces:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n    "version": "1.5",\n    "clock": "c:80616:59",\n    "files": ["argv.c", "foo.c"]\n}\n')),Object(r.b)("h3",{id:"available-fields"},"Available fields"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")," - string: the filename, relative to the watched root"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"exists")," - bool: true if the file exists, false if it has been deleted"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cclock"),' - string: the "created clock"; the clock value when we first\nobserved the file, or the clock value when it last switched from\n!exists to exists.'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"oclock"),' - string: the "observed clock"; the clock value where we last\nobserved some change in this file or its metadata.'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ctime"),", ",Object(r.b)("inlineCode",{parentName:"li"},"ctime_ms"),", ",Object(r.b)("inlineCode",{parentName:"li"},"ctime_us"),", ",Object(r.b)("inlineCode",{parentName:"li"},"ctime_ns"),", ",Object(r.b)("inlineCode",{parentName:"li"},"ctime_f")," -\nlast inode change time measured in integer seconds, milliseconds,\nmicroseconds, nanoseconds or floating point seconds respectively."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mtime"),", ",Object(r.b)("inlineCode",{parentName:"li"},"mtime_ms"),", ",Object(r.b)("inlineCode",{parentName:"li"},"mtime_us"),", ",Object(r.b)("inlineCode",{parentName:"li"},"mtime_ns"),", ",Object(r.b)("inlineCode",{parentName:"li"},"mtime_f")," -\nmodified time measured in integer seconds, milliseconds,\nmicroseconds, nanoseconds or floating point seconds respectively."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"size")," - integer: file size in bytes"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mode")," - integer: file (or directory) mode expressed as a decimal integer"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"uid")," - integer: the owning uid"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"gid")," - integer: the owning gid"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ino")," - integer: the inode number"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dev")," - integer: the device number"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"nlink")," - integer: number of hard links"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"new")," - bool: whether this entry is newer than the ",Object(r.b)("inlineCode",{parentName:"li"},"since")," generator criteria")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 3.1.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"type")," - string: the file type. Has the\nthe values listed in ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"type"}),"the type query expression"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 4.6.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"symlink_target")," - string: the target of a symbolic link if the file is a\nsymbolic link")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 4.9.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"content.sha1hex")," - string: the SHA-1 digest of the file's byte content,\nencoded as 40 hexidecimal digits (e.g.\n",Object(r.b)("inlineCode",{parentName:"li"},'"da39a3ee5e6b4b0d3255bfef95601890afd80709"')," for an empty file)")),Object(r.b)("h3",{id:"synchronization-timeout-since-21"},"Synchronization timeout (since 2.1)"),Object(r.b)("p",null,"By default a ",Object(r.b)("inlineCode",{parentName:"p"},"query")," will wait for up to 60 seconds for the view of the\nfilesystem to become current.  Watchman decides that the view is current by\ncreating a cookie file and waiting to observe the notification that it is\npresent.  If the cookie is not observed within the sync_timeout period then the\nquery invocation will error out with a synchronization error message."),Object(r.b)("p",null,"If your synchronization requirements differ from the default, you may pass in\nyour desired timeout when you construct your query; it must be an integer value\nexpressed in milliseconds:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'["query", "/path/to/root", {\n  "expression": ["exists"],\n  "fields": ["name"],\n  "sync_timeout": 60000\n}]\n')),Object(r.b)("p",null,"You may specify ",Object(r.b)("inlineCode",{parentName:"p"},"0")," as the value if you do not wish for the query to create\na cookie and synchronize; the query will be evaluated over the present view\nof the tree, which may lag behind the present state of the filesystem."),Object(r.b)("h3",{id:"lock-timeout"},"Lock timeout"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 4.6.")),Object(r.b)("p",null,"By default queries will wait for up to 60 seconds to acquire a lock to inspect\nthe view of the filesystem tree.  In practice, this timeout should never be hit\n(it is indicative of an environmental or load related issue).  However, in some\nsituations it is important to ensure that the query attempt times out sooner\nthan this.  You may use the ",Object(r.b)("inlineCode",{parentName:"p"},"lock_timeout")," field to control this behavior.\n",Object(r.b)("inlineCode",{parentName:"p"},"lock_timeout")," must be an integer value expressed in milliseconds:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'["query", "/path/to/root", {\n  "expression": ["exists"],\n  "fields": ["name"],\n  "lock_timeout": 60000,\n  "sync_timeout": 60000\n}]\n')),Object(r.b)("p",null,"Prior to version 4.6, the ",Object(r.b)("inlineCode",{parentName:"p"},"lock_timeout")," could not be configured and had an\neffective value of infinity."),Object(r.b)("h3",{id:"case-sensitivity"},"Case sensitivity"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 2.9.9.")),Object(r.b)("p",null,"On systems where the watched root is a case insensitive filesystem (this is the\ncommon case for macOS and Windows), various name matching operations default to\ncase insensitive."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 4.7.")),Object(r.b)("p",null,"You may override the case sensitivity of the various name matching operations\nby setting the ",Object(r.b)("inlineCode",{parentName:"p"},"case_sensitive")," field in your query spec.  It default to the\ncase sensitivity of the watched root.  This is useful in cases where you know\nthat the contents of the tree are treated case sensitively by your various\ntools but are running on a case insensitive filesystem.  By forcing the name\nmatches to case sensitive mode the matches are faster and in some cases can be\naccelerated by using alternative algorithms."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'$ watchman -j <<-EOT\n["query", "/path/to/root", {\n  "suffix": "php",\n  "expression": ["match", "foo*.c", "basename"],\n  "case_sensitive": true,\n  "fields": ["name"]\n}]\nEOT\n')))}b.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),p=i,d=u["".concat(o,".").concat(p)]||u[p]||m[p]||r;return n?a.a.createElement(d,l({ref:t},c,{components:n})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);