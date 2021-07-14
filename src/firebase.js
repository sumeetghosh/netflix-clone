import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBqAkNLFBn_SKw14xT7bau4gvnBUfatMaE",
  authDomain: "netflix-clone-5e966.firebaseapp.com",
  projectId: "netflix-clone-5e966",
  storageBucket: "netflix-clone-5e966.appspot.com",
  messagingSenderId: "365138210907",
  appId: "1:365138210907:web:bd7634b3c94bd4b7d60f7e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };

export default db;
