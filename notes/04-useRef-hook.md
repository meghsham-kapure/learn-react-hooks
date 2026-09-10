# `useRef` hook in react

## What is `useRef` hook

- `useRef` is a special React built-in hook that lets you store a value or get a reference to a DOM element without causing the component to re-render.
- `useRef` stores values that persist across renders but updating them does not cause the component to re-render.
- `useRef` helps to manipulate DOM directly.
- `useRef` is ideal for keeping track of values like state or timers that do not need to trigger a re-render.

## How to use `useRef` hook

```jsx syntax
import React, { useRef } from "react";

const useRefState = useRef(defaultValue);

// access
console.log(useRefState.current);

// update
useRefState.current = newValue;
```

```jsx example
import React, { useRef, useState } from "react";

export default function UseRef() {
  const [useStateState, setUseStateState] = useState(0);
  const useRefState = useRef(0);
  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        useRef vs useState
      </h2>

      {/* useRef Section */}
      <div className="mb-6 p-4 w-full bg-purple-50 rounded-lg">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl text-gray-800">
            useRef:{" "}
            <span className="text-purple-600">{useRefState.current}</span>
          </h1>
          <button
            onClick={() => {
              useRefState.current += 1;
              console.log(
                `Updated value of useRefState to ${useRefState.current}`,
              );
            }}
            className="px-6 py-2 font-semibold text-white bg-purple-500 duration-200 transition active:scale-95 hover:bg-purple-600 rounded-lg"
          >
            Increment
          </button>
        </div>
        <p className="mt-2 text-center text-gray-500 text-xs">
          🔄 Does NOT trigger re-render
        </p>
      </div>

      {/* useState Section */}
      <div className="p-4 w-full bg-blue-50 rounded-lg">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl text-gray-800">
            useState: <span className="text-blue-600">{useStateState}</span>
          </h1>
          <button
            onClick={() => setUseStateState((prev) => prev + 1)}
            className="px-6 py-2 font-semibold text-white bg-blue-500 duration-200 transition active:scale-95 hover:bg-blue-600 rounded-lg"
          >
            Increment
          </button>
        </div>
        <p className="mt-2 text-center text-gray-500 text-xs">
          ✅ Triggers re-render
        </p>
      </div>
    </div>
  );
}
```

## When to use `useRef` hook

## `useRef` vs `useState`

1. `useState` triggers re-render but `useRef` does not
2. Both `useRef` & `useState`store value across re-renders
3. `useState` is best for updating UI on change of state but `useRef` is best for keeping track of changing previous values, modifying DOM element and storing references to timer and intervals without updating the UI

## Advance usage of `useRef` hook

### 1. useRef vs useState: Storing Values

- `useRef` stores a value that persists across renders but does not trigger a re-render when changed.
- `useState` stores a value and triggers a re-render every time it is updated.
- In this example, clicking the `useRef` increment button updates the value but the U

## Common Mistakes with useRefI does not change.

- Clicking the `useState` increment button updates the value and the UI updates immediately.
- Use `useRef` when the value does not need to reflect on the screen.
- Use `useState` when the value must be shown or used in the UI.

```jsx example
import React, { useRef, useState } from "react";

export default function UseRefValue() {
  const [useStateState, setUseStateState] = useState(0);
  const useRefState = useRef(0);
  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        useRef vs useState
      </h2>

      {/* useRef Section */}
      <div className="mb-6 p-4 w-full bg-purple-50 rounded-lg">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl text-gray-800">
            useRef:{" "}
            <span className="text-purple-600">{useRefState.current}</span>
          </h1>
          <button
            onClick={() => {
              useRefState.current += 1;
              console.log(
                `Updated value of useRefState to ${useRefState.current}`,
              );
            }}
            className="px-6 py-2 font-semibold text-white bg-purple-500 duration-200 transition active:scale-95 hover:bg-purple-600 rounded-lg"
          >
            Increment
          </button>
        </div>
        <p className="mt-2 text-center text-gray-500 text-xs">
          🔄 Does NOT trigger re-render
        </p>
      </div>

      {/* useState Section */}
      <div className="p-4 w-full bg-blue-50 rounded-lg">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl text-gray-800">
            useState: <span className="text-blue-600">{useStateState}</span>
          </h1>
          <button
            onClick={() => setUseStateState((prev) => prev + 1)}
            className="px-6 py-2 font-semibold text-white bg-blue-500 duration-200 transition active:scale-95 hover:bg-blue-600 rounded-lg"
          >
            Increment
          </button>
        </div>
        <p className="mt-2 text-center text-gray-500 text-xs">
          ✅ Triggers re-render
        </p>
      </div>
    </div>
  );
}
```

