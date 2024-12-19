// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7Wy7Wvp9qVXlqsqSVD41Yg9c1HcC3aMg",
  authDomain: "job-portal-5c055.firebaseapp.com",
  projectId: "job-portal-5c055",
  storageBucket: "job-portal-5c055.firebasestorage.app",
  messagingSenderId: "309690796632",
  appId: "1:309690796632:web:877074ce7ac8a7d9c7582d",
  measurementId: "G-6X89YWB680"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; 