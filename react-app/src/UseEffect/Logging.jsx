import React, { useEffect, useState } from "react";

export default function UseEffectCard() {
  const [value1, setValue1] = useState(100);
  const [value2, setValue2] = useState(1000);

  useEffect(() => console.log("I run on every render"));
  useEffect(() => console.log("I run on first render only"), []);
  useEffect(
    () => console.log("I run on first render and change of value 2"),
    [value2],
  );

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        useEffect & Dependencies
      </h2>

      <p className="mb-4 text-center text-gray-500 text-sm">
        Check console for useEffect logs
      </p>

      <div
        onClick={() => setValue1((prev) => prev + 100)}
        className="mb-4 px-4 py-3 w-full font-medium text-blue-700 text-center bg-blue-50 duration-200 transition cursor-pointer hover:bg-blue-100 rounded-lg"
      >
        Value 1: <span className="font-bold text-blue-900">{value1}</span>
        <span className="block mt-1 text-gray-400 text-xs">
          Triggers: "I run on every render"
        </span>
      </div>

      <div
        onClick={() => setValue2((prev) => prev + 1000)}
        className="px-4 py-3 w-full font-medium text-center text-green-700 bg-green-50 duration-200 transition cursor-pointer hover:bg-green-100 rounded-lg"
      >
        Value 2: <span className="font-bold text-green-900">{value2}</span>
        <span className="block mt-1 text-gray-400 text-xs">
          Triggers: "I run on change of value 2"
        </span>
      </div>
    </div>
  );
}
