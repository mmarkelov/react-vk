webpackJsonp([1],{100:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.CommentsBrowse=void 0;var s=n(0),c=o(s),p=n(2);o(p);(t.CommentsBrowse=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return u(t,e),t.prototype.mount=function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options;t.Widgets.CommentsBrowse(n,o)},t.prototype.componentDidMount=function(){this.mount()},t.prototype.render=function(){var e=this.props.elementId;return c.default.createElement("div",{id:e})},t}(c.default.Component)).defaultProps={elementId:"vk_comments_browse",options:{height:0,limit:10,mini:"auto",norealtime:0}}},101:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.CommunityMessages=void 0;var s=n(0),c=o(s),p=n(2);o(p);(t.CommunityMessages=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return u(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.vk,n=e.elementId,o=e.groupId,r=e.options;(0,e.onMount)(t.Widgets.CommunityMessages(n,o,r),n)},t.prototype.render=function(){var e=this.props.elementId;return c.default.createElement("div",{id:e})},t}(c.default.Component)).defaultProps={elementId:"vk_community_messages",options:{onCanNotWrite:function(e){},welcomeScreen:1,expandTimeout:0,expanded:0,widgetPosition:"right",buttonType:"blue_circle",disableButtonTooltip:0},onMount:function(){}}},102:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.ContactUs=void 0;var s=n(0),c=o(s),p=n(2);o(p);(t.ContactUs=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return u(t,e),t.prototype.mount=function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options,r=e.ownerId;t.Widgets.ContactUs(n,o,-r)},t.prototype.componentDidMount=function(){this.mount()},t.prototype.render=function(){var e=this.props.elementId;return c.default.createElement("div",{id:e})},t}(c.default.Component)).defaultProps={elementId:"vk_contact_us",options:{height:24}}},103:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Group=void 0;var s=n(0),c=o(s),p=n(2);o(p);(t.Group=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return u(t,e),t.prototype.mount=function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options,r=e.groupId,i=e.onJoin,u=e.onLeave;t.Widgets.Group(n,o,r),t.Observer.subscribe("widgets.groups.joined",i),t.Observer.subscribe("widgets.groups.leaved",u)},t.prototype.componentDidMount=function(){this.mount()},t.prototype.render=function(){var e=this.props.elementId;return c.default.createElement("div",{id:e})},t}(c.default.Component)).defaultProps={elementId:"vk_groups",options:{width:"auto",mode:3,no_cover:1,wide:1},onJoin:function(){},onLeave:function(){}}},104:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Like=void 0;var s=n(0),c=o(s),p=n(2);o(p);(t.Like=function(e){function t(){var n,o,u;r(this,t);for(var s=arguments.length,c=Array(s),p=0;p<s;p++)c[p]=arguments[p];return n=o=i(this,e.call.apply(e,[this].concat(c))),o._mounted=!1,u=n,i(o,u)}return u(t,e),t.prototype.mount=function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options,r=e.pageId,i=e.onLike,u=e.onUnlike,s=e.onShare,c=e.onUnshare;this._mounted&&t.Widgets.Like(n,o,r),t.Observer.subscribe("widgets.like.liked",function(e){return i(e)}),t.Observer.subscribe("widgets.like.unliked",function(e){return u(e)}),t.Observer.subscribe("widgets.like.shared",function(e){return s(e)}),t.Observer.subscribe("widgets.like.unshared",function(e){return c(e)})},t.prototype.componentDidMount=function(){this._mounted=!0,this.mount()},t.prototype.componentWillUnmount=function(){this._mounted=!1,this.props.vk.Observer.unsubscribe(),this.div.remove()},t.prototype.render=function(){var e=this,t=this.props.elementId;return c.default.createElement("div",{id:t,ref:function(t){e.div=t}})},t}(c.default.Component)).defaultProps={elementId:"vk_like",options:{type:"full",width:350,height:22,verb:0},onLike:function(){},onUnlike:function(){},onShare:function(){},onUnshare:function(){}}},105:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Playlist=void 0;var s=n(0),c=o(s),p=n(2);o(p);(t.Playlist=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return u(t,e),t.prototype.mount=function(){var e=this.props,t=e.vk,n=e.elementId,o=e.ownerId,r=e.playlistId,i=e.hash,u=e.options;t.Widgets.Playlist(n,-o,r,i,u)},t.prototype.componentDidMount=function(){this.mount()},t.prototype.render=function(){var e=this.props.elementId;return c.default.createElement("div",{id:e})},t}(c.default.Component)).defaultProps={elementId:"vk_playlist"}},106:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Poll=void 0;var s=n(0),c=o(s),p=n(2);o(p);(t.Poll=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return u(t,e),t.prototype.mount=function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options,r=e.pollId;t.Widgets.Poll(n,o,r)},t.prototype.componentDidMount=function(){this.mount()},t.prototype.render=function(){var e=this.props.elementId;return c.default.createElement("div",{id:e})},t}(c.default.Component)).defaultProps={elementId:"vk_poll",options:{height:24}}},107:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Post=void 0;var s=n(0),c=o(s),p=n(2);o(p);(t.Post=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return u(t,e),t.prototype.mount=function(){var e=this.props,t=e.vk,n=e.elementId,o=e.ownerId,r=e.postId,i=e.hash,u=e.options;t.Widgets.Post(n,o,r,i,u)},t.prototype.componentDidMount=function(){this.mount()},t.prototype.render=function(){var e=this.props.elementId;return c.default.createElement("div",{id:e})},t}(c.default.Component)).defaultProps={elementId:"vk_post"}},108:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Recommended=void 0;var s=n(0),c=o(s),p=n(2);o(p);(t.Recommended=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return u(t,e),t.prototype.mount=function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options;t.Widgets.Recommended(n,o)},t.prototype.componentDidMount=function(){this.mount()},t.prototype.render=function(){var e=this.props.elementId;return c.default.createElement("div",{id:e})},t}(c.default.Component)).defaultProps={elementId:"vk_recommend",options:{limit:5,max:20,period:"week",sort:"friend_like",target:"parent"}}},109:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Subscribe=void 0;var s=n(0),c=o(s),p=n(2);o(p);(t.Subscribe=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return u(t,e),t.prototype.mount=function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options,r=e.ownerId,i=e.onSubscribe,u=e.onUnsubscribe;t.Widgets.Subscribe(n,o,r),t.Observer.subscribe("widgets.subscribed",i),t.Observer.subscribe("widgets.unsubscribed",u)},t.prototype.componentDidMount=function(){this.mount()},t.prototype.render=function(){var e=this.props.elementId;return c.default.createElement("div",{id:e})},t}(c.default.Component)).defaultProps={elementId:"vk_subscribe",options:{mode:0,soft:0},onSubscribe:function(){},onUnsubscribe:function(){}}},110:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.VK=void 0;var s=n(0),c=o(s),p=n(2);o(p);(t.VK=function(e){function t(){var n,o,u;r(this,t);for(var s=arguments.length,c=Array(s),p=0;p<s;p++)c[p]=arguments[p];return n=o=i(this,e.call.apply(e,[this].concat(c))),o.state={vk:null},o._mounted=!0,o.fetchScript=function(e){return new Promise(function(t,n){var o=document.createElement("script");o.onload=t,o.onerror=n,o.type="text/javascript",o.src=e,o.async=!0,o.id="vk-jssdk",document.getElementsByTagName("head")[0].appendChild(o)})},u=n,i(o,u)}return u(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props.onApiAvailable;document.getElementById("vk-jssdk")&&this._mounted&&this.setState({vk:window.VK}),"undefined"!=typeof window&&window.document&&window.document.createElement&&this.init().then(function(n){t(n),e._mounted&&e.setState({vk:n})}).catch(function(e){throw new Error(e)})},t.prototype.init=function(){var e=this;return this.loadingPromise?this.loadingPromise:(this.loadingPromise=new Promise(function(t,n){var o=e.props,r=o.apiId,i=o.options;if(!r)throw new Error("You need to set apiId");window.vkAsyncInit=function(){window.VK.init({apiId:r}),t(window.VK)},document.getElementById("vk-jssdk")||e.fetchScript("https://vk.com/js/api/openapi.js?"+i.version).catch(n)}),this.loadingPromise)},t.prototype.componentWillUnmount=function(){this._mounted=!1},t.prototype.render=function(){var e=this.state.vk,t=c.default.Children.map(this.props.children,function(t){return c.default.cloneElement(t,{vk:e})});return e?c.default.createElement("div",null,t):null},t}(c.default.Component)).defaultProps={options:{version:150},onApiAvailable:function(){}}},111:function(e,t,n){"use strict";t.__esModule=!0;var o=n(110);Object.defineProperty(t,"VK",{enumerable:!0,get:function(){return o.VK}});var r=n(98);Object.defineProperty(t,"Auth",{enumerable:!0,get:function(){return r.Auth}});var i=n(99);Object.defineProperty(t,"Comments",{enumerable:!0,get:function(){return i.Comments}});var u=n(100);Object.defineProperty(t,"CommentsBrowse",{enumerable:!0,get:function(){return u.CommentsBrowse}});var s=n(101);Object.defineProperty(t,"CommunityMessages",{enumerable:!0,get:function(){return s.CommunityMessages}});var c=n(104);Object.defineProperty(t,"Like",{enumerable:!0,get:function(){return c.Like}});var p=n(103);Object.defineProperty(t,"Group",{enumerable:!0,get:function(){return p.Group}});var a=n(105);Object.defineProperty(t,"Playlist",{enumerable:!0,get:function(){return a.Playlist}});var l=n(102);Object.defineProperty(t,"ContactUs",{enumerable:!0,get:function(){return l.ContactUs}});var f=n(109);Object.defineProperty(t,"Subscribe",{enumerable:!0,get:function(){return f.Subscribe}});var d=n(108);Object.defineProperty(t,"Recommended",{enumerable:!0,get:function(){return d.Recommended}});var m=n(106);Object.defineProperty(t,"Poll",{enumerable:!0,get:function(){return m.Poll}});var b=n(107);Object.defineProperty(t,"Post",{enumerable:!0,get:function(){return b.Post}});var h=n(96);Object.defineProperty(t,"AllowMessagesFromCommunity",{enumerable:!0,get:function(){return h.AllowMessagesFromCommunity}});var y=n(97);Object.defineProperty(t,"Application",{enumerable:!0,get:function(){return y.Application}})},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n(111),u=function(){var e=function(){alert("Thank you!")},t=function(){console.log(":(")};return r.default.createElement("div",{className:"App-content"},r.default.createElement("h2",null,"Subscribe to Author Component"),r.default.createElement("h4",null,"To use Subscribe to Author Widget:"),r.default.createElement("pre",{style:{width:"65%"}},"\nimport {VK, Subscribe} from 'react-vk';\n\n\nconst SubscribeToAuthor = () => {\n    const handleSubscribe = () => {\n        alert('Thank you!');\n    };\n\n    const handleUnsubscribe = () => {\n        console.log(':(');\n    };\n\n    return (\n        <VK apiId={your_api_id}>\n            <Subscribe\n                ownerId={1}\n                onSubscribe={this.handleSubscribe}\n                onUnsubscribe={this.handleUnsubscribe}\n            />\n        </VK>\n    )\n};"),r.default.createElement("h4",null,"Result:"),r.default.createElement(i.VK,{apiId:6247321},r.default.createElement(i.Subscribe,{ownerId:1,onSubscribe:e,onUnsubscribe:t})),r.default.createElement("h5",null,"More info you can find on"," ",r.default.createElement("b",null,r.default.createElement("a",{href:"https://vk.com/dev/widget_subscribe"},"VK API"))))};t.default=u},96:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.AllowMessagesFromCommunity=void 0;var s=n(0),c=o(s),p=n(2);o(p);(t.AllowMessagesFromCommunity=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return u(t,e),t.prototype.mount=function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options,r=e.groupId,i=e.onAllow,u=e.onDeny;t.Widgets.AllowMessagesFromCommunity(n,o,r),t.Observer.subscribe("widgets.allowMessagesFromCommunity.allowed",function(e){return i(e)}),t.Observer.subscribe("widgets.allowMessagesFromCommunity.denied",function(e){return u(e)})},t.prototype.componentDidMount=function(){this.mount()},t.prototype.render=function(){var e=this.props.elementId;return c.default.createElement("div",{id:e})},t}(c.default.Component)).defaultProps={elementId:"vk_send_message",options:{height:24},onAllow:function(){},onDeny:function(){}}},97:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Application=void 0;var s=n(0),c=o(s),p=n(2);o(p);(t.Application=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return u(t,e),t.prototype.mount=function(){var e=this.props,t=e.vk,n=e.elementId,o=e.appId,r=e.options;t.Widgets.App(n,o,r)},t.prototype.componentDidMount=function(){this.mount()},t.prototype.render=function(){var e=this.props.elementId;return c.default.createElement("div",{id:e})},t}(c.default.Component)).defaultProps={elementId:"vk_app"}},98:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Auth=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n(0),p=o(c),a=n(2);o(a);(t.Auth=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return u(t,e),t.prototype.mount=function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options,r=s({},o);r.onAuth=function(e,t,n,r,i,u){return o.onAuth(e,t,n,r,i,u)},t.Widgets.Auth(n,r)},t.prototype.componentDidMount=function(){this.mount()},t.prototype.render=function(){var e=this.props.elementId;return p.default.createElement("div",{id:e})},t}(p.default.Component)).defaultProps={elementId:"vk_auth",options:{width:300,onAuth:function(){}}}},99:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Comments=void 0;var s=n(0),c=o(s),p=n(2);o(p);(t.Comments=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return u(t,e),t.prototype.mount=function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options,r=e.pageId,i=e.onNewComment,u=e.onDeleteComment;t.Widgets.Comments(n,o,r),t.Observer.subscribe("widgets.comments.new_comment",function(e,t,n,o){return i(e,t,n,o)}),t.Observer.subscribe("widgets.comments.delete_comment",u)},t.prototype.componentDidMount=function(){this.mount()},t.prototype.render=function(){var e=this.props.elementId;return c.default.createElement("div",{id:e})},t}(c.default.Component)).defaultProps={elementId:"vk_comments",options:{height:0,limit:10,attach:"*",autoPublish:0,mini:"auto",norealtime:0},onNewComment:function(){},onDeleteComment:function(){}}}});