import React, { useState, useCallback } from "react";
import Child from "./Child";

export default function UseCallbackBasic() {
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
