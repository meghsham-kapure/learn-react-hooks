import React, { useContext } from "react";

import { NameContext, ThemeContext } from "./GlobalContext.jsx";

export default function UseContextHome() {
  // using app context
  const nameContext = useContext(NameContext);
  const themeContext = useContext(ThemeContext);

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-3 items-center px-4 py-3 w-full bg-blue-50 rounded-lg">
          <h1 className="font-medium text-blue-700">
            Current Name Value :{" "}
            <span className="font-bold text-blue-900">{nameContext.name}</span>
          </h1>
          <input
            type="text"
            id="name-input"
            className="px-4 py-3 w-full text-gray-700 border border-gray-300 duration-200 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          />
          <button
            onClick={() =>
              nameContext.setName(document.querySelector("#name-input").value)
            }
            className="px-6 py-3 font-semibold text-white bg-blue-500 duration-200 transition active:scale-95 hover:bg-blue-600 rounded-lg"
          >
            Change Name
          </button>
        </div>

        <div className="flex flex-col gap-3 items-center px-4 py-3 w-full bg-purple-50 rounded-lg">
          <h1 className="font-medium text-purple-700">
            Current Theme Value :{" "}
            <span className="font-bold text-purple-900">
              {themeContext.theme}
            </span>
          </h1>
          <input
            type="text"
            id="theme-input"
            className="px-4 py-3 w-full text-gray-700 border border-gray-300 duration-200 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
          />
          <button
            onClick={() =>
              themeContext.setTheme(
                document.querySelector("#theme-input").value,
              )
            }
            className="px-6 py-3 font-semibold text-white bg-purple-500 duration-200 transition active:scale-95 hover:bg-purple-600 rounded-lg"
          >
            Change Theme
          </button>
        </div>
      </div>
    </div>
  );
}
