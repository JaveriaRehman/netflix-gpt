// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-dtLlb4V3nAv7w9pNUeKd6cha9_qOjCs",
  authDomain: "netflixgpt-43946.firebaseapp.com",
  projectId: "netflixgpt-43946",
  storageBucket: "netflixgpt-43946.appspot.com",
  messagingSenderId: "385949441217",
  appId: "1:385949441217:web:d5661114ea092fd6ff4840",
  measurementId: "G-JXSCXYQ54Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
