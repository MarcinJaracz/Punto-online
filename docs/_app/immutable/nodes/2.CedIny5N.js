import{s as ve,n as J,r as he,c as fe}from"../chunks/scheduler.Bmg8oFKD.js";import{S as _e,i as me,e as d,s as T,b as i,f as b,u as I,a as G,d as f,k as s,v as L,B as ce,l as U,m as l,o as r}from"../chunks/index.CP15blbN.js";import{p as q,d as pe}from"../chunks/click.2F81OxKw.js";function be(){const n={newGame:"#007bff",continue:"#ffc107",about:"#28a745",exit:"#dc3545",settings:"#007bff"};function e(o,v){o.target.style.backgroundColor=v}function c(o){o.target.style.backgroundColor=""}function a(o,v){o.target.style.backgroundColor=v}function u(o){o.target.style.backgroundColor=""}return{colors:n,handleMouseOver:e,handleMouseOut:c,handleFocus:a,handleBlur:u}}const Me=Object.freeze(Object.defineProperty({__proto__:null,load:be},Symbol.toStringTag,{value:"Module"}));function ge(n){let e,c="Continue";return{c(){e=d("span"),e.textContent=c,this.h()},l(a){e=i(a,"SPAN",{"data-bs-toggle":!0,"data-placement":!0,title:!0,"data-svelte-h":!0}),I(e)!=="svelte-12vo3nv"&&(e.textContent=c),this.h()},h(){s(e,"data-bs-toggle","tooltip"),s(e,"data-placement","right"),s(e,"title","There is no active game")},m(a,u){U(a,e,u)},p:J,d(a){a&&f(e)}}}function ye(n){let e,c="Continue",a,u;return{c(){e=d("a"),e.textContent=c,this.h()},l(o){e=i(o,"A",{id:!0,href:!0,"data-sveltekit-preload-data":!0,style:!0,"data-svelte-h":!0}),I(e)!=="svelte-1bwlpq9"&&(e.textContent=c),this.h()},h(){s(e,"id","continue"),s(e,"href","/board"),s(e,"data-sveltekit-preload-data","tap"),L(e,"border-radius","10px")},m(o,v){U(o,e,v),a||(u=[r(e,"mouseover",n[9]),r(e,"mouseout",n[3]),r(e,"focus",n[10]),r(e,"blur",n[5]),r(e,"mousedown",q)],a=!0)},p:J,d(o){o&&f(e),a=!1,he(u)}}}function Ce(n){let e,c,a,u,o='<img src="./card_head.svg" alt="Punto logo" class="svelte-17sz6hm"/>',v,x,k='<h1 class="text-center py-4"><strong>Punto Online</strong></h1>',P,M,w,h,F="New Game",z,j,y,B,D,E,t,W="About",K,A,O,_,X="Settings",Q,S,V,m,Y="Exit",R,Z;function $(g,H){return g[0]?ye:ge}let N=$(n),C=N(n);return{c(){e=d("div"),c=d("div"),a=d("div"),u=d("div"),u.innerHTML=o,v=T(),x=d("div"),x.innerHTML=k,P=T(),M=d("span"),w=d("h3"),h=d("a"),h.textContent=F,z=T(),j=d("div"),y=d("h3"),C.c(),B=T(),D=d("div"),E=d("h3"),t=d("a"),t.textContent=W,K=T(),A=d("div"),O=d("h3"),_=d("a"),_.textContent=X,Q=T(),S=d("div"),V=d("h3"),m=d("a"),m.textContent=Y,this.h()},l(g){e=i(g,"DIV",{class:!0});var H=b(e);c=i(H,"DIV",{class:!0});var ee=b(c);a=i(ee,"DIV",{class:!0});var p=b(a);u=i(p,"DIV",{class:!0,"data-svelte-h":!0}),I(u)!=="svelte-tmv0ak"&&(u.innerHTML=o),v=G(p),x=i(p,"DIV",{class:!0,"data-svelte-h":!0}),I(x)!=="svelte-t3hf4e"&&(x.innerHTML=k),P=G(p),M=i(p,"SPAN",{class:!0});var te=b(M);w=i(te,"H3",{class:!0});var se=b(w);h=i(se,"A",{id:!0,href:!0,"data-sveltekit-preload-data":!0,style:!0,tabindex:!0,"data-svelte-h":!0}),I(h)!=="svelte-1yzub8h"&&(h.textContent=F),se.forEach(f),te.forEach(f),z=G(p),j=i(p,"DIV",{class:!0});var ae=b(j);y=i(ae,"H3",{class:!0});var ne=b(y);C.l(ne),ne.forEach(f),ae.forEach(f),B=G(p),D=i(p,"DIV",{class:!0});var oe=b(D);E=i(oe,"H3",{class:!0});var re=b(E);t=i(re,"A",{id:!0,href:!0,"data-sveltekit-preload-data":!0,style:!0,tabindex:!0,"data-svelte-h":!0}),I(t)!=="svelte-wnv36q"&&(t.textContent=W),re.forEach(f),oe.forEach(f),K=G(p),A=i(p,"DIV",{class:!0});var le=b(A);O=i(le,"H3",{class:!0});var ue=b(O);_=i(ue,"A",{id:!0,href:!0,"data-sveltekit-preload-data":!0,style:!0,tabindex:!0,"data-svelte-h":!0}),I(_)!=="svelte-dzplk"&&(_.textContent=X),ue.forEach(f),le.forEach(f),Q=G(p),S=i(p,"DIV",{class:!0});var de=b(S);V=i(de,"H3",{class:!0});var ie=b(V);m=i(ie,"A",{id:!0,href:!0,style:!0,tabindex:!0,"data-svelte-h":!0}),I(m)!=="svelte-5sdh1s"&&(m.textContent=Y),ie.forEach(f),de.forEach(f),p.forEach(f),ee.forEach(f),H.forEach(f),this.h()},h(){s(u,"class","row justify-content-center"),s(x,"class","row justify-content-center"),s(h,"id","newGame"),s(h,"href","/newgame"),s(h,"data-sveltekit-preload-data","tap"),L(h,"border-radius","10px"),s(h,"tabindex","0"),s(w,"class","text-center"),s(M,"class","row justify-content-center"),s(y,"class","text-center svelte-17sz6hm"),ce(y,"gray",!n[0]),s(j,"class","row justify-content-center display-disabled"),s(t,"id","about"),s(t,"href","/about"),s(t,"data-sveltekit-preload-data","tap"),L(t,"border-radius","10px"),s(t,"tabindex","0"),s(E,"class","text-center"),s(D,"class","row justify-content-center"),s(_,"id","settings"),s(_,"href","/settings"),s(_,"data-sveltekit-preload-data","tap"),L(_,"border-radius","10px"),s(_,"tabindex","0"),s(O,"class","text-center"),s(A,"class","row justify-content-center"),s(m,"id","exit"),s(m,"href","https://duckduckgo.com/"),L(m,"border-radius","10px"),s(m,"tabindex","0"),s(V,"class","text-center"),s(S,"class","row justify-content-center"),s(a,"class","col-4"),s(c,"class","d-flex justify-content-center align-items-center vh-100"),s(e,"class","container vh-100")},m(g,H){U(g,e,H),l(e,c),l(c,a),l(a,u),l(a,v),l(a,x),l(a,P),l(a,M),l(M,w),l(w,h),l(a,z),l(a,j),l(j,y),C.m(y,null),l(a,B),l(a,D),l(D,E),l(E,t),l(a,K),l(a,A),l(A,O),l(O,_),l(a,Q),l(a,S),l(S,V),l(V,m),R||(Z=[r(h,"mouseover",n[7]),r(h,"mouseout",n[3]),r(h,"focus",n[8]),r(h,"blur",n[5]),r(w,"mousedown",q),r(t,"mouseover",n[11]),r(t,"mouseout",n[3]),r(t,"focus",n[12]),r(t,"blur",n[5]),r(E,"mousedown",q),r(_,"mouseover",n[13]),r(_,"mouseout",n[3]),r(_,"focus",n[14]),r(_,"blur",n[5]),r(O,"mousedown",q),r(m,"mouseover",n[15]),r(m,"mouseout",n[3]),r(m,"focus",n[16]),r(m,"blur",n[5]),r(V,"mousedown",q)],R=!0)},p(g,[H]){N===(N=$(g))&&C?C.p(g,H):(C.d(1),C=N(g),C&&(C.c(),C.m(y,null))),H&1&&ce(y,"gray",!g[0])},i:J,o:J,d(g){g&&f(e),C.d(),R=!1,he(Z)}}}function xe(n,e,c){let a;fe(n,pe,t=>c(0,a=t));let{data:u}=e;const o=u.colors;let v=u.handleMouseOver,x=u.handleMouseOut,k=u.handleFocus,P=u.handleBlur;const M=t=>v(t,o.newGame),w=t=>k(t,o.newGame),h=t=>v(t,o.continue),F=t=>k(t,o.continue),z=t=>v(t,o.about),j=t=>k(t,o.about),y=t=>v(t,o.settings),B=t=>k(t,o.settings),D=t=>v(t,o.exit),E=t=>k(t,o.exit);return n.$$set=t=>{"data"in t&&c(6,u=t.data)},[a,o,v,x,k,P,u,M,w,h,F,z,j,y,B,D,E]}class je extends _e{constructor(e){super(),me(this,e,xe,Ce,ve,{data:6})}}export{je as component,Me as universal};
