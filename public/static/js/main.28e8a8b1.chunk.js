(this["webpackJsonpmeeting-display-frontend"]=this["webpackJsonpmeeting-display-frontend"]||[]).push([[0],{14:function(e,t,r){},16:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(8),i=r.n(s),c=(r(14),r(1)),o=r.n(c),l=r(6),u=r(2),h=r(3),f=r(5),p=r(4),m=(r(16),function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e)).state={time:n.currentTime()},n}return Object(h.a)(r,[{key:"checkTime",value:function(e){return e<10?"0"+e:e}},{key:"currentTime",value:function(){var e=new Date;return this.checkTime(e.getHours())+":"+this.checkTime(e.getMinutes())}},{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){this.setState({time:this.currentTime()})}},{key:"render",value:function(){return a.a.createElement("span",{className:"clock"},this.state.time)}}]),r}(a.a.Component)),g=function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){var e="status status-"+this.props.status.toLowerCase();return a.a.createElement("div",{onClick:this.props.onClick},a.a.createElement("header",{className:"meeting-status",onClick:this.props.onClick},a.a.createElement("div",{className:e}),a.a.createElement("h1",null,this.props.status),a.a.createElement("p",null,this.props.summary),a.a.createElement("h2",null,a.a.createElement(m,null))))}}]),r}(a.a.Component),v=function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){var e=[];return this.props.events.forEach((function(t){e.push(a.a.createElement("li",{key:t.time+Math.random()},a.a.createElement("span",null,t.time),t.summary))})),a.a.createElement("ul",null,e)}}]),r}(a.a.Component),b=function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"getYMD",value:function(e){return"".concat(this.checkTime(e.getFullYear())).concat(this.checkTime(e.getMonth())).concat(this.checkTime(e.getDate()))}},{key:"checkTime",value:function(e){return e<10?"0"+e:e}},{key:"yMDToDate",value:function(e){var t=parseInt(e.substr(0,4)),r=parseInt(e.substr(4,2)),n=parseInt(e.substr(6));return new Date(t,r,n,0,0,0,0)}},{key:"render",value:function(){var e=[],t=new Date(Date.now()),r=new Date(t.getTime());r.setDate(t.getDate()+1);var n=new Date(t.getTime());n.setDate(t.getDate()+7),n.setHours(0),n.setMinutes(0),n.setSeconds(0),n.setMilliseconds(0);var s=this.getYMD(t),i=this.getYMD(r),c=this.props.name;if(c===i)e.push(a.a.createElement("h3",{key:"Tomorrow"},"Tomorrow"));else if(c!==s){var o,l=this.yMDToDate(c);if(l.getTime()<n.getTime()){o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][l.getDay()]}else{o="".concat(l.getDate()).concat(function(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(l.getDate())," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][l.getMonth()])}e.push(a.a.createElement("h3",{key:o},o))}var u=this.props.events;return e.push(a.a.createElement(v,{key:c+"Events",events:u})),a.a.createElement("div",null,e)}}]),r}(a.a.Component),y=function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){var e=this,t=[];this.props.list&&Object.keys(this.props.list).forEach((function(r){t.push(a.a.createElement(b,{key:r,name:r,events:e.props.list[r]}))}));return a.a.createElement("section",{id:"timeline"},t)}}]),r}(a.a.Component);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var E=a.a.createElement("defs",null),w=a.a.createElement("g",{id:"Canvas_1",stroke:"none",strokeOpacity:1,fillOpacity:1,fill:"none",strokeDasharray:"none"},a.a.createElement("title",null,"Canvas 1"),a.a.createElement("g",{id:"Canvas_1: Layer 1"},a.a.createElement("title",null,"Layer 1"),a.a.createElement("g",{id:"Graphic_2"},a.a.createElement("path",{d:"M 41.577764 431.1588 L 47 436.581 L 52.422236 431.1588 L 57.84122 436.57776 L 52.418984 442 L 57.84122 447.42224 L 52.422236 452.8412 L 47 447.419 L 41.577764 452.8412 L 36.15878 447.42224 L 41.581016 442 L 36.15878 436.57776 Z",fill:"white"})))),O=function(e){var t=e.svgRef,r=e.title,n=k(e,["svgRef","title"]);return a.a.createElement("svg",d({viewBox:"36.15878 431.1588 21.68244 21.68244",width:21.68244,height:21.68244,ref:t},n),r?a.a.createElement("title",null,r):null,E,w)},D=a.a.forwardRef((function(e,t){return a.a.createElement(O,d({svgRef:t},e))})),j=(r.p,function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){var e="error "+(this.props.show?"error-show":"error-hide");return a.a.createElement("div",{className:e,onClick:this.props.onClick},a.a.createElement("i",null,a.a.createElement(D,null))," There was a problem updating the calendar. ",a.a.createElement("strong",null,"Tap to retry"))}}]),r}(a.a.Component));function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var x=a.a.createElement("defs",null),T=a.a.createElement("g",{id:"Canvas_1",stroke:"none",strokeOpacity:1,fillOpacity:1,fill:"none",strokeDasharray:"none"},a.a.createElement("title",null,"Canvas 1"),a.a.createElement("g",{id:"Canvas_1: Layer 1"},a.a.createElement("title",null,"Layer 1"),a.a.createElement("g",{id:"Graphic_2"},a.a.createElement("title",null,"Plus"),a.a.createElement("path",{d:"M 746.87305 124.735 L 755.20805 124.735 L 755.20805 116.4 L 763.53805 116.4 L 763.53805 124.735 L 771.87305 124.735 L 771.87305 133.065 L 763.53805 133.065 L 763.53805 141.4 L 755.20805 141.4 L 755.20805 133.065 L 746.87305 133.065 Z",fill:"#333"})))),S=function(e){var t=e.svgRef,r=e.title,n=L(e,["svgRef","title"]);return a.a.createElement("svg",C({viewBox:"746.87305 116.4 25 25",width:25,height:25,ref:t},n),r?a.a.createElement("title",null,r):null,x,T)},M=a.a.forwardRef((function(e,t){return a.a.createElement(S,C({svgRef:t},e))}));r.p;function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var U=a.a.createElement("defs",null),B=a.a.createElement("g",{id:"Canvas_1",stroke:"none",strokeOpacity:1,fillOpacity:1,fill:"none",strokeDasharray:"none"},a.a.createElement("title",null,"Canvas 1"),a.a.createElement("g",{id:"Canvas_1: Layer 1"},a.a.createElement("title",null,"Layer 1"),a.a.createElement("g",{id:"Graphic_2"},a.a.createElement("title",null,"Minus"),a.a.createElement("rect",{x:30.5,y:125.07569,width:25,height:7.6486285,fill:"#333"})))),P=function(e){var t=e.svgRef,r=e.title,n=R(e,["svgRef","title"]);return a.a.createElement("svg",_({viewBox:"30.5 125.07569 25 7.6486285",width:25,height:7.6486285,ref:t},n),r?a.a.createElement("title",null,r):null,U,B)},I=a.a.forwardRef((function(e,t){return a.a.createElement(P,_({svgRef:t},e))}));r.p;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var F=a.a.createElement("defs",null),Y=a.a.createElement("g",{id:"Canvas_1",stroke:"none",strokeOpacity:1,fillOpacity:1,fill:"none",strokeDasharray:"none"},a.a.createElement("title",null,"Canvas 1"),a.a.createElement("g",{id:"Canvas_1: Layer 1"},a.a.createElement("title",null,"Layer 1"),a.a.createElement("g",{id:"Graphic_2"},a.a.createElement("path",{d:"M 40.975 32.834375 C 37.053994 32.834375 33.859375 36.028994 33.859375 39.95 C 33.859375 43.871006 37.053994 47.065625 40.975 47.065625 C 44.896006 47.065625 48.090625 43.871006 48.090625 39.95 C 48.090625 36.028994 44.896006 32.834375 40.975 32.834375 Z M 59.23844 38.801123 L 52.21917 35.295195 L 54.702227 27.853438 C 55.03577 26.84539 54.07961 25.88923 53.078975 26.230186 L 45.637217 28.713242 L 42.123877 21.686563 C 41.6495 20.737813 40.3005 20.737813 39.826123 21.686563 L 36.320195 28.70583 L 28.871025 26.222774 C 27.86298 25.88923 26.906816 26.84539 27.247773 27.846025 L 29.73083 35.287783 L 22.711563 38.801123 C 21.762812 39.2755 21.762812 40.6245 22.711563 41.098877 L 29.73083 44.604805 L 27.247773 52.053975 C 26.91423 53.06202 27.87039 54.018184 28.871025 53.677227 L 36.312783 51.19417 L 39.81871 58.21344 C 40.293086 59.16219 41.64209 59.16219 42.116465 58.21344 L 45.62239 51.19417 L 53.06415 53.677227 C 54.0722 54.01077 55.02836 53.05461 54.6874 52.053975 L 52.204346 44.612217 L 59.22361 41.10629 C 60.18719 40.6245 60.18719 39.2755 59.23844 38.801123 Z M 47.68296 46.65796 C 43.984316 50.3566 37.965684 50.3566 34.26704 46.65796 C 30.5684 42.959317 30.5684 36.940684 34.26704 33.24204 C 37.965684 29.5434 43.984316 29.5434 47.68296 33.24204 C 51.3816 36.940684 51.3816 42.959317 47.68296 46.65796 Z",fill:"#797979"})))),Z=function(e){var t=e.svgRef,r=e.title,n=A(e,["svgRef","title"]);return a.a.createElement("svg",N({viewBox:"22 20.975 37.94816 37.95",width:37.94816,height:37.95,ref:t},n),r?a.a.createElement("title",null,r):null,F,Y)},G=a.a.forwardRef((function(e,t){return a.a.createElement(Z,N({svgRef:t},e))}));r.p;function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var J=a.a.createElement("defs",null),$=a.a.createElement("g",{id:"Canvas_1",stroke:"none",strokeOpacity:1,fillOpacity:1,fill:"none",strokeDasharray:"none"},a.a.createElement("title",null,"Canvas 1"),a.a.createElement("g",{id:"Canvas_1: Layer 1"},a.a.createElement("title",null,"Layer 1"),a.a.createElement("g",{id:"Graphic_2"},a.a.createElement("path",{d:"M 407.0483 194.27419 L 400 188.43419 L 392.95172 194.27419 Z",fill:"#737274"})))),q=function(e){var t=e.svgRef,r=e.title,n=H(e,["svgRef","title"]);return a.a.createElement("svg",W({viewBox:"392.95172 188.43419 14.096552 5.84",width:14.096552,height:5.84,ref:t},n),r?a.a.createElement("title",null,r):null,J,$)},z=a.a.forwardRef((function(e,t){return a.a.createElement(q,W({svgRef:t},e))}));r.p;function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var V=a.a.createElement("defs",null),X=a.a.createElement("g",{id:"Canvas_1",stroke:"none",strokeOpacity:1,fillOpacity:1,fill:"none",strokeDasharray:"none"},a.a.createElement("title",null,"Canvas 1"),a.a.createElement("g",{id:"Canvas_1: Layer 1"},a.a.createElement("title",null,"Layer 1"),a.a.createElement("g",{id:"Graphic_2"},a.a.createElement("path",{d:"M 586.081 427.5 C 586.081 462.2665 557.8362 490.4363 523 490.4363 C 488.1638 490.4363 459.919 462.2665 459.919 427.5 C 459.919 392.75382 488.1638 364.5637 523 364.5637 C 557.8362 364.5637 586.081 392.75382 586.081 427.5 Z M 523 440.18877 C 516.538 440.18877 511.2995 445.4153 511.2995 451.86244 C 511.2995 458.3096 516.538 463.5361 523 463.5361 C 529.462 463.5361 534.7005 458.3096 534.7005 451.86244 C 534.7005 445.4153 529.462 440.18877 523 440.18877 Z M 511.8914 398.228 L 513.7782 432.7415 C 513.8665 434.3565 515.2049 435.6208 516.82595 435.6208 L 529.17405 435.6208 C 530.7951 435.6208 532.1335 434.3565 532.2218 432.7415 L 534.1086 398.228 C 534.204 396.48356 532.8119 395.01674 531.0609 395.01674 L 514.93886 395.01674 C 513.18785 395.01674 511.796 396.48356 511.8914 398.228 Z",fill:"#aaa"})))),ee=function(e){var t=e.svgRef,r=e.title,n=Q(e,["svgRef","title"]);return a.a.createElement("svg",K({viewBox:"459.919 364.5637 126.162 125.87263",width:126.162,height:125.87263,ref:t},n),r?a.a.createElement("title",null,r):null,V,X)},te=a.a.forwardRef((function(e,t){return a.a.createElement(ee,K({svgRef:t},e))})),re=(r.p,function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e)).backendUrl="http://localhost:4567",n.brightnessUrl="".concat(n.backendUrl,"/brightness"),n.brightnessUpUrl="".concat(n.brightnessUrl,"/up"),n.brightnessDownUrl="".concat(n.brightnessUrl,"/down"),n.brightnessOffUrl="".concat(n.brightnessUrl,"/off"),n.brightnessPingUrl="".concat(n.brightnessUrl,"/ping"),n.brightnessPingTimeout=1e4,n.tickRate=6e4,n.timerID=null,n.pingTimerID=null,n.datesAreOnSameDay=function(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()},n.state={status:"Updating",summary:"Please wait...",eventsList:{},error:!1,brightness:0,brightnessError:!1,backlightOn:!1,showDrawer:!1},n}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),this.tickRate),this.tick(),this.updateBrightness()}},{key:"componentWillUnmount",value:function(){this.timerID=null}},{key:"async_fetch",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!(r=e.sent).ok){e.next=7;break}return e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:throw new Error(r.status);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"tick",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,r,n,a,s,i,c,l,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.async_fetch(this.backendUrl);case 3:t=e.sent,e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(0),console.log("Error thrown whilst calling `async_fetch`. Displaying error message"),this.setState({error:!0}),e.abrupt("return");case 11:this.setState({error:!1}),r=t.events,n=Date.now(),a=r.find((function(e){var t=Date.parse(e.start),r=Date.parse(e.end);return t<n&&r>n})),s=r.find((function(e){return Date.parse(e.start)>n})),i=this.findTimeGapsFor(r).find((function(e){return e.start>n})),c=null==a?"Available":"Busy",l=this.generateSummary(c,s,i),u=this.generateEventsList(r),this.setState({status:c,summary:l,eventsList:u,error:!1});case 21:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"findTimeGapsFor",value:function(e){var t=[];return e.forEach((function(r,n){if(0!==n){var a=Date.parse(r.start),s=a-10,i=e[n-1],c=Date.parse(i.end);if(s>c){var o=c+1,l=a-1;t.push({start:o,end:l})}}})),t}},{key:"refresh",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.tick();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"generateSummary",value:function(e,t,r){if(null==r)return"";var n="Available"===e,a=n?"Next meeting ":"Next free ",s=new Date(Date.now()),i=new Date(s.getTime());i.setDate(s.getDate()+1);var c=new Date(Date.parse(t.start)),o=this.datesAreOnSameDay(s,c),l=this.datesAreOnSameDay(i,c),u="".concat(this.checkTime(c.getHours()),":").concat(this.checkTime(c.getMinutes())),h=new Date(r.start),f=this.datesAreOnSameDay(s,h),p=this.datesAreOnSameDay(i,h),m="".concat(this.checkTime(h.getHours()),":").concat(this.checkTime(h.getMinutes())),g=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],v=g[c.getDay()],b=g[h.getDay()],y=l,d=o,k=v,E=u;return n||(y=p,d=f,k=b,E=m),y&&(a+="tomorrow "),d||y||(a+="on ".concat(k," ")),a+="at ".concat(E)}},{key:"generateEventsList",value:function(e){var t=this,r=new Date(Date.now());new Date(r.getTime()).setDate(r.getDate()+1);var n={};return e.forEach((function(e){var r=new Date(Date.parse(e.start)),a=new Date(Date.parse(e.end)),s=t.getYMD(r),i={time:"".concat(t.checkTime(r.getHours()),":").concat(t.checkTime(r.getMinutes())," - ").concat(t.checkTime(a.getHours()),":").concat(t.checkTime(a.getMinutes())),summary:e.summary};n[s]=n[s]||[],n[s].push(i)})),n}},{key:"getYMD",value:function(e){return"".concat(this.checkTime(e.getFullYear())).concat(this.checkTime(e.getMonth())).concat(this.checkTime(e.getDate()))}},{key:"checkTime",value:function(e){return e<10?"0"+e:e}},{key:"updateBrightness",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.async_fetch(this.brightnessUrl);case 3:t=e.sent,e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(0),console.log("Error thrown whilst calling `async_fetch` to get brightness data."),this.setState({brightnessError:!0}),e.abrupt("return");case 11:if(!t.error){e.next=16;break}return console.error("Brightness api returned error:"),console.error(t),this.setState({brightnessError:!0}),e.abrupt("return");case 16:this.setState({brightnessError:!1,brightness:t.brightness,backlightOn:t.backlight_on});case 17:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"lowerBrightness",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.async_fetch(this.brightnessDownUrl);case 3:t=e.sent,e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(0),console.log("Error thrown whilst calling `async_fetch` to lower brightness."),this.setState({brightnessError:!0}),e.abrupt("return");case 11:if(!t.error){e.next=16;break}return console.error("Brightness api returned error:"),console.error(t),this.setState({brightnessError:!0}),e.abrupt("return");case 16:if(this.setState({brightnessError:!1,brightness:t.brightness,backlightOn:t.backlight_on}),this.state.backlightOn){e.next=20;break}return e.next=20,this.closeDrawer();case 20:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"increaseBrightness",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.async_fetch(this.brightnessUpUrl);case 3:t=e.sent,e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(0),console.log("Error thrown whilst calling `async_fetch` to lower brightness."),this.setState({brightnessError:!0}),e.abrupt("return");case 11:if(!t.error){e.next=16;break}return console.error("Brightness api returned error:"),console.error(t),this.setState({brightnessError:!0}),e.abrupt("return");case 16:this.setState({brightnessError:!1,brightness:t.brightness,backlightOn:t.backlight_on});case 17:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"openDrawer",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.pingBrightness();case 2:this.setState({showDrawer:!0});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"closeDrawer",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.pingBrightness();case 2:this.setState({showDrawer:!1});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pingBrightness",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,r=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateBrightness();case 2:return this.pingTimerID&&clearTimeout(this.pingTimerID),e.prev=3,e.next=6,this.async_fetch(this.brightnessPingUrl);case 6:t=e.sent,e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(3),console.log("Error thrown whilst calling `async_fetch` to lower brightness."),this.setState({brightnessError:!0}),e.abrupt("return");case 14:if(!t.error){e.next=19;break}return console.error("Brightness api returned error:"),console.error(t),this.setState({brightnessError:!0}),e.abrupt("return");case 19:!this.state.backlightOn&&t.backlight_on&&(this.pingTimerID=setTimeout(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.brightnessOffUrl=null,e.next=3,r.screenOff();case 3:return e.next=5,r.closeDrawer();case 5:case"end":return e.stop()}}),e)}))),this.brightnessPingTimeout)),this.setState({brightnessError:!1,brightness:t.brightness,backlightOn:t.backlight_on});case 21:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"screenOff",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.async_fetch(this.brightnessOffUrl);case 3:t=e.sent,e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(0),console.log("Error thrown whilst calling `async_fetch` to turn off screen."),this.setState({brightnessError:!0}),e.abrupt("return");case 11:if(!t.error){e.next=16;break}return console.error("Brightness api returned error:"),console.error(t),this.setState({brightnessError:!0}),e.abrupt("return");case 16:this.setState({brightnessError:!1,brightness:t.brightness,backlightOn:t.backlight_on});case 17:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t={width:"".concat(this.state.brightness,"%")},r=this.state.showDrawer?"show":"hide",n="drawer drawer-".concat(r),s="overlay overlay-".concat(r);return a.a.createElement("div",{id:"App"},a.a.createElement(g,{status:this.state.status,summary:this.state.summary,onClick:function(){return e.openDrawer()}}),a.a.createElement(y,{list:this.state.eventsList}),a.a.createElement(j,{show:this.state.error,onClick:function(){return e.refresh()}}),a.a.createElement("div",{className:n},a.a.createElement("div",{className:"header",onClick:function(){return e.closeDrawer()}},a.a.createElement("i",null,a.a.createElement(G,null)),a.a.createElement("span",null,"Adjust brightness")),a.a.createElement("div",{className:"body"},a.a.createElement("i",{className:"minus",onClick:function(){return e.lowerBrightness()}},a.a.createElement(I,null)),a.a.createElement("div",{className:"progress-bar"},a.a.createElement("div",{className:"progress",style:t})),a.a.createElement("i",{className:"plus",onClick:function(){return e.increaseBrightness()}},a.a.createElement(M,null))),a.a.createElement("div",{className:"footer",onClick:function(){return e.closeDrawer()}},a.a.createElement("i",null,a.a.createElement(z,null)))),a.a.createElement("div",{className:s,onClick:function(){return e.closeDrawer()}}),a.a.createElement(ne,{show:this.state.brightnessError}))}}]),r}(a.a.Component)),ne=function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={brightnessError:!1},e.timeout=5e3,e.showError=function(){e.clearTimer(),e.setState({brightnessError:!0}),e.createTimer()},e}return Object(h.a)(r,[{key:"componentWillUnmount",value:function(){this.clearTimer()}},{key:"componentDidUpdate",value:function(e,t){var r=!1===e.show,n=this.props.show;r&&n&&this.showError(),!r&&n&&(this.clearTimer(),this.createTimer())}},{key:"clearTimer",value:function(){this.hideTimer&&clearTimeout(this.hideTimer)}},{key:"createTimer",value:function(){var e=this;this.hideTimer=setTimeout((function(){e.setState({brightnessError:!1}),e.hideTimer=null}),this.timeout)}},{key:"render",value:function(){var e=this.state.brightnessError?"show":"hide",t="brightness-error brightness-error-".concat(e);return a.a.createElement("div",{className:t},a.a.createElement("i",null,a.a.createElement(te,null)),"Error updating brightness")}}]),r}(a.a.Component),ae=re;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,r){e.exports=r(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.28e8a8b1.chunk.js.map