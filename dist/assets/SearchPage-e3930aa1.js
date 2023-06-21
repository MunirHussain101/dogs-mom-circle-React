import{j as r,F as d,R as a,a as e,C as n,r as c,c as j,u as k,I as C,B,S as E,L as f,d as I,s as R}from"./index-2ff07ec3.js";import{R as y}from"./index-64da1ee0.js";const $=()=>r(d,{children:[r(a,{children:[e(n,{lg:6,xs:0}),e(n,{lg:12,xs:24,children:e("h1",{className:"firstBanner_head",children:"Dog-Sitting Made Easy"})}),e(n,{lg:6,xs:1})]}),r(a,{children:[e(n,{lg:4,xs:1}),e(n,{lg:16,xs:22,children:e("h1",{className:"secBanner_head",children:"Browse and connect with other dog moms who need help. Each day of dog sitting earns 10 points."})}),e(n,{lg:4,xs:1})]})]});const z=()=>{const[h,w]=c.useState([]),[m,u]=c.useState([]),[p,x]=c.useState(""),[N,g]=c.useState(!1),[W,S]=c.useState(null),b=localStorage.getItem("token"),A=j();k(t=>{var s;return(s=t.auth.userDetails)==null?void 0:s.id}),c.useEffect(()=>{(async()=>{try{const s=await I.post("/api/getPosts",{zip_code:p},{headers:{Authorization:`Bearer ${b}`}}),i=s.data.posts.filter(o=>o.start_date),l=s.data.allUsers.filter(o=>!o.start_date);w(i),u(l),g(!1)}catch(s){S(s)}})()},[N]);const _=t=>{const s=new Date(t),i=s.toLocaleString("default",{month:"short"}),l=s.getDate(),o=s.getFullYear().toString().substr(-2);return`${i} ${l}th’${o}`},D="Enter your  zipcode | How far are you willing to travel? | Search a time period | Dog preference";async function P(t){A(R(t))}return r(d,{children:[r(a,{style:{marginTop:16},children:[e(n,{lg:6,xs:1}),e(n,{lg:12,xs:22,children:r("div",{style:{display:"flex"},children:[e(C,{placeholder:D,className:"search_field",value:p,onChange:t=>x(t.target.value)}),r(B,{type:"text",className:"search_field_btn",onClick:()=>{g(!0)},children:["Search ",e(E,{})]})]})}),e(n,{lg:6,xs:1})]}),e(a,{justify:"space-between",className:"main_row_cards_heading",children:e("h1",{children:"Looking for boarding"})}),e(a,{justify:"space-between",className:"main_row_cards",children:h?h.map(t=>{var s,i;return e(d,{children:r(n,{lg:5,xs:24,style:{margin:15},className:"main_col_searchpg",children:[e(f,{to:`/profile/${t==null?void 0:t.userId}`,onClick:()=>P(t==null?void 0:t.userId),children:e("div",{style:{backgroundImage:`url(${t.user.profile_pic})`,height:"213px",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:8}})}),r(a,{justify:"space-between",style:{height:25},children:[e(n,{children:r("h1",{className:"main_row_card_f_head",children:[t==null?void 0:t.user.firstname," ",t==null?void 0:t.user.lastname]})}),e(n,{children:r(a,{style:{display:"flex",justifyContent:"space-around",columnGap:5},children:[e("img",{src:"assets/home-cards/layer1.svg",alt:"Picture of the author",className:"main_row_cards_icon"}),r("p",{className:"main_row_card_f_points",children:["--",r("span",{style:{color:"#A6A6A6",fontWeight:"lighter",marginLeft:4},children:[(i=(s=t==null?void 0:t.user)==null?void 0:s.point)==null?void 0:i.points," Points"]})]})]})})]}),e(a,{style:{height:30},children:e(n,{children:e("p",{className:"main_row_card_s_head",children:"Richmond, CA"})})}),e("p",{style:{textAlign:"left",height:10},className:"main_row_card_dates_head",children:"Dates need help"}),r(a,{justify:"space-between",children:[r(n,{style:{display:"flex",flexDirection:"row",columnGap:7},children:[e("span",{className:"start_date",children:_(t.start_date)}),e("span",{className:"end_date",children:_(t.end_date)})]}),r(n,{children:[e(y,{style:{color:"#3E6DA8",fontSize:14},defaultValue:5})," ",e("span",{style:{color:"#3E6DA8",fontSize:14},children:"(10)"})]})]})]},t==null?void 0:t.userId)})}):"Not Found"}),e(a,{justify:"space-between",className:"main_row_cards_heading",children:e("h1",{children:"All Members"})}),e(a,{justify:"space-between",className:"main_row_cards",children:m?m.map(t=>{var s;return e(d,{children:r(n,{lg:5,xs:24,style:{margin:15},className:"main_col_searchpg",children:[e(f,{to:`/profile/${t==null?void 0:t.id}`,children:e("div",{style:{backgroundImage:`url(${t.profile_pic})`,height:"213px",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:8}})}),r(a,{justify:"space-between",style:{height:20},children:[e(n,{children:r("h1",{className:"main_row_card_f_head",children:[t==null?void 0:t.firstname," ",t==null?void 0:t.lastname]})}),e(n,{children:r(a,{style:{display:"flex",justifyContent:"space-around",columnGap:5},children:[e("img",{src:"assets/home-cards/layer1.svg",alt:"Picture of the author",className:"main_row_cards_icon"}),r("p",{className:"main_row_card_f_points",children:["--",r("span",{style:{color:"#A6A6A6",fontWeight:"lighter",marginLeft:4},children:[(s=t==null?void 0:t.point)==null?void 0:s.points," Points"]})]})]})})]}),e(a,{style:{height:30},children:e(n,{children:e("p",{className:"main_row_card_s_head",children:"Richmond, CA"})})}),e("p",{style:{textAlign:"left",height:10},className:"main_row_card_dates_head",children:"Dates need help"}),e(a,{justify:"space-between",children:r(n,{style:{display:"flex",alignItems:"center"},children:[e(y,{style:{color:"#3E6DA8",fontSize:14},defaultValue:5})," ",e("span",{style:{color:"#3E6DA8",fontSize:14},children:"(10)"})]})})]},t==null?void 0:t.id)})}):"Not Found"})]})},F=()=>e(d,{children:r("div",{style:{marginTop:50,marginBottom:50},children:[e($,{}),e(z,{})]})});export{F as default};