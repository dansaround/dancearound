// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfJg-pNQ2GeagnTQnz0hJzYMPIzd0tptA",
  authDomain: "dance-around-fd406.firebaseapp.com",
  projectId: "dance-around-fd406",
  storageBucket: "dance-around-fd406.appspot.com",
  messagingSenderId: "513255419696",
  appId: "1:513255419696:web:58741b00b4dbca24a8a2f5",
  measurementId: "G-KD0T11TYW2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
