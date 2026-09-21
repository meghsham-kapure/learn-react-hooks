import UseStateIndex from "./UseState/IndexUseState.jsx";
import IndexUseEffect from "./UseEffect/IndexUseEffect";
import IndexUseRef from "./UseRef/IndexUseRef";
import UseMemoIndex from "./UseMemo/IndexUseMemo.jsx";
import UseCallbackIndex from "./UseCallback/IndexUseCallback.jsx";
import UseContextIndex from "./UseContext/IndexUseContext.jsx";
import IndexUseReducer from "./UseReducer/IndexUseReducer.jsx";
import IndexCustomHooks from "./CustomHooks/IndexCustomHooks.jsx";

export default function App() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center py-8 min-h-screen bg-gray-900">
      <UseStateIndex />
      <IndexUseEffect />
      <IndexUseRef />
      <UseMemoIndex />
      <UseCallbackIndex />
      <UseContextIndex />
      <IndexUseReducer />
      <IndexCustomHooks />
    </div>
  );
}
