/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-classlist-inputtypes-setclasses-shiv !*/
!function(e,t,n){function a(e,t){return typeof e===t}function r(){var e,t,n,r,o,i,c;for(var u in l)if(l.hasOwnProperty(u)){if(e=[],t=l[u],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=a(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],c=i.split("."),1===c.length?Modernizr[c[0]]=r:(!Modernizr[c[0]]||Modernizr[c[0]]instanceof Boolean||(Modernizr[c[0]]=new Boolean(Modernizr[c[0]])),Modernizr[c[0]][c[1]]=r),s.push((r?"":"no-")+c.join("-"))}}function o(e){var t=u.className,n=Modernizr._config.classPrefix||"";if(f&&(t=t.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(a,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),f?u.className.baseVal=t:u.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):f?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}var s=[],l=[],c={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){l.push({name:e,fn:t,options:n})},addAsyncTest:function(e){l.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr;var u=t.documentElement,f="svg"===u.nodeName.toLowerCase();f||!function(e,t){function n(e,t){var n=e.createElement("p"),a=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",a.insertBefore(n.lastChild,a.firstChild)}function a(){var e=E.elements;return"string"==typeof e?e.split(" "):e}function r(e,t){var n=E.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),E.elements=n+" "+e,c(t)}function o(e){var t=y[e[g]];return t||(t={},v++,e[g]=v,y[v]=t),t}function i(e,n,a){if(n||(n=t),f)return n.createElement(e);a||(a=o(n));var r;return r=a.cache[e]?a.cache[e].cloneNode():h.test(e)?(a.cache[e]=a.createElem(e)).cloneNode():a.createElem(e),!r.canHaveChildren||p.test(e)||r.tagUrn?r:a.frag.appendChild(r)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||o(e);for(var r=n.frag.cloneNode(),i=0,s=a(),l=s.length;l>i;i++)r.createElement(s[i]);return r}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return E.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+a().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(E,t.frag)}function c(e){e||(e=t);var a=o(e);return!E.shivCSS||u||a.hasCSS||(a.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,a),e}var u,f,m="3.7.3",d=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,f=!0}}();var E={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:d.shivCSS!==!1,supportsUnknownElements:f,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:c,createElement:i,createDocumentFragment:s,addElements:r};e.html5=E,c(t),"object"==typeof module&&module.exports&&(module.exports=E)}("undefined"!=typeof e?e:this,t);var m=i("input"),d="search tel url email datetime date month week time datetime-local number range color".split(" "),p={};Modernizr.inputtypes=function(e){for(var a,r,o,i=e.length,s="1)",l=0;i>l;l++)m.setAttribute("type",a=e[l]),o="text"!==m.type&&"style"in m,o&&(m.value=s,m.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(a)&&m.style.WebkitAppearance!==n?(u.appendChild(m),r=t.defaultView,o=r.getComputedStyle&&"textfield"!==r.getComputedStyle(m,null).WebkitAppearance&&0!==m.offsetHeight,u.removeChild(m)):/^(search|tel)$/.test(a)||(o=/^(url|email)$/.test(a)?m.checkValidity&&m.checkValidity()===!1:m.value!=s)),p[e[l]]=!!o;return p}(d),Modernizr.addTest("classlist","classList"in u),r(),o(s),delete c.addTest,delete c.addAsyncTest;for(var h=0;h<Modernizr._q.length;h++)Modernizr._q[h]();e.Modernizr=Modernizr}(window,document);