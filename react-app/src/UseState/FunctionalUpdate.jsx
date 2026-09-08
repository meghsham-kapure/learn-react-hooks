import { React, useState } from "react";

export default function FunctionalUpdate() {
  const [count, setState] = useState(0);
  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h1 className="mb-6 px-8 py-4 w-full font-bold text-4xl text-center text-gray-800 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl">
        {count}
      </h1>
      <button
        className="px-6 py-3 w-full font-semibold text-lg text-white bg-teal-600 duration-200 transition cursor-pointer hover:bg-teal-700 rounded-lg"
        //  Stale State Issue
        // onClick={() => {
        //   setState(count + 1);
        //   setState(count + 1);
        //   setState(count + 1);
        //   setState(count + 1);
        //   setState(count + 1);
        // }}

        onClick={() => {
          setState((prev) => prev + 1);
          setState((prev) => prev + 1);
          setState((prev) => prev + 1);
          setState((prev) => prev + 1);
          setState((prev) => prev + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
