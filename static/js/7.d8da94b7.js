(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{134:function(e,n,t){"use strict";t.r(n);var s=t(2),a=t.n(s),o=t(321);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.default=class extends a.a.Component{constructor(...e){super(...e),i(this,"state",{widget:null,id:null}),i(this,"handleClick",()=>{this.state.widget.destroy(this.state.id)})}render(){return a.a.createElement("div",{className:"App-content"},a.a.createElement("h2",null,"Community Messages Component"),a.a.createElement("h4",null,"To use Community Messages Widget:"),a.a.createElement("pre",{style:{width:"70%"}},"\nimport VK, {CommunityMessages} from 'react-vk';\n\nclass Messages extends React.Component {\n\n    state = {\n        widget: null,\n        id: null,\n    };\n\n    handleClick = () => {\n        this.state.widget.destroy(this.state.id);\n    };\n\n    render() {\n        return (\n            <div>\n                <button onClick={this.handleClick}>\n                    Delete CommunityMessages\n                </button>\n                <VK>\n                  <CommunityMessages\n                    groupId={127607773}\n                    options={{onCanNotWrite: reason => console.log(reason)}}\n                    onMount={(widget, id) => {\n                        this.setState({ widget, id });\n                    }}\n                  />\n                </VK>\n            </div>\n        )\n    }\n};"),a.a.createElement("h4",null,"Result in right conner"),a.a.createElement("button",{onClick:this.handleClick},"Delete CommunityMessages"),a.a.createElement(o.n,null,a.a.createElement(o.e,{groupId:127607773,options:{onCanNotWrite:e=>console.log(e)},onMount:(e,n)=>{this.setState({widget:e,id:n})}})),a.a.createElement("h5",null,"More info you can find on"," ",a.a.createElement("b",null,a.a.createElement("a",{href:"https://vk.com/dev/widget_community_messages"},"VK API"))))}}}}]);
//# sourceMappingURL=7.d8da94b7.js.map