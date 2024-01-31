"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Form2 = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    address: "",
  });
  const [animalName, setAnimalName] = useState("");

  useEffect(() => {
    if (formData.name.length > 0) {
      console.log("formData: ", formData);
    }
  }, [formData]);

  const submitFunction = (event) => {
    event.preventDefault();
    // console.log("livestock data: ", formData);
    setAnimalName(formData.name);
    // console.log("Animal name: ", animalName);
  };

  // Function to handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      {formData.name.toLowerCase() === "cow" && (
        <div className="m-2 rounded-lg border-2 border-green-700 ">
          <Image
            src="/cow.webp"
            alt="cow"
            width={500}
            height={500}
            className="rounded-lg"
          ></Image>
        </div>
      )}
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
              className="border border-blue-500"
            />
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleInputChange}
              className="border border-blue-500"
            />
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

export default Form2;
