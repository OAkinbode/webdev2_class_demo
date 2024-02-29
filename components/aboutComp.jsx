"use client";
import React, { useEffect, useState } from "react";

const dogsList = [
  { name: "undertaker", age: 6 },
  { name: "john cena", age: 2 },
  { name: "The Rock", age: 10 },
  { name: "The Hulk", age: 8 },
];

const AboutComp = ({ dogs, setDogs, removeDog }) => {
  useEffect(() => {
    adjustDogList();
  }, []);

  const adjustDogList = () => {
    setDogs(dogsList.sort((a, b) => a.age - b.age));
  };

  return (
    <div>
      <div className="p-2">
        <table>
          <thead className="bg-green-300 rounded-lg border border-black">
            <th className="px-2 border border-gray-400"></th>
            <th className="px-2 border border-gray-400">Name</th>
            <th className="px-2 border border-gray-400">Age</th>
            <th className="px-2 border border-gray-400"></th>
          </thead>
          <tbody className="bg-gray-100">
            {dogs &&
              dogs.map((dog, index) => (
                <tr key={dog.name}>
                  <td
                    key={dog.name}
                    className="px-2 text-left border border-gray-400"
                  >
                    {" "}
                    {index + 1}
                  </td>{" "}
                  <td
                    key={dog.name}
                    className="px-2 text-left border border-gray-400"
                  >
                    {dog.name}
                  </td>{" "}
                  <td
                    key={dog.name}
                    className="px-2 text-center border border-gray-400"
                  >
                    {dog.age}
                  </td>
                  <td
                    key={dog.name}
                    className="px-2 text-center border border-gray-400 bg-red-200"
                    onClick={() => {
                      removeDog(index);
                    }}
                  >
                    x
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutComp;
