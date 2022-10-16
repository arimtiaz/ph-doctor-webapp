// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr-9Li1wfvHi-1mqSqcsVgFA7tuLaEbDY",
  authDomain: "ph-doctor-webapp.firebaseapp.com",
  projectId: "ph-doctor-webapp",
  storageBucket: "ph-doctor-webapp.appspot.com",
  messagingSenderId: "879751263577",
  appId: "1:879751263577:web:9b7ff6604e6b7225bc4848",
  measurementId: "G-EPL3J9JW1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export default auth;