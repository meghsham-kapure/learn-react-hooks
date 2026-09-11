import React from "react";

function Child({ increment }) {
  console.log("Child component rendered");
  return (
    <div>
      <button onClick={() => increment()}>increment</button>
    </div>
  );
}

export default React.memo(Child);
