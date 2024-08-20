---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: ReactJS
info: |
  ## ReactJS course @Univ Rennes
  Master @istic

  Learn more at [istic](https://istic.univ-rennes.fr/)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
hideInToc: true
---

# React

A library for creating user interfaces.

<div align="center"><img src="/react/react.svg" width="30%"></div>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/barais/web.react" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

<Toc/>

---
hideInToc: false
layout: center
transition: fade-out

---

# What is React.js ?


---
hideInToc: true
---


# What is React.js

- React is a JavaScript library created by a collaboration of Facebook and Instagram
- It’s not MVC, only the "V" in "MVC"
- Big Companies use React
  - Facebook, Instagram, Yahoo!, Airbnb, Sony, Netflix

---
hideInToc: true
---

# Why was React.js made?

- React isn’t an MVC framework
- React does not use templates
- React updates are dead simple (Reactive pattern)
- HTML is just the beginning


---
hideInToc: true
---

# How is React.js used?

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.js"> </script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.js"> </script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.min.js"> </script>
<script src="app.js" type="text/babel"> </script>

<div id="root"></div>
```

Root DOM node


```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Render React element into root DOM node

---
hideInToc: true
---

# How is React.js used?

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.js"> </script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.js"> </script>

<div id="root"></div>

```

Root DOM node


```js
const element = React.createElement('h1', null, 'Hello react');
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Render React element into root DOM node



---
hideInToc: true
---

# Update the Rendered Element

```js
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}
setInterval(tick, 1000);
```


---
hideInToc: true
---

# Web components

> A React component is a reusable, self-contained piece of code that defines how a portion of the user interface (UI) should appear and behave. React components are the building blocks of a React application, and they can be as simple as a button or as complex as an entire page layout.

It could be seen a simple function that produces a piece of html

```jsx
function Car() {
  return <h2>Hi, I am a Car!</h2>;
}
```

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
```

<!-- ---

# How the technology works

- Elements, Component, and Properties
- Component Life Cycle
- JSX
- States
- Virtual DOM
- One Way Data Flow
--> 


---
hideInToc: false
layout: center
transition: fade-out

---

# React.js motivations?


---
layout: center
hideInToc: true

---

# Rule 1: Build components, not templates

---
layout: center
hideInToc: true

---

# We all like separation of concerns, right?

---
layout: center
hideInToc: true
---

# Separation of concerns:

> Reduce **coupling**, increase **cohesion**.

---
layout: center
hideInToc: true
---

# Coupling is:

> The degree to which each program module relies on each of the other modules.

[wikipedia (Coupling)](http://en.wikipedia.org/wiki/Coupling_(computer_science))

---
layout: center
hideInToc: true
---

# Cohesion is:
> "The degree to which elements of a module belong together."
[wikipedia (Cohesion)](http://en.wikipedia.org/wiki/Cohesion_(computer_science))

---
layout: center
hideInToc: true
---

# Templates encourage a poor separation of concerns.

 So are Angular-style directives.

---
layout: center
hideInToc: true
---

# "View model" tightly couples template to display logic

```json
[{"price": "7.99", "product": "Back scratcher", "tableRowColor": "rgba(0, 0, 0, 0.5)"}]
```

---
layout: center
hideInToc: true
---

# Display logic and markup are inevitably tightly coupled.

 How do you find DOM nodes?

---
hideInToc: true
layout: center
---

# Display logic and markup are highly cohesive.

 They both show the UI.

---
hideInToc: true
layout: center
---

# Templates separate technologies, not concerns.

And they do it by being deliberately underpowered.

---
hideInToc: true
layout: center
---

# Symptoms that your front-end technology is underpowered:

 Reliance on primitive abstractions like 
 
```html
{{ > }}
{{  #each }}
```

---
hideInToc: true
layout: center
---

# Symptoms that your front-end technology is underpowered:

Inventing lots of new concepts (that already exist in JavaScript).

---
hideInToc: true
layout: center
---

# From the Angular directives docs:

> However isolated scope creates a new problem: if a transcluded DOM is a child of the widget isolated scope then it will not be able to bind to anything. For this reason the transcluded scope is a child of the original scope, before the widget created an isolated scope for its local variables. This makes the transcluded and widget isolated scope siblings.

---
hideInToc: true
layout: center
---

# The framework cannot know how to separate your concerns for you.

It should only provide **powerful**, **expressive tools** for the user to do it correctly.

---
layout: center
hideInToc: true
---


# This tool is a React component

A **highly cohesive** building block for UIs **loosely coupled** with other components.

---
hideInToc: true
layout: center
---

# As an architect, use components to separate your concerns

With the full power of JavaScript, not a crippled templating language.

---
hideInToc: true
layout: center
---

# Components are **reusable**

---
hideInToc: true
layout: center
---

# Components are **composable**

---
hideInToc: true
layout: center
---

# Components are **unit testable**

They are, after all, units.

---
hideInToc: true
layout: center
---

# What about spaghetti code?

---
hideInToc: true
layout: center
---

# Just don’t write spaghetti code
Keep your components small.

---
hideInToc: true
layout: center
---

# Just don’t write spaghetti code
Only put *display logic* in your components.

---
hideInToc: true
layout: center
---

# Just don’t write spaghetti code.

> With great power comes great responsibility – Uncle Ben in Spiderman

---
hideInToc: true
layout: center
---

# What about **working with designers**?

----

# JSX / TSX

JSX is an *optional* preprocessor to let you use HTML-like syntax

```js
<a href=“http://olivier.barais.fr”>
    my personal web site
</a>
```

---
hideInToc: true
---

# JSX /TSX

JSX is an *optional* preprocessor to let you use HTML-like syntax

```js
React.DOM.a(
  {href: 'http://olivier.barais.fr'},
  'my personal web site'
)
```

---
layout: center
hideInToc: true
---

# With JSX, it’s easy for designers to contribute code


The accessibility of templates and the power of JavaScript


---
layout: center
---

# VirtualDOM

---
layout: center
hideInToc: true
---

# Rule 2. Re-render the whole app on every update

The **key design decision** that makes React awesome.

---
hideInToc: true
---

# Building UIs is hard because there is so much state

Lots of UI elements · Design iteration · Crazy environments · Mutable DOM · User input · etc etc

---
layout: center
hideInToc: true
---

# Data changing over time is the root of all evil


> “Our intellectual powers are rather geared to master static relations and our powers to visualize processes evolving in time are relatively poorly developed. For that reason we should do (as wise programmers aware of our limitations) our utmost to shorten the conceptual gap between the static program and the dynamic process, to make the correspondence between the program (spread out in text space) and the process (spread out in time) as trivial as possible” – Dijkstra


---
layout: center
hideInToc: true
---

# In the 90s it was easier

Just refresh the page when the data changes.


---
hideInToc: true
layout: center
---

# Design decision: When the data changes, **React re-renders the entire component**

### That is, **React components are basically just idempotent functions**

They describe your UI at any point in time, just like a server-rendered app.

---
hideInToc: true
layout: center
---

# Re-rendering on every change makes things simple

- Every place data is displayed is guaranteed to be up-to-date.
- No magical data binding.
- No model dirty checking.
- No more explicit DOM operations – **everything is declarative**

---
hideInToc: true
layout: center
---

# "Re-render on every change? That seems expensive."

> “And doesn't it mess up form fields and scroll position?”

---
layout: center
hideInToc: true
---

# Rule 3. Virtual DOM

Makes re-rendering on every change fast.

---
hideInToc: true
---

### You can’t just throw out the DOM and rebuild it on each update
It’s too slow and you’ll lose form state and scroll position.


### So React built a **virtual DOM** (and events system)
Optimized for performance and memory footprint

<div align="center"><img src="/react/img2.png" width="100%"></div>


---
hideInToc: true
---

# On every update...
- React builds a new virtual DOM subtree
- ... diffs it with the old one
- ... computes the minimal set of DOM mutations and puts them in a queue
- ... and batch executes all updates

---
hideInToc: true
---

<div align="center"><img src="/react/img3.png" width="100%"></div>



---
layout: center
hideInToc: true
---

# It’s **fast**!
Because the DOM is slow!

---
hideInToc: true
---

# The virtual DOM lets us do fun things

- **Testability** for free
- **SVG**, **VML** and **canvas** support
- Running the whole app in a Web Worker

---
layout: center
---

# React main concepts


---
hideInToc: true
---

<div align="center"><img src="/react/img1.png" width="100%"></div>

---
hideInToc: false
---

## Components

> A React component is a reusable, self-contained piece of code that defines how a portion of the user interface (UI) should appear and behave. React components are the building blocks of a React application, and they can be as simple as a button or as complex as an entire page layout.

It could be seen a simple function that produces a piece of html

```jsx
import { useState } from 'react';

export default function Counter(props) {
  const [count, setCount] = useState(props.counter);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>
  );
}
```

---
hideInToc: false
---

## Props

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Olivier" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

---
hideInToc: false
---

## State

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),1000);
  }
  componentWillUnmount() { clearInterval(this.timerID);}
  tick() {
    this.setState({ date: new Date()});
  }
  render() {
    return
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
  }
}
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

```

---

# Component Lifecycle
- Mounting
- Updating
- Unmounting

---
hideInToc: true
---

# Mounting
1. constructor()
2. componentWillMount()
3. render()
4. componentDidMount()

---
hideInToc: true
---

# Updating
1. componentWillReceiveProps()
2. shouldComponentUpdate()
3. componentWillUpdate()
4. render()
5. componentDidUpdate()

---
hideInToc: true
---

# Unmounting
1. componentWillUnmount()

---
layout: center
---

# Component development models

- Class components
- Function components


---

## Class components

```jsx
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```
a simple class with a method render

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
```

---
hideInToc: true
---

## Class components with props

```jsx
class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>;
  }
}
}
```
a simple class with a method render

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car model="Mustang"/>);
```

