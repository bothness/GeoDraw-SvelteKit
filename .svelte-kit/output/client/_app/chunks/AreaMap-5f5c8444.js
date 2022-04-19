import{C as a,S as e,i as o,s as t,e as s,c as n,a as i,d as r,b as c,I as d,f as l,E as h,L as u,M as g,O as y,P as b,z as p,Q as f,N as w,T as m}from"./vendor-c99bf92a.js";const v=a(void 0),x=a({}),_=a([]),L=a([]),M=a(void 0),S=a(5);let $=[[-5.816,49.864],[1.863,55.872]];function j(a){let e,o;return{c(){e=s("main"),o=s("div"),this.h()},l(a){e=n(a,"MAIN",{class:!0});var t=i(e);o=n(t,"DIV",{class:!0,tabindex:!0,"aria-label":!0,id:!0,style:!0}),i(o).forEach(r),t.forEach(r),this.h()},h(){c(o,"class","mapboxgl-canvas"),c(o,"tabindex","0"),c(o,"aria-label","Map"),c(o,"id","mapcontainer"),d(o,"width",a[0]),d(o,"height",a[1]),c(e,"class","svelte-16o3juj")},m(t,s){l(t,e,s),h(e,o),a[7](o)},p(a,[e]){1&e&&d(o,"width",a[0]),2&e&&d(o,"height",a[1])},i:u,o:u,d(o){o&&r(e),a[7](null)}}}function k(a,e,o){let t,s,n,i,r,c;g(a,M,(a=>o(9,t=a))),g(a,x,(a=>o(10,s=a))),g(a,_,(a=>o(11,n=a))),g(a,L,(a=>o(12,i=a))),g(a,S,(a=>o(13,r=a))),g(a,v,(a=>o(14,c=a)));const d=y();let l,{drawing_tools:h=!1}=e,{width:u="100vw"}=e,{height:j="100vh"}=e,k=[];async function I(){console.log("set layers"),x.subscribe((async()=>{for(const[a,e]of Object.entries(s))t.getSource(a)&&t.removeSource(a),t.getSource(a)||t.addSource(a,e)})),_.subscribe((async()=>{for(const a of n)console.log("layer",a),t.getLayer(a.id)&&t.removeLayer(a.id),t.addLayer(a)})),L.subscribe((async()=>{for(const a of i)a.off||console.log("adding",a.event,a.layer),t.on(a.event,a.layer,a.callback)})),h&&await async function(){t.addSource("drawsrc",{type:"geojson",data:{type:"Feature",geometry:{type:"Polygon",coordinates:[]}}}),t.addLayer({id:"draw_layer",type:"line",source:"drawsrc",paint:{"line-color":"#222","line-width":5,"line-dasharray":[2,1]}}),t.on("click","bounds",(function(a){switch(console.log(a.lngLat,c),c){case"radius":C(a.lngLat);break;case"click":!function(a){const e=[[a.point.x-4,a.point.y-4],[a.point.x+4,a.point.y+4]],o=t.queryRenderedFeatures(e,{layers:["bounds"]});console.log(o),d("coordinate_change",{code:o})}(a)}})),v.subscribe((()=>{console.warn("------dt-------",c)})),o(3,h=!1)}(),t.fitBounds($,{padding:20})}function P(a,e){t.getSource(a).setData(e)}function C(a,e=20){var o=a.lat,s=a.lng;k=a;for(var n,i,c,l=r,h=[],u=l/(111.32*Math.cos(o*Math.PI/180)),g=l/110.574,y=0;y<e;y++)n=y/e*(2*Math.PI),i=u*Math.cos(n),c=g*Math.sin(n),h.push([s+i,o+c]);h.push(h[0]),P("drawsrc",{type:"Feature",geometry:{type:"Polygon",coordinates:[h]}}),d("coordinate_change",{code:a}),t.panTo(a)}return S.subscribe((()=>{console.log("radius",b(S),k,k.length),t&&C(k)})),p((async function(){console.warn(l),w(M,t=new m.Map({container:"mapcontainer",style:"https://bothness.github.io/ons-basemaps/data/style-omt.json",minZoom:4,maxZoom:14,maxBounds:null,pitch:10,center:[0,52],zoom:4}),t),t.addControl(new m.NavigationControl,"bottom-right"),t.doubleClickZoom.disable(),t.on("load",I)})),a.$$set=a=>{"drawing_tools"in a&&o(3,h=a.drawing_tools),"width"in a&&o(0,u=a.width),"height"in a&&o(1,j=a.height)},[u,j,l,h,I,P,C,function(a){f[a?"unshift":"push"]((()=>{l=a,o(2,l)}))}]}class I extends e{constructor(a){super(),o(this,a,k,j,t,{drawing_tools:3,width:0,height:1,SetLayers:4,change_data:5,draw_radius:6})}get SetLayers(){return this.$$.ctx[4]}get change_data(){return this.$$.ctx[5]}get draw_radius(){return this.$$.ctx[6]}}export{I as A,_ as a,L as b,v as d,x as m};