import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGQ-kLsDZz3kFIm40wWfPsfxKfe5IrGhA",
  authDomain: "donatio-deba9.firebaseapp.com",
  projectId: "donatio-deba9",
  storageBucket: "donatio-deba9.appspot.com",
  messagingSenderId: "219121714489",
  appId: "1:219121714489:web:eb7f88668128b7cb2c14e8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
