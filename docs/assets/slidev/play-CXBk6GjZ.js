const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-D5tsKv-W.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-DLBpi5i9.js","assets/modules/unplugin-icons-BhCYip2t.js","assets/modules/vue-BjRcOai5.js","assets/modules/shiki-De3nY4yP.js","assets/modules/shiki-BPvBenZD.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-BF0VXNgL.js","assets/index-RECDTK9E.js","assets/index-BxVqFnOT.css","assets/slidev/useWakeLock-E6mnbzl1.js","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-BejC1R_J.js","assets/slidev/SlideContainer-DGITu4MO.js","assets/SlideContainer-3ntD6oTw.css","assets/slidev/SlideWrapper-Cw6MCF13.js","assets/SlideWrapper-BfZRR8yd.css","assets/slidev/title-renderer.md_vue_type_script_setup_true_lang-DnQuDcad.js","assets/slidev/context-BrmDBlER.js","assets/useWakeLock-H454Y214.css","assets/DrawingControls-C5T1oZL5.css"])))=>i.map(i=>d[i]);
import{d as v,ab as D,o as t,c as d,B as e,b as _,e as l,f as B,i as C,g as n,ak as N,z as E,k as S,al as $,aa as P,R as k,l as m,F as z,h as R,t as I}from"../modules/vue-BjRcOai5.js";import{y,a as M,x as H,H as b,I as w,d as x,J as L,l as V,G as T,K as W}from"../index-RECDTK9E.js";import{b as A,G,c as O,u as U,r as F,a as K,S as j,_ as J,o as X}from"./useWakeLock-E6mnbzl1.js";import{S as Y}from"./SlideContainer-DGITu4MO.js";import{_ as q}from"./PrintStyle.vue_vue_type_script_setup_true_lang-B8oKYa4I.js";import{u as Q}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-BF0VXNgL.js";import{n as Z}from"../modules/unplugin-icons-BhCYip2t.js";import"../modules/shiki-De3nY4yP.js";import"./IconButton.vue_vue_type_script_setup_true_lang-BejC1R_J.js";import"./SlideWrapper-Cw6MCF13.js";import"./title-renderer.md_vue_type_script_setup_true_lang-DnQuDcad.js";import"./context-BrmDBlER.js";const ee="/web.react/assets/logo-BYkHSa_O.png",te={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},oe=v({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(f,{emit:c}){const i=f,a=D(i,"modelValue",c);function r(){a.value=!1}return(p,o)=>(t(),d(N,null,[e(a)?(t(),_("div",te,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=u=>r())}),l("div",{class:C(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[B(p.$slots,"default")],2)])):n("v-if",!0)],1024))}}),se={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ae=["innerHTML"],le=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:ee,alt:"Slidev logo"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),P("dev ")])])],-1),ne=v({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(f,{emit:c}){const a=D(f,"modelValue",c),r=E(()=>typeof y.info=="string");return(p,o)=>(t(),d(oe,{modelValue:e(a),"onUpdate:modelValue":o[0]||(o[0]=u=>$(a)?a.value=u:null),class:"px-6 py-4"},{default:S(()=>[l("div",se,[r.value?(t(),_("div",{key:0,class:"mb-4",innerHTML:e(y).info},null,8,ae)):n("v-if",!0),le])]),_:1},8,["modelValue"]))}}),ie=v({__name:"Controls",setup(f){const{isEmbedded:c}=M(),i=!y.drawings.presenterOnly&&!c.value,s=k();i&&H(()=>import("./DrawingControls-D5tsKv-W.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18])).then(p=>s.value=p.default);const a=k(),r=k();return(p,o)=>(t(),_(z,null,[e(i)&&s.value?(t(),d(e(s),{key:0})):n("v-if",!0),m(A),m(G),a.value?(t(),d(e(a),{key:1})):n("v-if",!0),r.value?(t(),d(e(r),{key:2,modelValue:e(b),"onUpdate:modelValue":o[0]||(o[0]=u=>$(b)?b.value=u:null)},null,8,["modelValue"])):n("v-if",!0),e(y).info?(t(),d(ne,{key:3,modelValue:e(w),"onUpdate:modelValue":o[1]||(o[1]=u=>$(w)?w.value=u:null)},null,8,["modelValue"])):n("v-if",!0),m(O)],64))}}),re={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ue=v({__name:"PresenterMouse",setup(f){return(c,i)=>{const s=Z;return e(x).cursor?(t(),_("div",re,[m(s,{class:"absolute stroke-white dark:stroke-black",style:R({left:`${e(x).cursor.x}%`,top:`${e(x).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):n("v-if",!0)}}}),de=l("div",{id:"twoslash-container"},null,-1),xe=v({__name:"play",setup(f){const{next:c,prev:i,isPrintMode:s}=M(),{isDrawing:a}=Q(),r=I();function p(g){var h;V.value||g.button===0&&((h=g.target)==null?void 0:h.id)==="slide-container"&&(g.pageX/window.innerWidth>.5?c():i())}U(r),F(),K();const o=E(()=>L.value||V.value),u=k();return(g,h)=>(t(),_(z,null,[e(s)?(t(),d(q,{key:0})):n("v-if",!0),l("div",{id:"page-root",ref_key:"root",ref:r,class:C(["grid",e(W)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[m(Y,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(s)?e(T).width.value:void 0,"is-main":"",onPointerdown:p,onContextmenu:e(X)},{default:S(()=>[m(j,{"render-context":"slide"}),m(ue)]),controls:S(()=>[e(s)?n("v-if",!0):(t(),_("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"!opacity-100 right-0":"opacity-0 p-2",e(a)?"pointer-events-none":""]])},[m(J,{persist:o.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),u.value&&e(V)?(t(),d(e(u),{key:0,resize:!0})):n("v-if",!0)],2),e(s)?n("v-if",!0):(t(),d(ie,{key:1})),de],64))}});export{xe as default};
