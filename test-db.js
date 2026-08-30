import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  projectId: "exemplary-wares-x83b3",
  appId: "1:612371850880:web:8354b1acfd7f3c08952865",
  apiKey: "AIzaSyC9pgug13-LqBAzZ5jbeswt5irY0E0vVq8",
  authDomain: "exemplary-wares-x83b3.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, "ai-studio-portfolio-2e3ffe5f-ce66-44f7-8fa5-be27c0391a67");

async function test() {
  const docRef = doc(db, 'portfolio', 'data');
  const snap = await getDoc(docRef);
  if (snap.exists()) {
    console.log(JSON.stringify(snap.data().testimonials, null, 2));
  } else {
    console.log("No data");
  }
}
test();
