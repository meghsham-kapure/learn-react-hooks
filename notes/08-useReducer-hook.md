# `useReducer` hook in react

## What is `useReducer` hook

- `useReducer` is built-in react hook used to manage and update state in a more organized way especially when your state is a bit complex and complicated

## When to use `useReducer` hook

- `useReducer` is used when state is complex like object or array and you need to perform action specific to those collections data like push or pop in array
- `useReducer` also its used to when dealing with previous state

## How to use `useReducer` hook

```syntax
const [state, dispatch] = useReducer(reducer, initialState);
```

- Terminologies :
  1. state: is the current value of components data like counter which represent the data UI presenting
  2. dispatch: function used to change the state data, when called send action to perform some operation
  3. action: JS object that tells reducer what happens or what we want to do. With action we can pass payload
  4. reducer: is function where logic is provided to define the behavior of different action sent. It looks at current state and action sent, and decide waht logic to run. After execution it returns new state.

- Flow of `useReducer`
  1. Initially the initial value is used as state, like `{ count: 0 }`
  2. When a user interaction like a click happens, the `dispatch` function runs, like `dispatch({ type: "increment" })`
  3. The `dispatch` function takes an action as input and sends an action to the reducer function. The action is usually an object with a `type` property and can also carry extra data called payload, like `{ type: "add", payload: 5 }`
  4. The reducer function accepts two parameters, the current state and the action, like `function reducer(state, action)`, runs state and action type based logic, like `switch (action.type)`, and then returns the new state
  5. React stores the new state and re-renders the component. After that the component now uses the updated state, like `state.count`

```jsx example : UseReducerMultiAction.jsx
import { useReducer } from "react";

export default function UseReducerMultiAction() {
  const initialState = {
    counter: 0,
  };

  const reducerFn = (state, action) => {
    console.log(state, "STATE");
    console.log(action, "ACTION");

    switch (action.type) {
      case "increment":
        return { counter: state.counter + 1 };
      case "decrement":
        return { counter: state.counter - 1 };
      case "reset":
        return { counter: 0 };
      default:
        return { counter: state.counter };
    }
  };
  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <>
      <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
        <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
          Use Reducer Basics
        </h2>
        <div className="flex flex-col gap-3 items-center w-full">
          <h3>{state.counter}</h3>
          {/* <h3>Counter: {counter}</h3> */}
          <button
            onClick={() => dispatch({ type: "increment" })}
            className="px-6 py-3 w-full font-semibold text-white bg-blue-500 duration-200 transition active:scale-95 hover:bg-blue-600 rounded-lg"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: "decrement" })}
            className="px-6 py-3 w-full font-semibold text-white bg-red-500 duration-200 transition active:scale-95 hover:bg-red-600 rounded-lg"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch({ type: "reset" })}
            className="px-6 py-3 w-full font-semibold text-white bg-gray-500 duration-200 transition active:scale-95 hover:bg-gray-600 rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
```

```jsx example : UseReducerSingleAction.jsx
import { useReducer } from "react";

export default function UseReducerSingleAction() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "UPDATE_FORM":
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };

      case "RESET_FORM":
        return initialState;
        dispatch;

      default:
        return state;
    }
  };

  const handleChange = (e) => {
    console.log(`{field: ${e.target.name}, value: ${e.target.value}}`);
    dispatch({
      type: "UPDATE_FORM",
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };
  const reset = () => {
    dispatch({
      type: "RESET_FORM",
    });
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        Use Reducer Registrations
      </h2>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-2 items-center px-4 py-3 w-full bg-blue-50 rounded-lg">
          <h2 className="break-all min-w-0 font-medium text-blue-700">
            Name :{" "}
            <span className="break-all font-bold text-blue-900">
              {state.name}
            </span>
          </h2>
          <h2 className="break-all min-w-0 font-medium text-blue-700">
            Email :{" "}
            <span className="break-all font-bold text-blue-900">
              {state.email}
            </span>
          </h2>
          <h2 className="break-all min-w-0 font-medium text-blue-700">
            Password :{" "}
            <span className="break-all font-bold text-blue-900">
              {state.password}
            </span>
          </h2>
        </div>
        <div className="flex flex-col gap-3 items-center w-full">
          <input
            type="text"
            placeholder="enter name"
            name="name"
            value={state.name}
            onChange={(e) => {
              handleChange(e);
            }}
            className="px-4 py-3 w-full text-gray-700 border border-gray-300 duration-200 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          />{" "}
          <input
            type="text"
            placeholder="enter email"
            name="email"
            value={state.email}
            onChange={(e) => {
              handleChange(e);
            }}
            className="px-4 py-3 w-full text-gray-700 border border-gray-300 duration-200 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          />{" "}
          <input
            type="text"
            placeholder="enter password"
            name="password"
            value={state.password}
            onChange={(e) => {
              handleChange(e);
            }}
            className="px-4 py-3 w-full text-gray-700 border border-gray-300 duration-200 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          />
          <button
            type="reset"
            onClick={() => reset()}
            className="px-6 py-3 w-full font-semibold text-white bg-red-500 duration-200 transition active:scale-95 hover:bg-red-600 rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
```

## `useReducer` vs `useState`

1. Purpose
   - with `useState` it manages simple independent state
   - with `useReducer` it manages complex state logic with multiple transitions

2. State shape
   - with `useState` it works well with primitives and simple objects
   - with `useReducer` it works well with objects holding multiple related values

3. Update logic
   - with `useState` the update logic is written inline in the event handler
   - with `useReducer` the update logic is centralized inside the reducer function

4. Syntax
   - with `useState` it uses `const [state, setState] = useState(initial)`
   - with `useReducer` it uses `const [state, dispatch] = useReducer(reducer, initial)`

5. Triggering update
   - with `useState` you call `setState(newValue)` directly
   - with `useReducer` you call `dispatch({ type: "action" })`

6. Readability
   - with `useState` it gets messy when many state updates are scattered
   - with `useReducer` it stays clean as all logic sits in one reducer

7. Debugging
   - with `useState` it is harder to trace which update changed the state
   - with `useReducer` it is easier to trace since every change goes through an action

8. Ideal for
   - with `useState` it is ideal for small and simple state
   - with `useReducer` it is ideal for large state with many related updates

## Advance usage of `useReducer` hook

- Using `useReducer` with `useContext` to build a global state manager without Redux
- Lazy initialization by passing an `init` function as the third argument
- Using `dispatch` inside `useEffect` to trigger state transitions
- Splitting a large reducer into smaller reducers and combining them
- Using middleware-like patterns by wrapping `dispatch`
- Keeping action types in constants to avoid typos
- Returning the same state object when nothing changes to avoid re-renders

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

## Common Mistakes with `useReducer` hook

- Mutating state directly inside the reducer instead of returning a new object
- Forgetting to return the state in the `default` case of the switch
- Writing the reducer inside the component, which recreates it on every render
- Using `useReducer` for simple state that `useState` can handle
- Dispatching actions inside the render body, which causes infinite loops
- Forgetting to handle unknown action types
- Not keeping action types consistent between dispatch and reducer
- Making the reducer impure by adding side effects like API calls or logs
