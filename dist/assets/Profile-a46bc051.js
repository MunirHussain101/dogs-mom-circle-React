import{r as h,h as P,u as v,j as s,F as m,R as n,a as e,C as l,A as b,B as w,e as A}from"./index-f2d9475d.js";import{R as x}from"./index-a9c59cf5.js";const u=[{petsName:"Emily",petsPoint:"20",petsPara:"Richmond, CA",datePara:"Dates need help",date:"Apr 7th’23 - Apr 8th’23",rating:"",img:"assets/home-cards/new20.svg",ratingNo:"(2)"},{petsName:"Nevena",petsPoint:"20",petsPara:"Walnut Creek, CA",datePara:"Dates need help",date:"Apr 9th’23",rating:"",img:"assets/home-cards/new13.svg",ratingNo:"(5)"},{petsName:"Hannah",petsPoint:"",petsPara:"San Francisco, CA",datePara:"Dates need help",date:"Apr 10th'23",rating:"",img:"assets/home-cards/new12.svg",ratingNo:"(--)"},{petsName:"Oceane",petsPoint:"20",petsPara:"San Francisco, CA",datePara:"Dates need help",date:"Apr 10th’23 - Apr 11th’23",rating:"--",img:"assets/home-cards/new21.svg",ratingNo:"(10)"},{petsName:"Kristin",petsPoint:"20",petsPara:"Piedmont, CA",datePara:"Dates need help",date:"Apr 10th’23 - Apr 11th’23",rating:"",img:"assets/home-cards/new22.svg",ratingNo:"(8)"},{petsName:"Cairn",petsPoint:"20",petsPara:"Berkeley, CA",datePara:"Dates need help",date:"Apr 12th’23",rating:"",img:"assets/home-cards/new23.svg",ratingNo:"(2)"},{petsName:"Sarah",petsPoint:"",petsPara:"Concord, CA",datePara:"Dates need help",date:"Apr 12th’23 - Apr 13th’23",rating:"",img:"assets/home-cards/new24.svg",ratingNo:"(--)"},{petsName:"LG",petsPoint:"20",petsPara:"Piedmont, CA",datePara:"Dates need help",date:"Apr 15th’23",rating:"--",img:"assets/home-cards/new25.svg",ratingNo:"(12)"}],r={pets:u};function S(){var o;const[a,p]=h.useState(),{id:g}=P(),f=localStorage.getItem("token"),c=v(t=>t.posts.postDetails);console.log("Post",c),h.useEffect(()=>{(async()=>{const i=await A.post("/api/user/get-profile",{id:g,token:f});p(i==null?void 0:i.data)})()},[]);const d=t=>{const i=new Date(t),_=i.toLocaleString("default",{month:"short"}),N=i.getDate(),y=i.getFullYear().toString().substr(-2);return`${_} ${N}th’${y}`};return s(m,{children:[s(n,{className:"main_row_user_profile",style:{marginTop:80},children:[e(l,{lg:4}),e(l,{lg:8,children:s(n,{className:"main_subrow_user_profile",style:{display:"flex",gap:20},children:[e(l,{children:e(b,{style:{width:100,height:100},src:a==null?void 0:a.profile_pic})}),s(l,{children:[s(n,{style:{display:"flex",gap:20},children:[s("h1",{className:"userName",children:[a==null?void 0:a.firstname," ",a==null?void 0:a.lastname]}),e("img",{src:"/assets/profile/verify-user.svg",width:18,height:22,alt:"profile-image",className:"verify_img"})]}),s("div",{style:{display:"flex",flexDirection:"column"},children:[e("p",{className:"place_name",children:"Richmond, CA"}),s("p",{className:"user_para",children:["User -"," ",e("span",{className:"user_para2",children:e("b",{children:"Franny"})})]})]}),s("div",{className:"card",children:[e("p",{className:"card_msg",children:r.pets[0].datePara}),e("p",{className:"card_date",children:c.map(t=>s(m,{children:[e("span",{className:"start_date",children:d(t.start_date)}),e("span",{className:"end_date",children:d(t.end_date)})]}))})]}),e("br",{}),e("div",{children:e(w,{className:"chat_btn",children:e("span",{className:"btn_msg",children:"Chat Now"})})})]})]})}),e(l,{lg:8,children:s(n,{style:{marginTop:7,display:"flex",justifyContent:"flex-end",gap:40},children:[s(l,{style:{display:"flex",flexDirection:"row",alignItems:"center",columnGap:10},children:[e("img",{src:"/assets/home-cards/layer1.svg",alt:"Picture of the author",className:"main_row_cards_icon_profile"}),s("p",{className:"main_row_card_f_points_profile",children:[r.pets[0].petsPoint," ",e("span",{style:{color:"#A6A6A6",fontWeight:"lighter"},children:"Points"})]})]}),s(l,{style:{display:"flex",flexDirection:"row",alignItems:"center",columnGap:10},children:[e(x,{className:"rating",style:{color:"#3E6DA8",fontSize:15},defaultValue:5}),e("span",{style:{color:"#3E6DA8",fontSize:15},children:r.pets[0].ratingNo})]})]})}),e(l,{lg:4})]}),e("br",{}),s(n,{children:[e(l,{lg:4}),e(l,{lg:16,className:"line_col"}),e(l,{lg:4})]}),s(n,{className:"image_gallery_row",children:[e(l,{lg:4}),s(l,{lg:16,children:[s("h1",{className:"gallery_head",children:[a==null?void 0:a.firstname," ",a==null?void 0:a.lastname," ",e("span",{className:"gallery_name",children:"Gallery"})]}),e("img",{src:(o=a==null?void 0:a.dogs[0])==null?void 0:o.profile_pic})]}),e(l,{lg:4})]}),e("br",{}),s(n,{children:[e(l,{lg:4}),s(l,{lg:16,children:[s("h1",{className:"gallery_head",children:[a==null?void 0:a.firstname," ",a==null?void 0:a.lastname," ",e("span",{className:"gallery_name",children:"Profile"})]}),e("br",{}),s("div",{className:"flex_container",children:[e("h1",{}),e("div",{className:"profile_box",children:a==null?void 0:a.have_a_cat}),e("div",{className:"profile_box",children:"1 Dog"})]})]}),e(l,{lg:4})]}),s(n,{children:[e(l,{lg:4}),s(l,{lg:16,children:[s("h1",{className:"furBaby_head",children:["Franny's ",e("span",{className:"furBaby_name",children:"Profile"})]}),e("br",{}),s("div",{className:"flex_container",children:[e("div",{className:"furBaby_box",children:a==null?void 0:a.shedding_prefs}),e("div",{className:"furBaby_box",children:a==null?void 0:a.house_training_prefs}),e("div",{className:"furBaby_box",children:a==null?void 0:a.dog_left_alone_prefs}),e("div",{className:"furBaby_box",children:"Get along with cats"})]})]}),e(l,{lg:4})]}),s(n,{children:[e(l,{lg:4}),s(l,{lg:16,children:[s("h1",{className:"furBaby_head",children:[a==null?void 0:a.firstname," ",a==null?void 0:a.lastname," can"," ",e("span",{className:"furBaby_name",children:"Host"})]}),e("br",{}),e("div",{className:"flex_container",children:s("div",{className:"furBaby_box",style:{fontSize:14},children:["0-50lbs",e("b",{children:"Dog"})]})})]}),e(l,{lg:4})]}),s(n,{children:[e(l,{lg:4}),s(l,{lg:16,children:[s("div",{children:[e("h1",{className:"additional_Info",children:"Additional Information"}),e("ul",{className:"styles.info_list",children:e("li",{children:a==null?void 0:a.additional_notes})})]}),e("br",{})]}),e(l,{lg:4})]}),e("br",{}),e("br",{}),s(n,{children:[e(l,{lg:4}),s(l,{lg:16,children:[e("h1",{className:"additional_Info",children:"Reviews"}),s(n,{children:[e(l,{children:e("img",{src:"/assets/profile/IMAGE.svg",width:50,height:50,alt:"foot",className:"pets_foot"})}),s(l,{children:[e("p",{className:"review_para",children:"Anna"}),e("span",{className:"review_para2",children:"Mar 27, 2023"})]})]}),e("br",{}),s("p",{className:"review_last_para",children:[a==null?void 0:a.firstname," ",a==null?void 0:a.lastname," has helped me out for some last minute extended trips several times now. She is always super helpful and accommodating with my messy schedule and my little guy seems totally happy when I pick him up. Recommend 100%."]})]}),e(l,{lg:4})]})]})}export{S as default};
