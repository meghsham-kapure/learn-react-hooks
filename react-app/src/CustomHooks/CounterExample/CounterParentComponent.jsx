// ./ParentComponent.jsx

import ChildComponentA from "./ChildComponentA";
import ChildComponentB from "./ChildComponentB";

export default function CounterParentComponent() {
  return (
    <div>
      <ChildComponentA />
      <ChildComponentB />
    </div>
  );
}
