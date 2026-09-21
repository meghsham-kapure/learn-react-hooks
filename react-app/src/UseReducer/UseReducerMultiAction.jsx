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
