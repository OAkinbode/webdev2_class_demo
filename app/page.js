"use client";

import Dashboard from "@/components/dashboard";
import { person1 } from "@/components/json2";
import SidePane from "@/components/side_pane";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  const sampleObject = {
    comment: "This is a prop object",
    value: 3,
  };

  const calcTotalPrice = (number1, number2) => {
    return number1 + number2;
  };

  return (
    <main className="min-h-screen ">
      <Header />
      <div className="items-center justify-center p-2 gap-2 flex flex-row">
        <SidePane />
        <div className="text-xl text-gray-600 flex-1 bg-white h-screen border-2 border-yellow-700">
          <Dashboard
            name={"steve"}
            person={person1}
            no_of_items={2}
            calcTotal={calcTotalPrice}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
