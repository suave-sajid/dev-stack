
<div align="center">

#  DevStack

**Explore the Technologies. Build your ideal tech stack, one pick at a time.**

</div>

---

##  About

**DevStack** is a personal portfolio and dev-tools web app that helps developers explore popular technologies and build their own custom tech stack. Browse categorized technologies — frontend, backend, and beyond — see quick info like difficulty level and popularity, and add your favorites to build a personalized stack, all in one clean, modern interface.

---

##  Built With

- **React** — Component-based UI library powering the app
- **Tailwind CSS** — Utility-first styling for a sleek, responsive design
- **React Toastify** — Toast notifications for smooth user feedback

---

##  Features

###  Curated Technology Explorer
Browse a categorized collection of frontend, backend, and other technologies — each with a short description, skill level, and rating to help you decide what fits your project.

###  Build Your Own Stack
Pick one technology per category and watch your personalized "Stack" build up in real time, so you can plan out your ideal tech combination before you start coding.

###  Smooth, Responsive UI
A polished, gradient-accented interface with instant toast feedback (via React Toastify) makes selecting and managing your stack feel fast and satisfying.

---


##  Status

DevStack is an actively evolving personal project, built as part of an ongoing journey into full-stack web development.

---


## Question And Answer



i. What is jsx, and why is it used in React?
**Ans:** Jsx is stand for Javascript XML. It allows ut to writw HTML directly within the Javascript code.
Expressions can be written inside curly braces {}. It makes it easier to write and add HTML in React.
In React, we can create a reusable component with jsx, where we can code html, css and js variously within a file which make easier to build a component .

--- 


ii. What is the difference between props and state?

**Ans:** Difference between Props and State

**Props**

1. Source: Pass Props from parent component to child Component
2. Mutability: Read-only(immutable)
3. Data-Control:  Parent component 
4. Re-render: If props change, component will re-render.

**State**

1. Source: State is created within self-component
2. Mutability: Mutable(with setter function)
3. Data-Control:  self-component 
4. Re-render: If state change with setter function, component will re-render.

---

iii. What does the useState hook do, and where did you use it in this project?

**Ans:** useState is a React Hook that lets a component remember information (state) and update the UI when that information changes. useState hook allows ut to keep track of string, numbers, booleans and any combination of these.

I used useState particularly when the techstack add or remove from the list and state changed in UI(button and stackpanel).


---

iv. What does the useEffect hook do, and why did you need it to load the JSON data?

**Ans:** useEffect is a React Hook used to run side effects—things your component needs to do outside of simply calculating and displaying JSX. React runs the useEffect function after the component renders.

In our Dev Stack App, we have JSON data that we want to load into the application. A React component can render many times. If fetch() is directly inside the component body, the request could run repeatedly whenever the component re-renders. useEffect resolve this problem and don't repeat it on subsequent renders.


---


v. Why does every item in a .map() list need a unique key prop?

**Ans:**  Every item rendered by .map() needs a unique key prop because React uses the key to identify which item is which between renders. Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list. Keys must be unique among siblings, but they don't have to be unique across the entire application. 
Without unique key, React cannot keep trace data which makes problem in add or remove data from a list. Using array Index, This works technically, but it's often bad when the list can change order, have items inserted, or have items deleted.


---


vi. What is conditional rendering? Show one place you used it ?


**Ans:**  Conditional rendering means showing different UI depending on a condition.
For example, in our TechStackCard, we only show the stacks which only added in your-stack. We also used in button, where if button clicked, stack added to stackPanel and button disable, color changed and also text changed.


---



vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?


**Ans:**  In React, data usually flows downward from parent → child through props.

React doesn't normally let a child directly change the parent's state. To send something back upward, the parent passes a function to the child, and the child calls that function.


