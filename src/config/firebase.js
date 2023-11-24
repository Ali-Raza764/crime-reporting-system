import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPMdm2HkDGjqVjNbjBq4vH2NDhmPeNC_Q",
  authDomain: "crime-management-3c8f3.firebaseapp.com",
  projectId: "crime-management-3c8f3",
  storageBucket: "crime-management-3c8f3.appspot.com",
  messagingSenderId: "1071643222500",
  appId: "1:1071643222500:web:b14f37e7caf51c9419e7f1",
  measurementId: "G-N9VWX6DHKB"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
