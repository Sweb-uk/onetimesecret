import{d as z,i as o,c as d,k as F,n as l,u as M,b as t,t as e,h as E,o as n,I as O}from"./main-BSXUZJnf.js";const W={key:1,class:"bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 my-8"},j=t("h2",{class:"text-2xl font-bold mb-4 text-gray-900 dark:text-white"},"Domain Status",-1),q={class:"flex flex-col"},G={key:0,class:"grid grid-cols-1 sm:grid-cols-2 gap-4"},H={class:"flex flex-col"},J=t("span",{class:"text-sm font-medium text-gray-500 dark:text-gray-400"},"Domain",-1),K={class:"text-lg text-gray-900 dark:text-white"},P={class:"flex flex-col"},Q=t("span",{class:"text-sm font-medium text-gray-500 dark:text-gray-400"},"Status",-1),U={class:"flex flex-col"},X=t("span",{class:"text-sm font-medium text-gray-500 dark:text-gray-400"},"Target Address",-1),Y={class:"text-lg text-gray-900 dark:text-white"},Z={class:"flex flex-col"},$=t("span",{class:"text-sm font-medium text-gray-500 dark:text-gray-400"},"A Record",-1),tt={class:"text-lg text-gray-900 dark:text-white"},st={class:"flex flex-col"},et=t("span",{class:"text-sm font-medium text-gray-500 dark:text-gray-400"},"SSL Renews",-1),at={class:"text-lg text-gray-900 dark:text-white"},ot={key:0},nt={class:"flex flex-col"},it=t("span",{class:"text-sm font-medium text-gray-500 dark:text-gray-400"},"SSL Status",-1),rt={class:"flex flex-col"},dt=t("span",{class:"text-sm font-medium text-gray-500 dark:text-gray-400"},"Last Monitored",-1),lt={class:"text-lg text-gray-900 dark:text-white"},mt=z({__name:"DomainVerificationInfo",props:{domain:{},mode:{}},setup(N){const c=N,i=o(()=>{var s,a;return(a=(s=c.domain.vhost)==null?void 0:s.status)==null?void 0:a.includes("ACTIVE")}),r=o(()=>{var s;return((s=c.domain.vhost)==null?void 0:s.status)==="DNS_INCORRECT"}),R=o(()=>!i.value&&!r.value),T=o(()=>i.value?"mdi:check-circle":r.value?"mdi:alert-circle":"mdi:close-circle"),V=o(()=>i.value?"text-green-600":r.value?"text-yellow-600":"text-red-600"),L=s=>{const a=new Date(s);return new Intl.DateTimeFormat(void 0,{year:"numeric",month:"long",day:"numeric"}).format(a)};return(s,a)=>{var m,_,x,h,u,g,v,f,y,p,k,w,S,D,I,C,b,A,B;return n(),d("div",null,[s.mode==="icon"?(n(),F(M(O),{key:0,icon:T.value,class:l(["w-5 h-5",{"text-green-600":i.value,"text-yellow-600":r.value,"text-red-600":R.value}])},null,8,["icon","class"])):(n(),d("div",W,[j,t("div",q,[(m=s.domain)!=null&&m.vhost?(n(),d("div",G,[t("div",H,[J,t("span",K,e((x=(_=s.domain)==null?void 0:_.vhost)==null?void 0:x.incoming_address),1)]),t("div",P,[Q,t("span",{class:l([V.value,"text-lg"])},e((u=(h=s.domain)==null?void 0:h.vhost)==null?void 0:u.status_message),3)]),t("div",U,[X,t("span",Y,e((v=(g=s.domain)==null?void 0:g.vhost)==null?void 0:v.target_address),1)]),t("div",Z,[$,t("span",tt,e((y=(f=s.domain)==null?void 0:f.vhost)==null?void 0:y.dns_pointed_at),1)]),t("div",st,[et,t("span",at,[(k=(p=s.domain)==null?void 0:p.vhost)!=null&&k.ssl_active_until?(n(),d("span",ot,e(L((S=(w=s.domain)==null?void 0:w.vhost)==null?void 0:S.ssl_active_until)),1)):E("",!0)])]),t("div",nt,[it,t("span",{class:l(["text-lg",(I=(D=s.domain)==null?void 0:D.vhost)!=null&&I.has_ssl?"text-green-600":"text-red-600"])},e((b=(C=s.domain)==null?void 0:C.vhost)!=null&&b.has_ssl?"Active":"Inactive"),3)]),t("div",rt,[dt,t("span",lt,e((B=(A=s.domain)==null?void 0:A.vhost)==null?void 0:B.last_monitored_humanized),1)])])):E("",!0)])]))])}}});export{mt as _};
