(this["webpackJsonp20-homework"]=this["webpackJsonp20-homework"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/Milka.f1723475.jpg"},function(e,t,a){e.exports=a.p+"static/media/Murka.b9dc0917.jpg"},,,,function(e,t,a){e.exports=a.p+"static/media/Bikini.0eb9f4cb.jpg"},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/likes.f375abe3.png"},function(e,t,a){e.exports=a.p+"static/media/comments.c5cf7cd0.png"},function(e,t,a){e.exports=a.p+"static/media/reposts.80bfdd98.png"},function(e,t,a){e.exports=a.p+"static/media/share.5dec6e9e.png"},function(e,t,a){e.exports=a.p+"static/media/BikiniPost.f4c90763.jpg"},function(e,t,a){e.exports=a.p+"static/media/MilkaPost1.5c2d8dbe.jpg"},function(e,t,a){e.exports=a.p+"static/media/MilkaPost2.84b8e246.jpg"},function(e,t,a){e.exports=a.p+"static/media/MurkaPost1.938f3236.jpg"},function(e,t,a){e.exports=a.p+"static/media/MurkaPost2.bf221a27.jpg"},function(e,t,a){e.exports=a.p+"static/media/Cutie.faee0305.JPG"},,,function(e,t,a){e.exports=a(43)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),s=a.n(c),r=(a(34),a(35),a(8)),i=a(14),m=a(15),l=a(28),u=a(27),p=a(2);var d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={content:"",photo:"https://elephant-travel.com.ua/userfiles/%D1%82%D0%B0%D0%B8%D1%82%D0%B82.jpg",authorName:"Bikini"},e.handleChange=function(t){e.setState(Object(r.a)({},t.target.id,t.target.value))},e.submit=function(){var t=e.state,a=t.content,n=t.photo,o=t.authorName;if(a.trim()||n.trim()){var c={author:e.props.authors.find((function(e){return Object.values(e).find((function(e){return e===o}))})),content:a,photo:n,date:(new Date).toLocaleDateString("en-US",{day:"numeric",month:"short"}),likes:0,comments:0,reposts:0,liked:!1,commented:!1,reposted:!1};console.log(c),e.props.createPost(c),e.setState({content:"",photo:""})}},e}return Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"form-wrapper"},o.a.createElement("h3",null,"Create Post"),o.a.createElement("textarea",{id:"content",value:this.state.content,onChange:this.handleChange,placeholder:"What's new?"}),o.a.createElement("label",null,o.a.createElement("span",null,"Picture URL:"),o.a.createElement("input",{type:"text",id:"photo",value:this.state.photo,onChange:this.handleChange})),o.a.createElement("label",null,o.a.createElement("span",null,"Choose an author:"),o.a.createElement("select",{name:"authors",id:"authorName",value:this.state.authorName,onChange:this.handleChange},this.props.authors.map((function(e,t){return o.a.createElement("option",{value:e.name,key:t},e.name)})))),o.a.createElement("button",{onClick:this.submit},"Create"))}}]),a}(n.Component),h={createPost:function(e){return{type:"CREATE_POST",payload:e}}},k=Object(p.b)((function(e){return{authors:e.authors.authors}}),h)(d),f=(a(42),a(17)),b=a.n(f),g=a(18),E=a.n(g),v=a(19),O=a.n(v),j=a(20),y=a.n(j);var N={toggleLike:function(e,t,a){return{type:"TOGGLE_LIKE",liked:!e,likes:e?t-1:t+1,id:a}},toggleComment:function(e,t,a){return{type:"TOGGLE_COMMENT",commented:!e,comments:e?t-1:t+1,id:a}},toggleRepost:function(e,t,a){return{type:"TOGGLE_REPOST",reposted:!e,reposts:e?t-1:t+1,id:a}}},C=Object(p.b)(null,N)((function(e){var t=function(t){switch(t.currentTarget.id){case"like":e.toggleLike(e.liked,e.likes,e.id);break;case"comment":e.toggleComment(e.commented,e.comments,e.id);break;case"share":e.toggleRepost(e.reposted,e.reposts,e.id)}};return o.a.createElement("div",{className:"post"},o.a.createElement("div",{className:"post-header"},o.a.createElement("div",{className:"avatar",style:{backgroundImage:"url(".concat(e.author.avatar,")")}}),o.a.createElement("div",{className:"post-text"},o.a.createElement("p",null,o.a.createElement("strong",{className:"name"},e.author.name),o.a.createElement("span",null,e.author.nickname," \u2022 ",e.date)),o.a.createElement("p",{className:"post-content"},e.content))),o.a.createElement("div",{className:"photo",style:{backgroundImage:"url(".concat(e.photo,")")}}),o.a.createElement("div",{className:"post-footer"},o.a.createElement("div",{className:"buttons",id:"like",onClick:t},o.a.createElement("img",{className:"icon",src:b.a,alt:"like"}),o.a.createElement("span",{style:{fontWeight:"".concat(e.liked?"700":"400")}},e.likes)),o.a.createElement("div",{className:"buttons",id:"comment",onClick:t},o.a.createElement("img",{className:"icon",src:E.a,alt:"comment"}),o.a.createElement("span",{style:{fontWeight:"".concat(e.commented?"700":"400")}},e.comments)),o.a.createElement("div",{className:"buttons"},o.a.createElement("img",{className:"icon",src:O.a,alt:"repost"}),o.a.createElement("span",{style:{fontWeight:"".concat(e.reposted?"700":"400")}},e.reposts)),o.a.createElement("div",{className:"buttons",id:"share",onClick:t},o.a.createElement("img",{className:"icon",src:y.a,alt:"share"}))))})),w=Object(p.b)((function(e){return{posts:e.posts.posts}}),null)((function(e){var t=e.posts;return o.a.createElement("div",null,t.map((function(e,t){return o.a.createElement(C,Object.assign({},e,{key:t,id:t}))})))}));var M=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(k,null),o.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(3),T=a(6),P=a(1),S=a(9),G=a.n(S),L=a(21),B=a.n(L),D=a(4),_=a.n(D),I=a(22),R=a.n(I),W=a(23),A=a.n(W),J=a(5),K=a.n(J),U=a(24),z=a.n(U),H=a(25),Y=a.n(H),$={posts:[{author:{name:"Bikini",avatar:G.a,nickname:"@bikinyator"},content:"My sister and me",photo:B.a,date:"Sep 26",likes:444,comments:22,reposts:2,liked:!1,commented:!1,reposted:!1},{author:{name:"Milka",avatar:_.a,nickname:"@milkyway"},content:"Human bought me new toy!",photo:R.a,date:"Sep 24",likes:598,comments:25,reposts:3,liked:!1,commented:!1,reposted:!1},{author:{name:"Milka",avatar:_.a,nickname:"@milkyway"},content:"My kids",photo:A.a,date:"Sep 14",likes:564,comments:28,reposts:3,liked:!1,commented:!1,reposted:!1},{author:{name:"Murka",avatar:K.a,nickname:"@murembo"},content:"Do NOT step outside your comfort zone",photo:z.a,date:"Sep 12",likes:546,comments:18,reposts:6,liked:!1,commented:!1,reposted:!1},{author:{name:"Murka",avatar:K.a,nickname:"@murembo"},content:"Yes, I've eaten your food. No, I'm not sorry",photo:Y.a,date:"Sep 10",likes:666,comments:24,reposts:2,liked:!1,commented:!1,reposted:!1}]},q=a(26),F=a.n(q),Q={authors:[{name:"Bikini",avatar:G.a,nickname:"@bikinyator"},{name:"Milka",avatar:_.a,nickname:"@milkyway"},{name:"Murka",avatar:K.a,nickname:"@murembo"},{name:"Cutie",avatar:F.a,nickname:"@beast"}]},V=Object(x.c)(Object(x.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_POST":return Object(P.a)(Object(P.a)({},e),{},{posts:[t.payload].concat(Object(T.a)(e.posts))});case"TOGGLE_LIKE":return Object(P.a)(Object(P.a)({},e),{},{posts:Object(T.a)(e.posts).map((function(e,a){return a===t.id?Object(P.a)(Object(P.a)({},e),{},{liked:t.liked,likes:t.likes}):e}))});case"TOGGLE_COMMENT":return Object(P.a)(Object(P.a)({},e),{},{posts:Object(T.a)(e.posts).map((function(e,a){return a===t.id?Object(P.a)(Object(P.a)({},e),{},{commented:t.commented,comments:t.comments}):e}))});case"TOGGLE_REPOST":return Object(P.a)(Object(P.a)({},e),{},{posts:Object(T.a)(e.posts).map((function(e,a){return a===t.id?Object(P.a)(Object(P.a)({},e),{},{reposted:t.reposted,reposts:t.reposts}):e}))});default:return e}},authors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q;return e}}));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p.a,{store:V},o.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.d80db3e3.chunk.js.map