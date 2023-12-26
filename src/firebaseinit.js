// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOsRlDZ7yEKimu3y9qQSvoW9EOpkjlsHA",
  authDomain: "busybuy-2.firebaseapp.com",
  projectId: "busybuy-2",
  storageBucket: "busybuy-2.appspot.com",
  messagingSenderId: "411571080524",
  appId: "1:411571080524:web:35fe7046422db68eac13e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