---
hideInToc: true
---

## Components in Components

```jsx
class Car extends React.Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <Car />
      </div>
    );
  }
}
```
a simple class with a method render

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```

---
hideInToc: true
---

## React Class Component State

```jsx
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
    };
  }
  changeColor = () => { this.setState({color: "blue"});  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    ); }
}

```

---
hideInToc: true
---

## React Class Component lifecycle methods

```jsx
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);
```

At first my favorite color is red, but give me a second, and it is yellow instead:

---

## Function components

```jsx
function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

```
a simple function that produce a piece of html

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
```

---
hideInToc: true
---

## Function components with Props

```jsx
function Car(props) {
  return <h2>I am a {props.color} Car!</h2>;
}

```
a simple function with parameter

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="red"/>);
```

---
hideInToc: true
---

## Components in Components

```jsx
function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

```

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```

---
hideInToc: true
---

# Limitations with functional dev model

Access to *lifecycle methods*, *changing state*, ... are a bit painfull

=> Hooks to the rescue

## What are Hooks ?
(Ques.) What is Hook in General terms ?
> (Ans.) a  curved  piece  of  metal, plastic,  etc. that  is used  for hanging or catching something

## What are Hooks in React ?


> Hooks  are  a  new  feature  addition  in React  version  16.8 which  allow you  to use  React  features  without  having  to write a class. 

