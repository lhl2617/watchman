(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(6),r=(n(0),n(171)),o={id:"config",title:"Configuration Files"},l={id:"config",title:"Configuration Files",description:"Watchman looks for configuration files in two places:",source:"@site/docs/configuration.md",permalink:"/watchman/docs/config",editUrl:"https://github.com/facebook/watchman/edit/master/website/docs/configuration.md",sidebar:"sidebar",previous:{title:"NodeJS",permalink:"/watchman/docs/nodejs"},next:{title:"Socket Interface",permalink:"/watchman/docs/socket-interface"}},c=[{value:"Resolution / Scoping",id:"resolution--scoping",children:[]},{value:"Configuration Options",id:"configuration-options",children:[]},{value:"settle",id:"settle",children:[]},{value:"root_files",id:"root_files",children:[]},{value:"enforce_root_files",id:"enforce_root_files",children:[]},{value:"root_restrict_files",id:"root_restrict_files",children:[]},{value:"illegal_fstypes",id:"illegal_fstypes",children:[]},{value:"ignore_vcs",id:"ignore_vcs",children:[]},{value:"ignore_dirs",id:"ignore_dirs",children:[]},{value:"gc_age_seconds",id:"gc_age_seconds",children:[]},{value:"gc_interval_seconds",id:"gc_interval_seconds",children:[]},{value:"fsevents_latency",id:"fsevents_latency",children:[]},{value:"fsevents_try_resync",id:"fsevents_try_resync",children:[]},{value:"idle_reap_age_seconds",id:"idle_reap_age_seconds",children:[]},{value:"hint_num_files_per_dir",id:"hint_num_files_per_dir",children:[]},{value:"hint_num_dirs",id:"hint_num_dirs",children:[]},{value:"suppress_recrawl_warnings",id:"suppress_recrawl_warnings",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Watchman looks for configuration files in two places:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The global configuration file ",Object(r.b)("inlineCode",{parentName:"li"},"/etc/watchman.json")),Object(r.b)("li",{parentName:"ul"},"The root specific configuration file ",Object(r.b)("inlineCode",{parentName:"li"},".watchmanconfig"))),Object(r.b)("p",null,"When watching a root, if a valid JSON file named ",Object(r.b)("inlineCode",{parentName:"p"},".watchmanconfig")," is present\nin the root directory, watchman will load it and use it as a source of\nconfiguration information specific to that root."),Object(r.b)("p",null,"The global configuration path can be changed by passing the\n",Object(r.b)("inlineCode",{parentName:"p"},"--enable-conffile")," option to configure when you build watchman.  This\ndocumentation refers to it as ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/watchman.json")," throughout, just be aware\nthat your particular installation may locate it elsewhere.   In addition,\nthe environmental variable ",Object(r.b)("inlineCode",{parentName:"p"},"$WATCHMAN_CONFIG_FILE")," will override the\ndefault location."),Object(r.b)("p",null,"Changes to the ",Object(r.b)("inlineCode",{parentName:"p"},".watchmanconfig")," or ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/watchman.json")," files are not picked\nup automatically; you will need to remove and re-add the watch (for\n",Object(r.b)("inlineCode",{parentName:"p"},".watchmanconfig"),") or restart watchman (for ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/watchman.json"),") for those\nchanges to take effect."),Object(r.b)("h3",{id:"resolution--scoping"},"Resolution / Scoping"),Object(r.b)("p",null,"There are three configuration scopes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"local")," - the option value is read from the ",Object(r.b)("inlineCode",{parentName:"li"},".watchmanconfig")," file in the\nassociated root."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"global")," - the option value is read from the ",Object(r.b)("inlineCode",{parentName:"li"},"/etc/watchman.json")," file"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fallback")," - the option value is read from the ",Object(r.b)("inlineCode",{parentName:"li"},".watchmanconfig")," file.\nIf the option was not present in the ",Object(r.b)("inlineCode",{parentName:"li"},".watchmanconfig")," file, then read\nit from the ",Object(r.b)("inlineCode",{parentName:"li"},"/etc/watchman.json")," file.")),Object(r.b)("p",null,"This table shows the scoping and availability of the various options:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Option"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Scope"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Since version"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"settle")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"local"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"root_restrict_files")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"global"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"deprecated in 3.1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"root_files")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"global"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3.1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"enforce_root_files")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"global"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3.1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"illegal_fstypes")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"global"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.9.8")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"illegal_fstypes_advice")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"global"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.9.8")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ignore_vcs")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"local"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.9.3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ignore_dirs")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"local"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.9.3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"gc_age_seconds")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"local"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.9.4")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"gc_interval_seconds")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"local"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.9.4")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"fsevents_latency")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fallback"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3.2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"idle_reap_age_seconds")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"local"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3.7")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"hint_num_files_per_dir")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fallback"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3.9")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"hint_num_dirs")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fallback"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4.6")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"suppress_recrawl_warnings")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fallback"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4.7")))),Object(r.b)("h3",{id:"configuration-options"},"Configuration Options"),Object(r.b)("h3",{id:"settle"},"settle"),Object(r.b)("p",null,"Specifies the settle period in ",Object(r.b)("em",{parentName:"p"},"milliseconds"),".  This controls how long the\nfilesystem should be idle before dispatching triggers.  The default value is 20\nmilliseconds."),Object(r.b)("h3",{id:"root_files"},"root_files"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 3.1.")),Object(r.b)("p",null,"Specifies a list of files that, if present in a directory, identify that\ndirectory as the root of a project."),Object(r.b)("p",null,"If left unspecified, to aid in transitioning between versions, watchman will\nuse the value of the now deprecated\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#root_restrict_files"}),"root_restrict_files")," configuration setting."),Object(r.b)("p",null,"If neither ",Object(r.b)("inlineCode",{parentName:"p"},"root_files")," nor ",Object(r.b)("inlineCode",{parentName:"p"},"root_restrict_files")," is specified in the\nconfiguration, watchman will use a default value consisting of:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".git")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".hg")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".svn")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".watchmanconfig"))),Object(r.b)("p",null,"Watchman will add ",Object(r.b)("inlineCode",{parentName:"p"},".watchmanconfig")," to whatever value is specified for\nthis configuration value if it is not present."),Object(r.b)("p",null,"This example causes only ",Object(r.b)("inlineCode",{parentName:"p"},".watchmanconfig")," to be considered as a project\nroot file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "root_files": [".watchmanconfig"]\n}\n')),Object(r.b)("p",null,"See the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"watch-project"}),"watch-project")," command for more information."),Object(r.b)("h3",{id:"enforce_root_files"},"enforce_root_files"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 3.1.")),Object(r.b)("p",null,"This is a boolean option that defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),".  If it is set to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"\nthen the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"watch"}),"watch")," command will only succeed if the requested\ndirectory contains one of the files listed by the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#root_files"}),"root_files"),"\nconfiguration option, and the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"watch-project"}),"watch-project")," command\nwill only succeed if a valid project root is found."),Object(r.b)("p",null,"If left unspecified, to aid in transitioning between versions, watchman will\ncheck to see if the now deprecated ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#root_restrict_files"}),"root_restrict_files"),"\nconfiguration setting is present.  If it is found then the effective value of\n",Object(r.b)("inlineCode",{parentName:"p"},"enforce_root_files")," is set to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("h3",{id:"root_restrict_files"},"root_restrict_files"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Deprecated starting in version 3.1; use ",Object(r.b)("a",Object(a.a)({parentName:"em"},{href:"#root_files"}),"root_files")," and\n",Object(r.b)("a",Object(a.a)({parentName:"em"},{href:"#enforce_root_files"}),"enforce_root_files")," to effect the same behavior.")),Object(r.b)("p",null,"Specifies a list of files, at least one of which should be present in a\ndirectory for watchman to add it as a root. By default there are no\nrestrictions."),Object(r.b)("p",null,"For example,"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "root_restrict_files": [".git", ".hg"]\n}\n')),Object(r.b)("p",null,"will allow watches only in the top level of Git or Mercurial repositories."),Object(r.b)("h3",{id:"illegal_fstypes"},"illegal_fstypes"),Object(r.b)("p",null,"Specifies a list of filesystem types that watchman is prohibited to attempt to\nwatch.  Watchman will determine the filesystem type of the root of a watch; if\nthe typename is present in the ",Object(r.b)("inlineCode",{parentName:"p"},"illegal_fstypes")," list, the watch will be\nprohibited.  You may also specify ",Object(r.b)("inlineCode",{parentName:"p"},"illegal_fstypes_advice")," as a string with\nadditional advice to your user.  The purpose of this configuration option is\nlargely to prevent the use of Watchman on network mounted filesystems.  On\nLinux systems, Watchman may not be able to determine the precise type name of a\nmounted filesystem.  If the filesystem type is not known to watchman, it will\nbe reported as ",Object(r.b)("inlineCode",{parentName:"p"},"unknown"),"."),Object(r.b)("p",null,"For example,"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "illegal_fstypes": ["nfs", "cifs", "smb"],\n  "illegal_fstypes_advice": "use a local directory"\n}\n')),Object(r.b)("p",null,"will prevent watching dirs mounted on network filesystems and provide the\nadvice to use a local directory.  You may omit the ",Object(r.b)("inlineCode",{parentName:"p"},"illegal_fstypes_advice"),"\nsetting to use a default suggestion to relocate the directory to local disk."),Object(r.b)("h3",{id:"ignore_vcs"},"ignore_vcs"),Object(r.b)("p",null,"Apply special VCS ignore logic to the set of named dirs.  This option has a\ndefault value of ",Object(r.b)("inlineCode",{parentName:"p"},'[".git", ".hg", ".svn"]'),".  Dirs that match this option are\nobserved and watched using special shallow logic.  The shallow watch allows\nwatchman to mildly abuse the version control directories to store its query\ncookie files and to observe VCS locking activity without having to watch the\nentire set of VCS data for large trees."),Object(r.b)("h3",{id:"ignore_dirs"},"ignore_dirs"),Object(r.b)("p",null,"Dirs that match are completely ignored by watchman.  This is useful to ignore a\ndirectory that contains only build products and where file change notifications\nare unwanted because of the sheer volume of files."),Object(r.b)("p",null,"For example,"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "ignore_dirs": ["build"]\n}\n')),Object(r.b)("p",null,"would ignore the ",Object(r.b)("inlineCode",{parentName:"p"},"build")," directory at the top level of the watched tree, and\neverything below it.  It will never appear in the watchman query results for\nthe tree."),Object(r.b)("p",null,"On Linux systems, ",Object(r.b)("inlineCode",{parentName:"p"},"ignore_dirs")," is respected at the OS level; the kernel\nsimply will not tell watchman about changes to ignored dirs.  macOS and Windows\nhave limited or no support for this, so watchman needs to process and ignore\nthis class of change."),Object(r.b)("p",null,"For large trees or especially busy build dirs, it is recommended that you move\nthe busy build dirs out of the tree for more optimal performance."),Object(r.b)("p",null,"Since version 2.9.9, if you list a dir in ",Object(r.b)("inlineCode",{parentName:"p"},"ignore_dirs")," that is also listed in\n",Object(r.b)("inlineCode",{parentName:"p"},"ignore_vcs"),", the ",Object(r.b)("inlineCode",{parentName:"p"},"ignore_dirs")," placement will take precedence.  This may not\nsound like a big deal, but since ",Object(r.b)("inlineCode",{parentName:"p"},"ignore_vcs")," is used as a hint to for the\nplacement of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"cookies"}),"cookie files"),", having these two\noptions overlap in earlier versions would break watchman queries."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 4.6.")),Object(r.b)("p",null,"On macOS the first 8 items listed in ",Object(r.b)("inlineCode",{parentName:"p"},"ignore_dirs")," can be accelerated at the\nOS level.  This means that changes to those paths are not even communicated\nto the watchman service.  Entries beyond the first 8 are processed and\nignored by watchman.  If your workload is prone to recrawl events you will\nwant to prioritize your ",Object(r.b)("inlineCode",{parentName:"p"},"ignore_dirs")," list so that the most busy ignored\nlocations occupy the first 8 positions in this list."),Object(r.b)("h3",{id:"gc_age_seconds"},"gc_age_seconds"),Object(r.b)("p",null,"Deleted files (and dirs) older than this are periodically pruned from the\ninternal view of the filesystem.  Until they are pruned, they will be visible\nto queries but will have their ",Object(r.b)("inlineCode",{parentName:"p"},"exists")," field set to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),".   Once they are\npruned, watchman will remember the most recent clock value of the pruned nodes.\nAny since queries based on a clock prior to the last prune clock will be\ntreated as a fresh instance query.  This allows a client to detect and choose\nhow to handle the case where they have missed changes.  See ",Object(r.b)("inlineCode",{parentName:"p"},"is_fresh_instance"),"\nelsewhere in this document for more information.  The default for this is\n",Object(r.b)("inlineCode",{parentName:"p"},"43200")," (12 hours)."),Object(r.b)("h3",{id:"gc_interval_seconds"},"gc_interval_seconds"),Object(r.b)("p",null,"How often to check for, and prune out, deleted nodes per the ",Object(r.b)("inlineCode",{parentName:"p"},"gc_age_seconds"),"\noption description above.  The default for this is ",Object(r.b)("inlineCode",{parentName:"p"},"86400")," (24 hours).  Set\nthis to ",Object(r.b)("inlineCode",{parentName:"p"},"0")," to disable the periodic pruning operation."),Object(r.b)("h3",{id:"fsevents_latency"},"fsevents_latency"),Object(r.b)("p",null,"Controls the latency parameter that is passed to ",Object(r.b)("inlineCode",{parentName:"p"},"FSEventStreamCreate")," on macOS.\nThe value is measured in seconds.  The fixed value of this parameter prior to\nversion 3.2 of watchman was ",Object(r.b)("inlineCode",{parentName:"p"},"0.0001")," seconds.  Starting in version 3.2 of\nwatchman, the default is now ",Object(r.b)("inlineCode",{parentName:"p"},"0.01")," seconds and can be controlled on a\nper-root basis."),Object(r.b)("p",null,"If you observe problems with ",Object(r.b)("inlineCode",{parentName:"p"},"kFSEventStreamEventFlagUserDropped")," increasing\nthe latency parameter will allow the system to batch more change notifications\ntogether and operate more efficiently."),Object(r.b)("h3",{id:"fsevents_try_resync"},"fsevents_try_resync"),Object(r.b)("p",null,"This is macOS specific."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 4.6.")),Object(r.b)("p",null,"Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),".  If set to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", if a watch receives a\n",Object(r.b)("inlineCode",{parentName:"p"},"kFSEventStreamEventFlagUserDropped")," event, attempt to resync from the\n",Object(r.b)("inlineCode",{parentName:"p"},"fsevents")," journal if it is available.  The journal may not be available if one\nor more volumes are mounted read-only, if the administrator has purged the\njournal, or if the ",Object(r.b)("inlineCode",{parentName:"p"},"fsevents")," id numbers have rolled over."),Object(r.b)("p",null,"This resync operation is advantageous because it effectively allows rewinding\nand replaying the event stream from a known point in time and avoids the need\nto recrawl the entire watch."),Object(r.b)("p",null,"If this option is set to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", or if the journal is not available, the\noriginal strategy of recrawling the watched directory tree is used instead."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 4.7.")),Object(r.b)("p",null,"The default changed to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),".  In addition, this resync strategy is now\nalso applied to ",Object(r.b)("inlineCode",{parentName:"p"},"kFSEventStreamEventFlagKernelDropped")," events."),Object(r.b)("h3",{id:"idle_reap_age_seconds"},"idle_reap_age_seconds"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 3.7.")),Object(r.b)("p",null,"How many seconds a watch can remain idle before becoming a candidate for\nreaping, measured in seconds.  The default for this is ",Object(r.b)("inlineCode",{parentName:"p"},"432000")," (5 days).  Set\nthis to ",Object(r.b)("inlineCode",{parentName:"p"},"0")," to prevent reaping."),Object(r.b)("p",null,"A watch is considered to be idle when it has had no commands that operate on it\nfor ",Object(r.b)("inlineCode",{parentName:"p"},"idle_reap_age_seconds"),".   If an idle watch has no triggers and no\nsubscriptions then it will be cancelled, releasing the associated operating\nsystem resources, and removed from the state file."),Object(r.b)("h3",{id:"hint_num_files_per_dir"},"hint_num_files_per_dir"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 3.9.")),Object(r.b)("p",null,"Used to pre-size hash tables used to track files per directory.  This\nis most impactful during the initial crawl of the filesystem.  Setting\nthis too small will increase the chance of a hash insert having a collision\nand drive up the cost of the insert and subsequent gets."),Object(r.b)("p",null,"Prior to version 3.9 of watchman this value was fixed at ",Object(r.b)("inlineCode",{parentName:"p"},"2"),".  Starting\nin version 3.9 the default value is ",Object(r.b)("inlineCode",{parentName:"p"},"64")," and can be configured via this\nsetting in the ",Object(r.b)("inlineCode",{parentName:"p"},".watchmanconfig")," or the global ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/watchman.json"),"\nconfiguration file."),Object(r.b)("p",null,"Setting this value very large increases the memory overhead per directory in\nthe tree; the value is rounded up to the next power of two and pre-allocated\nin an array of pointers.  On a 64-bit system multiply that number by 8 to\narrive at the number of bytes of overhead (halve this on a 32-bit system).\nThe overhead is doubled when using a case insensitive filesystem."),Object(r.b)("p",null,"The ideal size from a time complexity perspective is the number of files in\nyour largest directory.  From a space complexity perspective, the ideal size\nis 1; you would pay the cost of the collisions during the initial crawl and\nhave a more optimal memory usage.  Since watchman is primarily employed as an\naccelerator, we'd recommend biasing towards using more memory and taking less\ntime to run."),Object(r.b)("h3",{id:"hint_num_dirs"},"hint_num_dirs"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 4.6")),Object(r.b)("p",null,"Used to pre-size hash tables that are used to track the total set of files\nin the entire watched tree.  The default value for this is 131072."),Object(r.b)("p",null,"The optimal size is a power-of-two larger than the number of directories\nin your tree; running ",Object(r.b)("inlineCode",{parentName:"p"},"find . -type d | wc -l")," will tell you the number\nthat you have."),Object(r.b)("p",null,"Making this number too large is potentially wasteful of memory.  Making this\nnumber too small results in increased latency during crawling while the\nhash tables are rebuilt."),Object(r.b)("h3",{id:"suppress_recrawl_warnings"},"suppress_recrawl_warnings"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 4.7")),Object(r.b)("p",null,"When set to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", watchman will not produce recrawl related warning fields in\nthe response PDUs of various requests.  The default is ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"; the intent is\nthat someone in your organization should be aware of recrawls and be able to\nmanage the configuration and workload.  Some sites employ an alternative\nmechanism for sampling and reporting this to the right set of people and wish\nto disable the warning so that it doesn't appear in front of users that are\nunable to make the appropriate configuration changes for themselves."))}b.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return n?i.a.createElement(h,l({ref:t},s,{components:n})):i.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);