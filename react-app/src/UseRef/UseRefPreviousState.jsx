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
