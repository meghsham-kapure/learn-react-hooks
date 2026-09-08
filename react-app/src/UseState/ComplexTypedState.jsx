import React, { useState } from "react";

export default function ComplexTypedState() {
  return (
    <div className="flex">
      <ObjectsCard />
      <ArraysCard />
    </div>
  );
}
function ArraysCard() {
  const [numbers, setNumbers] = useState([0]);

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h1 className="mb-6 pb-3 w-full font-bold text-2xl text-center text-gray-800 border-b">
        Array Numbers
      </h1>
      <div className="flex flex-wrap gap-2 justify-center mb-6 w-full">
        {numbers.map((num, index) => (
          <span
            key={index}
            className="px-3 py-1 font-semibold text-blue-800 text-sm bg-blue-100 rounded-lg"
          >
            {num}
          </span>
        ))}
      </div>
      <button
        onClick={() => {
          const lastNumber = numbers[numbers.length - 1];
          const numbersCopy = [...numbers];
          numbersCopy.push(lastNumber + 1);

          setNumbers(numbersCopy);
        }}
        className="px-6 py-3 w-full font-semibold text-lg text-white bg-blue-600 duration-200 transition cursor-pointer hover:bg-blue-700 rounded-lg"
      >
        Add Next
      </button>
    </div>
  );
}
<h1 className="mb-6 pb-3 font-bold text-2xl text-center text-gray-800 border-b">
  Object User Profile
</h1>;

function ObjectsCard() {
  const [user, setUser] = useState({
    firstname: "John",
    lastname: "Doe",
  });
  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <div className="w-full">
        <h1 className="mb-6 pb-3 font-bold text-2xl text-center text-gray-800 border-b">
          Object User Profile
        </h1>

        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h2 className="font-medium text-gray-700">
            First Name:{" "}
            <span className="font-normal text-gray-900">{user.firstname}</span>
          </h2>
          <h2 className="mt-1 font-medium text-gray-700">
            Last Name:{" "}
            <span className="font-normal text-gray-900">{user.lastname}</span>
          </h2>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const userCopy = { ...user };

            const firstname = document.querySelector("#firstnameInput").value;
            const lastname = document.querySelector("#lastnameInput").value;

            if (firstname || firstname !== "") {
              userCopy.firstname = firstname;
            }

            if (lastname || lastname !== "") {
              userCopy.lastname = lastname;
            }
            setUser(userCopy);
          }}
        >
          <div className="space-y-3">
            <input
              type="text"
              placeholder="First Name"
              id="firstnameInput"
              className="px-4 py-2 w-full border border-gray-300 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            />
            <input
              type="text"
              placeholder="Last Name"
              id="lastnameInput"
              className="px-4 py-2 w-full border border-gray-300 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            />
            <input
              type="submit"
              value="Update Profile"
              className="px-4 py-2 w-full font-semibold text-white bg-blue-600 duration-200 transition cursor-pointer hover:bg-blue-700 rounded-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
