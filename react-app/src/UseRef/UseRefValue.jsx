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
