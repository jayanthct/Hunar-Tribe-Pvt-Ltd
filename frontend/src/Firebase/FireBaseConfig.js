// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIMVLsFodqHOWMYr-UJjm8DQyBTiJrREQ",
  authDomain: "hunar-tribe.firebaseapp.com",
  projectId: "hunar-tribe",
  storageBucket: "hunar-tribe.firebasestorage.app",
  messagingSenderId: "1089289253184",
  appId: "1:1089289253184:web:8f12b4d4e11e5653638aa5",
  measurementId: "G-M4CYJQZMH4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
