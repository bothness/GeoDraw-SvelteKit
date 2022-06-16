import{V as xe,S as x,i as $,s as ee,L as G,M as X,a as S,d as b,a9 as me,b as y,g as k,e as C,l as N,c as A,aa as $e,G as z,ab as et,E as U,a0 as L,k as D,t as K,m as W,h as H,f as E,a8 as Ye,j as R,w as Z,x as te,y as J,q as V,o as j,B as Q,p as oe,Z as tt,v as it,n as fe}from"../../chunks/index-319e1e25.js";import{a as nt}from"../../chunks/paths-c0fc83a9.js";import{C as lt,a as Ge}from"../../chunks/ProfileChart.svelte_svelte_type_style_lang-4611fe7a.js";import{t as st,g as rt,a as at}from"../../chunks/tile-71b8674d.js";import{d as ot}from"../../chunks/binary-e4470594.js";import"../../chunks/index-40cf8ab4.js";const ft=()=>{const i=xe("__svelte__");return{page:{subscribe:i.page.subscribe},navigating:{subscribe:i.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:i.navigating.subscribe}},session:i.session,updated:i.updated}},ht={subscribe(i){return ft().page.subscribe(i)}};var Xe={exports:{}};/*! pym.js - v1.3.2 - 2018-02-13 */(function(i){(function(e){i.exports?i.exports=e():window.pym=e.call(this)})(function(){var e="xPYMx",s={},t=function(v){var u=document.createEvent("Event");u.initEvent("pym:"+v,!0,!0),document.dispatchEvent(u)},n=function(v){var u=new RegExp("[\\?&]"+v.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]")+"=([^&#]*)"),_=u.exec(location.search);return _===null?"":decodeURIComponent(_[1].replace(/\+/g," "))},r=function(v,u){if(!(u.xdomain!=="*"&&!v.origin.match(new RegExp(u.xdomain+"$")))&&typeof v.data=="string")return!0},l=function(v){var u=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/gi;if(!!v.match(u))return!0},h=function(v,u,_){var c=["pym",v,u,_];return c.join(e)},o=function(v){var u=["pym",v,"(\\S+)","(.*)"];return new RegExp("^"+u.join(e)+"$")},g=Date.now||function(){return new Date().getTime()},p=function(v,u,_){var c,a,f,m=null,w=0;_||(_={});var M=function(){w=_.leading===!1?0:g(),m=null,f=v.apply(c,a),m||(c=a=null)};return function(){var I=g();!w&&_.leading===!1&&(w=I);var T=u-(I-w);return c=this,a=arguments,T<=0||T>u?(m&&(clearTimeout(m),m=null),w=I,f=v.apply(c,a),m||(c=a=null)):!m&&_.trailing!==!1&&(m=setTimeout(M,T)),f}},d=function(){for(var v=s.autoInitInstances.length,u=v-1;u>=0;u--){var _=s.autoInitInstances[u];_.el.getElementsByTagName("iframe").length&&_.el.getElementsByTagName("iframe")[0].contentWindow||s.autoInitInstances.splice(u,1)}};return s.autoInitInstances=[],s.autoInit=function(v){var u=document.querySelectorAll("[data-pym-src]:not([data-pym-auto-initialized])"),_=u.length;d();for(var c=0;c<_;++c){var a=u[c];a.setAttribute("data-pym-auto-initialized",""),a.id===""&&(a.id="pym-"+c+"-"+Math.random().toString(36).substr(2,5));var f=a.getAttribute("data-pym-src"),m={xdomain:"string",title:"string",name:"string",id:"string",sandbox:"string",allowfullscreen:"boolean",parenturlparam:"string",parenturlvalue:"string",optionalparams:"boolean",trackscroll:"boolean",scrollwait:"number"},w={};for(var M in m)if(a.getAttribute("data-pym-"+M)!==null)switch(m[M]){case"boolean":w[M]=a.getAttribute("data-pym-"+M)!=="false";break;case"string":w[M]=a.getAttribute("data-pym-"+M);break;case"number":var I=Number(a.getAttribute("data-pym-"+M));isNaN(I)||(w[M]=I);break;default:console.err("unrecognized attribute type")}var T=new s.Parent(a.id,f,w);s.autoInitInstances.push(T)}return v||t("pym-initialized"),s.autoInitInstances},s.Parent=function(v,u,_){this.id=v,this.url=u,this.el=document.getElementById(v),this.iframe=null,this.settings={xdomain:"*",optionalparams:!0,parenturlparam:"parentUrl",parenturlvalue:window.location.href,trackscroll:!1,scrollwait:100},this.messageRegex=o(this.id),this.messageHandlers={},_=_||{},this._constructIframe=function(){var a=this.el.offsetWidth.toString();this.iframe=document.createElement("iframe");var f="",m=this.url.indexOf("#");for(m>-1&&(f=this.url.substring(m,this.url.length),this.url=this.url.substring(0,m)),this.url.indexOf("?")<0?this.url+="?":this.url+="&",this.iframe.src=this.url+"initialWidth="+a+"&childId="+this.id,this.settings.optionalparams&&(this.iframe.src+="&parentTitle="+encodeURIComponent(document.title),this.iframe.src+="&"+this.settings.parenturlparam+"="+encodeURIComponent(this.settings.parenturlvalue)),this.iframe.src+=f,this.iframe.setAttribute("width","100%"),this.iframe.setAttribute("scrolling","no"),this.iframe.setAttribute("marginheight","0"),this.iframe.setAttribute("frameborder","0"),this.settings.title&&this.iframe.setAttribute("title",this.settings.title),this.settings.allowfullscreen!==void 0&&this.settings.allowfullscreen!==!1&&this.iframe.setAttribute("allowfullscreen",""),this.settings.sandbox!==void 0&&typeof this.settings.sandbox=="string"&&this.iframe.setAttribute("sandbox",this.settings.sandbox),this.settings.id&&(document.getElementById(this.settings.id)||this.iframe.setAttribute("id",this.settings.id)),this.settings.name&&this.iframe.setAttribute("name",this.settings.name);this.el.firstChild;)this.el.removeChild(this.el.firstChild);this.el.appendChild(this.iframe),window.addEventListener("resize",this._onResize),this.settings.trackscroll&&window.addEventListener("scroll",this._throttleOnScroll)},this._onResize=function(){this.sendWidth(),this.settings.trackscroll&&this.sendViewportAndIFramePosition()}.bind(this),this._onScroll=function(){this.sendViewportAndIFramePosition()}.bind(this),this._fire=function(a,f){if(a in this.messageHandlers)for(var m=0;m<this.messageHandlers[a].length;m++)this.messageHandlers[a][m].call(this,f)},this.remove=function(){window.removeEventListener("message",this._processMessage),window.removeEventListener("resize",this._onResize),this.el.removeChild(this.iframe),d()},this._processMessage=function(a){if(!!r(a,this.settings)&&typeof a.data=="string"){var f=a.data.match(this.messageRegex);if(!f||f.length!==3)return!1;var m=f[1],w=f[2];this._fire(m,w)}}.bind(this),this._onHeightMessage=function(a){var f=parseInt(a);this.iframe.setAttribute("height",f+"px")},this._onNavigateToMessage=function(a){!l(a)||(document.location.href=a)},this._onScrollToChildPosMessage=function(a){var f=document.getElementById(this.id).getBoundingClientRect().top+window.pageYOffset,m=f+parseInt(a);window.scrollTo(0,m)},this.onMessage=function(a,f){a in this.messageHandlers||(this.messageHandlers[a]=[]),this.messageHandlers[a].push(f)},this.sendMessage=function(a,f){this.el.getElementsByTagName("iframe").length&&(this.el.getElementsByTagName("iframe")[0].contentWindow?this.el.getElementsByTagName("iframe")[0].contentWindow.postMessage(h(this.id,a,f),"*"):this.remove())},this.sendWidth=function(){var a=this.el.offsetWidth.toString();this.sendMessage("width",a)},this.sendViewportAndIFramePosition=function(){var a=this.iframe.getBoundingClientRect(),f=window.innerWidth||document.documentElement.clientWidth,m=window.innerHeight||document.documentElement.clientHeight,w=f+" "+m;w+=" "+a.top+" "+a.left,w+=" "+a.bottom+" "+a.right,this.sendMessage("viewport-iframe-position",w)};for(var c in _)this.settings[c]=_[c];return this._throttleOnScroll=p(this._onScroll.bind(this),this.settings.scrollwait),this.onMessage("height",this._onHeightMessage),this.onMessage("navigateTo",this._onNavigateToMessage),this.onMessage("scrollToChildPos",this._onScrollToChildPosMessage),this.onMessage("parentPositionInfo",this.sendViewportAndIFramePosition),window.addEventListener("message",this._processMessage,!1),this._constructIframe(),this},s.Child=function(v){this.parentWidth=null,this.id=null,this.parentTitle=null,this.parentUrl=null,this.settings={renderCallback:null,xdomain:"*",polling:0,parenturlparam:"parentUrl"},this.timerId=null,this.messageRegex=null,this.messageHandlers={},v=v||{},this.onMessage=function(a,f){a in this.messageHandlers||(this.messageHandlers[a]=[]),this.messageHandlers[a].push(f)},this._fire=function(a,f){if(a in this.messageHandlers)for(var m=0;m<this.messageHandlers[a].length;m++)this.messageHandlers[a][m].call(this,f)},this._processMessage=function(a){if(!!r(a,this.settings)&&typeof a.data=="string"){var f=a.data.match(this.messageRegex);if(!(!f||f.length!==3)){var m=f[1],w=f[2];this._fire(m,w)}}}.bind(this),this._onWidthMessage=function(a){var f=parseInt(a);f!==this.parentWidth&&(this.parentWidth=f,this.settings.renderCallback&&this.settings.renderCallback(f),this.sendHeight())},this.sendMessage=function(a,f){window.parent.postMessage(h(this.id,a,f),"*")},this.sendHeight=function(){var a=document.getElementsByTagName("body")[0].offsetHeight.toString();return this.sendMessage("height",a),a}.bind(this),this.getParentPositionInfo=function(){this.sendMessage("parentPositionInfo")},this.scrollParentTo=function(a){this.sendMessage("navigateTo","#"+a)},this.navigateParentTo=function(a){this.sendMessage("navigateTo",a)},this.scrollParentToChildEl=function(a){var f=document.getElementById(a).getBoundingClientRect().top+window.pageYOffset;this.scrollParentToChildPos(f)},this.scrollParentToChildPos=function(a){this.sendMessage("scrollToChildPos",a.toString())};var u=function(a){var f=document.getElementsByTagName("html")[0],m,w=f.className;try{window.self!==window.top?m="embedded":m="not-embedded"}catch{m="embedded"}w.indexOf(m)<0&&(f.className=w?w+" "+m:m,a&&a(m),t("marked-embedded"))};this.remove=function(){window.removeEventListener("message",this._processMessage),this.timerId&&clearInterval(this.timerId)};for(var _ in v)this.settings[_]=v[_];this.id=n("childId")||v.id,this.messageRegex=new RegExp("^pym"+e+this.id+e+"(\\S+)"+e+"(.*)$");var c=parseInt(n("initialWidth"));return this.parentUrl=n(this.settings.parenturlparam),this.parentTitle=n("parentTitle"),this.onMessage("width",this._onWidthMessage),window.addEventListener("message",this._processMessage,!1),this.settings.renderCallback&&this.settings.renderCallback(c),this.sendHeight(),this.settings.polling&&(this.timerId=window.setInterval(this.sendHeight,this.settings.polling)),u(v.onMarkedEmbeddedStatus),this},typeof document!="undefined"&&s.autoInit(!0),s})})(Xe);var ut=Xe.exports;function ct(i){return Math.abs(i=Math.round(i))>=1e21?i.toLocaleString("en").replace(/,/g,""):i.toString(10)}function re(i,e){if((s=(i=e?i.toExponential(e-1):i.toExponential()).indexOf("e"))<0)return null;var s,t=i.slice(0,s);return[t.length>1?t[0]+t.slice(2):t,+i.slice(s+1)]}function dt(i){return i=re(Math.abs(i)),i?i[1]:NaN}function mt(i,e){return function(s,t){for(var n=s.length,r=[],l=0,h=i[0],o=0;n>0&&h>0&&(o+h+1>t&&(h=Math.max(1,t-o)),r.push(s.substring(n-=h,n+h)),!((o+=h+1)>t));)h=i[l=(l+1)%i.length];return r.reverse().join(e)}}function gt(i){return function(e){return e.replace(/[0-9]/g,function(s){return i[+s]})}}var _t=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function ae(i){if(!(e=_t.exec(i)))throw new Error("invalid format: "+i);var e;return new he({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}ae.prototype=he.prototype;function he(i){this.fill=i.fill===void 0?" ":i.fill+"",this.align=i.align===void 0?">":i.align+"",this.sign=i.sign===void 0?"-":i.sign+"",this.symbol=i.symbol===void 0?"":i.symbol+"",this.zero=!!i.zero,this.width=i.width===void 0?void 0:+i.width,this.comma=!!i.comma,this.precision=i.precision===void 0?void 0:+i.precision,this.trim=!!i.trim,this.type=i.type===void 0?"":i.type+""}he.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function vt(i){e:for(var e=i.length,s=1,t=-1,n;s<e;++s)switch(i[s]){case".":t=n=s;break;case"0":t===0&&(t=s),n=s;break;default:if(!+i[s])break e;t>0&&(t=0);break}return t>0?i.slice(0,t)+i.slice(n+1):i}var Ze;function pt(i,e){var s=re(i,e);if(!s)return i+"";var t=s[0],n=s[1],r=n-(Ze=Math.max(-8,Math.min(8,Math.floor(n/3)))*3)+1,l=t.length;return r===l?t:r>l?t+new Array(r-l+1).join("0"):r>0?t.slice(0,r)+"."+t.slice(r):"0."+new Array(1-r).join("0")+re(i,Math.max(0,e+r-1))[0]}function ge(i,e){var s=re(i,e);if(!s)return i+"";var t=s[0],n=s[1];return n<0?"0."+new Array(-n).join("0")+t:t.length>n+1?t.slice(0,n+1)+"."+t.slice(n+1):t+new Array(n-t.length+2).join("0")}var _e={"%":(i,e)=>(i*100).toFixed(e),b:i=>Math.round(i).toString(2),c:i=>i+"",d:ct,e:(i,e)=>i.toExponential(e),f:(i,e)=>i.toFixed(e),g:(i,e)=>i.toPrecision(e),o:i=>Math.round(i).toString(8),p:(i,e)=>ge(i*100,e),r:ge,s:pt,X:i=>Math.round(i).toString(16).toUpperCase(),x:i=>Math.round(i).toString(16)};function ve(i){return i}var pe=Array.prototype.map,be=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function bt(i){var e=i.grouping===void 0||i.thousands===void 0?ve:mt(pe.call(i.grouping,Number),i.thousands+""),s=i.currency===void 0?"":i.currency[0]+"",t=i.currency===void 0?"":i.currency[1]+"",n=i.decimal===void 0?".":i.decimal+"",r=i.numerals===void 0?ve:gt(pe.call(i.numerals,String)),l=i.percent===void 0?"%":i.percent+"",h=i.minus===void 0?"\u2212":i.minus+"",o=i.nan===void 0?"NaN":i.nan+"";function g(d){d=ae(d);var v=d.fill,u=d.align,_=d.sign,c=d.symbol,a=d.zero,f=d.width,m=d.comma,w=d.precision,M=d.trim,I=d.type;I==="n"?(m=!0,I="g"):_e[I]||(w===void 0&&(w=12),M=!0,I="g"),(a||v==="0"&&u==="=")&&(a=!0,v="0",u="=");var T=c==="$"?s:c==="#"&&/[boxX]/.test(I)?"0"+I.toLowerCase():"",q=c==="$"?t:/[%p]/.test(I)?l:"",ue=_e[I],Qe=/[defgprs%]/.test(I);w=w===void 0?6:/[gprs]/.test(I)?Math.max(1,Math.min(21,w)):Math.max(0,Math.min(20,w));function ce(P){var F=T,B=q,Y,de,ie;if(I==="c")B=ue(P)+B,P="";else{P=+P;var ne=P<0||1/P<0;if(P=isNaN(P)?o:ue(Math.abs(P),w),M&&(P=vt(P)),ne&&+P==0&&_!=="+"&&(ne=!1),F=(ne?_==="("?_:h:_==="-"||_==="("?"":_)+F,B=(I==="s"?be[8+Ze/3]:"")+B+(ne&&_==="("?")":""),Qe){for(Y=-1,de=P.length;++Y<de;)if(ie=P.charCodeAt(Y),48>ie||ie>57){B=(ie===46?n+P.slice(Y+1):P.slice(Y))+B,P=P.slice(0,Y);break}}}m&&!a&&(P=e(P,1/0));var le=F.length+P.length+B.length,O=le<f?new Array(f-le+1).join(v):"";switch(m&&a&&(P=e(O+P,O.length?f-B.length:1/0),O=""),u){case"<":P=F+P+B+O;break;case"=":P=F+O+P+B;break;case"^":P=O.slice(0,le=O.length>>1)+F+P+B+O.slice(le);break;default:P=O+F+P+B;break}return r(P)}return ce.toString=function(){return d+""},ce}function p(d,v){var u=g((d=ae(d),d.type="f",d)),_=Math.max(-8,Math.min(8,Math.floor(dt(v)/3)))*3,c=Math.pow(10,-_),a=be[8+_/3];return function(f){return u(c*f)+a}}return{format:g,formatPrefix:p}}var se,Je;wt({thousands:",",grouping:[3],currency:["$",""]});function wt(i){return se=bt(i),Je=se.format,se.formatPrefix,se}function we(i,e,s){const t=i.slice();return t[15]=e[s],t}function ye(i){let e,s,t,n,r,l;return{c(){e=G("image"),this.h()},l(h){e=X(h,"image",{"xlink:href":!0,x:!0,y:!0,width:!0,height:!0,filter:!0}),S(e).forEach(b),this.h()},h(){me(e,"xlink:href",s=i[9](i[15].x,i[15].y,i[15].z)),y(e,"x",t=Math.round((i[15].x+i[15].tx)*i[15].k)),y(e,"y",n=Math.round((i[15].y+i[15].ty)*i[15].k)),y(e,"width",r=i[15].k),y(e,"height",l=i[15].k),y(e,"filter","url(#desaturate)")},m(h,o){k(h,e,o)},p(h,o){o&256&&s!==(s=h[9](h[15].x,h[15].y,h[15].z))&&me(e,"xlink:href",s),o&256&&t!==(t=Math.round((h[15].x+h[15].tx)*h[15].k))&&y(e,"x",t),o&256&&n!==(n=Math.round((h[15].y+h[15].ty)*h[15].k))&&y(e,"y",n),o&256&&r!==(r=h[15].k)&&y(e,"width",r),o&256&&l!==(l=h[15].k)&&y(e,"height",l)},d(h){h&&b(e)}}}function ke(i){let e,s,t=i[3]&&Me(i);return{c(){t&&t.c(),e=G("path"),this.h()},l(n){t&&t.l(n),e=X(n,"path",{fill:!0,stroke:!0,"stroke-width":!0,d:!0}),S(e).forEach(b),this.h()},h(){y(e,"fill","none"),y(e,"stroke",i[1]),y(e,"stroke-width",i[2]),y(e,"d",s=i[7](i[0]))},m(n,r){t&&t.m(n,r),k(n,e,r)},p(n,r){n[3]?t?t.p(n,r):(t=Me(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),r&2&&y(e,"stroke",n[1]),r&4&&y(e,"stroke-width",n[2]),r&129&&s!==(s=n[7](n[0]))&&y(e,"d",s)},d(n){t&&t.d(n),n&&b(e)}}}function Me(i){let e,s;return{c(){e=G("path"),this.h()},l(t){e=X(t,"path",{fill:!0,stroke:!0,opacity:!0,d:!0}),S(e).forEach(b),this.h()},h(){y(e,"fill",i[1]),y(e,"stroke","none"),y(e,"opacity",i[3]),y(e,"d",s=i[7](i[0]))},m(t,n){k(t,e,n)},p(t,n){n&2&&y(e,"fill",t[1]),n&8&&y(e,"opacity",t[3]),n&129&&s!==(s=t[7](t[0]))&&y(e,"d",s)},d(t){t&&b(e)}}}function yt(i){let e,s,t,n,r,l,h,o=i[8]().map(Ee),g=[];for(let d=0;d<o.length;d+=1)g[d]=ye(we(i,o,d));let p=i[0]&&ke(i);return{c(){e=C("div"),s=G("svg"),t=G("filter"),n=G("feColorMatrix");for(let d=0;d<g.length;d+=1)g[d].c();r=N(),p&&p.c(),this.h()},l(d){e=A(d,"DIV",{class:!0});var v=S(e);s=X(v,"svg",{viewBox:!0,class:!0});var u=S(s);t=X(u,"filter",{id:!0});var _=S(t);n=X(_,"feColorMatrix",{type:!0,values:!0}),S(n).forEach(b),_.forEach(b);for(let c=0;c<g.length;c+=1)g[c].l(u);r=N(),p&&p.l(u),u.forEach(b),v.forEach(b),this.h()},h(){y(n,"type","saturate"),y(n,"values",i[4]),y(t,"id","desaturate"),y(s,"viewBox",l="0 0 "+i[5]+" "+i[6]),y(s,"class","svelte-am2o7f"),y(e,"class","svg-container svelte-am2o7f"),$e(()=>i[13].call(e))},m(d,v){k(d,e,v),z(e,s),z(s,t),z(t,n);for(let u=0;u<g.length;u+=1)g[u].m(s,null);z(s,r),p&&p.m(s,null),h=et(e,i[13].bind(e))},p(d,[v]){if(v&16&&y(n,"values",d[4]),v&768){o=d[8]().map(Ee);let u;for(u=0;u<o.length;u+=1){const _=we(d,o,u);g[u]?g[u].p(_,v):(g[u]=ye(_),g[u].c(),g[u].m(s,r))}for(;u<g.length;u+=1)g[u].d(1);g.length=o.length}d[0]?p?p.p(d,v):(p=ke(d),p.c(),p.m(s,null)):p&&(p.d(1),p=null),v&96&&l!==(l="0 0 "+d[5]+" "+d[6])&&y(s,"viewBox",l)},i:U,o:U,d(d){d&&b(e),L(g,d),p&&p.d(),h()}}}const Ee=([i,e,s],t,{translate:[n,r],scale:l})=>({x:i,y:e,z:s,tx:n,ty:r,k:l});function kt(i,e,s){let t,n,r,l,{geojson:h=null}=e,{bounds:o=[[-9,49],[2,61]]}=e,{color:g="#206095"}=e,{lineWidth:p=2.5}=e,{fillOpacity:d=.1}=e,{saturation:v=.3}=e,u=400,_=400;const c=(m,w,M)=>`http://b.tile.openstreetmap.fr/hot/${M}/${m}/${w}.png`;function a(m,w,M){const I=at().fitSize([m,w],M),T=Math.floor(Math.log2(I.scale()*(2*Math.PI))),q=Math.pow(2,T)/(2*Math.PI);return I.center(I.invert([m/2,w/2])),I.scale(q),I.translate([m/2,w/2]),I}function f(){u=this.clientWidth,_=this.clientHeight,s(5,u),s(6,_)}return i.$$set=m=>{"geojson"in m&&s(0,h=m.geojson),"bounds"in m&&s(10,o=m.bounds),"color"in m&&s(1,g=m.color),"lineWidth"in m&&s(2,p=m.lineWidth),"fillOpacity"in m&&s(3,d=m.fillOpacity),"saturation"in m&&s(4,v=m.saturation)},i.$$.update=()=>{i.$$.dirty&1025&&s(12,t=h||{type:"Polygon",coordinates:[[[o[0][0],o[0][1]],[o[0][0],o[1][1]],[o[1][0],o[1][1]],[o[1][0],o[0][1]],[o[0][0],o[0][1]]]]}),i.$$.dirty&4192&&s(11,n=a(u,_,t)),i.$$.dirty&2144&&s(8,r=st().size([u,_]).scale(n.scale()*2*Math.PI).translate(n([0,0])).tileSize(256)),i.$$.dirty&2048&&s(7,l=rt(n))},[h,g,p,d,v,u,_,l,r,c,o,n,t,f]}class Mt extends x{constructor(e){super(),$(this,e,kt,yt,ee,{geojson:0,bounds:10,color:1,lineWidth:2,fillOpacity:3,saturation:4})}}function Ie(i,e,s){const t=i.slice();return t[14]=e[s],t}function ze(i,e,s){const t=i.slice();return t[17]=e[s],t[19]=s,t}function Se(i,e,s){const t=i.slice();return t[17]=e[s],t[19]=s,t}function Pe(i,e,s){const t=i.slice();return t[14]=e[s],t[19]=s,t}function Ce(i){let e,s=i[7],t=[];for(let n=0;n<s.length;n+=1)t[n]=Ae(Pe(i,s,n));return{c(){e=C("ul");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=A(n,"UL",{class:!0});var r=S(e);for(let l=0;l<t.length;l+=1)t[l].l(r);r.forEach(b),this.h()},h(){y(e,"class","legend-block svelte-1ri9pb8")},m(n,r){k(n,e,r);for(let l=0;l<t.length;l+=1)t[l].m(e,null)},p(n,r){if(r&144){s=n[7];let l;for(l=0;l<s.length;l+=1){const h=Pe(n,s,l);t[l]?t[l].p(h,r):(t[l]=Ae(h),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=s.length}},d(n){n&&b(e),L(t,n)}}}function Ae(i){let e,s,t,n,r=i[14]+"",l,h,o;return{c(){e=C("li"),s=C("div"),t=D(),n=C("span"),l=K(r),o=D(),this.h()},l(g){e=A(g,"LI",{class:!0});var p=S(e);s=A(p,"DIV",{class:!0}),S(s).forEach(b),t=W(p),n=A(p,"SPAN",{class:!0});var d=S(n);l=H(d,r),d.forEach(b),o=W(p),p.forEach(b),this.h()},h(){y(s,"class","legend-vis "+(i[19]==0?"bar":"marker")+" svelte-1ri9pb8"),E(s,"height","1rem",!1),E(s,"width",i[19]==0?"1rem":i[4]+"px",!1),y(n,"class",h=Ye(i[19]==0?"bold":"brackets")+" svelte-1ri9pb8"),y(e,"class","svelte-1ri9pb8")},m(g,p){k(g,e,p),z(e,s),z(e,t),z(e,n),z(n,l),z(e,o)},p(g,p){p&16&&E(s,"width",g[19]==0?"1rem":g[4]+"px",!1),p&128&&r!==(r=g[14]+"")&&R(l,r)},d(g){g&&b(e)}}}function Ne(i){let e,s=i[1](i[17].value)+"",t,n,r;return{c(){e=C("span"),t=K(s),n=K(i[2]),this.h()},l(l){e=A(l,"SPAN",{class:!0});var h=S(e);t=H(h,s),n=H(h,i[2]),h.forEach(b),this.h()},h(){y(e,"class",r="label "+(i[19]==0?"bold":"sml brackets")+" svelte-1ri9pb8")},m(l,h){k(l,e,h),z(e,t),z(e,n)},p(l,h){h&34&&s!==(s=l[1](l[17].value)+"")&&R(t,s),h&4&&R(n,l[2])},d(l){l&&b(e)}}}function Et(i){let e,s=`calc(${i[6](i[17][i[0]])}% - ${i[4]/2}px)`,t=`${i[4]}px`;return{c(){e=C("div"),this.h()},l(n){e=A(n,"DIV",{class:!0}),S(e).forEach(b),this.h()},h(){y(e,"class","marker svelte-1ri9pb8"),E(e,"left",s,!1),E(e,"border-left-width",t,!1)},m(n,r){k(n,e,r)},p(n,r){r&113&&s!==(s=`calc(${n[6](n[17][n[0]])}% - ${n[4]/2}px)`)&&E(e,"left",s,!1),r&16&&t!==(t=`${n[4]}px`)&&E(e,"border-left-width",t,!1)},d(n){n&&b(e)}}}function It(i){let e,s=`${i[6](i[17][i[0]])}%`;return{c(){e=C("div"),this.h()},l(t){e=A(t,"DIV",{class:!0}),S(e).forEach(b),this.h()},h(){y(e,"class","bar svelte-1ri9pb8"),E(e,"left","0",!1),E(e,"width",s,!1)},m(t,n){k(t,e,n)},p(t,n){n&97&&s!==(s=`${t[6](t[17][t[0]])}%`)&&E(e,"width",s,!1)},d(t){t&&b(e)}}}function Ke(i){let e;function s(r,l){return r[19]==0?It:Et}let n=s(i)(i);return{c(){n.c(),e=N()},l(r){n.l(r),e=N()},m(r,l){n.m(r,l),k(r,e,l)},p(r,l){n.p(r,l)},d(r){n.d(r),r&&b(e)}}}function He(i){let e,s=i[14].label+"",t,n,r,l,h,o=`${i[3]}px`,g=i[14].values,p=[];for(let u=0;u<g.length;u+=1)p[u]=Ne(Se(i,g,u));let d=i[14].values,v=[];for(let u=0;u<d.length;u+=1)v[u]=Ke(ze(i,d,u));return{c(){e=C("div"),t=K(s),n=D();for(let u=0;u<p.length;u+=1)p[u].c();r=D(),l=C("div");for(let u=0;u<v.length;u+=1)v[u].c();h=D(),this.h()},l(u){e=A(u,"DIV",{class:!0});var _=S(e);t=H(_,s),n=W(_);for(let a=0;a<p.length;a+=1)p[a].l(_);_.forEach(b),r=W(u),l=A(u,"DIV",{class:!0});var c=S(l);for(let a=0;a<v.length;a+=1)v[a].l(c);h=W(c),c.forEach(b),this.h()},h(){y(e,"class","label-group svelte-1ri9pb8"),y(l,"class","bar-group svelte-1ri9pb8"),E(l,"height",o,!1)},m(u,_){k(u,e,_),z(e,t),z(e,n);for(let c=0;c<p.length;c+=1)p[c].m(e,null);k(u,r,_),k(u,l,_);for(let c=0;c<v.length;c+=1)v[c].m(l,null);z(l,h)},p(u,_){if(_&32&&s!==(s=u[14].label+"")&&R(t,s),_&38){g=u[14].values;let c;for(c=0;c<g.length;c+=1){const a=Se(u,g,c);p[c]?p[c].p(a,_):(p[c]=Ne(a),p[c].c(),p[c].m(e,null))}for(;c<p.length;c+=1)p[c].d(1);p.length=g.length}if(_&113){d=u[14].values;let c;for(c=0;c<d.length;c+=1){const a=ze(u,d,c);v[c]?v[c].p(a,_):(v[c]=Ke(a),v[c].c(),v[c].m(l,h))}for(;c<v.length;c+=1)v[c].d(1);v.length=d.length}_&8&&o!==(o=`${u[3]}px`)&&E(l,"height",o,!1)},d(u){u&&b(e),L(p,u),u&&b(r),u&&b(l),L(v,u)}}}function zt(i){let e,s,t=i[7][1]&&Ce(i),n=i[5],r=[];for(let l=0;l<n.length;l+=1)r[l]=He(Ie(i,n,l));return{c(){t&&t.c(),e=D();for(let l=0;l<r.length;l+=1)r[l].c();s=N()},l(l){t&&t.l(l),e=W(l);for(let h=0;h<r.length;h+=1)r[h].l(l);s=N()},m(l,h){t&&t.m(l,h),k(l,e,h);for(let o=0;o<r.length;o+=1)r[o].m(l,h);k(l,s,h)},p(l,[h]){if(l[7][1]?t?t.p(l,h):(t=Ce(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),h&127){n=l[5];let o;for(o=0;o<n.length;o+=1){const g=Ie(l,n,o);r[o]?r[o].p(g,h):(r[o]=He(g),r[o].c(),r[o].m(s.parentNode,s))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},i:U,o:U,d(l){t&&t.d(l),l&&b(e),L(r,l),l&&b(s)}}}function St(i,e,s){let t,n,r,l,{data:h}=e,{xKey:o="value"}=e,{yKey:g="category"}=e,{zKey:p="group"}=e,{format:d=a=>a}=e,{suffix:v="%"}=e,{barHeight:u=25}=e,{markerWidth:_=3}=e;function c(a,f){let m={};for(const M of a)m[M[f]]||(m[M[f]]={label:M[f],values:[]}),m[M[f]].values.push(M);let w=[];for(const M in m)w.push(m[M]);return w}return i.$$set=a=>{"data"in a&&s(8,h=a.data),"xKey"in a&&s(0,o=a.xKey),"yKey"in a&&s(9,g=a.yKey),"zKey"in a&&s(10,p=a.zKey),"format"in a&&s(1,d=a.format),"suffix"in a&&s(2,v=a.suffix),"barHeight"in a&&s(3,u=a.barHeight),"markerWidth"in a&&s(4,_=a.markerWidth)},i.$$.update=()=>{i.$$.dirty&257&&s(11,t=[0,Math.max(...h.map(a=>a[o]))]),i.$$.dirty&768&&h.map(a=>a[g]).filter((a,f,m)=>m.indexOf(a)===f),i.$$.dirty&1280&&s(7,n=h.map(a=>a[p]).filter((a,f,m)=>m.indexOf(a)===f)),i.$$.dirty&2048&&s(6,r=a=>a/t[1]*100),i.$$.dirty&768&&s(5,l=c(h,g))},[o,d,v,u,_,l,r,n,h,g,p,t]}class Pt extends x{constructor(e){super(),$(this,e,St,zt,ee,{data:8,xKey:0,yKey:9,zKey:10,format:1,suffix:2,barHeight:3,markerWidth:4})}}function De(i,e,s){const t=i.slice();return t[14]=e[s],t[16]=s,t}function We(i,e,s){const t=i.slice();return t[17]=e[s],t[19]=s,t}function Te(i,e,s){const t=i.slice();return t[17]=e[s],t[19]=s,t}function Be(i,e,s){const t=i.slice();return t[21]=e[s],t[16]=s,t}function Re(i){let e,s=i[6],t=[];for(let n=0;n<s.length;n+=1)t[n]=Ve(Be(i,s,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=N()},l(n){for(let r=0;r<t.length;r+=1)t[r].l(n);e=N()},m(n,r){for(let l=0;l<t.length;l+=1)t[l].m(n,r);k(n,e,r)},p(n,r){if(r&68){s=n[6];let l;for(l=0;l<s.length;l+=1){const h=Be(n,s,l);t[l]?t[l].p(h,r):(t[l]=Ve(h),t[l].c(),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=s.length}},d(n){L(t,n),n&&b(e)}}}function Ve(i){let e,s,t=`${i[16]==0?0:i[2]}px`,n,r,l=i[21]+"",h,o,g;return{c(){e=C("li"),s=C("div"),n=D(),r=C("span"),h=K(l),g=D(),this.h()},l(p){e=A(p,"LI",{class:!0});var d=S(e);s=A(d,"DIV",{class:!0}),S(s).forEach(b),n=W(d),r=A(d,"SPAN",{class:!0});var v=S(r);h=H(v,l),v.forEach(b),g=W(d),d.forEach(b),this.h()},h(){y(s,"class","legend-vis "+(i[16]==0?"bar":"marker-vis")+" svelte-vf344q"),E(s,"border-bottom-width",t,!1),y(r,"class",o=Ye(i[16]==0?"bold":"brackets")+" svelte-vf344q"),y(e,"class","svelte-vf344q")},m(p,d){k(p,e,d),z(e,s),z(e,n),z(e,r),z(r,h),z(e,g)},p(p,d){d&4&&t!==(t=`${p[16]==0?0:p[2]}px`)&&E(s,"border-bottom-width",t,!1),d&64&&l!==(l=p[21]+"")&&R(h,l)},d(p){p&&b(e)}}}function Ct(i){let e,s=i[14].values,t=[];for(let n=0;n<s.length;n+=1)t[n]=je(We(i,s,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=N()},l(n){for(let r=0;r<t.length;r+=1)t[r].l(n);e=N()},m(n,r){for(let l=0;l<t.length;l+=1)t[l].m(n,r);k(n,e,r)},p(n,r){if(r&181){s=n[14].values;let l;for(l=0;l<s.length;l+=1){const h=We(n,s,l);t[l]?t[l].p(h,r):(t[l]=je(h),t[l].c(),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=s.length}},d(n){L(t,n),n&&b(e)}}}function At(i){let e,s=i[14].values,t=[];for(let n=0;n<s.length;n+=1)t[n]=Le(Te(i,s,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=N()},l(n){for(let r=0;r<t.length;r+=1)t[r].l(n);e=N()},m(n,r){for(let l=0;l<t.length;l+=1)t[l].m(n,r);k(n,e,r)},p(n,r){if(r&177){s=n[14].values;let l;for(l=0;l<s.length;l+=1){const h=Te(n,s,l);t[l]?t[l].p(h,r):(t[l]=Le(h),t[l].c(),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=s.length}},d(n){L(t,n),n&&b(e)}}}function je(i){let e,s=`calc(${i[5](i[17][i[0]])}% - ${i[2]/2}px)`,t=`${i[19]/i[7].length*100}%`,n=`${1/i[7].length*100}%`,r=`${i[2]}px`;return{c(){e=C("div"),this.h()},l(l){e=A(l,"DIV",{class:!0}),S(e).forEach(b),this.h()},h(){y(e,"class","marker svelte-vf344q"),E(e,"bottom",s,!1),E(e,"height","0px",!1),E(e,"left",t,!1),E(e,"width",n,!1),E(e,"border-bottom-width",r,!1)},m(l,h){k(l,e,h)},p(l,h){h&53&&s!==(s=`calc(${l[5](l[17][l[0]])}% - ${l[2]/2}px)`)&&E(e,"bottom",s,!1),h&128&&t!==(t=`${l[19]/l[7].length*100}%`)&&E(e,"left",t,!1),h&128&&n!==(n=`${1/l[7].length*100}%`)&&E(e,"width",n,!1),h&4&&r!==(r=`${l[2]}px`)&&E(e,"border-bottom-width",r,!1)},d(l){l&&b(e)}}}function Le(i){let e,s=`${100-i[5](i[17][i[0]])}%`,t=`${i[5](i[17][i[0]])}%`,n=`${i[19]/i[7].length*100}%`,r=`calc(${1/i[7].length*100}% + 0.2px)`;return{c(){e=C("div"),this.h()},l(l){e=A(l,"DIV",{class:!0}),S(e).forEach(b),this.h()},h(){y(e,"class","bar svelte-vf344q"),E(e,"top",s,!1),E(e,"height",t,!1),E(e,"left",n,!1),E(e,"width",r,!1)},m(l,h){k(l,e,h)},p(l,h){h&49&&s!==(s=`${100-l[5](l[17][l[0]])}%`)&&E(e,"top",s,!1),h&49&&t!==(t=`${l[5](l[17][l[0]])}%`)&&E(e,"height",t,!1),h&128&&n!==(n=`${l[19]/l[7].length*100}%`)&&E(e,"left",n,!1),h&128&&r!==(r=`calc(${1/l[7].length*100}% + 0.2px)`)&&E(e,"width",r,!1)},d(l){l&&b(e)}}}function Oe(i){let e;function s(r,l){return r[16]==0?At:Ct}let n=s(i)(i);return{c(){n.c(),e=N()},l(r){n.l(r),e=N()},m(r,l){n.m(r,l),k(r,e,l)},p(r,l){n.p(r,l)},d(r){n.d(r),r&&b(e)}}}function Nt(i){let e,s,t,n=`${i[1]}px`,r,l,h,o=i[3][0]+"",g,p,d,v=i[3][1]+"",u,_=i[6][1]&&Re(i),c=i[4],a=[];for(let f=0;f<c.length;f+=1)a[f]=Oe(De(i,c,f));return{c(){e=C("ul"),_&&_.c(),s=D(),t=C("div");for(let f=0;f<a.length;f+=1)a[f].c();r=D(),l=C("div"),h=C("div"),g=K(o),p=D(),d=C("div"),u=K(v),this.h()},l(f){e=A(f,"UL",{class:!0});var m=S(e);_&&_.l(m),m.forEach(b),s=W(f),t=A(f,"DIV",{class:!0});var w=S(t);for(let q=0;q<a.length;q+=1)a[q].l(w);w.forEach(b),r=W(f),l=A(f,"DIV",{class:!0});var M=S(l);h=A(M,"DIV",{class:!0});var I=S(h);g=H(I,o),I.forEach(b),p=W(M),d=A(M,"DIV",{class:!0});var T=S(d);u=H(T,v),T.forEach(b),M.forEach(b),this.h()},h(){y(e,"class","legend-block svelte-vf344q"),y(t,"class","bar-group svelte-vf344q"),E(t,"height",n,!1),y(h,"class","svelte-vf344q"),E(h,"left",0,!1),y(d,"class","svelte-vf344q"),E(d,"right",0,!1),y(l,"class","x-scale svelte-vf344q"),E(l,"height","1rem",!1)},m(f,m){k(f,e,m),_&&_.m(e,null),k(f,s,m),k(f,t,m);for(let w=0;w<a.length;w+=1)a[w].m(t,null);k(f,r,m),k(f,l,m),z(l,h),z(h,g),z(l,p),z(l,d),z(d,u)},p(f,[m]){if(f[6][1]?_?_.p(f,m):(_=Re(f),_.c(),_.m(e,null)):_&&(_.d(1),_=null),m&181){c=f[4];let w;for(w=0;w<c.length;w+=1){const M=De(f,c,w);a[w]?a[w].p(M,m):(a[w]=Oe(M),a[w].c(),a[w].m(t,null))}for(;w<a.length;w+=1)a[w].d(1);a.length=c.length}m&2&&n!==(n=`${f[1]}px`)&&E(t,"height",n,!1),m&8&&o!==(o=f[3][0]+"")&&R(g,o),m&8&&v!==(v=f[3][1]+"")&&R(u,v)},i:U,o:U,d(f){f&&b(e),_&&_.d(),f&&b(s),f&&b(t),L(a,f),f&&b(r),f&&b(l)}}}function Kt(i,e,s){let t,n,r,l,h,{data:o}=e,{xKey:g="category"}=e,{yKey:p="value"}=e,{zKey:d="group"}=e,{height:v=65}=e,{markerWidth:u=2.5}=e,{minmax:_=["0 years","80 plus"]}=e,{format:c=f=>Math.round(f)}=e;function a(f,m){let w={};for(const I of f)w[I[m]]||(w[I[m]]={label:I[m],values:[]}),w[I[m]].values.push(I);let M=[];for(const I in w)M.push(w[I]);return M}return i.$$set=f=>{"data"in f&&s(8,o=f.data),"xKey"in f&&s(9,g=f.xKey),"yKey"in f&&s(0,p=f.yKey),"zKey"in f&&s(10,d=f.zKey),"height"in f&&s(1,v=f.height),"markerWidth"in f&&s(2,u=f.markerWidth),"minmax"in f&&s(3,_=f.minmax),"format"in f&&s(11,c=f.format)},i.$$.update=()=>{i.$$.dirty&768&&s(7,t=o.map(f=>f[g]).filter((f,m,w)=>w.indexOf(f)===m)),i.$$.dirty&257&&s(12,n=[0,Math.max(...o.map(f=>f[p]))]),i.$$.dirty&1280&&s(6,r=o.map(f=>f[d]).filter((f,m,w)=>w.indexOf(f)===m)),i.$$.dirty&4096&&s(5,l=f=>Math.abs(f/n[1])*100),i.$$.dirty&1280&&s(4,h=a(o,d))},[p,v,u,_,h,l,r,t,o,g,d,c,n]}class Ht extends x{constructor(e){super(),$(this,e,Kt,Nt,ee,{data:8,xKey:9,yKey:0,zKey:10,height:1,markerWidth:2,minmax:3,format:11})}}function Dt(i){let e,s=i[4](i[0][0][i[2]])+"",t,n,r,l,h,o,g,p=i[4](i[0][1][i[2]])+"",d,v,u=i[0][1][i[3]]+"",_;return{c(){e=C("div"),t=K(s),n=D(),r=C("div"),l=K(i[1]),h=D(),o=C("div"),g=C("mark"),d=K(p),v=K(` 
  for `),_=K(u),this.h()},l(c){e=A(c,"DIV",{class:!0});var a=S(e);t=H(a,s),a.forEach(b),n=W(c),r=A(c,"DIV",{class:!0});var f=S(r);l=H(f,i[1]),f.forEach(b),h=W(c),o=A(c,"DIV",{class:!0});var m=S(o);g=A(m,"MARK",{class:!0});var w=S(g);d=H(w,p),w.forEach(b),v=H(m,` 
  for `),_=H(m,u),m.forEach(b),this.h()},h(){y(e,"class","num-big svelte-19zwnt3"),y(r,"class","num-suffix svelte-19zwnt3"),y(g,"class","svelte-19zwnt3"),y(o,"class","num-desc svelte-19zwnt3")},m(c,a){k(c,e,a),z(e,t),k(c,n,a),k(c,r,a),z(r,l),k(c,h,a),k(c,o,a),z(o,g),z(g,d),z(o,v),z(o,_)},p(c,[a]){a&21&&s!==(s=c[4](c[0][0][c[2]])+"")&&R(t,s),a&2&&R(l,c[1]),a&21&&p!==(p=c[4](c[0][1][c[2]])+"")&&R(d,p),a&9&&u!==(u=c[0][1][c[3]]+"")&&R(_,u)},i:U,o:U,d(c){c&&b(e),c&&b(n),c&&b(r),c&&b(h),c&&b(o)}}}function Wt(i,e,s){let{data:t}=e,{suffix:n=""}=e,{xKey:r="value"}=e,{zKey:l="group"}=e,{format:h=o=>o}=e;return i.$$set=o=>{"data"in o&&s(0,t=o.data),"suffix"in o&&s(1,n=o.suffix),"xKey"in o&&s(2,r=o.xKey),"zKey"in o&&s(3,l=o.zKey),"format"in o&&s(4,h=o.format)},[t,n,r,l,h]}class Tt extends x{constructor(e){super(),$(this,e,Wt,Dt,ee,{data:0,suffix:1,xKey:2,zKey:3,format:4})}}function Ue(i,e,s){const t=i.slice();return t[6]=e[s],t}function qe(i){let e,s,t,n,r,l,h,o,g,p,d,v,u,_,c;return n=new lt({props:{$$slots:{default:[Vt]},$$scope:{ctx:i}}}),{c(){e=C("h1"),s=K(i[0]),t=D(),Z(n.$$.fragment),r=D(),l=C("span"),h=K("Source: Census 2011 data. Office for National Statistics | "),o=C("a"),g=K("Download the data"),v=K(" | "),u=C("a"),_=K("Build your own profile"),this.h()},l(a){e=A(a,"H1",{class:!0});var f=S(e);s=H(f,i[0]),f.forEach(b),t=W(a),te(n.$$.fragment,a),r=W(a),l=A(a,"SPAN",{class:!0});var m=S(l);h=H(m,"Source: Census 2011 data. Office for National Statistics | "),o=A(m,"A",{href:!0,download:!0});var w=S(o);g=H(w,"Download the data"),w.forEach(b),v=H(m," | "),u=A(m,"A",{href:!0,target:!0});var M=S(u);_=H(M,"Build your own profile"),M.forEach(b),m.forEach(b),this.h()},h(){y(e,"class","svelte-bp85os"),y(o,"href",p=Lt(i[3])),y(o,"download",d=i[0]+".csv"),y(u,"href",nt),y(u,"target","_blank"),y(l,"class","footnote svelte-bp85os")},m(a,f){k(a,e,f),z(e,s),k(a,t,f),J(n,a,f),k(a,r,f),k(a,l,f),z(l,h),z(l,o),z(o,g),z(l,v),z(l,u),z(u,_),c=!0},p(a,f){(!c||f&1)&&R(s,a[0]);const m={};f&514&&(m.$$scope={dirty:f,ctx:a}),n.$set(m),(!c||f&1&&d!==(d=a[0]+".csv"))&&y(o,"download",d)},i(a){c||(V(n.$$.fragment,a),c=!0)},o(a){j(n.$$.fragment,a),c=!1},d(a){a&&b(e),a&&b(t),Q(n,a),a&&b(r),a&&b(l)}}}function Bt(i){let e,s,t;return s=new Mt({props:{geojson:i[1]}}),{c(){e=C("div"),Z(s.$$.fragment),this.h()},l(n){e=A(n,"DIV",{});var r=S(e);te(s.$$.fragment,r),r.forEach(b),this.h()},h(){E(e,"height","230px",!1),E(e,"width","100%",!1)},m(n,r){k(n,e,r),J(s,e,null),t=!0},p(n,r){const l={};r&2&&(l.geojson=n[1]),s.$set(l)},i(n){t||(V(s.$$.fragment,n),t=!0)},o(n){j(s.$$.fragment,n),t=!1},d(n){n&&b(e),Q(s)}}}function Rt(i){let e,s,t;var n=i[2][i[6].meta.chart];function r(l){return{props:{data:l[6].data,suffix:l[6].meta.unit,format:Je(l[6].meta.format)}}}return n&&(e=new n(r(i))),{c(){e&&Z(e.$$.fragment),s=D()},l(l){e&&te(e.$$.fragment,l),s=W(l)},m(l,h){e&&J(e,l,h),k(l,s,h),t=!0},p(l,h){if(n!==(n=l[2][l[6].meta.chart])){if(e){fe();const o=e;j(o.$$.fragment,1,0,()=>{Q(o,1)}),oe()}n?(e=new n(r(l)),Z(e.$$.fragment),V(e.$$.fragment,1),J(e,s.parentNode,s)):e=null}},i(l){t||(e&&V(e.$$.fragment,l),t=!0)},o(l){e&&j(e.$$.fragment,l),t=!1},d(l){e&&Q(e,l),l&&b(s)}}}function Fe(i){let e,s;return e=new Ge({props:{title:i[6].meta.label,$$slots:{default:[Rt]},$$scope:{ctx:i}}}),{c(){Z(e.$$.fragment)},l(t){te(e.$$.fragment,t)},m(t,n){J(e,t,n),s=!0},p(t,n){const r={};n&512&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){s||(V(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){Q(e,t)}}}function Vt(i){let e,s,t,n;e=new Ge({props:{title:"Area map",$$slots:{default:[Bt]},$$scope:{ctx:i}}});let r=i[3],l=[];for(let o=0;o<r.length;o+=1)l[o]=Fe(Ue(i,r,o));const h=o=>j(l[o],1,1,()=>{l[o]=null});return{c(){Z(e.$$.fragment),s=D();for(let o=0;o<l.length;o+=1)l[o].c();t=N()},l(o){te(e.$$.fragment,o),s=W(o);for(let g=0;g<l.length;g+=1)l[g].l(o);t=N()},m(o,g){J(e,o,g),k(o,s,g);for(let p=0;p<l.length;p+=1)l[p].m(o,g);k(o,t,g),n=!0},p(o,g){const p={};if(g&514&&(p.$$scope={dirty:g,ctx:o}),e.$set(p),g&12){r=o[3];let d;for(d=0;d<r.length;d+=1){const v=Ue(o,r,d);l[d]?(l[d].p(v,g),V(l[d],1)):(l[d]=Fe(v),l[d].c(),V(l[d],1),l[d].m(t.parentNode,t))}for(fe(),d=r.length;d<l.length;d+=1)h(d);oe()}},i(o){if(!n){V(e.$$.fragment,o);for(let g=0;g<r.length;g+=1)V(l[g]);n=!0}},o(o){j(e.$$.fragment,o),l=l.filter(Boolean);for(let g=0;g<l.length;g+=1)j(l[g]);n=!1},d(o){Q(e,o),o&&b(s),L(l,o),o&&b(t)}}}function jt(i){let e,s,t=i[0]&&i[3]&&i[1]&&qe(i);return{c(){t&&t.c(),e=N()},l(n){t&&t.l(n),e=N()},m(n,r){t&&t.m(n,r),k(n,e,r),s=!0},p(n,[r]){n[0]&&n[3]&&n[1]?t?(t.p(n,r),r&3&&V(t,1)):(t=qe(n),t.c(),V(t,1),t.m(e.parentNode,e)):t&&(fe(),j(t,1,1,()=>{t=null}),oe())},i(n){s||(V(t),s=!0)},o(n){j(t),s=!1},d(n){t&&t.d(n),n&&b(e)}}}function Lt(i){let e=`table,category,area,value,unit
`;for(const s of i){let t=s.meta.label,n=s.meta.unit;for(const r of s.data)e+=`"${t}","${r.category}","${r.group}",${r.value},"${n}"
`}return"data:text/csv;charset=utf-8,"+encodeURI(e)}function Ot(i,e,s){let t;tt(i,ht,o=>s(4,t=o));const n={BarChart:Pt,ProfileChart:Ht,NumBlock:Tt};let r,l,h;return it(()=>{s(1,h=ot(t.url.hash.slice(1))),console.warn(h),s(0,r=h.properties.title),new ut.Child({id:"profile",polling:500})}),[r,h,n,l]}class Zt extends x{constructor(e){super(),$(this,e,Ot,jt,ee,{})}}export{Zt as default};