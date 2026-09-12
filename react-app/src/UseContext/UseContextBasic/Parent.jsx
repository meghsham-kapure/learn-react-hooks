// Parent.jsx
import React, { createContext } from "react";

import ChildA from "./ChildA.jsx";
import ChildB from "./ChildB.jsx";

export const globalState = createContext();



export default function Parent() {
  const devName = "devdotmaverick";

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        Use Context Parent Component
      </h2>
      <div className="flex flex-col gap-4 p-3 w-full bg-blue-50 border border-blue-200 rounded-lg">
        <globalState.Provider value={devName}>
          <div className="flex flex-col gap-3 p-3 w-full bg-green-50 border border-green-300 rounded-lg">
            <span className="font-semibold text-green-900 text-sm">ChildA</span>
            <ChildA />
          </div>
        </globalState.Provider>
        <ChildB />
      </div>
    </div>
  );
}
