import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBhN5PZtPHrbkP_qkAcwZe5kvC7EH0ealg",
    authDomain: "bicitienda-app.firebaseapp.com",
    projectId: "bicitienda-app",
    storageBucket: "bicitienda-app.appspot.com",
    messagingSenderId: "230107802931",
    appId: "1:230107802931:web:a9706200cdd294f1892246"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)