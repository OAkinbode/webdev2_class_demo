"use client";
import React, { useEffect, useState, useContext } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import APICallAuth from "@/components/apiCallAuth";
import MyContext from "@/components/myContext";

const Data = () => {
  const { myValue, setMyValue } = useContext(MyContext);
  return (
    <div className="h-screen">
      <Header />
      <div className="min-h-screen h-screen flex justify-center items-center flex-col gap-4">
        <APICallAuth>
          <div>This is div rendered using the child component</div>
        </APICallAuth>
        <div className="bg-red-200 ">
          <p>Context Value: {myValue}</p>
          {/* <button onClick={() => setMyValue("New Value")}>Change Value</button> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Data;
