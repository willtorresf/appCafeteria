import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA8uGbf5wRvel9v5n6eyHJoQoxCfTHuzeQ",
    authDomain: "ecommercecafe-28a07.firebaseapp.com",
    projectId: "ecommercecafe-28a07",
    storageBucket: "ecommercecafe-28a07.appspot.com",
    messagingSenderId: "593971170520",
    appId: "1:593971170520:web:1bdeaf70ef73f1b7c9dbad",
    measurementId: "G-YSGGHJBE2R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestoreDb = getFirestore (app)