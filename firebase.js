import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA9WajWZEZW9B33zJCtPgB0dn9q9jCbKNI",
  authDomain: "react-notes-7d16a.firebaseapp.com",
  projectId: "react-notes-7d16a",
  storageBucket: "react-notes-7d16a.appspot.com",
  messagingSenderId: "834643181523",
  appId: "1:834643181523:web:092ed1d607b1938914b926"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")