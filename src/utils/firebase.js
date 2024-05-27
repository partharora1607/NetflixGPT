// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3Dp0gsw-__LLG3xpg25fyqIW-cwVAQq4",
  authDomain: "netflixgpt-51fc2.firebaseapp.com",
  projectId: "netflixgpt-51fc2",
  storageBucket: "netflixgpt-51fc2.appspot.com",
  messagingSenderId: "292337583791",
  appId: "1:292337583791:web:eb14faffd636dffe30b65a",
  measurementId: "G-KE71P84DB1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
