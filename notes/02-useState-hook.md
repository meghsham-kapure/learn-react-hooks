# `useState` Hook in React

## What is `useState` Hook

- `useState` is a React Hook that allows a function component to store and manage state.
- The state is data that can change over time and changing it triggers a re-render of the component which change UI data / appearance.
- State is component-specific data which can't be accessed from outside the component but it can be shared from parent to child components through read-only props.

## Why to Use `useState` Hook

- Without `useState`, changing variable's value on its own will not cause React to update the UI.
- React monitors the state and when the state updates it re-renders the component, so the UI reflects the new value.

## How to Create State using `useState` Hook

```jsx syntax
const [count, setCount] = useState(0);
// `count` → current state value
// `setCount` → function used to update the state
// `0` → initial state value
```

- `useState` take state initializer optionally.
- `useState` returns a array in which
  - first variable stores the current state value.
  - second variable is a function used to update that state. By convention setter function name starts with `set` followed by the state variable name in PascalCase.

### usage

1. Import the Hook `import { useState } from "react"`
2. Create State `const [count, setCount] = useState(0)`
3. Read State `<p>{count}</p>`
4. Update State `onClick= {h}`

```jsx example
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
```

### Different Ways to Update State

1. Direct Update :
   - Using new value directly when the next state does not depend on the current state `setCount(10)`.
2. Update Using Previous Value
   - Used when the next state depends on the current state and avoids state stale issue. Setter function also accepts a callback function which react inject previous state ensuring the state used is latest state after render `setCount((previousCount) => previousCount + 1);`

#### State Stale Issue / State Updater Function with Closures

- When a state setter function (`setState`) is called, React does not update the state immediately. Instead, it schedules the update and processes it during the next render cycle.
- Because state updates are asynchronous and react batches them together, reading the current state value and using it to calculate the next state can sometimes result in a stale state value being used. This can lead to unexpected or inconsistent results when multiple state updates occur before a re-render.
- This problem is known as the stale state issue. It commonly occurs when state is rapidly updated using direct state updates where the new state depends on the current state value.
- To avoid this issue, use the functional update form, which receives the latest state value from React and guarantees that each update is based on the most recent state.
- Resolution of State Stale Issue is using the functional update form:

```jsx example
const [count, setCount] = useState(0);
setCount((prev) => prev + 1); //  0 => 1
setCount((prev) => prev + 1); //  1 => 2
// React passes the latest state value to each callback, resulting in value 2
```

### Values and Their Types Inside State

- We can store both primitive and non-primitive values inside state.
- State values persist across re-renders. When a component re-renders, React preserves the existing state values instead of recreating them from scratch.
- If a state value has not changed, React retains its existing reference. When one state variable is updated, other state variables remain unchanged and keep their previous values and references.
- This ensures React receives a new reference and can detect that the state has changed, allowing it to update the UI correctly.

#### Updating Primitive State Values

- When updating primitive values, we can use either direct updates or functional updates.

#### Updating Non-Primitive State Values

- When updating non-primitive values such as objects or arrays:
  1. Create a copy of the existing state.
  2. Apply the required changes to the copy.
  3. Pass the updated copy to the state setter function.

## When to Use `useState` Hook

Use `useState` when data:

- Belongs to a specific component
- Changes over time
- Should cause the UI to update when it changes

Examples:

- Counter values
- Form inputs
- Toggle states (`open` / `closed`)
- Loading indicators
- Modal visibility
- Selected tabs
- Search text
- Pagination state

```jsx
const [isOpen, setIsOpen] = useState(false);
```

### Without Lazy Initialization

The initial value is computed on every render, even though React only uses it during the first render.

```jsx
const [count] = useState(expensiveCalculation());
```

### With Lazy Initialization

Pass a function to `useState`. React calls it only during the initial render.

```jsx
const [count] = useState(() => expensiveCalculation());
```

> The golden rule: When initializing state with a function that returns a value, always use the callback form `useState(() => generateValue())` instead of `useState(generateValue())` to prevent the function from running on every render.

### When to Use Lazy Initialization

Use lazy initialization when the initial state:

- Requires an expensive calculation
- Reads from `localStorage`
- Performs data transformation

This avoids unnecessary work on every re-render.

## When Not to Use `useState`

Do not use `useState` for:

- Values that never change
- Temporary variables used only during rendering
- Data that should be shared globally across many components (consider Context or a state management solution)

```jsx
const appName = "MavLynx";
```

No state is needed because the value never changes.

## Advance pattern of `useState` hook

### 1. Functional updates

Use a function inside the setter to get the latest previous state.

```javascript
const [count, setCount] = useState(0);

setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1);
```

This is useful when multiple updates happen in the same render or when the new state depends on the previous state.

### 2. Lazy initialization

Pass a function to `useState` to initialize state only once.

