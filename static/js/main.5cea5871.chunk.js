(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(25)},17:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),s=(a(17),a(1)),u=a(2),i=a(3),o=a(6),m=a(4),d=a(5),p=a(7),h=a(10),f=a.n(h),y=(a(23),{type:"directory",value:{about:{type:"directory",value:{info:{type:"file",value:"Hi i am Stuart"}}},contact:{type:"directory",value:{github:{type:"directory",value:"gitlink"},facebook:{type:"file",value:"fblink"},youtube:{type:"file",value:"ytlink"}}}}}),v=function(e){return e.reduce(function(e,t){return y.value[t]},y)},E=function(){function e(){Object(u.a)(this,e),this.home=y,this.prevPath=[],this.path=[]}return Object(i.a)(e,[{key:"ls",value:function(){var e=v(this.path);return"directory"===e.type?{data:e.value,success:!0,type:"LIST"}:{data:this.pwd().data,code:"NOT_A_DIRECTORY",success:!1,type:"LIST"}}},{key:"cat",value:function(){var e=v(this.path);return"file"===e.type?{data:e.value,success:!0,type:"CAT"}:{data:this.pwd().data,code:"NOT_A_FILE",success:!1,type:"CAT"}}},{key:"pwd",value:function(){return{data:"~/".concat(this.path.join("/")),success:!0,type:"PWD"}}},{key:"cd",value:function(e){if(".."===e)this.prevPath=JSON.parse(JSON.stringify(this.path)),this.path.pop();else if("."===e);else if("-"===e){var t=JSON.parse(JSON.stringify(this.prevPath));this.prevPath=JSON.parse(JSON.stringify(this.path)),this.path=JSON.parse(JSON.stringify(t))}else{this.prevPath=JSON.parse(JSON.stringify(this.path));var a=e;a=a.split("/");var n=[].concat(Object(s.a)(this.path),Object(s.a)(a)),r=JSON.parse(JSON.stringify(this.home)),c=!0,l=!1,u=void 0;try{for(var i,o=n[Symbol.iterator]();!(c=(i=o.next()).done);c=!0){var m=i.value;r=r.value[m]}}catch(d){l=!0,u=d}finally{try{c||null==o.return||o.return()}finally{if(l)throw u}}"file"===r.type||(this.path=[].concat(Object(s.a)(this.path),Object(s.a)(e)))}return{}}}]),e}(),b=function(e){var t=e.data;return r.a.createElement("span",{className:"directory-name"},t)},O=function(e){var t=e.data;return r.a.createElement("span",{className:"file-name"},t)},j=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"renderData",value:function(e){return Object.keys(e).reduce(function(t,a){return[].concat(Object(s.a)(t),[[a,e[a]]])},[]).map(function(e){return"directory"===e[1].type?r.a.createElement(b,{data:e[0]+" "}):r.a.createElement(O,{data:e[0]+" "})})}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.data&&this.renderData(this.props.data.data))}}]),t}(n.Component),g=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",null,"Use the following commands to navigate the app")),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("code",null,"ls"),r.a.createElement("span",null,"- to see the contents of current directory"))),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("code",null,"ls"),r.a.createElement("span",null,"- to see the contents of current directory"))))},S=function(e){var t=e.data;return r.a.createElement("div",null,t)},N=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"renderCommandOutput",value:function(e,t){return"LIST"===e?r.a.createElement(j,{data:t}):"HELP"===e?r.a.createElement(g,null):"PWD"===e?r.a.createElement(S,{data:t.data}):null}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",null,r.a.createElement("span",{className:"shell"},r.a.createElement("b",null,this.props.command[2]+" ","$ >")),r.a.createElement("span",null,this.props.command[1]),this.renderCommandOutput(this.props.command[0].type,this.props.command[0]))}}]),t}(n.PureComponent),k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("span",null,"Type"),r.a.createElement("code",null,"help"),r.a.createElement("span",null,"to get a help menu"))))},C=new E,P=function(){return C.pwd().data},w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={command:"",commands:[],currentPath:P()},a.handleChange=a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a.contentEditable=r.a.createRef(),a.textInput=r.a.createRef(),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.contentEditable.current.focus(),setInterval(function(){e.contentEditable.current.focus()},1e3)}},{key:"handleChange",value:function(e){/<br>/.test(e.target.value)&&this.handleEnterPress(),this.setState({command:e.target.value})}},{key:"handleEnterPress",value:function(){var e=this,t=this.state,a=t.command,n=t.commands,r=a.split(" "),c=[a,P()];return"clear"===r[0]?(this.setState({commands:[]},function(){e.setState({command:"",currentPath:P()})}),null):("ls"===r[0]?c=[C.ls()].concat(Object(s.a)(c)):"pwd"===r[0]?c=[C.pwd()].concat(Object(s.a)(c)):"cd"===r[0]?c=[C.cd(r[1])].concat(Object(s.a)(c)):"help"===r[0]&&(c=[{data:"User Needs Help",success:!0,type:"HELP"}].concat(Object(s.a)(c))),this.setState({commands:[].concat(Object(s.a)(n),[c])},function(){e.setState({command:"",currentPath:P()})}),null)}},{key:"renderCommands",value:function(){return this.state.commands.map(function(e,t){return r.a.createElement(N,{key:t.toString(),command:e})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),this.renderCommands(),r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"shell"},r.a.createElement("b",null,this.state.currentPath+" ","$ >")),r.a.createElement(f.a,{className:"test",autoCorrect:"off",autoCapitalize:"none",innerRef:this.contentEditable,html:this.state.command,disabled:!1,onChange:this.handleChange,tagName:"span"}),r.a.createElement("div",{className:"cursor"})))}}]),t}(n.Component);l.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.5cea5871.chunk.js.map