### 1. `useRef` for DOM Manipulation

- `useRef` is used to get a direct reference to a DOM element.
- The ref is attached to the input using the ref attribute.
- `inputRef.current` gives access to the actual input DOM element.
- The Delete button clears the password using setPassword and then focuses the input using `inputRef.current.focus()`.
- Focus is a DOM method. It does not need a re-render to work.
- The Change visibility button toggles the input type between password and text.
- It changes `inputRef.current.type` directly on the DOM element, not through state.
- After changing type, it focuses the input again using `inputRef.current.focus()`.
- `useRef` is useful when you need to call DOM methods like focus, blur, or change attributes directly.

```jsx example
import { useRef, useState } from "react";

export default function UseRefDOM() {
  const [password, setPassword] = useState("John Snow");
  const inputRef = useRef();

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        useRef DOM Manipulation
      </h2>

      <div className="space-y-4 w-full">
        {/* Password Display */}
        <div className="flex px-4 py-3 min-w-0 w-full text-center bg-purple-50 border rounded-lg">
          <h1 className="break-all font-medium text-lg text-purple-700">
            {password && password !== "" ? (
              <>
                Password is,{" "}
                <span className="break-all font-bold text-purple-900">
                  {password}
                </span>
              </>
            ) : (
              <span className="text-gray-400 text-sm">No password entered</span>
            )}
          </h1>
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Enter password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={inputRef}
          className="px-4 py-3 w-full text-gray-700 border border-gray-300 duration-200 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
        />

        {/* Reset Button */}
        <button
          onClick={() => {
            setPassword("");
            inputRef.current.focus();
          }}
          className="px-6 py-3 w-full font-semibold text-white bg-red-500 duration-200 transition active:scale-95 hover:bg-red-600 rounded-lg"
        >
          Delete
        </button>

        <button
          onClick={() => {
            if (inputRef.current.type === "password") {
              inputRef.current.type = "text";
            } else {
              inputRef.current.type = "password";
            }
            inputRef.current.focus();
          }}
          className="px-6 py-3 w-full font-semibold text-white bg-purple-500 duration-200 transition active:scale-95 hover:bg-purple-600 rounded-lg"
        >
          Change visibility
        </button>

        {/* Helper Text */}
        <p className="text-center text-gray-400 text-xs">
          Clicking reset clears the password and focuses the input via useRef
        </p>
      </div>
    </div>
  );
}
```

### 2. `useRef` for Storing Previous State

- `useRef` is used here to store the previous value of a state variable.
- `previousCount` is initialized with a message instead of a number.
- `useEffect` runs every time count changes.
- Inside `useEffect`, `previousCount.current` is set to the current count value.
- The effect runs after render. So `previousCount` holds the value from the last render.
- On the first render, `previousCount` shows the initial message.
- On the next render, `previousCount` shows the count value from the previous render.
- Updating `previousCount.current` does not trigger a re-render.
- The UI updates only because count changes, which causes a re-render.
- `useRef` is useful when you want to compare current and previous values across renders.

```jsx example
import React, { useState, useRef, useEffect } from "react";

export default function UseRefPreviousState() {
  const [count, setCount] = useState(0);
  const previousCount = useRef("No previous counter available");

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        useRef Previous Render Value
      </h2>

      <div className="space-y-4 w-full">
        {/* Current Count */}
        <div className="px-4 py-3 w-full text-center bg-blue-50 rounded-lg">
          <h1 className="font-medium text-blue-700 text-lg">
            Current Count:{" "}
            <span className="font-bold text-2xl text-blue-900">{count}</span>
          </h1>
        </div>

        {/* Previous Count */}
        <div className="px-4 py-3 w-full text-center bg-purple-50 rounded-lg">
          <h2 className="font-medium text-lg text-purple-700">
            Previous Count:{" "}
            <span className="font-bold text-purple-900">
              {previousCount.current}
            </span>
          </h2>
        </div>

        {/* Button */}
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="px-6 py-3 w-full font-semibold text-white bg-blue-500 duration-200 transition active:scale-95 hover:bg-blue-600 rounded-lg"
        >
          Increment Counter
        </button>

        {/* Helper Text */}
        <p className="text-center text-gray-400 text-xs">
          useRef stores the previous value without triggering a re-render
        </p>
      </div>
    </div>
  );
}
```

