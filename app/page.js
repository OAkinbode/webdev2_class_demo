"use client";

import Dashboard from "@/components/dashboard";
import { person1 } from "@/components/json2";

export default function Home() {
  const sampleObject = {
    comment: "This is a prop object",
    value: 3,
  };

  const calcTotalPrice = (number1, number2) => {
    return number1 + number2;
  };

  return (
    <main className="min-h-screen items-center justify-center p-2 gap-2 flex flex-row">
      <div className="text-4xl text-red-700 border-2 border-green-800 p-2 flex-1 bg-green-100 h-screen w-1/4 max-w-[200px]"></div>
      <div className="text-xl text-gray-600 flex-1 bg-white h-screen border-2 border-yellow-700">
        <Dashboard
          name={"steve"}
          person={person1}
          no_of_items={2}
          calcTotal={calcTotalPrice}
        />
      </div>
    </main>
  );
}
