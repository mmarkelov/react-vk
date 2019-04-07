(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,n){"use strict";n.r(t);var o=n(2),s=n.n(o),i=n(356);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=class extends s.a.Component{constructor(...e){super(...e),r(this,"state",{widget:null,id:null}),r(this,"handleClick",()=>{this.state.widget.destroy(this.state.id)})}render(){return s.a.createElement("div",{className:"App-content"},s.a.createElement("h2",null,"Community Messages Component"),s.a.createElement("h4",null,"To use Community Messages Widget:"),s.a.createElement("pre",{style:{width:"70%"}},"\nimport VK, {CommunityMessages} from 'react-vk';\n\nclass Messages extends React.Component {\n\n    state = {\n        widget: null,\n        id: null,\n    };\n\n    handleClick = () => {\n        this.state.widget.destroy(this.state.id);\n    };\n\n    render() {\n        return (\n            <div>\n                <button onClick={this.handleClick}>\n                    Delete CommunityMessages\n                </button>\n                <VK>\n                  <CommunityMessages\n                    groupId={127607773}\n                    options={{onCanNotWrite: reason => console.log(reason)}}\n                    onMount={(widget, id) => {\n                        this.setState({ widget, id });\n                    }}\n                  />\n                </VK>\n            </div>\n        )\n    }\n};"),s.a.createElement("h4",null,"Result in right conner"),s.a.createElement("button",{onClick:this.handleClick},"Delete CommunityMessages"),s.a.createElement(i.p,null,s.a.createElement(i.f,{groupId:127607773,options:{onCanNotWrite:e=>console.log(e)},onMount:(e,t)=>{this.setState({widget:e,id:t})}})),s.a.createElement("h5",null,"More info you can find on"," ",s.a.createElement("b",null,s.a.createElement("a",{href:"https://vk.com/dev/widget_community_messages"},"VK API"))))}}},353:function(e,t,n){e.exports=n(354)()},354:function(e,t,n){"use strict";var o=n(355);function s(){}function i(){}i.resetWarningCache=s,e.exports=function(){function e(e,t,n,s,i,r){if(r!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:s};return n.PropTypes=n,n}},355:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},356:function(e,t,n){"use strict";var o=n(2),s=n.n(o),i=n(353),r=n.n(i),a=s.a.createContext(null);class u{constructor(e,t={}){this.apiId=e,this.options=t,this.promise=null,this.load()}init(){const{apiId:e,options:{onlyWidgets:t}}=this;e&&window.VK.init({apiId:e,onlyWidgets:t})}load(){const{options:{version:e}}=this;return this.promise?this.promise:(this.promise=new Promise(t=>{window.VK&&window.VK.init?(this.init(),t(window.VK)):window.vkAsyncInit=(()=>{this.init(),t(window.VK)});const n=`https://vk.com/js/api/openapi.js?${e}`;if(!document.getElementById("vk-openapi")){const e=document.createElement("script");e.type="text/javascript",e.id="vk-openapi",e.src=n,e.async=!0,document.head.appendChild(e)}}),this.promise)}}const d="undefined"!=typeof window&&window.document&&window.document.createElement,c=({onApiAvailable:e,apiId:t,options:n,children:i})=>{const[r,c]=Object(o.useState)(null);return Object(o.useEffect)(()=>{d&&new u(t,n).load().then(t=>{e(t),c(t)})},[]),r?s.a.createElement(a.Provider,{value:r},i):null};c.propTypes={apiId:r.a.number,options:r.a.shape({version:r.a.oneOfType([r.a.number,r.a.string]),onlyWidgets:r.a.bool}),onApiAvailable:r.a.func},c.defaultProps={apiId:null,options:{version:160,onlyWidgets:!0},onApiAvailable:()=>{}};var l=c;const p=({elementId:e,options:t,groupId:n,onAllow:i,onDeny:r})=>{const u=Object(o.useContext)(a);return Object(o.useEffect)(()=>(u.Widgets.AllowMessagesFromCommunity(e,t,n),u.Observer.subscribe("widgets.allowMessagesFromCommunity.allowed",e=>i(e)),u.Observer.subscribe("widgets.allowMessagesFromCommunity.denied",e=>r(e)),()=>u.Observer.unsubscribe("widgets.allowMessagesFromCommunity.allowed")),[]),s.a.createElement("div",{id:e})};p.propTypes={elementId:r.a.string,options:r.a.shape({height:r.a.number}),groupId:r.a.number.isRequired,onAllow:r.a.func,onDeny:r.a.func},p.defaultProps={elementId:"vk_allow_messages_from_community",options:{height:24},onAllow:()=>{},onDeny:()=>{}};var m=p;const b=({elementId:e,appId:t,options:n})=>{const i=Object(o.useContext)(a);return Object(o.useEffect)(()=>{i.Widgets.App(e,t,n)},[]),s.a.createElement("div",{id:e})};b.propTypes={elementId:r.a.string,appId:r.a.number.isRequired,options:r.a.shape({mode:r.a.oneOf([1,2,3]),height:r.a.number})},b.defaultProps={elementId:"vk_app",options:{mode:1}};var g=b;function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const h=({elementId:e,options:t})=>{const n=Object(o.useContext)(a);return Object(o.useEffect)(()=>{const o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){f(e,t,n[t])})}return e}({},t);o.onAuth=((e,n,o,s,i,r)=>t.onAuth(e,n,o,s,i,r)),n.Widgets.Auth(e,o)},[]),s.a.createElement("div",{id:e})};h.propTypes={elementId:r.a.string,options:r.a.shape({width:r.a.oneOfType([r.a.string,r.a.number]),authUrl:r.a.string,onAuth:r.a.func})},h.defaultProps={elementId:"vk_auth",options:{width:300,onAuth:()=>{}}};var v=h;const w=({elementId:e,options:t,pageId:n,onNewComment:i,onDeleteComment:r})=>{const u=Object(o.useContext)(a);return Object(o.useEffect)(()=>(u.Widgets.Comments(e,t,n),u.Observer.subscribe("widgets.comments.new_comment",(e,t,n,o)=>i(e,t,n,o)),u.Observer.subscribe("widgets.comments.delete_comment",r),()=>{u.Observer.unsubscribe("widgets.comments.new_comment"),u.Observer.unsubscribe("widgets.comments.delete_comment")}),[]),s.a.createElement("div",{id:e})};w.propTypes={elementId:r.a.string,options:r.a.shape({width:r.a.oneOfType([r.a.string,r.a.number]),height:r.a.oneOfType([r.a.string,r.a.number]),limit:r.a.number,attach:r.a.oneOf([!1,"graffiti","photo","audio","video","link","*"]),autoPublish:r.a.oneOf([0,1]),mini:r.a.oneOf([0,1,"auto"]),norealtime:r.a.oneOf([0,1]),pageUrl:r.a.string}),pageId:r.a.string,onNewComment:r.a.func,onDeleteComment:r.a.func},w.defaultProps={elementId:"vk_comments",options:{height:0,limit:10,attach:"*",autoPublish:0,mini:"auto",norealtime:0},pageId:null,onNewComment:()=>{},onDeleteComment:()=>{}};var O=w;const I=({elementId:e,options:t})=>{const n=Object(o.useContext)(a);return Object(o.useEffect)(()=>{n.Widgets.CommentsBrowse(e,t)},[]),s.a.createElement("div",{id:e})};I.propTypes={elementId:r.a.string,options:r.a.shape({width:r.a.oneOfType([r.a.string,r.a.number]),height:r.a.oneOfType([r.a.string,r.a.number]),limit:r.a.number,mini:r.a.oneOf([0,1,"auto"]),norealtime:r.a.oneOf([0,1])})},I.defaultProps={elementId:"vk_comments_browse",options:{height:0,limit:10,mini:"auto",norealtime:0}};const y=({elementId:e,groupId:t,options:n,onMount:i})=>{const r=Object(o.useContext)(a);return Object(o.useEffect)(()=>{const o=r.Widgets.CommunityMessages(e,t,n);i(o,e)},[]),s.a.createElement("div",{id:e})};y.propTypes={elementId:r.a.string,groupId:r.a.number.isRequired,options:r.a.shape({onCanNotWrite:r.a.func,welcomeScreen:r.a.oneOf([0,1]),expandTimeout:r.a.number,expanded:r.a.number,widgetPosition:r.a.oneOf(["left","right"]),buttonType:r.a.oneOf(["no_button","blue_circle"]),disableButtonTooltip:r.a.oneOf([0,1]),tooltipButtonText:r.a.string,disableNewMessagesSound:r.a.number,disableExpandChatSound:r.a.number,disableTitleChange:r.a.number}),onMount:r.a.func},y.defaultProps={elementId:"vk_community_messages",options:{onCanNotWrite:()=>{},welcomeScreen:1,expandTimeout:0,expanded:0,widgetPosition:"right",buttonType:"blue_circle",disableButtonTooltip:0},onMount:()=>{}};var k=y;const E=({elementId:e,options:t,ownerId:n})=>{const i=Object(o.useContext)(a);return Object(o.useEffect)(()=>{i.Widgets.ContactUs(e,t,-n)},[]),s.a.createElement("div",{id:e})};E.propTypes={elementId:r.a.string,options:r.a.shape({text:r.a.string,height:r.a.number}),ownerId:r.a.number.isRequired},E.defaultProps={elementId:"vk_contact_us",options:{height:24}};var C=E;const j=({elementId:e,options:t,groupId:n,onJoin:i,onLeave:r})=>{const u=Object(o.useContext)(a);return Object(o.useEffect)(()=>(u.Widgets.Group(e,t,n),u.Observer.subscribe("widgets.groups.joined",i),u.Observer.subscribe("widgets.groups.leaved",r),()=>{u.Observer.unsubscribe("widgets.groups.joined"),u.Observer.unsubscribe("widgets.groups.leaved")}),[]),s.a.createElement("div",{id:e})};j.propTypes={elementId:r.a.string,groupId:r.a.number.isRequired,options:r.a.shape({height:r.a.number,mode:r.a.oneOfType([r.a.number,r.a.string]),no_cover:r.a.oneOf([0,1]),wide:r.a.oneOf([0,1]),color1:r.a.string,color2:r.a.string,color3:r.a.string,pageImage:r.a.string}),onJoin:r.a.func,onLeave:r.a.func},j.defaultProps={elementId:"vk_groups",options:{width:"auto",mode:3,no_cover:1,wide:1},onJoin:()=>{},onLeave:()=>{}};var _=j;const T=({elementId:e,options:t,pageId:n,onLike:i,onUnlike:r,onShare:u,onUnshare:d})=>{const c=Object(o.useContext)(a);return Object(o.useEffect)(()=>(n?c.Widgets.Like(e,t,n):c.Widgets.Like(e,t),c.Observer.subscribe("widgets.like.liked",e=>i(e)),c.Observer.subscribe("widgets.like.unliked",e=>r(e)),c.Observer.subscribe("widgets.like.shared",e=>u(e)),c.Observer.subscribe("widgets.like.unshared",e=>d(e)),()=>{c.Observer.unsubscribe("widgets.like.liked"),c.Observer.unsubscribe("widgets.like.unliked"),c.Observer.unsubscribe("widgets.like.shared"),c.Observer.unsubscribe("widgets.like.unshared")}),[]),s.a.createElement("div",{id:e})};T.propTypes={elementId:r.a.string,options:r.a.shape({type:r.a.oneOf(["full","button","mini","vertical"]),width:r.a.number,height:r.a.number,verb:r.a.oneOf([0,1]),pageUrl:r.a.string,pageTitle:r.a.string,pageImage:r.a.string}),pageId:r.a.string,onLike:r.a.func,onUnlike:r.a.func,onShare:r.a.func,onUnshare:r.a.func},T.defaultProps={elementId:"vk_like",options:{type:"full",width:350,height:22,verb:0},pageId:null,onLike:()=>{},onUnlike:()=>{},onShare:()=>{},onUnshare:()=>{}};var P=T;const x=({elementId:e,ownerId:t,playlistId:n,hash:i,options:r})=>{const u=Object(o.useContext)(a);return Object(o.useEffect)(()=>{u.Widgets.Playlist(e,-t,n,i,r)},[]),s.a.createElement("div",{id:e})};x.propTypes={elementId:r.a.string,ownerId:r.a.number.isRequired,playlistId:r.a.number.isRequired,hash:r.a.string.isRequired,options:r.a.shape({width:r.a.number})},x.defaultProps={elementId:"vk_playlist",options:{}};var W=x;const R=({elementId:e,options:t,pollId:n})=>{const i=Object(o.useContext)(a);return Object(o.useEffect)(()=>{i.Widgets.Poll(e,t,n)},[]),s.a.createElement("div",{id:e})};R.propTypes={elementId:r.a.string,options:r.a.shape({width:r.a.number,pageUrl:r.a.string}),pollId:r.a.string.isRequired},R.defaultProps={elementId:"vk_poll",options:{height:24}};var S=R;const A=({elementId:e,ownerId:t,postId:n,hash:i,options:r})=>{const u=Object(o.useContext)(a);return Object(o.useEffect)(()=>{u.Widgets.Post(e,t,n,i,r)},[]),s.a.createElement("div",{id:e})};A.propTypes={elementId:r.a.string,ownerId:r.a.number.isRequired,postId:r.a.number.isRequired,hash:r.a.string.isRequired,options:r.a.shape({width:r.a.number})},A.defaultProps={elementId:"vk_post",options:{}};var M=A;const U=({elementId:e,options:t})=>{const n=Object(o.useContext)(a);return Object(o.useEffect)(()=>{n.Widgets.Recommended(e,t)},[]),s.a.createElement("div",{id:e})};U.propTypes={elementId:r.a.string,options:r.a.shape({limit:r.a.number,max:r.a.number,period:r.a.string,verb:r.a.number,sort:r.a.string,target:r.a.string})},U.defaultProps={elementId:"vk_recommend",options:{limit:5,max:20,period:"week",sort:"friend_like",target:"parent"}};var q=U;const L=({shareOptions:e,buttonOptions:t})=>{const n=s.a.createRef();return Object(o.useEffect)(()=>{if(d)if(document.getElementById("vk-share"))window.VK.Share&&(n.current.innerHTML=window.VK.Share.button(e,t));else{const o=document.createElement("script");o.type="text/javascript",o.charset="windows-1251",o.id="vk-share",o.src="https://vk.com/js/api/share.js?93",o.async=!0,document.head.appendChild(o),o.addEventListener("load",()=>{n.current.innerHTML=window.VK.Share.button(e,t)})}},[]),s.a.createElement("div",{ref:n})};L.propTypes={shareOptions:r.a.shape({url:r.a.string,title:r.a.string,image:r.a.string,noparse:r.a.bool,no_vk_links:r.a.oneOf([0,1])}),buttonOptions:r.a.shape({type:r.a.oneOf(["round","round_nocount","button","button_nocount","link","link_noicon","custom"]),text:r.a.string})},L.defaultProps={shareOptions:null,buttonOptions:null};var V=L;const K=({elementId:e,options:t,ownerId:n,onSubscribe:i,onUnsubscribe:r})=>{const u=Object(o.useContext)(a);return Object(o.useEffect)(()=>(u.Widgets.Subscribe(e,t,n),u.Observer.subscribe("widgets.subscribed",i),u.Observer.subscribe("widgets.unsubscribed",r),()=>{u.Observer.unsubscribe("widgets.subscribed"),u.Observer.unsubscribe("widgets.unsubscribed")}),[]),s.a.createElement("div",{id:e})};K.propTypes={elementId:r.a.string,options:r.a.shape({mode:r.a.number,soft:r.a.number}),ownerId:r.a.number.isRequired,onSubscribe:r.a.func,onUnsubscribe:r.a.func},K.defaultProps={elementId:"vk_subscribe",options:{mode:0,soft:0},onSubscribe:()=>{},onUnsubscribe:()=>{}};var D=K;const N=({elementId:e,articleUrl:t})=>{const n=Object(o.useContext)(a);return Object(o.useEffect)(()=>{n.Widgets.Article(e,t)},[]),s.a.createElement("div",{id:e})};N.propTypes={elementId:r.a.string,articleUrl:r.a.string.isRequired},N.defaultProps={elementId:"vk_article"};var B=N;n.d(t,"a",function(){return m}),n.d(t,"c",function(){return B}),n.d(t,"b",function(){return g}),n.d(t,"d",function(){return v}),n.d(t,"e",function(){return O}),n.d(t,"f",function(){return k}),n.d(t,"g",function(){return C}),n.d(t,"h",function(){return _}),n.d(t,"i",function(){return P}),n.d(t,"j",function(){return W}),n.d(t,"k",function(){return S}),n.d(t,"l",function(){return M}),n.d(t,"m",function(){return q}),n.d(t,"o",function(){return D}),n.d(t,"n",function(){return V});t.p=l}}]);
//# sourceMappingURL=6.46648112.js.map