"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import LivestockComp from "@/components/livestockComp";
import LivestockComp2 from "@/components/livestockComp2";
import Articles from "@/components/articles";

const Livestock = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen h-screen flex justify-center items-center flex-col gap-4">
        <LivestockComp2 />
        {/* <Articles /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Livestock;
