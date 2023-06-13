import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAp42ztWcIKs29UZebHLqlR6jdY2Q9LNpw",
  authDomain: "chatapp-472f5.firebaseapp.com",
  projectId: "chatapp-472f5",
  storageBucket: "chatapp-472f5.appspot.com",
  messagingSenderId: "299681867261",
  appId: "1:299681867261:web:503775b4e392dc5ebc2594"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
 
