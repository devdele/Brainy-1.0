
// src/config/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQxoP9ZFF__YspnWZBaUa_bzR1ogH-ing",
  authDomain: "brainy-fe88e.firebaseapp.com",
  projectId: "brainy-fe88e",
  storageBucket: "brainy-fe88e.firebasestorage.app",
  messagingSenderId: "1025453608061",
  appId: "1:1025453608061:web:9eb83d54a54da86380f514",
  measurementId: "G-0XVDWRTTP5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };
