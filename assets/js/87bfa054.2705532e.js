"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3104],{9152:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=a(4848),s=a(8453);const i={title:"11.1 - CRUD Operations and Data Validation",metadata:["Can be provided",{as:"objects",or:"arrays"}]},r=void 0,o={id:"Readings/basic-database-operations-validation/11.1",title:"11.1 - CRUD Operations and Data Validation",description:"Introduction to CRUD Operations",source:"@site/docs/Readings/11-basic-database-operations-validation/11.1.md",sourceDirName:"Readings/11-basic-database-operations-validation",slug:"/Readings/basic-database-operations-validation/11.1",permalink:"/docs/Readings/basic-database-operations-validation/11.1",draft:!1,unlisted:!1,editUrl:"https://github.com/CS61D/website/tree/main/docs/Readings/11-basic-database-operations-validation/11.1.md",tags:[],version:"current",frontMatter:{title:"11.1 - CRUD Operations and Data Validation",metadata:["Can be provided",{as:"objects",or:"arrays"}]},sidebar:"tutorialSidebar",previous:{title:"Lecture 11 - Basic Database Operations and Validation",permalink:"/docs/Readings/basic-database-operations-validation/"},next:{title:"Lecture 12 - Advanced Operations",permalink:"/docs/Readings/advanced-operations/"}},d={},l=[{value:"Introduction to CRUD Operations",id:"introduction-to-crud-operations",level:2},{value:"Importance of Data Validation",id:"importance-of-data-validation",level:2},{value:"Types of Data Checks",id:"types-of-data-checks",level:3}];function c(e){const n={h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction-to-crud-operations",children:"Introduction to CRUD Operations"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CRUD"})," stands for ",(0,t.jsx)(n.strong,{children:"Create, Read, Update, Delete"}),". These are the four basic operations you can perform on a database."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Create"})," operation adds new records to a table. This is the process of inserting data into the database."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Read"})," operation retrieves data from a table. This allows you to query the database and fetch information."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Update"})," operation modifies existing records in a table. This involves changing the data that is already stored."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Delete"})," operation removes records from a table. This is the process of deleting data from the database."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"importance-of-data-validation",children:"Importance of Data Validation"}),"\n",(0,t.jsx)(n.p,{children:"Data validation ensures the accuracy and quality of data before it is processed and stored in the database. It helps prevent errors, maintain data integrity, and ensure that the data conforms to predefined rules. There are many types of data checks and the following are some of the most common ones you might run into."}),"\n",(0,t.jsx)(n.h3,{id:"types-of-data-checks",children:"Types of Data Checks"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"1. Format Check"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ensures the data is in the correct format."}),"\n",(0,t.jsx)(n.li,{children:"Example: Validating an email address format."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"2. Range Check"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ensures the data falls within a specified range."}),"\n",(0,t.jsx)(n.li,{children:"Example: Age must be between 0 and 120."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"3. Presence Check"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ensures that mandatory fields are not left blank."}),"\n",(0,t.jsx)(n.li,{children:"Example: A customer record must have a name and email."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"4. Length Check"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ensures the data does not exceed a specified length."}),"\n",(0,t.jsx)(n.li,{children:"Example: A phone number must be exactly 10 digits."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"5. Uniqueness Check"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ensures the data is unique in the database."}),"\n",(0,t.jsx)(n.li,{children:"Example: Each customer email must be unique."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"6. Consistency Check"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ensures the data is consistent with related data."}),"\n",(0,t.jsx)(n.li,{children:"Example: An order date must be on or after the customer registration date."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"7. Data Type Check"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ensures the data is of the correct type."}),"\n",(0,t.jsx)(n.li,{children:"Example: The sales amount must be a float instead of a string."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"8. Code Check"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ensures the data is from a correct/allowed source of values."}),"\n",(0,t.jsx)(n.li,{children:"Example: The provided zip code must be a valid one."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var t=a(6540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);