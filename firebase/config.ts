// firebase/config.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDA1xF-qRvXsDcdjnkPHIr2z6q6yPWBIu0",
  authDomain: "academia-flex.firebaseapp.com",
  projectId: "academia-flex",
  storageBucket: "academia-flex.appspot.com",
  messagingSenderId: "242828135380",
  appId: "1:242828135380:web:1474608876cfd38c47a441",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
