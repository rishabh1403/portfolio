(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(27)},19:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),o=(a(19),a(1)),i=a(3),u=a(4),s=a(6),d=a(5),m=a(7),h=a(2),p=a(10),f=a.n(p),v=(a(25),a(12)),y=a(11),E=function(e,t){return e.reduce(function(e,t){return e.value[t]},t)},b=function(e,t){var a=Object(y.a)({},t);if(e.length<=1)return!0;var n=Object(o.a)(e);return n.pop(),n.every(function(e){return(a=a.value[e])&&"directory"===a.type})},g=function(e){return function(t){return function(a){return function(n){return{success:e,type:t,code:a,data:n}}}}},O=g(!1),j=g(!0),N=O("LIST"),S=N("INVALID_PATH"),w=N("NOT_A_DIRECTORY"),I=j("LIST")(),k=j("PWD")(),P=function(e,t,a){if(a&&a.length>0){var n=a.split("/");0===n[n.length-1].length&&n.pop();var r=[];if("~"===n[0]||0===n[0].length?(r=Object(o.a)(n)).shift():r=[].concat(Object(o.a)(e),Object(o.a)(n)),b(r,t)){var c=E(r,t);return c?"directory"===c.type?I(c.value):w(C(r).data):S(C(r).data)}return S(C(e).data)}var l=E(e,t);return l?"directory"===l.type?I(l.value):w(C(e).data):S(C(absolutePath).data)},C=function(e){return k("~/".concat(e.join("/")))},T=function(e,t,a){if(a&&a.length>0){var n=a.split("/");0===n[n.length-1].length&&n.pop();var r=[];if("~"===n[0]||0===n[0].length?(r=Object(o.a)(n)).shift():r=[].concat(Object(o.a)(e),Object(o.a)(n)),b(r,t)){var c=E(r,t);return c?"directory"!==c.type?{data:c.value,success:!0,type:"CAT"}:{data:C(r).data,code:"IS_DIRECTORY",success:!1,type:"CAT"}:{data:C(r).data,code:"INVALID_PATH",success:!1,type:"CAT"}}return{data:C(e).data,code:"INVALID_PATH",success:!1,type:"CAT"}}return{data:C(e).data,code:"PATH_REQUIRED",success:!1,type:"CAT"}},A=function(e){var t=e.data;return r.a.createElement("span",{className:"directory-name"},t)},D=function(e){var t=e.data;return r.a.createElement("span",{className:"file-name"},t)},R=function(e){var t=e.data,a=e.contents;return a.email?r.a.createElement("span",{className:"link-name"},r.a.createElement("a",{href:"mailto:".concat(a.value)},t)):r.a.createElement("span",{className:"link-name"},r.a.createElement("a",{href:a.value},t))},J=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",null,e&&function(e){return Object.keys(e).reduce(function(t,a){return[].concat(Object(o.a)(t),[[a,e[a]]])},[]).map(function(e){return"directory"===e[1].type?r.a.createElement(A,{key:e[0],data:"".concat(e[0]," ")}):"file"===e[1].type?r.a.createElement(D,{key:e[0],data:"".concat(e[0]," ")}):r.a.createElement(R,{key:e[0],data:"".concat(e[0]," "),contents:e[1]})})}(e.data))}}]),t}(n.PureComponent),_=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",null,"Use the following commands to navigate the app")),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("code",null,"ls"),r.a.createElement("span",null,"- to see the contents of current directory"))),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("code",null,"cd <directory name>"),r.a.createElement("span",null,"- to change directory"))),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("code",null,"cat <file name>"),r.a.createElement("span",null,"- to view contents of file"))),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("code",null,"pwd"),r.a.createElement("span",null,"- to see current working directory"))),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("code",null,"clear"),r.a.createElement("span",null,"- to clear your console"))))},L=function(e){var t=e.data;return r.a.createElement("div",null,t)},H=function(e){var t=e.data;return r.a.createElement("div",null,t)},x=function(e){var t=e.data;if("LIST"===t.type){if("NOT_A_DIRECTORY"===t.code)return r.a.createElement("div",{className:"error-msg"},r.a.createElement("code",null,t.data),":- is not directory, try using",r.a.createElement("code",null,"cat <file name>"),"to view the contents");if("INVALID_PATH"===t.code)return r.a.createElement("div",{className:"error-msg"},r.a.createElement("code",null,t.data),":- is not a valid path for a directory")}if("CAT"===t.type){if("IS_DIRECTORY"===t.code)return r.a.createElement("div",{className:"error-msg"},r.a.createElement("code",null,t.data),":- is directory, try using",r.a.createElement("code",null,"ls"),"inside the directory to view contents");if("PATH_REQUIRED"===t.code)return r.a.createElement("div",{className:"error-msg"},r.a.createElement("code",null,"cat"),"command requires a file name to read the content",r.a.createElement("code",null,"cat <file name>"));if("INVALID_PATH"===t.code)return r.a.createElement("div",{className:"error-msg"},r.a.createElement("code",null,t.data),"is an invalid path")}return null},K=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t,a,n=this.props.command;return r.a.createElement("div",null,r.a.createElement("span",{className:"shell"},r.a.createElement("b",null,"".concat(n[2]," "),"$ >")),r.a.createElement("span",null,n[1]),(e=n[0].success,t=n[0].type,a=n[0],e?"LIST"===t?r.a.createElement(J,{data:a}):"HELP"===t?r.a.createElement(_,null):"PWD"===t?r.a.createElement(L,{data:a.data}):"CAT"===t?r.a.createElement(H,{data:a.data}):null:r.a.createElement(x,{data:a})))}}]),t}(n.PureComponent),V=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("span",null,"Type"),r.a.createElement("code",null,"help"),r.a.createElement("span",null,"to get a help menu"))))},U={type:"directory",value:{about:{type:"directory",value:{"info.txt":{type:"file",value:"Hey there hacker, I am Rishabh, a software engineer from India.\n                   I am mostly passionate about web technologies, linux and everthing opensource"}}},contact:{type:"directory",value:{blog:{type:"link",value:"https://rishabh1403.com/"},email:{type:"link",email:!0,value:"contact@rishabh1403.com"},github:{type:"link",value:"https://github.com/rishabh1403/"},twitter:{type:"link",value:"https://twitter.com/rishabhjain1403"},youtube:{type:"link",value:"https://www.youtube.com/rishabh1403"}}}}},W=function(e){return e.replace("&nbsp;","").trim().split(" ").map(function(e){return e.replace("&nbsp;","")})},Y=0,B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={command:"",home:U,path:[],prevPath:[],commands:[],currentPath:C([]).data},a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.handleKeyDown=a.handleKeyDown.bind(Object(h.a)(Object(h.a)(a))),a.contentEditable=r.a.createRef(),a.textInput=r.a.createRef(),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.contentEditable.current.focus(),setInterval(function(){e.contentEditable.current.focus()},100),console.log("%cNitin Stop Looking At my console for errors, now you won't find any","background: black; color: green; font-size: x-large")}},{key:"handleChange",value:function(e){this.setState({command:e.target.value})}},{key:"handleKeyDown",value:function(e){var t=this.state,a=t.command,n=t.commands;if(9===e.keyCode){e.preventDefault();var r=function(e,t,a){var n=Object(v.a)({},t);return"object"===typeof(n=a.reduce(function(e,t){return e.value[t]},n)).value?Object.keys(n.value).filter(function(t){return t.startsWith(e)}):[]}(a.split(" ")[1],this.state.home,this.state.path);r.length>0&&this.setState(function(e){var t=e.command;return{command:"".concat(t.split(" ")[0]," ").concat(r)}},function(){var e=document.getElementById("yup"),t=document.createRange(),a=window.getSelection();t.setStart(e.childNodes[0],e.childNodes[0].length),t.collapse(!0),a.removeAllRanges(),a.addRange(t)})}13===e.keyCode&&(e.preventDefault(),this.handleEnterPress()),38===e.keyCode&&(e.preventDefault(),Y+=1,n.length-Y>=0&&this.setState(function(e){var t=e.commands;return{command:t[t.length-Y][1].trim()}},function(){var e=document.getElementById("yup"),t=document.createRange(),a=window.getSelection();t.setStart(e.childNodes[0],e.childNodes[0].length),t.collapse(!0),a.removeAllRanges(),a.addRange(t)}))}},{key:"handleEnterPress",value:function(){var e=this;Y=0;var t=this.state,a=t.command,n=t.commands,r=W(a),c=[W(a).join(" "),C(this.state.path).data];if(!r[0])return this.setState({commands:[].concat(Object(o.a)(n),[[{}].concat(Object(o.a)(c))])},function(){e.setState({command:"",currentPath:C(e.state.path).data})}),null;if("clear"===r[0])return this.setState({commands:[]},function(){e.setState({command:"",currentPath:C(e.state.path).data})}),null;if("ls"===r[0])c=[P(this.state.path,this.state.home,r[1])].concat(Object(o.a)(c));else if("pwd"===r[0])c=[C(this.state.path)].concat(Object(o.a)(c));else if("cd"===r[0]){var l=function(e,t,a,n){if(!e||0===e.length)return{prevPath:a=JSON.parse(JSON.stringify(t)),path:t=[]};if("-"===e){var r=JSON.parse(JSON.stringify(a));return a=JSON.parse(JSON.stringify(t)),t=JSON.parse(JSON.stringify(r)),{data:"~/".concat(t.join("/")),success:!0,type:"PWD",prevPath:a,path:t}}if(".."===e)return a=JSON.parse(JSON.stringify(t)),t.pop(),{prevPath:a,path:t};var c=e.split("/"),l=[];c[c.length-1]&&c[c.length-1].length>0?l=[].concat(Object(o.a)(t),Object(o.a)(c)):(c.pop(),l=[].concat(Object(o.a)(t),Object(o.a)(c)));var i=JSON.parse(JSON.stringify(n)),u=!0,s=!1,d=void 0;try{for(var m,h=l[Symbol.iterator]();!(u=(m=h.next()).done);u=!0){var p=m.value;if("-"===p)return console.log("minus in between path"),{};if("."===p)return{};if(".."===p)return console.log("not supported"),{};if(!(i=i.value[p]))return console.log("Invalid Path",e),{};if("file"===i.type)return console.log("cant go in file",e),{}}}catch(O){s=!0,d=O}finally{try{u||null==h.return||h.return()}finally{if(s)throw d}}var f=!0,v=!1,y=void 0;try{for(var E,b=l[Symbol.iterator]();!(f=(E=b.next()).done);f=!0){var g=E.value;"."!==g&&".."!==g&&t.push(g)}}catch(O){v=!0,y=O}finally{try{f||null==b.return||b.return()}finally{if(v)throw y}}return{prevPath:a,path:t}}(r[1],this.state.path,this.state.prevPath,this.state.home);c=[l].concat(Object(o.a)(c)),this.setState({path:l.path,prevPath:l.prevPath})}else"help"===r[0]?c=[{data:"User Needs Help",success:!0,type:"HELP"}].concat(Object(o.a)(c)):"cat"===r[0]&&(c=[T(this.state.path,this.state.home,r[1])].concat(Object(o.a)(c)));return this.setState({commands:[].concat(Object(o.a)(n),[c])},function(){e.setState({command:"",currentPath:C(e.state.path).data})}),null}},{key:"renderCommands",value:function(){return this.state.commands.map(function(e,t){return r.a.createElement(K,{key:t.toString(),command:e})})}},{key:"render",value:function(){var e=this.state,t=e.currentPath,a=e.command;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null),this.renderCommands(),r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"shell"},r.a.createElement("b",null,"".concat(t," "),"$ >")),r.a.createElement(f.a,{className:"test",id:"yup",tabIndex:"0",autoCorrect:"off",autoCapitalize:"none",innerRef:this.contentEditable,html:a,disabled:!1,onChange:this.handleChange,onKeyDown:this.handleKeyDown,tagName:"span"}),r.a.createElement("div",{className:"cursor"})))}}]),t}(n.Component);l.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[13,2,1]]]);
//# sourceMappingURL=main.c930313f.chunk.js.map