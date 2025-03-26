// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6s6XHmcmgL3MxgyiDvTd7ZSX9PTG6rvk",
  authDomain: "netflixgpt-e47ef.firebaseapp.com",
  projectId: "netflixgpt-e47ef",
  storageBucket: "netflixgpt-e47ef.firebasestorage.app",
  messagingSenderId: "757276384871",
  appId: "1:757276384871:web:c566734e34b913091d3ec2",
  measurementId: "G-9JM2ECCZVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);