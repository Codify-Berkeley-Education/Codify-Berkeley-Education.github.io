"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7423],{6263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"Readings/advanced-state-management/6.1","title":"6.1 - Extracting State Logic into a Reducer","description":"Components with many state updates spread across many event handlers can get overwhelming. Reducers consolidate state update logic into a single function outside your component.","source":"@site/docs/Readings/6-advanced-state-management/6.1.md","sourceDirName":"Readings/6-advanced-state-management","slug":"/Readings/advanced-state-management/6.1","permalink":"/docs/Readings/advanced-state-management/6.1","draft":false,"unlisted":false,"editUrl":"https://github.com/CS61D/website/tree/main/docs/Readings/6-advanced-state-management/6.1.md","tags":[],"version":"current","frontMatter":{"title":"6.1 - Extracting State Logic into a Reducer","metadata":["Can be provided",{"as":"objects","or":"arrays"}]},"sidebar":"tutorialSidebar","previous":{"title":"Lecture 6: Advanced State Management","permalink":"/docs/Readings/advanced-state-management/"},"next":{"title":"6.2 - Passing Data Deeply with Context","permalink":"/docs/Readings/advanced-state-management/6.2"}}');var a=n(4848),r=n(8453),i=n(5537),o=n(9329);const d={title:"6.1 - Extracting State Logic into a Reducer",metadata:["Can be provided",{as:"objects",or:"arrays"}]},c=void 0,l={},u=[{value:"Consolidate state logic with a reducer",id:"consolidate-state-logic-with-a-reducer",level:3},{value:"Step 1: Move from setting state to dispatching actions",id:"step-1-move-from-setting-state-to-dispatching-actions",level:3},{value:"Write a reducer function",id:"write-a-reducer-function",level:3},{value:"Step 3: Use the reducer from your component",id:"step-3-use-the-reducer-from-your-component",level:3}];function h(e){const t={admonition:"admonition",code:"code",em:"em",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Components with many state updates spread across many event handlers can get overwhelming. ",(0,a.jsx)(t.strong,{children:"Reducers"})," consolidate state update logic into a single function outside your component."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"consolidate-state-logic-with-a-reducer",children:"Consolidate state logic with a reducer"}),"\n",(0,a.jsxs)(t.p,{children:["As your components grow, your state update logic's readability can decrease. For example, let's say we have a ",(0,a.jsx)(t.code,{children:"TaskApp"})," component. It holds an array of tasks in state and uses three different event handlers to ",(0,a.jsx)(t.code,{children:"add"}),", ",(0,a.jsx)(t.code,{children:"remove"}),", and ",(0,a.jsx)(t.code,{children:"edit"})," tasks:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:'import { useState } from "react";\nimport AddTask from "./AddTask.js";\nimport TaskList from "./TaskList.js";\n\nexport default function TaskApp() {\n  const [tasks, setTasks] = useState(initialTasks);\n\n  function handleAddTask(text) {\n    setTasks([\n      ...tasks,\n      {\n        id: nextId++,\n        text: text,\n        done: false,\n      },\n    ]);\n  }\n\n  function handleChangeTask(task) {\n    setTasks(\n      tasks.map((t) => {\n        if (t.id === task.id) {\n          return task;\n        } else {\n          return t;\n        }\n      }),\n    );\n  }\n\n  function handleDeleteTask(taskId) {\n    setTasks(tasks.filter((t) => t.id !== taskId));\n  }\n\n  return (\n    <>\n      <h1>Prague itinerary</h1>\n      <AddTask onAddTask={handleAddTask} />\n      <TaskList\n        tasks={tasks}\n        onChangeTask={handleChangeTask}\n        onDeleteTask={handleDeleteTask}\n      />\n    </>\n  );\n}\n\nlet nextId = 3;\nconst initialTasks = [\n  { id: 0, text: "Visit Kafka Museum", done: true },\n  { id: 1, text: "Watch a puppet show", done: false },\n  { id: 2, text: "Lennon Wall pic", done: false },\n];\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Each event handler calls ",(0,a.jsx)(t.code,{children:"setTasks"})," in order to update the state.\nAs this component grows, so does the amount of state logic sprinkled throughout it."]}),"\n",(0,a.jsx)(t.p,{children:"We can move our state logic into a single function outside your component, called a \u201creducer\u201d."}),"\n",(0,a.jsxs)(t.p,{children:["Reducers are just a different way to handle state. You can migrate from ",(0,a.jsx)(t.code,{children:"useState"})," to ",(0,a.jsx)(t.code,{children:"useReducer"})," in three steps:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Move"})," from setting state to dispatching actions."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Write"})," a reducer function."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Use"})," the reducer from your component."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"step-1-move-from-setting-state-to-dispatching-actions",children:"Step 1: Move from setting state to dispatching actions"}),"\n",(0,a.jsx)(t.p,{children:"The three event handlers above can be boiled down to:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"handleAddTask(text)"})," is called when the user presses \u201cAdd\u201d."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"handleChangeTask(task)"})," is called when the user toggles a task or presses \u201cSave\u201d."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"handleDeleteTask(taskId)"})," is called when the user presses \u201cDelete\u201d."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Managing state with reducers is slightly different from directly setting state. Instead of telling React \u201cwhat to do\u201d by setting state, you specify \u201cwhat the user just did\u201d by dispatching \u201cactions\u201d from your event handlers. (The state update logic will live elsewhere!)"}),"\n",(0,a.jsx)(t.p,{children:"So instead of \u201csetting tasks\u201d via an event handler, you\u2019re dispatching an \u201cadded/changed/deleted a task\u201d action. This is more descriptive of the user\u2019s intent."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:'function handleAddTask(text) {\n  dispatch({\n    type: "added",\n    id: nextId++,\n    text: text,\n  });\n}\n\nfunction handleChangeTask(task) {\n  dispatch({\n    type: "changed",\n    task: task,\n  });\n}\n\nfunction handleDeleteTask(taskId) {\n  dispatch(\n    // "action" object\n    {\n      type: "deleted",\n      id: taskId,\n    },\n  );\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The object you pass to ",(0,a.jsx)(t.code,{children:"dispatch"})," is called an \u201caction\u201d."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:'dispatch(\n  // "action" object:\n  {\n    type: "what_happened", // useful description\n    id: taskId, // other fields go here\n  },\n);\n'})}),"\n",(0,a.jsxs)(t.p,{children:["It is a regular JavaScript object. You can put any fields you\u2019d like in there, but the convention is to give it a ",(0,a.jsxs)(t.strong,{children:["string type that describes ",(0,a.jsx)(t.em,{children:"what happened"})]}),". (You will add the dispatch function itself in a later step.)"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"write-a-reducer-function",children:"Write a reducer function"}),"\n",(0,a.jsx)(t.p,{children:"A reducer function is where you will put your state logic. It takes two arguments, the current state and the action object, and it returns the next state:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"function yourReducer(state, action) {\n  // return next state for React to set\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"React will set the state to what you return from the reducer."}),"\n",(0,a.jsx)(t.p,{children:"To move your state setting logic from your event handlers to a reducer function in this example, you will:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Declare the current state (tasks) as the first argument."}),"\n",(0,a.jsx)(t.li,{children:"Declare the action object as the second argument."}),"\n",(0,a.jsx)(t.li,{children:"Return the next state from the reducer (which React will set the state to)."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Here is all the state setting logic migrated to a reducer function:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:'function tasksReducer(tasks, action) {\n  switch (action.type) {\n    case "added": {\n      return [\n        ...tasks,\n        {\n          id: action.id,\n          text: action.text,\n          done: false,\n        },\n      ];\n    }\n    case "changed": {\n      return tasks.map((t) => {\n        if (t.id === action.task.id) {\n          return action.task;\n        } else {\n          return t;\n        }\n      });\n    }\n    case "deleted": {\n      return tasks.filter((t) => t.id !== action.id);\n    }\n    default: {\n      throw Error("Unknown action: " + action.type);\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["The code above could also be written using if/else statements, but it\u2019s a convention to use switch statements inside reducers. The result is the same, but it can be easier to read switch statements at a glance. Also, a case should usually end with a ",(0,a.jsx)(t.code,{children:"return"}),". If you forget to return, the code will \u201cfall through\u201d to the next case, which can lead to mistakes!"]})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"step-3-use-the-reducer-from-your-component",children:"Step 3: Use the reducer from your component"}),"\n",(0,a.jsxs)(t.p,{children:["Finally, you need to hook up the ",(0,a.jsx)(t.code,{children:"tasksReducer"})," to your component. Import the ",(0,a.jsx)(t.code,{children:"useReducer"})," Hook from React:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:'import { useReducer } from "react";\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Then you can replace ",(0,a.jsx)(t.code,{children:"useState"})," with with ",(0,a.jsx)(t.code,{children:"useReducer"})," like so:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"const [tasks, setTasks] = useState(initialTasks); // delete this\nconst [tasks, dispatch] = useReducer(tasksReducer, initialTasks); // and use this instead!\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"useReducer"})," Hook is similar to ",(0,a.jsx)(t.code,{children:"useState"}),"\u2014you must pass it an initial state and it returns a stateful value and a way to set state (in this case, the ",(0,a.jsx)(t.code,{children:"dispatch"})," function). But it\u2019s a little different."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"useReducer"})," Hook takes two arguments:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"A reducer function"}),"\n",(0,a.jsx)(t.li,{children:"An initial state"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"And it returns:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"A stateful value"}),"\n",(0,a.jsxs)(t.li,{children:["A ",(0,a.jsx)(t.code,{children:"dispatch"})," function (to \u201cdispatch\u201d user actions to the reducer)"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"If you want, you can even move the reducer to a different file:"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(o.A,{value:"App.js",label:"App.js",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"import { useReducer } from 'react';\nimport AddTask from './AddTask.js';\nimport TaskList from './TaskList.js';\nimport tasksReducer from './tasksReducer.js';\n\nexport default function TaskApp() {\nconst [tasks, dispatch] = useReducer(tasksReducer, initialTasks);\n\nfunction handleAddTask(text) {\ndispatch({\ntype: 'added',\nid: nextId++,\ntext: text,\n});\n}\n\nfunction handleChangeTask(task) {\ndispatch({\ntype: 'changed',\ntask: task,\n});\n}\n\nfunction handleDeleteTask(taskId) {\ndispatch({\ntype: 'deleted',\nid: taskId,\n});\n}\n\nreturn (\n<>\n\n<h1>Prague itinerary</h1>\n<AddTask onAddTask={handleAddTask} />\n<TaskList\n        tasks={tasks}\n        onChangeTask={handleChangeTask}\n        onDeleteTask={handleDeleteTask}\n      />\n</>\n);\n}\n\nlet nextId = 3;\nconst initialTasks = [\n{id: 0, text: 'Visit Kafka Museum', done: true},\n{id: 1, text: 'Watch a puppet show', done: false},\n{id: 2, text: 'Lennon Wall pic', done: false},\n];\n\n"})})}),(0,a.jsx)(o.A,{value:"tasksReducer.js",label:"tasksReducer.js",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"export default function tasksReducer(tasks, action) {\n  switch (action.type) {\n    case 'added': {\n      return [\n        ...tasks,\n        {\n          id: action.id,\n          text: action.text,\n          done: false,\n        },\n      ];\n    }\n    case 'changed': {\n      return tasks.map((t) => {\n        if (t.id === action.task.id) {\n          return action.task;\n        } else {\n          return t;\n        }\n      });\n    }\n    case 'deleted': {\n      return tasks.filter((t) => t.id !== action.id);\n    }\n    default: {\n      throw Error('Unknown action: ' + action.type);\n    }\n  }\n}\n\n"})})})]}),"\n",(0,a.jsx)(t.p,{children:"Component logic can be easier to read when you separate concerns like this. Now the event handlers only specify what happened by dispatching actions, and the reducer function determines how the state updates in response to them."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var s=n(4164);const a={tabItem:"tabItem_Ymn6"};var r=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,i),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>y});var s=n(6540),a=n(4164),r=n(5627),i=n(6347),o=n(372),d=n(604),c=n(1861),l=n(8749);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=h(e),[i,d]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[c,u]=m({queryString:n,groupId:a}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,l.Dv)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=c??f;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{g&&d(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=n(4848);function j(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),l=e=>{const t=e.currentTarget,n=d.indexOf(t),a=o[n].value;a!==s&&(c(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{d.push(e)},onKeyDown:u,onClick:l,...r,className:(0,a.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function b(e){const t=f(e);return(0,k.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,k.jsx)(j,{...t,...e}),(0,k.jsx)(v,{...t,...e})]})}function y(e){const t=(0,x.A)();return(0,k.jsx)(b,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(6540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);