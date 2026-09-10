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
