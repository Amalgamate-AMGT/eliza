"use strict";(self.webpackChunkeliza_docs=self.webpackChunkeliza_docs||[]).push([[3489],{2128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(4848),o=n(8453);const i={},r="Room Model",s={id:"rooms",title:"Room Model",description:"The 'room model' represents a physical or virtual space where interactions between agents and users take place.",source:"@site/api/rooms.md",sourceDirName:".",slug:"/rooms",permalink:"/eliza/api/rooms",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Key Concepts in Eliza",permalink:"/eliza/api/concepts"}},c={},d=[{value:"Key Concepts",id:"key-concepts",level:2},{value:"Room",id:"room",level:3},{value:"Participant",id:"participant",level:3},{value:"Ensuring that a Room and Participant Exists",id:"ensuring-that-a-room-and-participant-exists",level:3}];function h(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"room-model",children:"Room Model"})}),"\n",(0,a.jsx)(t.p,{children:"The 'room model' represents a physical or virtual space where interactions between agents and users take place."}),"\n",(0,a.jsx)(t.p,{children:"In a typical user-to-agent conversation, such as in ChatGPT, the conversation can be stored in the database with a key for the user and a key for the agent. When they agent needs to look at the recnt conversation history, they can search the database and filter by the person they are talking to. In a multi-agent environment, the conversation can be a lot more complex, with multiple people joining and leaving the conversation, multiple agents interacting with each other, and more."}),"\n",(0,a.jsx)(t.p,{children:"The room model is popular in multiplayer gaming, where a room can be associated with a server. For many open-world multiplayer games, the world is divided into chunks that players can move between."}),"\n",(0,a.jsx)(t.p,{children:"In the context of eliza, a room can be a physical space, such as a chat room, or a virtual space, such as a game world. The room model provides a way to organize interactions, manage participants, and maintain context within a specific environment."}),"\n",(0,a.jsx)(t.h2,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,a.jsx)(t.h3,{id:"room",children:"Room"}),"\n",(0,a.jsxs)(t.p,{children:["A room contains a list of participants which can be agents or users, and can be added or removed from at any time. The room is keyed by the ",(0,a.jsx)(t.code,{children:"room_id"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"participant",children:"Participant"}),"\n",(0,a.jsx)(t.p,{children:"A participant is an agent or user that is part of the room. Participants are identified by their 'user_id' which is keyed to the account of the user or agent."}),"\n",(0,a.jsx)(t.h3,{id:"ensuring-that-a-room-and-participant-exists",children:"Ensuring that a Room and Participant Exists"}),"\n",(0,a.jsx)(t.p,{children:"Every memory needs to be associated with a room and a participant. On databases where foreign keys are available, we try to enforce this constraint."}),"\n",(0,a.jsxs)(t.p,{children:["When handling messages, you can use the built-in ",(0,a.jsx)(t.code,{children:"AgentRuntime.ensureRoomExists(user_id,  room_id)"})," and ",(0,a.jsx)(t.code,{children:"AgentRuntime.ensureParticipantExists()"})," methods to ensure that the room and participant are correctly set up. A wrapper function has also been added to the runtime to make this easier: ",(0,a.jsx)(t.code,{children:"AgentRuntime.ensureConnection(user_id, room_id, user_name, user_screen_name, source)"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var a=n(6540);const o={},i=a.createContext(o);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);