"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8711],{1470:(e,n,r)=>{r.d(n,{A:()=>S});var t=r(6540),s=r(4164),o=r(3104),a=r(6347),i=r(205),l=r(7485),d=r(1682),c=r(9466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,o=h(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[d,u]=p({queryString:r,groupId:s}),[f,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,c.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:s}),j=(()=>{const e=d??f;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{j&&l(j)}),[j]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,o]),tabValues:o}}var x=r(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function b(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),c=e=>{const n=e.currentTarget,r=l.indexOf(n),s=i[r].value;s!==t&&(d(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...o,className:(0,s.A)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function S(e){const n=(0,x.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(6540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}},9365:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var t=r(4164);const s={tabItem:"tabItem_Ymn6"};var o=r(4848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:r,children:n})}},9671:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=r(4848),s=r(8453);r(1470),r(9365);const o={title:"7.2 - React Hook Form",metadata:["Can be provided",{as:"objects",or:"arrays"}]},a=void 0,i={id:"Readings/forms-and-validation/7.2",title:"7.2 - React Hook Form",description:"React Hook Form is a library for handling forms in React. It's useful useForm custom Hook handles form state and validation. React Hook Form integrates well with TypeScript.",source:"@site/docs/Readings/7-forms-and-validation/7.2.md",sourceDirName:"Readings/7-forms-and-validation",slug:"/Readings/forms-and-validation/7.2",permalink:"/docs/Readings/forms-and-validation/7.2",draft:!1,unlisted:!1,editUrl:"https://github.com/CS61D/website/tree/main/docs/Readings/7-forms-and-validation/7.2.md",tags:[],version:"current",frontMatter:{title:"7.2 - React Hook Form",metadata:["Can be provided",{as:"objects",or:"arrays"}]},sidebar:"tutorialSidebar",previous:{title:"7.1 - Introduction to Forms",permalink:"/docs/Readings/forms-and-validation/7.1"},next:{title:"7.3 - Validation with Zod",permalink:"/docs/Readings/forms-and-validation/7.3"}},l={},d=[{value:"Why use React Hook Form?",id:"why-use-react-hook-form",level:3},{value:"The useForm Hook",id:"the-useform-hook",level:3},{value:"handleSubmit",id:"handlesubmit",level:3},{value:"register",id:"register",level:3},{value:"Validation with Register",id:"validation-with-register",level:4},{value:"Example",id:"example",level:5},{value:"Handling and Displaying Error Messages",id:"handling-and-displaying-error-messages",level:3},{value:"Step 1: Access Errors from Form State",id:"step-1-access-errors-from-form-state",level:4},{value:"Step 2: Conditionally Render Error Messages",id:"step-2-conditionally-render-error-messages",level:4},{value:"TypeScript and Typing",id:"typescript-and-typing",level:3},{value:"Step 1: Create a custom Type",id:"step-1-create-a-custom-type",level:4},{value:"Step 2: Pass the custom Type into useForm",id:"step-2-pass-the-custom-type-into-useform",level:4},{value:"Step 3: Import the SubmitHandler Type",id:"step-3-import-the-submithandler-type",level:4},{value:"Overall Reference",id:"overall-reference",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["React Hook Form is a library for handling forms in React. It's useful ",(0,t.jsx)(n.code,{children:"useForm"})," custom Hook handles form state and validation. React Hook Form integrates well with TypeScript."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"why-use-react-hook-form",children:"Why use React Hook Form?"}),"\n",(0,t.jsx)(n.p,{children:"React Hook Form is a library for handling forms in React. It simplifies things like:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Validation"})," - Developers can add validation to sure user input data is correctly formatted."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Handling form state"})," - Rather than manually handling the state of each individual field, with React Hook Forms the entire form shares one state."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Incorportating other forms libraries"})," - Other libraries, such as those for validation like Zod, can be smoothly integrated with React Hook Forms."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"React Hook Form also provides performance improvements by having smarter and more optimized re-rendering."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"the-useform-hook",children:"The useForm Hook"}),"\n",(0,t.jsxs)(n.p,{children:["React Hook Form's core functionality comes from its ",(0,t.jsx)(n.code,{children:"useForm"})," custom Hook. Recall that a custom Hook is basically just a function."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'import { useForm } from "react-hook-form";\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"useForm"})," returns a bunch of props. (See the ",(0,t.jsxs)(n.a,{href:"https://react-hook-form.com/docs/useform",rel:"nofollow",children:["useForm documentation",(0,t.jsx)(n.span,{children:(0,t.jsx)(n.span,{className:"glossary-icon",children:" \u2197"})})]})," for the full list)."]}),"\n",(0,t.jsxs)(n.p,{children:["For now, we'll focus on the ",(0,t.jsx)(n.code,{children:"handleSubmit"})," and ",(0,t.jsx)(n.code,{children:"register"})," props:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'import { useForm } from "react-hook-form";\n\nexport default function App() {\n  const { register, handleSubmit } = useForm();\n\n  return <form>. . .</form>;\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"handlesubmit",children:"handleSubmit"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"handleSubmit"})," is a function that takes in a function. The passed-in function is what will happen when the form is submitted and deemed valid. For example, you could pass in a simple ",(0,t.jsx)(n.code,{children:"onSubmit"})," function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'import { useForm } from "react-hook-form";\n\nexport default function App() {\n  const { register, handleSubmit } = useForm();\n  const onSubmit = (data) => console.log(data);\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      . . .<button type="submit">Submit</button>\n    </form>\n  );\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"handleSubmit"})," will:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Validate"})," the data when the form is submitted (more on this later)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Call"})," our ",(0,t.jsx)(n.code,{children:"onSubmit"})," function, only after the validation passes."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Finally, we pass in ",(0,t.jsx)(n.code,{children:"handleSubmit"})," to be the form\u2019s ",(0,t.jsx)(n.code,{children:"onSubmit"})," prop. This just says that when the form is submitted, call ",(0,t.jsx)(n.code,{children:"handleSubmit"}),". As stated before, ",(0,t.jsx)(n.code,{children:"handleSubmit"})," will then check if the data is valid, then call our ",(0,t.jsx)(n.code,{children:"onSubmit"})," function."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"register",children:"register"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"register"})," is a function that binds an input field to the form state:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'import { useForm } from "react-hook-form"\n\nexport default function App() {\n const { register, handleSubmit } = useForm()\n //...\n return (\n   <form onSubmit={ handleSubmit(onSubmit) >\n     <input type="text" {...register("name")} />\n\n     <select {...register("category")}>\n       <option value="">Select...</option>\n       <option value="A">Category A</option>\n       <option value="B">Category B</option>\n    </select>\n\n     <button type="submit">Submit</button>\n   </form>\n )\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"validation-with-register",children:"Validation with Register"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"register"})," also lets you apply validation rules, which will be checked by ",(0,t.jsx)(n.code,{children:"handleSubmit"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Some ",(0,t.jsx)(n.code,{children:"register"})," validation rules include:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"required"}),": The field is required."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"min/maxLength"}),": The field must be at least/at most a certain number of characters."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pattern"}),": The field must adhere to a certain regex patter."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"validate"}),": The field must return true when passed into a given function, which returns true if valid, and otherwise returns an error message."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["See the full list of validation rules you can provide to ",(0,t.jsx)(n.code,{children:"register"})," in ",(0,t.jsxs)(n.a,{href:"https://react-hook-form.com/docs/useform/register",rel:"nofollow",children:["the documentation",(0,t.jsx)(n.span,{children:(0,t.jsx)(n.span,{className:"glossary-icon",children:" \u2197"})})]}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["These rules are checked by ",(0,t.jsx)(n.code,{children:"handleSubmit"})," later when form is submitted."]}),"\n",(0,t.jsx)(n.h5,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"This example also shows how to pass in an error message. Displaying error messages will be discussed in the next section."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'<input\n  type="text"\n  {...register("username", {\n    required: "Username is required",\n    minLength: {\n      value: 6,\n      message: "Username must have >=6 characters",\n    },\n    pattern: {\n      value: "/^[a-zA-Z]",\n      message: "Username must start with a letter",\n    },\n    validate: (value) => {\n      if (value.contains(" ")) {\n        return "Username cannot contain spaces";\n      }\n      return true;\n    },\n  })}\n/>\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"handling-and-displaying-error-messages",children:"Handling and Displaying Error Messages"}),"\n",(0,t.jsxs)(n.p,{children:["Say the form is submitted, but the data doesn't pass validation. ",(0,t.jsx)(n.code,{children:"handleSubmit"})," will store any errors in the form state."]}),"\n",(0,t.jsx)(n.p,{children:"To display error messages, you will:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Get"})," ",(0,t.jsx)(n.code,{children:"errors"})," from ",(0,t.jsx)(n.code,{children:"formState"})," from ",(0,t.jsx)(n.code,{children:"useForm"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Use conditional rendering"})," to display an error message."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"step-1-access-errors-from-form-state",children:"Step 1: Access Errors from Form State"}),"\n",(0,t.jsxs)(n.p,{children:["In addition to ",(0,t.jsx)(n.code,{children:"register"})," and ",(0,t.jsx)(n.code,{children:"handleSubmit"}),", the ",(0,t.jsx)(n.code,{children:"useForm"})," custom Hook can also return a ",(0,t.jsx)(n.code,{children:"formState"})," prop. This is similar to how the built-in ",(0,t.jsx)(n.code,{children:"useState"})," Hook returns a state variable as one of its props. ",(0,t.jsx)(n.code,{children:"formState"})," is an object that covers the state of the entire form, including all fields in it, and contains properties that track information on the form. (See ",(0,t.jsxs)(n.a,{href:"https://react-hook-form.com/docs/useform/formstate",rel:"nofollow",children:["the documentation",(0,t.jsx)(n.span,{children:(0,t.jsx)(n.span,{className:"glossary-icon",children:" \u2197"})})]})," for a full list of ",(0,t.jsx)(n.code,{children:"formState"}),"'s properties)."]}),"\n",(0,t.jsxs)(n.p,{children:["One of ",(0,t.jsx)(n.code,{children:"formState"}),"'s properties is ",(0,t.jsx)(n.code,{children:"errors"}),". ",(0,t.jsx)(n.code,{children:"errors"})," is an object that contains the errors for each form field."]}),"\n",(0,t.jsxs)(n.p,{children:["Access ",(0,t.jsx)(n.code,{children:"errors"})," from ",(0,t.jsx)(n.code,{children:"formState"})," from ",(0,t.jsx)(n.code,{children:"useForm"})," like so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'import { useForm } from "react-hook-form"\n\nexport default function App() {\n const {\n   register,\n   handleSubmit,\n   formState: { errors }\n } = useForm()\n ...\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"step-2-conditionally-render-error-messages",children:"Step 2: Conditionally Render Error Messages"}),"\n",(0,t.jsx)(n.p,{children:"Next, use conditional rendering to display an error message. Here, when the form is submitted with a blank username, \u201cUsername is required\u201d is displayed under where you type in a username (after the form is submitted):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'import { useForm } from "react-hook-form"\n\nexport default function App() {\n const {\n   register,\n   handleSubmit,\n   formState: { errors }\n } = useForm()\n ...\n return (\n   <form ...>\n     <input type="text" {...register("username", {\n       required: "Username is required"\n     })} />\n     {errors.username && (\n       <p>{errors.username.message</p>\n     )}\n   </form>\n )\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The below snippet conditionally renders the error message by checking if ",(0,t.jsx)(n.code,{children:"errors.registered_name"})," is present (i.e. not ",(0,t.jsx)(n.code,{children:"null"}),", ",(0,t.jsx)(n.code,{children:"undefined"}),", or any other falsy value). If so, then the expression evaluates to the second operand, which is the JSX element containing our error message. This element is then rendered."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"{\n  errors.registered_name && <>{errors.registered_name.message}</>;\n}\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"typescript-and-typing",children:"TypeScript and Typing"}),"\n",(0,t.jsx)(n.p,{children:"TypeScript meshes well with React Hook Form by standardizing our form data and making sure inputted data conforms to expected typing. To add typing to our form with TypeScript, make the following simple changes."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"step-1-create-a-custom-type",children:"Step 1: Create a custom Type"}),"\n",(0,t.jsx)(n.p,{children:"The custom Type should basically list out all input fields in your form and their type."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"type Inputs = {\n  name: string;\n  pet: string;\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here, we named the custom Type ",(0,t.jsx)(n.code,{children:"Inputs"}),". It contains two properties, ",(0,t.jsx)(n.code,{children:"name"})," and ",(0,t.jsx)(n.code,{children:"pet"}),", both of which are ",(0,t.jsx)(n.code,{children:"string"}),". ",(0,t.jsx)(n.code,{children:"name"})," might"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"step-2-pass-the-custom-type-into-useform",children:"Step 2: Pass the custom Type into useForm"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"useForm"})," Hook is a generic function. It can accept a type argument that defines the shape of the form's data."]}),"\n",(0,t.jsxs)(n.p,{children:["Pass in the custom Type to ",(0,t.jsx)(n.code,{children:"useForm"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"type Inputs = {\n name: string\n pet: string\n}\n\nexport default function App() {\n const {\n   register,\n   handleSubmit,\n   formState: { errors },\n } = useForm<Inputs>()\n\n ...\n}\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"step-3-import-the-submithandler-type",children:"Step 3: Import the SubmitHandler Type"}),"\n",(0,t.jsxs)(n.p,{children:["React Hook Form has a custom type called ",(0,t.jsx)(n.code,{children:"SubmitHandler"}),", which is used to define the type of the function that will handle form submissinos."]}),"\n",(0,t.jsxs)(n.p,{children:["Import the ",(0,t.jsx)(n.code,{children:"SubmitHandler"})," type from React Hook Form and apply it to the function passed into handeSubmit. Based on our old example, we'll apply this type to the simple ",(0,t.jsx)(n.code,{children:"onSubmit"})," function we wrote:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { useForm, SubmitHandler } from "react-hook-form"\n\ntype Inputs = {\n name: string\n pet: string\n}\n\nexport default function App() {\n const {\n   register,\n   handleSubmit,\n   formState: { errors },\n } = useForm<Inputs>()\n\n const onSubmit: SubmitHandler<Inputs> = (data) => {\n   console.log(data)\n }\n\n ...\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We also pass in our custom ",(0,t.jsx)(n.code,{children:"Inputs"})," type to ",(0,t.jsx)(n.code,{children:"SubmitHandler"}),". This ensures that the ",(0,t.jsx)(n.code,{children:"onSubmit"})," function receives form data that matches the ",(0,t.jsx)(n.code,{children:"Input"})," type we defined."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"overall-reference",children:"Overall Reference"}),"\n",(0,t.jsx)(n.p,{children:"Here is an overall reference:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { useForm, SubmitHandler } from "react-hook-form"\n\ntype Inputs = {\n name: string\n pet: string\n}\n\nexport default function App() {\n const { register, handleSubmit, formState: { errors }} = useForm<Inputs>()\n const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)\n\n return (\n   <form onSubmit={handleSubmit(onSubmit)}>\n     <label htmlFor="name">Name</label>\n     <input type="text" id="name" {...register("name", { required: "Name Required" })} />\n     {errors.name && <p>errors.name.message</p>}\n\n     <label htmlFor="pet">Choose a pet:</label>\n     <select id="pet" {...register("pet")} />\n        <option value="">---Choose an option---</option>\n        <option value="dog">Dog</option>\n        <option value="cat">Cat</option>\n        <option value="hamster">Hamster</option>\n     </select>\n     {errors.pet && <p>errors.pet.message</p>}\n\n     <button type="submit">Submit</button>\n   </form>\n )\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);