"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const animals = [
  { name: "Cow", weight: "300kg", color: "white" },
  { name: "Chicken", weight: "4kg", color: "red" },
  { name: "Sheep", weight: "25kg", color: "brown" },
];

const animals2 = [];

const animals3 = undefined;

const array2 = ["water", "gas", "solid", "liquid"];

const githubIds = `
abc
dbg
`;

const LivestockComp = () => {
  const [quotes, setQuotes] = useState(null);
  const [sliced, setSliced] = useState(null);
  const [spliced, setSpliced] = useState(null);
  useEffect(() => {
    if (!quotes) {
      getQuotes();
    }
  }, []);

  useEffect(() => {
    if (quotes) {
      console.log("These are the quotes: ", quotes);
    }
  }, [quotes]);

  useEffect(() => {
    if (!spliced && quotes) {
      const slicedQuotes = quotes.docs.slice(0, 20);
      setSliced(slicedQuotes);
    }
  }, [quotes]);

  useEffect(() => {
    if (true) {
      const newString = replaceNewlinesWithSpaces(githubIds);
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

  // Source for public urls
  //https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
  // good example: "https://openlibrary.org/search.json?q=the+lord+of+the+rings", "https://collectionapi.metmuseum.org/public/collection/v1/objects/200"

  const getQuotes = async () => {
    const url = "https://openlibrary.org/search.json?q=the+lord+of+the+rings";
    const options = {
      method: "GET",
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

  function replaceNewlinesWithSpaces(inputString) {
    // Use the replace method to replace new lines with spaces
    const resultString = inputString.replace(/\n/g, " ");
    console.log("new String: ", resultString);
    return resultString;
  }

  return (
    <div>
      <div className="">
        <ul>
          {sliced && sliced.length === 0 ? (
            <div>List is empty</div>
          ) : (
            sliced &&
            sliced.map((doc) => {
              return (
                <li
                  key={doc}
                  className="bg-green-200 p-2 border border-green-600"
                  //   onClick={() => {
                  //     displayAnimal(animal.name);
                  //   }}
                >
                  {doc.title}
                </li>
              );
            })
          )}
        </ul>

        {/* <ul>
          {quotes && quotes.data.length === 0 ? (
            <div>List is empty</div>
          ) : (
            quotes &&
            quotes.data.map((item) => {
              return (
                <li
                  key={item}
                  className="bg-green-200 p-2 border border-green-600"
                    onClick={() => {
                      displayAnimal(item.api_link);
                    }}
                >
                  <Link href={item.api_link}>{item.api_link}</Link>
                </li>
              );
            })
          )}
        </ul> */}

        {/* {quotes && (
              <div className="bg-blue-300">
                <Image
                  height={300}
                  width={300}
                  src={quotes.primaryImage}
                  alt="gallery"
                ></Image>
              </div>
            )} */}
      </div>
    </div>
  );
};

export default LivestockComp;
