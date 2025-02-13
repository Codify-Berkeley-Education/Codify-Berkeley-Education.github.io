"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4891],{3749:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"Readings/advanced-operations/12.1","title":"12.1 - Advanced Database Operations","description":"Advanced Database Operations","source":"@site/docs/Readings/12-advanced-operations/12.1.md","sourceDirName":"Readings/12-advanced-operations","slug":"/Readings/advanced-operations/12.1","permalink":"/docs/Readings/advanced-operations/12.1","draft":false,"unlisted":false,"editUrl":"https://github.com/CS61D/website/tree/main/docs/Readings/12-advanced-operations/12.1.md","tags":[],"version":"current","frontMatter":{"title":"12.1 - Advanced Database Operations","metadata":["Can be provided",{"as":"objects","or":"arrays"}]},"sidebar":"tutorialSidebar","previous":{"title":"Lecture 12 - Advanced Operations","permalink":"/docs/Readings/advanced-operations/"},"next":{"title":"12.2 - Database Migrations","permalink":"/docs/Readings/advanced-operations/12.2"}}');var t=n(4848),r=n(8453);const o={title:"12.1 - Advanced Database Operations",metadata:["Can be provided",{as:"objects",or:"arrays"}]},i=void 0,d={},c=[{value:"Advanced Database Operations",id:"advanced-database-operations",level:2},{value:"Filtering",id:"filtering",level:3},{value:"Joining",id:"joining",level:3},{value:"Grouping",id:"grouping",level:3},{value:"Aggregate Functions",id:"aggregate-functions",level:3},{value:"Subqueries",id:"subqueries",level:3},{value:"Common Table Expressions (CTEs)",id:"common-table-expressions-ctes",level:3},{value:"Data Transactions",id:"data-transactions",level:3},{value:"Set Operations",id:"set-operations",level:3}];function l(e){const s={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"advanced-database-operations",children:"Advanced Database Operations"}),"\n",(0,t.jsx)(s.p,{children:"In this section, we'll explore some advanced database operations, including filtering, joining, grouping, aggregate functions, subqueries, Common Table Expressions (CTEs), data transactions, and set operations."}),"\n",(0,t.jsx)(s.h3,{id:"filtering",children:"Filtering"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Filtering"})," involves retrieving specific rows from a database table that meet certain criteria. This is done using the ",(0,t.jsx)(s.code,{children:"WHERE"})," clause in SQL. In Drizzle, you can filter with ",(0,t.jsx)(s.code,{children:"where"})," along with ",(0,t.jsx)(s.code,{children:"eq"}),", ",(0,t.jsx)(s.code,{children:"ne"}),", ",(0,t.jsx)(s.code,{children:"gt"}),", ",(0,t.jsx)(s.code,{children:"lte"}),", ",(0,t.jsx)(s.code,{children:"isNull"}),", ",(0,t.jsx)(s.code,{children:"and/or"}),", ",(0,t.jsx)(s.code,{children:"between"}),", etc."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Use Case:"})," Find products within a specific price range or with certain features."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"export const getMenuItemById = async (db, id: number) => {\n  return await db.select().from(menuItems).where(eq(menuItems.id, id));\n};\n"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"joining",children:"Joining"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Joining"})," combines rows from two or more tables based on a related column between them. The common types of joins are ",(0,t.jsx)(s.code,{children:"INNER JOIN"}),", ",(0,t.jsx)(s.code,{children:"LEFT JOIN"}),", ",(0,t.jsx)(s.code,{children:"RIGHT JOIN"}),", and ",(0,t.jsx)(s.code,{children:"FULL JOIN"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Use Case:"})," Combine data from the ",(0,t.jsx)(s.code,{children:"Customers"})," table and the ",(0,t.jsx)(s.code,{children:"Orders"})," table to get a list of all orders along with the customer details."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"const userPosts = await db\n  .select()\n  .from(usersTable)\n  .leftJoin(postsTable, eq(usersTable.id, postsTable.userId));\n"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"grouping",children:"Grouping"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Grouping"})," involves aggregating data based on one or more columns using the ",(0,t.jsx)(s.code,{children:"GROUP BY"})," clause. This is often used with aggregate functions like ",(0,t.jsx)(s.code,{children:"SUM"}),", ",(0,t.jsx)(s.code,{children:"AVG"}),", ",(0,t.jsx)(s.code,{children:"COUNT"}),", etc."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Use Case:"})," Group sales data by product category to calculate the total sales for each category."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"const salesByCategory = await db\n  .select({\n    category: salesTable.category,\n    totalAmount: sum(salesTable.amount),\n  })\n  .from(salesTable)\n  .groupBy(salesTable.category);\n"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"aggregate-functions",children:"Aggregate Functions"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Aggregate Functions"})," perform calculations on a set of values and return a single value. Common aggregate functions include ",(0,t.jsx)(s.code,{children:"SUM"}),", ",(0,t.jsx)(s.code,{children:"AVG"}),", ",(0,t.jsx)(s.code,{children:"MAX"}),", ",(0,t.jsx)(s.code,{children:"MIN"}),", and ",(0,t.jsx)(s.code,{children:"COUNT"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Use Case:"})," Calculate the average order amount from the ",(0,t.jsx)(s.code,{children:"Orders"})," table."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"const salesByCategory = await db\n  .select({\n    category: salesTable.category,\n    totalAmount: sum(salesTable.amount),\n  })\n  .from(salesTable)\n  .groupBy(salesTable.category);\n"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"subqueries",children:"Subqueries"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Subqueries"})," are queries nested inside another query. They are used to perform operations that require multiple steps."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Use Case:"})," First find user ids of those who have made more than a certain number of purchases last month. And then use the user ids to find the corresponding user phone numbers."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:'const sq = db.select().from(users).where(eq(users.id, 42)).as("sq");\nconst result = await db.select().from(users).leftJoin(sq, eq(users.id, sq.id));\n'})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"common-table-expressions-ctes",children:"Common Table Expressions (CTEs)"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Common Table Expressions (CTEs)"})," are temporary result sets that can be referenced within a ",(0,t.jsx)(s.code,{children:"SELECT"}),", ",(0,t.jsx)(s.code,{children:"INSERT"}),", ",(0,t.jsx)(s.code,{children:"UPDATE"}),", or ",(0,t.jsx)(s.code,{children:"DELETE"})," statement. They are defined using the ",(0,t.jsx)(s.code,{children:"WITH"})," clause. Temporary result sets are defined within the scope of a single SQL statement and allow us to do further processing on this intermediary table."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Use Case:"})," Create a temporary table with the customer id and total purchase amount for customers who have made purchases at the store for over 5 times in the past month. We then filter for customers whose purchase amount is greater than a certain value."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:'const sq = db.$with("sq").as(db.select().from(users).where(eq(users.id, 42)));\nconst result = await db.with(sq).select().from(sq);\n'})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"data-transactions",children:"Data Transactions"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Data Transactions"})," are sequences of database operations that are treated as a single unit. Transactions ensure data integrity by making sure that all operations succeed or if we fail at any point, we can rollback the steps that have already been taken. Transactions are managed using ",(0,t.jsx)(s.code,{children:"BEGIN"}),", ",(0,t.jsx)(s.code,{children:"COMMIT"}),", and ",(0,t.jsx)(s.code,{children:"ROLLBACK"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Use Case:"})," Ensure that all steps of a multi-step process (like transferring money between bank accounts) either complete successfully or none of them do."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:'await db.transaction(async (tx) => {\n  await tx.insert(usersTable).values({ name: "Alice" });\n  await tx.insert(accountsTable).values({ balance: 1000 });\n});\n'})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"set-operations",children:"Set Operations"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Set Operations"})," are used to combine the results of two or more queries. The common set operations are ",(0,t.jsx)(s.code,{children:"UNION"}),", ",(0,t.jsx)(s.code,{children:"INTERSECT"}),", and ",(0,t.jsx)(s.code,{children:"EXCEPT"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Use Case:"})," Combine results from two different queries to get a list of all unique customers who have made a purchase or have signed up for the newsletter."]}),"\n",(0,t.jsx)(s.hr,{})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>i});var a=n(6540);const t={},r=a.createContext(t);function o(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);