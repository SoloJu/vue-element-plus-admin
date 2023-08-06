import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-fa85e763.js";import{_ as t}from"./Search.vue_vue_type_script_setup_true_lang-0980fd11.js";import{d as a,u as o,r as l,q as i,e as s,F as n,a as r,o as m,i as p,w as d,M as c,k as u,f,B as g,t as b,N as h}from"./index-69408057.js";import{E as j}from"./el-button-15b7c91f.js";import{E as _}from"./el-tag-ea624222.js";import{_ as v}from"./Table.vue_vue_type_script_lang-8a0d3155.js";import{g as y,d as x}from"./index-2fac3e34.js";import{u as D}from"./useTable-6bd88242.js";import{u as w}from"./useEmitt-85a0b3d5.js";import{u as S}from"./useCrudSchemas-0c16d738.js";import"./el-card-4e55bb5e.js";import"./el-popper-c9fec1ed.js";import"./constants-0a7e98c8.js";import"./Form-3ffbd259.js";import"./el-col-a139f57d.js";import"./el-input-b7d095a0.js";import"./use-form-item-9eaef25e.js";import"./use-form-common-props-9244f2a0.js";import"./tsxHelper-8cb60c66.js";import"./debounce-e9201f72.js";import"./el-input-number-88a61b8f.js";import"./el-divider-9e019707.js";import"./InputPassword-844ad265.js";import"./style.css_vue_type_style_index_0_src_true_lang-524c8797.js";import"./aria-ecee1d93.js";import"./index-c4d709dc.js";import"./useForm-40c805c0.js";import"./useIcon-75b77a4a.js";import"./el-image-viewer-5fca2747.js";import"./el-dropdown-item-f00169f4.js";import"./refs-0c69b55e.js";import"./el-message-box-b134f776.js";import"./el-overlay-32a1ff02.js";import"./vnode-0120c115.js";import"./tree-b59d36bb.js";const P={class:"mb-10px"};function k(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!c(e)}const C=a({name:"ExamplePage"}),z=a({...C,setup(a){const{push:c}=o(),C=l([]),z=l({}),E=e=>{z.value=e,A()},{tableRegister:I,tableState:L,tableMethods:M}=D({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=L,a=await y({pageIndex:r(e),pageSize:r(t),...r(z)});return{list:a.data.list,total:a.data.total}},fetchDelApi:async()=>!!(await x(r(C)))}),{loading:R,dataList:T,total:F,currentPage:H,pageSize:Y}=L,{getList:A,getElTableExpose:$,delList:B}=M;A(),w({name:"getList",callback:e=>{"add"===e&&(H.value=1),A()}});const{t:N}=u(),O=i([{field:"selection",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{type:"selection"}},{field:"index",label:N("tableDemo.index"),type:"index",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0}},{field:"title",label:N("tableDemo.title"),search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"author",label:N("tableDemo.author"),search:{hidden:!0}},{field:"display_time",label:N("tableDemo.displayTime"),search:{hidden:!0},form:{component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{field:"importance",label:N("tableDemo.importance"),search:{hidden:!0},form:{component:"Select",componentProps:{style:{width:"100%"},options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}},detail:{slots:{default:e=>s(_,{type:1===e.importance?"success":2===e.importance?"warning":"danger"},{default:()=>[1===e.importance?N("tableDemo.important"):2===e.importance?N("tableDemo.good"):N("tableDemo.commonly")]})}}},{field:"pageviews",label:N("tableDemo.pageviews"),search:{hidden:!0},form:{component:"InputNumber",value:0}},{field:"content",label:N("exampleDemo.content"),search:{hidden:!0},table:{show:!1},form:{component:"Editor",colProps:{span:24}},detail:{span:24,slots:{default:e=>s("div",{innerHTML:e.content},null)}}},{field:"action",width:"260px",label:N("tableDemo.action"),search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{slots:{default:e=>{let t,a,o;return s(n,null,[s(j,{type:"primary",onClick:()=>W(e[0].row,"edit")},k(t=N("exampleDemo.edit"))?t:{default:()=>[t]}),s(j,{type:"success",onClick:()=>W(e[0].row,"detail")},k(a=N("exampleDemo.detail"))?a:{default:()=>[a]}),s(j,{type:"danger",onClick:()=>K(e[0].row)},k(o=N("exampleDemo.del"))?o:{default:()=>[o]})])}}}}]),{allSchemas:U}=S(O),q=()=>{c("/example/example-add")},J=l(!1),K=async e=>{const t=await $();C.value=e?[e.id]:(null==t?void 0:t.getSelectionRows().map((e=>e.id)))||[],J.value=!0,await B(r(C).length).finally((()=>{J.value=!1}))},W=(e,t)=>{c(`/example/example-${t}?id=${e.id}`)};return(a,o)=>(m(),p(r(e),null,{default:d((()=>[s(r(t),{schema:r(U).searchSchema,onSearch:E,onReset:E},null,8,["schema"]),f("div",P,[s(r(j),{type:"primary",onClick:q},{default:d((()=>[g(b(r(N)("exampleDemo.add")),1)])),_:1}),s(r(j),{loading:J.value,type:"danger",onClick:o[0]||(o[0]=e=>K(null))},{default:d((()=>[g(b(r(N)("exampleDemo.del")),1)])),_:1},8,["loading"])]),s(r(v),{pageSize:r(Y),"onUpdate:pageSize":o[1]||(o[1]=e=>h(Y)?Y.value=e:null),currentPage:r(H),"onUpdate:currentPage":o[2]||(o[2]=e=>h(H)?H.value=e:null),columns:r(U).tableColumns,data:r(T),loading:r(R),pagination:{total:r(F)},onRegister:r(I)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}))}});export{z as default};
