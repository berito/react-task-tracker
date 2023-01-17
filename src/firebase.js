// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAwJ3lNyWv2V5jzKWUcu4k-1138m0y4rdU",
  authDomain: "react-task-tracker-01.firebaseapp.com",
  projectId: "react-task-tracker-01",
  storageBucket: "react-task-tracker-01.appspot.com",
  messagingSenderId: "384563802592",
  appId: "1:384563802592:web:4cf4a2867c6c09ddb8fb85",
  measurementId: "G-H1RQT4HJR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);