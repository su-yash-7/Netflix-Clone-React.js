import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC0gMrFfi6Vica6o7WKCBwSDk5YZ-BmnvE",
  authDomain: "netflix-iamsuyash.firebaseapp.com",
  projectId: "netflix-iamsuyash",
  storageBucket: "netflix-iamsuyash.appspot.com",
  messagingSenderId: "685144714872",
  appId: "1:685144714872:web:13a9f8568b44a4cde0078d",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
