import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZNCJ7ZsuFBMQr4CbAJ1jwzq-qxZSrbAs",
  authDomain: "floorapp-709e6.firebaseapp.com",
  projectId: "floorapp-709e6",
  storageBucket: "floorapp-709e6.firebasestorage.app",
  messagingSenderId: "60368056084",
  appId: "1:60368056084:web:f39d26932ab6a285221c01",
  measurementId: "G-BW2FEYJL82"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