### 3. `useRef` for Timer

- `useRef` is used here to store the interval ID.
- `timerRef` is initialized with null.
- The Start Timer button checks if `timerRef.current` is null before starting a new interval.
- The interval ID is stored in `timerRef.current`.
- Storing the interval ID in `useRef` does not trigger a re-render.
- The Reset Timer button clears the interval using `clearInterval`.
- After clearing, `timerRef.current` is set back to null.
- The counter is reset to 0 using setCounter.
- Without `useRef`, the interval ID would be lost on every re-render.
- `useRef` keeps the same interval ID across renders.
- This prevents creating multiple intervals when the button is clicked again.
- The Status display checks `timerRef.current` to show whether the timer is running or stopped.

```jsx example
import React, { useState, useRef } from "react";

export default function UseRefTimer() {
  const [counter, setCounter] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = window.setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 500);
    } else {
      console.log("Existing active timer!");
    }
  };

  const reset = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setCounter(0);
    } else {
      console.log("No active timer!");
    }
  };

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        Timer using useRef
      </h2>

      <div className="space-y-4 w-full">
        {/* Counter Display */}
        <div className="px-4 py-6 w-full text-center bg-blue-50 rounded-lg">
          <h1 className="font-medium text-blue-700 text-lg">
            Counter:{" "}
            <span className="font-bold text-4xl text-blue-900">{counter}</span>
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 w-full">
          <button
            onClick={() => startTimer()}
            className="flex-1 px-6 py-3 font-semibold text-white bg-green-500 duration-200 transition active:scale-95 hover:bg-green-600 rounded-lg"
          >
            Start Timer
          </button>
          <button
            onClick={() => reset()}
            className="flex-1 px-6 py-3 font-semibold text-white bg-red-500 duration-200 transition active:scale-95 hover:bg-red-600 rounded-lg"
          >
            Reset Timer
          </button>
        </div>

        {/* Timer Status */}
        <div className="px-4 py-2 w-full text-center bg-gray-50 rounded-lg">
          <span className="text-gray-500 text-xs">
            Status:{" "}
            {timerRef.current ? (
              <span className="font-semibold text-green-600">● Running</span>
            ) : (
              <span className="font-semibold text-gray-400">● Stopped</span>
            )}
          </span>
        </div>

        {/* Helper Text */}
        <p className="text-center text-gray-400 text-xs">
          useRef stores the interval ID without causing re-renders
        </p>
      </div>
    </div>
  );
}
```

## Common Mistakes with `useRef`

### 1. Using `useRef` Instead of useState Where UI Updates Are Required

#### Problem

Using `useRef` to store values that should update the UI. Since updating a ref does not trigger a re-render, the UI stays stale.

```javascript
const count = useRef(0)

<button onClick={() => count.current++}>
  Increment
</button>

<h1>{count.current}</h1>
```

#### Internal Working and Error

The value inside `count.current` changes on click, but React does not re-render the component. The UI still shows the old value.

#### Solution

Use useState when the value needs to be shown on the UI.

```javascript
const [count, setCount] = useState(0)

<button onClick={() => setCount(count + 1)}>
  Increment
</button>

<h1>{count}</h1>
```

### 2. Not Clearing setTimeout or setInterval

#### Problem

Storing a timer id in useRef but never clearing it. The timer keeps running even after it is no longer needed.

```javascript
const timerRef = useRef(null);

useEffect(() => {
  timerRef.current = setInterval(() => {
    console.log("Running");
  }, 1000);
}, []);
```

#### Internal Working and Error

The interval keeps running after the component unmounts or when the effect re-runs. This causes memory leaks and unwanted behavior.

#### Solution

Clear the timer inside the cleanup function of useEffect.

```javascript
const timerRef = useRef(null);

useEffect(() => {
  timerRef.current = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(timerRef.current);
  };
}, []);
```

## Best practices around `useRef`

- Use `useRef` when storing a value that does not trigger a re-render. If the value needs to reflect on the UI, useState is the right choice.
- Access the value using the `.current` property. The ref object stays the same across renders, only the .current value changes.
- Initialize with proper values like `null`, not `undefined`. This makes the intent clear and avoids unexpected behavior.
- When dealing with timers or intervals, always clear them inside the cleanup function of useEffect to prevent memory leaks.
- Think before using. Decide whether you need useState or `useRef` based on your requirement.
