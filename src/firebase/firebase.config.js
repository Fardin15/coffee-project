// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd0pGYNQ4c4JZz40wrqmkAEHrMY9c8Jb4",
  authDomain: "coffee-store-c6d6f.firebaseapp.com",
  projectId: "coffee-store-c6d6f",
  storageBucket: "coffee-store-c6d6f.appspot.com",
  messagingSenderId: "615901518057",
  appId: "1:615901518057:web:570abe0e52a244f0d5b878",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
