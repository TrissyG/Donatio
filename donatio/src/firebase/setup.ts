import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDL4N9Fmo3Seoh8OuFbDJx_ZHZSIj9Fd2A",
  authDomain: "donatio-cd439.firebaseapp.com",
  projectId: "donatio-cd439",
  storageBucket: "donatio-cd439.appspot.com",
  messagingSenderId: "857205993901",
  appId: "1:857205993901:web:6c1cf3af0ecae2cb5a3124",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
