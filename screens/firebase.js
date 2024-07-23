
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyAP0OtGmDUK84tm1jsqAq4Pcb8OMTNBHuo",
  authDomain: "reactnative-bb8af.firebaseapp.com",
  projectId: "reactnative-bb8af",
  storageBucket: "reactnative-bb8af.appspot.com",
  messagingSenderId: "153685132480",
  appId: "1:153685132480:web:ed8ddfcc0e90508f201925",
  measurementId: "G-8KHJBSRJRC"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {app, auth}