import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfdIyekttkXqH_BpUhxfzlGp7yzBxo8oM",
  authDomain: "laundry-app-80ce8.firebaseapp.com",
  projectId: "laundry-app-80ce8",
  storageBucket: "laundry-app-80ce8.appspot.com",
  messagingSenderId: "664775320284",
  appId: "1:664775320284:web:e2cd3972c61c753c814a19",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
