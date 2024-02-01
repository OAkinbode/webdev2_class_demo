"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Form3 = ({ clickedImage }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    address: "",
  });

  const [animalName, setAnimalName] = useState("");

  //   useEffect(() => {
  //     if (animalName.length > 0) console.log("Name: ", animalName);
  //   }, [animalName]);

  const submitFunction = (event) => {
    event.preventDefault();
    setAnimalName(formData.name.toLowerCase());
    console.log("form data: ", formData);
  };

  // Function to handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setAnimalName(value.toLowerCase());
    // console.log("Name is: ", value);
  };

  return (
    <div>
      <div className="p-2 border-2 border-blue-700 mb-2 rounded-md">
        <Image
          src={clickedImage}
          alt="clicked Image"
          width={300}
          height={300}
        ></Image>
      </div>

      <div>
        <form
          onSubmit={submitFunction}
          className="border border-zinc-500 gap-2 p-2 rounded-md"
        >
          {/* Each input field should have a name attribute corresponding to the state key */}
          <div className="flex flex-col gap-2 pb-2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              className="border border-blue-500 active:bg-green-200"
            />
          </div>
          <div className="flex flex-col gap-2 pb-2">
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleInputChange}
              className="border border-blue-500 active:bg-green-200"
            />
          </div>
          <div>
            <select id="dropdown" name="dropdown">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <button
            type="submit"
            className={`hover:bg-red-300 ml-2 p-2 border border-gray-700 rounded-md ${
              formData.name === "sola" ? "bg-green-100" : "bg-red-100"
            }`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form3;
