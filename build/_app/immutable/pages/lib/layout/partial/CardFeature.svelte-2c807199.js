import{S as z,i as D,s as H,e as d,k as A,t as F,c as p,a as w,d as v,m as G,h as L,b as r,K as S,f as E,g as K,G as f,j as V,E as j,V as M,Z as P}from"../../../../chunks/index-319e1e25.js";function R(a){let e,l,o,_,h,c,n,u,m,g,t,b=`span ${a[0]==1?1:a[0]>a[6]?a[6]:a[0]}`,k=`span ${a[1]}`;return{c(){e=d("article"),l=d("div"),o=d("img"),h=A(),c=d("h2"),n=d("a"),u=F(a[2]),m=A(),g=d("p"),t=F(a[4]),this.h()},l(s){e=p(s,"ARTICLE",{class:!0});var i=w(e);l=p(i,"DIV",{class:!0});var C=w(l);o=p(C,"IMG",{class:!0,src:!0,alt:!0}),C.forEach(v),h=G(i),c=p(i,"H2",{class:!0});var I=w(c);n=p(I,"A",{class:!0,href:!0,"data-gtm-group":!0,"data-gtm-group-position":!0});var q=w(n);u=L(q,a[2]),q.forEach(v),I.forEach(v),m=G(i),g=p(i,"P",{class:!0});var y=w(g);t=L(y,a[4]),y.forEach(v),i.forEach(v),this.h()},h(){r(o,"class","tile__highlighted-content-image"),S(o.src,_=a[5])||r(o,"src",_),r(o,"alt",""),r(l,"class","tile__highlighted-content-image-container"),r(n,"class","margin-left--0 tile__link tile__link--highlighted-content-title font-size--24"),r(n,"href",a[3]),r(n,"data-gtm-group","in-focus"),r(n,"data-gtm-group-position","1"),r(c,"class","margin-top--0 margin-bottom--0"),r(g,"class","tile__text-description margin-top--0 margin-bottom--0"),r(e,"class","tile tile__highlighted-content svelte-1krn9ab"),E(e,"grid-column",b,!1),E(e,"grid-row",k,!1)},m(s,i){K(s,e,i),f(e,l),f(l,o),f(e,h),f(e,c),f(c,n),f(n,u),f(e,m),f(e,g),f(g,t)},p(s,[i]){i&32&&!S(o.src,_=s[5])&&r(o,"src",_),i&4&&V(u,s[2]),i&8&&r(n,"href",s[3]),i&16&&V(t,s[4]),i&65&&b!==(b=`span ${s[0]==1?1:s[0]>s[6]?s[6]:s[0]}`)&&E(e,"grid-column",b,!1),i&2&&k!==(k=`span ${s[1]}`)&&E(e,"grid-row",k,!1)},i:j,o:j,d(s){s&&v(e)}}}function T(a,e,l){let o,{colspan:_=1}=e,{rowspan:h=1}=e,{title:c="Local statistics"}=e,{url:n="https://www.ons.gov.uk/help/localstatistics"}=e,{description:u="Where to find statistics covering specific areas"}=e,{image:m="https://static.ons.gov.uk/images/cf4ffa0c-d7ea-43a9-85a4-03ea05bbaaaf/original/local-statistics.png"}=e;const{cols:g}=M("tiles");return P(a,g,t=>l(6,o=t)),a.$$set=t=>{"colspan"in t&&l(0,_=t.colspan),"rowspan"in t&&l(1,h=t.rowspan),"title"in t&&l(2,c=t.title),"url"in t&&l(3,n=t.url),"description"in t&&l(4,u=t.description),"image"in t&&l(5,m=t.image)},[_,h,c,n,u,m,o,g]}class Z extends z{constructor(e){super(),D(this,e,T,R,H,{colspan:0,rowspan:1,title:2,url:3,description:4,image:5})}}export{Z as default};