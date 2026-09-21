import { useReducer } from "react";
import UseReducerMultiAction from "./UseReducerMultiAction.jsx";
import UseReducerSingleAction from "./UseReducerSingleAction.jsx";

export default function IndexUseReducer() {
  return (
    <>
      <UseReducerMultiAction />
      <UseReducerSingleAction />
    </>
  );
}
