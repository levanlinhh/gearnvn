import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNfjDu593QUWrPOjBaXD3D9bBfZmhL3i4",
  authDomain: "gearn-vn-6814f.firebaseapp.com",
  projectId: "gearn-vn-6814f",
  storageBucket: "gearn-vn-6814f.appspot.com",
  messagingSenderId: "642718598977",
  appId: "1:642718598977:web:a43fadb43875695f9a03c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
