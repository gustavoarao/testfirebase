import firebase from 'firebase/app'
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA6y1lKkHSpjSb4xVyKx2iXy0D0xZwWgIY",
  authDomain: "fir-auth-d4e75.firebaseapp.com",
  projectId: "fir-auth-d4e75",
  storageBucket: "fir-auth-d4e75.appspot.com",
  messagingSenderId: "465861630896",
  appId: "1:465861630896:web:de98bc0607d2d4e428d475",
  measurementId: "G-HLR6YL4TMS"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()

export {firebase, auth, app}