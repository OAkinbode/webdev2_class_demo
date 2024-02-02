// components/Modal.js
import React, { useState } from "react";
import Form2 from "./form2";
import { toast, Toaster, useToaster } from "react-hot-toast";

const PurchaseProduct2 = ({ isModalOpen, setIsModalOpen, animalPicture }) => {
  //   const [isModalOpen, setIsModalOpen] = useState(true);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Toaster />
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md max-w-md">
            <span
              className="absolute top-0 right-0 cursor-pointer text-xl"
              //   onClick={toggleModal}
            >
              &times;
            </span>
            <div className="flex justify-end items-center">
              <p className="text-red-700 text-xs p-2" onClick={closeModal}>
                close modal
              </p>
            </div>
            <Form2
              animalPicture={animalPicture}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseProduct2;
