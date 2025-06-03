// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4x93-jMu9nNj3S2AYw4aq_nTLBFO2Lpc",
  authDomain: "myapplication-e9c43e5a.firebaseapp.com",
  projectId: "myapplication-e9c43e5a",
  storageBucket: "myapplication-e9c43e5a.firebasestorage.app",
  messagingSenderId: "969449463392",
  appId: "1:969449463392:web:590cd6a795dbf0795b6d05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
