"use client";

import { useState } from "react";
import { farmItems } from "./json";
import Image from "next/image";
import PurchaseProduct from "./purchase_product";

const Dashboard = ({ name, person, no_of_items, calcTotal }) => {
  const [openModal, setOpenModal] = useState(false);
  const [clickedImage, setClickedImage] = useState("");

  const onClickPicture = (whichImage) => {
    setClickedImage(whichImage);
    setOpenModal(true);
  };
  return (
    <div className="p-2">
      <div>
        {openModal && (
          <PurchaseProduct
            isModalOpen={openModal}
            setIsModalOpen={setOpenModal}
            clickedImage={clickedImage}
          />
        )}
        <div>
          On this application we provide you with help to purchase farm items.{" "}
        </div>
        <div className="flex flex-col gap-4 justify-center items-center p-4 ">
          <div className="flex px-4">
            <div
              className="p-2 border border-green"
              onClick={() => {
                onClickPicture("/kale.jpeg");
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
                onClickPicture("/cow.webp");
              }}
            >
              <Image src="/cow.webp" alt="cow" width={300} height={300}></Image>
            </div>
          </div>

          <div className="flex px-4">
            <div
              className="p-2 border border-green"
              onClick={() => {
                onClickPicture("/chicken.jpeg");
              }}
            >
              <Image
                src="/chicken.jpeg"
                alt="chicken"
                width={300}
                height={300}
              ></Image>
            </div>

            <div
              className="p-2 border border-green"
              onClick={() => {
                onClickPicture("/pig.webp");
              }}
            >
              <Image src="/pig.webp" alt="pig" width={300} height={300}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
