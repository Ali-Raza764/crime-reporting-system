import { app } from "../config/firebase";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  query,
  where
} from "firebase/firestore";

export const getCriminalDetails = async (id) => {
  const db = getFirestore(app);
  const q = query(collection(db, "criminals"), where("criminalId", "==", id), limit(1));

  try {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.log(querySnapshot.docs);
      console.log("No matching documents.");
      return null;
    }

    const doc = querySnapshot.docs[0];
    console.log(doc.data());
    return doc.data();
  } catch (error) {
    console.error("Error getting documents: ", error);
    return null;
  }
};