> *Ex: State of a Component*

---
layout: center
hideInToc: true
---

# Motivations behind Hooks

---
hideInToc: true
---

# Why Hooks ?

**Reason 1**:  Classes confuse bath people and machines

- Understand  how this keyword works in JavaScript
- Remember to bind event handlers in class components
- Classes don't minify very well and make hot reloading very unreliable

> Better in Typescript ;)


---
hideInToc: true
---

# Why Hooks ?

**Reason 2**:  It's hard to reuse stateful logic between components

- There is no particular way to reuse stateful component logic
- HOC (Higher Order Component) and render  props patterns do address this problem but have to do some restructuring of components
- Makes the code harder to follow
- There is need a to share stateful logic in a better way

---
hideInToc: true
---

# Why Hooks ?

**Reason 3**:  Complex components become hard to understand
- Create  components   for  complex  scenarios  such  as  data   fetching  and subscribing to events
- Related code is not organized in one place
- Ex: Data fetching - In *componentDidMount* and *componentDidUpdate*
- Ex:Event Listeners - In *componentDidMount* and *componentWillUnmount*
- Because of stateful logic  - Cannot break components into smaller ones

---
layout: center
hideInToc: true
---

# Types and Rules of Using Hooks

---
hideInToc: true
---

# Types

Built-In Hooks :

- useState Hooks
- useEffect Hook
- useRef Hook
- useCallback Hook
- useMemo Hook
- useContext Hook
- useReducer Hook

Custom Hooks :

> You can create your own  custom  hooks if  you  have stateful logic that  is needed  by
multiple components in your application.

---
hideInToc: true
---

# Rules


Hooks are normal JavaScript functions,but they Impose some additional rules :

- Hooks are called only at the toplevel of a component.
- Do not call Hooks inside loops, conditions, or nested  functions.
- Hooks are called only **from React functional Components**.
- Do not call Hooks from regular JavaScript functions.

There is one other way to call Hooks i.e. in your own custom Hooks

---
layout: center
hideInToc: true
---

# Let us use your first Hooks

### useState(initialState) 

Call useState at the top level of your component to declare a state variable.

```jsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>
  );
}
```

https://react.dev/reference/react/hooks

---
layout: center
hideInToc: false
---

# Component hierarchy

---
hideInToc: true
---

# Component hierarchy

```jsx
function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

```

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```


---
layout: center
hideInToc: true
---

# Rule 4: a flow is unidirectional

All data flows down the component hierarchy

---
hideInToc: true
---

# Communication between Components

- [props and context](https://www.pluralsight.com/guides/react-communicating-between-components)

- [8 no-Flux strategies for React component communication](https://www.javascriptstuff.com/component-communication/)

---
hideInToc: true
---

# Communication between Components

- Use Flux or Redux

---
layout: center
hideInToc: true
---

# And it works with Typescript

- demo

```bash
npx create-react-app my-app --template typescript
cd my-app
npm start
```

---

# Conclusion on React

- Components, not templates.
- Three main concepts:
  - Components
  - Props
  - State
- Re-render, don’t mutate.
- Virtual DOM is **simple** and **fast**

- https://facebook.github.io/react/


