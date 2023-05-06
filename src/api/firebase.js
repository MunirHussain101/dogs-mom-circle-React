import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAguuYx6zbyjjDpzu4OpQ83Di5FFqbU62s",
  authDomain: "chat-app-2-f765d.firebaseapp.com",
  projectId: "chat-app-2-f765d",
  storageBucket: "chat-app-2-f765d.appspot.com",
  messagingSenderId: "415865421676",
  appId: "1:415865421676:web:ceaaf0fb013f9cb79cfd49"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
 
