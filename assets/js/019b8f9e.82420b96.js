"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2263],{4012:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var r=s(4848),i=s(8453),l=s(1470),t=s(9365);const o={sidebar_position:5},a="5. Forms",d={id:"Assignments/forms",title:"5. Forms",description:"Assignment Links",source:"@site/docs/Assignments/forms.md",sourceDirName:"Assignments",slug:"/Assignments/forms",permalink:"/docs/Assignments/forms",draft:!1,unlisted:!1,editUrl:"https://github.com/CS61D/website/tree/main/docs/Assignments/forms.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"3. React",permalink:"/docs/Assignments/react-todo"},next:{title:"6. Databases",permalink:"/docs/Assignments/database"}},c={},h=[{value:"Assignment Links",id:"assignment-links",level:2},{value:"Assignment Overview",id:"assignment-overview",level:2},{value:"Tailwind CSS Overview &amp; Integration",id:"tailwind-css-overview--integration",level:2},{value:"Tailwind CSS Practical Exercises",id:"tailwind-css-practical-exercises",level:2},{value:"Setup",id:"setup",level:2},{value:"Part 1: Form Content and Validation",id:"part-1-form-content-and-validation",level:2},{value:"Part 2: HTML Form",id:"part-2-html-form",level:2},{value:"Part 2.1: Form Setup",id:"part-21-form-setup",level:3},{value:"Part 2.2: Registering Form Fields",id:"part-22-registering-form-fields",level:3},{value:"Part 2.3: Error Messages",id:"part-23-error-messages",level:3},{value:"Part 3: Controlled Form with Shadcn Components",id:"part-3-controlled-form-with-shadcn-components",level:2},{value:"Using the Components",id:"using-the-components",level:3},{value:"Optional Bonus: Forms with Arrays and Conditional Fields",id:"optional-bonus-forms-with-arrays-and-conditional-fields",level:2},{value:"Updating the Schema",id:"updating-the-schema",level:3},{value:"useFieldArray()",id:"usefieldarray",level:3}];function u(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"5-forms",children:"5. Forms"}),"\n",(0,r.jsx)(n.h2,{id:"assignment-links",children:"Assignment Links"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"https://github.com/Codify-Berkeley-Education/Assignment-Starter-Forms",rel:"nofollow",children:["Starter Code",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.img,{src:"/img/link-icons/github.svg",alt:"github",className:"github-icon",style:{width:"16px",height:"16px",marginLeft:"0.25rem",verticalAlign:"baseline"}})})]})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.a,{href:"https://forms.61d.org/",rel:"nofollow",children:["Finished Solution",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{className:"glossary-icon",children:" \u2197"})})]})," (what you will build)"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"https://www.youtube.com/playlist?list=PLKG9s9gYKALAfl18EoFXxRRu7ORmGWE3J",rel:"nofollow",children:["Lecture 5: Forms & Validation",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.img,{src:"/img/link-icons/youtube.svg",alt:"youtube",className:"glossary-icon",style:{width:"16px",height:"16px",marginLeft:"0.25rem",verticalAlign:"baseline"}})})]})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"https://youtube.com/playlist?list=PLKG9s9gYKALDF-_Snq9CjiriDqWFkj3yU&si=fiMEUNDQza0Zulpn",rel:"nofollow",children:["Lecture 6: Basic CSS & Tailwind",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.img,{src:"/img/link-icons/youtube.svg",alt:"youtube",className:"glossary-icon",style:{width:"16px",height:"16px",marginLeft:"0.25rem",verticalAlign:"baseline"}})})]})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"https://classroom.github.com/a/RCocqtIL",rel:"nofollow",children:["GitHub Classroom Assignment",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.img,{src:"/img/link-icons/github.svg",alt:"github",className:"github-icon",style:{width:"16px",height:"16px",marginLeft:"0.25rem",verticalAlign:"baseline"}})})]})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"assignment-overview",children:"Assignment Overview"}),"\n",(0,r.jsx)(n.p,{children:"You are a front-end developer for a hot new ed-tech startup. You are tasked with creating a sign up form for new users to create accounts on the platform. You need to make sure that the form is user-friendly, responsive, and most importantly, validates user input before sending it to the backend."}),"\n",(0,r.jsxs)(n.p,{children:["First, take a look at the ",(0,r.jsxs)(n.a,{href:"https://forms.61d.org/",rel:"nofollow",children:["finished solution",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{className:"glossary-icon",children:" \u2197"})})]})," to see what you will be building. Try filling in the form with both valid and invalid data to see how the form behaves. Each individual field has its own rules, and error messages explain what went wrong when a user tries to submit invalid data."]}),"\n",(0,r.jsxs)(n.p,{children:["You will start by defining a ",(0,r.jsxs)(n.a,{href:"https://zod.dev/",rel:"nofollow",children:["zod",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{className:"glossary-icon",children:" \u2197"})})]})," validation schema to define the shape of the form data and the validation rules for each field. Then we will integrate it with ",(0,r.jsxs)(n.a,{href:"https://react-hook-form.com/",rel:"nofollow",children:["React Hook Form",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{className:"glossary-icon",children:" \u2197"})})]})," to handle the form state, and associate inputs with fields in our schema. Finally, we will show how to use pre-built ",(0,r.jsxs)(n.a,{href:"https://ui.shadcn.com/",rel:"nofollow",children:["shadcn",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{className:"glossary-icon",children:" \u2197"})})]})," components with React Hook Form to create a more polished and professional look."]}),"\n",(0,r.jsxs)(n.p,{children:["You will only have to edit ",(0,r.jsx)(n.code,{children:"validator.ts"}),", ",(0,r.jsx)(n.code,{children:"Form.tsx"}),", and ",(0,r.jsx)(n.code,{children:"ControlledForm.tsx"})," in parts 1-3 respectively."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"tailwind-css-overview--integration",children:"Tailwind CSS Overview & Integration"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"What is Tailwind CSS?"}),(0,r.jsx)(n.br,{}),"\n","Tailwind CSS is a utility-first CSS framework that lets you style your UI by composing small, reusable utility classes. Instead of writing custom CSS for each component, you can apply classes directly in your JSX to manage layout, spacing, colors, and more."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Commonly Used Utility Classes:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Layout:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"container"}),", ",(0,r.jsx)(n.code,{children:"mx-auto"})," (center content)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"flex"}),", ",(0,r.jsx)(n.code,{children:"grid"})," (flexbox and grid layouts)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Spacing:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Padding: ",(0,r.jsx)(n.code,{children:"p-4"}),", ",(0,r.jsx)(n.code,{children:"pt-2"}),", ",(0,r.jsx)(n.code,{children:"px-6"})]}),"\n",(0,r.jsxs)(n.li,{children:["Margin: ",(0,r.jsx)(n.code,{children:"m-4"}),", ",(0,r.jsx)(n.code,{children:"mt-2"}),", ",(0,r.jsx)(n.code,{children:"mb-6"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Typography:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Text size & weight: ",(0,r.jsx)(n.code,{children:"text-lg"}),", ",(0,r.jsx)(n.code,{children:"font-bold"}),", ",(0,r.jsx)(n.code,{children:"text-center"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Colors:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Background: ",(0,r.jsx)(n.code,{children:"bg-blue-500"}),", ",(0,r.jsx)(n.code,{children:"bg-gray-100"})]}),"\n",(0,r.jsxs)(n.li,{children:["Text: ",(0,r.jsx)(n.code,{children:"text-white"}),", ",(0,r.jsx)(n.code,{children:"text-gray-800"})]}),"\n",(0,r.jsxs)(n.li,{children:["Border: ",(0,r.jsx)(n.code,{children:"border"}),", ",(0,r.jsx)(n.code,{children:"border-gray-300"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Effects & States:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Shadows: ",(0,r.jsx)(n.code,{children:"shadow"}),", ",(0,r.jsx)(n.code,{children:"shadow-lg"})]}),"\n",(0,r.jsxs)(n.li,{children:["Rounded corners: ",(0,r.jsx)(n.code,{children:"rounded"}),", ",(0,r.jsx)(n.code,{children:"rounded-md"})]}),"\n",(0,r.jsxs)(n.li,{children:["Hover effects: ",(0,r.jsx)(n.code,{children:"hover:bg-blue-600"}),", ",(0,r.jsx)(n.code,{children:"hover:text-white"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Responsive Design:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Prefix with breakpoints: ",(0,r.jsx)(n.code,{children:"sm:"}),", ",(0,r.jsx)(n.code,{children:"md:"}),", ",(0,r.jsx)(n.code,{children:"lg:"}),", etc."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Incorporating Tailwind into the Forms Project:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Verify Installation:"}),(0,r.jsx)(n.br,{}),"\n","Tailwind CSS is already part of the project dependencies. Confirm that your ",(0,r.jsx)(n.code,{children:"package.json"})," includes Tailwind and that a ",(0,r.jsx)(n.code,{children:"tailwind.config.ts"})," file exists."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Include Tailwind Directives:"}),(0,r.jsx)(n.br,{}),"\n","In your main CSS file (for example, ",(0,r.jsx)(n.code,{children:"src/index.css"}),"), add the following at the top:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n"})}),"\n",(0,r.jsx)(n.p,{children:"This ensures that Tailwind\u2019s base styles, component styles, and utility classes are available throughout the project."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Customize the Config:"}),(0,r.jsx)(n.br,{}),"\n","Open ",(0,r.jsx)(n.code,{children:"tailwind.config.ts"})," and update or extend the theme as needed. For example, you might add custom colors or spacing that match your design:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"extend: {\n  colors: {\n    background: 'hsl(var(--background))',\n    foreground: 'hsl(var(--foreground))',\n  },\n},\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This lets you use classes like ",(0,r.jsx)(n.code,{children:"bg-background"})," and ",(0,r.jsx)(n.code,{children:"text-foreground"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Using Utility Classes in JSX:"}),(0,r.jsx)(n.br,{}),"\n","You can now apply Tailwind classes directly in your components. For instance, to add padding and a background color:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'<div className="p-4 bg-gray-100">\n  {/* form content */}\n</div>\n'})}),"\n",(0,r.jsx)(n.p,{children:"Feel free to mix Tailwind classes with shadcn components for custom styling."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Restart the Dev Server:"}),(0,r.jsx)(n.br,{}),"\n","After making changes, run:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bun dev\n"})}),"\n",(0,r.jsxs)(n.p,{children:["and view your project at ",(0,r.jsxs)(n.a,{href:"http://localhost:5173/",rel:"nofollow",children:["http://localhost:5173/",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{className:"glossary-icon",children:" \u2197"})})]}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"tailwind-css-practical-exercises",children:"Tailwind CSS Practical Exercises"}),"\n",(0,r.jsx)(n.p,{children:"Now that Tailwind CSS is integrated into the project, try these exercises to get hands-on practice:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Form Container Styling:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add utility classes to the form container (e.g. in ",(0,r.jsx)(n.code,{children:"Form.tsx"}),") to center it on the page using ",(0,r.jsx)(n.code,{children:"mx-auto"})," and add padding with ",(0,r.jsx)(n.code,{children:"p-6"})," or ",(0,r.jsx)(n.code,{children:"p-4"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Experiment with background colors like ",(0,r.jsx)(n.code,{children:"bg-gray-100"})," or your custom ",(0,r.jsx)(n.code,{children:"bg-background"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Input Field Styling:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Style the input fields by adding classes such as ",(0,r.jsx)(n.code,{children:"border"}),", ",(0,r.jsx)(n.code,{children:"rounded"}),", and ",(0,r.jsx)(n.code,{children:"p-2"})," for spacing."]}),"\n",(0,r.jsxs)(n.li,{children:["Add focus states with classes like ",(0,r.jsx)(n.code,{children:"focus:outline-none"})," and ",(0,r.jsx)(n.code,{children:"focus:ring-2"})," to improve usability."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Button Styling:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Enhance the submit button by applying classes such as:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"\n'})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"This will give the button a modern look and a responsive hover effect."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Responsive Design:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Use responsive utility classes to adjust layout on different screen sizes. For instance, change padding or margins on mobile vs. desktop with classes like ",(0,r.jsx)(n.code,{children:"p-4 md:p-8"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Custom Color Usage:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Update your ",(0,r.jsx)(n.code,{children:"tailwind.config.ts"})," with custom colors if you haven't already."]}),"\n",(0,r.jsxs)(n.li,{children:["Apply these custom colors in your components by using classes like ",(0,r.jsx)(n.code,{children:"bg-background"})," and ",(0,r.jsx)(n.code,{children:"text-foreground"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Take a few minutes to experiment with these exercises. They\u2019re designed to give you a practical feel for how Tailwind CSS can rapidly improve your UI design."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(n.p,{children:["Install the ",(0,r.jsxs)(n.a,{href:"../glossary#dependency",children:["dependencies",(0,r.jsx)(n.span,{className:"glossary-icon",children:" \ud83d\udcd6"})]}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bun install\n"})}),"\n",(0,r.jsx)(n.p,{children:"Start the development server:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bun dev\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then view the starter code at ",(0,r.jsxs)(n.a,{href:"http://localhost:5173/",rel:"nofollow",children:["http://localhost:5173/",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{className:"glossary-icon",children:" \u2197"})})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"part-1-form-content-and-validation",children:"Part 1: Form Content and Validation"}),"\n",(0,r.jsxs)(n.p,{children:["We want our form to have the following fields and rules. Open up ",(0,r.jsx)(n.code,{children:"validator.ts"})," in ",(0,r.jsx)(n.code,{children:"src/lib/"})," and add each field to the zod validator. Remember that zod fields are required by default."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"firstName"}),": A required, nonempty string"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"lastName"}),": A required, nonempty string"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"email"}),": A required email address. Zod has a ",(0,r.jsxs)(n.a,{href:"https://zod.dev/?id=strings",rel:"nofollow",children:["built in",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{className:"glossary-icon",children:" \u2197"})})]})," ",(0,r.jsx)(n.code,{children:".email()"})," method that you can use to validate email addresses."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"role"}),': An optional field that must be one of "student", "educator", or "parent/guardian". Use a ',(0,r.jsxs)(n.a,{href:"https://zod.dev/?id=zod-enums",rel:"nofollow",children:["zod enum",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{className:"glossary-icon",children:" \u2197"})})]})," to ensure that the role can't just be any arbitrary string."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"subscribe"}),": A required boolean field"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"birthDate"}),": An optional field that must be a valid date in the past. You can use the ",(0,r.jsx)(n.code,{children:".date()"})," method from zod to validate this."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"password"}),": A required field that must pass the following rules"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Between 8-20 characters"}),"\n",(0,r.jsx)(n.li,{children:"At least one uppercase letter"}),"\n",(0,r.jsx)(n.li,{children:"At least one lowercase letter"}),"\n",(0,r.jsxs)(n.li,{children:["At least one digit",(0,r.jsx)(n.br,{}),"\n","These properties can be enforced through ",(0,r.jsxs)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions",rel:"nofollow",children:["regular expressions",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{className:"glossary-icon",children:" \u2197"})})]})," (regex), which zod supports with the ",(0,r.jsx)(n.code,{children:".regex()"})," operator. Useful regex patterns include:"]}),"\n",(0,r.jsxs)(n.li,{children:["Uppercase letter: ",(0,r.jsx)(n.code,{children:"/[A-Z]/"})]}),"\n",(0,r.jsxs)(n.li,{children:["Lowercase letter: ",(0,r.jsx)(n.code,{children:"/[a-z]/"})]}),"\n",(0,r.jsxs)(n.li,{children:["Digit: ",(0,r.jsx)(n.code,{children:"/[\\d]/"}),(0,r.jsx)(n.br,{}),"\n","Use ",(0,r.jsx)(n.code,{children:".min()"})," and ",(0,r.jsx)(n.code,{children:".max()"})," to enforce length."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"confirmPassword"}),": A required field that must match the password field. Use the ",(0,r.jsx)(n.code,{children:".refine()"})," method to validate this field in context with the other fields in the form. When refining, specify that the error exists on the ",(0,r.jsx)(n.code,{children:"confirmPassword"})," path."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Native HTML date inputs return a string, so instead of using ",(0,r.jsx)(n.code,{children:"z.date()"}),", use ",(0,r.jsx)(n.code,{children:"z.coerce.date()"})," to convert and validate."]})}),"\n",(0,r.jsx)(n.admonition,{type:"important",children:(0,r.jsxs)(n.p,{children:["Ensure that required string fields do not pass validation if empty. Use ",(0,r.jsx)(n.code,{children:".min(1)"})," to enforce a minimum length."]})}),"\n",(0,r.jsxs)(n.p,{children:["Test your schema in the ",(0,r.jsxs)(n.a,{href:"https://zod-playground.vercel.app/",rel:"nofollow",children:["zod playground",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{className:"glossary-icon",children:" \u2197"})})]})," if needed."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"part-2-html-form",children:"Part 2: HTML Form"}),"\n",(0,r.jsxs)(n.p,{children:["Open ",(0,r.jsx)(n.code,{children:"Form.tsx"})," located in ",(0,r.jsx)(n.code,{children:"src/components/Form.tsx"}),". This file contains the form that you will be working with. All imports are already written for you."]}),"\n",(0,r.jsx)(n.h3,{id:"part-21-form-setup",children:"Part 2.1: Form Setup"}),"\n",(0,r.jsxs)(n.p,{children:["A form is declared for you using the ",(0,r.jsx)(n.code,{children:"useForm"})," hook from React Hook Form. This hook returns functions and properties that help manage form state. We have destructured ",(0,r.jsx)(n.code,{children:"register"}),", ",(0,r.jsx)(n.code,{children:"handleSubmit"}),", and ",(0,r.jsx)(n.code,{children:"errors"}),":"]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(t.A,{value:"destructured",label:"Destructured",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="Form.tsx"',children:"const {\n  register,\n  handleSubmit,\n  formState: { errors },\n} = useForm<Inputs>({\n  resolver: zodResolver(schema),\n});\n"})})}),(0,r.jsx)(t.A,{value:"not",label:"Not Destructured",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="Form.tsx"',children:"const form = useForm<Inputs>({\n  resolver: zodResolver(schema),\n});\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"zodResolver"})," ensures that our form uses our zod schema for validation. Define the ",(0,r.jsx)(n.code,{children:"Inputs"})," type using ",(0,r.jsx)(n.code,{children:"z.infer"})," based on your schema:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"const mySchema = z.object({\n  name: z.string(),\n  age: z.number(),\n});\n\ntype Inputs = z.infer<typeof mySchema>;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"part-22-registering-form-fields",children:"Part 2.2: Registering Form Fields"}),"\n",(0,r.jsxs)(n.p,{children:["We already have an input for the first name field. Use the ",(0,r.jsx)(n.code,{children:"register"})," function to bind it to the ",(0,r.jsx)(n.code,{children:"firstName"})," field in your schema:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'<input {...register("firstName")} id="firstName" type="text" />\n'})}),"\n",(0,r.jsx)(n.p,{children:"Create inputs for the other fields and register them accordingly."}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Hint: password and checkbox inputs"}),(0,r.jsxs)(n.p,{children:["Pass ",(0,r.jsx)(n.code,{children:'type="password"'})," and ",(0,r.jsx)(n.code,{children:'type="checkbox"'})," to create password and checkbox inputs."]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Hint: role select"}),(0,r.jsxs)(n.p,{children:["For dropdowns, use a ",(0,r.jsx)(n.code,{children:"select"})," element:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'<select {...register("role")} id="role">\n  <option value="student">Student</option>\n  <option value="educator">Educator</option>\n  <option value="parent/guardian">Parent/Guardian</option>\n</select>\n'})})]}),"\n",(0,r.jsxs)(n.p,{children:["Test your form by filling out the fields and submitting. The button with ",(0,r.jsx)(n.code,{children:'type="submit"'})," triggers the ",(0,r.jsx)(n.code,{children:"onSubmit"})," handler."]}),"\n",(0,r.jsx)(n.h3,{id:"part-23-error-messages",children:"Part 2.3: Error Messages"}),"\n",(0,r.jsx)(n.p,{children:"Display error messages under each input field using the errors object from React Hook Form:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'{errors.firstName && (\n  <p className="text-red-500">{errors.firstName.message}</p>\n)}\n'})}),"\n",(0,r.jsx)(n.p,{children:"If there\u2019s no error, the message won\u2019t display. Customize the error messages as needed."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"part-3-controlled-form-with-shadcn-components",children:"Part 3: Controlled Form with Shadcn Components"}),"\n",(0,r.jsxs)(n.p,{children:["After deploying the form, your boss asks for a more professional design. Instead of building everything from scratch, you\u2019ll use ",(0,r.jsxs)(n.a,{href:"https://ui.shadcn.com/",rel:"nofollow",children:["shadcn",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{className:"glossary-icon",children:" \u2197"})})]})," components."]}),"\n",(0,r.jsx)(n.p,{children:"Run the following command to add the shadcn input component:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bunx --bun shadcn@latest add input\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This command creates a new file in ",(0,r.jsx)(n.code,{children:"src/components/ui/input.tsx"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"using-the-components",children:"Using the Components"}),"\n",(0,r.jsxs)(n.p,{children:["Open ",(0,r.jsx)(n.code,{children:"ControlledForm.tsx"})," in ",(0,r.jsx)(n.code,{children:"src/components/ControlledForm.tsx"})," and uncomment the Input component import. Shadcn components handle form errors and labels out of the box. Use React Hook Form\u2019s ",(0,r.jsx)(n.code,{children:"control"})," object to make them controlled components."]}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="ControlledForm.tsx"',children:'<FormField\n  control={form.control}\n  name="email"\n  render={({ field }) => (\n    <FormItem>\n      <FormLabel>Email Address *</FormLabel>\n      <FormControl>\n        <Input placeholder="example@email.com" {...field} />\n      </FormControl>\n      <FormMessage />\n    </FormItem>\n  )}\n/>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Refer to the ",(0,r.jsxs)(n.a,{href:"https://ui.shadcn.com/docs/components/input",rel:"nofollow",children:["shadcn docs",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{className:"glossary-icon",children:" \u2197"})})]})," for additional examples. For the date picker, copy the ",(0,r.jsxs)(n.a,{href:"https://ui.shadcn.com/docs/components/date-picker#form",rel:"nofollow",children:["controlled date picker example",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{className:"glossary-icon",children:" \u2197"})})]}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Using shadcn improves accessibility by adhering to ARIA standards, making your form accessible for users with disabilities."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"optional-bonus-forms-with-arrays-and-conditional-fields",children:"Optional Bonus: Forms with Arrays and Conditional Fields"}),"\n",(0,r.jsx)(n.p,{children:"Often, forms need to handle arrays of data. For example, allowing a parent/guardian to add multiple children to their account."}),"\n",(0,r.jsx)(n.h3,{id:"updating-the-schema",children:"Updating the Schema"}),"\n",(0,r.jsx)(n.p,{children:"Add an array of children objects to the zod schema. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'export const formSchema = z.object({\n  // Existing fields...\n  children: z\n    .object({\n      name: z.string().min(1, "Required"),\n      grade: z.number().min(1).max(12),\n    })\n    .array()\n    .optional(),\n});\n'})}),"\n",(0,r.jsx)(n.h3,{id:"usefieldarray",children:"useFieldArray()"}),"\n",(0,r.jsxs)(n.p,{children:["Declare the ",(0,r.jsx)(n.code,{children:"useFieldArray()"})," hook:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'const { fields, append, remove } = useFieldArray({\n  control: form.control,\n  name: "children",\n});\n'})}),"\n",(0,r.jsx)(n.p,{children:"Render each child with mapped inputs:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'{\n  fields.map((child, index) => (\n    <div key={child.id} className="flex flex-col space-y-2">\n      <FormField\n        control={form.control}\n        name={`children.${index}.name`}\n        render={({ field }) => (\n          <FormItem>\n            <FormLabel>Child {index + 1} Name</FormLabel>\n            <FormControl>\n              <Input {...field} />\n            </FormControl>\n            <FormMessage />\n          </FormItem>\n        )}\n      />\n      <Button\n        variant={"ghost"}\n        onClick={() => remove(index)}\n        className="self-end"\n      >\n        <TrashIcon />\n      </Button>\n    </div>\n  ));\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Remember:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Use the index in the array for property access (e.g., ",(0,r.jsx)(n.code,{children:"children.0.name"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["Use the unique ",(0,r.jsx)(n.code,{children:"id"})," from ",(0,r.jsx)(n.code,{children:"useFieldArray()"})," as the key."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Conditionally render the children fields only if ",(0,r.jsx)(n.code,{children:"role"})," is ",(0,r.jsx)(n.code,{children:'"parent/guardian"'}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'{form.watch("role") === "parent/guardian" && (\n  // Render children inputs here\n)}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Congrats! You now have a fully functional sign up form that uses both shadcn components and Tailwind CSS to create a beautiful, responsive UI. Happy coding!"})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9365:(e,n,s)=>{s.d(n,{A:()=>t});s(6540);var r=s(4164);const i={tabItem:"tabItem_Ymn6"};var l=s(4848);function t(e){let{children:n,hidden:s,className:t}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,t),hidden:s,children:n})}},1470:(e,n,s)=>{s.d(n,{A:()=>w});var r=s(6540),i=s(4164),l=s(3104),t=s(6347),o=s(205),a=s(7485),d=s(1682),c=s(9466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:i}}=e;return{value:n,label:s,attributes:r,default:i}}))}(s);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const i=(0,t.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,a.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,l=u(e),[t,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[d,h]=p({queryString:s,groupId:i}),[m,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,c.Dv)(s);return[i,(0,r.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:i}),g=(()=>{const e=d??m;return x({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{g&&a(g)}),[g]);return{selectedValue:t,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),j(e)}),[h,j,l]),tabValues:l}}var j=s(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(4848);function b(e){let{className:n,block:s,selectedValue:r,selectValue:t,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),c=e=>{const n=e.currentTarget,s=a.indexOf(n),i=o[s].value;i!==r&&(d(n),t(i))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=a.indexOf(e.currentTarget)+1;n=a[s]??a[0];break}case"ArrowLeft":{const s=a.indexOf(e.currentTarget)-1;n=a[s]??a[a.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:h,onClick:c,...l,className:(0,i.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function y(e){let{lazy:n,children:s,selectedValue:i}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,f.jsx)(b,{...e,...n}),(0,f.jsx)(y,{...e,...n})]})}function w(e){const n=(0,j.A)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(n))}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var r=s(6540);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);