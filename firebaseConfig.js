// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0EX6u4qKNBdSF9TMvrc1yHCPqTdjChT4",
  authDomain: "expo-test-29ccc.firebaseapp.com",
  projectId: "expo-test-29ccc",
  storageBucket: "expo-test-29ccc.firebasestorage.app",
  messagingSenderId: "734472126239",
  appId: "1:734472126239:web:eba4903a70f42fca1c3a2a",
  measurementId: "G-FPQLMLKK4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);