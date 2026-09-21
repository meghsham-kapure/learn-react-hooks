// ./useCounterHook.js

import { useState } from "react";

export default function useCounterHook(initialValue) {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = (incrementBy = 1) =>
    setCounter((prev) => prev + incrementBy);
  const handleDecrement = (decrementBy = 1) =>
    setCounter((prev) => prev - decrementBy);

  return { counter, handleIncrement, handleDecrement };
}
