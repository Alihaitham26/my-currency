// file name is stands for "backend as a service" as we use firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdiZ63t0sNJ7Qw16IaM4DPYIZL2u2K1mw",
  authDomain: "my-currency-3b87c.firebaseapp.com",
  projectId: "my-currency-3b87c",
  storageBucket: "my-currency-3b87c.appspot.com",
  messagingSenderId: "562092334451",
  appId: "1:562092334451:web:5ede2dad8fd3d1f3673906",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { app, auth, db };
