"use strict";(self.webpackChunkcadenza=self.webpackChunkcadenza||[]).push([[333],{7122:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var s=n(67294),r=n(86010),i=n(12638),a=(n(39960),n(52263)),l=n(11207),c=n(30449),o=n.n(c),h=n(90629),d=n(85893);const u=n(4644);function x(){const{siteConfig:e}=(0,a.Z)();return(0,d.jsxs)("header",{className:(0,r.Z)("hero hero--primary",l.Z.heroBanner),children:[(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("h1",{className:"hero__title",children:" The Clarity Project "})," ",(0,d.jsx)("p",{className:"hero__subtitle",children:" Publications "})," ",(0,d.jsx)("div",{className:l.Z.buttons,children:" "})," "]})," "]})}const m=e=>{const t=o().toBibtex([e],!1),n=new u(t).format("bibliography",{format:"html",template:"apa",lang:"en-US"}),s=e.entryTags.url;return s?(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:n}}),(0,d.jsx)("a",{href:s,children:"Link to Publication"})]}):(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})},j=e=>{let{year:t}=e;const[n,r]=(0,s.useState)([]);return(0,s.useEffect)((()=>{fetch("publications.bib").then((e=>e.text())).then((e=>{const n=o().toJSON(e).filter((e=>e.entryTags.year===t.toString()));r(n)}))}),[t]),(0,d.jsx)("ul",{children:n.map(((e,t)=>(0,d.jsx)("li",{children:m(e)},t)))})};function f(){const{siteConfig:e}=(0,a.Z)(),[t,n]=(0,s.useState)([]);return(0,s.useEffect)((()=>{fetch("publications.bib").then((e=>e.text())).then((e=>{const t=o().toJSON(e),s=[...new Set(t.map((e=>e.entryTags.year)))].sort().reverse();n(s)}))}),[]),(0,d.jsxs)(i.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />",children:[(0,d.jsxs)("main",{children:[(0,d.jsx)(x,{}),(0,d.jsx)("div",{className:"container",children:(0,d.jsx)(h.Z,{sx:{p:2,m:4},children:t.map((e=>(0,d.jsxs)(s.Fragment,{children:[(0,d.jsx)("h2",{children:e}),(0,d.jsx)(j,{year:e})]},e)))})})]})," "]})}},11207:(e,t,n)=>{n.d(t,{Z:()=>s});const s={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}}}]);