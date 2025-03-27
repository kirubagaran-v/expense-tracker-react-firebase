// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9z9CI8E8ZBgAPpOB5ucAFzTNocCJkHxI",
  authDomain: "expense-tracker-5dba1.firebaseapp.com",
  projectId: "expense-tracker-5dba1",
  storageBucket: "expense-tracker-5dba1.firebasestorage.app",
  messagingSenderId: "886128136797",
  appId: "1:886128136797:web:d7dfb19b6bfa3c5a50b3b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
