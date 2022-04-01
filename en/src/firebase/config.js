import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBn26KLqJXSQlZox506e9jPvotJvnfc5NI",
  authDomain: "moneytracker-8d11d.firebaseapp.com",
  projectId: "moneytracker-8d11d",
  storageBucket: "moneytracker-8d11d.appspot.com",
  messagingSenderId: "211224261173",
  appId: "1:211224261173:web:00a2c66a00e93cf141f77c",
};

// init firebase

firebase.initializeApp(firebaseConfig);

// init services

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
// in2
// 对authentication的解释
