import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyBdjKNmzPFcFX4RUKRIbPRUCCXr51EeVr8",

  authDomain: "chatbot0-d5f50.firebaseapp.com",

  projectId: "chatbot0-d5f50",

  storageBucket: "chatbot0-d5f50.appspot.com",

  messagingSenderId: "754937095507",

  appId: "1:754937095507:web:9ca0fe4c0ca717e303ada6"

};

export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth();
export const Providers = { google: new GoogleAuthProvider() }