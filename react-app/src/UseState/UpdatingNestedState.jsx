import { useState } from "react";

export default function UpdatingNestedState() {
  const [userProfile, setUserProfile] = useState({
    firstName: "Tony",
    lastName: "Stark",
    address: {
      location: "Start Tower",
      city: "New York",
    },
    super: {
      heroName: "Iron Man",
      powers: ["Genius", " billionaire", " playboy", " philanthropist"],
    },
  });

  return (
    <div className="mx-auto p-6 space-y-4 max-w-md bg-gray-50 shadow-md rounded-lg">
      <h1 className="mb-4 pb-2 w-full font-bold text-center text-gray-800 text-xl border-b">
        Updating Nested State
      </h1>
      <div className="space-y-3">
        <h3 className="pb-2 font-medium text-gray-800 text-lg border-b border-gray-200">
          Name:{" "}
          <span className="font-normal">{`${userProfile?.firstName} ${userProfile?.lastName}`}</span>
        </h3>
        <h3 className="pb-2 font-medium text-gray-800 text-lg border-b border-gray-200">
          Address:{" "}
          <span className="font-normal">{`${userProfile?.address?.location} ${userProfile?.address?.city}`}</span>
        </h3>
        <h3 className="pb-2 font-medium text-gray-800 text-lg border-b border-gray-200">
          Super Hero Name:{" "}
          <span className="font-normal">{userProfile?.super?.heroName}</span>
        </h3>
        <h3 className="pb-2 font-medium text-gray-800 text-lg border-b border-gray-200">
          Super Powers:{" "}
          <span className="font-normal">
            {userProfile?.super?.powers.join(", ")}
          </span>
        </h3>
      </div>

      <div className="flex gap-3 mt-6 pt-4 border-gray-200 border-t">
        <input
          type="text"
          id="superpower"
          className="flex-1 px-4 py-2.5 border border-gray-300 duration-200 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          placeholder="Enter power..."
        />
        <button
          type="button"
          onClick={() => {
            let superPower = document.querySelector("#superpower").value;

            if (superPower && superPower !== "") {
              const copyUserProfile = { ...userProfile };
              copyUserProfile.super.powers.push(superPower);
              setUserProfile(copyUserProfile);
              superPower = "";
            }
          }}
          className="px-6 py-2.5 font-semibold text-white whitespace-nowrap bg-blue-600 duration-200 transition hover:bg-blue-700 rounded-lg"
        >
          Add Power
        </button>
      </div>
    </div>
  );
}
