// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e482a.firebaseapp.com",
  projectId: "mern-estate-e482a",
  storageBucket: "mern-estate-e482a.appspot.com",
  messagingSenderId: "922093963638",
  appId: "1:922093963638:web:3abc26298e0ee1dc361257"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);