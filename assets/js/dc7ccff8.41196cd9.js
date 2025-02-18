"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5483],{1470:(e,n,t)=>{t.d(n,{A:()=>b});var s=t(6540),a=t(4164),o=t(3104),r=t(6347),i=t(205),c=t(7485),d=t(1682),l=t(9466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const a=(0,r.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function k(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=h(e),[r,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[d,u]=x({queryString:t,groupId:a}),[k,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,l.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),f=(()=>{const e=d??k;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{f&&c(f)}),[f]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var m=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function g(e){let{className:n,block:t,selectedValue:s,selectValue:r,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),l=e=>{const n=e.currentTarget,t=c.indexOf(n),a=i[t].value;a!==s&&(d(n),r(a))},u=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:l,...o,className:(0,a.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function T(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=k(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,j.jsx)(g,{...e,...n}),(0,j.jsx)(T,{...e,...n})]})}function b(e){const n=(0,m.A)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(n))}},3805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var s=t(4848),a=t(8453),o=t(1470),r=t(9365);const i={title:"6.3 - Combining Reducers and Context",metadata:["Can be provided",{as:"objects",or:"arrays"}]},c=void 0,d={id:"Readings/advanced-state-management/6.3",title:"6.3 - Combining Reducers and Context",description:"Reducers let you consolidate a component\u2019s state update logic. Context lets you pass information deep down to other components. You can combine reducers and context together to manage state of a complex screen.",source:"@site/docs/Readings/6-advanced-state-management/6.3.md",sourceDirName:"Readings/6-advanced-state-management",slug:"/Readings/advanced-state-management/6.3",permalink:"/docs/Readings/advanced-state-management/6.3",draft:!1,unlisted:!1,editUrl:"https://github.com/CS61D/website/tree/main/docs/Readings/6-advanced-state-management/6.3.md",tags:[],version:"current",frontMatter:{title:"6.3 - Combining Reducers and Context",metadata:["Can be provided",{as:"objects",or:"arrays"}]},sidebar:"tutorialSidebar",previous:{title:"6.2 - Passing Data Deeply with Context",permalink:"/docs/Readings/advanced-state-management/6.2"},next:{title:"6.4 - Custom Hooks",permalink:"/docs/Readings/advanced-state-management/6.4"}},l={},u=[{value:"Combining a reducer with context",id:"combining-a-reducer-with-context",level:3},{value:"Step 1: Create the context",id:"step-1-create-the-context",level:3},{value:"Step 2: Put state and dispatch into context",id:"step-2-put-state-and-dispatch-into-context",level:3},{value:"Step 3: Use context anywhere in the tree",id:"step-3-use-context-anywhere-in-the-tree",level:3},{value:"Moving all wiring into a single file",id:"moving-all-wiring-into-a-single-file",level:3},{value:"Recap",id:"recap",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Reducers let you consolidate a component\u2019s state update logic. Context lets you pass information deep down to other components. You can combine reducers and context together to manage state of a complex screen."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"combining-a-reducer-with-context",children:"Combining a reducer with context"}),"\n",(0,s.jsxs)(n.p,{children:["In this example from the ",(0,s.jsx)(n.a,{href:"/docs/Readings/advanced-state-management/6.1",children:"introduction to reducers"}),", the state is managed by a reducer. The reducer function contains all of the state update logic and is declared at the bottom of this file:"]}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(r.A,{value:"App.js",label:"App.js",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { useReducer } from 'react';\nimport AddTask from './AddTask.js';\nimport TaskList from './TaskList.js';\n\nexport default function TaskApp() {\n  const [tasks, dispatch] = useReducer(\n    tasksReducer,\n    initialTasks\n  );\n\n  function handleAddTask(text) {\n    dispatch({\n      type: 'added',\n      id: nextId++,\n      text: text,\n    });\n  }\n\n  function handleChangeTask(task) {\n    dispatch({\n      type: 'changed',\n      task: task\n    });\n  }\n\n  function handleDeleteTask(taskId) {\n    dispatch({\n      type: 'deleted',\n      id: taskId\n    });\n  }\n\n  return (\n    <>\n      <h1>Day off in Kyoto</h1>\n      <AddTask\n        onAddTask={handleAddTask}\n      />\n      <TaskList\n        tasks={tasks}\n        onChangeTask={handleChangeTask}\n        onDeleteTask={handleDeleteTask}\n      />\n    </>\n  );\n}\n\nfunction tasksReducer(tasks, action) {\n  switch (action.type) {\n    case 'added': {\n      return [...tasks, {\n        id: action.id,\n        text: action.text,\n        done: false\n      }];\n    }\n    case 'changed': {\n      return tasks.map(t => {\n        if (t.id === action.task.id) {\n          return action.task;\n        } else {\n          return t;\n        }\n      });\n    }\n    case 'deleted': {\n      return tasks.filter(t => t.id !== action.id);\n    }\n    default: {\n      throw Error('Unknown action: ' + action.type);\n    }\n  }\n}\n\nlet nextId = 3;\nconst initialTasks = [\n  { id: 0, text: 'Philosopher\u2019s Path', done: true },\n  { id: 1, text: 'Visit the temple', done: false },\n  { id: 2, text: 'Drink matcha', done: false }\n];\n"})})}),(0,s.jsx)(r.A,{value:"AddTask.js",label:"AddTask.js",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { useState } from 'react';\n\nexport default function AddTask({ onAddTask }) {\n  const [text, setText] = useState('');\n  return (\n    <>\n      <input\n        placeholder=\"Add task\"\n        value={text}\n        onChange={e => setText(e.target.value)}\n      />\n      <button onClick={() => {\n        setText('');\n        onAddTask(text);\n      }}>Add</button>\n    </>\n  )\n}\n"})})}),(0,s.jsx)(r.A,{value:"TaskList.js",label:"TaskList.js",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { useState } from 'react';\n\nexport default function TaskList({\n  tasks,\n  onChangeTask,\n  onDeleteTask\n}) {\n  return (\n    <ul>\n      {tasks.map(task => (\n        <li key={task.id}>\n          <Task\n            task={task}\n            onChange={onChangeTask}\n            onDelete={onDeleteTask}\n          />\n        </li>\n      ))}\n    </ul>\n  );\n}\n\nfunction Task({ task, onChange, onDelete }) {\n  const [isEditing, setIsEditing] = useState(false);\n  let taskContent;\n  if (isEditing) {\n    taskContent = (\n      <>\n        <input\n          value={task.text}\n          onChange={e => {\n            onChange({\n              ...task,\n              text: e.target.value\n            });\n          }} />\n        <button onClick={() => setIsEditing(false)}>\n          Save\n        </button>\n      </>\n    );\n  } else {\n    taskContent = (\n      <>\n        {task.text}\n        <button onClick={() => setIsEditing(true)}>\n          Edit\n        </button>\n      </>\n    );\n  }\n  return (\n    <label>\n      <input\n        type=\"checkbox\"\n        checked={task.done}\n        onChange={e => {\n          onChange({\n            ...task,\n            done: e.target.checked\n          });\n        }}\n      />\n      {taskContent}\n      <button onClick={() => onDelete(task.id)}>\n        Delete\n      </button>\n    </label>\n  );\n}\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["But currently, the ",(0,s.jsx)(n.code,{children:"tasks"})," state and the ",(0,s.jsx)(n.code,{children:"dispatch"})," function are only available in the top-level ",(0,s.jsx)(n.code,{children:"TaskApp"})," component. To let other components read the list of tasks or change it, you have to explicitly pass down the current state and the event handlers that change it ",(0,s.jsx)(n.a,{href:"/docs/Readings/basic-react/4.5",children:"as props"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, ",(0,s.jsx)(n.code,{children:"TaskApp"})," passes a list of tasks and the event handlers to ",(0,s.jsx)(n.code,{children:"TaskList"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="App.js"',children:"<TaskList\n  tasks={tasks}\n  onChangeTask={handleChangeTask}\n  onDeleteTask={handleDeleteTask}\n/>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["And ",(0,s.jsx)(n.code,{children:"TaskList"})," passes the event handlers to ",(0,s.jsx)(n.code,{children:"Task"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="TaskList.js"',children:"<Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As an alternative to passing them through props, you might want to put both the ",(0,s.jsx)(n.code,{children:"tasks"})," state and the ",(0,s.jsx)(n.code,{children:"dispatch"})," function ",(0,s.jsx)(n.a,{href:"/docs/Readings/advanced-state-management/6.2",children:"into context"}),". This way, any component below ",(0,s.jsx)(n.code,{children:"TaskApp"})," in the tree can read the tasks and dispatch actions without the repetitive \u201cprop drilling\u201d."]}),"\n",(0,s.jsx)(n.p,{children:"Here is how you can combine a reducer with context:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create the context."}),"\n",(0,s.jsx)(n.li,{children:"Put state and dispatch into context."}),"\n",(0,s.jsx)(n.li,{children:"Use context anywhere in the tree."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"step-1-create-the-context",children:"Step 1: Create the context"}),"\n",(0,s.jsxs)(n.p,{children:["Remember that the ",(0,s.jsx)(n.code,{children:"useReducer"})," Hook returns the current ",(0,s.jsx)(n.code,{children:"tasks"})," and the ",(0,s.jsx)(n.code,{children:"dispatch"})," function that lets you update them:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);\n"})}),"\n",(0,s.jsx)(n.p,{children:"To pass them down the tree, you will create two separate contexts:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"TasksContext"})," provides the current list of tasks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"TasksDispatchContext"})," provides the function that lets components dispatch actions."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Export them from a separate file (here named ",(0,s.jsx)(n.code,{children:"TasksContext.js"}),") so that you can later import them from other files:"]}),"\n",(0,s.jsx)(o.A,{children:(0,s.jsx)(r.A,{value:"TasksContext.js",label:"TasksContext.js",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { createContext } from 'react';\n\nexport const TasksContext = createContext(null);\nexport const TasksDispatchContext = createContext(null);\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["Here, you\u2019re passing null as the default value to both contexts. The actual values will be provided by the ",(0,s.jsx)(n.code,{children:"TaskApp"})," component."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"step-2-put-state-and-dispatch-into-context",children:"Step 2: Put state and dispatch into context"}),"\n",(0,s.jsxs)(n.p,{children:["Now you can import both contexts in your TaskApp component. Take the ",(0,s.jsx)(n.code,{children:"tasks"})," and ",(0,s.jsx)(n.code,{children:"dispatch"})," returned by ",(0,s.jsx)(n.code,{children:"useReducer()"})," and ",(0,s.jsx)(n.strong,{children:"provide"})," them to any of ",(0,s.jsx)(n.code,{children:"TaskApp"}),"'s children components:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="App.js"',children:"import { TasksContext, TasksDispatchContext } from './TasksContext.js';\n\nexport default function TaskApp() {\n const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);\n // ...\n   <TasksContext.Provider value={tasks}>\n\n     <TasksDispatchContext.Provider value={dispatch}>\n       ...\n     </TasksDispatchContext.Provider>\n   </TasksContext.Provider>\n );\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"For now, you pass the information both via props and in context. In the next step, you will remove prop passing."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"step-3-use-context-anywhere-in-the-tree",children:"Step 3: Use context anywhere in the tree"}),"\n",(0,s.jsx)(n.p,{children:"Now you don\u2019t need to pass the list of tasks or the event handlers down the tree:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="App.js"',children:"export default function TaskApp() {\n  const [tasks, dispatch] = useReducer(\n    tasksReducer,\n    initialTasks\n  );\n\n  // No longer need to list out individual event handlers here! (handleAddTask, handleDeleteTask, etc.)\n\n  return (\n    <TasksContext.Provider value={tasks}>\n      <TasksDispatchContext.Provider value={dispatch}>\n        <h1>Day off in Kyoto</h1>\n        <AddTask />   // no more prop passing!\n        <TaskList />\n      </TasksDispatchContext.Provider>\n    </TasksContext.Provider>\n  );\n\n  function tasksReducer(tasks, action) {\n  // ...\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now, any component that needs the task list can read it from the TaskContext:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"export default function TaskList() {\n  const tasks = useContext(TasksContext);\n  // ...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To update the task list, any component can read the ",(0,s.jsx)(n.code,{children:"dispatch"})," function from context and call it:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"export default function AddTask() {\n const [text, setText] = useState('');\n const dispatch = useContext(TasksDispatchContext);\n // ...\n return (\n   // ...\n   <button onClick={() => {\n     setText('');\n     dispatch({\n       type: 'added',\n       id: nextId++,\n       text: text,\n     });\n   }}>Add</button>\n   // ...\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"moving-all-wiring-into-a-single-file",children:"Moving all wiring into a single file"}),"\n",(0,s.jsxs)(n.p,{children:["You don't have to do this, but you can move the ",(0,s.jsx)(n.code,{children:"tasksReducer"})," function in ",(0,s.jsx)(n.code,{children:"App.js"})," to the relatively empty ",(0,s.jsx)(n.code,{children:"TasksContext.js"})," file. This helps declutter ",(0,s.jsx)(n.code,{children:"App.js"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can also consolidate the ",(0,s.jsx)(n.code,{children:"Provider"})," code into a new component called ",(0,s.jsx)(n.code,{children:"TasksProvider"})," and put it into ",(0,s.jsx)(n.code,{children:"TasksContext.js"})," also."]}),"\n",(0,s.jsx)(n.p,{children:"The final result looks like this:"}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(r.A,{value:"App.js",label:"App.js",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import AddTask from './AddTask.js';\nimport TaskList from './TaskList.js';\nimport { TasksProvider } from './TasksContext.js';\n\nexport default function TaskApp() {\n  return (\n    <TasksProvider>\n      <h1>Day off in Kyoto</h1>\n      <AddTask />\n      <TaskList />\n    </TasksProvider>\n  );\n}\n"})})}),(0,s.jsx)(r.A,{value:"TasksContext.js",label:"TasksContext.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { createContext, useReducer } from 'react';\n\nexport const TasksContext = createContext(null);\nexport const TasksDispatchContext = createContext(null);\n\nexport function TasksProvider({ children }) {\n  const [tasks, dispatch] = useReducer(\n    tasksReducer,\n    initialTasks\n  );\n\n  return (\n    <TasksContext.Provider value={tasks}>\n      <TasksDispatchContext.Provider value={dispatch}>\n        {children}\n      </TasksDispatchContext.Provider>\n    </TasksContext.Provider>\n  );\n}\n\nfunction tasksReducer(tasks, action) {\n  switch (action.type) {\n    case 'added': {\n      return [...tasks, {\n        id: action.id,\n        text: action.text,\n        done: false\n      }];\n    }\n    case 'changed': {\n      return tasks.map(t => {\n        if (t.id === action.task.id) {\n          return action.task;\n        } else {\n          return t;\n        }\n      });\n    }\n    case 'deleted': {\n      return tasks.filter(t => t.id !== action.id);\n    }\n    default: {\n      throw Error('Unknown action: ' + action.type);\n    }\n  }\n}\n\nconst initialTasks = [\n  { id: 0, text: 'Philosopher\u2019s Path', done: true },\n  { id: 1, text: 'Visit the temple', done: false },\n  { id: 2, text: 'Drink matcha', done: false }\n];\n"})})}),(0,s.jsx)(r.A,{value:"AddTask.js",label:"AddTask.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { useState, useContext } from 'react';\nimport { TasksDispatchContext } from './TasksContext.js';\n\nexport default function AddTask() {\n  const [text, setText] = useState('');\n  const dispatch = useContext(TasksDispatchContext);\n  return (\n    <>\n      <input\n        placeholder=\"Add task\"\n        value={text}\n        onChange={e => setText(e.target.value)}\n      />\n      <button onClick={() => {\n        setText('');\n        dispatch({\n          type: 'added',\n          id: nextId++,\n          text: text,\n        });\n      }}>Add</button>\n    </>\n  );\n}\n\nlet nextId = 3;\n"})})}),(0,s.jsx)(r.A,{value:"TaskList.js",label:"TaskList.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { useState, useContext } from 'react';\nimport { TasksContext, TasksDispatchContext } from './TasksContext.js';\n\nexport default function TaskList() {\n  const tasks = useContext(TasksContext);\n  return (\n    <ul>\n      {tasks.map(task => (\n        <li key={task.id}>\n          <Task task={task} />\n        </li>\n      ))}\n    </ul>\n  );\n}\n\nfunction Task({ task }) {\n  const [isEditing, setIsEditing] = useState(false);\n  const dispatch = useContext(TasksDispatchContext);\n  let taskContent;\n  if (isEditing) {\n    taskContent = (\n      <>\n        <input\n          value={task.text}\n          onChange={e => {\n            dispatch({\n              type: 'changed',\n              task: {\n                ...task,\n                text: e.target.value\n              }\n            });\n          }} />\n        <button onClick={() => setIsEditing(false)}>\n          Save\n        </button>\n      </>\n    );\n  } else {\n    taskContent = (\n      <>\n        {task.text}\n        <button onClick={() => setIsEditing(true)}>\n          Edit\n        </button>\n      </>\n    );\n  }\n  return (\n    <label>\n      <input\n        type=\"checkbox\"\n        checked={task.done}\n        onChange={e => {\n          dispatch({\n            type: 'changed',\n            task: {\n              ...task,\n              done: e.target.checked\n            }\n          });\n        }}\n      />\n      {taskContent}\n      <button onClick={() => {\n        dispatch({\n          type: 'deleted',\n          id: task.id\n        });\n      }}>\n        Delete\n      </button>\n    </label>\n  );\n}\n"})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"recap",children:"Recap"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You can combine reducer with context to let any component read and update state above it."}),"\n",(0,s.jsxs)(n.li,{children:["To provide state and the dispatch function to components below:","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create two contexts (for state and for dispatch functions)."}),"\n",(0,s.jsx)(n.li,{children:"Provide both contexts from the component that uses the reducer."}),"\n",(0,s.jsx)(n.li,{children:"Use either context from components that need to read them."}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(6540);const a={},o=s.createContext(a);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}},9365:(e,n,t)=>{t.d(n,{A:()=>r});t(6540);var s=t(4164);const a={tabItem:"tabItem_Ymn6"};var o=t(4848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,r),hidden:t,children:n})}}}]);