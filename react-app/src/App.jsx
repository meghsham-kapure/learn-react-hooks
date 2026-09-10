import UseStateIndex from "./UseState/UseStateIndex";
import IndexUseEffect from "./UseEffect/IndexUseEffect";
import IndexUseRef from "./UseRef/IndexUseRef";

export default function App() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center py-8 min-h-screen bg-gray-900">
      <UseStateIndex />;
      <IndexUseEffect />
      <IndexUseRef />
    </div>
  );
}
