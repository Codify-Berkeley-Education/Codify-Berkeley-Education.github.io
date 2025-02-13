"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2776],{5342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var l=n(4848),a=n(8453);n(1470),n(9365);const s={title:"7.1 - Introduction to Forms",metadata:["Can be provided",{as:"objects",or:"arrays"}]},r=void 0,o={id:"Readings/forms-and-validation/7.1",title:"7.1 - Introduction to Forms",description:"Forms are HTML elements that take in user input. Forms hold form elements, such as input, select, or button. We can use them to create useful applications, such as a user sign-up page.",source:"@site/docs/Readings/7-forms-and-validation/7.1.md",sourceDirName:"Readings/7-forms-and-validation",slug:"/Readings/forms-and-validation/7.1",permalink:"/docs/Readings/forms-and-validation/7.1",draft:!1,unlisted:!1,editUrl:"https://github.com/CS61D/website/tree/main/docs/Readings/7-forms-and-validation/7.1.md",tags:[],version:"current",frontMatter:{title:"7.1 - Introduction to Forms",metadata:["Can be provided",{as:"objects",or:"arrays"}]},sidebar:"tutorialSidebar",previous:{title:"Lecture 7: Forms and Validation",permalink:"/docs/Readings/forms-and-validation/"},next:{title:"7.2 - React Hook Form",permalink:"/docs/Readings/forms-and-validation/7.2"}},i={},c=[{value:"What are Forms?",id:"what-are-forms",level:3},{value:"Form Elements",id:"form-elements",level:3},{value:"Input Element",id:"input-element",level:4},{value:"Type Attribute",id:"type-attribute",level:5},{value:"Placeholder Attribute",id:"placeholder-attribute",level:5},{value:"Label Element",id:"label-element",level:4},{value:"Input and Label Examples",id:"input-and-label-examples",level:4},{value:"Text example",id:"text-example",level:5},{value:"Email example (with placeholder)",id:"email-example-with-placeholder",level:5},{value:"Password example",id:"password-example",level:5},{value:"Select Element",id:"select-element",level:4},{value:"Default Option",id:"default-option",level:5},{value:"Button Element",id:"button-element",level:4},{value:"Submission",id:"submission",level:5},{value:"Select and Button example",id:"select-and-button-example",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",h5:"h5",hr:"hr",p:"p",pre:"pre",span:"span",strong:"strong",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:["Forms are HTML elements that take in user input. Forms hold form elements, such as ",(0,l.jsx)(t.code,{children:"input"}),", ",(0,l.jsx)(t.code,{children:"select"}),", or ",(0,l.jsx)(t.code,{children:"button"}),". We can use them to create useful applications, such as a user sign-up page."]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"what-are-forms",children:"What are Forms?"}),"\n",(0,l.jsx)(t.p,{children:"Think of a user sign-up page. It might have many fields for a new user to create a password, input their name, etc. All of these elements would be contained in a Form HTML element."}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsxs)(t.strong,{children:[(0,l.jsx)(t.code,{children:"<form>"})," is an HTML element which designates a section of webpage that takes in user input."]}),' It contains various "form elements" for different types of inputs.']}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-jsx",children:"<form>. form elements .</form>\n"})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"form-elements",children:"Form Elements"}),"\n",(0,l.jsxs)(t.p,{children:["The HTML ",(0,l.jsx)(t.code,{children:"<form>"})," element can contain one or more form elements. Here are 4 key form elements, though there are many more. A full list of HTML elements can be found here: ",(0,l.jsxs)(t.a,{href:"https://www.w3schools.com/html/html_form_elements.asp",rel:"nofollow",children:["HTML Form Elements",(0,l.jsx)(t.span,{children:(0,l.jsx)(t.span,{className:"glossary-icon",children:" \u2197"})})]}),"."]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h4,{id:"input-element",children:"Input Element"}),"\n",(0,l.jsx)(t.h5,{id:"type-attribute",children:"Type Attribute"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"<input>"})," is a versatile form element. It takes in an optional ",(0,l.jsx)(t.code,{children:"type"})," attribute, which controls what kind of input box is displayed. A few possible ",(0,l.jsx)(t.code,{children:"type"}),' values are: "text", "password", "email", "date", and "checkbox".']}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsxs)(t.p,{children:["The default value of the ",(0,l.jsx)(t.code,{children:"type"}),' attribute is "text".']})}),"\n",(0,l.jsxs)(t.p,{children:["A full list of ",(0,l.jsx)(t.code,{children:"input"})," types can be found here: ",(0,l.jsxs)(t.a,{href:"https://www.w3schools.com/html/html_form_input_types.asp",rel:"nofollow",children:["HTML Form Input Types",(0,l.jsx)(t.span,{children:(0,l.jsx)(t.span,{className:"glossary-icon",children:" \u2197"})})]}),"."]}),"\n",(0,l.jsx)(t.h5,{id:"placeholder-attribute",children:"Placeholder Attribute"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"<input>"})," also takes in an optional ",(0,l.jsx)(t.code,{children:"placeholder"})," attribute, which specifies a short hint that describes the expected value of an input field (e.g. a sample value or a short description of the expected format)."]}),"\n",(0,l.jsx)(t.p,{children:"The short hint is displayed in the input field before the user enters a value."}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"placeholder"})," attribute works with the following input types: text, search, url, number, tel, email, and password."]})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h4,{id:"label-element",children:"Label Element"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"<label>"})," is an element that labels another form element. It takes in an optional ",(0,l.jsx)(t.code,{children:"for"})," attribute, which should be equal to the ",(0,l.jsx)(t.code,{children:"id"})," attribute of the ",(0,l.jsx)(t.code,{children:"input"})," element to bind them together."]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h4,{id:"input-and-label-examples",children:"Input and Label Examples"}),"\n",(0,l.jsxs)(t.p,{children:["Here is how you might use the ",(0,l.jsx)(t.code,{children:"input"})," and ",(0,l.jsx)(t.code,{children:"label"})," elements together:"]}),"\n",(0,l.jsx)(t.h5,{id:"text-example",children:"Text example"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-jsx",children:'<form>\n  <label htmlFor="fullName">Full name</label><br>\n  <input type="text" id="fullName" name="fullName">\n</form>\n'})}),"\n",(0,l.jsx)(t.h5,{id:"email-example-with-placeholder",children:"Email example (with placeholder)"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-jsx",children:'<form>\n  <label htmlFor="email">Email</label><br>\n  <input type="email" id="email" name="email" placeholder="name@example.com">\n</form>\n'})}),"\n",(0,l.jsx)(t.h5,{id:"password-example",children:"Password example"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-jsx",children:'<form>\n  <label htmlFor="password">Password</label><br>\n  <input type="password" id="password" name="password"><br>\n</form>\n'})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h4,{id:"select-element",children:"Select Element"}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"<select>"})," element is a dropdown menu. The ",(0,l.jsx)(t.code,{children:"<select>"})," element itself contains multiple ",(0,l.jsx)(t.code,{children:"<option>"})," elements."]}),"\n",(0,l.jsxs)(t.p,{children:["By default, the ",(0,l.jsx)(t.code,{children:"<select>"})," element lets users ",(0,l.jsx)(t.strong,{children:"select only one"})," option."]}),"\n",(0,l.jsx)(t.h5,{id:"default-option",children:"Default Option"}),"\n",(0,l.jsxs)(t.p,{children:["The default option selected is by default the ",(0,l.jsx)(t.strong,{children:"first option"}),"."]}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsxs)(t.p,{children:['A nice trick is to use the first option as a placeholder, a sort of hint to the user (e.g. "Select only one option"). The associated ',(0,l.jsx)(t.code,{children:"value"})," of the ",(0,l.jsx)(t.code,{children:"option"}),' can be "".']})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h4,{id:"button-element",children:"Button Element"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"<button>"})," defines a clickable button. It takes in a ",(0,l.jsx)(t.code,{children:"type"})," attribute, which controls the default behavior of the button. The three possible ",(0,l.jsx)(t.code,{children:"type"}),' values are: "submit", "reset", and "button".']}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsxs)(t.p,{children:["Always specify the ",(0,l.jsx)(t.code,{children:"type"})," attribute for the button element. Different browsers may use different default types for the button element."]})}),"\n",(0,l.jsx)(t.h5,{id:"submission",children:"Submission"}),"\n",(0,l.jsxs)(t.p,{children:["The main button ",(0,l.jsx)(t.code,{children:"type"}),' value you will use is "submit". This is the default if the ',(0,l.jsx)(t.code,{children:"type"})," attribute is not specified or is empty/invalid. Clicking a ",(0,l.jsx)(t.code,{children:'<button type="submit">'})," will trigger the ",(0,l.jsx)(t.code,{children:"onSubmit"})," event."]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h4,{id:"select-and-button-example",children:"Select and Button example"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-jsx",children:'<label htmlFor="pet-select">Choose a pet:</label>\n\n<select name="pets" id="pet-select">\n  <option value="">--Choose an option--</option>\n  <option value="dog">Dog</option>\n  <option value="cat">Cat</option>\n  <option value="hamster">Hamster</option>\n</select><br>\n\n<button type="submit">Submit</button>\n'})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var l=n(4164);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.A)(a.tabItem,r),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>y});var l=n(6540),a=n(4164),s=n(3104),r=n(6347),o=n(205),i=n(7485),c=n(1682),d=n(9466);function u(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:a}}=e;return{value:t,label:n,attributes:l,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(s),(0,l.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[r,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:s}))),[c,u]=m({queryString:n,groupId:a}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,d.Dv)(n);return[a,(0,l.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),b=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&i(b)}),[b]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(4848);function v(e){let{className:t,block:n,selectedValue:l,selectValue:r,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),a=o[n].value;a!==l&&(c(t),r(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function y(e){const t=(0,x.A)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var l=n(6540);const a={},s=l.createContext(a);function r(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);