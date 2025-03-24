"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1099],{5461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var s=n(4848),o=n(8453);const a={sidebar_position:4},i="3. React",d={id:"Assignments/react-todo",title:"3. React",description:"Assignment Links",source:"@site/docs/Assignments/react-todo.md",sourceDirName:"Assignments",slug:"/Assignments/react-todo",permalink:"/docs/Assignments/react-todo",draft:!1,unlisted:!1,editUrl:"https://github.com/CS61D/website/tree/main/docs/Assignments/react-todo.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"2. Typescript",permalink:"/docs/Assignments/typescript"},next:{title:"4. Tailwind CSS",permalink:"/docs/Assignments/tailwind"}},r={},l=[{value:"Assignment Links",id:"assignment-links",level:2},{value:"Assignment Overview",id:"assignment-overview",level:2},{value:"Setup",id:"setup",level:3},{value:"Part 1: Creating Todo Items",id:"part-1-creating-todo-items",level:2},{value:"Part 1.1: Defining the Task Type",id:"part-11-defining-the-task-type",level:3},{value:"Part 1.2: Getting User Input",id:"part-12-getting-user-input",level:3},{value:"Part 1.3: Adding a Task",id:"part-13-adding-a-task",level:3},{value:"Part 2: Rendering Todo Items",id:"part-2-rendering-todo-items",level:2},{value:"Part 2.1: Defining the TaskItem Props",id:"part-21-defining-the-taskitem-props",level:3},{value:"Part 2.2: Rendering the Task",id:"part-22-rendering-the-task",level:3},{value:"Part 2.3: Event Handlers and Rendering the List",id:"part-23-event-handlers-and-rendering-the-list",level:3},{value:"Part 3: Refactor to Use Context",id:"part-3-refactor-to-use-context",level:2},{value:"Part 3.1: Creating the Context Type",id:"part-31-creating-the-context-type",level:3},{value:"Part 3.2: Implementing the Context and Deleting Props",id:"part-32-implementing-the-context-and-deleting-props",level:3},{value:"Part 4: Persisting State in Local Storage",id:"part-4-persisting-state-in-local-storage",level:2},{value:"Part 4.1: Saving State to Local Storage",id:"part-41-saving-state-to-local-storage",level:3},{value:"Part 4.2: Loading State from Local Storage",id:"part-42-loading-state-from-local-storage",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...(0,o.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"3-react",children:"3. React"}),"\n",(0,s.jsx)(t.h2,{id:"assignment-links",children:"Assignment Links"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"https://github.com/CS61D/Assignment-Starter-React",rel:"nofollow",children:["Starter Code",(0,s.jsx)(t.span,{children:(0,s.jsx)(t.img,{src:"/img/link-icons/github.svg",alt:"github",className:"github-icon",style:{width:"16px",height:"16px",marginLeft:"0.25rem",verticalAlign:"baseline"}})})]})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsxs)(t.a,{href:"https://todo.61d.org/",rel:"nofollow",children:["Final Product",(0,s.jsx)(t.span,{children:(0,s.jsx)(t.span,{className:"glossary-icon",children:" \u2197"})})]})," (what you will build)"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"https://youtube.com/playlist?list=PLKG9s9gYKALCJxk0pTV-Ap69Gl1pPGdOA&si=uJA0GxOaR9n_2Igc",rel:"nofollow",children:["Lecture 3: React Basics",(0,s.jsx)(t.span,{children:(0,s.jsx)(t.img,{src:"/img/link-icons/youtube.svg",alt:"youtube",className:"glossary-icon",style:{width:"16px",height:"16px",marginLeft:"0.25rem",verticalAlign:"baseline"}})})]})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"https://youtube.com/playlist?list=PLKG9s9gYKALCnkPy3cjAqeuKqZhFlLQsh&si=GUSwgWif6fMel6A2",rel:"nofollow",children:["Lecture 4: React State and Context",(0,s.jsx)(t.span,{children:(0,s.jsx)(t.img,{src:"/img/link-icons/youtube.svg",alt:"youtube",className:"glossary-icon",style:{width:"16px",height:"16px",marginLeft:"0.25rem",verticalAlign:"baseline"}})})]})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"https://classroom.github.com/a/-uCtH8RV",rel:"nofollow",children:["Github Classroom Assignment",(0,s.jsx)(t.span,{children:(0,s.jsx)(t.img,{src:"/img/link-icons/github.svg",alt:"github",className:"github-icon",style:{width:"16px",height:"16px",marginLeft:"0.25rem",verticalAlign:"baseline"}})})]})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Make sure to watch both lectures before attempting the assignment!"}),"\n",(0,s.jsx)(t.h2,{id:"assignment-overview",children:"Assignment Overview"}),"\n",(0,s.jsx)(t.p,{children:'Almost as classic as writing a "Hello World!" program for a new programming language, building a Todo list is a rite of passage for all budding developers. Still, it provides a fantastic opportunity to learn the basics of state management and composing components in React.'}),"\n",(0,s.jsxs)(t.p,{children:["First, take a look at the ",(0,s.jsxs)(t.a,{href:"https://todo.61d.org/",rel:"nofollow",children:["deployed solution",(0,s.jsx)(t.span,{children:(0,s.jsx)(t.span,{className:"glossary-icon",children:" \u2197"})})]})," to get a sense of what we will build. First, we will build a todo list that allows users to add, complete, and delete tasks. Then, we will refactor the code to use Context to simplify our state management. And finally, we will persist the state using local storage."]}),"\n",(0,s.jsx)(t.h3,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(t.p,{children:"Install the dependencies:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"bun install\n"})}),"\n",(0,s.jsx)(t.p,{children:"Start the development server:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"bun dev\n"})}),"\n",(0,s.jsxs)(t.p,{children:["And then view the starter code at ",(0,s.jsxs)(t.a,{href:"http://localhost:5173/",rel:"nofollow",children:["http://localhost:5173/",(0,s.jsx)(t.span,{children:(0,s.jsx)(t.span,{className:"glossary-icon",children:" \u2197"})})]})]}),"\n",(0,s.jsxs)(t.p,{children:["The project is mostly is empty. First, create a ",(0,s.jsx)(t.code,{children:"components/"})," directory within the ",(0,s.jsx)(t.code,{children:"src/"})," directory to store the components we will create. Then, create a ",(0,s.jsx)(t.code,{children:"TodoList.tsx"})," file within the ",(0,s.jsx)(t.code,{children:"components/"})," directory to start building the app. Later, we will use a separate ",(0,s.jsx)(t.code,{children:"TodoItem.tsx"})," component to render each individual todo item after it has been created."]}),"\n",(0,s.jsx)(t.h2,{id:"part-1-creating-todo-items",children:"Part 1: Creating Todo Items"}),"\n",(0,s.jsx)(t.h3,{id:"part-11-defining-the-task-type",children:"Part 1.1: Defining the Task Type"}),"\n",(0,s.jsxs)(t.p,{children:["It always make sense to start a project by thinking about the data you will work with, and what shape it should take. In this case, there is only one data type we need to define, and that is our ",(0,s.jsx)(t.code,{children:"Task"})," type. In ",(0,s.jsx)(t.code,{children:"taskTypes.ts"}),", create an export an object type ",(0,s.jsx)(t.code,{children:"Task"})," to represent a todo item. Think about the following when defining the properties of a ",(0,s.jsx)(t.code,{children:"Task"}),":"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"What data about a task is visually displayed to a user?"}),"\n",(0,s.jsx)(t.li,{children:"Is all of this data required, or should any of it be optional?"}),"\n",(0,s.jsx)(t.li,{children:"How will we uniquely identify each task?"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["After defining your ",(0,s.jsx)(t.code,{children:"Task"})," type, check your definition with the staff solution below."]}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Solution"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"export type Task = {\n  id: string;\n  taskName: string;\n  deadline?: number;\n  completed: boolean;\n};\n"})}),(0,s.jsx)(t.p,{children:"Considerations:"}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["We can't use the task name to uniquely identify a task. Also, the index of the task within a list is not a reliable identifier, as it can change when tasks are added or removed. Therefore, we need a unique ",(0,s.jsx)(t.code,{children:"id"})," property for each task."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"deadline"})," is optional because not all tasks have a deadline. If a task has a deadline, it should be a positive integer representing the number of days until the deadline."]}),"\n",(0,s.jsx)(t.li,{children:"Both the deadline and the id could either be strings or numbers, but we will use a string id and a number deadline for consistency."}),"\n"]})]}),"\n",(0,s.jsx)(t.h3,{id:"part-12-getting-user-input",children:"Part 1.2: Getting User Input"}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.code,{children:"TodoList.tsx"}),", create a form with two inputs, and a submit button. The inputs should either have labels that describe what they are for, or placeholders that indicate what should be entered."]}),"\n",(0,s.jsx)(t.p,{children:"Each input should have its value stored in state, and an onChange handler that updates the state when the input changes."}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Hint: onChange handlers"}),(0,s.jsxs)(t.p,{children:["A simple mapping of an input to a state value can be accomplished by setting the new value of the state to ",(0,s.jsx)(t.code,{children:"e.target.value"})," in the onChange handler."]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'const [newTaskName, setNewTaskName] = useState<string>("");\n'})}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'<input\n  type="text"\n  placeholder="Enter a task"\n  name="task"\n  value={newTaskName}\n  onChange={(e) => setNewTaskName(e.target.value)}\n  required\n/>\n'})})]}),"\n",(0,s.jsx)(t.p,{children:"Check that your form is correctly storing updates to state by rendering the value of the input fields below the form and testing that it updates as you type."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"<p>Task Name: {newTaskName}</p>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Export the component and render it in ",(0,s.jsx)(t.code,{children:"App.tsx"})," to see the form in action."]}),"\n",(0,s.jsx)(t.h3,{id:"part-13-adding-a-task",children:"Part 1.3: Adding a Task"}),"\n",(0,s.jsxs)(t.p,{children:["Create another state object ",(0,s.jsx)(t.code,{children:"todoList"})," to store an array of tasks. Make sure you type it correctly using the ",(0,s.jsx)(t.code,{children:"Task"})," type you defined earlier."]}),"\n",(0,s.jsxs)(t.p,{children:["Create a function ",(0,s.jsx)(t.code,{children:"addTask"})," that takes the task name and deadline as arguments, and adds a new task to the todo list by updating the ",(0,s.jsx)(t.code,{children:"todoList"})," state. Add an ",(0,s.jsx)(t.code,{children:"onClick"})," handler to the submit button that to call ",(0,s.jsx)(t.code,{children:"addTask"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["To get a unique id for each task, you can use the uuid npm package. These ",(0,s.jsxs)(t.a,{href:"../glossary#uuid-universally-unique-identifier",children:["uuids",(0,s.jsx)(t.span,{className:"glossary-icon",children:" \ud83d\udcd6"})]})," will be unique."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { v4 as uuidv4 } from \"uuid\";\nuuidv4(); // => '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"important",children:[(0,s.jsxs)(t.p,{children:["After you have updated the ",(0,s.jsx)(t.code,{children:"todoList"})," state, what else should you do to ensure the form is ready for the next task to be added?"]}),(0,s.jsx)(t.p,{children:"How can you ensure that the form is not submitted if the task name is empty?"})]}),"\n",(0,s.jsxs)(t.p,{children:["Make sure to test that the ",(0,s.jsx)(t.code,{children:"addTask"})," function is working correctly by adding a few tasks and checking that they are displayed below the form by JSON stringifying the ",(0,s.jsx)(t.code,{children:"todoList"})," state."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"<p>{JSON.stringify(todoList)}</p>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"part-2-rendering-todo-items",children:"Part 2: Rendering Todo Items"}),"\n",(0,s.jsxs)(t.p,{children:["Our ",(0,s.jsx)(t.code,{children:"TodoList.tsx"})," component is already getting cluttered, and creating the todos and rendering them represents a logical separation of concerns that makes sense to be handled in different components. Create a new ",(0,s.jsx)(t.code,{children:"TodoItem.tsx"})," component within the ",(0,s.jsx)(t.code,{children:"components/"})," which will be responsible for an individual todo item."]}),"\n",(0,s.jsxs)(t.p,{children:["Since we are rendering the ",(0,s.jsx)(t.code,{children:"TodoItem"})," component as a child of the ",(0,s.jsx)(t.code,{children:"TodoList"})," component, we want to keep all of our state hoisted in the ",(0,s.jsx)(t.code,{children:"TodoList"})," component. The ",(0,s.jsx)(t.code,{children:"TodoItem"})," component will not store any of its own state, and instead will receive state and event handlers from its parent component as props."]}),"\n",(0,s.jsx)(t.h3,{id:"part-21-defining-the-taskitem-props",children:"Part 2.1: Defining the TaskItem Props"}),"\n",(0,s.jsxs)(t.p,{children:["Take a look at the todo items in the ",(0,s.jsxs)(t.a,{href:"https://todo.61d.org/",rel:"nofollow",children:["deployed solution",(0,s.jsx)(t.span,{children:(0,s.jsx)(t.span,{className:"glossary-icon",children:" \u2197"})})]}),". What information about a task is displayed in each todo item? What actions can be taken on a task? With this in mind, define a the props for the ",(0,s.jsx)(t.code,{children:"TodoItem"})," component in ",(0,s.jsx)(t.code,{children:"TodoItem.tsx"}),"."]}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Hint 1: Breaking Down the Data"}),(0,s.jsx)(t.p,{children:"If you are unsure about what props are needed, consider breaking it down into the data that is needed for display, and the actions that can be taken on the task."}),(0,s.jsxs)(t.p,{children:["The data is just going to be a ",(0,s.jsx)(t.code,{children:"Task"})," object, but the actions are going to be functions that can be called when a user interacts with the task. What two actions can be taken on a task? What data do these actions need to take in as arguments to identify the task they are acting on?"]})]}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Solution (check before moving on)"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"type TodoItemProps = {\n  task: Task;\n  handleCompleteTask: (taskNameToComplete: string) => void;\n  handleDeleteTask: (taskNameToDelete: string) => void;\n};\n"})}),(0,s.jsx)(t.p,{children:"Our two event handlers should take in the task id. They are updating state, so they should not return anything."})]}),"\n",(0,s.jsx)(t.h3,{id:"part-22-rendering-the-task",children:"Part 2.2: Rendering the Task"}),"\n",(0,s.jsxs)(t.p,{children:["Based on the data passed in to the ",(0,s.jsx)(t.code,{children:"TodoItem"})," component, render the task name, deadline, and a checkbox to indicate whether the task is completed. Make sure it is clear what each piece of data you are rendering represents."]}),"\n",(0,s.jsxs)(t.p,{children:["To add the strike-through effect to the task name when it is completed, you can use the ",(0,s.jsx)(t.code,{children:"textDecoration"})," CSS property. This property can be set to ",(0,s.jsx)(t.code,{children:"line-through"})," to add a line through the text, and ",(0,s.jsx)(t.code,{children:"none"})," to remove it."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'<span style={{ textDecoration: condition ? "line-through" : "none" }}>\n  {/* Text */}\n</span>\n'})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"The task deadline is an optional property. Use conditional rendering to make sure that any text labeling the deadline is only displayed if the deadline is defined."})}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Rendering a Checkbox"}),(0,s.jsxs)(t.p,{children:["A checkbox can be rendered by passing ",(0,s.jsx)(t.code,{children:'type="checkbox"'})," to an input element. The ",(0,s.jsx)(t.code,{children:"checked"})," attribute controls whether the checkbox is checked or not."]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'<input type="checkbox" checked={true} />\n'})})]}),"\n",(0,s.jsxs)(t.p,{children:["Make sure that the ",(0,s.jsx)(t.code,{children:"TodoItem"})," component is working correctly by rendering it in the ",(0,s.jsx)(t.code,{children:"TodoList"})," component with some dummy data."]}),"\n",(0,s.jsx)(t.h3,{id:"part-23-event-handlers-and-rendering-the-list",children:"Part 2.3: Event Handlers and Rendering the List"}),"\n",(0,s.jsxs)(t.p,{children:["Bind the passed in event handlers to the checkbox and delete button. The checkbox should call the ",(0,s.jsx)(t.code,{children:"handleToggleCompleteTask"})," function when it is clicked, and the delete button should call the ",(0,s.jsx)(t.code,{children:"handleDeleteTask"})," function. Both of these functions should pass in the task id as an argument."]}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.code,{children:"TodoList.tsx"}),", create the ",(0,s.jsx)(t.code,{children:"handleToggleCompleteTask"})," and ",(0,s.jsx)(t.code,{children:"handleDeleteTask"})," functions. These functions should update the ",(0,s.jsx)(t.code,{children:"todoList"})," state by toggling the ",(0,s.jsx)(t.code,{children:"completed"})," property of the task with the given id, and removing the task with the given id, respectively."]}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Hint: Deleting an item"}),(0,s.jsxs)(t.p,{children:["This can be done by filtering the ",(0,s.jsx)(t.code,{children:"todoList"})," state to remove the task with the given id."]})]}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Hint: Toggling a checked item"}),(0,s.jsxs)(t.p,{children:["This can be done by mapping over the ",(0,s.jsx)(t.code,{children:"todoList"})," state and only changing the task with the given id. To set the completed property to the opposite of its current value, you can use the ",(0,s.jsx)(t.code,{children:"!"})," operator. Ensure that no other properties of the task are changed."]})]}),"\n",(0,s.jsxs)(t.p,{children:["Finally, render a list of ",(0,s.jsx)(t.code,{children:"TodoItem"})," components in the ",(0,s.jsx)(t.code,{children:"TodoList"})," component. Make sure that the ",(0,s.jsx)(t.code,{children:"TodoList"})," component is passing the correct props to each ",(0,s.jsx)(t.code,{children:"TodoItem"})," component. Congrats! You now have a working todo list."]}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Hint: Rendering the list"}),(0,s.jsxs)(t.p,{children:["You can map over the ",(0,s.jsx)(t.code,{children:"todoList"})," state to render a ",(0,s.jsx)(t.code,{children:"TodoItem"})," component for each task. Make sure to pass in the correct props to each ",(0,s.jsx)(t.code,{children:"TodoItem"})," component."]})]}),"\n",(0,s.jsx)(t.h2,{id:"part-3-refactor-to-use-context",children:"Part 3: Refactor to Use Context"}),"\n",(0,s.jsx)(t.p,{children:"Our todo list is rather simple, and we only have to pass state and event handlers down one level. However, any app even slightly more complex than ours will quickly become unwieldy if we have to pass state and event handlers down multiple levels. Context is a way to share state and event handlers across multiple child components without having to pass them down through props."}),"\n",(0,s.jsx)(t.h3,{id:"part-31-creating-the-context-type",children:"Part 3.1: Creating the Context Type"}),"\n",(0,s.jsxs)(t.p,{children:["Open ",(0,s.jsx)(t.code,{children:"TodoContext.tsx"})," in the ",(0,s.jsx)(t.code,{children:"src/providers/"})," directory. Notice that we have two defined exports:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"TodoProvider"})," will wrap our application and hold the state and event handlers that we want to access in any child component. Any child component wrapped by the ",(0,s.jsx)(t.code,{children:"TodoProvider"})," will have access to the state and event handlers."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"useTodo"})," is a custom hook that will allow us to access the state and event handlers stored in the ",(0,s.jsx)(t.code,{children:"TodoProvider"})," from any child component. In addition to removing the need to pass props down through multiple levels of components, this hook allows us to only modify our state in predefined ways, making our code easier to read and maintain."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Fill in the ",(0,s.jsx)(t.code,{children:"TodoContextType"})," to define what state and event handlers will be available through the ",(0,s.jsx)(t.code,{children:"useTodo"})," hook. Think about what state in our application is needed in both the ",(0,s.jsx)(t.code,{children:"TodoList"})," and ",(0,s.jsx)(t.code,{children:"TodoItem"})," components. What are the three different places / ways we mutate this state?"]}),"\n",(0,s.jsx)(t.p,{children:"Hint: What are the three event handlers we written so far?"}),"\n",(0,s.jsx)(t.p,{children:"Check your solution before moving on to the next step."}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Solution"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'type TodoContextType = {\n  tasks: Task[]; // The list of tasks\n  // Add task to the list needs the task name and deadline\n  addTask: (task: Omit<Task, "id" | "completed">) => void;\n  deleteTask: (id: string) => void;\n  toggleCompleteTask: (id: string) => void;\n};\n'})}),(0,s.jsxs)(t.p,{children:["It doesn't make sense to store the state of the task name or deadline inputs in context, since they are only needed locally in the ",(0,s.jsx)(t.code,{children:"TodoList"})," component."]})]}),"\n",(0,s.jsx)(t.h3,{id:"part-32-implementing-the-context-and-deleting-props",children:"Part 3.2: Implementing the Context and Deleting Props"}),"\n",(0,s.jsxs)(t.p,{children:["Fortunately, we have already written all of the state logic for our todo list. All we need to do is move this logic into the ",(0,s.jsx)(t.code,{children:"TodoProvider"})," component."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Move the ",(0,s.jsx)(t.code,{children:"todoList"})," state and the ",(0,s.jsx)(t.code,{children:"addTask"}),", ",(0,s.jsx)(t.code,{children:"deleteTask"}),", and ",(0,s.jsx)(t.code,{children:"toggleCompleteTask"})," functions into the ",(0,s.jsx)(t.code,{children:"TodoProvider"})," component."]}),"\n",(0,s.jsxs)(t.li,{children:["Import the ",(0,s.jsx)(t.code,{children:"TodoProvider"})," component into ",(0,s.jsx)(t.code,{children:"App.tsx"})," and wrap the ",(0,s.jsx)(t.code,{children:"TodoList"})," component with it."]}),"\n",(0,s.jsxs)(t.li,{children:["Import the ",(0,s.jsx)(t.code,{children:"useTodo"})," hook into ",(0,s.jsx)(t.code,{children:"TodoList.tsx"})," and use it to access the ",(0,s.jsx)(t.code,{children:"tasks"})," state and the ",(0,s.jsx)(t.code,{children:"addTask"})," function."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Now, instead of declaring the ",(0,s.jsx)(t.code,{children:"todoList"})," state and the event handlers in the ",(0,s.jsx)(t.code,{children:"TodoList"})," component, we can use the ",(0,s.jsx)(t.code,{children:"useTodo"})," hook to access them."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"const { tasks, addTask } = useTodo(); // addTask will be a function\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Finally, remove the passed in ",(0,s.jsx)(t.code,{children:"handleToggleCompleteTask"})," and ",(0,s.jsx)(t.code,{children:"handleDeleteTask"})," props from the ",(0,s.jsx)(t.code,{children:"TodoItem"})," component, and replace them with the ",(0,s.jsx)(t.code,{children:"toggleCompleteTask"})," and ",(0,s.jsx)(t.code,{children:"deleteTask"})," functions from the ",(0,s.jsx)(t.code,{children:"useTodo"})," hook. The ",(0,s.jsx)(t.code,{children:"TodoItem"})," will still need to take in the ",(0,s.jsx)(t.code,{children:"task"})," prop to determine which task to render."]}),"\n",(0,s.jsx)(t.p,{children:"Our refactored code now has the same functionality, but a much cleaner structure."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Our complex state management is handled in its own file, reducing the complexity of our ",(0,s.jsx)(t.code,{children:"TodoList"})," component."]}),"\n",(0,s.jsxs)(t.li,{children:["We now have two fewer props to pass to our ",(0,s.jsx)(t.code,{children:"TodoItem"})," component, making it easier to read and maintain."]}),"\n",(0,s.jsxs)(t.li,{children:["Future components that need access to the same global state can easily access it by importing the ",(0,s.jsx)(t.code,{children:"useTodo"})," hook."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"part-4-persisting-state-in-local-storage",children:"Part 4: Persisting State in Local Storage"}),"\n",(0,s.jsxs)(t.p,{children:["As a final quality of life improvement, our todo list would be much more useful if it persisted our information even when refreshing the page. For an app as simple as ours, the browser provides a perfect solution, ",(0,s.jsxs)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage#examples",rel:"nofollow",children:["local storage",(0,s.jsx)(t.span,{children:(0,s.jsx)(t.span,{className:"glossary-icon",children:" \u2197"})})]}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The browser's local storage is a key-value store that persists data for a given domain."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'localStorage.setItem("myKey", "myValue");\nlocalStorage.getItem("myKey"); // => "myValue"\nlocalStorage.removeItem("myKey"); // Removes the key-value pair\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Local storage is limited to storing strings, but we can get around this by using ",(0,s.jsx)(t.code,{children:"JSON.stringify"})," and ",(0,s.jsx)(t.code,{children:"JSON.parse"})," to convert our objects to strings and back."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'const tasks = [{ id: "1", taskName: "Do the dishes", deadline: 3, completed: false }];\n\n// Store data\nlocalStorage.setItem("tasks", JSON.stringify(tasks));\n\n// Retrieve data\nconst storedTasks = JSON.parse(localStorage.getItem("tasks")) as Task[];\n'})}),"\n",(0,s.jsxs)(t.p,{children:["We could manually update our local storage in every event handler, but this would be repetitive and cumbersome. Instead, we can use the ",(0,s.jsx)(t.code,{children:"useEffect"})," hook to automatically listen for changes to ",(0,s.jsx)(t.code,{children:"tasks"})," and update local storage whenever our ",(0,s.jsx)(t.code,{children:"tasks"})," state changes."]}),"\n",(0,s.jsx)(t.h3,{id:"part-41-saving-state-to-local-storage",children:"Part 4.1: Saving State to Local Storage"}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.code,{children:"TodoProvider"})," component, use the ",(0,s.jsx)(t.code,{children:"useEffect"})," hook to save the ",(0,s.jsx)(t.code,{children:"tasks"})," state to local storage whenever it changes. This will ensure that our tasks are saved even when the page is refreshed."]}),"\n",(0,s.jsx)(t.p,{children:"Make sure to define the dependencies for when this effect should run."}),"\n",(0,s.jsxs)(t.p,{children:["To test that your tasks are being saved, add some tasks, and then pull up the browser's developer tools to inspect the local storage. You should see a key-value pair for ",(0,s.jsx)(t.code,{children:"tasks"})," with the stringified version of your tasks."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:['Right click on the page and select "Inspect" or press ',(0,s.jsx)(t.code,{children:"Ctrl + Shift + I"}),"."]}),"\n",(0,s.jsx)(t.li,{children:'Go to the "Application" tab.'}),"\n",(0,s.jsx)(t.li,{children:'On the left side, you should see a "Local Storage" section. Click on it to see the key-value pairs stored in local storage.'}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["It should look something like this:\n",(0,s.jsx)(t.img,{alt:"local-storage",src:n(6950).A+"",width:"2808",height:"606"})]}),"\n",(0,s.jsx)(t.h3,{id:"part-42-loading-state-from-local-storage",children:"Part 4.2: Loading State from Local Storage"}),"\n",(0,s.jsxs)(t.p,{children:["If you refresh the page, you will notice that your tasks are still saved in local storage, but they are not being loaded back into the ",(0,s.jsx)(t.code,{children:"tasks"})," state when the page is refreshed."]}),"\n",(0,s.jsxs)(t.p,{children:["To fix this, instead of initializing the ",(0,s.jsx)(t.code,{children:"tasks"})," state to an empty array, initialize it to the tasks stored in local storage. If there are no tasks stored in local storage, the ",(0,s.jsx)(t.code,{children:"tasks"})," state should be initialized to an empty array."]}),"\n",(0,s.jsx)(t.p,{children:"Make sure that you parse the data fetched from local storage setting the state."}),"\n",(0,s.jsx)(t.p,{children:"Congratulations! You have now built a fully functional todo list that persists tasks even when the page is refreshed."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},6950:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/localstorage-fa3079ccac301df9db56d291e3da0653.png"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var s=n(6540);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);