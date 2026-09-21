import React from "react";
import useHandleChange from "./useForm";

export default function FormComponent() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [formData, handleChange, resetForm] = useHandleChange(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    if (name !== "" && email !== "" && password !== "") {
      alert(
        `Form submitted successfully with name (${name}), email (${email}) and password (${password})`,
      );
    } else {
      alert("Input incomplete!");
    }
    resetForm();
  };

  return (
    <>
      <form
        className="flex flex-col gap-3 items-center px-4 py-3 w-full bg-blue-50 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div>
          <h1 className="break-all min-w-0 font-medium text-blue-700">
            name :{" "}
            <span className="break-all font-bold text-blue-900">
              {JSON.stringify(formData.name)}
            </span>
          </h1>
          <h1 className="break-all min-w-0 font-medium text-blue-700">
            email :{" "}
            <span className="break-all font-bold text-blue-900">
              {JSON.stringify(formData.email)}
            </span>
          </h1>
          <h1 className="break-all min-w-0 font-medium text-blue-700">
            password :{" "}
            <span className="break-all font-bold text-blue-900">
              {JSON.stringify(formData.password)}
            </span>
          </h1>
        </div>

        <input
          type="text"
          name="name"
          id="name-input"
          placeholder="enter name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-3 w-full text-gray-700 border border-gray-300 duration-200 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        />
        <input
          type="email"
          name="email"
          id="email-input"
          placeholder="enter email id"
          onChange={handleChange}
          value={formData.email}
          className="px-4 py-3 w-full text-gray-700 border border-gray-300 duration-200 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        />
        <input
          type="password"
          name="password"
          id="password-input"
          placeholder="enter password"
          value={formData.password}
          onChange={handleChange}
          className="px-4 py-3 w-full text-gray-700 border border-gray-300 duration-200 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        />

        <button
          type="submit"
          className="px-6 py-3 w-full font-semibold text-white bg-blue-500 duration-200 transition active:scale-95 hover:bg-blue-600 rounded-lg"
        >
          Submit
        </button>
        <button
          type="reset"
          className="px-6 py-3 w-full font-semibold text-white bg-red-500 duration-200 transition active:scale-95 hover:bg-red-600 rounded-lg"
        >
          Reset
        </button>
      </form>
    </>
  );
}
