"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const APICallAuth = () => {
  const [items, setItems] = useState(null);
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const getItems = async () => {
    const url = `https://numbersapi.p.rapidapi.com/${month}/${day}/date?fragment=true&json=true`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API,
        "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setItems(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching items: ", error);
    }
  };

  const postItems = async () => {
    const url = "/api/sampleReqs";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Sola", address: "Longrich way Canada" }),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching items: ", error);
    }
  };

  // Handler function to update the state when the input changes
  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  // Function to handle form submission (you can modify this based on your requirements)
  const handleSubmit = (event) => {
    event.preventDefault();
    getItems();
    // postItems();
    // You can perform additional actions with the values here
  };

  return (
    <div>
      {items ? (
        <div className="py-6 my-6 px-2 border border-black">{items.text}</div>
      ) : (
        <></>
      )}
      <div className="">
        <form onSubmit={handleSubmit} className="">
          <div className="p-2 bg-green-200">
            <label className="px-2">Enter month</label>
            <input
              type="text"
              placeholder="month"
              value={month}
              onChange={handleMonthChange}
              className="text-center"
            />
          </div>
          <div className="p-2 bg-green-200">
            <label className="px-2">Enter day</label>
            <input
              type="text"
              placeholder="day"
              value={day}
              onChange={handleDayChange}
              className="text-center"
            />
          </div>
          <div className="flex item-center justify-center py-2">
            <button
              className="bg-red-100 p-2 rounded-md border border-red-500"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default APICallAuth;