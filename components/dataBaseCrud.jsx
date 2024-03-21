"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../app/_utils/auth-context";
import {
  addOneItems,
  queryOneItem,
  updateAnItem,
  deleteItems,
} from "@/app/_services/shopping-list-service";

const DatabaseCrud = ({ clickedImage }) => {
  // State to manage form data 7fyy
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
  });

  const [queryName, setQueryName] = useState("");
  const [updateId, setUpdateId] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const { user } = useUserAuth();

  const submitFunction = async (event) => {
    event.preventDefault();
    const addedItems = await addOneItems(user.uid, formData);
    console.log("Json response: ", addedItems);
    setFormData({ name: "", quantity: "" });
  };
  const submitQuery = async (event) => {
    event.preventDefault();
    const queriedItem = await queryOneItem(user.uid, queryName);
    console.log("Json response: ", queriedItem);
    setQueryName("");
  };
  const upDateItem = async (event) => {
    event.preventDefault();
    const updatedItem = await updateAnItem(user.uid, updateId);
    console.log("Json response: ", updatedItem);
    setUpdateId("");
  };
  const deleteItem = async (event) => {
    event.preventDefault();
    const deletedItem = await deleteItems(user.uid, deleteId);
    console.log("Json response: ", deletedItem);
    setDeleteId("");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleQueryChange = (event) => {
    const { value } = event.target;
    setQueryName(value);
  };

  const handleUpdateChange = (event) => {
    const { value } = event.target;
    setUpdateId(value);
  };
  const handleDeleteChange = (event) => {
    const { value } = event.target;
    setDeleteId(value);
  };

  return (
    <div>
      <div>
        <form
          onSubmit={submitFunction}
          className="border border-zinc-500 gap-2 p-2 rounded-md"
        >
          {/* Each input field should have a name attribute corresponding to the state key */}
          <div className="flex flex-col gap-2 pb-2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              className="border border-blue-500 active:bg-green-200"
            />
          </div>
          <div className="flex flex-col gap-2 pb-2">
            <input
              type="text"
              name="quantity"
              placeholder="Enter the quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="border border-blue-500 active:bg-green-200"
            />
          </div>

          <button
            type="submit"
            className={`bg-green-200 hover:bg-red-300 ml-2 p-2 border border-gray-700 rounded-md `}
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        {" "}
        <form
          onSubmit={submitQuery}
          className="border border-zinc-500 gap-2 p-2 rounded-md"
        >
          <div className="flex flex-col gap-2 pb-2">
            <input
              type="text"
              name="query"
              placeholder="Enter query quantity"
              value={queryName}
              onChange={handleQueryChange}
              className="border border-blue-500 active:bg-green-200"
            />
          </div>

          <button
            type="submit"
            className={`bg-blue-200 hover:bg-red-300 ml-2 p-2 border border-gray-700 rounded-md `}
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        {" "}
        <form
          onSubmit={upDateItem}
          className="border border-zinc-500 gap-2 p-2 rounded-md"
        >
          <div className="flex flex-col gap-2 pb-2">
            <input
              type="text"
              name="Update item"
              placeholder="Enter item Id to update"
              value={updateId}
              onChange={handleUpdateChange}
              className="border border-yello-500 active:bg-green-200"
            />
          </div>

          <button
            type="submit"
            className={`bg-yellow-200 hover:bg-red-300 ml-2 p-2 border border-gray-700 rounded-md `}
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        {" "}
        <form
          onSubmit={deleteItem}
          className="border border-zinc-500 gap-2 p-2 rounded-md"
        >
          <div className="flex flex-col gap-2 pb-2">
            <input
              type="text"
              name="Delete item"
              placeholder="Enter item Id to delete"
              value={deleteId}
              onChange={handleDeleteChange}
              className="border border-red-500 active:bg-green-200"
            />
          </div>

          <button
            type="submit"
            className={`bg-red-200 hover:bg-red-300 ml-2 p-2 border border-gray-700 rounded-md `}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DatabaseCrud;
