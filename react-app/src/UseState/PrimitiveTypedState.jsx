import { React, useState } from "react";

export default function PrimitiveTypedState() {
  const [stringState, setStringState] = useState("Hello");
  const [numberState, setNumberState] = useState(0);
  const [bigintState, setBigintState] = useState(0n);
  const [booleanState, setBooleanState] = useState(false);
  const [undefinedState, setUndefinedState] = useState(undefined);
  const [nullState, setNullState] = useState(null);
  // const [symbolState, setSymbolState] = useState(new Symbol("react"));

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        Primitive Types State
      </h2>

      <div
        onClick={() => setStringState((prev) => prev + "a")}
        className="mb-3 px-4 py-3 w-full font-medium text-center text-purple-700 bg-purple-50 duration-200 transition cursor-pointer hover:bg-purple-100 rounded-lg"
      >
        String: <span className="font-bold text-purple-900">{stringState}</span>
      </div>

      <div
        onClick={() => setNumberState((prev) => prev + 1)}
        className="mb-3 px-4 py-3 w-full font-medium text-blue-700 text-center bg-blue-50 duration-200 transition cursor-pointer hover:bg-blue-100 rounded-lg"
      >
        Number: <span className="font-bold text-blue-900">{numberState}</span>
      </div>

      <div
        onClick={() => setBigintState((prev) => prev + 1n)}
        className="mb-3 px-4 py-3 w-full font-medium text-center text-green-700 bg-green-50 duration-200 transition cursor-pointer hover:bg-green-100 rounded-lg"
      >
        BigInt:{" "}
        <span className="font-bold text-green-900">
          {bigintState.toString()}
        </span>
      </div>

      <div
        onClick={() => setBooleanState((prev) => !prev)}
        className="mb-3 px-4 py-3 w-full font-medium text-center text-red-700 bg-red-50 duration-200 transition cursor-pointer hover:bg-red-100 rounded-lg"
      >
        Boolean:{" "}
        <span className="font-bold text-red-900">
          {booleanState.toString()}
        </span>
      </div>

      <div className="mb-3 px-4 py-3 w-full font-medium text-center text-gray-700 bg-gray-50 rounded-lg">
        Undefined:{" "}
        <span className="font-bold text-gray-900">
          {String(undefinedState)}
        </span>
      </div>

      <div className="px-4 py-3 w-full font-medium text-center text-gray-700 bg-gray-50 rounded-lg">
        Null:{" "}
        <span className="font-bold text-gray-900">{String(nullState)}</span>
      </div>
    </div>
  );
}
