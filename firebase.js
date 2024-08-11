// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWqykBhC9mhM4yqE148CQtXdsO6xwnAIg",
  authDomain: "inventory-management-c6107.firebaseapp.com",
  projectId: "inventory-management-c6107",
  storageBucket: "inventory-management-c6107.appspot.com",
  messagingSenderId: "1083045362173",
  appId: "1:1083045362173:web:42ff89a7f2df26aacf0194",
  measurementId: "G-JGNX4D74CD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };