import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVKkgmkC7xkK6Ur80ts0AzwUZoL2FNDEk",
  authDomain: "chat-with-pdf--challenge.firebaseapp.com",
  projectId: "chat-with-pdf--challenge",
  storageBucket: "chat-with-pdf--challenge.appspot.com",
  messagingSenderId: "710491750901",
  appId: "1:710491750901:web:666517b8ce02a70e23a0bc",
  measurementId: "G-4VB2HT7G16",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
