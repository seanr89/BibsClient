// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqxGLlP9nIvSr2BuaHracIps8lomvxtyg",
  authDomain: "bibsui.firebaseapp.com",
  projectId: "bibsui",
  storageBucket: "bibsui.appspot.com",
  messagingSenderId: "435319047468",
  appId: "1:435319047468:web:670032c240640a3f541889",
  measurementId: "G-GSHXDFS6J0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);