(this["webpackJsonpabout-seoul"]=this["webpackJsonpabout-seoul"]||[]).push([[0],{23:function(e,s,c){},24:function(e,s,c){},25:function(e,s,c){},26:function(e,s,c){},32:function(e,s,c){},33:function(e,s,c){"use strict";c.r(s);var t=c(1),n=c.n(t),a=c(14),r=c.n(a),i=c(15),o=c(2),l=c(0),j=function(){return Object(l.jsx)(l.Fragment,{})},u=(c(23),function(){var e=Object(t.useRef)(),s=Object(t.useRef)(),c=Object(t.useRef)(),n=Object(t.useRef)(),a=Object(t.useRef)(),r=!1,i=[Object(t.useRef)(),Object(t.useRef)(),Object(t.useRef)(),Object(t.useRef)(),Object(t.useRef)()],o=[{structure:"N Seoul Tower",location:"Yongsan-Gu"},{structure:"Gyeongbokgung",location:"Jongno-gu"},{structure:"DDP",location:"Jung-gu"},{structure:"The Hyundai Seoul",location:"Yeongdeungpo-gu"},{structure:"Lotte Tower",location:"Songpa-Gu"}],j=function(e){if(!r){r=!0;for(var s=0;s<i.length;s++){var c=i[s].current.dataset.no;i[s].current.classList.remove("img-0".concat(c)),c=parseInt(c),"prev"===e?c+1>i.length?c=1:c+=1:c-1<1?c=i.length:c-=1,i[s].current.dataset.no=c,i[s].current.classList.add("img-0".concat(i[s].current.dataset.no))}u(5-i[3].current.dataset.no),b()}},u=function(e){c.current.style.display="none",setTimeout((function(){n.current.innerText=o[e].structure,a.current.innerText=o[e].location,c.current.style.display="flex",r=!1}),500)},b=function(){s.current.style.width="".concat(e.current.offsetWidth*(6-i[3].current.dataset.no)/5,"px")};return Object(l.jsxs)("div",{className:"carousel",children:[Object(l.jsx)("span",{className:"name",children:"Discover Other Places in Seoul"}),Object(l.jsxs)("div",{className:"images",children:[Object(l.jsx)("img",{src:"images/carousel/carousel_01.png",alt:"1",className:"img-01",ref:i[0],"data-no":"1"}),Object(l.jsx)("img",{src:"images/carousel/carousel_02.png",alt:"2",className:"img-02",ref:i[1],"data-no":"2"}),Object(l.jsx)("img",{src:"images/carousel/carousel_03.png",alt:"3",className:"img-03",ref:i[2],"data-no":"3"}),Object(l.jsx)("img",{src:"images/carousel/carousel_04.png",alt:"4",className:"img-04",ref:i[3],"data-no":"4"}),Object(l.jsx)("img",{src:"images/carousel/carousel_05.png",alt:"5",className:"img-05",ref:i[4],"data-no":"5"}),Object(l.jsxs)("div",{className:"instruction",ref:c,children:[Object(l.jsx)("span",{className:"structure",ref:n,children:"Gyeongbokgung"}),Object(l.jsx)("span",{className:"location",ref:a,children:"Jongno-gu"})]})]}),Object(l.jsxs)("div",{className:"controller",children:[Object(l.jsx)("span",{className:"start",children:"01"}),Object(l.jsx)("div",{className:"slider",ref:e,children:Object(l.jsx)("div",{className:"slider-bar",ref:s})}),Object(l.jsx)("span",{className:"end",children:"05"}),Object(l.jsx)("img",{src:"images/icons/prev.png",alt:"prev",className:"prev btn",onClick:function(){return j("prev")}}),Object(l.jsx)("img",{src:"images/icons/next.png",alt:"next",className:"next btn",onClick:function(){return j("next")}})]})]})}),b=c(17),d=(c(24),function(e){var s=e.setSearch;return Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)("span",{className:"explain",children:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694"}),Object(l.jsx)("input",{type:"text"}),Object(l.jsx)("div",{className:"hashtag",children:"#abc #cdf #dsf"}),Object(l.jsx)("div",{className:"exit",onClick:function(){s(!1)},children:"X"})]})}),m=(c(25),function(){var e=Object(t.useState)(!1),s=Object(b.a)(e,2),c=s[0],n=s[1];return Object(l.jsxs)("div",{className:"Navigation",children:[c?Object(l.jsx)(d,{setSearch:n}):Object(l.jsx)(l.Fragment,{}),Object(l.jsx)("img",{src:"images/icons/logo.png",alt:"logo",className:"logo"}),Object(l.jsxs)("ul",{className:"navList",children:[Object(l.jsx)("li",{children:"History"}),Object(l.jsx)("li",{children:"News"}),Object(l.jsx)("li",{children:"Visitors"}),Object(l.jsx)("li",{children:"Community"})]}),Object(l.jsxs)("div",{className:"icons",children:[Object(l.jsx)("img",{src:"images/icons/search.png",alt:"search",onClick:function(){return n(!0)}}),Object(l.jsx)("img",{src:"images/icons/my.png",alt:"my"})]})]})}),g=(c(26),function(){return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)("div",{className:"bg-cover"}),Object(l.jsx)(m,{}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)("div",{className:"wrap",children:[Object(l.jsx)("span",{className:"title",children:"Seongsan Bridge"}),Object(l.jsxs)("span",{className:"description",children:["The Seongsan Bridge is the 12th bridge that crosses the Han River"," ",Object(l.jsx)("br",{})," in South Korea. The bridge was completed in 1980."]}),Object(l.jsxs)("div",{className:"icons",children:[Object(l.jsx)("button",{children:"Learn more"}),Object(l.jsx)("div",{className:"bookmark-out",children:Object(l.jsx)("img",{src:"images/icons/bookmark.png",alt:"bookmark"})})]}),Object(l.jsx)(u,{})]})})]})}),O=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",children:Object(l.jsx)(g,{})}),Object(l.jsx)(o.a,{path:"/history",children:Object(l.jsx)(j,{})})]})})},x=(c(32),function(){return Object(l.jsx)(O,{})});r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.cbaee3d6.chunk.js.map