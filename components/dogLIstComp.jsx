"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const DogListComp = ({ dogList, addDog }) => {
  // State to manage form data
  const [dogData, setDogData] = useState({
    name: "",
    age: "",
  });

  const submitFunction = (event) => {
    event.preventDefault();
    addDog(dogData);
  };

  // Function to handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // setAnimalName(value.toLowerCase());
    // console.log("Name is: ", value);
  };

  return (
    <div>
      <div className="bg-gray-100">
        <form
          onSubmit={submitFunction}
          className="border border-zinc-500 gap-2 p-2 rounded-md"
        >
          {/* Each input field should have a name attribute corresponding to the state key */}
          <div className="flex flex-col gap-2 pb-2">
            <input
              type="text"
              name="name"
              placeholder="Enter dog name"
              value={dogData.name}
              onChange={handleInputChange}
              className="border border-blue-500 active:bg-green-200"
            />
          </div>
          <div className="flex flex-col gap-2 pb-2">
            <input
              type="text"
              name="age"
              placeholder="Enter dog age"
              value={dogData.age}
              onChange={handleInputChange}
              className="border border-blue-500 active:bg-green-200"
            />
          </div>

          <button
            type="submit"
            className={`hover:bg-red-300 ml-2 p-2 border border-gray-700 rounded-md ${
              dogData.name === "sola" ? "bg-green-100" : "bg-red-100"
            }`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DogListComp;