```javascript
const [data, setData] = useState(() => {
  const stored = localStorage.getItem("data");
  return stored ? JSON.parse(stored) : [];
});
```

The function runs only on the first render. This avoids expensive calculations on every render.

### 3. Object state updates

When state is an object, always spread the previous object and update only the required property.

```javascript
const [user, setUser] = useState({ name: "", age: 0 });

setUser((prevUser) => ({ ...prevUser, age: 26 }));
```

### 4. Array state updates

When state is an array, use methods that return a new array.

```javascript
const [list, setList] = useState([]);

// Add
setList((prevList) => [...prevList, newItem]);

// Remove
setList((prevList) => prevList.filter((item) => item.id !== id));

// Update
setList((prevList) =>
  prevList.map((item) => (item.id === id ? { ...item, done: true } : item)),
);
```

### 5. Multiple state values

Use separate `useState` calls for unrelated values instead of grouping everything into one object.

```javascript
const [name, setName] = useState("");
const [age, setAge] = useState(0);
const [email, setEmail] = useState("");
```

This keeps state updates simple and avoids unnecessary object spreading.

## Common Mistakes with `useState` hook

### 1. Updating state directly

Problem:

```javascript
const [count, setCount] = useState(0);

// Wrong
count = count + 1;
```

Internal working and error:

State variables are immutable. Directly assigning a new value does not trigger a re-render. React does not know the state changed.

Solution:

```javascript
const [count, setCount] = useState(0);

// Correct
setCount(count + 1);
```

Always use the setter function to update state.

### 2. Using stale state in updates

Problem:

```javascript
const [count, setCount] = useState(0);

// Wrong when called multiple times
setCount(count + 1);
setCount(count + 1);
```

Internal working and error:

State updates are asynchronous. The value of `count` remains the same inside the same render. Both calls use the old value, so the final result is `1` instead of `2`.

Solution:

```javascript
const [count, setCount] = useState(0);

// Correct
setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1);
```

Use a function inside the setter to get the latest previous state.

### 3. Using state in a conditional block

Problem:

```javascript
if (condition) {
  const [count, setCount] = useState(0);
}
```

Internal working and error:

React relies on the order of hooks. Calling a hook conditionally changes the order between renders, causing unexpected behavior and errors.

Solution:

```javascript
const [count, setCount] = useState(0);

if (condition) {
  // Use the state here
}
```

Always call hooks at the top level of the component.

### 4. Using state without initializing

Problem:

```javascript
const [data, setData] = useState();
```

Internal working and error:

When state is not initialized, its value is `undefined`. Accessing properties or methods on `undefined` throws an error like `Cannot read properties of undefined`. Rendering `undefined` directly may also cause unexpected blank output.

Solution:

```javascript
const [data, setData] = useState("");
const [list, setList] = useState([]);
const [user, setUser] = useState(null);
```

Always initialize state with a meaningful default value based on the expected data type.

### 5. Ignoring immutable state updates

Problem:

```javascript
const [user, setUser] = useState({ name: "John", age: 25 });

// Wrong
user.age = 26;
setUser(user);
```

Internal working and error:

Mutating the state object directly changes the same reference. React compares references to detect changes. Since the reference is the same, React thinks nothing changed and skips the re-render.

Solution:

```javascript
const [user, setUser] = useState({ name: "John", age: 25 });

// Correct
setUser({ ...user, age: 26 });
```

Always create a new object or array when updating state to trigger a re-render.

### 6. Ignoring performance optimization

Problem:

```javascript
const [count, setCount] = useState(0);

// Expensive calculation runs on every render
const result = expensiveCalculation(count);
```

Internal working and error:

Every time the component re-renders, the expensive calculation runs again even if `count` has not changed. This slows down the app and wastes resources.

Solution:

```javascript
const [count, setCount] = useState(0);

// Runs only when count changes
const result = useMemo(() => expensiveCalculation(count), [count]);
```

Use `useMemo` to cache the result and only recalculate when dependencies change.

### 7. Updating state unnecessarily

Problem:

```javascript
const [count, setCount] = useState(0);

// Wrong
setCount(0);
```

Internal working and error:

Calling the setter with the same value still triggers a re-render. React may bail out of rendering children, but the component itself re-renders, causing unnecessary work.

Solution:

```javascript
const [count, setCount] = useState(0);

// Correct
if (count !== 0) {
  setCount(0);
}
```

Check if the value is actually different before updating state to avoid unnecessary re-renders.zing state unnecessarily

Problem:

```javascript
const [count, setCount] = useState(0);

// Wrong
setCount(0);
```

Internal working and error:

Calling the setter with the same value still triggers a re-render. React may bail out of rendering children, but the component itself re-renders, causing unnecessary work.

Solution:

```javascript
const [count, setCount] = useState(0);

// Correct
if (count !== 0) {
  setCount(0);
}
```

Check if the value is actually different before updating state to avoid unnecessary re-renders.
