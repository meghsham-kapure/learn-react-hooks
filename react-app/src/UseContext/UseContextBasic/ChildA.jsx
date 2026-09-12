// ChildA.jsx
import React, { useContext } from "react";
import GrandChild from "./GrandChild.jsx";
export default function ChildA() {
  return (
    <>
      <GrandChild />
    </>
  );
}
