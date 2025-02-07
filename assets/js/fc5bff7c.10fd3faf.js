"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4201],{7859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=t(4848),i=t(8453);const o={title:"5.2 - Responding to Events",metadata:["Can be provided",{as:"objects",or:"arrays"}]},a=void 0,r={id:"Readings/react-state/5.2",title:"5.2 - Responding to Events",description:"https://react.dev/learn/responding-to-events",source:"@site/docs/Readings/5-react-state/5.2.md",sourceDirName:"Readings/5-react-state",slug:"/Readings/react-state/5.2",permalink:"/docs/Readings/react-state/5.2",draft:!1,unlisted:!1,editUrl:"https://github.com/CS61D/website/tree/main/docs/Readings/5-react-state/5.2.md",tags:[],version:"current",frontMatter:{title:"5.2 - Responding to Events",metadata:["Can be provided",{as:"objects",or:"arrays"}]},sidebar:"tutorialSidebar",previous:{title:"5.1 - Conditional Rendering",permalink:"/docs/Readings/react-state/5.1"},next:{title:"5.3 - State and Component Memory",permalink:"/docs/Readings/react-state/5.3"}},l={},d=[{value:"Adding event handlers",id:"adding-event-handlers",level:3},{value:"Reading props in event handlers",id:"reading-props-in-event-handlers",level:3},{value:"Passing event handlers as props",id:"passing-event-handlers-as-props",level:3},{value:"Preventing default behavior",id:"preventing-default-behavior",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.a,{href:"https://react.dev/learn/responding-to-events",rel:"nofollow",children:["https://react.dev/learn/responding-to-events",(0,s.jsx)(n.span,{children:(0,s.jsx)(n.span,{className:"glossary-icon",children:" \u2197"})})]})}),"\n",(0,s.jsx)(n.p,{children:"React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on. Event handlers will also catch events from any children your component might have."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"adding-event-handlers",children:"Adding event handlers"}),"\n",(0,s.jsx)(n.p,{children:"To add an event handler, you will first define a function and then pass it as a prop to the appropriate JSX tag. For example, here is a button that doesn\u2019t do anything yet:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"export default function Button() {\n  return <button>I don't do anything</button>;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can make it show a message when a user clicks by following these three steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Declare a function called ",(0,s.jsx)(n.code,{children:"handleClick"})," inside your Button component."]}),"\n",(0,s.jsx)(n.li,{children:"Implement the logic inside that function (use alert to show the message)."}),"\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"onClick={handleClick}"})," to the ",(0,s.jsx)(n.code,{children:"<button>"})," JSX."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'export default function Button() {\n  function handleClick() {\n    alert("You clicked me!");\n  }\n\n  return <button onClick={handleClick}>Click me</button>;\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You defined the ",(0,s.jsx)(n.code,{children:"handleClick"})," function and then passed it as a prop to ",(0,s.jsx)(n.code,{children:"<button>"}),". ",(0,s.jsx)(n.code,{children:"handleClick"})," is an ",(0,s.jsx)(n.strong,{children:"event handler"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Event handler functions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Are usually defined inside your components."}),"\n",(0,s.jsxs)(n.li,{children:["Have names that start with ",(0,s.jsx)(n.code,{children:"handle"}),", followed by the name of the event.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You\u2019ll often see ",(0,s.jsx)(n.code,{children:"onClick={handleClick}"}),", ",(0,s.jsx)(n.code,{children:"onMouseEnter={handleMouseEnter}"}),", and so on."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, you can more concisely define an event handler with arrow function in the JSX, which is convenient for short functions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<button onClick={() => {\n  alert('You clicked me!');\n}}>\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"Functions Passed to Event Handlers Must Be Passed, Not Called"}),(0,s.jsx)(n.p,{children:"For example:"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"passing a function (correct)"}),(0,s.jsx)(n.th,{children:"calling a function (incorrect)"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<button onClick={handleClick}>"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<button onClick={handleClick()}>"})})]})})]}),(0,s.jsxs)(n.p,{children:["In the first example, the ",(0,s.jsx)(n.code,{children:"handleClick"})," function is passed as an ",(0,s.jsx)(n.code,{children:"onClick"})," event handler. This tells React to remember it and only call your function when the user clicks the button."]}),(0,s.jsxs)(n.p,{children:["In the second example, the ",(0,s.jsx)(n.code,{children:"()"})," at the end of ",(0,s.jsx)(n.code,{children:"handleClick()"})," fires the function immediately during rendering, without any clicks. This is because JavaScript inside the JSX ",(0,s.jsx)(n.code,{children:"{ }"})," executes right away."]}),(0,s.jsx)(n.p,{children:"When you write code inline, the same pitfall presents itself in a different way:"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"passing a function (correct)"}),(0,s.jsx)(n.th,{children:"calling a function (incorrect)"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<button onClick={() => alert('...')}>"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<button onClick={alert('...')}>"})})]})})]}),(0,s.jsx)(n.p,{children:"In both cases, what you want to pass is a function:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"<button onClick={handleClick}> passes the handleClick function.\n<button onClick={() => alert('...')}> passes the () => alert('...') function.\n"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"reading-props-in-event-handlers",children:"Reading props in event handlers"}),"\n",(0,s.jsx)(n.p,{children:"Because event handlers are declared inside of a component, they have access to the component\u2019s props. Here is a button that, when clicked, shows an alert with its message prop:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'function AlertButton({ message, children }) {\n  return <button onClick={() => alert(message)}>{children}</button>;\n}\n\nexport default function Toolbar() {\n  return (\n    <div>\n      <AlertButton message="Playing!">Play Movie</AlertButton>\n      <AlertButton message="Uploading!">Upload Image</AlertButton>\n    </div>\n  );\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"This lets these two buttons show different messages."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"passing-event-handlers-as-props",children:"Passing event handlers as props"}),"\n",(0,s.jsx)(n.p,{children:"Often you\u2019ll want the parent component to specify a child\u2019s event handler."}),"\n",(0,s.jsxs)(n.p,{children:["Consider buttons: depending on where you\u2019re using a ",(0,s.jsx)(n.code,{children:"Button"})," component, you might want to execute a different function\u2014perhaps one plays a movie and another uploads an image."]}),"\n",(0,s.jsx)(n.p,{children:"To do this, pass a prop the component receives from its parent as the event handler like so:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'function Button({ onClick, children }) {\n  return <button onClick={onClick}>{children}</button>;\n}\n\nfunction PlayButton({ movieName }) {\n  function handlePlayClick() {\n    alert(`Playing ${movieName}!`);\n  }\n\n  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;\n}\n\nexport default function Toolbar() {\n  return (\n    <div>\n      <PlayButton movieName="Kiki\'s Delivery Service" />\n    </div>\n  );\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Here, the ",(0,s.jsx)(n.code,{children:"Toolbar"})," component renders a ",(0,s.jsx)(n.code,{children:"PlayButton"})," :"]}),"\n",(0,s.jsxs)(n.p,{children:["PlayButton passes ",(0,s.jsx)(n.code,{children:"handlePlayClick"})," as the ",(0,s.jsx)(n.code,{children:"onClick"})," prop to the ",(0,s.jsx)(n.code,{children:"Button"})," inside."]}),"\n",(0,s.jsxs)(n.p,{children:["Finally, your Button component accepts a prop called onClick. It passes that prop directly to the built-in browser ",(0,s.jsx)(n.code,{children:"<button>"})," with ",(0,s.jsx)(n.code,{children:"onClick={onClick}"}),". This tells React to call the passed function on click."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Make sure that you use the appropriate HTML tags for your event handlers. For example, to handle clicks, use ",(0,s.jsx)(n.code,{children:"<button onClick={handleClick}>"})," instead of ",(0,s.jsx)(n.code,{children:"<div onClick={handleClick}>"}),". Using a real browser ",(0,s.jsx)(n.code,{children:"<button> "}),"enables built-in browser behaviors like keyboard navigation."]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"preventing-default-behavior",children:"Preventing default behavior"}),"\n",(0,s.jsxs)(n.p,{children:["Some browser events have default behavior associated with them. For example, a ",(0,s.jsx)(n.code,{children:"<form>"})," submit event, which happens when a button inside of it is clicked, will reload the whole page by default."]}),"\n",(0,s.jsxs)(n.p,{children:["You can call ",(0,s.jsx)(n.code,{children:"e.preventDefault()"})," on the event object to stop this from happening:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'export default function Signup() {\n  return (\n    <form\n      onSubmit={(e) => {\n        // prevents default behavior of the page reloading onSubmit\n        e.preventDefault();\n        alert("Submitting!");\n      }}\n    >\n      <input />\n      <button>Send</button>\n    </form>\n  );\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Can event handlers have side effects?\nAbsolutely! Event handlers are the best place for side effects."}),"\n",(0,s.jsx)(n.p,{children:"Unlike rendering functions, event handlers don\u2019t need to be pure, so it\u2019s a great place to change something\u2014for example, change an input\u2019s value in response to typing, or change a list in response to a button press."}),"\n",(0,s.jsx)(n.p,{children:"However, in order to change some information, you first need some way to store it. In React, this is done by using state, a component\u2019s memory. You will learn all about it on the next page."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);