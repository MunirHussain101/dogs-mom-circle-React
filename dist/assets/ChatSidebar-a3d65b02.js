import{r,b7 as D,b8 as N,a as t,F as v,R as I,C as y,j as u,b as M,B as F,D as $,E as z,G as B,H as _,b9 as S,ba as E,bb as H,M as p,N as m,bc as L,bd as A,be as Z,bf as q,J as G,bg as J,bh as V,bi as K,bj as P,A as W,bk as Y}from"./index-4922176f.js";import{I as j}from"./index-cb81a0a9.js";let U;const O=new Uint8Array(16);function Q(){if(!U&&(U=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!U))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return U(O)}const d=[];for(let e=0;e<256;++e)d.push((e+256).toString(16).slice(1));function X(e,s=0){return(d[e[s+0]]+d[e[s+1]]+d[e[s+2]]+d[e[s+3]]+"-"+d[e[s+4]]+d[e[s+5]]+"-"+d[e[s+6]]+d[e[s+7]]+"-"+d[e[s+8]]+d[e[s+9]]+"-"+d[e[s+10]]+d[e[s+11]]+d[e[s+12]]+d[e[s+13]]+d[e[s+14]]+d[e[s+15]]).toLowerCase()}const ee=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),T={randomUUID:ee};function R(e,s,a){if(T.randomUUID&&!s&&!e)return T.randomUUID();e=e||{};const c=e.random||(e.rng||Q)();if(c[6]=c[6]&15|64,c[8]=c[8]&63|128,s){a=a||0;for(let o=0;o<16;++o)s[a+o]=c[o];return s}return X(c)}const te=()=>{const[e,s]=r.useState(""),[a,c]=r.useState(null),{currentUser:o}=r.useContext(D),{data:i}=r.useContext(N),l=async()=>{if(a){const h=$(z,R()),x=B(h,a);x.on(b=>{},()=>{_(x.snapshot.ref).then(async b=>{await S(p(m,"chats",i.chatId),{messages:E({id:R(),text:e,senderId:o.uid,date:H.now(),img:b})})})})}else await S(p(m,"chats",i.chatId),{messages:E({id:R(),text:e,senderId:o.uid,date:H.now()})});await S(p(m,"userChats",o.uid),{[i.chatId+".lastMessage"]:{text:e},[i.chatId+".date"]:L()}),await S(p(m,"userChats",i.user.uid),{[i.chatId+".lastMessage"]:{text:e},[i.chatId+".date"]:L()}),s(""),c(null)};return t(v,{children:t(I,{children:t(y,{lg:24,children:u("div",{className:"input",children:[t(j,{placeholder:"Enter Type here",style:{width:500,marginLeft:10,backgroundColor:"#F8F8F8",borderRadius:12},onChange:h=>s(h.target.value),value:e}),u("div",{className:"send",children:[t(j,{type:"file",style:{display:"none"},id:"file",onChange:h=>c(h.target.files[0])}),t("label",{htmlFor:"file",children:t(M.LazyLoadImage,{src:"assets/chat-img/img.png",alt:""})}),t(F,{onClick:l,style:{background:"#EAB2BB",color:"white"},children:"Send"})]})]})})})})};const se=({message:e})=>{const{currentUser:s}=r.useContext(D);r.useContext(N),r.useState(!1);const a=r.useRef();r.useEffect(()=>{var o;(o=a.current)==null||o.scrollIntoView({behavior:"smooth"})},[e]);function c(o){const i=new Date(o.seconds*1e3),l=i.getHours(),h=i.getMinutes(),x=l>=12?"PM":"AM";return(l%12||12)+":"+(h<10?"0"+h:h)+" "+x}return t(I,{children:t(y,{lg:24,children:u("div",{ref:a,className:`message ${e.senderId===s.uid?"owner":"owner_2"}`,children:[t("div",{className:"messageInfo",children:t(M.LazyLoadImage,{src:"https://images.unsplash.com/photo-1632498301446-5f78baad40d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwYW5kJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80",alt:""})}),u("div",{className:e.img?"messageContent_2":"messageContent",children:[t("p",{children:e.text}),t("span",{children:c(e==null?void 0:e.date)}),e.img&&t(M.LazyLoadImage,{src:e.img,alt:""})]})]})})})};const ne=()=>{const[e,s]=r.useState([]),{data:a}=r.useContext(N);return r.useEffect(()=>{const c=A(p(m,"chats",a.chatId),o=>{o.exists()&&s(o.data().messages)});return()=>{c()}},[a.chatId]),console.log(e),t(I,{children:t(y,{lg:24,children:t("div",{className:"messages",children:e.map(c=>t(se,{message:c},c.id))})})})},{Header:le,Content:ae,Footer:ue}=Z,re=()=>t(v,{children:u(y,{lg:12,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[t(M.LazyLoadImage,{width:100,src:"/assets/dropdownIcon/message.svg"}),t("p",{children:"Messages sent and received will be shown here"})]})}),oe=()=>{var s,a;r.useState([]),r.useState("");const{data:e}=r.useContext(N);return t(v,{children:u(y,{lg:12,style:{display:"flex",flexDirection:"column"},children:[u("div",{style:{marginLeft:15,lineHeight:1},children:[t("h1",{children:(s=e==null?void 0:e.user)==null?void 0:s.displayName}),t("p",{children:(a=e==null?void 0:e.user)!=null&&a.displayName?"Online":""})]}),t("div",{style:{height:2,backgroundColor:"lightgrey"}}),t(ae,{className:"content",children:t(ne,{})}),t(I,{style:{display:"flex",gap:20},children:t(y,{children:t(te,{})})})]})})},ce=()=>{const[e,s]=r.useState(""),[a,c]=r.useState(null),[o,i]=r.useState(!1),{currentUser:l}=r.useContext(D),h=async()=>{const n=J(K(m,"users"),V("displayName","==",e));try{(await P(n)).forEach(w=>{c(w.data())})}catch{i(!0)}};return t(v,{children:t(I,{children:t(y,{lg:24,children:u("div",{className:"search",children:[t("div",{className:"searchForm",children:t(j,{placeholder:"Find a user",onKeyDown:n=>{n.code==="Enter"&&h()},onChange:n=>s(n.target.value),value:e})}),o&&t("span",{children:"User not found!"}),a&&u("div",{className:"userChat",onClick:async()=>{const n=l.uid>a.uid?l.uid+a.uid:a.uid+l.uid;try{(await q(p(m,"chats",n))).exists()||(await G(p(m,"chats",n),{messages:[]}),await S(p(m,"userChats",l.uid),{[n+".userInfo"]:{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL},[n+".date"]:L()}),await S(p(m,"userChats",a.uid),{[n+".userInfo"]:{uid:l.uid,displayName:l.displayName,photoURL:l.photoURL},[n+".date"]:L()}))}catch{}c(null),s("")},style:{cursor:"pointer"},children:[t(M.LazyLoadImage,{src:a.photoURL,alt:""}),t("div",{className:"userChatInfo",children:t("span",{children:a.displayName})})]})]})})})})},he=()=>{var b;const[e,s]=r.useState(!1),[a,c]=r.useState([]),{currentUser:o}=r.useContext(D),{dispatch:i}=r.useContext(N);r.useEffect(()=>{const n=()=>{const g=A(p(m,"userChats",o.uid),w=>{c(w.data())});return()=>{g()}};o.uid&&n()},[o.uid]);const l=n=>{i({type:"CHANGE_USER",payload:n})},h=[{key:"1",label:t("p",{children:"Delete"})}];function x(n){const w=(new Date().getTime()-(n==null?void 0:n.seconds)*1e3-(n==null?void 0:n.nanoseconds)/1e6)/1e3,f=Math.floor(w/60);if(f===0)return"just now";if(f<60)return`${f} ${f===1?"minute":"minutes"} ago`;{const C=Math.floor(f/60);if(C<24)return`${C} ${C===1?"hour":"hours"} ago`;{const k=Math.floor(C/24);return`${k} ${k===1?"day":"days"} ago`}}}return t(v,{children:u(I,{justify:"center",children:[u(y,{lg:8,xs:6,children:[t("h1",{children:"Messages"}),t(ce,{}),(b=Object.entries(a))==null?void 0:b.sort((n,g)=>g[1].date-n[1].date).map(n=>{var g,w,f,C;return t(v,{children:u(I,{justify:"space-between",children:[u(y,{style:{display:"flex",flexDirection:"row",gap:10,marginTop:20},onClick:()=>l(n[1].userInfo),children:[t(W,{size:70,src:"https://images.unsplash.com/photo-1632498301446-5f78baad40d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwYW5kJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80"}),u(y,{onClick:()=>s(!0),style:{cursor:"pointer"},children:[t("h1",{className:"name_heading",children:(w=(g=n[1])==null?void 0:g.userInfo)==null?void 0:w.displayName}),t("p",{className:"msg_para",children:(f=n[1].lastMessage)==null?void 0:f.text}),t("p",{className:"time_para",children:x((C=n[1])==null?void 0:C.date)})]})]},n[0]),t(y,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:t(Y,{menu:{items:h},children:t(M.LazyLoadImage,{src:"/assets/dropdownIcon/dropdownImg.svg"})})})]})})})]}),t("div",{style:{width:2,backgroundColor:"#7A7777",marginLeft:20}}),e==!1?t(re,{}):t(oe,{}),t("div",{style:{width:2,backgroundColor:"#7A7777"}})]})})};export{he as default};
