var t,e;t=this,e=(t,e)=>(()=>{var r={155:t=>{t.exports=e},272:e=>{e.exports=t}},n={};function o(t){var e=n[t];if(void 0!==e)return e.exports;var u=n[t]={exports:{}};return r[t](u,u.exports,o),u.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var u={};o.r(u),o.d(u,{CreateDispatch:()=>v,initial:()=>T,parseStringify:()=>p,useDispatch:()=>x,useSelector:()=>h});var a=o(272),i=o(155);const s=c;function c(t,e){const r=f();return(c=function(t,e){return r[t-=353]})(t,e)}function f(){const t=["cLQXK","vDCbj","MCTof","object","split","YEXWH","450882SGpZRI","DISPATCH_STATE","71820aQFsWQ","TULBi","You must provide a createDispatch function.","4412286dEXZWL","vWwMN","map","wdCDl","EtkSW","string","lcHDn","RPYMi","vZbuZ","SET_STATE","tempState","YZkUB","MnuLL","TcdoN","9637650wYrxMk","Invalid keyPaths type. Must be string or array of strings.","qQoww","63gKGCFO","gPHvT","payload","state","JrlQJ","5051290oXPuSL","length","REMOVE_KEYS","parse","forEach","type","ZbmqC","zwZYB","Provider","mnSdl","useDispatch must be used within a StateProvider","2202048wGQbvR","NwBzD","rLDwU","dIrKa","keys","isArray","1oDrPmg","qfTlt","RESET_STATE","eEKrr","ICaut","tuAqb","CULkz","rgHfa","51236nmizwa","qvUYe","dUpaf","stringify","565gproDX"];return(f=function(){return t})()}!function(t){const e=c,r=t();for(;;)try{if(928476==-parseInt(e(414))/1*(-parseInt(e(370))/2)+parseInt(e(375))/3+-parseInt(e(359))/4*(-parseInt(e(363))/5)+parseInt(e(389))/6+-parseInt(e(372))/7+-parseInt(e(408))/8+-parseInt(e(392))/9*(parseInt(e(397))/10))break;r.push(r.shift())}catch(t){r.push(r.shift())}}(f);const p=t=>JSON[s(400)](JSON[s(362)](t)),d=(t,e)=>{const r=s,n={gPHvT:r(367)},o=e[r(368)](".");let u=t;for(const t of o){if(!u||typeof u!==n[r(393)]||!(t in u))return;u=u[t]}return u},l=(t,e,r)=>{const n=s,o={eEKrr:function(t,e){return t===e},vDCbj:function(t,e){return t-e},rLDwU:function(t,e){return t!==e},EtkSW:"object"},u=e[n(368)](".");let a=t;u.forEach(((t,e)=>{const i=n;o[i(354)](e,o[i(365)](u[i(398)],1))?a[t]=r:((!a[t]||o[i(410)](typeof a[t],o[i(379)]))&&(a[t]={}),a=a[t])}))},y=(t,e)=>{const r=s,n={TcdoN:function(t,e){return t<e},MnuLL:function(t,e){return t===e},mnSdl:function(t,e){return t-e},dUpaf:function(t,e){return t in e},tuAqb:function(t,e){return t===e},UBZeF:r(367),zwZYB:function(t,e){return t!==e}},o=e[r(368)](".");let u=t;for(let t=0;n[r(388)](t,o[r(398)]);t++){const e=o[t];if(n[r(387)](t,n[r(406)](o.length,1)))return void delete u[e];if(!(n[r(361)](e,u)&&n[r(356)](typeof u[e],n.UBZeF)&&n[r(404)](u[e],null)))return;u=u[e]}},v=t=>({name:e,payload:r,tools:n})=>{({TULBi:function(t,e){return t(e)}})[s(373)](t,{name:e,payload:r,tools:n})},m=(t,e)=>{const r=s,n={LujLj:function(t,e){return t!==e},MCTof:function(t,e,r,n){return t(e,r,n)},yIxyi:function(t,e,r){return t(e,r)},uLksR:r(384),YZkUB:r(371),YEXWH:r(353),dIrKa:function(t,e){return t(e)},MmWKk:r(399)};switch(e[r(402)]){case n.uLksR:return{...t,tempState:{...e[r(394)]}};case n[r(386)]:return{...t,state:{...t[r(395)],...t[r(385)],...e[r(394)]},tempState:{}};case n[r(369)]:const o=n[r(411)](p,t.state);return e[r(412)][r(401)]((t=>{const e=r,u=d(w,t);n.LujLj(u,void 0)?n[e(366)](l,o,t,u):n.yIxyi(y,o,t)})),{...t,state:o};case n.MmWKk:const u=n[r(411)](p,t[r(395)]);return e[r(412)][r(401)]((t=>{n.yIxyi(y,u,t)})),{...t,state:u};default:return t}},S=(0,i.createContext)(null),x=()=>{const t=s,e={RPYMi:function(t,e){return t(e)},JrlQJ:t(407)},r=e[t(382)](i.useContext,S);if(!r)throw new Error(e[t(396)]);return r};function h(t,e=""){const r=s,n={cLQXK:function(t,e,r){return t(e,r)},qvUYe:function(t,e){return t===e},ZbmqC:function(t,e){return t!==e},qfTlt:function(t,e){return t||e},sqeao:r(380),CULkz:function(t,e){return t!==e},vWwMN:function(t,e){return t!==e},rgHfa:function(t){return t()}},{state:o}=n[r(358)](x);return(0,i.useMemo)((()=>{const u=r,a={jgtme:function(t,e,r){return n[c(364)](t,e,r)},YHxWA:function(t,e){return n[c(360)](t,e)},BdrFx:function(t,e){return n[c(403)](t,e)},vZbuZ:function(t,e){return n[c(415)](t,e)}};if(n[u(360)](typeof t,n.sqeao)){const r=n[u(364)](d,o,t),a=e;return n.qvUYe(typeof a,u(367))&&n[u(357)](a,null)?{...a,...r||{}}:n[u(376)](r,void 0)?r:a}if(Array[u(413)](t))return t[u(377)](((t,r)=>{const n=u,i=a.jgtme(d,o,t),s=Array[n(413)](e)?e[r]:void 0;return a.YHxWA(typeof s,n(367))&&a.BdrFx(s,null)?{...s,...a[n(383)](i,{})}:void 0!==i?i:s}));throw new Error(u(390))}),[o,t,e])}let w={};const T=(t,e)=>{const r=s,n={lcHDn:function(t,e){return t(e)},TclPx:r(384),qQoww:function(t,e,r){return t(e,r)},xldYB:function(t,e,r){return t(e,r)}};return w=t,({children:o})=>{const u=r,s={wdCDl:function(t,e){return n[c(381)](t,e)},ICaut:n.TclPx,NwBzD:function(t,e){return t(e)}},[f,p]=n[u(391)](i.useReducer,m,{state:t,tempState:{}}),d=(t,e)=>{const r=u;s[r(378)](p,{type:s[r(355)],payload:e?{[e]:t}:t})},l=(t,e)=>{const r=u;s[r(378)](p,{type:r(371),payload:e?{[e]:t}:t})},y={dispatch:l,addState:d,reset:t=>p({type:"RESET_STATE",keys:Array[u(413)](t)?t:[t]}),dirty:t=>p({type:u(399),keys:Array.isArray(t)?t:[t]}),state:f[u(395)]};return n.xldYB(a.jsx,S[u(405)],{value:{dispatcher:(t,r)=>{const n=u;if(!e)throw new Error(n(374));s[n(409)](v,e)({name:t,payload:r,tools:y})},ApiCall:t=>t({state:f[u(395)],dispatch:l,addState:d}),...y},children:o})}};return u})(),"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react/jsx-runtime"),require("react")):"function"==typeof define&&define.amd?define(["react/jsx-runtime","react"],e):"object"==typeof exports?exports.zustate=e(require("react/jsx-runtime"),require("react")):t.zustate=e(t["react/jsx-runtime"],t.react);