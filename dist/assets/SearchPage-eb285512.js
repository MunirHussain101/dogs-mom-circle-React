import{r as l,u as f,a as e,F as h,j as s,I as _,B as y,S,R as n,C as t,m as x,c as w,L as D,d as p,e as N,g as b}from"./index-52e5a35d.js";import{R as A}from"./index-acb20ad8.js";var B="Enter your  zipcode | How far are you willing to travel? | Search a time period | Dog preference";const C=({userData:o,setUserData:r})=>{l.useState();const[c,g]=l.useState(""),d=f(a=>{var i;return(i=a==null?void 0:a.info)==null?void 0:i.getSearchData});return e(h,{children:s("div",{style:{display:"flex"},children:[e(_,{placeholder:B,className:"search_field",onChange:a=>{g(a.target.value)},value:c}),s(y,{type:"text",className:"search_field_btn",onClick:()=>{r(c?a=>a==null?void 0:a.filter(u=>u.zipCode==c):d),g("")},children:["Search ",e(S,{})]})]})})},j=({userData:o,setUserData:r})=>s(h,{children:[s(n,{children:[e(t,{lg:6,xs:0}),e(t,{lg:12,xs:24,children:e("h1",{className:"firstBanner_head",children:"Dog-Sitting Made Easy"})}),e(t,{lg:6,xs:1})]}),s(n,{style:{marginTop:16},children:[e(t,{lg:4,xs:1}),e(t,{lg:16,xs:22,children:e("h1",{className:"secBanner_head",children:"Browse and connect with other dog moms who need help. Each day of dog sitting earns 10 points."})}),e(t,{lg:4,xs:1})]}),s(n,{style:{marginTop:16},children:[e(t,{lg:6,xs:1}),e(t,{lg:12,xs:22,children:e(C,{userData:o,setUserData:r})}),e(t,{lg:6,xs:1})]})]});const E=({userData:o})=>{l.useState({rating:"",review:""});const[r,c]=l.useState([]),[g,d]=x.useMessage();w(),new Date().getMilliseconds();const m=localStorage.getItem("token");return l.useEffect(()=>{(async()=>{const i=await p.get("/api/posts",{headers:{Authorization:`Bearer ${m}`}});c(i.data)})()},[]),s(h,{children:[d,e(n,{justify:"space-between",className:"main_row_cards_heading",children:e("h1",{children:"All Members"})}),e(n,{justify:"space-between",className:"main_row_cards",children:r.allUsers?r.allUsers.map(a=>e(h,{children:s(t,{lg:5,xs:24,style:{margin:15},className:"main_col_searchpg",children:[e(D,{to:`/profile/${a==null?void 0:a.id}`,children:e("div",{style:{backgroundImage:`url(${a.profile_pic})`,height:"213px",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:8}})}),s(n,{justify:"space-between",style:{height:40},children:[e(t,{children:s("h1",{className:"main_row_card_f_head",children:[a==null?void 0:a.firstname," ",a==null?void 0:a.lastname]})}),e(t,{children:s(n,{style:{display:"flex",justifyContent:"space-around",columnGap:5},children:[e("img",{src:"assets/home-cards/layer1.svg",alt:"Picture of the author",className:"main_row_cards_icon"}),s("p",{className:"main_row_card_f_points",children:["--",e("span",{style:{color:"#A6A6A6",fontWeight:"lighter",marginLeft:4},children:"20 Points"})]})]})})]}),e(n,{style:{height:30},children:e(t,{children:e("p",{className:"main_row_card_s_head",children:"Richmond, CA"})})}),e("p",{style:{textAlign:"left",height:4},className:"main_row_card_dates_head",children:"Dates need help"}),s(n,{justify:"space-between",children:[e(t,{children:r.posts.map(i=>e(h,{children:e("p",{children:i.start_date})}))}),s(t,{style:{display:"flex",alignItems:"center"},children:[e(A,{style:{color:"#3E6DA8",fontSize:14},defaultValue:5})," ",e("span",{style:{color:"#3E6DA8",fontSize:14},children:"(10)"})]})]})]})})):"Not Found"})]})},R=()=>{const[o,r]=l.useState([]),c=N();return l.useEffect(()=>{(async()=>{const d=await p.get("/api/users");r(d.data),c(b(d.data))})()},[]),e(h,{children:s("div",{style:{marginTop:50,marginBottom:50},children:[e(j,{setUserData:r,userData:o}),e(E,{userData:o})]})})};export{R as default};
