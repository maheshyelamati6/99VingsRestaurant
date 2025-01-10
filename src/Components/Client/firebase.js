// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';




const firebaseConfig = {
  apiKey: "AIzaSyBmUhZ85Jt-lttBWNBoY4yWke62rWhLLpI",
  authDomain: "vings-43c54.firebaseapp.com",
  databaseURL: "https://vings-43c54-default-rtdb.firebaseio.com",
  projectId: "vings-43c54",
  storageBucket: "vings-43c54.firebasestorage.app",
  messagingSenderId: "167452658402",
  appId: "1:167452658402:web:c891aa5e2264f733862cbb",
  measurementId: "G-Z0RLYP5QY1"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const database=getDatabase(app);

export default database;


