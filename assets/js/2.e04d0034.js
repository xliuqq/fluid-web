(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{312:function(t,e,n){"use strict";n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return r})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return d})),n.d(e,"l",(function(){return f})),n.d(e,"c",(function(){return m})),n.d(e,"j",(function(){return b}));const s=/#.*$/,i=/\.(md|html)$/,r=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(s,"").replace(i,"")}function l(t){return a.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;const e=t.match(s),n=e?e[0]:"",i=o(t);return r.test(i)?t:i+".html"+n}function p(t,e){const n=decodeURIComponent(t.hash),i=function(t){const e=t.match(s);if(e)return e[0]}(e);if(i&&n!==i)return!1;return o(t.path)===o(e)}function d(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const r=t.replace(/^\//,"").split("/");for(let t=0;t<r.length;t++){const e=r[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const s=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===s)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function f(t,e,n,s){const{pages:i,themeConfig:r}=n,a=s&&r.locales&&r.locales[s]||r;if("auto"===(t.frontmatter.sidebar||a.sidebar||r.sidebar))return g(t);const o=a.sidebar||r.sidebar;if(o){const{base:n,config:s}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const s in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(s)))return{base:s,config:e[s]};var n;return{}}(e,o);return"auto"===s?g(t):s?s.map(t=>function t(e,n,s,i=1){if("string"==typeof e)return d(n,e,s);if(Array.isArray(e))return Object.assign(d(n,e[0],s),{title:e[1]});{const r=e.children||[];return 0===r.length&&e.path?Object.assign(d(n,e.path,s),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:r.map(e=>t(e,n,s,i+1)),collapsable:!1!==e.collapsable}}}(t,i,n)):[]}return[]}function g(t){const e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function m(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function b(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},313:function(t,e,n){"use strict";var s=n(312),i={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(s.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(s.g)(this.link)||Object(s.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(s.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(s.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},r=n(19),a=Object(r.a)(i,(function(){var t=this,e=t._self._c;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=a.exports},316:function(t,e,n){},317:function(t,e,n){},318:function(t,e,n){},319:function(t,e,n){},320:function(t,e,n){},321:function(t,e,n){},322:function(t,e){t.exports=function(t){return null==t}},323:function(t,e,n){},324:function(t,e,n){},325:function(t,e,n){},326:function(t,e,n){},327:function(t,e,n){},328:function(t,e,n){},335:function(t,e,n){"use strict";n.r(e);var s=n(312),i={name:"SidebarGroup",components:{DropdownTransition:n(336).a},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=n(335).default},methods:{isActive:s.e}},r=(n(349),n(19)),a=Object(r.a)(i,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;function o(t,e,n,s,i){const r={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:s,"sidebar-link":!0}};return i>2&&(r.style={"padding-left":i+"rem"}),t("RouterLink",r,n)}function l(t,e,n,i,r,a=1){return!e||a>r?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const u=Object(s.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,u,e.level-1),l(t,e.children,n,i,r,a+1)])}))}var u={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:n,$route:i,$themeConfig:r,$themeLocaleConfig:a},props:{item:u,sidebarDepth:c}}){const h=Object(s.e)(i,u.path),p="auto"===u.type?h||u.children.some(t=>Object(s.e)(i,u.basePath+"#"+t.slug)):h,d="external"===u.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,u.path,u.title||u.path):o(t,u.path,u.title||u.path,p),f=[e.frontmatter.sidebarDepth,c,a.sidebarDepth,r.sidebarDepth,1].find(t=>void 0!==t),g=a.displayAllHeaders||r.displayAllHeaders;if("auto"===u.type)return[d,l(t,u.children,u.basePath,i,f)];if((p||g)&&u.headers&&!s.d.test(u.path)){return[d,l(t,Object(s.c)(u.headers),u.path,i,f)]}return d}};n(350);function c(t,e){if("group"===e.type){const n=e.path&&Object(s.e)(t,e.path),i=e.children.some(e=>"group"===e.type?c(t,e):"page"===e.type&&Object(s.e)(t,e.path));return n||i}return!1}var h={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(r.a)(u,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(c(t,s))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(s.e)(this.$route,t.regularPath)}}},p=Object(r.a)(h,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(n,s){return e("li",{key:s},["group"===n.type?e("SidebarGroup",{attrs:{item:n,open:s===t.openGroupIndex,collapsable:n.collapsable||n.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(s)}}}):e("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:n}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=p.exports},336:function(t,e,n){"use strict";var s={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},i=(n(341),n(19)),r=Object(i.a)(s,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},339:function(t,e,n){"use strict";n(316)},340:function(t,e,n){"use strict";n(317)},341:function(t,e,n){"use strict";n(318)},342:function(t,e,n){"use strict";n(319)},343:function(t,e,n){"use strict";n(320)},344:function(t,e,n){"use strict";n(321)},345:function(t,e,n){"use strict";n(323)},346:function(t,e,n){var s=n(17),i=n(8),r=n(16);t.exports=function(t){return"string"==typeof t||!i(t)&&r(t)&&"[object String]"==s(t)}},347:function(t,e,n){"use strict";n(324)},348:function(t,e,n){"use strict";n(325)},349:function(t,e,n){"use strict";n(326)},350:function(t,e,n){"use strict";n(327)},351:function(t,e,n){"use strict";n(328)},364:function(t,e,n){"use strict";n.r(e);var s=n(363),i=n(121),r=n.n(i),a=(t,e,n=null)=>{let s=r()(e,"title","");return r()(e,"frontmatter.tags")&&(s+=" "+e.frontmatter.tags.join(" ")),n&&(s+=" "+n),o(t,s)};const o=(t,e)=>{const n=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),s=new RegExp("[^\0-]"),i=t.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t);if(s.test(t))return i.some(t=>e.toLowerCase().indexOf(t)>-1);{const s=t.endsWith(" ");return new RegExp(i.map((t,e)=>i.length!==e+1||s?`(?=.*\\b${n(t)}\\b)`:`(?=.*\\b${n(t)})`).join("")+".+","gi").test(e)}};var l={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,n=this.$site.themeConfig.searchMaxSuggestions||5,s=this.$localePath,i=[];for(let r=0;r<e.length&&!(i.length>=n);r++){const o=e[r];if(this.getPageLocalePath(o)===s&&this.isSearchable(o))if(a(t,o))i.push(o);else if(o.headers)for(let e=0;e<o.headers.length&&!(i.length>=n);e++){const n=o.headers[e];n.title&&a(t,o,n.title)&&i.push(Object.assign({},o,{path:o.path+"#"+n.slug,header:n}))}}return i},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},u=(n(339),n(19)),c=Object(u.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-box"},[e("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?e("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(n,s){return e("li",{key:s,staticClass:"suggestion",class:{focused:s===t.focusIndex},on:{mousedown:function(e){return t.go(s)},mouseenter:function(e){return t.focus(s)}}},[e("a",{attrs:{href:n.path},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(n.title||n.path))]),t._v(" "),n.header?e("span",{staticClass:"header"},[t._v("> "+t._s(n.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports,h=(n(340),Object(u.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),p=n(313),d=n(336),f=n(122),g=n.n(f),m={name:"DropdownLink",components:{NavLink:p.a,DropdownTransition:d.a},props:{item:{required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},isLastItemOfArray:(t,e)=>g()(e)===t,handleDropdown(){0===event.detail&&this.setOpen(!this.open)}}},b=(n(342),Object(u.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow down"})]),t._v(" "),e("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,s){return e("li",{key:n.link||s,staticClass:"dropdown-item"},["links"===n.type?e("h4",[t._v("\n          "+t._s(n.text)+"\n        ")]):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(s){return e("li",{key:s.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:s},on:{focusout:function(e){t.isLastItemOfArray(s,n.items)&&t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0):e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports),v=n(312),k={name:"NavLinks",components:{NavLink:p.a,DropdownLink:b},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,s=this.$site.themeConfig.locales||{},i={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(i=>{const r=t[i],a=s[i]&&s[i].label||r.lang;let o;return r.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,i),n.some(t=>t.path===o)||(o=i)),{text:a,link:o}})};return[...this.userNav,i]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(v.j)(t),{items:(t.items||[]).map(v.j)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const s=e[n];if(new RegExp(s,"i").test(t))return s}return"Source"}}},_=(n(343),Object(u.a)(k,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function x(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var C={name:"Navbar",components:{SidebarButton:h,NavLinks:_,SearchBox:c,AlgoliaSearchBox:{}},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(x(this.$el,"paddingLeft"))+parseInt(x(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},L=(n(344),Object(u.a)(C,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),$=n(322),y=n.n($),w={name:"PageEdit",computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=y()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:n="",docsBranch:s="master",docsRepo:i=e}=this.$site.themeConfig;return t&&i&&this.$page.relativePath?this.createEditLink(e,i,n,s,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,n,s,i){if(/bitbucket.org/.test(e)){return e.replace(v.a,"")+"/src"+`/${s}/`+(n?n.replace(v.a,"")+"/":"")+i+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(v.a,"")+"/-/edit"+`/${s}/`+(n?n.replace(v.a,"")+"/":"")+i}return(v.i.test(e)?e:"https://github.com/"+e).replace(v.a,"")+"/edit"+`/${s}/`+(n?n.replace(v.a,"")+"/":"")+i}}},O=(n(345),Object(u.a)(w,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),S=n(346),I=n.n(S),j={name:"PageNav",props:["sidebarItems"],computed:{prev(){return T(N.PREV,this)},next(){return T(N.NEXT,this)}}};const N={NEXT:{resolveLink:function(t,e){return P(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return P(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function T(t,{$themeConfig:e,$page:n,$route:s,$site:i,sidebarItems:r}){const{resolveLink:a,getThemeLinkConfig:o,getPageLinkConfig:l}=t,u=o(e),c=l(n),h=y()(c)?u:c;return!1===h?void 0:I()(h)?Object(v.k)(i.pages,h,s.path):a(n,r)}function P(t,e,n){const s=[];!function t(e,n){for(let s=0,i=e.length;s<i;s++)"group"===e[s].type?t(e[s].children||[],n):n.push(e[s])}(e,s);for(let e=0;e<s.length;e++){const i=s[e];if("page"===i.type&&i.path===decodeURIComponent(t.path))return s[e+n]}}var A=j,D=(n(347),{components:{PageEdit:O,PageNav:Object(u.a)(A,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?e("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},["external"===t.next.type?e("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),E=(n(348),Object(u.a)(D,(function(){var t=this._self._c;return t("main",{staticClass:"page"},[this._t("top"),this._v(" "),t("Content",{staticClass:"theme-default-content"}),this._v(" "),t("PageEdit"),this._v(" "),t("PageNav",this._b({},"PageNav",{sidebarItems:this.sidebarItems},!1)),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),R={name:"Sidebar",components:{SidebarLinks:n(335).default,NavLinks:_},props:["items"]},U=(n(351),Object(u.a)(R,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),H={name:"Layout",components:{Home:s.a,Page:E,Sidebar:U,Navbar:L},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(v.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},G=Object(u.a)(H,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=G.exports}}]);