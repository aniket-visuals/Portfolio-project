import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "exemplary-wares-x83b3",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:612371850880:web:8354b1acfd7f3c08952865",
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyC9pgug13-LqBAzZ5jbeswt5irY0E0vVq8",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "exemplary-wares-x83b3.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, "ai-studio-portfolio-2e3ffe5f-ce66-44f7-8fa5-be27c0391a67");
export const auth = getAuth(app);
