"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AboutComp from "@/components/aboutComp";
import DogListComp from "@/components/dogLIstComp";

const About = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    console.log("Dogs: ", dogs);
  }, [dogs]);

  const addDog = (dog) => {
    const newDogList = [...dogs, { name: dog.name, age: ++dog.age }];
    setDogs(newDogList);
  };

  const removeDog = (index) => {
    // const newDogList = dogs.filter((item) => item.name !== name);
    const doglist = [...dogs];
    doglist.splice(index, 1);
    console.log("Dogs list: ", doglist);
    setDogs([...doglist]);
  };

  return (
    <div className="h-screen">
      <Header />
      <div className="h-screen">
        <AboutComp dogs={dogs} setDogs={setDogs} removeDog={removeDog} />
        <DogListComp dogList={dogs} addDog={addDog} />
      </div>

      <Footer />
    </div>
  );
};

export default About;
