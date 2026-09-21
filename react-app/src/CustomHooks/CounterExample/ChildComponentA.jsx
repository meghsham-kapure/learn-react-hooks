// ./ChildComponentA.jsx

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
