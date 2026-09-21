# custom hooks in react

## What is custom hooks

- A custom hook is a JavaScript function that lets you reuse React logic between multiple components
- A React custom hook can use other built-in hooks like `useState`, `useEffect`, `useContext`, etc
- It helps avoid repeating the same logic in multiple components keeping the code cleaner
- It does not share the state it holds implicitly, each component calling the hook gets its own state
- By convention, a custom hook starts with `use`

## How to use custom hooks

```js ./useCounterHook.js
import { useState } from "react";

export default function useCounterHook(initialValue) {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = (incrementBy = 1) =>
    setCounter((prev) => prev + incrementBy);
  const handleDecrement = (decrementBy = 1) =>
    setCounter((prev) => prev - decrementBy);

  return { counter, handleIncrement, handleDecrement };
}
```

```jsx ./ParentComponent.jsx
import ChildComponentA from "./ChildComponentA";
import ChildComponentB from "./ChildComponentB";

export default function ParentComponent() {
  return (
    <div>
      <ChildComponentA />
      <ChildComponentB />
    </div>
  );
}
```

```jsx ./ChildComponentA.jsx
import useCounterHook from "./useCounterHook.js";

export default function ChildComponentA() {
  const { counter, handleIncrement, handleDecrement } = useCounterHook(0);

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        Child Component A
      </h2>
      <div className="flex flex-col gap-2">
        <h1>Counter 1: {counter}</h1>
        <button
          onClick={() => handleIncrement(1)}
          className="px-4 py-2 font-bold text-white bg-green-500 hover:bg-green-700 rounded-full"
        >
          Increment
        </button>
        <button
          onClick={() => handleDecrement(1)}
          className="px-4 py-2 font-bold text-white bg-red-500 hover:bg-red-700 rounded-full"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
```

```jsx ./ChildComponentB.jsx
import useCounterHook from "./useCounterHook.js";

export default function ChildComponentB() {
  const { counter, handleIncrement, handleDecrement } = useCounterHook(100);

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        Child Component B
      </h2>
      <div className="flex flex-col gap-2">
        <h1>Counter 2: {counter}</h1>
        <button
          onClick={() => handleIncrement(10)}
          className="px-4 py-2 font-bold text-white bg-green-700 hover:bg-green-900 rounded-full"
        >
          Increment
        </button>
        <button
          onClick={() => handleDecrement(10)}
          className="px-4 py-2 font-bold text-white bg-red-700 hover:bg-red-900 rounded-full"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
```

## When to use custom hooks

- When the same logic is repeated in multiple components
- When a component becomes too large and mixes logic with UI
- When you want to separate concerns and keep components clean
- When you want to reuse stateful logic like form handling, fetching, or timers
- When you want to test logic separately from the UI
- When you want to combine multiple built-in hooks into one reusable unit

## Advanced usage of custom hooks

- Combining multiple built-in hooks inside one custom hook, like `useState` and `useEffect`
- Building data fetching hooks like `useFetch` that handle loading, error, and data
- Building form hooks like `useForm` that handle values, changes, and validation
- Building event hooks like `useEventListener` that attach and clean up listeners
- Building `useLocalStorage` to sync state with browser storage
- Composing custom hooks inside other custom hooks
- Returning objects or arrays based on how the caller wants to use them
- Accepting parameters and callbacks to make hooks flexible

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
```

## Common Mistakes with custom hooks

- Not starting the function name with `use`, which breaks React rules
- Calling hooks inside conditions, loops, or nested functions
- Sharing state between components by mistake, since each call has its own state
- Forgetting to clean up effects like timers or listeners
- Making the hook too specific, which reduces reusability
- Making the hook too generic, which makes it hard to understand
- Not returning a stable reference, which can cause unnecessary re-renders
- Mixing UI logic with the hook, when hooks should only hold logic
- Forgetting to add proper dependencies in `useEffect` inside the hook
