import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdCEHrxrLQvozufmWJs2rJ9hICx5ogAG0",
  authDomain: "next-firebase-1b1e1.firebaseapp.com",
  projectId: "next-firebase-1b1e1",
  storageBucket: "next-firebase-1b1e1.appspot.com",
  messagingSenderId: "781603228775",
  appId: "1:781603228775:web:f9d40228f5c4574fee18c2",
  measurementId: "G-XT9B3KCRTN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
