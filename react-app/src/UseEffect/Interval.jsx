import React, { useEffect, useState } from "react";

export default function Interval() {
  let [counter1, setCounter1] = useState(0);
  useEffect(() => {
    const interval1 = setInterval(() => {
      console.log("Creating interval 1");
      setCounter1((prev) => prev + 1);
    }, 1000);
  }, []);

  let [counter2, setCounter2] = useState(0);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setCounter2((prev) => {
        console.log(`Running interval ${prev}`);
        return prev + 1;
      });
    }, 1000);

    // Cleanup function - runs when component unmounts
    return () => {
      clearInterval(interval2);
      console.log("Clearing interval 2");
    };
  }, []);

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        Counter App
      </h2>

      <div className="space-y-3 w-full">
        <div className="px-4 py-3 w-full font-medium text-blue-700 text-center bg-blue-50 rounded-lg">
          Counter 1: <span className="font-bold text-blue-900">{counter1}</span>
        </div>

        <div className="px-4 py-3 w-full font-medium text-center text-green-700 bg-green-50 rounded-lg">
          Counter 2:{" "}
          <span className="font-bold text-green-900">{counter2}</span>
        </div>
      </div>
    </div>
  );
}
