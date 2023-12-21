import { initializeApp } from "firebase/app";
import {getAuth}from "firebase/auth";
import{getFirestore}from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC7hopfmbqtwCfms1CI8UEyzjZQPCQvKqw",
  authDomain: "auth-c3aaf.firebaseapp.com",
  projectId: "auth-c3aaf",
  storageBucket: "auth-c3aaf.appspot.com",
  messagingSenderId: "989037607873",
  appId: "1:989037607873:web:9f053beeb7d9fc2e548d40",
  measurementId: "G-1C634KHNYH"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB= getFirestore(FIREBASE_APP);