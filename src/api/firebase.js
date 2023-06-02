import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWsodu2ZsWlPomgcY2OQAWWgs4E5L1qW4",
  authDomain: "chat-app-943d9.firebaseapp.com",
  projectId: "chat-app-943d9",
  storageBucket: "chat-app-943d9.appspot.com",
  messagingSenderId: "222679078457",
  appId: "1:222679078457:web:9eb1391536aadca537dfe8"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
 
