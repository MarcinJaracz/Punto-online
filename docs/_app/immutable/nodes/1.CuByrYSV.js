import{s as R,c as q,n as B}from"../chunks/scheduler.Bmg8oFKD.js";import{S as H,i as P,e as _,s as x,c as U,b as v,f as g,d as m,a as C,j as z,k as $,l as D,m as i,n as A,p as F,q as G,r as J,u as K,t as E,g as k,y as S}from"../chunks/index.CP15blbN.js";import{s as L}from"../chunks/entry.CDaHRkoQ.js";import{R as M}from"../chunks/return.Coq9tSTq.js";const N=()=>{const a=L;return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},updated:a.updated}},O={subscribe(a){return N().page.subscribe(a)}};function Q(a){let e,r="Unknown error";return{c(){e=_("h1"),e.textContent=r},l(t){e=v(t,"H1",{"data-svelte-h":!0}),K(e)!=="svelte-14edej2"&&(e.textContent=r)},m(t,o){D(t,e,o)},p:B,d(t){t&&m(e)}}}function T(a){let e,r=a[0].status+"",t,o,l,h,f,c=a[0].error.message+"",p;return{c(){e=_("h1"),t=E(r),o=_("br"),l=E("Sorry, Page"),h=_("br"),f=x(),p=E(c)},l(u){e=v(u,"H1",{});var s=g(e);t=k(s,r),o=v(s,"BR",{}),l=k(s,"Sorry, Page"),h=v(s,"BR",{}),f=C(s),p=k(s,c),s.forEach(m)},m(u,s){D(u,e,s),i(e,t),i(e,o),i(e,l),i(e,h),i(e,f),i(e,p)},p(u,s){s&1&&r!==(r=u[0].status+"")&&S(t,r),s&1&&c!==(c=u[0].error.message+"")&&S(p,c)},d(u){u&&m(e)}}}function W(a){let e,r,t,o,l,h,f,c,p;function u(n,b){return n[0].error?T:Q}let s=u(a),d=s(a);return c=new M({}),{c(){e=_("div"),r=_("div"),t=_("div"),o=_("div"),l=_("div"),d.c(),h=x(),f=_("div"),U(c.$$.fragment),this.h()},l(n){e=v(n,"DIV",{class:!0});var b=g(e);r=v(b,"DIV",{class:!0});var I=g(r);t=v(I,"DIV",{class:!0});var y=g(t);o=v(y,"DIV",{class:!0});var V=g(o);l=v(V,"DIV",{class:!0});var j=g(l);d.l(j),j.forEach(m),V.forEach(m),h=C(y),f=v(y,"DIV",{class:!0});var w=g(f);z(c.$$.fragment,w),w.forEach(m),y.forEach(m),I.forEach(m),b.forEach(m),this.h()},h(){$(l,"class","error-frame svelte-1w9r1gg"),$(o,"class","row justify-content-center"),$(f,"class","row justify-content-center"),$(t,"class","col-2"),$(r,"class","d-flex justify-content-center align-items-center h-100"),$(e,"class","conteiner vh-100")},m(n,b){D(n,e,b),i(e,r),i(r,t),i(t,o),i(o,l),d.m(l,null),i(t,h),i(t,f),A(c,f,null),p=!0},p(n,[b]){s===(s=u(n))&&d?d.p(n,b):(d.d(1),d=s(n),d&&(d.c(),d.m(l,null)))},i(n){p||(F(c.$$.fragment,n),p=!0)},o(n){G(c.$$.fragment,n),p=!1},d(n){n&&m(e),d.d(),J(c)}}}function X(a,e,r){let t;return q(a,O,o=>r(0,t=o)),[t]}let re=class extends H{constructor(e){super(),P(this,e,X,W,R,{})}};export{re as component};
