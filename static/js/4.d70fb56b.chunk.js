(this["webpackJsonpinterview-app"]=this["webpackJsonpinterview-app"]||[]).push([[4],{118:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),o=n(77),u=n(117),s=n(94),i=n.n(s),l=n(96),p=n(27),f=n(97),g=n.n(f),m={get:function(e){return g.a.get("".concat(e))},post:function(e,t){return g.a.post("".concat(e),t)},patch:function(e,t){return g.a.patch("".concat(e),t)}},d=function(e){return{type:p.b,payload:e}},v=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,e.next=3,m.get(n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=Object(o.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",alignItems:"center",overflow:"auto",backgroundColor:"black",marginTop:"36px"},gridList:{height:"100%",backgroundColor:"black"}}})),w=Object(a.memo)((function(e){var t=Object(a.useRef)(),n=b(),c=e.contents,o=e.nextPageTocall,s=e.callPages;Object(a.useEffect)((function(){s({pageNo:o}),new IntersectionObserver(i,{root:null,rootMargin:"0px",threshold:.1}).observe(t.current)}),[]);var i=function(){var e=window.store.getState().jsonPlaceHolderReducer.nextPageTocall;e<4&&s({pageNo:e})};return r.a.createElement("div",{className:n.root},r.a.createElement("div",{className:n.root},r.a.createElement(u.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",className:n.gridList},c.map((function(e,t){return r.a.createElement(u.a,{key:"".concat(t,"_").concat(e.name),item:!0,xs:4,style:{marginBottom:"90px"}},r.a.createElement("img",{src:"".concat("/diagnalApp","/Slices/").concat(e["poster-image"]),alt:e.name}),r.a.createElement("h3",null,e.name))})))),r.a.createElement("div",{ref:t}))}));t.default=Object(c.b)((function(e,t){return{nextPageTocall:e.jsonPlaceHolderReducer.nextPageTocall,contents:e.jsonPlaceHolderReducer.contents}}),(function(e){return{callPages:function(t){var n=t.pageNo;return e(function(e){var t=e.pageNo;return function(){var e=Object(l.a)(i.a.mark((function e(n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v({url:"API/CONTENTLISTINGPAGE-PAGE".concat(t,".json")});case 2:a=e.sent,r=a.data,n(d(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({pageNo:n}))}}}))(w)}}]);
//# sourceMappingURL=4.d70fb56b.chunk.js.map