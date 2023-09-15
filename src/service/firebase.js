// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnHL-cGBKKWezllL1it09vCgMBW_YuA3M",
  authDomain: "loyal-optics-196905.firebaseapp.com",
  projectId: "loyal-optics-196905",
  storageBucket: "loyal-optics-196905.appspot.com",
  messagingSenderId: "809902215639",
  appId: "1:809902215639:web:1c217fb3c98adb2c417b92",
  measurementId: "G-ZL9XKV8VWQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
