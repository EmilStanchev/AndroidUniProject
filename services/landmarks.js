// landmarksService.js

import { collection, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig";

const landmarksRef = collection(db, "landmarks");

export const getLandmarks = async () => {
  try {
    const response = await getDocs(landmarksRef);

    const data = response.docs.map((document) => ({
      ...document.data(),
      id: document.id,
    }));
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
