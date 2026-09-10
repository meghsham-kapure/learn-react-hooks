import { useRef, useState } from "react";

export default function UseRefDOM() {
  const [password, setPassword] = useState("John Snow");
  const inputRef = useRef();

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        useRef DOM Manipulation
      </h2>

      <div className="space-y-4 w-full">
        {/* Password Display */}
        <div className="flex px-4 py-3 min-w-0 w-full text-center bg-purple-50 border rounded-lg">
          <h1 className="break-all font-medium text-lg text-purple-700">
            {password && password !== "" ? (
              <>
                Password is,{" "}
                <span className="break-all font-bold text-purple-900">
                  {password}
                </span>
              </>
            ) : (
              <span className="text-gray-400 text-sm">No password entered</span>
            )}
          </h1>
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Enter password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={inputRef}
          className="px-4 py-3 w-full text-gray-700 border border-gray-300 duration-200 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
        />

        {/* Reset Button */}
        <button
          onClick={() => {
            setPassword("");
            inputRef.current.focus();
          }}
          className="px-6 py-3 w-full font-semibold text-white bg-red-500 duration-200 transition active:scale-95 hover:bg-red-600 rounded-lg"
        >
          Delete
        </button>

        <button
          onClick={() => {
            if (inputRef.current.type === "password") {
              inputRef.current.type = "text";
            } else {
              inputRef.current.type = "password";
            }
            inputRef.current.focus();
          }}
          className="px-6 py-3 w-full font-semibold text-white bg-purple-500 duration-200 transition active:scale-95 hover:bg-purple-600 rounded-lg"
        >
          Change visibility
        </button>

        {/* Helper Text */}
        <p className="text-center text-gray-400 text-xs">
          Clicking reset clears the password and focuses the input via useRef
        </p>
      </div>
    </div>
  );
}
