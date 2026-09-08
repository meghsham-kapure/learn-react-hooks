# 01 Introduction To React Hooks

## Before Hooks

Before React Hooks, React had two main ways to create components:

- Function Components
  - Used only for rendering UI.
  - Could not have state or lifecycle methods.

- Class Components
  - Used when state, lifecycle methods, or other React features were needed.

Example responsibilities of class components:

- State management using `this.state`
- Updating state using `this.setState`
- Lifecycle methods such as:
  - `componentDidMount`
  - `componentDidUpdate`
  - `componentWillUnmount`

Because of this, many components had to be written as classes even when they were otherwise simple.

## Why Hooks Were Introduced

Hooks were introduced to solve several problems:

- Reuse stateful logic between components without complex patterns.
- Reduce reliance on class components.
- Make component logic easier to organize.
- Avoid lifecycle-method duplication.
- Write React features using plain functions.

Hooks were introduced in React 16.8 (2019).

Hooks brought React features that previously existed mostly in class components into function components, making function components capable of handling state, side effects, and other advanced React behavior without using classes.

## What Are Hooks?

Hooks are special React functions that allow function components to use React features of class components such as:

- State
- Side effects
- Context
- References
- Performance optimizations

Without converting the component into a class.

## Common uses of Hooks?

- Store component state
- Perform API calls
- Access lifecycle behavior
- Manage DOM references
- Consume context values
- Optimize rendering
- Share reusable logic through custom hooks

## Common Hooks

- `useState` : Component state
- `useEffect` : Side effects and lifecycle behavior
- `useContext` : Access React context
- `useRef` : Store mutable values and access DOM elements
- `useMemo` : Cache expensive calculations
- `useCallback` : Cache functions
- `useReducer` : Complex state management

## Comparison

| Before Hooks                          | With Hooks                         |
| ------------------------------------- | ---------------------------------- |
| Class components required for state   | Function components can have state |
| Lifecycle methods                     | `useEffect`                        |
| `this.state`                          | `useState`                         |
| `this.setState`                       | State setter function              |
| Logic spread across lifecycle methods | Logic can be grouped together      |
| Classes required                      | Functions only                     |

## Rules of using hooks

    1. Every built in react hook is imported from 'React' package.
    2. If multiple hooks are being imported then we can import them in as named exports from React `import { useState, useMemo } from "react"`
    3. React hooks are always used with functional component and they can only be declared inside the functional component.
    4. They are always declared on top of functional component.
    5. React hooks cannot be written inside conditional blocks, loops, or nested functions.
    6. This ensures hooks are called in the same order every time the component renders.
