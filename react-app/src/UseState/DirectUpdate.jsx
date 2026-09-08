import { React, useState } from "react";

export default function DirectUpdate() {
  const [count, setState] = useState(0);
  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h1 className="mb-6 px-8 py-4 w-full font-bold text-4xl text-center text-gray-800 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
        {count}
      </h1>
      <button
        onClick={() => setState(count + 1)}
        className="px-6 py-3 w-full font-semibold text-lg text-white bg-blue-600 duration-200 transition cursor-pointer hover:bg-blue-700 rounded-lg"
      >
        Click Me
      </button>
    </div>
  );
}
