import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDA7NiVGREIQbg6L_Hi3vZWNokg9Bx_3vY",
  authDomain: "ecommerce-73318.firebaseapp.com",
  projectId: "ecommerce-73318",
  storageBucket: "ecommerce-73318.firebasestorage.app",
  messagingSenderId: "539998713268",
  appId: "1:539998713268:web:754fa7dfb958986ec22ee1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }