import{r as o,u as p,a as e,F as l,j as t,I as u,B as f,S as _,R as c,C as r,L as y,c as S,d as x,g as D}from"./index-d27897fd.js";import{R as w}from"./index-26c2ea79.js";var N="Enter your  zipcode | How far are you willing to travel? | Search a time period | Dog preference";const C=({userData:n,setUserData:a})=>{o.useState();const[i,h]=o.useState(""),d=p(s=>{var g;return(g=s==null?void 0:s.info)==null?void 0:g.getSearchData});return e(l,{children:t("div",{style:{display:"flex"},children:[e(u,{placeholder:N,className:"search_field",onChange:s=>{h(s.target.value)},value:i}),t(f,{type:"text",className:"search_field_btn",onClick:()=>{a(i?s=>s==null?void 0:s.filter(m=>m.zipCode==i):d),h("")},children:["Search ",e(_,{})]})]})})},b=({userData:n,setUserData:a})=>t(l,{children:[t(c,{children:[e(r,{lg:6,xs:0}),e(r,{lg:12,xs:24,children:e("h1",{className:"firstBanner_head",children:"Dog-Sitting Made Easy"})}),e(r,{lg:6,xs:1})]}),t(c,{style:{marginTop:16},children:[e(r,{lg:4,xs:1}),e(r,{lg:16,xs:22,children:e("h1",{className:"secBanner_head",children:"Browse and connect with other dog moms who need help. Each day of dog sitting earns 10 points."})}),e(r,{lg:4,xs:1})]}),t(c,{style:{marginTop:16},children:[e(r,{lg:6,xs:1}),e(r,{lg:12,xs:22,children:e(C,{userData:n,setUserData:a})}),e(r,{lg:6,xs:1})]})]});const A=({userData:n})=>e(l,{children:e(c,{justify:"space-between",className:"main_row_cards",children:n?n.map(a=>e(l,{children:t(r,{lg:5,xs:24,style:{margin:15},className:"main_col_searchpg",children:[e(y,{to:`/profile/${a==null?void 0:a.id}`,children:e("div",{style:{backgroundImage:`url(${a.profile_pic})`,height:"213px",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:8}})}),t(c,{justify:"space-between",style:{height:40},children:[e(r,{children:t("h1",{className:"main_row_card_f_head",children:[a.firstname," ",a.lastname]})}),e(r,{children:t(c,{style:{display:"flex",justifyContent:"space-around",columnGap:5},children:[e("img",{src:"assets/home-cards/layer1.svg",alt:"Picture of the author",className:"main_row_cards_icon"}),t("p",{className:"main_row_card_f_points",children:["--",e("span",{style:{color:"#A6A6A6",fontWeight:"lighter",marginLeft:4},children:"20 Points"})]})]})})]}),e(c,{style:{height:30},children:e(r,{children:e("p",{className:"main_row_card_s_head",children:"Richmond, CA"})})}),e("p",{style:{textAlign:"left",height:4},className:"main_row_card_dates_head",children:"Dates need help"}),t(c,{justify:"space-between",children:[e(r,{children:e("h1",{className:"main_row_card_dates_val",children:new Date(a.createdAt).toLocaleString().split(",")[0]})}),t(r,{style:{display:"flex",alignItems:"center"},children:[e(w,{style:{color:"#3E6DA8",fontSize:14},defaultValue:5})," ",e("span",{style:{color:"#3E6DA8",fontSize:14},children:"10"})]})]})]})})):"Not Found"})}),R=()=>{const[n,a]=o.useState([]),i=S();return o.useEffect(()=>{(async()=>{const d=await x.get("/api/users");a(d.data),i(D(d.data))})()},[]),e(l,{children:t("div",{style:{marginTop:50,marginBottom:50},children:[e(b,{setUserData:a,userData:n}),e(A,{userData:n})]})})};export{R as default};
