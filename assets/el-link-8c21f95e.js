import{ae as e,bj as s,d as a,ak as n,x as i,o as l,c as t,i as o,w as d,a1 as r,a as c,K as f,R as u,n as p,ao as k,ap as m,az as y}from"./index-69408057.js";const b=e({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:s}}),v={click:e=>e instanceof MouseEvent},h=["href"],g=a({name:"ElLink"});const $=y(m(a({...g,props:b,emits:v,setup(e,{emit:s}){const a=e,m=n("link"),y=i((()=>[m.b(),m.m(a.type),m.is("disabled",a.disabled),m.is("underline",a.underline&&!a.disabled)]));function b(e){a.disabled||s("click",e)}return(e,s)=>(l(),t("a",{class:p(c(y)),href:e.disabled||!e.href?void 0:e.href,onClick:b},[e.icon?(l(),o(c(f),{key:0},{default:d((()=>[(l(),o(r(e.icon)))])),_:1})):u("v-if",!0),e.$slots.default?(l(),t("span",{key:1,class:p(c(m).e("inner"))},[k(e.$slots,"default")],2)):u("v-if",!0),e.$slots.icon?k(e.$slots,"icon",{key:2}):u("v-if",!0)],10,h))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]));export{$ as E};
