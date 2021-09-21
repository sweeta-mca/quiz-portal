import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCanefdKmBZVNzbH7eetej6ivSX19CZZg",
    authDomain: "react-quiz-e307c.firebaseapp.com",
    projectId: "react-quiz-e307c",
    storageBucket: "react-quiz-e307c.appspot.com",
    messagingSenderId: "46088331731",
    appId: "1:46088331731:web:88dec5be90ac70fca78f26"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

// these are required for authentication purpose
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// this will allow us to communicate with firestore 
export const db = getFirestore(app)

export const signupWithGoogleAccount = () =>{
  return signInWithPopup(auth,provider);
}
