// GrandChild.jsx
import React, { useContext } from "react";
import { globalState } from "./Parent.jsx";

export default function GrandChild() {
  const devName = useContext(globalState);

  return (
    <div className="flex flex-col gap-3 p-4 w-full bg-purple-50 border border-purple-300 rounded-lg">
      <h1 className="font-bold text-lg text-purple-900">GrandChild</h1>
      <div className="px-4 py-3 w-full text-purple-700 bg-white border border-purple-200 rounded-lg">
        <h2>
          Global State Dev Name :{" "}
          <span className="font-bold text-purple-900">{devName}</span>
        </h2>
      </div>
    </div>
  );
}
