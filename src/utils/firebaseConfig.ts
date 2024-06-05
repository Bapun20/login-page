import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8S4hKFMjhPmrZnwmKeUsjUw9F48-O15w",
  authDomain: "login-page1236.firebaseapp.com",
  projectId: "login-page1236",
  storageBucket: "login-page1236.appspot.com",
  messagingSenderId: "501741323963",
  appId: "1:501741323963:web:3455e1f5c4bedf1e4b0b9e",
  measurementId: "G-Y34CREG3D0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
