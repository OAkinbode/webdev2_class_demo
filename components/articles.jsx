"use client";
import React, { useEffect, useState } from "react";

const Articles = () => {
  const [articlesText, setArticles] = useState(null);

  useEffect(() => {
    if (articlesText) {
      console.log("articleText: ", articlesText);
    }
    if (!articlesText) {
      getArticles();
    }
  }, [articlesText]);

  const getArticles = async () => {
    const url = "https://api.artic.edu/api/v1/artworks/656";
    const options = {
      method: "GET",
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setArticles(data);
      console.log("incoming data: ", data);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };
  return <div>{articlesText.data.description}</div>;
};

export default Articles;
