import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyDabB7JmWeOl5JqvMmMm2ijkCsHLYaB-1o",
  authDomain: "clothing-db-53b18.firebaseapp.com",
  projectId: "clothing-db-53b18",
  storageBucket: "clothing-db-53b18.appspot.com",
  messagingSenderId: "1046879674552",
  appId: "1:1046879674552:web:c065d2de9e2e9d62aad44d",
  measurementId: "G-G4CND0G1QB",
};

const firebaseApp = initializeApp(config);

export const auth = getAuth();
export const db = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const createUserDocFromAuth = async (authUser, additionalInfo) => {
  const user = await doc(db, "user", authUser.uid);
  const userSnapshot = await getDoc(user);
  if (!userSnapshot.exists()) {
    const { displayName, email } = authUser;
    const createdAt = new Date();
    try {
      await setDoc(user, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return user;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUser = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export default firebaseApp;
