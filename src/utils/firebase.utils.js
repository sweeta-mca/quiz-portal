import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {getFirestore, doc, setDoc, collection,getDocs} from "firebase/firestore";



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

export const  addUserDetails = async (user) => {
  try {
    const userRef = doc(db,"users", user.uid);
    await setDoc(userRef,user  );
    console.log("User Document written");
  }
  catch(error){
    console.error("Error adding document: ", error);
  }
}


export const getQuestions = async () => {

  try {
    const querySnapshot = await getDocs(collection(db, "questions"));
    const questions = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
               var qobj = doc.data();
                questions.push({...qobj});                 
              });
    return questions;
  }
  catch(error)
  {

  }
    
}

