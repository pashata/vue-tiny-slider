!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-tiny-slider",[],e):"object"==typeof exports?exports["vue-tiny-slider"]=e():t["vue-tiny-slider"]=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){!function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}()},function(t,e,n){"use strict";n.r(e);n(2),n(0);var i=window,a=i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.msRequestAnimationFrame||function(t){return setTimeout(t,16)},o=window,r=o.cancelAnimationFrame||o.mozCancelAnimationFrame||function(t){clearTimeout(t)};function s(){for(var t,e,n,i=arguments[0]||{},a=1,o=arguments.length;a<o;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function u(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function l(t,e,n){return n&&localStorage.setItem(t,e),e}function d(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var c=document.documentElement;function f(t){var e="";return t.fake&&(e=c.style.overflow,t.style.background="",t.style.overflow=c.style.overflow="hidden",c.appendChild(t)),e}function p(t,e){t.fake&&(t.remove(),c.style.overflow=e,c.offsetHeight)}function h(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function v(t){return("insertRule"in t?t.cssRules:t.rules).length}function m(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var y="classList"in document.createElement("_"),g=y?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},x=y?function(t,e){g(t,e)||t.classList.add(e)}:function(t,e){g(t,e)||(t.className+=" "+e)},b=y?function(t,e){g(t,e)&&t.classList.remove(e)}:function(t,e){g(t,e)&&(t.className=t.className.replace(e,""))};function w(t,e){return t.hasAttribute(e)}function T(t){return void 0!==t.item}function A(t,e){if(t=T(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function C(t,e){t=T(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function O(t){t.style.cssText=""}function N(t){w(t,"hidden")||A(t,{hidden:""})}function E(t){w(t,"hidden")&&C(t,"hidden")}function B(t){return t.offsetWidth>0&&t.offsetHeight>0}function D(t){for(var e=document.createElement("fakeelement"),n=(t.length,0);n<t.length;n++){var i=t[n];if(void 0!==e.style[i])return i}return!1}function S(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var I=!1;try{var P=Object.defineProperty({},"passive",{get:function(){I=!0}});window.addEventListener("test",null,P)}catch(t){}var k=!!I&&{passive:!0};function M(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&k;t.addEventListener(n,e[n],i)}}function W(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&k;t.removeEventListener(n,e[n],i)}}n.d(e,"tns",function(){return ot});var H=navigator.userAgent,z=!0,L={};try{(L=localStorage).tnsApp&&L.tnsApp!==H&&["tC","tSP","tMQ","tTf","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){L.removeItem(t)}),L.tnsApp=H}catch(t){z=!1}z&&!localStorage&&(L={});var R,j,q,F,G,V,U,K=document,Q=window,X={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},_=u(L.tC)||l("tC",function(){var t=document,e=d(),n=f(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var o,r=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],s=0;s<3;s++)if(o=r[s],i.style.width=o,10===i.offsetWidth){a=o.replace("(10px)","");break}}catch(t){}return e.fake?p(e,n):i.remove(),a}(),z),Y=u(L.tSP)||l("tSP",(q=document,F=d(),G=f(F),V=q.createElement("div"),U=q.createElement("div"),V.style.cssText="width: 10px",U.style.cssText="float: left; width: 5.5px; height: 10px;",R=U.cloneNode(!0),V.appendChild(U),V.appendChild(R),F.appendChild(V),j=U.offsetTop!==R.offsetTop,F.fake?p(F,G):V.remove(),j),z),$=u(L.tMQ)||l("tMQ",function(){var t,e=document,n=d(),i=f(n),a=e.createElement("div"),o=e.createElement("style"),r="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return o.type="text/css",a.className="tns-mq-test",n.appendChild(o),n.appendChild(a),o.styleSheet?o.styleSheet.cssText=r:o.appendChild(e.createTextNode(r)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?p(n,i):a.remove(),"absolute"===t}(),z),J=u(L.tTf)||l("tTf",D(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),z),Z=u(L.tTDu)||l("tTDu",D(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),z),tt=u(L.tTDe)||l("tTDe",D(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]),z),et=u(L.tADu)||l("tADu",D(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]),z),nt=u(L.tADe)||l("tADe",D(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]),z),it=u(L.tTE)||l("tTE",S(Z,"Transition"),z),at=u(L.tAE)||l("tAE",S(et,"Animation"),z);$||(Y=!1);var ot=function(t){t=s({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,fixedWidthViewportWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1},t||{});for(var e=Q.console&&"function"==typeof Q.console.warn,n=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],i=n.length;i--;){var o=n[i];if("string"==typeof t[o]){var u=K.querySelector(t[o]);if(!u||!u.nodeName)return void(e&&console.warn("Can't find",t[o]));t[o]=u}}if(!(t.container.children&&t.container.children.length<1)){if(t.responsive){var l={},d=t.responsive;for(var c in d){var f=d[c];l[c]="number"==typeof f?{items:f}:f}t.responsive=l,l=null,0 in t.responsive&&delete(t=s(t,t.responsive[0])).responsive[0]}var p="carousel"===t.mode;if(!p){t.axis="horizontal",t.rewind=!1,t.edgePadding=!1;var y="tns-fadeIn",T="tns-fadeOut",D=!1,S=t.animateNormal||"tns-normal";it&&at&&(y=t.animateIn||y,T=t.animateOut||T,D=t.animateDelay||D)}var I,P,k="horizontal"===t.axis,H=K.createElement("div"),z=K.createElement("div"),L=t.container,R=L.parentNode,j=L.children,q=j.length,F=t.responsive,G=[],V=!1,U=0,rt=sn();if(t.fixedWidth)var st=un(R);if(F){(V=Object.keys(F).map(function(t){return parseInt(t)}).sort(function(t,e){return t-e})).forEach(function(t){G=G.concat(Object.keys(F[t]))});var ut=[];G.forEach(function(t){ut.indexOf(t)<0&&ut.push(t)}),G=ut,bn()}var lt,dt,ct,ft,pt,ht,vt,mt,yt=dn("items"),gt="page"===dn("slideBy")?yt:dn("slideBy"),xt=t.nested,bt=dn("gutter"),wt=dn("edgePadding"),Tt=dn("fixedWidth"),At=t.fixedWidthViewportWidth,Ct=dn("arrowKeys"),Ot=dn("speed"),Nt=t.rewind,Et=!Nt&&t.loop,Bt=dn("autoHeight"),Dt=(mt=document.createElement("style"),vt&&mt.setAttribute("media",vt),document.querySelector("head").appendChild(mt),mt.sheet?mt.sheet:mt.styleSheet),St=t.lazyload,It=[],Pt=ln("edgePadding"),kt=Et?(pt=function(){if(Tt&&!At)return q-1;var e=Tt?"fixedWidth":"items",n=Tt,i=[];return(n||t[e]<q)&&i.push(t[e]),V&&G.indexOf(e)>=0&&V.forEach(function(t){var a=F[t][e];a&&(n||a<q)&&i.push(a)}),n?Math.ceil(At/Math.min.apply(null,i)):Math.max.apply(null,i)}(),ht=p?Math.ceil((5*pt-q)/2):3*pt-q,ht=Math.max(pt,ht),Pt?ht+1:ht):0,Mt=p?q+2*kt:q+kt,Wt=!(!Tt||Et||wt),Ht=!p||!Et,zt=k?"left":"top",Lt="",Rt="",jt=dn("startIndex"),qt=jt?function(t){(t%=q)<0&&(t+=q);return t=Math.min(t,Mt-yt)}(jt):p?kt:0,Ft=qt,Gt=0,Vt=on(),Ut=t.swipeAngle,Kt=!Ut||"?",Qt=!1,Xt=t.onInit,_t=new function(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}},Yt=L.id,$t=" tns-slider tns-"+t.mode,Jt=L.id||(ft=window.tnsId,window.tnsId=ft?ft+1:1,"tns"+window.tnsId),Zt=dn("disable"),te=t.freezable,ee=!!Zt||!!te&&q<=yt,ne="inner"===xt?" !important":"",ie={click:Xn,keydown:function(t){switch((t=ii(t)).keyCode){case X.LEFT:case X.UP:case X.PAGEUP:Ce.disabled||Xn(t,-1);break;case X.RIGHT:case X.DOWN:case X.PAGEDOWN:Oe.disabled||Xn(t,1);break;case X.HOME:Qn(0,t);break;case X.END:Qn(q-1,t)}}},ae={click:function(t){Qt&&Kn();var e=(t=ii(t)).target||t.srcElement;for(;e!==Be&&!w(e,"data-nav");)e=e.parentNode;w(e,"data-nav")&&Qn((Ie=[].indexOf.call(Ne,e))+kt,t)},keydown:function(e){var n=K.activeElement;if(!w(n,"data-nav"))return;var i=(e=ii(e)).keyCode,a=[].indexOf.call(Ne,n),o=De.length,r=De.indexOf(a);t.navContainer&&(o=q,r=a);function s(e){return t.navContainer?e:De[e]}switch(i){case X.LEFT:case X.PAGEUP:r>0&&ei(Ne[s(r-1)]);break;case X.UP:case X.HOME:r>0&&ei(Ne[s(0)]);break;case X.RIGHT:case X.PAGEDOWN:r<o-1&&ei(Ne[s(r+1)]);break;case X.DOWN:case X.END:r<o-1&&ei(Ne[s(o-1)]);break;case X.ENTER:case X.SPACE:Ie=a,Qn(a+kt,e)}}},oe={mouseover:function(){He&&(Yn(),ze=!0)},mouseout:function(){ze&&(_n(),ze=!1)}},re={visibilitychange:function(){K.hidden?He&&(Yn(),Re=!0):Re&&(_n(),Re=!1)}},se={keydown:function(t){switch((t=ii(t)).keyCode){case X.LEFT:Xn(t,-1);break;case X.RIGHT:Xn(t,1)}}},ue={touchstart:si,touchmove:ui,touchend:li,touchcancel:li},le={mousedown:si,mousemove:ui,mouseup:li,mouseleave:li},de=ln("controls"),ce=ln("nav"),fe=t.navAsThumbnails,pe=ln("autoplay"),he=ln("touch"),ve=ln("mouseDrag"),me="tns-slide-active",ye="tns-complete",ge={load:On,error:On};if(de)var xe,be,we=dn("controls"),Te=dn("controlsText"),Ae=t.controlsContainer,Ce=t.prevButton,Oe=t.nextButton;if(ce)var Ne,Ee=dn("nav"),Be=t.navContainer,De=[],Se=De,Ie=-1,Pe=rn(),ke=Pe,Me="tns-nav-active";if(pe)var We,He,ze,Le,Re,je=dn("autoplay"),qe=dn("autoplayTimeout"),Fe="forward"===t.autoplayDirection?1:-1,Ge=dn("autoplayText"),Ve=dn("autoplayHoverPause"),Ue=t.autoplayButton,Ke=dn("autoplayResetOnVisibility"),Qe=["<span class='tns-visually-hidden'>"," animation</span>"];if(he||ve)var Xe,_e={},Ye={},$e=!1,Je=0,Ze=k?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};if(he)var tn=dn("touch");if(ve)var en=dn("mouseDrag");ee&&(we=Ee=tn=en=Ct=je=Ve=Ke=!1),J&&(zt=J,Lt="translate",Lt+=k?"X(":"Y(",Rt=")"),function(){H.appendChild(z),R.insertBefore(H,L),z.appendChild(L),I=un(z);var e="tns-outer",n="tns-inner",i=ln("gutter");if(p?k&&(ln("edgePadding")||i&&!t.fixedWidth)?e+=" tns-ovh":n+=" tns-ovh":i&&(e+=" tns-ovh"),H.className=e,z.className=n,z.id=Jt+"-iw",Bt&&(z.className+=" tns-ah",z.style[Z]=Ot/1e3+"s"),""===L.id&&(L.id=Jt),$t+=Y?" tns-subpixel":" tns-no-subpixel",$t+=_?" tns-calc":" tns-no-calc",p&&($t+=" tns-"+t.axis),L.className+=$t,p&&it){var o={};o[it]=Kn,M(L,o)}e=n=null;for(var r=0;r<q;r++){(O=j[r]).id||(O.id=Jt+"-item"+r),x(O,"tns-item"),!p&&S&&x(O,S),A(O,{"aria-hidden":"true",tabindex:"-1"})}if(Et||wt){for(var s=K.createDocumentFragment(),u=K.createDocumentFragment(),l=kt;l--;){var d=l%q,c=j[d].cloneNode(!0);if(C(c,"id"),u.insertBefore(c,u.firstChild),p){var f=j[q-1-d].cloneNode(!0);C(f,"id"),s.appendChild(f)}}L.insertBefore(s,L.firstChild),L.appendChild(u),j=L.children}if(ln("autoHeight")||!p){var g=L.querySelectorAll("img");m(g,function(t){M(t,ge);var e=t.src;t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e}),a(function(){Bn(function(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}(g),function(){ct=!0})})}for(var w=qt,T=qt+Math.min(q,yt);w<T;w++){var O;A(O=j[w],{"aria-hidden":"false"}),C(O,["tabindex"]),x(O,me),p||(O.style.left=100*(w-qt)/yt+"%",x(O,y),b(O,S))}if(p&&k&&(Y?(h(Dt,"#"+Jt+" > .tns-item","font-size:"+Q.getComputedStyle(j[0]).fontSize+";",v(Dt)),h(Dt,"#"+Jt,"font-size:0;",v(Dt))):m(j,function(t,e){t.style.marginLeft=function(t){return _?_+"("+100*t+"% / "+Mt+")":100*t/Mt+"%"}(e)})),$){var E=cn(t.edgePadding,t.gutter,t.fixedWidth,t.speed);h(Dt,"#"+Jt+"-iw",E,v(Dt)),p&&(E=k?"width:"+fn(t.fixedWidth,t.gutter,t.items)+";":"",Z&&(E+=mn(Ot)),h(Dt,"#"+Jt,E,v(Dt))),(k||t.gutter)&&(E=pn(t.fixedWidth,t.gutter,t.items)+hn(t.gutter),p||(Z&&(E+=mn(Ot)),et&&(E+=yn(Ot))),h(Dt,"#"+Jt+" > .tns-item",E,v(Dt)))}else if(z.style.cssText=cn(wt,bt,Tt),p&&k&&(L.style.width=fn(Tt,bt,yt)),k||bt){E=pn(Tt,bt,yt)+hn(bt);h(Dt,"#"+Jt+" > .tns-item",E,v(Dt))}if(k||Zt||(Pn(),di()),F&&$&&V.forEach(function(t){var e,n=F[t],i="",a="",o="",r=dn("items",t),s=dn("fixedWidth",t),u=dn("speed",t),l=dn("edgePadding",t),d=dn("gutter",t);("edgePadding"in n||"gutter"in n)&&(i="#"+Jt+"-iw{"+cn(l,d,s,u)+"}"),p&&k&&("fixedWidth"in n||"gutter"in n||"items"in n)&&(a="width:"+fn(s,d,r)+";"),Z&&"speed"in n&&(a+=mn(u)),a&&(a="#"+Jt+"{"+a+"}"),("fixedWidth"in n||ln("fixedWidth")&&"gutter"in n||!p&&"items"in n)&&(o+=pn(s,d,r)),"gutter"in n&&(o+=hn(d)),!p&&"speed"in n&&(Z&&(o+=mn(u)),et&&(o+=yn(u))),o&&(o="#"+Jt+" > .tns-item{"+o+"}"),(e=i+a+o)&&Dt.insertRule("@media (min-width: "+t/16+"em) {"+e+"}",Dt.cssRules.length)}),p&&!Zt&&qn(),navigator.msMaxTouchPoints&&(x(H,"ms-touch"),M(H,{scroll:ni}),kn()),ce){var B=p?kt:0;if(Be)A(Be,{"aria-label":"Carousel Pagination"}),m(Ne=Be.children,function(t,e){A(t,{"data-nav":e,tabindex:"-1","aria-selected":"false","aria-controls":j[B+e].id})});else{var D="",W=fe?"":"hidden";for(w=0;w<q;w++)D+='<button data-nav="'+w+'" tabindex="-1" aria-selected="false" aria-controls="'+j[B+w].id+'" '+W+' type="button"></button>';D='<div class="tns-nav" aria-label="Carousel Pagination">'+D+"</div>",H.insertAdjacentHTML("afterbegin",D),Be=H.querySelector(".tns-nav"),Ne=Be.children}if(ci(),Z){var G=Z.substring(0,Z.length-18).toLowerCase();E="transition: all "+Ot/1e3+"s";G&&(E="-"+G+"-"+E),h(Dt,"[aria-controls^="+Jt+"-item]",E,v(Dt))}A(Ne[Pe],{tabindex:"0","aria-selected":"true"}),x(Ne[Pe],Me),M(Be,ae),Ee||N(Be)}if(pe){var U=je?"stop":"start";Ue?A(Ue,{"data-action":U}):t.autoplayButtonOutput&&(z.insertAdjacentHTML("beforebegin",'<button data-action="'+U+'" type="button">'+Qe[0]+U+Qe[1]+Ge[0]+"</button>"),Ue=H.querySelector("[data-action]")),Ue&&M(Ue,{click:ti}),je?(Jn(),Ve&&M(L,oe),Ke&&M(L,re)):Ue&&N(Ue)}de&&(Ae||Ce&&Oe?(Ae&&(Ce=Ae.children[0],Oe=Ae.children[1],A(Ae,{"aria-label":"Carousel Navigation",tabindex:"0"}),A(Ae.children,{"aria-controls":Jt,tabindex:"-1"})),A(Ce,{"data-controls":"prev"}),A(Oe,{"data-controls":"next"})):(H.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+Jt+'" type="button">'+Te[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+Jt+'" type="button">'+Te[1]+"</button></div>"),Ae=H.querySelector(".tns-controls"),Ce=Ae.children[0],Oe=Ae.children[1]),xe=Wn(Ce),be=Wn(Oe),Ln(),Ae?M(Ae,ie):(M(Ce,ie),M(Oe,ie)),we||N(Ae)),tn&&M(L,ue),en&&M(L,le),Ct&&M(K,se),"inner"===xt?_t.on("outerResized",function(){xn(),_t.emit("innerLoaded",fi())}):M(Q,{resize:gn}),"outer"===xt?_t.on("innerLoaded",En):!Bt&&p||Zt||En(),Cn(),wn(),Tn(),_t.on("indexChanged",Dn),"function"==typeof Xt&&Xt(fi()),"inner"===xt&&_t.emit("innerLoaded",fi()),Zt&&An(!0),P=!0}();var nn=Et?p?function(){var t=Gt,e=Vt;if(t+=gt,e-=gt,wt)t+=1,e-=1;else if(Tt){var n=bt||0;st%(Tt+n)>n&&(e-=1)}kt&&(qt>e?qt-=q:qt<t&&(qt+=q))}:function(){qt=qt>=Gt&&qt<=Vt?qt:qt>Vt?qt-q:qt+q}:function(){qt=qt>=Gt&&qt<=Vt?qt:qt>Vt?Vt:Gt},an=p?function(t,e){e||(e=jn()),Wt&&qt===Vt&&(e=-((Tt+bt)*Mt-I)+"px"),Z||!t?(Fn(e),t&&B(L)||Kn()):function(t,e,n,i,a,o,r){var s=Math.min(o,10),u=a.indexOf("%")>=0?"%":"px",l=(a=a.replace(u,""),Number(t.style[e].replace(n,"").replace(i,"").replace(u,""))),d=(a-l)/o*s;setTimeout(function a(){o-=s,l+=d,t.style[e]=n+l+u+i,o>0?setTimeout(a,s):r()},s)}(L,zt,Lt,Rt,e,Ot,Kn),k||di()}:function(t){It=[];var e={};e[it]=e[at]=Kn,W(j[Ft],e),M(j[qt],e),Gn(Ft,y,T,!0),Gn(qt,S,y),it&&at&&t||Kn()};return{getInfo:fi,events:_t,goTo:Qn,play:function(){je&&!He&&(Jn(),Le=!1)},pause:function(){He&&(Zn(),Le=!0)},isOn:P,updateSliderHeight:In,rebuild:function(){return ot(t)},destroy:function(){if(W(Q,{resize:gn}),W(K,se),Dt.disabled=!0,Et)for(var e=kt;e--;)p&&j[0].remove(),j[j.length-1].remove();var n=["tns-item",me];p||(n=n.concat("tns-normal",y));for(var i=q;i--;){var a=j[i];a.id.indexOf(Jt+"-item")>=0&&(a.id=""),n.forEach(function(t){b(a,t)})}if(C(j,["style","aria-hidden","tabindex"]),j=Jt=q=Mt=kt=null,we&&(W(Ae,ie),t.controlsContainer&&(C(Ae,["aria-label","tabindex"]),C(Ae.children,["aria-controls","aria-disabled","tabindex"])),Ae=Ce=Oe=null),Ee&&(W(Be,ae),t.navContainer&&(C(Be,["aria-label"]),C(Ne,["aria-selected","aria-controls","tabindex"])),Be=Ne=null),je&&(clearInterval(We),Ue&&W(Ue,{click:ti}),W(L,oe),W(L,re),t.autoplayButton&&C(Ue,["data-action"])),L.id=Yt||"",L.className=L.className.replace($t,""),O(L),p&&it){var o={};o[it]=Kn,W(L,o)}W(L,ue),W(L,le),R.insertBefore(L,H),H.remove(),H=z=L=qt=Ft=yt=gt=Pe=ke=de=De=Se=this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=P=!1}}}function on(){return p?Mt-yt:Et?q-q%yt:Mt-1}function rn(t){for(void 0===t&&(t=qt);t<kt;)t+=q;return(t-kt)%q}function sn(){return Q.innerWidth||K.documentElement.clientWidth||K.body.clientWidth}function un(t){return t.clientWidth||un(t.parentNode)}function ln(e){var n=t[e];return!n&&V&&G.indexOf(e)>=0&&V.forEach(function(t){F[t][e]&&(n=!0)}),n}function dn(e,n){n=n||rt;var i,a={slideBy:"page",edgePadding:!1};if(!p&&e in a)i=a[e];else if("items"===e&&dn("fixedWidth"))i=Math.floor(st/(dn("fixedWidth")+dn("gutter")));else if("autoHeight"===e&&"outer"===xt)i=!0;else if(i=t[e],V&&G.indexOf(e)>=0)for(var o=0,r=V.length;o<r;o++){var s=V[o];if(!(n>=s))break;e in F[s]&&(i=F[s][e])}return"slideBy"===e&&"page"===i&&(i=dn("items")),i}function cn(t,e,n,i){var a="";if(t){var o=t;e&&(o+=e),a=n?"margin: 0px "+(st%(n+e)+e)/2+"px":k?"margin: 0 "+t+"px 0 "+o+"px;":"padding: "+o+"px 0 "+t+"px 0;"}else if(e&&!n){var r="-"+e+"px";a="margin: 0 "+(k?r+" 0 0":"0 "+r+" 0")+";"}return Z&&i&&(a+=mn(i)),a}function fn(t,e,n){return t?(t+e)*Mt+"px":_?_+"("+100*Mt+"% / "+n+")":100*Mt/n+"%"}function pn(t,e,n){var i="";if(k){if(i="width:",t)i+=t+e+"px";else{var a=p?Mt:n;i+=_?_+"(100% / "+a+")":100/a+"%"}i+=ne+";"}return i}function hn(t){var e="";!1!==t&&(e=(k?"padding-":"margin-")+(k?"right":"bottom")+": "+t+"px;");return e}function vn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function mn(t){return vn(Z,18)+"transition-duration:"+t/1e3+"s;"}function yn(t){return vn(et,17)+"animation-duration:"+t/1e3+"s;"}function gn(t){a(function(){xn(ii(t))})}function xn(t){if(P){rt=sn(),"outer"===xt&&_t.emit("outerResized",fi(t));var e=U,n=qt,i=yt,a=ee,o=!1;if(Tt&&(st=un(H)),I=un(z),V&&bn(),e!==U||Tt){var r=Ct,s=Bt,u=Tt,l=wt,d=bt,c=Zt;if(yt=dn("items"),gt=dn("slideBy"),Zt=dn("disable"),ee=!!Zt||!!te&&q<=yt,yt!==i&&(Vt=on(),nn()),Zt!==c&&An(Zt),ee!==a&&(ee&&(qt=p?kt:0),wn()),e!==U&&(Ot=dn("speed"),wt=dn("edgePadding"),bt=dn("gutter"),Tt=dn("fixedWidth"),Zt||Tt===u||(o=!0),(Bt=dn("autoHeight"))!==s&&(Bt||(z.style.height=""))),(Ct=!ee&&dn("arrowKeys"))!==r&&(Ct?M(K,se):W(K,se)),de){var f=we,g=Te;we=!ee&&dn("controls"),Te=dn("controlsText"),we!==f&&(we?E(Ae):N(Ae)),Te!==g&&(Ce.innerHTML=Te[0],Oe.innerHTML=Te[1])}if(ce){var w=Ee;(Ee=!ee&&dn("nav"))!==w&&(Ee?(E(Be),ci()):N(Be))}if(he){var A=tn;(tn=!ee&&dn("touch"))!==A&&p&&(tn?M(L,ue):W(L,ue))}if(ve){var C=en;(en=!ee&&dn("mouseDrag"))!==C&&p&&(en?M(L,le):W(L,le))}if(pe){var O=je,B=Ve,D=Ke,R=Ge;if(ee?je=Ve=Ke=!1:(je=dn("autoplay"))?(Ve=dn("autoplayHoverPause"),Ke=dn("autoplayResetOnVisibility")):Ve=Ke=!1,Ge=dn("autoplayText"),qe=dn("autoplayTimeout"),je!==O&&(je?(Ue&&E(Ue),He||Le||Jn()):(Ue&&N(Ue),He&&Zn())),Ve!==B&&(Ve?M(L,oe):W(L,oe)),Ke!==D&&(Ke?M(K,re):W(K,re)),Ue&&Ge!==R){var F=je?1:0,G=Ue.innerHTML,Q=G.length-R[F].length;G.substring(Q)===R[F]&&(Ue.innerHTML=G.substring(0,Q)+Ge[F])}}if(!$){if(ee||wt===l&&bt===d||(z.style.cssText=cn(wt,bt,Tt)),p&&k&&(Tt!==u||bt!==d||yt!==i)&&(L.style.width=fn(Tt,bt,yt)),k&&(yt!==i||bt!==d||Tt!=u)){var X=pn(Tt,bt,yt)+hn(bt);Dt.removeRule(v(Dt)-1),h(Dt,"#"+Jt+" > .tns-item",X,v(Dt))}Tt||(o=!0)}qt!==n&&(_t.emit("indexChanged",fi()),o=!0),yt!==i&&(Dn(),function(){if(!p){for(var t=qt+Math.min(q,yt),e=Mt;e--;){var n=j[e];e>=qt&&e<t?(x(n,"tns-moving"),n.style.left=100*(e-qt)/yt+"%",x(n,y),b(n,S)):n.style.left&&(n.style.left="",x(n,S),b(n,y)),b(n,T)}setTimeout(function(){m(j,function(t){b(t,"tns-moving")})},300)}}(),navigator.msMaxTouchPoints&&kn())}k||Zt||(Pn(),di(),o=!0),o&&(qn(),Ft=qt),Tn(!0),!Bt&&p||Zt||En()}}function bn(){U=0,V.forEach(function(t,e){rt>=t&&(U=e+1)})}function wn(){var t="tns-transparent";if(ee){if(!dt){if(wt&&(z.style.margin="0px"),kt)for(var e=kt;e--;)p&&x(j[e],t),x(j[Mt-e-1],t);dt=!0}}else if(dt){if(wt&&!Tt&&$&&(z.style.margin=""),kt)for(e=kt;e--;)p&&b(j[e],t),b(j[Mt-e-1],t);dt=!1}}function Tn(t){Tt&&wt&&(ee||st<=Tt+bt?"0px"!==z.style.margin&&(z.style.margin="0px"):t&&(z.style.cssText=cn(wt,bt,Tt)))}function An(t){var e=j.length;if(t){if(Dt.disabled=!0,L.className=L.className.replace($t.substring(1),""),O(L),Et)for(var n=kt;n--;)p&&N(j[n]),N(j[e-n-1]);if(k&&p||O(z),!p)for(var i=qt,a=qt+q;i<a;i++){O(o=j[i]),b(o,y),b(o,S)}}else{if(Dt.disabled=!1,L.className+=$t,k||Pn(),qn(),Et)for(n=kt;n--;)p&&E(j[n]),E(j[e-n-1]);if(!p)for(i=qt,a=qt+q;i<a;i++){var o=j[i],r=i<qt+yt?y:S;o.style.left=100*(i-qt)/yt+"%",x(o,r)}}}function Cn(){if(St&&!Zt){var t=qt,e=qt+yt;for(wt&&(t-=1,e+=1);t<e;t++)m(j[t].querySelectorAll(".tns-lazy-img"),function(t){var e,n={};n[it]=function(t){t.stopPropagation()},M(t,n),g(t,"loaded")||(t.src=(e="data-src",t.getAttribute(e)),x(t,"loaded"))})}}function On(t){var e=ai(t);x(e,ye),W(e,ge)}function Nn(t,e){for(var n=[],i=t,a=t+e;i<a;i++)m(j[i].querySelectorAll("img"),function(t){n.push(t)});return n}function En(){var t=Bt?Nn(qt,yt):Nn(kt,q);a(function(){Bn(t,In)})}function Bn(t,e){return ct?e():(t.forEach(function(e,n){g(e,ye)&&t.splice(n,1)}),t.length?void a(function(){Bn(t,e)}):e())}function Dn(){Cn(),function(){for(var t=qt+Math.min(q,yt),e=Mt;e--;){var n=j[e];e>=qt&&e<t?w(n,"tabindex")&&(A(n,{"aria-hidden":"false"}),C(n,["tabindex"]),x(n,me)):(w(n,"tabindex")||A(n,{"aria-hidden":"true",tabindex:"-1"}),g(n,me)&&b(n,me))}}(),Ln(),ci(),function(){if(Ee&&(Pe=-1!==Ie?Ie:rn(),Ie=-1,Pe!==ke)){var t=Ne[ke],e=Ne[Pe];A(t,{tabindex:"-1","aria-selected":"false"}),A(e,{tabindex:"0","aria-selected":"true"}),b(t,Me),x(e,Me)}}()}function Sn(t,e){for(var n=[],i=t,a=t+e;i<a;i++)n.push(j[i].offsetHeight);return Math.max.apply(null,n)}function In(){var t=Bt?Sn(qt,yt):Sn(kt,q);z.style.height!==t&&(z.style.height=t+"px")}function Pn(){lt=[0];for(var t,e=j[0].getBoundingClientRect().top,n=1;n<Mt;n++)t=j[n].getBoundingClientRect().top,lt.push(t-e)}function kn(){H.style.msScrollSnapPointsX="snapInterval(0%, "+100/yt+"%)"}function Mn(t){return t.nodeName.toLowerCase()}function Wn(t){return"button"===Mn(t)}function Hn(t){return"true"===t.getAttribute("aria-disabled")}function zn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Ln(){if(we&&!Nt&&!Et){var t=xe?Ce.disabled:Hn(Ce),e=be?Oe.disabled:Hn(Oe),n=qt===Gt,i=!Nt&&qt===Vt;n&&!t&&zn(xe,Ce,!0),!n&&t&&zn(xe,Ce,!1),i&&!e&&zn(be,Oe,!0),!i&&e&&zn(be,Oe,!1)}}function Rn(t,e){Z&&(t.style[Z]=e)}function jn(){var t;k?t=Tt?-(Tt+bt)*qt+"px":100*-qt/(J?Mt:yt)+"%":t=-lt[qt]+"px";return t}function qn(t){Rn(L,"0s"),Fn(t),setTimeout(function(){Rn(L,"")},0)}function Fn(t,e){t||(t=jn()),L.style[zt]=Lt+t+Rt}function Gn(t,e,n,i){var a=t+yt;Et||(a=Math.min(a,Mt));for(var o=t;o<a;o++){var r=j[o];i||(r.style.left=100*(o-qt)/yt+"%"),D&&tt&&(r.style[tt]=r.style[nt]=D*(o-t)/1e3+"s"),b(r,e),x(r,n),i&&It.push(r)}}function Vn(t,e){var n,i;Ht&&nn(),(qt!==Ft||e)&&(_t.emit("indexChanged",fi()),_t.emit("transitionStart",fi()),He&&t&&["click","keydown"].indexOf(t.type)>=0&&Zn(),Qt=!0,isNaN(n)&&(n=Ot),He&&!B(L)&&(n=0),an(n,i))}function Un(t){return t.toLowerCase().replace(/-/g,"")}function Kn(t){if(p||Qt){if(_t.emit("transitionEnd",fi(t)),!p&&It.length>0)for(var e=0;e<It.length;e++){var n=It[e];n.style.left="",nt&&tt&&(n.style[nt]="",n.style[tt]=""),b(n,T),x(n,S)}if(!t||!p&&t.target.parentNode===L||t.target===L&&Un(t.propertyName)===Un(zt)){if(!Ht){var i=qt;nn(),qt!==i&&(_t.emit("indexChanged",fi()),qn())}Bt&&En(),"inner"===xt&&_t.emit("innerLoaded",fi()),Qt=!1,ke=Pe,Ft=qt}}}function Qn(t,e){if(!ee)if("prev"===t)Xn(e,-1);else if("next"===t)Xn(e,1);else{Qt&&Kn();var n=rn(),i=0;if(n<0&&(n+=q),"first"===t)i=-n;else if("last"===t)i=q-yt-n;else if("number"!=typeof t&&(t=parseInt(t)),!isNaN(t)){var a=rn(t);a<0&&(a+=q),i=a-n}rn(qt+=i)!==rn(Ft)&&Vn(e)}}function Xn(t,e){var n;if(Qt&&Kn(),!e){for(var i=(t=ii(t)).target||t.srcElement;i!==Ae&&[Ce,Oe].indexOf(i)<0;)i=i.parentNode;var a=[Ce,Oe].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(Nt){if(qt===Gt&&-1===e)return void Qn("last",t);if(qt===Vt&&1===e)return void Qn(0,t)}e&&(qt+=gt*e,Vn(n||t&&"keydown"===t.type?t:null))}function _n(){We=setInterval(function(){Xn(null,Fe)},qe),He=!0}function Yn(){clearInterval(We),He=!1}function $n(t,e){A(Ue,{"data-action":t}),Ue.innerHTML=Qe[0]+t+Qe[1]+e}function Jn(){_n(),Ue&&$n("stop",Ge[1])}function Zn(){Yn(),Ue&&$n("start",Ge[0])}function ti(){He?(Zn(),Le=!0):(Jn(),Le=!1)}function ei(t){t.focus()}function ni(){an(0,L.scrollLeft()),Ft=qt}function ii(t){return oi(t=t||Q.event)?t.changedTouches[0]:t}function ai(t){return t.target||Q.event.srcElement}function oi(t){return t.type.indexOf("touch")>=0}function ri(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function si(e){Qt&&Kn(),$e=!0,r(Je),Je=a(function(){!function e(n){if(!Kt)return void($e=!1);r(Je);$e&&(Je=a(function(){e(n)}));"?"===Kt&&Ye.x!==_e.x&&Ye.y!==_e.y&&(i=function(t,e){return Math.atan2(t,e)*(180/Math.PI)}(Ye.y-_e.y,Ye.x-_e.x),o=Ut,s=!1,(u=Math.abs(90-Math.abs(i)))>=90-o?s="horizontal":u<=o&&(s="vertical"),Kt=s===t.axis);var i,o,s,u;if(Kt){_t.emit(oi(n)?"touchMove":"dragMove",fi(n));var l=Xe,d=Ze(Ye,_e);if(!k||Tt)l+=d,l+="px";else{var c=J?d*yt*100/(I*Mt):100*d/I;l+=c,l+="%"}L.style[zt]=Lt+l+Rt}}(e)});var n=ii(e);_t.emit(oi(e)?"touchStart":"dragStart",fi(e)),!oi(e)&&["img","a"].indexOf(Mn(ai(e)))>=0&&ri(e),Ye.x=_e.x=parseInt(n.clientX),Ye.y=_e.y=parseInt(n.clientY),Xe=parseFloat(L.style[zt].replace(Lt,"").replace(Rt,"")),Rn(L,"0s")}function ui(t){if($e){var e=ii(t);Ye.x=parseInt(e.clientX),Ye.y=parseInt(e.clientY)}}function li(t){if(Ut&&(Kt="?"),$e){r(Je),Rn(L,""),$e=!1;var e=ii(t);Ye.x=parseInt(e.clientX),Ye.y=parseInt(e.clientY);var n=Ze(Ye,_e);if(Math.abs(n)>=5){if(!oi(t)){var i=ai(t);M(i,{click:function t(e){ri(e),W(i,{click:t})}})}Je=a(function(){if(_t.emit(oi(t)?"touchEnd":"dragEnd",fi(t)),k){var e=-n*yt/I;e=n>0?Math.floor(e):Math.ceil(e),qt+=e}else{var i=-(Xe+n);if(i<=0)qt=Gt;else if(i>=lt[lt.length-1])qt=Vt;else{var a=0;do{a++,qt=n<0?a+1:a}while(a<Mt&&i>=lt[a+1])}}Vn(t,n)})}}}function di(){z.style.height=lt[qt+yt]-lt[qt]+"px"}function ci(){Ee&&!fe&&(!function(){De=[];for(var t=rn()%yt;t<q;)!Et&&t+yt>q&&(t=q-yt),De.push(t),t+=yt;(Et&&De.length*yt<q||!Et&&De[0]>0)&&De.unshift(0)}(),De!==Se&&(m(Ne,function(t,e){De.indexOf(e)<0?N(t):E(t)}),Se=De))}function fi(t){return{container:L,slideItems:j,navContainer:Be,navItems:Ne,controlsContainer:Ae,hasControls:de,prevButton:Ce,nextButton:Oe,items:yt,slideBy:gt,cloneCount:kt,slideCount:q,slideCountNew:Mt,index:qt,indexCached:Ft,navCurrentIndex:Pe,navCurrentIndexCached:ke,visibleNavIndexes:De,visibleNavIndexesCached:Se,sheet:Dt,event:t||{}}}e&&console.warn("No slides found in",t.container)}},function(t,e){Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e})},function(t,e,n){"use strict";var i=n(1),a={props:{mode:[String],autoInit:{type:[Boolean],default:!0},axis:{type:[String],validator:function(t){return"horizontal"===t||"vertical"===t}},items:{type:[String,Number],default:1},gutter:{type:[String,Number],default:0},edgePadding:{type:[String,Number],default:0},fixedWidth:{type:[String,Boolean,Number],default:!1},swipeAngle:{type:[Boolean,Number],default:15},slideBy:{type:[String,Number],default:1},controls:{type:[String,Boolean],default:!0},controlsText:{type:[Array],default:function(){return["prev","next"]}},controlsContainer:{type:[Boolean,Node,String],default:!1},nav:{type:[Boolean],default:!1},navContainer:{type:[Boolean,Node,String],default:!1},arrowKeys:{type:[Boolean],default:!1},speed:{type:[String,Number],default:300},autoplay:{type:[Boolean],default:!1},autoplayTimeout:{type:[Number],default:5e3},autoplayDirection:{type:[String],default:"forward",validator:function(t){return"forward"===t||"backward"===t}},autoplayText:{type:[Array],default:function(){return["start","stop"]}},autoplayHoverPause:{type:[Boolean],default:!1},autoplayButton:{type:[Boolean,Node,String],default:!1},autoplayButtonOutput:{type:[Boolean],default:!0},autoplayResetOnVisibility:{type:[Boolean],default:!0},animateIn:{type:[String],default:"tns-fadeIn"},animateOut:{type:[String],default:"tns-fadeOut"},animateNormal:{type:[String],default:"tns-normal"},animateDelay:{type:[String,Number,Boolean],default:!1},loop:{type:[Boolean],default:!0},rewind:{type:[Boolean],default:!1},autoHeight:{type:[Boolean],default:!1},responsive:{type:[Boolean,Object],default:!1},lazyload:{type:[Boolean],default:!1},touch:{type:[Boolean],default:!0},mouseDrag:{type:[Boolean],default:!1},nested:{type:[String,Boolean],default:!1,validator:function(t){return"inner"===t||"outer"===t||!1===t}},freezable:{type:[Boolean],default:!0},disable:{type:[Boolean],default:!1},onInit:{type:[Function,Boolean],default:!1}},mounted:function(){this.autoInit&&this.init()},beforeDestroy:function(){this.slider&&this.slider.destroy()},methods:{goTo:function(t){this.slider.goTo(t)},rebuild:function(){this.slider=this.slider.rebuild()},getInfo:function(){this.$emit("getInfo",this.slider.getInfo(),this.slider)},destroy:function(){this.slider.destroy()},init:function(){var t={container:this.$el,axis:this.axis,items:parseInt(this.items),mode:this.mode,gutter:this.gutter,edgePadding:this.edgePadding,fixedWidth:this.fixedWidth?parseInt(this.fixedWidth,10):this.fixedWidth,slideBy:this.slideBy,controls:this.controls,controlsText:this.controlsText,controlsContainer:this.controlsContainer,nav:this.nav,navContainer:this.navContainer,arrowKeys:this.arrowKeys,speed:this.speed,autoplay:this.autoplay,autoplayTimeout:this.autoplayTimeout,autoplayDirection:this.autoplayDirection,autoplayText:this.autoplayText,autoplayHoverPause:this.autoplayHoverPause,autoplayButton:this.autoplayButton,autoplayButtonOutput:this.autoplayButtonOutput,autoplayResetOnVisibility:this.autoplayResetOnVisibility,animateIn:this.animateIn,animateOut:this.animateOut,animateNormal:this.animateNormal,animateDelay:this.animateDelay,loop:this.loop,rewind:this.rewind,autoHeight:this.autoHeight,responsive:this.responsive,lazyload:this.lazyload,touch:this.touch,mouseDrag:this.mouseDrag,nested:this.nested,freezable:this.freezable,disable:this.disable,onInit:this.onInit,swipeAngle:this.swipeAngle};!function(t){for(var e in t)t.hasOwnProperty(e)&&void 0===t[e]&&delete t[e]}(t),this.slider=(0,i.tns)(t)}},render:function(t){return t("div",this.$slots.default)}};t.exports=a}])});
//# sourceMappingURL=index.js.map