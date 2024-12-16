// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD45n8RmBRSv0koLwQ7oXhZJB3-7ppc_DQ",
  authDomain: "crowdfunding-6ef9b.firebaseapp.com",
  projectId: "crowdfunding-6ef9b",
  storageBucket: "crowdfunding-6ef9b.firebasestorage.app",
  messagingSenderId: "452727919810",
  appId: "1:452727919810:web:2b11d956c1f98b4d31575b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)