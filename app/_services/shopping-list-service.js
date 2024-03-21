import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../_utils/firebase";

export const addOneItems = async (userId, item) => {
  const updateItem = { ...item, quantity: +item.quantity };
  const newItem = await addDoc(
    collection(db, "users", userId, "items"),
    updateItem
  );

  return newItem.id;
};

export const getOneItem = async (userId, itemId) => {
  const docRef = doc(db, "users", userId, "items", itemId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Item data:", docSnap.data());
  } else {
    console.log("No such item!");
  }
};

export const queryOneItem = async (userId, queryName) => {
  const result = [];
  console.log("userId, ", userId, ", queryname: ", queryName);
  const q = query(
    collection(db, "users", userId, "items"),
    where("quantity", "==", +queryName)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    result.push(doc.data());
  });

  return result;
};

export const updateAnItem = async (userId, itemId) => {
  const docRef = doc(db, "users", userId, "items", itemId);
  const updatedDoc = await updateDoc(docRef, {
    quantity: 7,
  });
};

export const deleteItems = async (userId, itemId) => {
  const docRef = doc(db, "users", userId, "items", itemId);
  await deleteDoc(docRef);
};
