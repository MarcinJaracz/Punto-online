import{s as re,r as ie,c as ce,n as z}from"../chunks/scheduler.Bmg8oFKD.js";import{S as oe,i as de,s as C,e as f,c as he,h as fe,d as o,a as j,b as u,f as _,j as ue,u as F,k as c,v as M,l as q,m as i,n as ve,o as te,p as me,q as _e,C as Y,r as ge,t as G,g as R}from"../chunks/index.D1yS9ibA.js";import{R as pe}from"../chunks/return.SR3DSX5v.js";import{p as ye,a as be,n as xe}from"../chunks/click.wjeWDVOy.js";function S(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function le(n,s,a){const t=n.slice();return t[3]=s[a],t[5]=a,t}function Ee(n,s,a){const t=n.slice();return t[3]=s[a],t[5]=a,t}function se(n,s,a){const t=n.slice();return t[3]=s[a],t[5]=a,t}function ae(n){let s,a,t,r,m,w=n[5]+1+"",y,I,d,b='<img src="/card_head.svg" alt="Player 1 Icon" width="100" height="100" class="svelte-ea0h9o"/>',k;return{c(){s=f("div"),a=f("div"),t=f("div"),r=f("div"),m=G("Player "),y=G(w),I=C(),d=f("div"),d.innerHTML=b,k=C(),this.h()},l(v){s=u(v,"DIV",{class:!0});var x=_(s);a=u(x,"DIV",{class:!0});var D=_(a);t=u(D,"DIV",{class:!0});var E=_(t);r=u(E,"DIV",{class:!0,style:!0});var h=_(r);m=R(h,"Player "),y=R(h,w),h.forEach(o),I=j(E),d=u(E,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),F(d)!=="svelte-18n787b"&&(d.innerHTML=b),E.forEach(o),D.forEach(o),k=j(x),x.forEach(o),this.h()},h(){c(r,"class","d-block p-2 bg-"+n[1][n[5]]+" rounded text-white fs-4 text-center mb-2 svelte-ea0h9o"),M(r,"cursor","default"),c(d,"class","box svelte-ea0h9o"),c(d,"id","player"+(n[5]+1)),c(t,"class","d-grid align-items-center justify-content-evenly"),c(a,"class","player-container"),c(s,"class","row")},m(v,x){q(v,s,x),i(s,a),i(a,t),i(t,r),i(r,m),i(r,y),i(t,I),i(t,d),i(s,k)},p:z,d(v){v&&o(s)}}}function Ie(n){let s;return{c(){s=f("div"),this.h()},l(a){s=u(a,"DIV",{class:!0,id:!0}),_(s).forEach(o),this.h()},h(){c(s,"class","box svelte-ea0h9o"),c(s,"id","cell"+(n[5]+1))},m(a,t){q(a,s,t)},p:z,d(a){a&&o(s)}}}function ne(n){let s,a,t,r,m,w=n[5]+3+"",y,I,d,b='<img src="/card_head.svg" alt="Player 1 Icon" width="100" height="100" class="svelte-ea0h9o"/>',k;return{c(){s=f("div"),a=f("div"),t=f("div"),r=f("div"),m=G("Player "),y=G(w),I=C(),d=f("div"),d.innerHTML=b,k=C(),this.h()},l(v){s=u(v,"DIV",{class:!0});var x=_(s);a=u(x,"DIV",{class:!0});var D=_(a);t=u(D,"DIV",{class:!0});var E=_(t);r=u(E,"DIV",{class:!0,style:!0});var h=_(r);m=R(h,"Player "),y=R(h,w),h.forEach(o),I=j(E),d=u(E,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),F(d)!=="svelte-7srdad"&&(d.innerHTML=b),E.forEach(o),D.forEach(o),k=j(x),x.forEach(o),this.h()},h(){c(r,"class","d-block p-2 bg-"+n[1][n[5]+2]+" rounded text-white fs-4 text-center mb-2 svelte-ea0h9o"),M(r,"cursor","default"),c(d,"class","box svelte-ea0h9o"),c(d,"id","player"+(n[5]+3)),c(t,"class","d-grid align-items-center justify-content-evenly"),c(a,"class","player-container"),c(s,"class","row")},m(v,x){q(v,s,x),i(s,a),i(a,t),i(t,r),i(r,m),i(r,y),i(t,I),i(t,d),i(s,k)},p:z,d(v){v&&o(s)}}}function De(n){let s,a,t,r,m,w,y,I,d,b,k,v,x,D,E,h,J='<i class="fa-sharp fa-light fa-circle-arrow-left"></i> finish this game and exit',B,O,K,H=S(Array(Math.min(n[0],2)).fill(0)),g=[];for(let e=0;e<H.length;e+=1)g[e]=ae(se(n,H,e));let N=S(Array(36).fill(0)),P=[];for(let e=0;e<N.length;e+=1)P[e]=Ie(Ee(n,N,e));let L=S(Array(Math.max(0,n[0]-2)).fill(0)),p=[];for(let e=0;e<L.length;e+=1)p[e]=ne(le(n,L,e));return v=new pe({}),{c(){s=C(),a=f("body"),t=f("div"),r=f("div"),m=f("div");for(let e=0;e<g.length;e+=1)g[e].c();w=C(),y=f("div"),I=f("div");for(let e=0;e<P.length;e+=1)P[e].c();d=C(),b=f("div");for(let e=0;e<p.length;e+=1)p[e].c();k=C(),he(v.$$.fragment),x=C(),D=f("div"),E=f("h3"),h=f("a"),h.innerHTML=J,this.h()},l(e){fe("svelte-1mlai1k",document.head).forEach(o),s=j(e),a=u(e,"BODY",{});var l=_(a);t=u(l,"DIV",{class:!0});var V=_(t);r=u(V,"DIV",{class:!0,style:!0});var T=_(r);m=u(T,"DIV",{class:!0,style:!0});var Q=_(m);for(let $=0;$<g.length;$+=1)g[$].l(Q);Q.forEach(o),w=j(T),y=u(T,"DIV",{class:!0,style:!0});var U=_(y);I=u(U,"DIV",{class:!0});var W=_(I);for(let $=0;$<P.length;$+=1)P[$].l(W);W.forEach(o),U.forEach(o),d=j(T),b=u(T,"DIV",{class:!0,style:!0});var X=_(b);for(let $=0;$<p.length;$+=1)p[$].l(X);X.forEach(o),T.forEach(o),k=j(V),ue(v.$$.fragment,V),x=j(V),D=u(V,"DIV",{class:!0});var Z=_(D);E=u(Z,"H3",{});var ee=_(E);h=u(ee,"A",{href:!0,"data-bs-toggle":!0,"data-placement":!0,title:!0,style:!0,"data-svelte-h":!0}),F(h)!=="svelte-1vf9r5v"&&(h.innerHTML=J),ee.forEach(o),Z.forEach(o),V.forEach(o),l.forEach(o),this.h()},h(){document.title="Board",c(m,"class","col-1 d-flex flex-column justify-content-evenly"),M(m,"flex-shrink","0"),M(m,"min-width","100px"),c(I,"class","board svelte-ea0h9o"),c(y,"class","col-7 mt-5 d-flex flex-column"),M(y,"flex-shrink","0"),M(y,"min-width","700px"),c(b,"class","col-1 d-flex flex-column justify-content-evenly"),M(b,"flex-shrink","0"),M(b,"min-width","100px"),c(r,"class","d-flex justify-content-evenly"),M(r,"overflow-x","hidden"),c(h,"href","/"),c(h,"data-bs-toggle","tooltip"),c(h,"data-placement","right"),c(h,"title","Go back to main page"),M(h,"--hover-color","#dc3545"),c(D,"class","nav justify-content-center pt-4"),c(t,"class","container-fluid")},m(e,A){q(e,s,A),q(e,a,A),i(a,t),i(t,r),i(r,m);for(let l=0;l<g.length;l+=1)g[l]&&g[l].m(m,null);i(r,w),i(r,y),i(y,I);for(let l=0;l<P.length;l+=1)P[l]&&P[l].m(I,null);i(r,d),i(r,b);for(let l=0;l<p.length;l+=1)p[l]&&p[l].m(b,null);i(t,k),ve(v,t,null),i(t,x),i(t,D),i(D,E),i(E,h),B=!0,O||(K=[te(h,"click",n[2]),te(h,"mousedown",ye)],O=!0)},p(e,[A]){if(A&3){H=S(Array(Math.min(e[0],2)).fill(0));let l;for(l=0;l<H.length;l+=1){const V=se(e,H,l);g[l]?g[l].p(V,A):(g[l]=ae(V),g[l].c(),g[l].m(m,null))}for(;l<g.length;l+=1)g[l].d(1);g.length=H.length}if(A&3){L=S(Array(Math.max(0,e[0]-2)).fill(0));let l;for(l=0;l<L.length;l+=1){const V=le(e,L,l);p[l]?p[l].p(V,A):(p[l]=ne(V),p[l].c(),p[l].m(b,null))}for(;l<p.length;l+=1)p[l].d(1);p.length=L.length}},i(e){B||(me(v.$$.fragment,e),B=!0)},o(e){_e(v.$$.fragment,e),B=!1},d(e){e&&(o(s),o(a)),Y(g,e),Y(P,e),Y(p,e),ge(v),O=!1,ie(K)}}}function Ve(n,s,a){let t;return ce(n,xe,w=>a(0,t=w)),[t,["primary","success","warning","danger"],()=>be(!1)]}class Pe extends oe{constructor(s){super(),de(this,s,Ve,De,re,{})}}export{Pe as component};
