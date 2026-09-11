# `useCallback` hook in react

## What is `useCallback` hook

### Why functions cause unnecessary re-renders in child components

- In React, with every render, function objects inside a component get re-created
- Even if the functions are identical in functionality, they are new objects with a new memory address
- This creates an issue when those function objects are passed to a child component as a prop
- During re-render, the changed prop is seen as updated, which leads to a re-render in the child as well
- These unnecessary re-renders can degrade performance react application

### `useCallback` solving issue

- React's `useCallback` hook helps optimize you apps performance by memoizing a function definition unless its dependencies change.
- These prevent React from creating a new function on every render, reducing unnecessary re-renders

## `useCallback` vs `useMemo`

### 1. memoizes

- with `useCallback` the function itself is memoized
- with `useMemo` the result value of a calculation is memoized

### 2. return value

- with `useCallback` it returns a memoized function
- with `useMemo` it returns a memoized value

### 3. purpose

- with `useCallback` it prevents a function from being re-created on every render
- with `useMemo` it avoids running an expensive calculation again

### 4. used for

- with `useCallback` it is used when passing functions to child components
- with `useMemo` it is used with heavy calculations

### 5. relationship with `React.memo`

- with `useCallback` it is often combined with `React.memo` to stop child re-renders
- with `useMemo` it is paired with expensive computation, not with `React.memo` directly

## How to use `useCallback` hook

```jsx example

// Parent.jsx

import React, { useState, useCallback } from "react";
import Child from "./Child";

export default function Parent() {
  const [counter1, setCounter1] = useState(0);
  const increment = useCallback(() => setCounter1((prev) => prev + 1), []);

  console.log("Parent component rendered");

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        useCallback Hook Example
      </h2>
      <div>
        <h1>Counter : {counter1}</h1>
        <button onClick={() => setCounter1(counter1 + 1)}>
          Increment Counter
        </button>

        <Child increment={increment} title="increment" />
      </div>
    </div>
  );
}

// Child.jsx

import React from "react";

function Child({ increment }) {
  console.log("Child component rendered");
  return (
    <div>
      <button onClick={() => increment()}>increment</button>
    </div>
  );
}

export default React.memo(Child);

```

## When to use `useCallback` hook

- When passing a function as a prop to a child component
- When the child component is wrapped in `React.memo`
- When the function is used inside another hook's dependency array, like `useEffect`
- When the function is expensive to recreate on every render
- When you want a stable function reference across re-renders
- When the dependency array is small and rarely changes

## When not to use `useCallback`

- When the function is simple and not passed as a prop, because memoizing it adds cost with no benefit
- When there is no performance overhead to fix, because `useCallback` itself has its own cost
- When the dependency changes frequently, because the function gets re-created anyway, wasting the cache
- When the function is only used inside the same component, because it never leaves the component to cause a child re-render
- When the child component is not wrapped in `React.memo`, because the child will re-render regardless of the stable function
- When the function is cheap to recreate on every render, because recreating it is faster than memoizing it

## Advanced usage of `useCallback` hook

- Combining `useCallback` with `React.memo` to fully stop child re-renders
- Using `useCallback` for event handlers passed to deeply nested components
- Using `useCallback` inside custom hooks to return stable functions
- Using `useCallback` with `useEffect` to avoid re-running effects due to changing function references
- Using functional updates like `setCount(c => c + 1)` to keep the dependency array empty
- Using `useCallback` with `useRef` to always access the latest value without changing the function reference

```jsx
const handleClick = useCallback(() => {
  setCount((c) => c + 1);
}, []);
```

## Common Mistakes with `useCallback` hook

- Using it for every function, which adds overhead with no benefit
- Forgetting or missing dependencies, which returns a stale function
- Using it for functions not passed as props, where it is useless
- Using it without `React.memo` on the child, so re-renders still happen
- Using it for side effects instead of `useEffect`
- Calling it inside conditions, loops, or nested functions
- Assuming it makes the function itself faster, when it only keeps the same reference
- Passing an inline function as a dependency, which changes every render and breaks the cache
