import React, { useState } from "react";

export default function LazyInitialization() {
  return (
    <div className="flex flex-col gap-6 items-center py-8">
      <LazyInitializationUnhandled />
      <LazyInitializationHandled />
    </div>
  );
}

function generateValue() {
  console.log("Generating Value..." + Date.now());
  return 1000;
}

function LazyInitializationUnhandled() {
  const [value, setValue] = useState(generateValue());
  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h1 className="mb-4 pb-2 w-full font-bold text-center text-gray-800 text-xl border-b">
        Lazy Initialization Unhandled
      </h1>
      <div
        onClick={() => setValue((prev) => prev + 1000)}
        className="px-6 py-4 w-full font-bold text-2xl text-center text-red-700 bg-red-50 duration-200 transition cursor-pointer hover:bg-red-100 rounded-lg"
      >
        {value}
      </div>
      <p className="mt-3 text-center text-gray-500 text-xs">
        ⚠️ Runs on every render (not lazy)
      </p>
    </div>
  );
}

function LazyInitializationHandled() {
  const [value, setValue] = useState(() => generateValue());
  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h1 className="mb-4 pb-2 w-full font-bold text-center text-gray-800 text-xl border-b">
        Lazy Initialization Handled
      </h1>
      <div
        onClick={() => setValue((prev) => prev + 1000)}
        className="px-6 py-4 w-full font-bold text-2xl text-center text-green-700 bg-green-50 duration-200 transition cursor-pointer hover:bg-green-100 rounded-lg"
      >
        {value}
      </div>
      <p className="mt-3 text-center text-gray-500 text-xs">
        Runs only once (lazy initialization)
      </p>
    </div>
  );
}
