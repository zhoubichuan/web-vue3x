import{_ as c,o as t,c as e,F as l,E as u,t as i}from"./framework.DScHNprs.js";const _={data(){return{nav:[{name:"首页",route:"index",type:"index"},{name:"文章",route:"article",type:"article"},{name:"关于",route:"about",type:"about"}]}},methods:{goNav(n){this.$emit("count",n)}}},p=["onClick","textContent"];function m(n,d,x,f,a,r){return t(),e("ul",null,[(t(!0),e(l,null,u(a.nav,(o,s)=>(t(),e("li",{key:s,onClick:k=>r.goNav(o),textContent:i(o.name)},null,8,p))),128))])}const y=c(_,[["render",m]]);export{y as default};
