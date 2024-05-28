
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDnVKqC6On4ZSdN5DGbI0jr90rvrcGWogg",
  authDomain: "kora-a3ed5.firebaseapp.com",
  projectId: "kora-a3ed5",
  storageBucket: "kora-a3ed5.appspot.com",
  messagingSenderId: "775420242376",
  appId: "1:775420242376:web:5fd1a7042dfd4bd30478fd",
  measurementId: "G-5YYZ0Y40CW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);