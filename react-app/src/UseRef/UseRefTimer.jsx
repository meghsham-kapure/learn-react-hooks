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
