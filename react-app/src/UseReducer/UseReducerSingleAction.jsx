import { useReducer } from "react";

export default function UseReducerSingleAction() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "UPDATE_FORM":
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };

      case "RESET_FORM":
        return initialState;
        dispatch;

      default:
        return state;
    }
  };

  const handleChange = (e) => {
    console.log(`{field: ${e.target.name}, value: ${e.target.value}}`);
    dispatch({
      type: "UPDATE_FORM",
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };
  const reset = () => {
    dispatch({
      type: "RESET_FORM",
    });
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        Use Reducer Registrations
      </h2>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-2 items-center px-4 py-3 w-full bg-blue-50 rounded-lg">
          <h2 className="break-all min-w-0 font-medium text-blue-700">
            Name :{" "}
            <span className="break-all font-bold text-blue-900">
              {state.name}
            </span>
          </h2>
          <h2 className="break-all min-w-0 font-medium text-blue-700">
            Email :{" "}
            <span className="break-all font-bold text-blue-900">
              {state.email}
            </span>
          </h2>
          <h2 className="break-all min-w-0 font-medium text-blue-700">
            Password :{" "}
            <span className="break-all font-bold text-blue-900">
              {state.password}
            </span>
          </h2>
        </div>
        <div className="flex flex-col gap-3 items-center w-full">
          <input
            type="text"
            placeholder="enter name"
            name="name"
            value={state.name}
            onChange={(e) => {
              handleChange(e);
            }}
            className="px-4 py-3 w-full text-gray-700 border border-gray-300 duration-200 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          />{" "}
          <input
            type="text"
            placeholder="enter email"
            name="email"
            value={state.email}
            onChange={(e) => {
              handleChange(e);
            }}
            className="px-4 py-3 w-full text-gray-700 border border-gray-300 duration-200 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          />{" "}
          <input
            type="text"
            placeholder="enter password"
            name="password"
            value={state.password}
            onChange={(e) => {
              handleChange(e);
            }}
            className="px-4 py-3 w-full text-gray-700 border border-gray-300 duration-200 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          />
          <button
            type="reset"
            onClick={() => reset()}
            className="px-6 py-3 w-full font-semibold text-white bg-red-500 duration-200 transition active:scale-95 hover:bg-red-600 rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
