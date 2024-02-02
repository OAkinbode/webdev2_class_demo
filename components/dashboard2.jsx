"use client";

import { useState } from "react";
import { farmItems } from "./json";
import Image from "next/image";
import PurchaseProduct2 from "./purchase_product2";

const Dashboard2 = () => {
  const [openModal, setOpenModal] = useState(false);
  const [animalPicture, setAnimalPicture] = useState("");

  const performClickPicture = (pictureUrl) => {
    setOpenModal(true);
    setAnimalPicture(pictureUrl);
  };

  return (
    <div className="p-2">
      <div>
        <PurchaseProduct2
          isModalOpen={openModal}
          setIsModalOpen={setOpenModal}
          animalPicture={animalPicture}
        />
        <div>
          On this application we provide you with help to purchase farm items.{" "}
        </div>
        <div className="flex flex-col gap-4 justify-center items-center p-4 ">
          <div className="flex px-4">
            <div
              className="p-2 border border-green"
              onClick={() => {
                performClickPicture("/kale.jpeg");
              }}
            >
              <Image
                src="/kale.jpeg"
                alt="kale"
                width={300}
                height={300}
              ></Image>
            </div>
            <div
              className="p-2 border border-green"
              onClick={() => {
                performClickPicture("/cow.webp");
              }}
            >
              <Image src="/cow.webp" alt="cow" width={300} height={300}></Image>
            </div>
          </div>
          <div className="flex px-4">
            <div
              className="p-2 border border-green"
              onClick={() => {
                performClickPicture("/pig.webp");
              }}
            >
              <Image src="/pig.webp" alt="pig" width={300} height={300}></Image>
            </div>
            <div
              className="p-2 border border-green"
              onClick={() => {
                performClickPicture("/chicken.jpeg");
              }}
            >
              <Image
                src="/chicken.jpeg"
                alt="chicken"
                width={300}
                height={300}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
