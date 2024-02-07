"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const animals = [
  { name: "Cow", weight: "300kg", color: "white" },
  { name: "Chicken", weight: "4kg", color: "red" },
  { name: "Sheep", weight: "25kg", color: "brown" },
];

const animals2 = [];

const animals3 = undefined;

const array2 = ["water", "gas", "solid", "liquid"];

const Livestock = () => {
  const [quotes, setQuotes] = useState(null);
  const [spliced, setSpliced] = useState(null);
  // useEffect(() => {
  //   if (!quotes) {
  //     getQuotes();
  //     console.log(process.env.NEXT_PUBLIC_RAPID_API);
  //   }
  // }, []);

  useEffect(() => {
    if (!spliced) {
      const sp = splicing2();
      setSpliced(sp);
    }
  }, []);

  useEffect(() => {
    console.log("this is spliced", spliced);
  }, [spliced]);

  const splicing = () => {
    const part1 = array2.slice(0, 1);
    const part2 = array2.slice(2, array2.length);

    const final = [...part1, ...part2];

    return final;
  };

  const splicing2 = () => {
    const part1 = array2.filter((item) => {
      return item !== "gas";
    });

    return part1;
  };

  const displayAnimal = (name) => {
    console.log("Animal name is: ", name);
  };

  const getQuotes = async () => {
    const url =
      "https://famous-quotes4.p.rapidapi.com/random?category=all&count=2";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "cec37574bamsh4410491af96442dp11baa2jsn16633e0285f7",
        "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setQuotes(data);
      console.log("incoming data: ", data);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen h-screen flex justify-center items-center flex-col gap-4">
        <ul>
          {animals.length === 0 ? (
            <div>List is empty</div>
          ) : (
            animals.map((animal) => {
              return (
                <li
                  key={animal}
                  className="bg-green-200 p-2 border border-green-600"
                  onClick={() => {
                    displayAnimal(animal.name);
                  }}
                >
                  {animal.color} {animal.name} is available for sale
                </li>
              );
            })
          )}
        </ul>

        <div className="bg-red-300">{spliced}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Livestock;
