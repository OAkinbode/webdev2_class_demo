"use client";

import Dashboard from "@/components/dashboard";
import Dashboard2 from "@/components/dashboard2";
import { person1 } from "@/components/json2";
import SidePane from "@/components/side_pane";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useUserAuth } from "./_utils/auth-context";
import { react, useEffect, useState } from "react";
import DatabaseCrud from "@/components/dataBaseCrud";

export default function Home() {
  const { user, gitHubSignIn } = useUserAuth();

  // useEffect(() => {
  //   if (user) {
  //     console.log("user", user);
  //   }
  // }, [user]);

  const signIn = async () => {
    await gitHubSignIn();
  };

  const sampleObject = {
    comment: "This is a prop object",
    value: 3,
  };

  const calcTotalPrice = (number1, number2) => {
    return number1 + number2;
  };

  // if (!user) {
  //   return (
  //     <main className="min-h-screen ">
  //       <div className="items-center justify-center p-2 gap-2 flex flex-row">
  //         <div>You are logged out: Click this button to log back in</div>
  //         <button className="bg-green-600 text-white p-2" onClick={signIn}>
  //           {" "}
  //           login{" "}
  //         </button>
  //       </div>
  //     </main>
  //   );
  // } else {
  return (
    <main className="min-h-screen ">
      <Header />
      <div className="items-center justify-center p-2 gap-2 flex flex-row">
        <SidePane />
        <div className="text-xl text-gray-600 flex-1 bg-white h-screen border-2 border-yellow-700">
          <Dashboard />
        </div>
        <div className="text-xl text-gray-600 flex-1 bg-white h-screen border-2 border-yellow-700">
          <DatabaseCrud />
        </div>
      </div>
      <Footer />
    </main>
  );
  // }
}
