"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3472],{8268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=t(4848),i=t(8453);const o={title:"14.3 - Defining tRPC Context and Middleware",metadata:["Can be provided",{as:"objects",or:"arrays"}]},s=void 0,d={id:"Readings/authentication-and-middleware/14.3",title:"14.3 - Defining tRPC Context and Middleware",description:"Context in tRPC",source:"@site/docs/Readings/14-authentication-and-middleware/14.3.md",sourceDirName:"Readings/14-authentication-and-middleware",slug:"/Readings/authentication-and-middleware/14.3",permalink:"/docs/Readings/authentication-and-middleware/14.3",draft:!1,unlisted:!1,editUrl:"https://github.com/CS61D/website/tree/main/docs/Readings/14-authentication-and-middleware/14.3.md",tags:[],version:"current",frontMatter:{title:"14.3 - Defining tRPC Context and Middleware",metadata:["Can be provided",{as:"objects",or:"arrays"}]},sidebar:"tutorialSidebar",previous:{title:"14.2 - NextAuth Overview and Session Information",permalink:"/docs/Readings/authentication-and-middleware/14.2"},next:{title:"Lecture 15 - tRPC on the Client",permalink:"/docs/Readings/trpc-on-the-client/"}},a={},c=[{value:"Context in tRPC",id:"context-in-trpc",level:2},{value:"Creating Context",id:"creating-context",level:3},{value:"Using Context in Procedures",id:"using-context-in-procedures",level:3},{value:"Middleware in tRPC",id:"middleware-in-trpc",level:2},{value:"Defining Middleware",id:"defining-middleware",level:3},{value:"Applying Middleware to Procedures",id:"applying-middleware-to-procedures",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"context-in-trpc",children:"Context in tRPC"}),"\n",(0,r.jsx)(n.p,{children:"The context in tRPC is a way to share common data or functionality across all procedures and routers in your API. This can include things like authentication information, database connections, or other shared resources. The context is set up when creating your tRPC router and is available in all your procedures."}),"\n",(0,r.jsx)(n.h3,{id:"creating-context",children:"Creating Context"}),"\n",(0,r.jsx)(n.p,{children:"You define the context function when you initialize your tRPC router. Here\u2019s an example using Drizzle ORM:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'// server/trpc/context.ts\nimport { Drizzle } from "drizzle-orm";\nimport { inferAsyncReturnType, initTRPC } from "@trpc/server";\nimport { NextApiRequest, NextApiResponse } from "next";\n\nconst drizzle = new Drizzle(/* Your Drizzle configuration here */);\n\nexport const createContext = ({\n  req,\n  res,\n}: {\n  req: NextApiRequest;\n  res: NextApiResponse;\n}) => ({\n  drizzle,\n  user: req.user, // Example of adding user from request, if authenticated\n});\n\nexport type Context = inferAsyncReturnType<typeof createContext>;\n'})}),"\n",(0,r.jsx)(n.p,{children:"In this example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"drizzle"})}),": A client instance is added to the context to be used in procedures for database operations."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"user"})}),": Example of including user information from the request, useful for authentication and authorization."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"using-context-in-procedures",children:"Using Context in Procedures"}),"\n",(0,r.jsx)(n.p,{children:"In your tRPC procedures, you can now access the context:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'// server/trpc/routers/userRouter.ts\nimport { createTRPCRouter } from "../trpc";\nimport { z } from "zod";\n\nexport const userRouter = createTRPCRouter({\n  getUser: {\n    input: z.object({ id: z.string() }),\n    resolve: async ({ input, ctx }) => {\n      return ctx.drizzle.user.findUnique({\n        where: { id: input.id },\n      });\n    },\n  },\n});\n'})}),"\n",(0,r.jsx)(n.p,{children:"In this example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ctx.drizzle"})}),": Accesses the Drizzle client from the context to interact with the database."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"middleware-in-trpc",children:"Middleware in tRPC"}),"\n",(0,r.jsx)(n.p,{children:"Middleware in tRPC allows you to run code before or after a procedure is executed. This is useful for tasks like authentication, logging, and validation."}),"\n",(0,r.jsx)(n.h3,{id:"defining-middleware",children:"Defining Middleware"}),"\n",(0,r.jsx)(n.p,{children:"Here\u2019s an example of a simple middleware that checks for authentication:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'// server/trpc/middleware/authMiddleware.ts\nimport { TRPCError } from "@trpc/server";\n\nexport const isAuthenticated = (procedure) => {\n  return procedure.use(async ({ ctx, next }) => {\n    if (!ctx.user) {\n      throw new TRPCError({\n        code: "UNAUTHORIZED",\n        message: "You must be logged in to access this resource.",\n      });\n    }\n    return next();\n  });\n};\n'})}),"\n",(0,r.jsx)(n.p,{children:"In this example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"isAuthenticated"})}),": Middleware function that checks if the user is authenticated. If not, it throws an error."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"applying-middleware-to-procedures",children:"Applying Middleware to Procedures"}),"\n",(0,r.jsx)(n.p,{children:"You can apply middleware to specific procedures or to an entire router:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'// server/trpc/routers/protectedRouter.ts\nimport { createTRPCRouter } from "../trpc";\nimport { isAuthenticated } from "../middleware/authMiddleware";\nimport { z } from "zod";\n\nexport const protectedRouter = createTRPCRouter({\n  getProtectedData: isAuthenticated({\n    input: z.object({ id: z.string() }),\n    resolve: async ({ input, ctx }) => {\n      return ctx.drizzle.protectedData.findUnique({\n        where: { id: input.id },\n      });\n    },\n  }),\n});\n'})}),"\n",(0,r.jsx)(n.p,{children:"In this example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"isAuthenticated"})}),": Applied to the ",(0,r.jsx)(n.code,{children:"getProtectedData"})," procedure to ensure that only authenticated users can access it."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var r=t(6540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);