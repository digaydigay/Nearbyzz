import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const dotenv = require("dotenv");
dotenv.config();

const app = firebase.initializeApp({
  apiKey: "AIzaSyARUhx8nvU7dF3xvRQYZZYj_1Sydb81q8w",
  authDomain: "nearbyzz.firebaseapp.com",
  projectId: "nearbyzz",
  storageBucket: "nearbyzz.appspot.com",
  messagingSenderId: "185640988122",
  appId: "1:185640988122:web:cdf8ec1cf468a70d26e4e3",
  measurementId: "G-79GJNLVDMK",
});
export const db = app.firestore();
console.log(process.env.API_KEY);
export const auth = app.auth();
export const Google = new firebase.auth.GoogleAuthProvider();
export const Facebook =new firebase.auth.FacebookAuthProvider()
export default app;
