import { initializeApp } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCgeGBh8o2u2HOx2I9eWUonFCJD_tj3I_Y",
  authDomain: "ttc-bsd-electrical-inventory.firebaseapp.com",
  projectId: "ttc-bsd-electrical-inventory",
  storageBucket: "ttc-bsd-electrical-inventory.firebasestorage.app",
  messagingSenderId: "841755081879",
  appId: "1:841755081879:web:e585357192d60ee5c53dd2",
  measurementId: "G-D77E6XVSTJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

console.log("TTC BSD Firebase initialized");
