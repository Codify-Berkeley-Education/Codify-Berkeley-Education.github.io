"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[193],{6752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"Readings/advanced-state-management/6.4","title":"6.4 - Custom Hooks","description":"React comes with several built-in Hooks like useState, useContext, and useEffect. Sometimes, you\u2019ll wish that there was a Hook for some more specific purpose: for example, to fetch data, to keep track of whether the user is online, or to connect to a chat room. You might not find these Hooks in React, but you can create your own Hooks for your application\u2019s needs.","source":"@site/docs/Readings/6-advanced-state-management/6.4.md","sourceDirName":"Readings/6-advanced-state-management","slug":"/Readings/advanced-state-management/6.4","permalink":"/docs/Readings/advanced-state-management/6.4","draft":false,"unlisted":false,"editUrl":"https://github.com/CS61D/website/tree/main/docs/Readings/6-advanced-state-management/6.4.md","tags":[],"version":"current","frontMatter":{"title":"6.4 - Custom Hooks","metadata":["Can be provided",{"as":"objects","or":"arrays"}]},"sidebar":"tutorialSidebar","previous":{"title":"6.3 - Combining Reducers and Context","permalink":"/docs/Readings/advanced-state-management/6.3"},"next":{"title":"Tailwind CSS","permalink":"/docs/Readings/tailwind"}}');var s=t(4848),a=t(8453),i=t(5537),r=t(9329);const l={title:"6.4 - Custom Hooks",metadata:["Can be provided",{as:"objects",or:"arrays"}]},c=void 0,u={},d=[{value:"Extracting your own custom Hook from a component",id:"extracting-your-own-custom-hook-from-a-component",level:3},{value:"Naming Conventions",id:"naming-conventions",level:3}];function h(e){const n={code:"code",em:"em",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["React comes with several built-in Hooks like ",(0,s.jsx)(n.code,{children:"useState"}),", ",(0,s.jsx)(n.code,{children:"useContext"}),", and ",(0,s.jsx)(n.code,{children:"useEffect"}),". Sometimes, you\u2019ll wish that there was a Hook for some more specific purpose: for example, to fetch data, to keep track of whether the user is online, or to connect to a chat room. You might not find these Hooks in React, but you can create your own Hooks for your application\u2019s needs."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Let's say we want our app to show whether the user's network connection is on or off. We might want to include in our component:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"A piece of state that tracks whether the network is online."}),"\n",(0,s.jsx)(n.li,{children:"An Effect that subscribes to the global online and offline events, and updates that state."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We might start with something like this:"}),"\n",(0,s.jsx)(i.A,{children:(0,s.jsx)(r.A,{value:"App.js",label:"App.js",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { useState, useEffect } from 'react';\n\nexport default function StatusBar() {\nconst [isOnline, setIsOnline] = useState(true);\nuseEffect(() => {\nfunction handleOnline() {\nsetIsOnline(true);\n}\nfunction handleOffline() {\nsetIsOnline(false);\n}\nwindow.addEventListener('online', handleOnline);\nwindow.addEventListener('offline', handleOffline);\nreturn () => {\nwindow.removeEventListener('online', handleOnline);\nwindow.removeEventListener('offline', handleOffline);\n};\n}, []);\n\n  return <h1>{isOnline ? '\u2705 Online' : '\u274c Disconnected'}</h1>;\n\n}\n\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["Now imagine you ",(0,s.jsx)(n.em,{children:"also"})," want to use the same logic in a different component. You want to implement a Save button that will become disabled and show \u201cReconnecting\u2026\u201d instead of \u201cSave\u201d while the network is off."]}),"\n",(0,s.jsxs)(n.p,{children:["To start, you can copy and paste the ",(0,s.jsx)(n.code,{children:"isOnline"})," state and the Effect into ",(0,s.jsx)(n.code,{children:"SaveButton"}),":"]}),"\n",(0,s.jsx)(i.A,{children:(0,s.jsx)(r.A,{value:"App.js",label:"App.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { useState, useEffect } from 'react';\n\nexport default function SaveButton() {\n  const [isOnline, setIsOnline] = useState(true);\n  useEffect(() => {\n    function handleOnline() {\n      setIsOnline(true);\n    }\n    function handleOffline() {\n      setIsOnline(false);\n    }\n    window.addEventListener('online', handleOnline);\n    window.addEventListener('offline', handleOffline);\n    return () => {\n      window.removeEventListener('online', handleOnline);\n      window.removeEventListener('offline', handleOffline);\n    };\n  }, []);\n\n  function handleSaveClick() {\n    console.log('\u2705 Progress saved');\n  }\n\n  return (\n    <button disabled={!isOnline} onClick={handleSaveClick}>\n      {isOnline ? 'Save progress' : 'Reconnecting...'}\n    </button>\n  );\n}\n"})})})}),"\n",(0,s.jsx)(n.p,{children:"These two components work fine, but the duplication in logic between them is unfortunate. It seems like even though they have different visual appearance, you want to reuse the logic between them."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"extracting-your-own-custom-hook-from-a-component",children:"Extracting your own custom Hook from a component"}),"\n",(0,s.jsxs)(n.p,{children:["Imagine for a moment that, similar to ",(0,s.jsx)(n.code,{children:"useState"})," and ",(0,s.jsx)(n.code,{children:"useEffect"}),", there was a built-in ",(0,s.jsx)(n.code,{children:"useOnlineStatus"})," Hook. Then both of these components could be simplified and you could remove the duplication between them:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function StatusBar() {\nconst isOnline = useOnlineStatus();\nreturn <h1>{isOnline ? '\u2705 Online' : '\u274c Disconnected'}</h1>;\n}\n\nfunction SaveButton() {\nconst isOnline = useOnlineStatus();\n\nfunction handleSaveClick() {\n  console.log('\u2705 Progress saved');\n}\n\nreturn (\n  <button disabled={!isOnline} onClick={handleSaveClick}>\n    {isOnline ? 'Save progress' : 'Reconnecting...'}\n  </button>\n);\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Although there is no such built-in Hook, you can write it yourself. Declare a function called ",(0,s.jsx)(n.code,{children:"useOnlineStatus"})," and move all the duplicated code into it from the components you wrote earlier:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'function useOnlineStatus() {\n  const [isOnline, setIsOnline] = useState(true);\n  useEffect(() => {\n    function handleOnline() {\n      setIsOnline(true);\n    }\n    function handleOffline() {\n      setIsOnline(false);\n    }\n    window.addEventListener("online", handleOnline);\n    window.addEventListener("offline", handleOffline);\n    return () => {\n      window.removeEventListener("online", handleOnline);\n      window.removeEventListener("offline", handleOffline);\n    };\n  }, []);\n  return isOnline;\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["At the end of the function, return ",(0,s.jsx)(n.code,{children:"isOnline"}),". This lets your components read that value:"]}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(r.A,{value:"App.js",label:"App.js",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { useOnlineStatus } from './useOnlineStatus.js';\n\nfunction StatusBar() {\n  const isOnline = useOnlineStatus();\n  return <h1>{isOnline ? '\u2705 Online' : '\u274c Disconnected'}</h1>;\n}\n\nfunction SaveButton() {\n  const isOnline = useOnlineStatus();\n\n  function handleSaveClick() {\n    console.log('\u2705 Progress saved');\n  }\n\n  return (\n    <button disabled={!isOnline} onClick={handleSaveClick}>\n      {isOnline ? 'Save progress' : 'Reconnecting...'}\n    </button>\n  );\n}\n\nexport default function App() {\n  return (\n    <>\n      <SaveButton />\n      <StatusBar />\n    </>\n  );\n}\n"})})}),(0,s.jsx)(r.A,{value:"useOnlineStatus.js",label:"useOnlineStatus.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { useState, useEffect } from 'react';\n\nexport function useOnlineStatus() {\n  const [isOnline, setIsOnline] = useState(true);\n  useEffect(() => {\n    function handleOnline() {\n      setIsOnline(true);\n    }\n    function handleOffline() {\n      setIsOnline(false);\n    }\n    window.addEventListener('online', handleOnline);\n    window.addEventListener('offline', handleOffline);\n    return () => {\n      window.removeEventListener('online', handleOnline);\n      window.removeEventListener('offline', handleOffline);\n    };\n  }, []);\n  return isOnline;\n}\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Now your components don\u2019t have as much repetitive logic. ",(0,s.jsx)(n.strong,{children:"More importantly, the code inside them describes what they want to do (use the online status!) rather than how to do it (by subscribing to the browser events)."})]}),"\n",(0,s.jsx)(n.h3,{id:"naming-conventions",children:"Naming Conventions"}),"\n",(0,s.jsx)(n.p,{children:"You must follow these naming conventions:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"React component names must start with a capital letter"}),", like ",(0,s.jsx)(n.code,{children:"StatusBar"})," and ",(0,s.jsx)(n.code,{children:"SaveButton"}),". React components also need to return something that React knows how to display, like a piece of JSX."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:["Hook names must start with ",(0,s.jsx)(n.code,{children:"use"})," followed by a capital letter"]}),", like ",(0,s.jsx)(n.code,{children:"useState"})," (built-in) or ",(0,s.jsx)(n.code,{children:"useOnlineStatus"})," (custom, like earlier on the page). Hooks may return arbitrary values."]}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var o=t(4164);const s={tabItem:"tabItem_Ymn6"};var a=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.A)(s.tabItem,i),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>O});var o=t(6540),s=t(4164),a=t(5627),i=t(6347),r=t(372),l=t(604),c=t(1861),u=t(8749);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:s}}=e;return{value:n,label:t,attributes:o,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:a}))),[c,d]=m({queryString:t,groupId:s}),[p,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Dv)(t);return[s,(0,o.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),b=(()=>{const e=c??p;return f({value:e,tabValues:a})?e:null})();(0,r.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),v(e)}),[d,v,a]),tabValues:a}}var v=t(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=t(4848);function g(e){let{className:n,block:t,selectedValue:o,selectValue:i,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=r[t].value;s!==o&&(c(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=p(e);return(0,w.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,w.jsx)(g,{...n,...e}),(0,w.jsx)(x,{...n,...e})]})}function O(e){const n=(0,v.A)();return(0,w.jsx)(j,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var o=t(6540);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);