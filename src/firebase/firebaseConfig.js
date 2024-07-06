// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEKkFU5zlLoho4Pe9sEUu0zjPkCcUzgnI",
  authDomain: "my-project-d2282.firebaseapp.com",
  projectId: "my-project-d2282",
  storageBucket: "my-project-d2282.appspot.com",
  messagingSenderId: "200777287142",
  appId: "1:200777287142:web:6c9ad672cb222faae1c227",
  measurementId: "G-DN8QXDR1BF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
