"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import APICallAuth from "@/components/apiCallAuth";

const Data = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen h-screen flex justify-center items-center flex-col gap-4">
        <APICallAuth />
      </div>
      <Footer />
    </div>
  );
};

export default Data;
