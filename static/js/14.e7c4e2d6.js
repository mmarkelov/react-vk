(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{147:function(e,n,t){"use strict";t.r(n);var r=t(2),o=t.n(r),c=t(328);n.default=function(){return o.a.createElement("div",{className:"App-content"},o.a.createElement("h2",null,"Subscribe to Author Component"),o.a.createElement("h4",null,"To use Subscribe to Author Widget:"),o.a.createElement("pre",{style:{width:"70%"}},"\nimport {VK, Subscribe} from 'react-vk';\n\n\nconst SubscribeToAuthor = () => {\n    const handleSubscribe = () => {\n        alert('Thank you!');\n    };\n\n    const handleUnsubscribe = () => {\n        console.log(':(');\n    };\n\n    return (\n        <VK apiId={your_api_id}>\n            <Subscribe\n                ownerId={1}\n                onSubscribe={this.handleSubscribe}\n                onUnsubscribe={this.handleUnsubscribe}\n            />\n        </VK>\n    )\n};"),o.a.createElement("h4",null,"Result:"),o.a.createElement(c.m,{apiId:6247321},o.a.createElement(c.l,{ownerId:1,onSubscribe:function(){alert("Thank you!")},onUnsubscribe:function(){console.log(":(")}})),o.a.createElement("h5",null,"More info you can find on"," ",o.a.createElement("b",null,o.a.createElement("a",{href:"https://vk.com/dev/widget_subscribe"},"VK API"))))}}}]);
//# sourceMappingURL=14.e7c4e2d6.js.map