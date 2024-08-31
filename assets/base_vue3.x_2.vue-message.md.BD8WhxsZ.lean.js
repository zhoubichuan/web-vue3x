import{_ as n,c as e,I as a,aR as s,D as l,o as p}from"./chunks/framework.D403qmi6.js";const v=JSON.parse('{"title":"二.Vue3.x（通信）","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":2,"meta":[{"name":"description","content":"个人总结的vuepress学习技术文档-语法"},{"name":"keywords","content":"vuepress,最新技术文档,vuepress语法,markdown语法"}]},"headers":[],"relativePath":"base/vue3.x/2.vue-message.md","filePath":"base/vue3.x/2.vue-message.md","lastUpdated":1725111311000}'),t={name:"base/vue3.x/2.vue-message.md"},h=s("",3),k=s("",2),E=s("",2),r=s("",2),d=s("",2),c=s("",2),o=s("",9);function g(u,y,m,b,F,A){const i=l("demo");return p(),e("div",null,[h,a(i,{src:"./2.vue-message/Props.vue",codeStr:"%0A%3Ctemplate%3E%0A%20%20%3CChildComponent%20%3AparentData%3D%22parentData%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%20%0A%3Cscript%20setup%20%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0Aimport%20ChildComponent%20from%20'.%2FPropsChildComponent.vue'%3B%0A%20%0Aconst%20parentData%20%3D%20ref('%E7%88%B6%E7%BB%84%E4%BB%B6%E6%95%B0%E6%8D%AE')%3B%0A%3C%2Fscript%3E",htmlStr:"undefined",description:"",codePath:"../../base/vue3.x/2.vue-message/Props.vue"}),k,a(i,{src:"./2.vue-message/Emit.vue",codeStr:"%0A%3Ctemplate%3E%0A%20%20%3CChildComponent%20%3AparentData%3D%22parentData%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%20%0A%3Cscript%20setup%20%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0Aimport%20ChildComponent%20from%20'.%2FEmitChildComponen.vue'%3B%0A%20%0Aconst%20parentData%20%3D%20ref('%E7%88%B6%E7%BB%84%E4%BB%B6%E6%95%B0%E6%8D%AE')%3B%0A%3C%2Fscript%3E",htmlStr:"undefined",description:"",codePath:"../../base/vue3.x/2.vue-message/Emit.vue"}),E,a(i,{src:"./2.vue-message/Expose.vue",codeStr:"%3Ctemplate%3E%0A%20%20%3Cchild%20ref%3D%22comp%22%3E%3C%2Fchild%3E%0A%20%20%3Cel-button%20%40click%3D%22handlerClick%22%3E%E6%8C%89%E9%92%AE%3C%2Fel-button%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20child%20from%20%22.%2FExposeChildCompone.vue%22%3B%0Aconst%20comp%20%3D%20ref(null)%3B%0Aconst%20handlerClick%20%3D%20()%20%3D%3E%20%7B%0A%20%20console.log(comp.value.childName)%3B%20%2F%2F%20%E8%8E%B7%E5%8F%96%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AF%B9%E5%A4%96%E6%9A%B4%E9%9C%B2%E7%9A%84%E5%B1%9E%E6%80%A7%0A%20%20comp.value.someMethod()%3B%20%2F%2F%20%E8%B0%83%E7%94%A8%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AF%B9%E5%A4%96%E6%9A%B4%E9%9C%B2%E7%9A%84%E6%96%B9%E6%B3%95%0A%7D%3B%0A%3C%2Fscript%3E",htmlStr:"undefined",description:"",codePath:"../../base/vue3.x/2.vue-message/Expose.vue"}),r,a(i,{src:"./2.vue-message/Attrs.vue",codeStr:"%3Ctemplate%3E%0A%20%20%3Ch4%3Ea%EF%BC%9A%7B%7B%20a%20%7D%7D%3C%2Fh4%3E%0A%20%20%3CChild%20%3Aa%3D%22a%22%20v-bind%3D%22%7Bx%3A100%2Cy%3A200%7D%22%20%3AupdateA%3D%22updateA%22%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20%3E%0Aimport%20%7Bref%7D%20from%20'vue'%0Aimport%20Child%20from%20'.%2FAttrsChildCompone.vue'%0A%0Alet%20a%20%3D%20ref(1)%0A%0Afunction%20updateA(value)%20%7B%0Aa.value%20%2B%3D%20value%0A%7D%0A%3C%2Fscript%3E",htmlStr:"undefined",description:"",codePath:"../../base/vue3.x/2.vue-message/Attrs.vue"}),d,a(i,{src:"./2.vue-message/Model.vue",codeStr:"%3Ctemplate%3E%0A%20%20%3Cchild%20ref%3D%22comp%22%3E%3C%2Fchild%3E%0A%20%20%3Cel-button%20%40click%3D%22handlerClick%22%3E%E6%8C%89%E9%92%AE%3C%2Fel-button%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20child%20from%20%22.%2FExposeChildCompone.vue%22%3B%0Aconst%20comp%20%3D%20ref(null)%3B%0Aconst%20handlerClick%20%3D%20()%20%3D%3E%20%7B%0A%20%20console.log(comp.value.childName)%3B%20%2F%2F%20%E8%8E%B7%E5%8F%96%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AF%B9%E5%A4%96%E6%9A%B4%E9%9C%B2%E7%9A%84%E5%B1%9E%E6%80%A7%0A%20%20comp.value.someMethod()%3B%20%2F%2F%20%E8%B0%83%E7%94%A8%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AF%B9%E5%A4%96%E6%9A%B4%E9%9C%B2%E7%9A%84%E6%96%B9%E6%B3%95%0A%7D%3B%0A%3C%2Fscript%3E",htmlStr:"undefined",description:"",codePath:"../../base/vue3.x/2.vue-message/Model.vue"}),c,a(i,{src:"./2.vue-message/Provide.vue",codeStr:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%7B%7B%20parentData%20%7D%7D%3C%2Fdiv%3E%0A%20%20%3CChildComponent%3E%3C%2FChildComponent%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%3E%0Aimport%20%7Bref%2C%20reactive%2C%20provide%7D%20from%20'vue'%0Aimport%20ChildComponent%20from%20'.%2FProvideChildCompone.vue'%3B%0Alet%20money%20%3D%20ref(100)%0Alet%20car%20%3D%20reactive(%7B%0A%20%20brand%3A%20'%E5%AE%9D%E9%A9%AC'%2C%0A%20%20price%3A%2010%0A%7D)%0Afunction%20updateMoney(value)%20%7B%0A%20%20money.value%20-%3D%20value%0A%7D%0A%2F%2F%20%E5%90%91%E5%90%8E%E4%BB%A3%E6%8F%90%E4%BE%9B%E6%95%B0%E6%8D%AE%0Aprovide('moneyContext'%2C%20%7Bmoney%2C%20updateMoney%7D)%0Aprovide('car'%2C%20car)%0A%3C%2Fscript%3E",htmlStr:"undefined",description:"",codePath:"../../base/vue3.x/2.vue-message/Provide.vue"}),o])}const B=n(t,[["render",g]]);export{v as __pageData,B as default};
