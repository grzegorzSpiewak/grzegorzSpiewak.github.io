webpackJsonp([5],{338:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a,l,s=n(1),f=(n.n(s),n(4)),u=n.n(f),c=n(128),d=n(39),p=n(130),h=n(129),v=n(352),y=n(376),m=n(382),b=n(385),g=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var s=Array(a),f=0;f<a;f++)s[f]=arguments[f+3];n.children=s}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),_=function(e){var t=e.blogPost,n=e.images;return{article:t.post,loadingStatus:t.loadingStatus,images:n}},w=function(e){return{content:n.i(d.a)(p,e),assets:n.i(d.a)(h,e)}},O=(l=a=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.componentWillMount=function(){var e=this.props.match.params.id,t=this.props.location.state.images.sys.id;this.props.content.fetchById(e),this.props.assets.fetchAssets(t)},t.prototype.render=function(){return g(v.a,{},void 0,"SUCCES"===this.props.images.imageLoaded?g(m.a,{article:this.props.article.fields,images:this.props.images,redirect:b.a.contact}):g(y.a,{}))},t}(s.Component),a.propTypes={loadingStatus:u.a.string.isRequired},l);t.default=n.i(c.b)(_,w)(O)},348:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,l=n(1),s=(n.n(l),n(4)),f=n.n(s),u=n(69),c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var s=Array(a),f=0;f<a;f++)s[f]=arguments[f+3];n.children=s}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),d=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.handleClick=function(e){e.preventDefault(),this.props.history.push(this.props.redirect)},t.prototype.render=function(){return c("button",{onClick:this.handleClick.bind(this),className:this.props.className+"__btn"},void 0,this.props.anchor)},t}(l.Component);d.propTypes=(a={redirect:f.a.string.isRequired,className:f.a.string.isRequired,anchor:f.a.string.isRequired},a.redirect=f.a.string.isRequired,a.history=f.a.shape({push:f.a.func.isRequired}).isRequired,a),t.a=n.i(u.c)(d)},352:function(e,t,n){"use strict";var o=n(1),r=(n.n(o),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var s=Array(a),f=0;f<a;f++)s[f]=arguments[f+3];n.children=s}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}()),i=function(e){var t=e.children;return r("main",{id:"page-wrap"},void 0,t)};t.a=i},363:function(e,t,n){"use strict";var o=n(1),r=(n.n(o),n(368)),i=n.n(r),a=n(4),l=n.n(a),s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var s=Array(a),f=0;f<a;f++)s[f]=arguments[f+3];n.children=s}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),f=function(e){return s(i.a,{offsetVertical:750,height:"100%"},void 0,s("img",{src:e.src,alt:""+e.alt,className:e.className+"__pic"}))};f.propTypes={src:l.a.string.isRequired,alt:l.a.string.isRequired,className:l.a.string.isRequired},t.a=f},365:function(e,t,n){var o,r;!function(i,a){o=a,void 0!==(r="function"==typeof o?o.call(t,n,t,e):o)&&(e.exports=r)}(0,function(){function e(e,t){return function(n,o,r,i){n[e]?n[e](o,r,i):n[t]&&n[t]("on"+o,r)}}return{add:e("addEventListener","attachEvent"),remove:e("removeEventListener","detachEvent")}})},366:function(e,t,n){(function(t){function n(e,t,n){function r(t){var n=v,o=y;return v=y=void 0,j=t,b=e.apply(o,n)}function i(e){return j=e,g=setTimeout(u,t),T?r(e):b}function s(e){var n=e-N,o=e-j,r=t-n;return S?w(r,m-o):r}function f(e){var n=e-N,o=e-j;return void 0===N||n>=t||n<0||S&&o>=m}function u(){var e=O();if(f(e))return c(e);g=setTimeout(u,s(e))}function c(e){return g=void 0,L&&v?r(e):(v=y=void 0,b)}function d(){void 0!==g&&clearTimeout(g),j=0,v=N=y=g=void 0}function p(){return void 0===g?b:c(O())}function h(){var e=O(),n=f(e);if(v=arguments,y=this,N=e,n){if(void 0===g)return i(N);if(S)return g=setTimeout(u,t),r(N)}return void 0===g&&(g=setTimeout(u,t)),b}var v,y,m,b,g,N,j=0,T=!1,S=!1,L=!0;if("function"!=typeof e)throw new TypeError(l);return t=a(t)||0,o(n)&&(T=!!n.leading,S="maxWait"in n,m=S?_(a(n.maxWait)||0,t):m,L="trailing"in n?!!n.trailing:L),h.cancel=d,h.flush=p,h}function o(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==typeof e}function i(e){return"symbol"==typeof e||r(e)&&g.call(e)==f}function a(e){if("number"==typeof e)return e;if(i(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=d.test(e);return n||p.test(e)?h(e.slice(2),n?2:8):c.test(e)?s:+e}var l="Expected a function",s=NaN,f="[object Symbol]",u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,p=/^0o[0-7]+$/i,h=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,m=v||y||Function("return this")(),b=Object.prototype,g=b.toString,_=Math.max,w=Math.min,O=function(){return m.Date.now()};e.exports=n}).call(t,n(38))},367:function(e,t,n){(function(t){function n(e,t,n){function o(t){var n=v,o=y;return v=y=void 0,j=t,b=e.apply(o,n)}function i(e){return j=e,g=setTimeout(u,t),T?o(e):b}function a(e){var n=e-_,o=e-j,r=t-n;return S?O(r,m-o):r}function f(e){var n=e-_,o=e-j;return void 0===_||n>=t||n<0||S&&o>=m}function u(){var e=N();if(f(e))return c(e);g=setTimeout(u,a(e))}function c(e){return g=void 0,L&&v?o(e):(v=y=void 0,b)}function d(){void 0!==g&&clearTimeout(g),j=0,v=_=y=g=void 0}function p(){return void 0===g?b:c(N())}function h(){var e=N(),n=f(e);if(v=arguments,y=this,_=e,n){if(void 0===g)return i(_);if(S)return g=setTimeout(u,t),o(_)}return void 0===g&&(g=setTimeout(u,t)),b}var v,y,m,b,g,_,j=0,T=!1,S=!1,L=!0;if("function"!=typeof e)throw new TypeError(s);return t=l(t)||0,r(n)&&(T=!!n.leading,S="maxWait"in n,m=S?w(l(n.maxWait)||0,t):m,L="trailing"in n?!!n.trailing:L),h.cancel=d,h.flush=p,h}function o(e,t,o){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return r(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:i,maxWait:t,trailing:a})}function r(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==typeof e}function a(e){return"symbol"==typeof e||i(e)&&_.call(e)==u}function l(e){if("number"==typeof e)return e;if(a(e))return f;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var n=p.test(e);return n||h.test(e)?v(e.slice(2),n?2:8):d.test(e)?f:+e}var s="Expected a function",f=NaN,u="[object Symbol]",c=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,h=/^0o[0-7]+$/i,v=parseInt,y="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,b=y||m||Function("return this")(),g=Object.prototype,_=g.toString,w=Math.max,O=Math.min,N=function(){return b.Date.now()};e.exports=o}).call(t,n(38))},368:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),f=o(s),u=n(4),c=o(u),d=n(23),p=n(365),h=n(366),v=o(h),y=n(367),m=o(y),b=n(371),g=o(b),_=n(370),w=o(_),O=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.lazyLoadHandler=n.lazyLoadHandler.bind(n),e.throttle>0&&(e.debounce?n.lazyLoadHandler=(0,v.default)(n.lazyLoadHandler,e.throttle):n.lazyLoadHandler=(0,m.default)(n.lazyLoadHandler,e.throttle)),n.state={visible:!1},n}return a(t,e),l(t,[{key:"componentDidMount",value:function(){this._mounted=!0;var e=this.getEventNode();this.lazyLoadHandler(),this.lazyLoadHandler.flush&&this.lazyLoadHandler.flush(),(0,p.add)(window,"resize",this.lazyLoadHandler),(0,p.add)(e,"scroll",this.lazyLoadHandler)}},{key:"componentWillReceiveProps",value:function(){this.state.visible||this.lazyLoadHandler()}},{key:"shouldComponentUpdate",value:function(e,t){return t.visible}},{key:"componentWillUnmount",value:function(){this._mounted=!1,this.lazyLoadHandler.cancel&&this.lazyLoadHandler.cancel(),this.detachListeners()}},{key:"getEventNode",value:function(){return(0,g.default)((0,d.findDOMNode)(this))}},{key:"getOffset",value:function(){var e=this.props,t=e.offset,n=e.offsetVertical,o=e.offsetHorizontal,r=e.offsetTop,i=e.offsetBottom,a=e.offsetLeft,l=e.offsetRight,s=e.threshold,f=s||t,u=n||f,c=o||f;return{top:r||u,bottom:i||u,left:a||c,right:l||c}}},{key:"lazyLoadHandler",value:function(){if(this._mounted){var e=this.getOffset(),t=(0,d.findDOMNode)(this),n=this.getEventNode();if((0,w.default)(t,n,e)){var o=this.props.onContentVisible;this.setState({visible:!0},function(){o&&o()}),this.detachListeners()}}}},{key:"detachListeners",value:function(){var e=this.getEventNode();(0,p.remove)(window,"resize",this.lazyLoadHandler),(0,p.remove)(e,"scroll",this.lazyLoadHandler)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,o=e.height,r=e.width,i=this.state.visible,a={height:o,width:r},l="LazyLoad"+(i?" is-visible":"")+(n?" "+n:"");return f.default.createElement(this.props.elementType,{className:l,style:a},i&&s.Children.only(t))}}]),t}(s.Component);t.default=O,O.propTypes={children:c.default.node.isRequired,className:c.default.string,debounce:c.default.bool,elementType:c.default.string,height:c.default.oneOfType([c.default.string,c.default.number]),offset:c.default.number,offsetBottom:c.default.number,offsetHorizontal:c.default.number,offsetLeft:c.default.number,offsetRight:c.default.number,offsetTop:c.default.number,offsetVertical:c.default.number,threshold:c.default.number,throttle:c.default.number,width:c.default.oneOfType([c.default.string,c.default.number]),onContentVisible:c.default.func},O.defaultProps={elementType:"div",debounce:!0,offset:0,offsetBottom:0,offsetHorizontal:0,offsetLeft:0,offsetRight:0,offsetTop:0,offsetVertical:0,throttle:250}},369:function(e,t,n){"use strict";function o(e){var t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},370:function(e,t,n){"use strict";function o(e,t,n){if(a(e))return!1;var o=void 0,r=void 0,l=void 0,s=void 0;if(void 0===t||t===window)o=window.pageYOffset,l=window.pageXOffset,r=o+window.innerHeight,s=l+window.innerWidth;else{var f=(0,i.default)(t);o=f.top,l=f.left,r=o+t.offsetHeight,s=l+t.offsetWidth}var u=(0,i.default)(e);return o<=u.top+e.offsetHeight+n.top&&r>=u.top-n.bottom&&l<=u.left+e.offsetWidth+n.left&&s>=u.left-n.right}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(369),i=function(e){return e&&e.__esModule?e:{default:e}}(r),a=function(e){return null===e.offsetParent}},371:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},r=function(e){return o(e,"overflow")+o(e,"overflow-y")+o(e,"overflow-x")},i=function(e){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(r(t)))return t;t=t.parentNode}return window};t.default=i},376:function(e,t,n){"use strict";var o=n(1),r=(n.n(o),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var s=Array(a),f=0;f<a;f++)s[f]=arguments[f+3];n.children=s}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}()),i=function(){return r("section",{className:"loading"},void 0,r("div",{className:"loading__display"},void 0,r("h1",{className:"loading__display__header"},void 0,"loading"),r("span",{className:"loading__display__ball"}),r("span",{className:"loading__display__ball"}),r("span",{className:"loading__display__ball"})))};t.a=i},382:function(e,t,n){"use strict";var o=n(1),r=(n.n(o),n(363)),i=n(348),a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var s=Array(a),f=0;f<a;f++)s[f]=arguments[f+3];n.children=s}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),l=function(e){return a("section",{className:"blog"},void 0,a("article",{className:"blog__post"},void 0,a("h1",{className:"blog__post__title"},void 0,e.article.title),a("p",{className:"blog__post__lead"},void 0,e.article.lead.split("_")),"SUCCES"===e.images.imageLoaded?a(r.a,{className:"blog__post",src:e.images.images.fields.file.url,alt:"test"}):null,a("h2",{className:"blog__post__subtitle"},void 0,e.article.firstParagraphTitle),a("p",{className:"blog__post__paragraph"},void 0,e.article.firstParagraph),a("h2",{className:"blog__post__subtitle"},void 0,e.article.secondParagraphTitle),a("p",{className:"blog__post__paragraph"},void 0,e.article.secondParagraph),a("h2",{className:"blog__post__subtitle"},void 0,e.article.thirdParagraphTitle),a("p",{className:"blog__post__paragraph"},void 0,e.article.thirdParagraph),a("div",{className:"blog__post__info"},void 0,a("h2",{className:"blog__post__info__date"},void 0,"Posted on: ",e.article.date.split("T")[0]),a("h2",{className:"blog__post__info__author"},void 0,e.article.author.sys.id))),a(i.a,{redirect:e.redirect.redirect,anchor:e.redirect.anchor,className:"blog"}))};t.a=l},385:function(e,t,n){"use strict";var o={header:{background:"home",heading:"Lorem ipsum dolor sit amet",caption:"Curabitur quis lorem vitae massa fermentum facilisis in sit amet magna",scroll:{to:"services",anchor:"about me"}},contact:{redirect:"/blog",anchor:"go back to blog"}};t.a=o}});