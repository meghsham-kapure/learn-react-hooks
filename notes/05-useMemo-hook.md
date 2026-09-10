# `useMemo` hook in react

## What is `useMemo` hook

- `useMemo` is a React hook that caches the result of a calculation between re-renders
- Example: you record the name and other data of all students in a class, then format and order it. You keep this data until a new student enrolls or an existing student leaves the class. This saves you the effort of recording the data every day.
- In a React component, `useMemo` saves expensive operation resources and time by caching its result until the dependency it relies on changes
- Simply put, it is a built-in hook that optimizes a React component by memoizing (caching / remembering) the result of a calculation, and recalculates only on first request or when a dependency changes

## How to use `useMemo` hook

```jsx syntax
const cachedValue = useMemo(callbackFnToCalculateResult, DependencyArray);
```

- Similar to `useEffect` but `useMemo` preserves a value across re-renders
- Takes two arguments: a callback that returns a value, and a dependency array
- Runs the callback on first render and returns the cached value
- On later renders, returns the cached value without recalculating, unless a dependency changes
- Empty array `[]` means calculate only once
- No dependency array means recalculate every render, defeating the purpose
- Only for performance optimization, not for side effects

## When to use `useMemo` hook

- For caching expensive and time taking operation results
- To avoid unnecessary recalculation on re-renders
- For dependency-based memoization

## When not to use `useMemo` hook

- Overusing it can make code complex and hard to debug
- If the computation is fast or cheap, do not memoize it
- `useMemo` only helps with pure functions

### What is a pure function

- A function that returns the same output for the same input every time
- It does not modify anything outside itself (no side effects)
- It does not depend on or change external state

```jsx
// pure function, when give same input provide exact same output

function add(a, b) {
  return a + b;
}

// not pure, it changes an outside variable, so same input gives different output, which makes it impure.

let total = 0;
function addToTotal(a) {
  total = total + a;
  return total;
}
```

## Usage of `useMemo` hook

### Caching Hevesy Calculations

```jsx
import React, { useMemo } from "react";

export default function UseMemoBasic() {
  const [counter1, setCounter1] = React.useState(0);
  const [counter2, setCounter2] = React.useState(0);

  const expensiveCalculation = () => {
    for (let i = 0; i < 1000000000; i++) {
      if (i === 0) console.info("Starting calculation...");
      if (i === 1000000000 - 1) console.info("Calculation finished.");
    }

    const result = counter1 + Math.floor(Math.random() * 1000);
    return result;
  };

  const calculated = useMemo(() => expensiveCalculation(), [counter2]);

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        useMemo Basics
      </h2>
      <div className="flex flex-col gap-6 items-center w-full">
        <div className="flex flex-col gap-2 items-center px-4 py-3 w-full bg-purple-50 rounded-lg">
          <h1 className="font-medium text-purple-700">Calculated Value:</h1>
          <span className="font-bold text-4xl text-purple-900">
            {calculated}
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center px-4 py-3 w-full bg-blue-50 rounded-lg">
          <h2 className="font-medium text-blue-700">
            Counter 1 :{" "}
            <span className="font-bold text-blue-900">{counter1}</span>
          </h2>
          <button
            onClick={() => setCounter1(counter1 + 1)}
            className="px-6 py-3 font-semibold text-white bg-blue-500 duration-200 transition active:scale-95 hover:bg-blue-600 rounded-lg"
          >
            Increment Counter 1
          </button>
        </div>

        <div className="flex flex-col gap-2 items-center px-4 py-3 w-full bg-green-50 rounded-lg">
          <h2 className="font-medium text-green-700">
            Counter 2 :{" "}
            <span className="font-bold text-green-900">{counter2}</span>
          </h2>
          <button
            onClick={() => setCounter2(counter2 + 1)}
            className="px-6 py-3 font-semibold text-white bg-green-500 duration-200 transition active:scale-95 hover:bg-green-600 rounded-lg"
          >
            Increment Counter 2
          </button>
        </div>
      </div>
    </div>
  );
}
```

### 2. Caching Child components with `React.memo`

```jsx example
// ReactMemo.jsx

import React, { useState, useMemo } from "react";
import ChildCounter from "./ChildCounter.jsx";

export default function ReactMemo() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const expensiveCalculation = () => {
    for (let i = 0; i < 1000000000; i++) {
      if (i === 0) console.info("Starting calculation...");
      if (i === 1000000000 - 1) console.info("Calculation finished.");
    }

    const result = counter1 + Math.floor(Math.random() * 1000);
    return result;
  };

  const calculationsResult = useMemo(() => expensiveCalculation(), [counter2]);

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        TITLE
      </h2>
      <div>
        <div className="flex flex-col gap-6 items-center w-full">
          <div className="flex flex-col gap-2 items-center px-4 py-3 w-full bg-purple-50 rounded-lg">
            <h1 className="font-medium text-purple-700">Calculated Value:</h1>
            <span className="font-bold text-4xl text-purple-900">
              {calculationsResult}
            </span>
          </div>
          <div className="flex flex-col gap-2 items-center px-4 py-3 w-full bg-blue-50 rounded-lg">
            <h2 className="font-medium text-blue-700">
              Counter 1 :{" "}
              <span className="font-bold text-blue-900">{counter1}</span>
            </h2>
            <button
              onClick={() => setCounter1(counter1 + 1)}
              className="px-6 py-3 font-semibold text-white bg-blue-500 duration-200 transition active:scale-95 hover:bg-blue-600 rounded-lg"
            >
              Increment Counter 1
            </button>
          </div>

          <div className="flex flex-col gap-2 items-center px-4 py-3 w-full bg-green-50 rounded-lg">
            <h2 className="font-medium text-green-700">
              Counter 2 :{" "}
              <span className="font-bold text-green-900">{counter2}</span>
            </h2>
            <button
              onClick={() => setCounter2(counter2 + 1)}
              className="px-6 py-3 font-semibold text-white bg-green-500 duration-200 transition active:scale-95 hover:bg-green-600 rounded-lg"
            >
              Increment Counter 2
            </button>
          </div>
        </div>
        <ChildCounter calculationsResult={calculationsResult} />
      </div>
    </div>
  );
}

// ChildCounter.jsx
import React, { useState } from "react";

function ChildCounter({ calculationsResult }) {
  console.log(calculationsResult);

  const [count, setCount] = React.useState(0);
  console.log("Child Component Rendered");

  return (
    <div className="flex flex-col gap-3 items-center px-4 py-3 w-full bg-gray-50 rounded-lg">
      <h1 className="font-medium text-gray-700">
        Child Counter : <span className="font-bold text-gray-900">{count}</span>
      </h1>
      <h1 className="font-medium text-gray-700">
        Calculations Result :{" "}
        <span className="font-bold text-gray-900">{calculationsResult}</span>
      </h1>
      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-3 font-semibold text-white bg-gray-500 duration-200 transition active:scale-95 hover:bg-gray-600 rounded-lg"
      >
        Increments
      </button>
    </div>
  );
}

export default React.memo(ChildCounter);
```

## Common Mistakes with `useMemo` hook

## Very Common Mistakes with `useMemo` hook

- Missing or wrong dependencies, which returns stale values
- Forgetting the dependency array, which recalculates on every render
- Using `useMemo` for cheap calculations, which adds overhead instead of saving it
- Calling `useMemo` inside conditions, loops, or nested functions
- Using `useMemo` for side effects instead of `useEffect`
