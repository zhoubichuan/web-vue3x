import{V as g}from"./vue.runtime.esm-bundler.82c7c109.js";import{_ as x,r as m,o as q,c as _,e as E,w as b,a as A,b as s,d as n}from"./app.8390b8a1.js";const k={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:c,resolveComponent:p,createVNode:a,withCtx:e,createTextVNode:t,openBlock:F,createElementBlock:i}=g,u=c("h3",{class:"login-title"},"\u6B22\u8FCE\u767B\u5F55",-1),C=c("span",null,"\u8BF7\u8F93\u5165\u8D26\u53F7\u548C\u5BC6\u7801",-1),f={slot:"footer",class:"dialog-footer"};function h(l,o){const d=p("el-input"),y=p("el-form-item"),v=p("el-button"),D=p("el-form"),B=p("el-dialog");return F(),i("div",null,[a(D,{ref:"loginForm",model:l.form,rules:l.rules,"label-width":"80px",class:"login-box"},{default:e(()=>[u,a(y,{label:"\u8D26\u53F7",prop:"username"},{default:e(()=>[a(d,{type:"text",placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7",modelValue:l.form.username,"onUpdate:modelValue":o[0]||(o[0]=r=>l.form.username=r)},null,8,["modelValue"])]),_:1}),a(y,{label:"\u5BC6\u7801",prop:"password"},{default:e(()=>[a(d,{type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",modelValue:l.form.password,"onUpdate:modelValue":o[1]||(o[1]=r=>l.form.password=r),"auto-complete":"new-password"},null,8,["modelValue"])]),_:1}),a(y,null,{default:e(()=>[a(v,{type:"primary",onClick:o[2]||(o[2]=r=>l.onSubmit("loginForm"))},{default:e(()=>[t("\u767B\u5F55")]),_:1})]),_:1})]),_:1},8,["model","rules"]),a(B,{title:"\u6E29\u99A8\u63D0\u793A",visible:l.dialogVisible,width:"30%"},{default:e(()=>[C,c("span",f,[a(v,{type:"primary",onClick:o[3]||(o[3]=r=>l.dialogVisible=!1)},{default:e(()=>[t("\u786E \u5B9A")]),_:1})])]),_:1},8,["visible"])])}return{render:h,...{name:"Login",data(){return{form:{username:"",password:""},rules:{username:[{required:!0,message:"\u8D26\u53F7\u4E0D\u53EF\u4E3A\u7A7A",trigger:"blur"}],password:[{required:!0,message:"\u5BC6\u7801\u4E0D\u53EF\u4E3A\u7A7A",trigger:"blur"}]},dialogVisible:!1}},methods:{onSubmit(l){this.$refs[l].validate(o=>{if(o)alert("\u767B\u5F55\u6210\u529F!"),location.reload();else return this.dialogVisible=!0,!1})}}}}}()}};const w=A('<h1 id="\u4E09-\u767B\u9646\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u4E09-\u767B\u9646\u8BA4\u8BC1" aria-hidden="true">#</a> \u4E09.\u767B\u9646\u8BA4\u8BC1</h1><div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u7528\u6237\u901A\u8FC7\u767B\u9646\u8BA4\u8BC1\uFF0C\u8BC6\u522B\u76F8\u5173\u7528\u6237\uFF0C\u662F\u4E00\u4E2A\u5141\u8BB8\u7528\u6237\u8BBF\u95EE\u5176\u6743\u9650\u76F8\u5E94\u7684\u8D44\u6E90\u7684\u8FC7\u7A0B</p></div><h2 id="_1-\u767B\u5F55\u6CE8\u518C\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#_1-\u767B\u5F55\u6CE8\u518C\u90E8\u5206" aria-hidden="true">#</a> 1.\u767B\u5F55\u6CE8\u518C\u90E8\u5206</h2>',3),j=s("div",{class:"language-vue"},[s("pre",{class:"shiki",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"el-form")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#0550AE"}},"ref"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"loginForm"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      :"),s("span",{style:{color:"#0550AE"}},"model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"form"),s("span",{style:{color:"#0A3069"}},'"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      :"),s("span",{style:{color:"#0550AE"}},"rules"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"rules"),s("span",{style:{color:"#0A3069"}},'"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#0550AE"}},"label-width"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"80px"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"login-box"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    >")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"h3"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"login-title"'),s("span",{style:{color:"#24292F"}},">\u6B22\u8FCE\u767B\u5F55</"),s("span",{style:{color:"#116329"}},"h3"),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"el-form-item"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"label"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"\u8D26\u53F7"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"prop"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"username"'),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        <"),s("span",{style:{color:"#116329"}},"el-input")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"text"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"\u8BF7\u8F93\u5165\u8D26\u53F7"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"form.username"),s("span",{style:{color:"#0A3069"}},'"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      </"),s("span",{style:{color:"#116329"}},"el-form-item"),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"el-form-item"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"label"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"\u5BC6\u7801"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"prop"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"password"'),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        <"),s("span",{style:{color:"#116329"}},"el-input")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"password"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"\u8BF7\u8F93\u5165\u5BC6\u7801"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"form.password"),s("span",{style:{color:"#0A3069"}},'"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0550AE"}},"auto-complete"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"new-password"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      </"),s("span",{style:{color:"#116329"}},"el-form-item"),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"el-form-item"),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        <"),s("span",{style:{color:"#116329"}},"el-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"primary"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-on"),s("span",{style:{color:"#24292F"}},":"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#8250DF"}},"onSubmit"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'loginForm'"),s("span",{style:{color:"#24292F"}},")"),s("span",{style:{color:"#0A3069"}},'"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          >\u767B\u5F55</"),s("span",{style:{color:"#116329"}},"el-button")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        >")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      </"),s("span",{style:{color:"#116329"}},"el-form-item"),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"el-form"),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"el-dialog"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"title"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"\u6E29\u99A8\u63D0\u793A"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"visible"),s("span",{style:{color:"#24292F"}},"."),s("span",{style:{color:"#0550AE"}},"sync"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"dialogVisible"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"width"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"30%"'),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">\u8BF7\u8F93\u5165\u8D26\u53F7\u548C\u5BC6\u7801</"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"slot"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"footer"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"dialog-footer"'),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        <"),s("span",{style:{color:"#116329"}},"el-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"primary"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"dialogVisible "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"false"),s("span",{style:{color:"#0A3069"}},'"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          >\u786E \u5B9A</"),s("span",{style:{color:"#116329"}},"el-button")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        >")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      </"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"el-dialog"),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  "),s("span",{style:{color:"#24292F"}},"name: "),s("span",{style:{color:"#0A3069"}},'"Login"'),s("span",{style:{color:"#953800"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  "),s("span",{style:{color:"#8250DF"}},"data"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      form: {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        username: "),s("span",{style:{color:"#0A3069"}},'""'),s("span",{style:{color:"#24292F"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        password: "),s("span",{style:{color:"#0A3069"}},'""'),s("span",{style:{color:"#24292F"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      rules: {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        username: [")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          { required: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},", message: "),s("span",{style:{color:"#0A3069"}},'"\u8D26\u53F7\u4E0D\u53EF\u4E3A\u7A7A"'),s("span",{style:{color:"#24292F"}},", trigger: "),s("span",{style:{color:"#0A3069"}},'"blur"'),s("span",{style:{color:"#24292F"}}," },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        ],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        password: [")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          { required: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},", message: "),s("span",{style:{color:"#0A3069"}},'"\u5BC6\u7801\u4E0D\u53EF\u4E3A\u7A7A"'),s("span",{style:{color:"#24292F"}},", trigger: "),s("span",{style:{color:"#0A3069"}},'"blur"'),s("span",{style:{color:"#24292F"}}," },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        ],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      dialogVisible: "),s("span",{style:{color:"#0550AE"}},"false"),s("span",{style:{color:"#24292F"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    };")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }"),s("span",{style:{color:"#953800"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  "),s("span",{style:{color:"#24292F"}},"methods: {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#8250DF"}},"onSubmit"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"formName"),s("span",{style:{color:"#24292F"}},") {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#0550AE"}},"this"),s("span",{style:{color:"#24292F"}},".$refs[formName]."),s("span",{style:{color:"#8250DF"}},"validate"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"valid"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," (valid) {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#8250DF"}},"alert"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},'"\u767B\u5F55\u6210\u529F!"'),s("span",{style:{color:"#24292F"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          location."),s("span",{style:{color:"#8250DF"}},"reload"),s("span",{style:{color:"#24292F"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        } "),s("span",{style:{color:"#CF222E"}},"else"),s("span",{style:{color:"#24292F"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#0550AE"}},"this"),s("span",{style:{color:"#24292F"}},".dialogVisible "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"false"),s("span",{style:{color:"#24292F"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      });")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }"),s("span",{style:{color:"#953800"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"}"),s("span",{style:{color:"#24292F"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".login-box"),s("span",{style:{color:"#24292F"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"border"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"solid"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"#dcdfe6"),s("span",{style:{color:"#24292F"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"width"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"350"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"margin"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"180"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"auto"),s("span",{style:{color:"#24292F"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"padding"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"35"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"35"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"15"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"35"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"border-radius"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"5"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"-webkit-border-radius"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"5"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"-moz-border-radius"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"5"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"box-shadow"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"25"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"#909399"),s("span",{style:{color:"#24292F"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".login-title"),s("span",{style:{color:"#24292F"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"text-align"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"margin"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"auto"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"40"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"auto"),s("span",{style:{color:"#24292F"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"color"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"#303133"),s("span",{style:{color:"#24292F"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),n(`
`),s("span",{class:"line"})])])],-1),V=A(`<h2 id="_2-\u6743\u9650\u8BA4\u8BC1\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#_2-\u6743\u9650\u8BA4\u8BC1\u90E8\u5206" aria-hidden="true">#</a> 2.\u6743\u9650\u8BA4\u8BC1\u90E8\u5206</h2><h2 id="_1\xB7\u4EC0\u4E48\u662F-jwt" tabindex="-1"><a class="header-anchor" href="#_1\xB7\u4EC0\u4E48\u662F-jwt" aria-hidden="true">#</a> 1\xB7\u4EC0\u4E48\u662F jwt</h2><ul><li>JSON Web Token(JWT\uFF09\u662F\u76EE\u524D\u6700\u6D41\u884C\u7684\u8EAB\u4EFD\u9A8C\u8BC1\u89E3\u51B3\u65B9\u6848</li></ul><p><strong>\u89E3\u51B3\u95EE\u9898</strong>\uFF1Asession \u4E0D\u652F\u6301\u5206\u5E03\u5F0F\u67B6\u6784\uFF0C\u65E0\u6CD5\u652F\u6301\u6A2A\u5411\u6269\u5C55\uFF0C\u53EA\u80FD\u901A\u8FC7\u6570\u636E\u5E93\u6765\u4FDD\u5B58\u4F1A\u8BDD\u6570\u636E\u5B9E\u73B0\u5171\u4EAB\u3002\u5982\u679C\u6301\u4E45\u5C42\u5931\u8D25\u4F1A\u51FA\u73B0\u8BA4\u8BC1\u5931\u8D25\u3002</p><p><strong>\u4F18\u70B9</strong>\uFF1A\u670D\u52A1\u5668\u4E0D\u4FDD\u5B58\u4EFB\u4F55\u4F1A\u8BDD\u6570\u636E\uFF0C\u5373\u670D\u52A1\u5668\u53D8\u4E3A\u65E0\u72B6\u6001\uFF0C\u4F7F\u5176\u66F4\u5BB9\u6613\u6269\u5C55\u3002</p><h3 id="jwt-\u5305\u542B\u4E86\u4E09\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#jwt-\u5305\u542B\u4E86\u4E09\u90E8\u5206" aria-hidden="true">#</a> JWT \u5305\u542B\u4E86\u4E09\u90E8\u5206</h3><ul><li><p>Header \u5934\u90E8</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">{ </span><span style="color:#0550AE;">&quot;alg&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;HS256&quot;</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">&quot;typ&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;JWT&quot;</span><span style="color:#24292F;"> }</span></span>
<span class="line"><span style="color:#6E7781;">// algorithm =&gt; HMAC SHA256</span></span>
<span class="line"><span style="color:#6E7781;">// type =&gt; JWT</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Payload \u8D1F\u8377\u3001\u8F7D\u8377</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">JWT \u89C4\u5B9A\u4E867\u4E2A\u5B98\u65B9\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#24292F;">iss (issuer)\uFF1A\u7B7E\u53D1\u4EBA</span></span>
<span class="line"><span style="color:#24292F;">exp (expiration time)\uFF1A\u8FC7\u671F\u65F6\u95F4</span></span>
<span class="line"><span style="color:#24292F;">sub (subject)\uFF1A\u4E3B\u9898</span></span>
<span class="line"><span style="color:#24292F;">aud (audience)\uFF1A\u53D7\u4F17</span></span>
<span class="line"><span style="color:#24292F;">nbf (Not Before)\uFF1A\u751F\u6548\u65F6\u95F4</span></span>
<span class="line"><span style="color:#24292F;">iat (Issued At)\uFF1A\u7B7E\u53D1\u65F6\u95F4</span></span>
<span class="line"><span style="color:#24292F;">jti (JWT ID)\uFF1A\u7F16\u53F7</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Signature \u7B7E\u540D \u5BF9\u524D\u9762\u4E24\u90E8\u5206\u7684\u7B7E\u540D\uFF0C\u9632\u6B62\u6570\u636E\u7BE1\u6539</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#8250DF;">HMACSHA256</span><span style="color:#24292F;">(</span><span style="color:#8250DF;">base64UrlEncode</span><span style="color:#24292F;">(header) </span><span style="color:#CF222E;">+</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;.&quot;</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">+</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">base64UrlEncode</span><span style="color:#24292F;">(payload), secret);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>JWT \u4F5C\u4E3A\u4E00\u4E2A\u4EE4\u724C\uFF08token\uFF09,\u6709\u4E9B\u573A\u5408\u53EF\u80FD\u4F1A\u653E\u5230 URL\uFF08\u6BD4\u5982\uFF1Aapi.example.com?token=xxx\uFF09\u3002Base64 \u6709\u4E09\u4E2A\u5B57\u7B26<code>+</code>\u3001<code>/</code>\u548C<code>=</code>\uFF0C\u5728 URL \u91CC\u9762\u6709\u7279\u6B8A\u542B\u4E49\uFF0C\u6240\u4EE5\u8981\u88AB\u66FF\u6362\u6389\uFF1A<code>=</code>\u88AB\u5FFD\u7565\u3001<code>+</code>\u66FF\u6362\u6210<code>-</code>,<code>/</code>\u66FF\u6362\u6210<code>_</code>\u3002\u8FD9\u5C31\u662F Base64URL \u7B97\u6CD5\u3002</p></li></ul><h3 id="\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u5F0F</h3><ul><li><p>HTTP \u8BF7\u6C42\u5934\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">Authorization: Bearer </span><span style="color:#CF222E;">&lt;</span><span style="color:#24292F;">token</span><span style="color:#CF222E;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u901A\u8FC7 url \u4F20\u8F93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">http://www.xxx.com/pwa</span><span style="color:#CF222E;">?</span><span style="color:#24292F;">token=xxxxx</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="_2-\u670D\u52A1\u7AEF\u8FD4\u56DE-token" tabindex="-1"><a class="header-anchor" href="#_2-\u670D\u52A1\u7AEF\u8FD4\u56DE-token" aria-hidden="true">#</a> 2.\u670D\u52A1\u7AEF\u8FD4\u56DE token</h2><details class="custom-container details"><summary>express \u5B9E\u73B0</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> express </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">require</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;express&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> app </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">express</span><span style="color:#24292F;">()</span></span>
<span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> bodyParse </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">require</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;body-parser&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> jwt </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">require</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;jsonwebtoken&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">app.</span><span style="color:#8250DF;">use</span><span style="color:#24292F;">((</span><span style="color:#953800;">req</span><span style="color:#24292F;">,</span><span style="color:#953800;">res</span><span style="color:#24292F;">,</span><span style="color:#953800;">next</span><span style="color:#24292F;">)</span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;">{</span></span>
<span class="line"><span style="color:#24292F;">  res.</span><span style="color:#8250DF;">header</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;Access-Control-Allow-Origin&#39;</span><span style="color:#24292F;">,</span><span style="color:#0A3069;">&#39;http://localhost:8080&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">  res.</span><span style="color:#8250DF;">header</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;Access-Control-Allow-Methods&#39;</span><span style="color:#24292F;">,</span><span style="color:#0A3069;">&#39;GET,HEAD,OPTIONS,POST,PUT&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">  res.</span><span style="color:#8250DF;">header</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;Access-Control-Allow-Methods&#39;</span><span style="color:#24292F;">,</span><span style="color:#0A3069;">&#39;Origin,X-Requested-With,Content-Type,Accept,Authorization&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">if</span><span style="color:#24292F;">(req.methods.</span><span style="color:#8250DF;">toLowerCase</span><span style="color:#24292F;">() </span><span style="color:#CF222E;">===</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;options&#39;</span><span style="color:#24292F;">){</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> res.</span><span style="color:#8250DF;">end</span><span style="color:#24292F;">()</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">next</span><span style="color:#24292F;">()</span></span>
<span class="line"><span style="color:#24292F;">})</span></span>
<span class="line"><span style="color:#24292F;">app.</span><span style="color:#8250DF;">use</span><span style="color:#24292F;">(bodyParse.</span><span style="color:#8250DF;">json</span><span style="color:#24292F;">())</span></span>
<span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> secret </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;zfjg&#39;</span></span>
<span class="line"><span style="color:#24292F;">app.</span><span style="color:#8250DF;">get</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;/test&#39;</span><span style="color:#24292F;">,(</span><span style="color:#953800;">req</span><span style="color:#24292F;">,</span><span style="color:#953800;">res</span><span style="color:#24292F;">)</span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;">{</span></span>
<span class="line"><span style="color:#24292F;">  res.</span><span style="color:#8250DF;">end</span><span style="color:#24292F;">({test:</span><span style="color:#0A3069;">&#39;test&#39;</span><span style="color:#24292F;">})</span></span>
<span class="line"><span style="color:#24292F;">})</span></span>
<span class="line"><span style="color:#24292F;">app.</span><span style="color:#8250DF;">post</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;/login&#39;</span><span style="color:#24292F;">,(</span><span style="color:#953800;">req</span><span style="color:#24292F;">,</span><span style="color:#953800;">res</span><span style="color:#24292F;">)</span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;">{</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">let</span><span style="color:#24292F;"> {username} </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> req.body</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">if</span><span style="color:#24292F;">(username </span><span style="color:#CF222E;">===</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;admin&#39;</span><span style="color:#24292F;">){</span></span>
<span class="line"><span style="color:#24292F;">    res.</span><span style="color:#8250DF;">json</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">      code:</span><span style="color:#0550AE;">0.</span></span>
<span class="line"><span style="color:#24292F;">      username:</span><span style="color:#0A3069;">&#39;admin&#39;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">      token:jwt.</span><span style="color:#8250DF;">sign</span><span style="color:#24292F;">({username:</span><span style="color:#0A3069;">&#39;admin&#39;</span><span style="color:#24292F;">},secret,{</span></span>
<span class="line"><span style="color:#24292F;">        expiresIn:</span><span style="color:#0550AE;">20</span></span>
<span class="line"><span style="color:#24292F;">      })</span></span>
<span class="line"><span style="color:#24292F;">    })</span></span>
<span class="line"><span style="color:#24292F;">  }</span><span style="color:#CF222E;">else</span><span style="color:#24292F;">{</span></span>
<span class="line"><span style="color:#24292F;">    res.</span><span style="color:#8250DF;">json</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">      code:</span><span style="color:#0550AE;">1</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">      data:</span><span style="color:#0A3069;">&#39;\u7528\u6237\u540D\u4E0D\u5B58\u5728&#39;</span></span>
<span class="line"><span style="color:#24292F;">    })</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">})</span></span>
<span class="line"><span style="color:#24292F;">app.</span><span style="color:#8250DF;">get</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;/validate&#39;</span><span style="color:#24292F;">,(</span><span style="color:#953800;">req</span><span style="color:#24292F;">,</span><span style="color:#953800;">res</span><span style="color:#24292F;">)</span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;">{</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">let</span><span style="color:#24292F;"> token </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> req.headers.authorization</span></span>
<span class="line"><span style="color:#24292F;">  jwt.</span><span style="color:#8250DF;">verify</span><span style="color:#24292F;">(token,secret,(</span><span style="color:#953800;">err</span><span style="color:#24292F;">,</span><span style="color:#953800;">decode</span><span style="color:#24292F;">)</span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;">{</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">if</span><span style="color:#24292F;">(err){</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> res.</span><span style="color:#8250DF;">json</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">        code:</span><span style="color:#0550AE;">1</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">        data:</span><span style="color:#0A3069;">&#39;token\u5931\u6548\u4E86&#39;</span></span>
<span class="line"><span style="color:#24292F;">      })</span></span>
<span class="line"><span style="color:#24292F;">    }</span><span style="color:#CF222E;">else</span><span style="color:#24292F;">{</span></span>
<span class="line"><span style="color:#24292F;">      res.</span><span style="color:#8250DF;">json</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">        username:decode.username,</span></span>
<span class="line"><span style="color:#24292F;">        code:</span><span style="color:#0550AE;">0</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">        token:jwt.</span><span style="color:#8250DF;">sign</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">          username:</span><span style="color:#0A3069;">&#39;admin&#39;</span></span>
<span class="line"><span style="color:#24292F;">        },secret,{</span></span>
<span class="line"><span style="color:#24292F;">          expiresIn:</span><span style="color:#0550AE;">20</span></span>
<span class="line"><span style="color:#24292F;">        })</span></span>
<span class="line"><span style="color:#24292F;">      })</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">  })</span></span>
<span class="line"><span style="color:#24292F;">})</span></span>
<span class="line"><span style="color:#24292F;">app.</span><span style="color:#8250DF;">listen</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">3000</span><span style="color:#24292F;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_3-\u8DEF\u7531\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-\u8DEF\u7531\u8BBE\u7F6E" aria-hidden="true">#</a> 3.\u8DEF\u7531\u8BBE\u7F6E</h2><ul><li>home.vue \u9996\u9875</li><li>profile.vue \u4E2A\u4EBA\u4E2D\u5FC3</li><li>login.vue \u767B\u9646\u9875\u9762</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">export</span><span style="color:#953800;"> </span><span style="color:#CF222E;">default</span><span style="color:#953800;"> </span><span style="color:#CF222E;">new</span><span style="color:#953800;"> </span><span style="color:#8250DF;">Router</span><span style="color:#953800;">({</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">mode: </span><span style="color:#0A3069;">&quot;history&quot;</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">base: p<wbr>rocess.env.</span><span style="color:#0550AE;">BASE_URL</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">routes: [</span></span>
<span class="line"><span style="color:#24292F;">    {</span></span>
<span class="line"><span style="color:#24292F;">      path: </span><span style="color:#0A3069;">&quot;/&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">      name: </span><span style="color:#0A3069;">&quot;home&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">      component: Home,</span></span>
<span class="line"><span style="color:#24292F;">    },</span></span>
<span class="line"><span style="color:#24292F;">    {</span></span>
<span class="line"><span style="color:#24292F;">      path: </span><span style="color:#0A3069;">&quot;/profile&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">      name: </span><span style="color:#0A3069;">&quot;profile&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">      component: Profile,</span></span>
<span class="line"><span style="color:#24292F;">      meta: { needLogin: </span><span style="color:#0550AE;">true</span><span style="color:#24292F;"> }, </span><span style="color:#6E7781;">// \u5FC5\u987B\u8981\u767B\u5F55\u624D\u80FD\u8BBF\u95EE</span></span>
<span class="line"><span style="color:#24292F;">    },</span></span>
<span class="line"><span style="color:#24292F;">    {</span></span>
<span class="line"><span style="color:#24292F;">      path: </span><span style="color:#0A3069;">&quot;/login&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">      name: </span><span style="color:#0A3069;">&quot;login&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">      component: Login,</span></span>
<span class="line"><span style="color:#24292F;">    },</span></span>
<span class="line"><span style="color:#24292F;">  ]</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">})</span><span style="color:#24292F;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-axios-\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#_4-axios-\u5C01\u88C5" aria-hidden="true">#</a> 4.axios \u5C01\u88C5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> axios </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;axios&quot;</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#CF222E;">class</span><span style="color:#24292F;"> </span><span style="color:#953800;">FetchData</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">constructor</span><span style="color:#24292F;">() {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.baseURL </span><span style="color:#CF222E;">=</span></span>
<span class="line"><span style="color:#24292F;">      p<wbr>rocess.env.</span><span style="color:#0550AE;">NODE_ENV</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">===</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;development&quot;</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">?</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;http://localhost:3000&quot;</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;/&quot;</span><span style="color:#24292F;">; </span><span style="color:#6E7781;">// \u8BF7\u6C42\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.timeout </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">3000</span><span style="color:#24292F;">; </span><span style="color:#6E7781;">// \u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">setInterceptor</span><span style="color:#24292F;">(</span><span style="color:#953800;">instance</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">// \u8BBE\u7F6E\u62E6\u622A\u5668</span></span>
<span class="line"><span style="color:#24292F;">    instance.interceptors.request.</span><span style="color:#8250DF;">use</span><span style="color:#24292F;">(</span></span>
<span class="line"><span style="color:#24292F;">      (</span><span style="color:#953800;">config</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">        config.headers.Authorization </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">\`\${</span><span style="color:#24292F;">localStorage</span><span style="color:#0A3069;">.</span><span style="color:#8250DF;">getItem</span><span style="color:#0A3069;">(</span><span style="color:#0A3069;">&quot;token&quot;</span><span style="color:#0A3069;">)</span><span style="color:#0A3069;">}\`</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> config; </span><span style="color:#6E7781;">// \u589E\u52A0token</span></span>
<span class="line"><span style="color:#24292F;">      },</span></span>
<span class="line"><span style="color:#24292F;">      (</span><span style="color:#953800;">err</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#0550AE;">Promise</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">reject</span><span style="color:#24292F;">(err);</span></span>
<span class="line"><span style="color:#24292F;">      }</span></span>
<span class="line"><span style="color:#24292F;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">    instance.interceptors.response.</span><span style="color:#8250DF;">use</span><span style="color:#24292F;">(</span></span>
<span class="line"><span style="color:#24292F;">      (</span><span style="color:#953800;">res</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> res.data,</span></span>
<span class="line"><span style="color:#24292F;">      (</span><span style="color:#953800;">err</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#0550AE;">Promise</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">reject</span><span style="color:#24292F;">(err);</span></span>
<span class="line"><span style="color:#24292F;">      }</span></span>
<span class="line"><span style="color:#24292F;">    );</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">request</span><span style="color:#24292F;">(</span><span style="color:#953800;">request</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">instance</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> axios.</span><span style="color:#8250DF;">create</span><span style="color:#24292F;">();</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">config</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">      baseURL: </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.baseURL,</span></span>
<span class="line"><span style="color:#24292F;">      timeout: </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.timeout,</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#CF222E;">...</span><span style="color:#24292F;">request,</span></span>
<span class="line"><span style="color:#24292F;">    }; </span><span style="color:#6E7781;">// \u5408\u5E76\u914D\u7F6E</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">setInterceptor</span><span style="color:#24292F;">(instance);</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">instance</span><span style="color:#24292F;">(config);</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">export</span><span style="color:#953800;"> </span><span style="color:#CF222E;">default</span><span style="color:#953800;"> </span><span style="color:#CF222E;">new</span><span style="color:#953800;"> </span><span style="color:#8250DF;">FetchData</span><span style="color:#953800;">()</span><span style="color:#24292F;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u6D4B\u8BD5\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_5-\u6D4B\u8BD5\u63A5\u53E3" aria-hidden="true">#</a> 5.\u6D4B\u8BD5\u63A5\u53E3</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">export</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">getTest</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> () </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> fetchData.</span><span style="color:#8250DF;">request</span><span style="color:#24292F;">({ url: </span><span style="color:#0A3069;">&quot;/test&quot;</span><span style="color:#24292F;"> });</span></span>
<span class="line"><span style="color:#CF222E;">export</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">login</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> (</span><span style="color:#953800;">username</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span></span>
<span class="line"><span style="color:#24292F;">  fetchData.</span><span style="color:#8250DF;">request</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">    url: </span><span style="color:#0A3069;">&quot;/login&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    method: </span><span style="color:#0A3069;">&quot;POST&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    data: {</span></span>
<span class="line"><span style="color:#24292F;">      username,</span></span>
<span class="line"><span style="color:#24292F;">    },</span></span>
<span class="line"><span style="color:#24292F;">  });</span></span>
<span class="line"><span style="color:#CF222E;">export</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">validate</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> () </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> fetchData.</span><span style="color:#8250DF;">request</span><span style="color:#24292F;">({ url: </span><span style="color:#0A3069;">&quot;/validate&quot;</span><span style="color:#24292F;"> });</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u5728-vuex-\u4E2D\u53D1\u9001\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_6-\u5728-vuex-\u4E2D\u53D1\u9001\u8BF7\u6C42" aria-hidden="true">#</a> 6.\u5728 vuex \u4E2D\u53D1\u9001\u8BF7\u6C42</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">export</span><span style="color:#953800;"> </span><span style="color:#CF222E;">default</span><span style="color:#953800;"> </span><span style="color:#CF222E;">new</span><span style="color:#953800;"> </span><span style="color:#24292F;">Vuex</span><span style="color:#953800;">.</span><span style="color:#8250DF;">Store</span><span style="color:#953800;">({</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">state: {</span></span>
<span class="line"><span style="color:#24292F;">    username: </span><span style="color:#0A3069;">&quot;&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">  }</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">mutations: {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">setUsername</span><span style="color:#24292F;">(</span><span style="color:#953800;">state</span><span style="color:#24292F;">, </span><span style="color:#953800;">username</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">      state.username </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> username;</span></span>
<span class="line"><span style="color:#24292F;">    },</span></span>
<span class="line"><span style="color:#24292F;">  }</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">actions: {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">async</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">login</span><span style="color:#24292F;">({ </span><span style="color:#953800;">commit</span><span style="color:#24292F;"> }, </span><span style="color:#953800;">username</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">r</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">await</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">login</span><span style="color:#24292F;">(username); </span><span style="color:#6E7781;">// \u767B\u5F55\u6210\u529F\u540E\u8FD4\u56DE\u7528\u6237\u540D\u4FE1\u606F</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#CF222E;">if</span><span style="color:#24292F;"> (r.token) {</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;">// \u5982\u679C\u6709\u8FD4\u56DEtoken\u8BF4\u660E\u6210\u529F</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#8250DF;">commit</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;setUsername&quot;</span><span style="color:#24292F;">, username); </span><span style="color:#6E7781;">// \u5C06\u7528\u6237\u5B58\u5165state\u4E2D</span></span>
<span class="line"><span style="color:#24292F;">        localStorage.</span><span style="color:#8250DF;">setItem</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;token&quot;</span><span style="color:#24292F;">, r.token); </span><span style="color:#6E7781;">// \u5C06token\u5B58\u653E\u8D77\u6765</span></span>
<span class="line"><span style="color:#24292F;">      } </span><span style="color:#CF222E;">else</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;">// \u5426\u5219\u8FD4\u56DE\u5931\u8D25\u7684promise</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Promise</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">reject</span><span style="color:#24292F;">(r);</span></span>
<span class="line"><span style="color:#24292F;">      }</span></span>
<span class="line"><span style="color:#24292F;">    },</span></span>
<span class="line"><span style="color:#24292F;">  }</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">})</span><span style="color:#24292F;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-\u6743\u9650\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#_7-\u6743\u9650\u8BA4\u8BC1" aria-hidden="true">#</a> 7.\u6743\u9650\u8BA4\u8BC1</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">async </span><span style="color:#8250DF;">validate</span><span style="color:#24292F;">({ commit }) {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">r</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">await</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">validate</span><span style="color:#24292F;">();</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">if</span><span style="color:#24292F;"> (r.code </span><span style="color:#CF222E;">===</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">1</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">false</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">commit</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;setUsername&#39;</span><span style="color:#24292F;">, r.username);</span></span>
<span class="line"><span style="color:#24292F;">    localStorage.</span><span style="color:#8250DF;">setItem</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;token&#39;</span><span style="color:#24292F;">, r.token); </span><span style="color:#6E7781;">// \u5C06token\u5B58\u653E\u8D77\u6765</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">true</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5224\u65AD\u7528\u6237\u8BBF\u95EE\u6743\u9650</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">router.</span><span style="color:#8250DF;">beforeEach</span><span style="color:#24292F;">(</span><span style="color:#CF222E;">async</span><span style="color:#24292F;"> (</span><span style="color:#953800;">to</span><span style="color:#24292F;">, </span><span style="color:#953800;">from</span><span style="color:#24292F;">, </span><span style="color:#953800;">next</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#6E7781;">// \u5982\u679C\u4E0D\u9700\u8981\u6821\u9A8C\u53EF\u4EE5\u8BBE\u7F6E\u767D\u540D\u5355</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">isLogin</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">await</span><span style="color:#24292F;"> store.</span><span style="color:#8250DF;">dispatch</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;validate&quot;</span><span style="color:#24292F;">);</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">if</span><span style="color:#24292F;"> (isLogin) {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">// \u5982\u679C\u662F\u767B\u5F55</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">if</span><span style="color:#24292F;"> (to.name </span><span style="color:#CF222E;">===</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;login&quot;</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#8250DF;">next</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;/profile&quot;</span><span style="color:#24292F;">);</span></span>
<span class="line"><span style="color:#24292F;">    } </span><span style="color:#CF222E;">else</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#8250DF;">next</span><span style="color:#24292F;">();</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">  } </span><span style="color:#CF222E;">else</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">flag</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> to.matched.</span><span style="color:#8250DF;">some</span><span style="color:#24292F;">((</span><span style="color:#953800;">item</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> item.meta.needLogin);</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">if</span><span style="color:#24292F;"> (flag) {</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#8250DF;">next</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;/login&quot;</span><span style="color:#24292F;">);</span></span>
<span class="line"><span style="color:#24292F;">    } </span><span style="color:#CF222E;">else</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#8250DF;">next</span><span style="color:#24292F;">();</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function S(c,p,a,e,t,F){const i=m("render-demo-0"),u=m("demo");return q(),_("div",null,[w,E(u,{customClass:"demoblock-custom",sourceCode:`<template>
  <div>
    <el-form
      ref="loginForm"
      :model="form"
      :rules="rules"
      label-width="80px"
      class="login-box"
    >
      <h3 class="login-title">\u6B22\u8FCE\u767B\u5F55</h3>
      <el-form-item label="\u8D26\u53F7" prop="username">
        <el-input
          type="text"
          placeholder="\u8BF7\u8F93\u5165\u8D26\u53F7"
          v-model="form.username"
        />
      </el-form-item>
      <el-form-item label="\u5BC6\u7801" prop="password">
        <el-input
          type="password"
          placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"
          v-model="form.password"
          auto-complete="new-password"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('loginForm')"
          >\u767B\u5F55</el-button
        >
      </el-form-item>
    </el-form>

    <el-dialog title="\u6E29\u99A8\u63D0\u793A" :visible.sync="dialogVisible" width="30%">
      <span>\u8BF7\u8F93\u5165\u8D26\u53F7\u548C\u5BC6\u7801</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >\u786E \u5B9A</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "\u8D26\u53F7\u4E0D\u53EF\u4E3A\u7A7A", trigger: "blur" },
        ],
        password: [
          { required: true, message: "\u5BC6\u7801\u4E0D\u53EF\u4E3A\u7A7A", trigger: "blur" },
        ],
      },
      dialogVisible: false,
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("\u767B\u5F55\u6210\u529F!");
          location.reload();
        } else {
          this.dialogVisible = true;
          return false;
        }
      });
    },
  },
};
<\/script>

<style>
.login-box {
  border: 1px solid #dcdfe6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>
`},{highlight:b(()=>[j]),default:b(()=>[E(i)]),_:1}),V])}const U=x(k,[["render",S],["__file","3.login.html.vue"]]);export{U as default};
