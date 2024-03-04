"use client";
import React, { useState } from "react";
import MyContext from "./myContext";

const UseContextProvider = ({ children }) => {
  const [myValue, setMyValue] = useState("Default Value");

  return (
    <MyContext.Provider value={{ myValue, setMyValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default UseContextProvider;
