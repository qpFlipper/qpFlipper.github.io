"use strict";(self["webpackChunkmy_flipper_net"]=self["webpackChunkmy_flipper_net"]||[]).push([[674],{1674:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var s=o(9835),l=o(6970);const i={class:"full-width",style:{height:"calc(100vh - 50px)"}},n=(0,s._)("div",{class:"text-h6"},"Remote session",-1),a=(0,s._)("br",null,null,-1),r=(0,s._)("br",null,null,-1),m=(0,s._)("br",null,null,-1),c=(0,s._)("div",{id:"terminal-container",class:"fit bg-black"},null,-1),d=(0,s._)("div",{class:"text-h6 q-mr-xl"},"Enter room name",-1),u=(0,s._)("div",{class:"text-h6 q-mr-xl"},"Host disconnected",-1);function h(e,t,o,h,g,f){const p=(0,s.up)("q-card-section"),w=(0,s.up)("q-card"),v=(0,s.up)("q-space"),k=(0,s.up)("q-btn"),C=(0,s.up)("q-input"),_=(0,s.up)("q-dialog"),I=(0,s.up)("q-page"),N=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(I,{class:"column items-center bg-black q-pl-sm"},{default:(0,s.w5)((()=>[(0,s._)("div",i,[(0,s.Wm)(w,{class:"absolute-top-right z-top",style:{"margin-right":"25px"}},{default:(0,s.w5)((()=>[e.flags.connected?((0,s.wg)(),(0,s.j4)(p,{key:0,class:"bg-black text-white"},{default:(0,s.w5)((()=>[n,(0,s._)("p",null,[(0,s.Uk)(" Room name: "+(0,l.zw)(e.roomName),1),a,(0,s.Uk)(" My id: "+(0,l.zw)(e.socket.id),1),r,(0,s.Uk)(" Host id: "+(0,l.zw)(e.hostId),1),m,(0,s.Uk)(" Clients connected: "+(0,l.zw)(e.clientsCount),1)])])),_:1})):(0,s.kq)("",!0)])),_:1}),c]),(0,s.Wm)(_,{modelValue:e.flags.roomNameRequired,"onUpdate:modelValue":t[2]||(t[2]=t=>e.flags.roomNameRequired=t)},{default:(0,s.w5)((()=>[(0,s.Wm)(w,null,{default:(0,s.w5)((()=>[(0,s.Wm)(p,{class:"row items-center"},{default:(0,s.w5)((()=>[d,(0,s.Wm)(v),(0,s.wy)((0,s.Wm)(k,{icon:"close",flat:"",round:"",dense:""},null,512),[[N]])])),_:1}),(0,s.Wm)(p,null,{default:(0,s.w5)((()=>[(0,s.Wm)(C,{modelValue:e.roomName,"onUpdate:modelValue":t[1]||(t[1]=t=>e.roomName=t),style:(0,l.j5)(e.$q.screen.width>380?"width: 300px;":"")},{after:(0,s.w5)((()=>[(0,s.Wm)(k,{round:"",flat:"",icon:"send",onClick:t[0]||(t[0]=t=>{e.flags.roomNameRequired=!1,e.startClient(e.roomName)})})])),_:1},8,["modelValue","style"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(_,{modelValue:e.flags.hostDisconnected,"onUpdate:modelValue":t[3]||(t[3]=t=>e.flags.hostDisconnected=t)},{default:(0,s.w5)((()=>[(0,s.Wm)(w,null,{default:(0,s.w5)((()=>[(0,s.Wm)(p,{class:"row items-center"},{default:(0,s.w5)((()=>[u,(0,s.Wm)(v),(0,s.wy)((0,s.Wm)(k,{icon:"close",flat:"",round:"",dense:""},null,512),[[N]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var g=o(499),f=o(6797),p=o(4880),w=o(6973);const v=(0,s.aZ)({name:"PageRemoteCli",setup(){return{flags:(0,g.iH)({connected:!1,roomNameRequired:!1,hostDisconnected:!1}),terminal:(0,g.iH)(void 0),readInterval:void 0,input:(0,g.iH)(""),unbind:(0,g.iH)(void 0),socket:(0,g.iH)(null),roomName:(0,g.iH)(""),hostId:(0,g.iH)(null),clientsCount:(0,g.iH)(0),clientsPollingInterval:(0,g.iH)(null)}},methods:{init(){this.terminal=new f.Terminal({scrollback:1e4});const e=new p.FitAddon;this.terminal.loadAddon(e),this.terminal.open(document.getElementById("terminal-container")),document.querySelector(".xterm").setAttribute("style","height:"+getComputedStyle(document.querySelector(".xterm")).height),this.terminal.focus(),e.fit(),this.terminal.onData((e=>{this.socket.emit("dmToHost",this.hostId,e,(e=>{e.error&&(this.$emit("showNotif",{message:"Failed to send message to host",color:"negative"}),this.$emit("log",{level:"error",message:`Remote CLI: Failed to send message to host: ${e.error.toString()}`}))}))})),this.startClient()},startClient(e){this.roomName=e||window.location.hash.substr(1),this.roomName?(this.socket=(0,w.io)("ws://localhost:3000"),this.socket.on("connect",(()=>{this.flags.connected=!0,this.$emit("log",{level:"info",message:`Remote CLI: Connected to cli server. My id: ${this.socket.id}`}),this.socket.emit("joinRoom",this.roomName,(e=>{e.error?(this.$emit("showNotif",{message:`Failed to connect to room ${this.roomName}`,color:"negative"}),this.$emit("log",{level:"error",message:`Remote CLI: Failed to connect to room ${this.roomName}: ${e.error.toString()}`})):e.hostId&&(this.$emit("log",{level:"info",message:`Remote CLI: Connected to room ${this.roomName}. Host id: ${e.hostId}`}),this.hostId=e.hostId,this.clientsPollingInterval=setInterval((()=>{this.socket.emit("pollClients",this.roomName,(e=>{e.clientsCount&&(this.clientsCount=e.clientsCount-1)}))}),3e3))}))})),this.socket.on("cliText",(e=>{"string"===typeof e&&this.terminal.write(e)})),this.socket.on("disconnect",(()=>{this.$emit("showNotif",{message:"Disconnected from cli server"}),this.$emit("log",{level:"warn",message:"Remote CLI: Disconnected from cli server"}),this.flags.connected=!0,this.socket.disconnect(),clearInterval(this.clientsPollingInterval)}))):this.flags.roomNameRequired=!0}},mounted(){this.init()},async beforeUnmount(){this.socket.disconnect(),clearInterval(this.clientsPollingInterval)}});var k=o(1639),C=o(9885),_=o(4458),I=o(3190),N=o(2074),q=o(136),b=o(4455),y=o(3119),$=o(2146),R=o(9984),W=o.n(R);const H=(0,k.Z)(v,[["render",h]]),x=H;W()(v,"components",{QPage:C.Z,QCard:_.Z,QCardSection:I.Z,QDialog:N.Z,QSpace:q.Z,QBtn:b.Z,QInput:y.Z}),W()(v,"directives",{ClosePopup:$.Z})}}]);