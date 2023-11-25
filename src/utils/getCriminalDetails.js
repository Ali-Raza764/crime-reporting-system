import { app } from "../config/firebase";
import {
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";

export const getCriminalDetails = async(id) => {
    
    const db = getFirestore(app);
    q = query(collection(db, "criminals"), where('id' == id));
  
    // Check if there is data present and return the first doc from the collection as it must be the criminal Doc
    try {
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          console.log("No matching documents.");
          return null;
        }
    
        const doc = querySnapshot.docs[0];
        return doc.data();
      } catch (error) {
        console.error("Error getting documents: ", error);
        return null;
      }
};
