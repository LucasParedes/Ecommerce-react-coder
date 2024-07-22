import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4v8FEN-AzjvFdwwDevmhNvR4iuEsSK7A",
  authDomain: "ecommerce-react-85749.firebaseapp.com",
  projectId: "ecommerce-react-85749",
  storageBucket: "ecommerce-react-85749.appspot.com",
  messagingSenderId: "89297611119",
  appId: "1:89297611119:web:48888b8ac3583788b8e09a",
};

const app = initializeApp(firebaseConfig);

// Iniciarlizar base de datos
export const db = getFirestore(app);
