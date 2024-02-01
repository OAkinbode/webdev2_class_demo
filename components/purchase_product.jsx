// components/Modal.js
import React, { useState } from "react";
import Form3 from "./form3";

const PurchaseProduct = ({ isModalOpen, setIsModalOpen, clickedImage }) => {
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModalOpen = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-green-200 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md max-w-2/3">
            <div className="w-full flex items-center justify-end">
              <div
                className="text-xs text-red-800 pb-4 w-fit pt-4 rounded-md px-2"
                onClick={closeModalOpen}
              >
                Close Modal
              </div>
            </div>

            <span
              className="absolute top-0 right-0 cursor-pointer text-xl"
              onClick={toggleModal}
            >
              &times;
            </span>
            <h2 className="text-2xl font-bold mb-4">
              Kindly provide you details
            </h2>
            <div>
              <Form3 clickedImage={clickedImage} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseProduct;
