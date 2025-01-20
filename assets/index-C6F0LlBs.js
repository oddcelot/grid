(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const de=(e,t)=>e===t,pe=Symbol("solid-track"),K={equals:de};let le=ue;const I=1,z=2,se={owned:null,cleanups:null,context:null,owner:null};var g=null;let J=null,he=null,h=null,y=null,L=null,W=0;function G(e,t){const n=h,l=g,s=e.length===0,i=t===void 0?l:t,o=s?se:{owned:null,cleanups:null,context:i?i.context:null,owner:i},r=s?e:()=>e(()=>D(()=>R(o)));g=o,h=null;try{return j(r,!0)}finally{h=n,g=l}}function P(e,t){t=t?Object.assign({},K,t):K;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},l=s=>(typeof s=="function"&&(s=s(n.value)),oe(n,s));return[re.bind(n),l]}function N(e,t,n){const l=Z(e,t,!1,I);U(l)}function me(e,t,n){le=$e;const l=Z(e,t,!1,I);l.user=!0,L?L.push(l):U(l)}function ie(e,t,n){n=n?Object.assign({},K,n):K;const l=Z(e,t,!0,0);return l.observers=null,l.observerSlots=null,l.comparator=n.equals||void 0,U(l),re.bind(l)}function D(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function ge(e){me(()=>D(e))}function be(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function re(){if(this.sources&&this.state)if(this.state===I)U(this);else{const e=y;y=null,j(()=>H(this),!1),y=e}if(h){const e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function oe(e,t,n){let l=e.value;return(!e.comparator||!e.comparator(l,t))&&(e.value=t,e.observers&&e.observers.length&&j(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],o=J&&J.running;o&&J.disposed.has(i),(o?!i.tState:!i.state)&&(i.pure?y.push(i):L.push(i),i.observers&&ce(i)),o||(i.state=I)}if(y.length>1e6)throw y=[],new Error},!1)),t}function U(e){if(!e.fn)return;R(e);const t=W;ye(e,e.value,t)}function ye(e,t,n){let l;const s=g,i=h;h=g=e;try{l=e.fn(t)}catch(o){return e.pure&&(e.state=I,e.owned&&e.owned.forEach(R),e.owned=null),e.updatedAt=n+1,fe(o)}finally{h=i,g=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?oe(e,l):e.value=l,e.updatedAt=n)}function Z(e,t,n,l=I,s){const i={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:g?g.context:null,pure:n};return g===null||g!==se&&(g.owned?g.owned.push(i):g.owned=[i]),i}function V(e){if(e.state===0)return;if(e.state===z)return H(e);if(e.suspense&&D(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<W);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===I)U(e);else if(e.state===z){const l=y;y=null,j(()=>H(e,t[0]),!1),y=l}}function j(e,t){if(y)return e();let n=!1;t||(y=[]),L?n=!0:L=[],W++;try{const l=e();return we(n),l}catch(l){n||(L=null),y=null,fe(l)}}function we(e){if(y&&(ue(y),y=null),e)return;const t=L;L=null,t.length&&j(()=>le(t),!1)}function ue(e){for(let t=0;t<e.length;t++)V(e[t])}function $e(e){let t,n=0;for(t=0;t<e.length;t++){const l=e[t];l.user?e[n++]=l:V(l)}for(t=0;t<n;t++)V(e[t])}function H(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const l=e.sources[n];if(l.sources){const s=l.state;s===I?l!==t&&(!l.updatedAt||l.updatedAt<W)&&V(l):s===z&&H(l,t)}}}function ce(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=z,n.pure?y.push(n):L.push(n),n.observers&&ce(n))}}function R(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),l=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),o=n.observerSlots.pop();l<s.length&&(i.sourceSlots[o]=l,s[l]=i,n.observerSlots[l]=o)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)R(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)R(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function ve(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function fe(e,t=g){throw ve(e)}const Se=Symbol("fallback");function ee(e){for(let t=0;t<e.length;t++)e[t]()}function Ae(e,t,n={}){let l=[],s=[],i=[],o=0,r=t.length>1?[]:null;return be(()=>ee(i)),()=>{let c=e()||[],f=c.length,a,u;return c[pe],D(()=>{let w,A,x,O,_,$,p,b,d;if(f===0)o!==0&&(ee(i),i=[],l=[],s=[],o=0,r&&(r=[])),n.fallback&&(l=[Se],s[0]=G(F=>(i[0]=F,n.fallback())),o=1);else if(o===0){for(s=new Array(f),u=0;u<f;u++)l[u]=c[u],s[u]=G(S);o=f}else{for(x=new Array(f),O=new Array(f),r&&(_=new Array(f)),$=0,p=Math.min(o,f);$<p&&l[$]===c[$];$++);for(p=o-1,b=f-1;p>=$&&b>=$&&l[p]===c[b];p--,b--)x[b]=s[p],O[b]=i[p],r&&(_[b]=r[p]);for(w=new Map,A=new Array(b+1),u=b;u>=$;u--)d=c[u],a=w.get(d),A[u]=a===void 0?-1:a,w.set(d,u);for(a=$;a<=p;a++)d=l[a],u=w.get(d),u!==void 0&&u!==-1?(x[u]=s[a],O[u]=i[a],r&&(_[u]=r[a]),u=A[u],w.set(d,u)):i[a]();for(u=$;u<f;u++)u in x?(s[u]=x[u],i[u]=O[u],r&&(r[u]=_[u],r[u](u))):s[u]=G(S);s=s.slice(0,o=f),l=c.slice(0)}return s});function S(w){if(i[u]=w,r){const[A,x]=P(u);return r[u]=x,t(c[u],A)}return t(c[u])}}}function C(e,t){return D(()=>e(t||{}))}function xe(e){const t="fallback"in e&&{fallback:()=>e.fallback};return ie(Ae(()=>e.each,e.children,t||void 0))}function Ce(e,t,n){let l=n.length,s=t.length,i=l,o=0,r=0,c=t[s-1].nextSibling,f=null;for(;o<s||r<i;){if(t[o]===n[r]){o++,r++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===o){const a=i<l?r?n[r-1].nextSibling:n[i-r]:c;for(;r<i;)e.insertBefore(n[r++],a)}else if(i===r)for(;o<s;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[r]===t[s-1]){const a=t[--s].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--i],a),t[s]=n[i]}else{if(!f){f=new Map;let u=r;for(;u<i;)f.set(n[u],u++)}const a=f.get(t[o]);if(a!=null)if(r<a&&a<i){let u=o,S=1,w;for(;++u<s&&u<i&&!((w=f.get(t[u]))==null||w!==a+S);)S++;if(S>a-r){const A=t[o];for(;r<a;)e.insertBefore(n[r++],A)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const te="_$DX_DELEGATE";function _e(e,t,n,l={}){let s;return G(i=>{s=i,t===document?e():v(t,e(),t.firstChild?null:void 0,n)},l.owner),()=>{s(),t.textContent=""}}function T(e,t,n){let l;const s=()=>{const o=document.createElement("template");return o.innerHTML=e,o.content.firstChild},i=()=>(l||(l=s())).cloneNode(!0);return i.cloneNode=i,i}function ae(e,t=window.document){const n=t[te]||(t[te]=new Set);for(let l=0,s=e.length;l<s;l++){const i=e[l];n.has(i)||(n.add(i),t.addEventListener(i,Ne))}}function Ee(e,t){t==null?e.removeAttribute("class"):e.className=t}function Te(e,t,n){return D(()=>e(t,n))}function v(e,t,n,l){if(n!==void 0&&!l&&(l=[]),typeof t!="function")return Q(e,t,l,n);N(s=>Q(e,t(),s,n),l)}function Ne(e){let t=e.target;const n=`$$${e.type}`,l=e.target,s=e.currentTarget,i=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),o=()=>{const c=t[n];if(c&&!t.disabled){const f=t[`${n}Data`];if(f!==void 0?c.call(t,f,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&i(t.host),!0},r=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const c=e.composedPath();i(c[0]);for(let f=0;f<c.length-2&&(t=c[f],!!o());f++){if(t._$host){t=t._$host,r();break}if(t.parentNode===s)break}}else r();i(l)}function Q(e,t,n,l,s){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=l!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(i==="number"&&(t=t.toString(),t===n))return n;if(o){let r=n[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=q(e,n,l,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean")n=q(e,n,l);else{if(i==="function")return N(()=>{let r=t();for(;typeof r=="function";)r=r();n=Q(e,r,n,l)}),()=>n;if(Array.isArray(t)){const r=[],c=n&&Array.isArray(n);if(Y(r,t,n,s))return N(()=>n=Q(e,r,n,l,!0)),()=>n;if(r.length===0){if(n=q(e,n,l),o)return n}else c?n.length===0?ne(e,r,l):Ce(e,n,r):(n&&q(e),ne(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=q(e,n,l,t);q(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Y(e,t,n,l){let s=!1;for(let i=0,o=t.length;i<o;i++){let r=t[i],c=n&&n[e.length],f;if(!(r==null||r===!0||r===!1))if((f=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))s=Y(e,r,c)||s;else if(f==="function")if(l){for(;typeof r=="function";)r=r();s=Y(e,Array.isArray(r)?r:[r],Array.isArray(c)?c:[c])||s}else e.push(r),s=!0;else{const a=String(r);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return s}function ne(e,t,n=null){for(let l=0,s=t.length;l<s;l++)e.insertBefore(t[l],n)}function q(e,t,n,l){if(n===void 0)return e.textContent="";const s=l||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(s!==r){const c=r.parentNode===e;!i&&!o?c?e.replaceChild(s,r):e.insertBefore(s,n):c&&r.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}var Le=T("<div tabindex=0><div class=controls><label>aspect<input type=checkbox></label><label>columns<input type=number min=1 max=10 step=1></label><label>rows<input type=number min=1 max=10 step=1></label></div><div class=content>");const E=e=>{const[t,n]=P(e.columns||1),[l,s]=P(e.rows||1),[i,o]=P(e.keepAspect||!1);return(()=>{var r=Le(),c=r.firstChild,f=c.firstChild,a=f.firstChild,u=a.nextSibling,S=f.nextSibling,w=S.firstChild,A=w.nextSibling,x=S.nextSibling,O=x.firstChild,_=O.nextSibling,$=c.nextSibling;return u.$$input=()=>o(p=>!p),A.$$input=p=>n(p.currentTarget.valueAsNumber),_.$$input=p=>s(p.currentTarget.valueAsNumber),v($,()=>e.children),N(p=>{var b=`item span-c-${t()} span-r-${l()}`,d=!!i();return b!==p.e&&Ee(r,p.e=b),d!==p.t&&r.classList.toggle("keep-aspect",p.t=d),p},{e:void 0,t:void 0}),N(()=>u.checked=i()),N(()=>A.value=t()),N(()=>_.value=l()),r})()};ae(["input"]);var Oe=T("<p class=self-start>Quis enim duis ex. Duis nulla voluptate veniam incididunt occaecat Lorem elit nulla do Lorem nulla sint et. Aute mollit aliqua irure anim. Anim mollit do reprehenderit eiusmod magna eu id excepteur eu nisi cupidatat Lorem eiusmod do. Non est officia enim irure consectetur in ut. Reprehenderit elit esse culpa id labore veniam eu cillum irure duis aliquip sunt proident nulla labore. In aute eu commodo aliqua nostrud nostrud labore eiusmod ut culpa enim in minim. Do consequat cupidatat eu esse Lorem Lorem incididunt elit commodo do esse irure voluptate non. Reprehenderit elit esse culpa id labore veniam eu cillum irure duis aliquip sunt proident nulla labore. In aute eu commodo aliqua nostrud nostrud labore eiusmod ut culpa enim in minim. Do consequat cupidatat eu esse Lorem Lorem incididunt elit commodo do esse irure voluptate non."),Pe=T("<p>ipsum"),Ie=T("<p>sit"),ke=T("<p>amet"),Be=T("<p>consetetur"),qe=T("<p>sadipscing"),De=T("<p>elitr"),Me=T("<main><div class=config><label><input id=auto-grid-max-columns type=range min=1 max=10 step=1>max-columns</label><label><input id=auto-grid-min-size type=range min=1 max=10 step=1>min-size</label><label><input id=auto-grid-gap type=range min=0 max=5 step=0.5>gap</label><fieldset><legend>flow</legend></fieldset></div><div class=resize><div class=auto-grid>"),Re=T("<label><input name=flow id=auto-grid-gap type=radio>");const Ue=["row","row dense","column","column dense","dense"];function je(){const[e,t]=P(4),[n,l]=P(10),[s,i]=P(2),[o,r]=P("row");let c;const f=new CSSStyleSheet({}),a=ie(()=>2*s()+n());return f.insertRule(`
    @container auto-grid (width < ${a()}rem) {
        .item {
            --item-c-span: 0;
            --item-r-span: 1;

             filter: hue-rotate(120deg);
        }
    }
    `),ge(()=>{document.adoptedStyleSheets=[...document.adoptedStyleSheets,f]}),(()=>{var u=Me(),S=u.firstChild,w=S.firstChild,A=w.firstChild,x=w.nextSibling,O=x.firstChild,_=x.nextSibling,$=_.firstChild,p=_.nextSibling;p.firstChild;var b=S.nextSibling,d=b.firstChild;A.$$input=m=>t(m.currentTarget.valueAsNumber),O.$$input=m=>l(m.currentTarget.valueAsNumber),$.$$input=m=>i(m.currentTarget.valueAsNumber),v(p,C(xe,{each:Ue,children:m=>(()=>{var k=Re(),B=k.firstChild;return B.$$input=M=>r(M.currentTarget.value),B.value=m,v(k,m,null),N(()=>B.checked=m===o()),k})()}),null);var F=c;return typeof F=="function"?Te(F,b):c=b,v(d,C(E,{}),null),v(d,C(E,{}),null),v(d,C(E,{}),null),v(d,C(E,{columns:2,rows:2,get children(){return Oe()}}),null),v(d,C(E,{get children(){return Pe()}}),null),v(d,C(E,{get children(){return Ie()}}),null),v(d,C(E,{get children(){return ke()}}),null),v(d,C(E,{get children(){return Be()}}),null),v(d,C(E,{get children(){return qe()}}),null),v(d,C(E,{get children(){return De()}}),null),N(m=>{var k=`${e()}`,B=`${n()}rem`,M=`${s()}rem`,X=`${o()}`;return k!==m.e&&((m.e=k)!=null?d.style.setProperty("--auto-grid-max-columns",k):d.style.removeProperty("--auto-grid-max-columns")),B!==m.t&&((m.t=B)!=null?d.style.setProperty("--auto-grid-min-size",B):d.style.removeProperty("--auto-grid-min-size")),M!==m.a&&((m.a=M)!=null?d.style.setProperty("--auto-grid-gap",M):d.style.removeProperty("--auto-grid-gap")),X!==m.o&&((m.o=X)!=null?d.style.setProperty("--auto-grid-flow",X):d.style.removeProperty("--auto-grid-flow")),m},{e:void 0,t:void 0,a:void 0,o:void 0}),u})()}ae(["input"]);const Fe=document.getElementById("root");_e(()=>C(je,{}),Fe);
