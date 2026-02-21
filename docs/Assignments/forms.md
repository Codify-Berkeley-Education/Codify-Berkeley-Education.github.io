---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 4. Forms(Oudated)

## Assignment Links

- [Starter Code](https://github.com/Codify-Berkeley-Education/Assignment-Starter-Forms)
- [Finished Solution](https://forms.61d.org/) (what you will build)
- [Lecture 5: Forms & Validation](https://www.youtube.com/playlist?list=PLKG9s9gYKALAfl18EoFXxRRu7ORmGWE3J)
- [Lecture 6: Basic CSS & Tailwind](https://youtube.com/playlist?list=PLKG9s9gYKALDF-_Snq9CjiriDqWFkj3yU&si=fiMEUNDQza0Zulpn)
<!-- - - [GitHub Classroom Assignment]() -->

## Assignment Overview

You are a front-end developer for a hot new ed-tech startup. You are tasked with creating a sign up form for new users to create accounts on the platform. You need to make sure that the form is user-friendly, responsive, and most importantly, validates user input before sending it to the backend.

First, take a look at the [finished solution](https://forms.61d.org/) to see what you will be building. Try filling in the form with both valid and invalid data to see how the form behaves. Each individual field has its own rules, and error messages explain what went wrong when a user tries to submit invalid data.

You will start by defining a [zod](https://zod.dev/) validation schema to define the shape of the form data and the validation rules for each field. Then we will integrate it with [React Hook Form](https://react-hook-form.com/) to handle the form state, and associate inputs with fields in our schema. Finally, we will show how to use pre-built [shadcn](https://ui.shadcn.com/) components with React Hook Form to create a more polished and professional look.

You will only have to edit `validator.ts`, `Form.tsx`, and `ControlledForm.tsx` in parts 1-3 respectively.

---

## Tailwind CSS Overview & Integration

**What is Tailwind CSS?**  
Tailwind CSS is a utility-first CSS framework that lets you style your UI by composing small, reusable utility classes. Instead of writing custom CSS for each component, you can apply classes directly in your JSX to manage layout, spacing, colors, and more.

**Commonly Used Utility Classes:**

- **Layout:**  
  - `container`, `mx-auto` (center content)  
  - `flex`, `grid` (flexbox and grid layouts)

- **Spacing:**  
  - Padding: `p-4`, `pt-2`, `px-6`  
  - Margin: `m-4`, `mt-2`, `mb-6`

- **Typography:**  
  - Text size & weight: `text-lg`, `font-bold`, `text-center`

- **Colors:**  
  - Background: `bg-blue-500`, `bg-gray-100`  
  - Text: `text-white`, `text-gray-800`  
  - Border: `border`, `border-gray-300`

- **Effects & States:**  
  - Shadows: `shadow`, `shadow-lg`  
  - Rounded corners: `rounded`, `rounded-md`  
  - Hover effects: `hover:bg-blue-600`, `hover:text-white`

- **Responsive Design:**  
  - Prefix with breakpoints: `sm:`, `md:`, `lg:`, etc.

**Incorporating Tailwind into the Forms Project:**

1. **Verify Installation:**  
   Tailwind CSS is already part of the project dependencies. Confirm that your `package.json` includes Tailwind and that a `tailwind.config.ts` file exists.

2. **Include Tailwind Directives:**  
   In your main CSS file (for example, `src/index.css`), add the following at the top:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
   This ensures that Tailwind’s base styles, component styles, and utility classes are available throughout the project.

3. **Customize the Config:**  
   Open `tailwind.config.ts` and update or extend the theme as needed. For example, you might add custom colors or spacing that match your design:
   ```ts
   extend: {
     colors: {
       background: 'hsl(var(--background))',
       foreground: 'hsl(var(--foreground))',
     },
   },
   ```
   This lets you use classes like `bg-background` and `text-foreground`.

4. **Using Utility Classes in JSX:**  
   You can now apply Tailwind classes directly in your components. For instance, to add padding and a background color:
   ```tsx
   <div className="p-4 bg-gray-100">
     {/* form content */}
   </div>
   ```
   Feel free to mix Tailwind classes with shadcn components for custom styling.

5. **Restart the Dev Server:**  
   After making changes, run:
   ```bash
   bun dev
   ```
   and view your project at [http://localhost:5173/](http://localhost:5173/).

---

## Tailwind CSS Practical Exercises

Now that Tailwind CSS is integrated into the project, try these exercises to get hands-on practice:

1. **Form Container Styling:**  
   - Add utility classes to the form container (e.g. in `Form.tsx`) to center it on the page using `mx-auto` and add padding with `p-6` or `p-4`.
   - Experiment with background colors like `bg-gray-100` or your custom `bg-background`.

2. **Input Field Styling:**  
   - Style the input fields by adding classes such as `border`, `rounded`, and `p-2` for spacing.
   - Add focus states with classes like `focus:outline-none` and `focus:ring-2` to improve usability.

3. **Button Styling:**  
   - Enhance the submit button by applying classes such as:
     ```html
     className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
     ```
   - This will give the button a modern look and a responsive hover effect.

4. **Responsive Design:**  
   - Use responsive utility classes to adjust layout on different screen sizes. For instance, change padding or margins on mobile vs. desktop with classes like `p-4 md:p-8`.

5. **Custom Color Usage:**  
   - Update your `tailwind.config.ts` with custom colors if you haven't already.
   - Apply these custom colors in your components by using classes like `bg-background` and `text-foreground`.

Take a few minutes to experiment with these exercises. They’re designed to give you a practical feel for how Tailwind CSS can rapidly improve your UI design.

---

## Setup

Install the [dependencies](../glossary#dependency):

```bash
bun install
```

Start the development server:

```bash
bun dev
```

Then view the starter code at [http://localhost:5173/](http://localhost:5173/)

---

## Part 1: Form Content and Validation

We want our form to have the following fields and rules. Open up `validator.ts` in `src/lib/` and add each field to the zod validator. Remember that zod fields are required by default.

1. **firstName**: A required, nonempty string  
2. **lastName**: A required, nonempty string  
3. **email**: A required email address. Zod has a [built in](https://zod.dev/?id=strings) `.email()` method that you can use to validate email addresses.  
4. **role**: An optional field that must be one of "student", "educator", or "parent/guardian". Use a [zod enum](https://zod.dev/?id=zod-enums) to ensure that the role can't just be any arbitrary string.  
5. **subscribe**: A required boolean field  
6. **birthDate**: An optional field that must be a valid date in the past. You can use the `.date()` method from zod to validate this.  
7. **password**: A required field that must pass the following rules  
   - Between 8-20 characters  
   - At least one uppercase letter  
   - At least one lowercase letter  
   - At least one digit  
   These properties can be enforced through [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) (regex), which zod supports with the `.regex()` operator. Useful regex patterns include:  
   - Uppercase letter: `/[A-Z]/`  
   - Lowercase letter: `/[a-z]/`  
   - Digit: `/[\d]/`  
   Use `.min()` and `.max()` to enforce length.

8. **confirmPassword**: A required field that must match the password field. Use the `.refine()` method to validate this field in context with the other fields in the form. When refining, specify that the error exists on the `confirmPassword` path.

:::note
Native HTML date inputs return a string, so instead of using `z.date()`, use `z.coerce.date()` to convert and validate.
:::

:::important
Ensure that required string fields do not pass validation if empty. Use `.min(1)` to enforce a minimum length.
:::

Test your schema in the [zod playground](https://zod-playground.vercel.app/) if needed.

---

## Part 2: HTML Form

Open `Form.tsx` located in `src/components/Form.tsx`. This file contains the form that you will be working with. All imports are already written for you.

### Part 2.1: Form Setup

A form is declared for you using the `useForm` hook from React Hook Form. This hook returns functions and properties that help manage form state. We have destructured `register`, `handleSubmit`, and `errors`:

<Tabs>
  <TabItem value="destructured" label="Destructured" default>
    ```tsx title="Form.tsx"
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>({
      resolver: zodResolver(schema),
    });
    ```
  </TabItem>
  <TabItem value="not" label="Not Destructured">
    ```tsx title="Form.tsx"
    const form = useForm<Inputs>({
      resolver: zodResolver(schema),
    });
    ```
  </TabItem>
</Tabs>

The `zodResolver` ensures that our form uses our zod schema for validation. Define the `Inputs` type using `z.infer` based on your schema:

```tsx
const mySchema = z.object({
  name: z.string(),
  age: z.number(),
});

type Inputs = z.infer<typeof mySchema>;
```

### Part 2.2: Registering Form Fields

We already have an input for the first name field. Use the `register` function to bind it to the `firstName` field in your schema:

```tsx
<input {...register("firstName")} id="firstName" type="text" />
```

Create inputs for the other fields and register them accordingly.

<details>
  <summary>Hint: password and checkbox inputs</summary>

Pass `type="password"` and `type="checkbox"` to create password and checkbox inputs.
</details>

<details>
  <summary>Hint: role select</summary>

For dropdowns, use a `select` element:
```tsx
<select {...register("role")} id="role">
  <option value="student">Student</option>
  <option value="educator">Educator</option>
  <option value="parent/guardian">Parent/Guardian</option>
</select>
```
</details>

Test your form by filling out the fields and submitting. The button with `type="submit"` triggers the `onSubmit` handler.

### Part 2.3: Error Messages

Display error messages under each input field using the errors object from React Hook Form:

```tsx
{errors.firstName && (
  <p className="text-red-500">{errors.firstName.message}</p>
)}
```

If there’s no error, the message won’t display. Customize the error messages as needed.

---

## Part 3: Controlled Form with Shadcn Components

After deploying the form, your boss asks for a more professional design. Instead of building everything from scratch, you’ll use [shadcn](https://ui.shadcn.com/) components.

Run the following command to add the shadcn input component:

```bash
bunx --bun shadcn@latest add input
```

This command creates a new file in `src/components/ui/input.tsx`.

### Using the Components

Open `ControlledForm.tsx` in `src/components/ControlledForm.tsx` and uncomment the Input component import. Shadcn components handle form errors and labels out of the box. Use React Hook Form’s `control` object to make them controlled components.

For example:

```tsx title="ControlledForm.tsx"
<FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Email Address *</FormLabel>
      <FormControl>
        <Input placeholder="example@email.com" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
```

Refer to the [shadcn docs](https://ui.shadcn.com/docs/components/input) for additional examples. For the date picker, copy the [controlled date picker example](https://ui.shadcn.com/docs/components/date-picker#form).

Using shadcn improves accessibility by adhering to ARIA standards, making your form accessible for users with disabilities.

---

## Optional Bonus: Forms with Arrays and Conditional Fields

Often, forms need to handle arrays of data. For example, allowing a parent/guardian to add multiple children to their account.

### Updating the Schema

Add an array of children objects to the zod schema. For example:
```tsx
export const formSchema = z.object({
  // Existing fields...
  children: z
    .object({
      name: z.string().min(1, "Required"),
      grade: z.number().min(1).max(12),
    })
    .array()
    .optional(),
});
```

### useFieldArray()

Declare the `useFieldArray()` hook:
```tsx
const { fields, append, remove } = useFieldArray({
  control: form.control,
  name: "children",
});
```

Render each child with mapped inputs:
```tsx
{
  fields.map((child, index) => (
    <div key={child.id} className="flex flex-col space-y-2">
      <FormField
        control={form.control}
        name={`children.${index}.name`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Child {index + 1} Name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button
        variant={"ghost"}
        onClick={() => remove(index)}
        className="self-end"
      >
        <TrashIcon />
      </Button>
    </div>
  ));
}
```

Remember:
1. Use the index in the array for property access (e.g., `children.0.name`).
2. Use the unique `id` from `useFieldArray()` as the key.

Conditionally render the children fields only if `role` is `"parent/guardian"`:
```tsx
{form.watch("role") === "parent/guardian" && (
  // Render children inputs here
)}
```

Congrats! You now have a fully functional sign up form that uses both shadcn components and Tailwind CSS to create a beautiful, responsive UI. Happy coding!
