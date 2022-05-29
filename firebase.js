// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9d1MvOWM8yIBgTJI9FO0fcZiuqqDbKys",
  authDomain: "insta-clone-6a85c.firebaseapp.com",
  projectId: "insta-clone-6a85c",
  storageBucket: "insta-clone-6a85c.appspot.com",
  messagingSenderId: "613100241203",
  appId: "1:613100241203:web:39d302968b516389cb7e46"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
