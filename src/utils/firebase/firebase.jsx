import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGKPbjOWCNm5J4puRmQuoGSekZvykve9U",
  authDomain: "yay24-db.firebaseapp.com",
  projectId: "yay24-db",
  storageBucket: "yay24-db.appspot.com",
  messagingSenderId: "6313959416",
  appId: "1:6313959416:web:803bfc6eda5b8ba295400d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
