import{d as u,o as b,c as p,a as e,b as w,e as x,r as f,u as g,f as n,w as i,v as m,g as v,h as k,t as S,F as A,i as L,l as B,j as R}from"./index-c0d4f527.js";const y={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},C=e("g",{fill:"none"},[e("path",{d:"M5.694 12L2.299 3.27c-.236-.607.356-1.188.942-.981l.093.039l18 9a.75.75 0 0 1 .097 1.284l-.097.058l-18 9c-.583.291-1.217-.245-1.065-.848l.03-.095L5.694 12L2.299 3.27L5.694 12zM4.402 4.54l2.61 6.71h6.627a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.649.743l-.101.007H7.01l-2.609 6.71L19.322 12L4.401 4.54z",fill:"currentColor"})],-1),M=[C],V=u({name:"Send24Regular",render:function(t,c){return b(),p("svg",y,M)}}),U=w("setting",{persist:!0,state:()=>{const l=x(()=>t.value?"0.0.0.0":"127.0.0.1"),t=f(!1);return{bindAddr:l,isBindGlobalAddr:t}}}),j={class:"flex-1 flex flex-col justify-center items-center"},G=["src"],$=e("h1",{class:"self-center text-xl mt-4 font-bold"},"WebSocket Reflector X",-1),z={class:"input-group p-6 max-w-xl"},D=e("div",{class:"h-12"},null,-1),F={class:"flex flex-col p-8"},H={class:"label cursor-pointer border-opacity-10 border-b border-base-content flex flex-row justify-end"},N={class:"label-text flex flex-row"},W=u({__name:"HomeView",setup(l){const t=f(""),c=R(),d=g(),r=U(),h=o=>{try{let s=new URL(o);return!(s.protocol!=="ws:"&&s.protocol!=="wss:")}catch{return!1}},_=()=>{h(t.value)?L("add_ws_connection",{targetAddr:t.value,bindAddr:r.bindAddr}).then(()=>{t.value="",c.push("/connections")}).catch(o=>{d.showMessage("error",o,5e3)}):d.showMessage("error","Invalid URL",5e3)};return(o,s)=>(b(),p(A,null,[e("div",j,[e("img",{alt:"WSRX",src:n(B),class:"w-24 h-24"},null,8,G),$,e("div",z,[i(e("input",{class:"input bg-base-content/5 backdrop-blur mt-8 flex-1",placeholder:"[ws/wss]://...","onUpdate:modelValue":s[0]||(s[0]=a=>t.value=a)},null,512),[[m,t.value]]),e("button",{class:"btn bg-base-content/5 backdrop-blur mt-8 border-none",onClick:_},[v(n(V),{class:"w-6 h-6"})])]),D]),e("div",F,[e("label",H,[i(e("input",{type:"checkbox","onUpdate:modelValue":s[1]||(s[1]=a=>n(r).isBindGlobalAddr=a),class:"checkbox mr-4"},null,512),[[k,n(r).isBindGlobalAddr]]),e("span",N,S(o.$t("bindGlobalAddr")),1)])])],64))}});export{W as default};
