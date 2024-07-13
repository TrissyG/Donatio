import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDzjGWLP5AVhh9IuKJVl7U-uqcVpmZlVpM",
  authDomain: "donatio-6b3f9.firebaseapp.com",
  projectId: "donatio-6b3f9",
  storageBucket: "donatio-6b3f9.appspot.com",
  messagingSenderId: "129406158558",
  appId: "1:129406158558:web:ebc7fce3d85cbf4d44a44f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
