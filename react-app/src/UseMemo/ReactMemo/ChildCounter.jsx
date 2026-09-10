// ChildCounter.jsx

import React, { useState } from "react";

function ChildCounter({ calculationsResult }) {
  console.log(calculationsResult);

  const [count, setCount] = React.useState(0);
  console.log("Child Component Rendered");

  return (
    <div className="flex flex-col gap-3 items-center px-4 py-3 w-full bg-gray-50 rounded-lg">
      <h1 className="font-medium text-gray-700">
        Child Counter : <span className="font-bold text-gray-900">{count}</span>
      </h1>
      <h1 className="font-medium text-gray-700">
        Calculations Result :{" "}
        <span className="font-bold text-gray-900">{calculationsResult}</span>
      </h1>
      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-3 font-semibold text-white bg-gray-500 duration-200 transition active:scale-95 hover:bg-gray-600 rounded-lg"
      >
        Increments
      </button>
    </div>
  );
}

export default React.memo(ChildCounter);
