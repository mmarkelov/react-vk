(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(e,t,n){"use strict";n.r(t);var o=n(2),s=n.n(o),r=n(356);t.default=(()=>s.a.createElement("div",{className:"App-content"},s.a.createElement("h2",null,"Contact Us Component"),s.a.createElement("h4",null,"To use Contact Us Widget:"),s.a.createElement("pre",{style:{width:"60%"}},"\nimport VK, {ContactUs} from 'react-vk';\n\nconst Contact = () => {\n\treturn (\n\t    <VK apiId={your_api_id}>\n                <ContactUs ownerId={20003922} />\n            </VK>\n\t)\n};"),s.a.createElement("h4",null,"Result:"),s.a.createElement(r.p,{apiId:6247321},s.a.createElement(r.g,{ownerId:20003922})),s.a.createElement("h5",null,"More info you can find on"," ",s.a.createElement("b",null,s.a.createElement("a",{href:"https://vk.com/dev/widget_contact_us"},"VK API")))))},353:function(e,t,n){e.exports=n(354)()},354:function(e,t,n){"use strict";var o=n(355);function s(){}e.exports=function(){function e(e,t,n,s,r,i){if(i!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=s,n.PropTypes=n,n}},355:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},356:function(e,t,n){"use strict";var o=n(2),s=n.n(o),r=n(353),i=n.n(r),a=s.a.createContext(null);class u{constructor(e,t={}){this.apiId=e,this.options=t,this.promise=null,this.load()}init(){const{apiId:e,options:{onlyWidgets:t}}=this;e&&window.VK.init({apiId:e,onlyWidgets:t})}load(){const{options:{version:e}}=this;return this.promise?this.promise:(this.promise=new Promise(t=>{window.VK&&window.VK.init?(this.init(),t(window.VK)):window.vkAsyncInit=(()=>{this.init(),t(window.VK)});const n=`https://vk.com/js/api/openapi.js?${e}`;if(!document.getElementById("vk-openapi")){const e=document.createElement("script");e.type="text/javascript",e.id="vk-openapi",e.src=n,e.async=!0,document.head.appendChild(e)}}),this.promise)}}const d="undefined"!=typeof window&&window.document&&window.document.createElement,c=({onApiAvailable:e,apiId:t,options:n,children:r})=>{const[i,c]=Object(o.useState)(null);return Object(o.useEffect)(()=>{d&&new u(t,n).load().then(t=>{e(t),c(t)})},[]),i?s.a.createElement(a.Provider,{value:{vk:i}},r):null};c.propTypes={apiId:i.a.number,options:i.a.shape({version:i.a.oneOfType([i.a.number,i.a.string]),onlyWidgets:i.a.bool}),onApiAvailable:i.a.func},c.defaultProps={apiId:null,options:{version:160,onlyWidgets:!0},onApiAvailable:()=>{}};var p=c;const l=({elementId:e,options:t,groupId:n,onAllow:r,onDeny:i})=>{const{vk:u}=Object(o.useContext)(a);return Object(o.useEffect)(()=>(u.Widgets.AllowMessagesFromCommunity(e,t,n),u.Observer.subscribe("widgets.allowMessagesFromCommunity.allowed",e=>r(e)),u.Observer.subscribe("widgets.allowMessagesFromCommunity.denied",e=>i(e)),()=>u.Observer.unsubscribe("widgets.allowMessagesFromCommunity.allowed")),[]),s.a.createElement("div",{id:e})};l.propTypes={elementId:i.a.string,options:i.a.shape({height:i.a.number}),groupId:i.a.number.isRequired,onAllow:i.a.func,onDeny:i.a.func},l.defaultProps={elementId:"vk_allow_messages_from_community",options:{height:24},onAllow:()=>{},onDeny:()=>{}};var m=l;const b=({elementId:e,appId:t,options:n})=>{const{vk:r}=Object(o.useContext)(a);return Object(o.useEffect)(()=>{r.Widgets.App(e,t,n)},[]),s.a.createElement("div",{id:e})};b.propTypes={elementId:i.a.string,appId:i.a.number.isRequired,options:i.a.shape({mode:i.a.oneOf([1,2,3]),height:i.a.number})},b.defaultProps={elementId:"vk_app",options:{mode:1}};var g=b;function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const h=({elementId:e,options:t})=>{const{vk:n}=Object(o.useContext)(a);return Object(o.useEffect)(()=>{const o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){f(e,t,n[t])})}return e}({},t);o.onAuth=((e,n,o,s,r,i)=>t.onAuth(e,n,o,s,r,i)),n.Widgets.Auth(e,o)},[]),s.a.createElement("div",{id:e})};h.propTypes={elementId:i.a.string,options:i.a.shape({width:i.a.oneOfType([i.a.string,i.a.number]),authUrl:i.a.string,onAuth:i.a.func})},h.defaultProps={elementId:"vk_auth",options:{width:300,onAuth:()=>{}}};var v=h;const w=({elementId:e,options:t,pageId:n,onNewComment:r,onDeleteComment:i})=>{const{vk:u}=Object(o.useContext)(a);return Object(o.useEffect)(()=>(u.Widgets.Comments(e,t,n),u.Observer.subscribe("widgets.comments.new_comment",(e,t,n,o)=>r(e,t,n,o)),u.Observer.subscribe("widgets.comments.delete_comment",i),()=>{u.Observer.unsubscribe("widgets.comments.new_comment"),u.Observer.unsubscribe("widgets.comments.delete_comment")}),[]),s.a.createElement("div",{id:e})};w.propTypes={elementId:i.a.string,options:i.a.shape({width:i.a.oneOfType([i.a.string,i.a.number]),height:i.a.oneOfType([i.a.string,i.a.number]),limit:i.a.number,attach:i.a.oneOf([!1,"graffiti","photo","audio","video","link","*"]),autoPublish:i.a.oneOf([0,1]),mini:i.a.oneOf([0,1,"auto"]),norealtime:i.a.oneOf([0,1]),pageUrl:i.a.string}),pageId:i.a.string,onNewComment:i.a.func,onDeleteComment:i.a.func},w.defaultProps={elementId:"vk_comments",options:{height:0,limit:10,attach:"*",autoPublish:0,mini:"auto",norealtime:0},pageId:null,onNewComment:()=>{},onDeleteComment:()=>{}};var O=w;const I=({elementId:e,options:t})=>{const{vk:n}=Object(o.useContext)(a);return Object(o.useEffect)(()=>{n.Widgets.CommentsBrowse(e,t)},[]),s.a.createElement("div",{id:e})};I.propTypes={elementId:i.a.string,options:i.a.shape({width:i.a.oneOfType([i.a.string,i.a.number]),height:i.a.oneOfType([i.a.string,i.a.number]),limit:i.a.number,mini:i.a.oneOf([0,1,"auto"]),norealtime:i.a.oneOf([0,1])})},I.defaultProps={elementId:"vk_comments_browse",options:{height:0,limit:10,mini:"auto",norealtime:0}};const y=({elementId:e,groupId:t,options:n,onMount:r})=>{const{vk:i}=Object(o.useContext)(a);return Object(o.useEffect)(()=>{const o=i.Widgets.CommunityMessages(e,t,n);r(o,e)},[]),s.a.createElement("div",{id:e})};y.propTypes={elementId:i.a.string,groupId:i.a.number.isRequired,options:i.a.shape({onCanNotWrite:i.a.func,welcomeScreen:i.a.oneOf([0,1]),expandTimeout:i.a.number,expanded:i.a.number,widgetPosition:i.a.oneOf(["left","right"]),buttonType:i.a.oneOf(["no_button","blue_circle"]),disableButtonTooltip:i.a.oneOf([0,1]),tooltipButtonText:i.a.string,disableNewMessagesSound:i.a.number,disableExpandChatSound:i.a.number,disableTitleChange:i.a.number}),onMount:i.a.func},y.defaultProps={elementId:"vk_community_messages",options:{onCanNotWrite:()=>{},welcomeScreen:1,expandTimeout:0,expanded:0,widgetPosition:"right",buttonType:"blue_circle",disableButtonTooltip:0},onMount:()=>{}};var k=y;const E=({elementId:e,options:t,ownerId:n})=>{const{vk:r}=Object(o.useContext)(a);return Object(o.useEffect)(()=>{r.Widgets.ContactUs(e,t,-n)},[]),s.a.createElement("div",{id:e})};E.propTypes={elementId:i.a.string,options:i.a.shape({text:i.a.string,height:i.a.number}),ownerId:i.a.number.isRequired},E.defaultProps={elementId:"vk_contact_us",options:{height:24}};var j=E;const _=({elementId:e,options:t,groupId:n,onJoin:r,onLeave:i})=>{const{vk:u}=Object(o.useContext)(a);return Object(o.useEffect)(()=>(u.Widgets.Group(e,t,n),u.Observer.subscribe("widgets.groups.joined",r),u.Observer.subscribe("widgets.groups.leaved",i),()=>{u.Observer.unsubscribe("widgets.groups.joined"),u.Observer.unsubscribe("widgets.groups.leaved")}),[]),s.a.createElement("div",{id:e})};_.propTypes={elementId:i.a.string,groupId:i.a.number.isRequired,options:i.a.shape({height:i.a.number,mode:i.a.oneOfType([i.a.number,i.a.string]),no_cover:i.a.oneOf([0,1]),wide:i.a.oneOf([0,1]),color1:i.a.string,color2:i.a.string,color3:i.a.string,pageImage:i.a.string}),onJoin:i.a.func,onLeave:i.a.func},_.defaultProps={elementId:"vk_groups",options:{width:"auto",mode:3,no_cover:1,wide:1},onJoin:()=>{},onLeave:()=>{}};var T=_;const C=({elementId:e,options:t,pageId:n,onLike:r,onUnlike:i,onShare:u,onUnshare:d})=>{const{vk:c}=Object(o.useContext)(a);return Object(o.useEffect)(()=>(n?c.Widgets.Like(e,t,n):c.Widgets.Like(e,t),c.Observer.subscribe("widgets.like.liked",e=>r(e)),c.Observer.subscribe("widgets.like.unliked",e=>i(e)),c.Observer.subscribe("widgets.like.shared",e=>u(e)),c.Observer.subscribe("widgets.like.unshared",e=>d(e)),()=>{c.Observer.unsubscribe("widgets.like.liked"),c.Observer.unsubscribe("widgets.like.unliked"),c.Observer.unsubscribe("widgets.like.shared"),c.Observer.unsubscribe("widgets.like.unshared")}),[]),s.a.createElement("div",{id:e})};C.propTypes={elementId:i.a.string,options:i.a.shape({type:i.a.oneOf(["full","button","mini","vertical"]),width:i.a.number,height:i.a.number,verb:i.a.oneOf([0,1]),pageUrl:i.a.string,pageTitle:i.a.string,pageImage:i.a.string}),pageId:i.a.string,onLike:i.a.func,onUnlike:i.a.func,onShare:i.a.func,onUnshare:i.a.func},C.defaultProps={elementId:"vk_like",options:{type:"full",width:350,height:22,verb:0},pageId:null,onLike:()=>{},onUnlike:()=>{},onShare:()=>{},onUnshare:()=>{}};var P=C;const x=({elementId:e,ownerId:t,playlistId:n,hash:r,options:i})=>{const{vk:u}=Object(o.useContext)(a);return Object(o.useEffect)(()=>{u.Widgets.Playlist(e,-t,n,r,i)},[]),s.a.createElement("div",{id:e})};x.propTypes={elementId:i.a.string,ownerId:i.a.number.isRequired,playlistId:i.a.number.isRequired,hash:i.a.string.isRequired,options:i.a.shape({width:i.a.number})},x.defaultProps={elementId:"vk_playlist",options:{}};var W=x;const R=({elementId:e,options:t,pollId:n})=>{const{vk:r}=Object(o.useContext)(a);return Object(o.useEffect)(()=>{r.Widgets.Poll(e,t,n)},[]),s.a.createElement("div",{id:e})};R.propTypes={elementId:i.a.string,options:i.a.shape({width:i.a.number,pageUrl:i.a.string}),pollId:i.a.string.isRequired},R.defaultProps={elementId:"vk_poll",options:{height:24}};var U=R;const A=({elementId:e,ownerId:t,postId:n,hash:r,options:i})=>{const{vk:u}=Object(o.useContext)(a);return Object(o.useEffect)(()=>{u.Widgets.Post(e,t,n,r,i)},[]),s.a.createElement("div",{id:e})};A.propTypes={elementId:i.a.string,ownerId:i.a.number.isRequired,postId:i.a.number.isRequired,hash:i.a.string.isRequired,options:i.a.shape({width:i.a.number})},A.defaultProps={elementId:"vk_post",options:{}};var S=A;const q=({elementId:e,options:t})=>{const{vk:n}=Object(o.useContext)(a);return Object(o.useEffect)(()=>{n.Widgets.Recommended(e,t)},[]),s.a.createElement("div",{id:e})};q.propTypes={elementId:i.a.string,options:i.a.shape({limit:i.a.number,max:i.a.number,period:i.a.string,verb:i.a.number,sort:i.a.string,target:i.a.string})},q.defaultProps={elementId:"vk_recommend",options:{limit:5,max:20,period:"week",sort:"friend_like",target:"parent"}};var L=q;const V=({shareOptions:e,buttonOptions:t})=>{const n=s.a.createRef();return Object(o.useEffect)(()=>{if(d)if(document.getElementById("vk-share"))window.VK.Share&&(n.current.innerHTML=window.VK.Share.button(e,t));else{const o=document.createElement("script");o.type="text/javascript",o.charset="windows-1251",o.id="vk-share",o.src="https://vk.com/js/api/share.js?93",o.async=!0,document.head.appendChild(o),o.addEventListener("load",()=>{n.current.innerHTML=window.VK.Share.button(e,t)})}},[]),s.a.createElement("div",{ref:n})};V.propTypes={shareOptions:i.a.shape({url:i.a.string,title:i.a.string,image:i.a.string,noparse:i.a.bool,no_vk_links:i.a.oneOf([0,1])}),buttonOptions:i.a.shape({type:i.a.oneOf(["round","round_nocount","button","button_nocount","link","link_noicon","custom"]),text:i.a.string})},V.defaultProps={shareOptions:null,buttonOptions:null};var K=V;const M=({elementId:e,options:t,ownerId:n,onSubscribe:r,onUnsubscribe:i})=>{const{vk:u}=Object(o.useContext)(a);return Object(o.useEffect)(()=>(u.Widgets.Subscribe(e,t,n),u.Observer.subscribe("widgets.subscribed",r),u.Observer.subscribe("widgets.unsubscribed",i),()=>{u.Observer.unsubscribe("widgets.subscribed"),u.Observer.unsubscribe("widgets.unsubscribed")}),[]),s.a.createElement("div",{id:e})};M.propTypes={elementId:i.a.string,options:i.a.shape({mode:i.a.number,soft:i.a.number}),ownerId:i.a.number.isRequired,onSubscribe:i.a.func,onUnsubscribe:i.a.func},M.defaultProps={elementId:"vk_subscribe",options:{mode:0,soft:0},onSubscribe:()=>{},onUnsubscribe:()=>{}};var D=M;const N=({elementId:e,articleUrl:t})=>{const{vk:n}=Object(o.useContext)(a);return Object(o.useEffect)(()=>{n.Widgets.Article(e,t)},[]),s.a.createElement("div",{id:e})};N.propTypes={elementId:i.a.string,articleUrl:i.a.string.isRequired},N.defaultProps={elementId:"vk_article"};var B=N;n.d(t,"a",function(){return m}),n.d(t,"c",function(){return B}),n.d(t,"b",function(){return g}),n.d(t,"d",function(){return v}),n.d(t,"e",function(){return O}),n.d(t,"f",function(){return k}),n.d(t,"g",function(){return j}),n.d(t,"h",function(){return T}),n.d(t,"i",function(){return P}),n.d(t,"j",function(){return W}),n.d(t,"k",function(){return U}),n.d(t,"l",function(){return S}),n.d(t,"m",function(){return L}),n.d(t,"o",function(){return D}),n.d(t,"n",function(){return K});t.p=p}}]);
//# sourceMappingURL=7.caf64dfd.js.map