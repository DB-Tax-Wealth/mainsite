!function(c){function e(e){for(var t,n,a=e[0],r=e[1],o=e[2],i=0,l=[];i<a.length;i++)n=a[i],s[n]&&l.push(s[n][0]),s[n]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(c[t]=r[t]);for(f&&f(e);l.length;)l.shift()();return m.push.apply(m,o||[]),u()}function u(){for(var e,t=0;t<m.length;t++){for(var n=m[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(a=!1)}a&&(m.splice(t--,1),e=i(i.s=n[0]))}return e}var n={},s={0:0},m=[];function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=c,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dbtax-mainsite";var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var f=a;m.push([51,1]),u()}([,,,,,,,,function(e,t,n){e.exports={root:"_2dxsL",logoContainer:"_3X7D4",logo:"JMTG9",accountAccess:"_1H67v",button:"_2v1LK",content:"_3Jx_V",links:"_3ljOQ",active:"_2-z7j",mobileToggle:"_1FIyE"}},,function(e,t,n){e.exports={root:"_2m0tB",contact:"t6sJz",content:"_3fHzS",learnMore:"_1Y8TW",email:"_37KLB",links:"_32hW1"}},,function(e,t,n){e.exports={root:"_207gc",copyright:"_3md8Z",logoContainer:"_3fbex",logo:"_14EN2"}},function(e,t,n){e.exports={root:"_25U4x",action:"_3e0aX",button:"_1-t6U",content:"_29jCE"}},function(e,t,n){e.exports={root:"_1Oglz",address:"TL_dS",content:"_7Mf8C"}},function(e,t,n){e.exports={root:"_3PqS_",menu:"_3GCRS",active:"_2TLOM"}},,function(e,t,n){e.exports={root:"_14IuC",active:"_13FO4"}},,,function(e,t,n){e.exports={root:"_3Z88C",content:"_2fTat"}},function(e,t,n){e.exports={root:"_1dBcE",content:"_3x2H0"}},function(e,t,n){e.exports={root:"_3dIFB",primary:"_3fM-b"}},,,,function(e,t,n){e.exports={root:"trIlA"}},,,function(e,t,n){e.exports={root:"_2uoUB"}},function(e,t,n){e.exports={root:"_2cC1F"}},function(e,t,n){e.exports=n.p+"/images/db-tax-logo.75db1d37076e1fdf9c24f4fc05648b39.png"},function(e,t,n){e.exports=n.p+"/images/db-tax-logo-dark.eb76843549f1fa7c14798dc613166c84.png"},function(e,t,n){e.exports={root:"_30Lrr"}},,,,,,function(e,t,n){},,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(35),r=n(0),i=n.n(r),o=n(2),l=n(9),c=(n(37),n(38),n(39),n(1)),u=n.n(c),s=n(26),m=n.n(s);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,v(e).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(e,r["Component"]),function(e,t,n){t&&p(e.prototype,t),n&&p(e,n)}(e,[{key:"componentDidMount",value:function(){var e=new CustomEvent("appReady",{bubbles:!0,cancelable:!1});document.dispatchEvent(e)}},{key:"render",value:function(){var e=this.props.children;return i.a.createElement("div",{className:m.a.root},e)}}]),e}();y(g,"propTypes",{children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node])}),y(g,"defaultProps",{children:null});function E(e){var t=e.className,n=e.name,a="brand"===e.type?"fab":"fas",r=w()(t,"".concat(a," fa-").concat(n));return i.a.createElement("i",{className:r})}var h="South Milwaukee",N="https://www.google.com/maps/place/1125+Milwaukee+Ave,+South+Milwaukee,+WI+53172",_="WI",C="1125 Milwaukee Ave.",O="53172",k=(n(42),n(43),n(44),n(4)),w=n.n(k);E.propTypes={className:u.a.string,name:u.a.string,type:u.a.oneOf(["brand","solid"])},E.defaultProps={className:"",name:"bell",type:"solid"};function P(){return i.a.createElement("div",{className:S.a.root},i.a.createElement("div",{className:S.a.content},i.a.createElement("a",{href:"tel:+".concat(T),target:"_blank",rel:"noopener noreferrer"},M," ",j),i.a.createElement("a",{href:N,className:S.a.address,target:"_blank",rel:"noopener noreferrer"},A," ",C," · ",h,", ",_," · ",O)))}var T="14147647730",j="414-764-7330",x=n(14),S=n.n(x),M=i.a.createElement(E,{name:"phone-alt"}),A=i.a.createElement(E,{name:"home"}),q=n(17),I=n.n(q);function L(e){var t=e.active,n=e.onClick,a=w()(I.a.root,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},I.a.active,t));return i.a.createElement("div",{className:a,onClick:n})}L.propTypes={active:u.a.bool,onClick:u.a.func},L.defaultProps={active:!1,onClick:null};var R="/",B=n(15),F=n.n(B);function D(e){var t=e.active,n=e.onCloseClick,a=w()(F.a.root,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},F.a.active,t));return i.a.createElement("div",{className:a},i.a.createElement(L,{active:t,onClick:n}),i.a.createElement("div",{className:F.a.menu},i.a.createElement(o.c,{to:R,onClick:n},"Home"),i.a.createElement(o.c,{to:R,onClick:n},"About"),i.a.createElement(o.c,{to:R,onClick:n},"Services"),i.a.createElement(o.c,{to:R,onClick:n},"Client Resources"),i.a.createElement(o.c,{to:R,onClick:n},"Legal"),i.a.createElement(o.c,{to:R,onClick:n},"Account Access")))}D.propTypes={active:u.a.bool,onCloseClick:u.a.func},D.defaultProps={active:!1,onCloseClick:null};function W(e){var t=e.children,n=e.onClick,a=e.className,r=w()(H.a.root,a);return i.a.createElement("button",{onClick:n,type:"button",className:r},t)}var J=u.a.oneOfType([u.a.node,u.a.arrayOf(u.a.node)]),z=n(29),H=n.n(z);W.propTypes={className:u.a.string,children:J,onClick:u.a.func},W.defaultProps={className:"",children:null,onClick:null};function G(e){var t=e.className,n=e.iconName,a=e.onClick,r=e.iconType,o=w()(U.a.root,t);return i.a.createElement(W,{className:o,onClick:a},i.a.createElement(E,{name:n,type:r}))}var K="DB Tax & Financial Services",Q=n(30),U=n.n(Q);G.propTypes={className:u.a.string,iconName:u.a.string,iconType:u.a.string,onClick:u.a.func},G.defaultProps={className:"",iconName:void 0,iconType:void 0,onClick:null};function X(e){var t=e.onMobileNavigationToggleClick;return i.a.createElement("div",{className:$.a.root},i.a.createElement("div",{className:$.a.content},i.a.createElement("div",{className:$.a.logoContainer},i.a.createElement(o.b,{to:R},i.a.createElement("img",{src:V.a,alt:K,className:$.a.logo}))),i.a.createElement("nav",{className:$.a.links},i.a.createElement(o.c,{to:R},"About"),i.a.createElement(o.c,{to:R},"Services"),i.a.createElement(o.c,{to:R},"Client Resources"),i.a.createElement(o.c,{to:R},"Legal")),i.a.createElement("div",{className:$.a.accountAccess},i.a.createElement(W,{className:$.a.button},"Account Access")),i.a.createElement("div",{className:$.a.mobileToggle},i.a.createElement(G,{iconName:"bars",onClick:t}))))}var Z=n(31),V=n.n(Z),Y=n(8),$=n.n(Y);function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ae(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}X.propTypes={onMobileNavigationToggleClick:u.a.func},X.defaultProps={onMobileNavigationToggleClick:null};var ie=i.a.createElement(P,null),le=function(){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=function(e,t){return!t||"object"!==ee(t)&&"function"!=typeof t?ae(e):t}(this,ne(n).call(this,e))).state={mobileNavigationActive:!1},t.toggleMobileNavigation=t.toggleMobileNavigation.bind(ae(t)),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}(n,r["Component"]),function(e,t,n){t&&te(e.prototype,t),n&&te(e,n)}(n,[{key:"toggleMobileNavigation",value:function(){var e=this.state.mobileNavigationActive;this.setState({mobileNavigationActive:!e})}},{key:"render",value:function(){var e=this.props.children,t=this.state.mobileNavigationActive;return i.a.createElement(g,null,ie,i.a.createElement(X,{onMobileNavigationToggleClick:this.toggleMobileNavigation}),e,i.a.createElement(D,{active:t,onCloseClick:this.toggleMobileNavigation}))}}]),n}();oe(le,"propTypes",{children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node])}),oe(le,"defaultProps",{children:null});function ce(){return i.a.createElement("div",{className:fe.a.root},i.a.createElement("div",{className:fe.a.content},"Whether you're facing retirement or looking to better understand investments, we can help you with money questions."),i.a.createElement("div",{className:fe.a.action},i.a.createElement(W,{className:fe.a.button},"Get Started Today")))}function ue(){return i.a.createElement("div",{className:be.a.root},i.a.createElement("div",{className:be.a.logoContainer},i.a.createElement(o.b,{to:R},i.a.createElement("img",{src:de.a,alt:K,className:be.a.logo}))),i.a.createElement("div",{className:be.a.copyright},"© 2019 DB Tax & Financial Services, Inc. All Rights Reserved."),i.a.createElement("div",{className:be.a.social},ye))}function se(e){var t=e.placeholder,n=e.iconName,a=e.className,r=e.value,o=w()(he.a.root,a);return i.a.createElement("div",{className:o},i.a.createElement("input",{type:"text",placeholder:t,value:r}),i.a.createElement(G,{iconName:n}))}var me=n(13),fe=n.n(me),pe=n(32),de=n.n(pe),ve=n(12),be=n.n(ve),ye=i.a.createElement(G,{iconName:"facebook-f",iconType:"brand"}),ge="social@dbtaxinc.com",Ee=n(33),he=n.n(Ee);se.propTypes={className:u.a.string,iconName:u.a.string,placeholder:u.a.string,value:u.a.string},se.defaultProps={className:"",iconName:void 0,placeholder:"enter a value...",value:""};function Ne(){return i.a.createElement("div",{className:Oe.a.root},i.a.createElement("div",{className:Oe.a.contact},ke,i.a.createElement("div",{className:Oe.a.content},i.a.createElement("div",null,i.a.createElement("a",{href:"mailto:+".concat(j)},j)),i.a.createElement("div",null,i.a.createElement("a",{href:N,target:"_blank",rel:"noopener noreferrer"},C,we,h,", ",_," · ",O)),i.a.createElement("div",null,i.a.createElement("a",{href:"mailto:".concat(ge)},ge)))),i.a.createElement("div",{className:Oe.a.links},Pe,i.a.createElement("div",{className:Oe.a.content},i.a.createElement("div",null,i.a.createElement(o.b,{to:R},"About")),i.a.createElement("div",null,i.a.createElement(o.b,{to:R},"Services")),i.a.createElement("div",null,i.a.createElement(o.b,{to:R},"Client Resources")),i.a.createElement("div",null,i.a.createElement(o.b,{to:R},"Legal")),i.a.createElement("div",null,i.a.createElement(o.b,{to:R},"Account Access")))),i.a.createElement("div",{className:Oe.a.learnMore},Te,je,i.a.createElement("div",null,i.a.createElement(se,{placeholder:"enter your email address...",iconName:"paper-plane",className:Oe.a.email}))))}function _e(){return i.a.createElement("div",{className:Se.a.root},i.a.createElement("div",{className:Se.a.content},Me,Ae,qe))}var Ce=n(10),Oe=n.n(Ce),ke=i.a.createElement("h3",null,"Contact"),we=i.a.createElement("br",null),Pe=i.a.createElement("h3",null,"Links"),Te=i.a.createElement("h3",null,"Want to Know More?"),je=i.a.createElement("div",null,"We'll reach out via email to set up a call."),xe=n(20),Se=n.n(xe),Me=i.a.createElement(ce,null),Ae=i.a.createElement(Ne,null),qe=i.a.createElement(ue,null),Ie=n(21),Le=n.n(Ie);function Re(e){return(Re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Be(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Fe(e,t){return!t||"object"!==Re(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function De(e){return(De=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function We(e,t){return(We=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ze=i.a.createElement(_e,null),He=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Fe(this,De(e).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&We(e,t)}(e,r["Component"]),function(e,t,n){t&&Be(e.prototype,t),n&&Be(e,n)}(e,[{key:"getClassNames",value:function(){var e=this.props.className;return w()("animated","fadeIn",e,Le.a.root)}},{key:"render",value:function(){var e=this.props.children,t=this.getClassNames();return i.a.createElement("div",{className:t},i.a.createElement("div",{className:Le.a.content},e),ze)}}]),e}();Je(He,"propTypes",{children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),className:u.a.string}),Je(He,"defaultProps",{children:null,className:""});function Ge(){return i.a.createElement(He,{className:Ue.a.root},i.a.createElement("div",{className:Ue.a.primary},Xe,Ze,Ve,Ye,$e,et))}var Ke,Qe=n(22),Ue=n.n(Qe),Xe=i.a.createElement("h1",null,i.a.createElement("strong",null,"DB"),"Tax"),Ze=i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, est porta tempus posuere, augue nulla tempor nisi, eget maximus enim metus quis nulla. Nunc eleifend felis ex, in molestie mi efficitur eu. Sed quis tortor nec orci viverra porttitor ac quis nisl. Nunc varius dolor lacus, sed rhoncus diam ultricies sed. Fusce mattis urna lacus, ut fringilla tellus congue in. Nulla condimentum erat at odio dictum mollis sed at urna. Pellentesque pulvinar nibh justo, vitae tincidunt neque tempus id."),Ve=i.a.createElement("p",null,"Nam tellus lectus, luctus ut risus eget, rhoncus varius dolor. Maecenas porta sem sed bibendum venenatis. Aenean laoreet augue quis neque tincidunt dignissim. Cras hendrerit, sem ut rutrum ultricies, nulla purus aliquam ante, vitae iaculis mi est non dui. Mauris non condimentum dui. Mauris cursus aliquam nisi, a tincidunt nisi euismod ut. Quisque vehicula, velit et rhoncus consequat, dolor neque accumsan libero, at suscipit nunc arcu id odio."),Ye=i.a.createElement("p",null,"In a dignissim ante. In pretium lectus non magna condimentum mollis. Aenean tempor dapibus vulputate. Proin id lorem vel est vulputate vehicula. Suspendisse facilisis mauris id lobortis iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur varius sapien elementum egestas tristique."),$e=i.a.createElement("p",null,"Nulla facilisi. Donec et rhoncus lectus, vel eleifend libero. Duis vestibulum dictum dolor, eget venenatis massa condimentum in. In faucibus, turpis ut tincidunt finibus, mi ipsum posuere felis, at tempus ligula turpis nec arcu. Aliquam tempus nisi eget nibh convallis, a maximus velit dictum. Fusce vel fringilla enim. Donec a magna sit amet quam scelerisque lacinia."),et=i.a.createElement("p",null,"Maecenas sollicitudin diam sed placerat elementum. Praesent pulvinar elit non mattis eleifend. Fusce hendrerit, erat ac ultricies facilisis, tellus leo tincidunt ipsum, in pharetra risus ligula eu nisl. Quisque ultricies elit eget rutrum egestas. Curabitur gravida nulla venenatis, rhoncus est eu, fermentum risus. Aenean vitae posuere urna, vel fermentum nunc. Proin a fringilla libero. Phasellus eu auctor justo. Suspendisse fringilla porttitor dictum. Praesent quis auctor justo, auctor fermentum quam."),tt=n(34);Ke=function(){return i.a.createElement(o.a,{hashType:"noslash"},i.a.createElement(le,null,i.a.createElement(l.a,{exact:!0,path:R,component:Ge})))},Object(tt.render)(i.a.createElement(a.AppContainer,null,i.a.createElement(Ke,null)),document.getElementById("app"))}]);