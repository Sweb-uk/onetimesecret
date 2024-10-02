import{d,s as r,o as n,c as l,a as e,u as s,b as i,p as u,F as c,M as a,G as p,e as b}from"./main-C3z6sMGR.js";const m=e("h3",{class:"text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100"}," Request password reset ",-1),h={class:"bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"},g=e("p",{class:"mb-4 text-gray-700 dark:text-gray-300"}," Enter your email address below, and we'll send you instructions to reset your password. ",-1),x={method:"post",id:"resetRequestForm"},y=["value"],f=a('<div class="mb-4"><label class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" for="custidField"> Email address </label><input type="email" name="u" id="custidField" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline" value="{{form_fields.custid}}" placeholder="your@email.com"></div><div class="mb-6"></div><div class="flex items-center justify-between"><button type="submit" class="bg-brand-500 hover:bg-brand-700 dark:bg-brand-600 dark:hover:bg-brand-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"> Request Reset </button></div>',3),w={class:"bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"},_=e("p",{class:"mb-4 text-gray-700 dark:text-gray-300"}," Please enter your new password below. Make sure it's at least 8 characters long and includes a mix of letters, numbers, and symbols. ",-1),k={method:"post",id:"passwordResetForm"},v=["value"],F=a('<div class="mb-4"><label class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" for="passField"> New password </label><input type="password" name="newp" id="passField" required minlength="8" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="••••••••"></div><div class="mb-6"><label class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" for="pass2Field"> Confirm password </label><input type="password" name="newp2" id="pass2Field" required minlength="8" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="••••••••"></div><div id="app"></div><div class="flex items-center justify-between"><button type="submit" class="bg-brand-500 hover:bg-brand-700 dark:bg-brand-600 dark:hover:bg-brand-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"> Update Password </button></div>',4),q={class:"text-center mt-6"},S=d({__name:"PasswordReset",props:{enabled:{type:Boolean,default:!0}},setup(R){const t=r();return(B,C)=>{const o=p("router-link");return n(),l(c,null,[m,e("div",h,[g,e("form",x,[e("input",{type:"hidden",name:"shrimp",value:s(t).shrimp},null,8,y),f])]),e("div",w,[_,e("form",k,[e("input",{type:"hidden",name:"shrimp",value:s(t).shrimp},null,8,v),F])]),e("div",q,[i(o,{to:"/signin",class:"text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"},{default:u(()=>[b(" Back to Sign-in ")]),_:1})])],64)}}});export{S as default};
