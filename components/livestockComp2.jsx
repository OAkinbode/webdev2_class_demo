"use client";
import React, { useEffect, useState } from "react";

const animals = [
  { name: "Cow", weight: "300kg", color: "white" },
  { name: "Chicken", weight: "4kg", color: "red" },
  { name: "Sheep", weight: "25kg", color: "brown" },
];

const animals2 = [];

const animals3 = undefined;

const array2 = ["water", "gas", "solid", "liquid"];

const LivestockComp2 = () => {
  const [items, setItems] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [bookDetails, setBookDetails] = useState({
    author: "",
    isbn: "",
    publisher: "",
    book_index: [],
  });

  useEffect(() => {
    getItems();
  }, []);
  const listOfAnimalNames = animals.map((animal) => {
    return animal.name;
  });

  const getItems = async () => {
    const url = "https://openlibrary.org/search.json?q=the+lord+of+the+rings";
    const options = {
      method: "GET",
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setItems(data.docs.splice(0, 10));
      console.log("data: ", data.docs);
    } catch (error) {
      console.error("Error fetching items: ", error);
    }
  };

  const bookDetailsFunc = (author, isbn, publisher, book_index) => {
    const old_book_index = bookDetails.book_index;
    setBookDetails({
      author,
      isbn,
      publisher,
      book_index: [...old_book_index, book_index],
    });
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <ul>
        {items &&
          items.map((items, index) => {
            return (
              <div
                key={items}
                className="p-2 border border-green-700 my-2 rounded-md bg-zinc-100"
              >
                <li
                  onClick={() => {
                    bookDetailsFunc(
                      items.author_name
                        ? items.author_name
                        : "author not available",
                      items.isbn ? items.isbn[0] : "Isbn not available",
                      items.publisher
                        ? items.publisher[0]
                        : "Publisher not Available",
                      index
                    );
                  }}
                >
                  {items.title}
                </li>
                {bookDetails.book_index.includes(index) && showDetails && (
                  <div className="border border-green-500 bg-green-50 rounded-md p-2 italic">
                    <span className="font-semibold">Book details: </span>{" "}
                    {bookDetails.author}
                  </div>
                )}
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default LivestockComp2;
