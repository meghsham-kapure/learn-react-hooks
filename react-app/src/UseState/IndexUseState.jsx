import DirectUpdate from "./DirectUpdate";
import FunctionalUpdate from "./FunctionalUpdate";
import PrimitiveTypedState from "./PrimitiveTypedState";
import ComplexTypedState from "./ComplexTypedState";
import LazyInitialization from "./LazyInitialization";
import UpdatingNestedState from "./UpdatingNestedState";

export default function IndexUseState() {
  return (
    <div>
      {/* Use State Examples */}
      <DirectUpdate />
      <FunctionalUpdate />
      <PrimitiveTypedState />
      <ComplexTypedState />
      <LazyInitialization />
      <UpdatingNestedState />
    </div>
  );
}
