// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6seNYZrnz24Um_5DCu0D753LqfDvmU7Y",
  authDomain: "aiudo-21caa.firebaseapp.com",
  projectId: "aiudo-21caa",
  storageBucket: "aiudo-21caa.appspot.com",
  messagingSenderId: "269398976391",
  appId: "1:269398976391:web:21fa38e28f32464f8e9522",
  measurementId: "G-CSHMRYSF8B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()