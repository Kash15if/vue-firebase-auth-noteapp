import firebase from "firebase";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBubx9OYh6OuEWKyafy7oyKJWaM5aqN1MQ",
  authDomain: "fir-vue1-e1cf1.firebaseapp.com",
  databaseURL: "https://fir-vue1-e1cf1.firebaseio.com",
  projectId: "fir-vue1-e1cf1",
  storageBucket: "fir-vue1-e1cf1.appspot.com",
  messagingSenderId: "548838514650",
  appId: "1:548838514650:web:a58d12a7c62df9c586eae3",
  measurementId: "G-PECVCL2LC7"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default firebaseApp;