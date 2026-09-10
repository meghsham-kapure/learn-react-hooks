import UseRefValue from "./UseRefValue";
import UseRefDOM from "./UseRefDOM.jsx";
import UseRefPreviousState from "./UseRefPreviousState.jsx";
import UseRefTimer from "./UseRefTimer.jsx";

export default function IndexUseRef() {
  return (
    <div>
      <UseRefValue />
      <UseRefDOM />
      <UseRefPreviousState />
      <UseRefTimer />
    </div>
  );
}
