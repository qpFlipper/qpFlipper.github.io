"use strict";(self["webpackChunkmy_flipper_net"]=self["webpackChunkmy_flipper_net"]||[]).push([[207],{207:(e,t,s)=>{s.r(t),s.d(t,{default:()=>A});var a=s(9835),r=s(6970);const l=(0,a._)("div",{class:"text-h6 q-py-sm"},"Mfkey32v2 NFC attack",-1),i=(0,a._)("div",{class:"text-subtitle-1"},"Crack nonces you've gathered on your Flipper",-1),n={class:"q-pt-sm q-mb-xl text-subtitle-1"},o=(0,a._)("div",{class:"text-h6"},"Manual attack",-1),c={class:"flex q-gutter-md"},m={class:"q-mt-lg"},g={key:0,class:"q-pt-lg"},d={key:0,class:"text-subtitle1 q-mr-sm"};function u(e,t,s,u,p,f){const h=(0,a.up)("q-btn"),y=(0,a.up)("q-card-section"),k=(0,a.up)("q-input"),w=(0,a.up)("q-form"),v=(0,a.up)("q-card"),b=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(b,{class:"column items-center q-pa-md"},{default:(0,a.w5)((()=>[l,i,(0,a.Wm)(h,{color:"primary",loading:e.flags.mfkeyFlipperInProgress,disable:e.flags.mfkeyManualInProgress,class:"q-mt-lg q-py-sm q-px-lg",label:"Give me the keys",onClick:e.mfkeyFlipperStart},null,8,["loading","disable","onClick"]),(0,a._)("div",n,(0,r.zw)(e.mfkeyStatus),1),(0,a.Wm)(v,{flat:"",bordered:"",class:"q-mt-xl"},{default:(0,a.w5)((()=>[(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[o])),_:1}),(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{onSubmit:e.mfkeyManualStart},{default:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a.Wm)(k,{modelValue:e.args.cuid,"onUpdate:modelValue":t[0]||(t[0]=t=>e.args.cuid=t),label:"cuid",style:{width:"70px"}},null,8,["modelValue"]),(0,a.Wm)(k,{modelValue:e.args.nt0,"onUpdate:modelValue":t[1]||(t[1]=t=>e.args.nt0=t),label:"nt0",style:{width:"70px"}},null,8,["modelValue"]),(0,a.Wm)(k,{modelValue:e.args.nr0,"onUpdate:modelValue":t[2]||(t[2]=t=>e.args.nr0=t),label:"nr0",style:{width:"70px"}},null,8,["modelValue"]),(0,a.Wm)(k,{modelValue:e.args.ar0,"onUpdate:modelValue":t[3]||(t[3]=t=>e.args.ar0=t),label:"ar0",style:{width:"70px"}},null,8,["modelValue"]),(0,a.Wm)(k,{modelValue:e.args.nt1,"onUpdate:modelValue":t[4]||(t[4]=t=>e.args.nt1=t),label:"nt1",style:{width:"70px"}},null,8,["modelValue"]),(0,a.Wm)(k,{modelValue:e.args.nr1,"onUpdate:modelValue":t[5]||(t[5]=t=>e.args.nr1=t),label:"nr1",style:{width:"70px"}},null,8,["modelValue"]),(0,a.Wm)(k,{modelValue:e.args.ar1,"onUpdate:modelValue":t[6]||(t[6]=t=>e.args.ar1=t),label:"ar1",style:{width:"70px"}},null,8,["modelValue"]),(0,a._)("div",m,[(0,a.Wm)(h,{type:"submit",color:"primary",loading:e.flags.mfkeyManualInProgress,disable:e.flags.mfkeyFlipperInProgress,label:"Run"},null,8,["loading","disable"])])])])),_:1},8,["onSubmit"]),e.result?((0,a.wg)(),(0,a.iD)("div",g,[e.result.startsWith("Error")?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("span",d,"Key:")),(0,a._)("b",null,(0,r.zw)(e.result),1)])):(0,a.kq)("",!0)])),_:1})])),_:1})])),_:1})}s(6822),s(4110),s(702);var p=s(499),f=s(5186),h=(s(4641),s(3269),s(5530));const y=new h.OX;let k;async function w(e){k=new Worker(new URL(s.p+s.u(138),s.b));const t=y.create(k,"start",JSON.parse(JSON.stringify(e))),a=setTimeout((()=>{y.terminate({status:0,error:"mfkey run killed on timeout"}),k.terminate()}),1e4);return k.onmessage=e=>{"output"===e.data.operation?(clearTimeout(a),y.terminate({status:1,data:e.data.data}),k.terminate()):"error"===e.data.operation&&(y.terminate({status:0,error:e.data.data}),k.terminate())},t}function v(){k.terminate(),k=null}const b=(0,a.aZ)({name:"NfcTools",props:{flipper:Object,connected:Boolean,rpcActive:Boolean},setup(){return{flags:(0,p.iH)({rpcActive:!1,rpcToggling:!1,mfkeyFlipperInProgress:!1,mfkeyManualInProgress:!1}),mfkeyStatus:(0,p.iH)(""),args:(0,p.iH)({cuid:"2a234f80",nt0:"55721809",nr0:"ce9985f6",ar0:"772f55be",nt1:"a27173f2",nr1:"e386b505",ar1:"5fa65203"}),result:(0,p.iH)("")}},watch:{async connected(e,t){e&&await this.start()}},methods:{async startRpc(){this.flags.rpcToggling=!0;const e=await this.flipper.commands.startRpcSession(this.flipper);if(!e.resolved||e.error)throw this.$emit("showNotif",{message:"Unable to start RPC session. Reload the page or reconnect Flipper manually.",color:"negative",reloadBtn:!0}),this.$emit("log",{level:"error",message:"NfcTools: Couldn't start rpc session"}),new Error("Couldn't start rpc session");this.flags.rpcActive=!0,this.flags.rpcToggling=!1,this.$emit("setRpcStatus",!0),this.$emit("log",{level:"info",message:"NfcTools: RPC started"})},async stopRpc(){this.flags.rpcToggling=!0,await this.flipper.commands.stopRpcSession(),this.flags.rpcActive=!1,this.flags.rpcToggling=!1,this.$emit("setRpcStatus",!1),this.$emit("log",{level:"info",message:"NfcTools: RPC stopped"})},async restartRpc(e){this.connected&&(this.rpcActive||e)&&(this.flags.restarting=!0,await this.flipper.closeReader(),await(0,f.Z)(300),await this.flipper.disconnect(),await(0,f.Z)(300),await this.flipper.connect(),await this.startRpc())},rpcErrorHandler(e,t){e=e.toString(),this.$emit("showNotif",{message:`RPC error in command '${t}': ${e}`,color:"negative"}),this.$emit("log",{level:"error",message:`NfcTools: RPC error in command '${t}': ${e}`})},async mfkeyFlipperStart(){this.flags.mfkeyFlipperInProgress=!0,this.mfkeyStatus="Loading log";let e=await this.flipper.commands.storage.read("/ext/nfc/.mfkey32.log").catch((e=>{this.rpcErrorHandler(e,"storage.read"),this.mfkeyStatus="No new logs available",this.flags.mfkeyFlipperInProgress=!1})).finally((()=>{this.$emit("log",{level:"debug",message:"NfcTools: storage.read: /ext/nfc/.mfkey32.log"})}));if(!e)return;this.mfkeyStatus="Processing log";const t=(new TextDecoder).decode(e).split("\n");0===t[t.length-1].length&&t.pop();const s=new Set,a=[];for(let o=0;o<t.length;o++){const e=t[o].slice(t[o].indexOf("cuid")).split(" ").filter(((e,t)=>t%2===1));this.mfkeyStatus=`Attacking nonce ${o+1} of ${t.length}`;try{const t=await this.mfkey(e);s.add(t),this.$emit("log",{level:"debug",message:`NfcTools: cracked nonce: ${e}, key: ${t}`})}catch(n){a.push(n.toString()),this.$emit("log",{level:"error",message:`NfcTools: error in mfkey32v2: ${n}`})}}this.mfkeyStatus="Loading user dictionary",e=await this.flipper.commands.storage.read("/ext/nfc/assets/mf_classic_dict_user.nfc").catch((e=>{this.rpcErrorHandler(e,"storage.read")})).finally((()=>{this.$emit("log",{level:"debug",message:"NfcTools: storage.read: /ext/nfc/assets/mf_classic_dict_user.nfc"})}));let r=[];e&&(this.mfkeyStatus="Processing user dictionary",r=(new TextDecoder).decode(e).split("\n"),0===r[r.length-1].length&&r.pop()),r=new Set(r);const l=Array.from(r).length;for(const o of s)r.add(o);this.mfkeyStatus="Uploading user dictionary";const i=(new TextEncoder).encode(Array.from(s).join("\n"));await this.flipper.commands.storage.write("/ext/nfc/assets/mf_classic_dict_user.nfc",i.buffer).catch((e=>this.rpcErrorHandler(e,"storage.write"))).finally((()=>{this.$emit("log",{level:"debug",message:"Archive: storage.write: "+this.path+"/"+i.name})})),this.mfkeyStatus=`Nonces: ${t.length} | Unique keys: ${Array.from(s).length} | New keys: ${Array.from(r).length-l} | Errors: ${a.length}`,this.flags.mfkeyFlipperInProgress=!1},mfkeyManualStart(e){return e.preventDefault(),this.flags.mfkeyManualInProgress=!0,this.mfkey()},async mfkey(e){let t;this.result="",e||(e=Object.values(this.args));try{t=await w(e),this.$emit("log",{level:"debug",message:`NfcTools: cracked nonce: ${e}, key: ${t}`})}catch(s){this.$emit("log",{level:"error",message:`NfcTools: error in mfkey32v2: ${s}`}),t=`Error: ${s}`}return this.flags.mfkeyManualInProgress&&(this.result=t),this.flags.mfkeyManualInProgress=!1,t},forceStopMfkey(){v()},async start(){this.flags.rpcActive=this.rpcActive,this.rpcActive||(setTimeout((()=>{if(!this.rpcActive)return this.restartRpc(!0)}),1e3),await this.startRpc())}},async mounted(){this.connected&&await this.start()}});var $=s(1639),S=s(9885),x=s(4455),_=s(4458),T=s(3190),q=s(8326),V=s(3119),P=s(9984),N=s.n(P);const R=(0,$.Z)(b,[["render",u]]),A=R;N()(b,"components",{QPage:S.Z,QBtn:x.Z,QCard:_.Z,QCardSection:T.Z,QForm:q.Z,QInput:V.Z})}}]);