(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(27)},19:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=(a(19),a(1)),u=a(3),i=a(4),s=a(6),d=a(5),m=a(7),h=a(2),p=a(12),v=a.n(p),f=(a(25),a(8)),y=a(9),E=function(e){return function(t){return function(a){return function(n){return{success:e,type:t,code:a,data:n}}}}},b=E(!1),g=E(!0),C=b("LIST"),j=C("INVALID_PATH"),O=C("NOT_A_DIRECTORY"),k=g("LIST")(),I=g("PWD")(),w=g("HELP")(),P=b("CAT"),N=P("INVALID_PATH"),D=P("IS_DIRECTORY"),R=P("PATH_REQUIRED"),A=g("CAT")(),S=b("CD")("INVALID_PATH"),T=function(e,t){return e.reduce(function(e,t){return e.value[t]},t)},H=function(e){return!e},L=function(e){return H(e)||0===e.length},W=function(e){return function(t){return e===t}},_=function(e){return e.replace("&nbsp;","").trim().split(" ").map(function(e){return e.replace("&nbsp;","")})},x=function(e,t){var a=Object(y.a)({},t);if(e.length<=1)return!0;var n=Object(o.a)(e);return n.pop(),n.every(function(e){return(a=a.value[e])&&"directory"===a.type})},U=function(e,t,a){var n=T(e,t);return n?"directory"===n.type?k(n.value):O(a(e).data):j(a(e).data)},V=function(e,t){var a=e.split("/");0===a[a.length-1].length&&a.pop();var n=[];return"~"===a[0]||0===a[0].length?(n=Object(o.a)(a)).shift():n=[].concat(Object(o.a)(t),Object(o.a)(a)),n},K=function(e){var t=document.getElementById(e),a=document.createRange(),n=window.getSelection();a.setStart(t.childNodes[0],t.childNodes[0].length),a.collapse(!0),n.removeAllRanges(),n.addRange(a)},q=function(e){return I("~/".concat(e.join("/")))},Y=function(e,t,a){if(L(a))return U(e,t,q);var n=V(a,e);return H(x(n,t))?j(q(n).data):U(n,t,q)},z=function(e,t,a){if(L(a))return R(q(e).data);var n=V(a,e);return H(x(n,t))?N(q(n).data):function(e,t,a){var n=T(e,t);return n?"directory"!==n.type?A(n.value):D(a(e).data):N(a(e).data)}(n,t,q)},J=function(e,t,a,n){if(L(e))return{previousPath:a=Object(o.a)(t),path:t=[]};var r=W(e);if(r("-")){var c=Object(o.a)(a);return a=Object(o.a)(t),t=Object(o.a)(c),console.log(a),console.log(t),{data:"~/".concat(t.join("/")),success:!0,type:"PWD",previousPath:a,path:t}}if(r(".."))return a=Object(o.a)(t),t.pop(),{previousPath:a,path:t};if(r("."))return{previousPath:a,path:t};var l=V(e,t);return H(function(e,t){var a=Object(y.a)({},t);return e.length<1||e.every(function(e){return(a=a.value[e])&&"directory"===a.type})}(l,n))?Object(f.a)({},S(q(l).data),{previousPath:a,path:t}):{previousPath:Object(o.a)(t),path:l}},M=function(e){var t=e.data;return r.a.createElement("span",{className:"directory-name"},t)},B=function(e){var t=e.data;return r.a.createElement("span",{className:"file-name"},t)},F=function(e){var t=e.data,a=e.contents;return a.email?r.a.createElement("span",{className:"link-name"},r.a.createElement("a",{href:"mailto:".concat(a.value)},"".concat(t.trim(),".sh"))):r.a.createElement("span",{className:"link-name"},r.a.createElement("a",{href:a.value},"".concat(t.trim(),".sh")))},Q=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",null,e&&function(e){return Object.keys(e).reduce(function(t,a){return[].concat(Object(o.a)(t),[[a,e[a]]])},[]).map(function(e){return"directory"===e[1].type?r.a.createElement(M,{key:e[0],data:"".concat(e[0]," ")}):"file"===e[1].type?r.a.createElement(B,{key:e[0],data:"".concat(e[0]," ")}):r.a.createElement(F,{key:e[0],data:"".concat(e[0]," "),contents:e[1]})})}(e.data))}}]),t}(n.PureComponent),G=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",null,"Use the following commands to navigate the app")),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("code",null,"ls"),r.a.createElement("span",null,"- to see the contents of current directory"))),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("code",null,"cd <directory name>"),r.a.createElement("span",null,"- to change directory"))),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("code",null,"cat <file name>"),r.a.createElement("span",null,"- to view contents of file"))),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("code",null,"pwd"),r.a.createElement("span",null,"- to see current working directory"))),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("code",null,"clear"),r.a.createElement("span",null,"- to clear your console"))))},$=function(e){var t=e.data;return r.a.createElement("div",null,t)},X=function(e){var t=e.data;return r.a.createElement("div",null,t)},Z=function(e){var t=e.data;if("LIST"===t.type){if("NOT_A_DIRECTORY"===t.code)return r.a.createElement("div",{className:"error-msg"},r.a.createElement("code",null,t.data),":- is not directory, try using",r.a.createElement("code",null,"cat <file name>"),"to view the contents");if("INVALID_PATH"===t.code)return r.a.createElement("div",{className:"error-msg"},r.a.createElement("code",null,t.data),":- is not a valid path for a directory")}if("CAT"===t.type){if("IS_DIRECTORY"===t.code)return r.a.createElement("div",{className:"error-msg"},r.a.createElement("code",null,t.data),":- is directory, try using",r.a.createElement("code",null,"ls"),"inside the directory to view contents");if("PATH_REQUIRED"===t.code)return r.a.createElement("div",{className:"error-msg"},r.a.createElement("code",null,"cat"),"command requires a file name to read the content",r.a.createElement("code",null,"cat <file name>"));if("INVALID_PATH"===t.code)return r.a.createElement("div",{className:"error-msg"},r.a.createElement("code",null,t.data),"is an invalid path")}return"CD"===t.type&&"INVALID_PATH"===t.code?r.a.createElement("div",{className:"error-msg"},r.a.createElement("code",null,t.data),"is an invalid path, for a directory. Try using",r.a.createElement("code",null,"cat")):null},ee=function(e){var t=e.path;return r.a.createElement("span",{className:"shell"},r.a.createElement("b",null,"".concat(t," "),"$ >"))},te=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t,a,n=this.props.command;return r.a.createElement("div",null,r.a.createElement(ee,{path:n[2]}),r.a.createElement("span",null,n[1]),(e=n[0].success,t=n[0].type,a=n[0],e?"LIST"===t?r.a.createElement(Q,{data:a}):"HELP"===t?r.a.createElement(G,null):"PWD"===t?r.a.createElement($,{data:a.data}):"CAT"===t?r.a.createElement(X,{data:a.data}):null:r.a.createElement(Z,{data:a})))}}]),t}(n.PureComponent),ae=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("span",null,"Type"),r.a.createElement("code",null,"help"),r.a.createElement("span",null,"to get a help menu"))))},ne={type:"directory",value:{about:{type:"directory",value:{"info.txt":{type:"file",value:"Hey there hacker, I am Rishabh, a software engineer from India.\n                   I am mostly passionate about web technologies, linux and everthing opensource"}}},contact:{type:"directory",value:{blog:{type:"link",value:"https://rishabh1403.com/"},email:{type:"link",email:!0,value:"contact@rishabh1403.com"},github:{type:"link",value:"https://github.com/rishabh1403/"},twitter:{type:"link",value:"https://twitter.com/rishabhjain1403"},youtube:{type:"link",value:"https://www.youtube.com/rishabh1403"}}},skills:{type:"directory",value:{javascript:{type:"file",value:"(Intermediate)"},Html:{type:"file",value:"(Intermediate)"},css:{type:"file",value:"(Intermediate)"},React:{type:"file",value:"(Intermediate)"},Node:{type:"file",value:"(Intermediate)"}}},work:{type:"directory",value:{Mappes:{type:"directory",value:{stack:{type:"file",value:"Node, React & DynamoDb"}}},Aikaan:{type:"directory",value:{stack:{type:"file",value:"Node, Golang, React & PostgreSql"}}},Tricog:{type:"directory",value:{stack:{type:"file",value:"Node, Angular & Sql"}}},Sportzify:{type:"directory",value:{stack:{type:"file",value:"Node, Jquery & MongoDb"}}}}}}},re=0,ce=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={command:"",home:ne,path:[],previousPath:[],oldCommands:[],presentWorkingDirectory:q([]).data},a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.handleKeyDown=a.handleKeyDown.bind(Object(h.a)(Object(h.a)(a))),a.contentEditable=r.a.createRef(),a.textInput=r.a.createRef(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.contentEditable.current.focus(),setInterval(function(){e.contentEditable.current.focus()},100),console.log("%cNitin Stop Looking At my console for errors, now you won't find any","background: black; color: green; font-size: x-large")}},{key:"handleChange",value:function(e){this.setState({command:e.target.value})}},{key:"handleKeyDown",value:function(e){9===e.keyCode&&(e.preventDefault(),this.handleTabPress()),13===e.keyCode&&(e.preventDefault(),this.handleEnterPress()),38===e.keyCode&&(e.preventDefault(),this.handleUpArrowPress())}},{key:"handleTabPress",value:function(){var e=this.state,t=e.command,a=e.home,n=e.path,r=t.split(" "),c=function(e,t,a){var n=Object(f.a)({},t);return"object"===typeof(n=a.reduce(function(e,t){return e.value[t]},n)).value?Object.keys(n.value).filter(function(t){return t.startsWith(e)}):[]}(r[1],a,n);c.length>0&&this.setState({command:"".concat(r[0]," ").concat(c)},function(){K("command-input")})}},{key:"handleUpArrowPress",value:function(){re+=1;var e=this.state.oldCommands;e.length-re>=0&&this.setState({command:e[e.length-re][1].trim()},function(){K("command-input")})}},{key:"updateStateWithCommandResults",value:function(e,t){var a=this;this.setState({oldCommands:e},function(){a.setState({command:"",presentWorkingDirectory:q(t).data})})}},{key:"handleNoArgs",value:function(e,t,a){var n=[{}].concat(Object(o.a)(t));this.updateStateWithCommandResults([].concat(Object(o.a)(e),[n]),a)}},{key:"handleClearCommand",value:function(e){this.updateStateWithCommandResults([],e)}},{key:"handleLsCommand",value:function(e,t,a,n,r){var c=[Y(e,t,a)].concat(Object(o.a)(n));this.updateStateWithCommandResults([].concat(Object(o.a)(r),[c]),e)}},{key:"handlePwdCommand",value:function(e,t,a){var n=[q(e)].concat(Object(o.a)(t));this.updateStateWithCommandResults([].concat(Object(o.a)(a),[n]),e)}},{key:"handleHelpCommand",value:function(e,t,a){var n=[w("User Needs Help")].concat(Object(o.a)(t));this.updateStateWithCommandResults([].concat(Object(o.a)(a),[n]),e)}},{key:"handleCatCommand",value:function(e,t,a,n,r){var c=[z(e,t,a)].concat(Object(o.a)(n));this.updateStateWithCommandResults([].concat(Object(o.a)(r),[c]),e)}},{key:"handleCdCommand",value:function(e,t,a,n,r,c){var l=this,u=J(a,e,c,t),i=[u].concat(Object(o.a)(n));this.setState({path:u.path,previousPath:u.previousPath},function(){l.updateStateWithCommandResults([].concat(Object(o.a)(r),[i]),l.state.path)})}},{key:"handleEnterPress",value:function(){re=0;var e=this.state,t=e.command,a=e.oldCommands,n=e.path,r=e.home,c=e.previousPath,l=_(t),o=[_(t).join(" "),q(n).data],u=W(l[0]);return L(l[0])?(this.handleNoArgs(a,o,n),null):u("clear")?(this.handleClearCommand(n),null):u("ls")?(this.handleLsCommand(n,r,l[1],o,a),null):u("pwd")?(this.handlePwdCommand(n,o,a),null):u("help")?(this.handleHelpCommand(n,o,a),null):u("cat")?(this.handleCatCommand(n,r,l[1],o,a),null):u("cd")?(this.handleCdCommand(n,r,l[1],o,a,c),null):null}},{key:"renderCommands",value:function(){return this.state.oldCommands.map(function(e,t){return r.a.createElement(te,{key:t.toString(),command:e})})}},{key:"render",value:function(){var e=this.state,t=e.presentWorkingDirectory,a=e.command;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,null),this.renderCommands(),r.a.createElement(ee,{path:t}),r.a.createElement(v.a,{className:"test",id:"command-input",tabIndex:"0",autoCorrect:"off",autoCapitalize:"none",innerRef:this.contentEditable,html:a,disabled:!1,onChange:this.handleChange,onKeyDown:this.handleKeyDown,tagName:"span"}),r.a.createElement("div",{className:"cursor"}))}}]),t}(n.Component);l.a.render(r.a.createElement(ce,null),document.getElementById("root"))}},[[13,2,1]]]);
//# sourceMappingURL=main.ffac8441.chunk.js.map