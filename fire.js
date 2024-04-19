// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiQhh5NRxToj2EprLlD36Hm5_iQW7hjI0",
  authDomain: "database-dee37.firebaseapp.com",
  projectId: "database-dee37",
  storageBucket: "database-dee37.appspot.com",
  messagingSenderId: "362269262745",
  appId: "1:362269262745:web:db2bdeba3df6278c594908"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();