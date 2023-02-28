import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAlC3ZBCz1fMNxevR1gvuFqGq7Wn6KWzBQ",
  authDomain: "we-clone-945ed.firebaseapp.com",
  projectId: "we-clone-945ed",
  storageBucket: "we-clone-945ed.appspot.com",
  messagingSenderId: "488944402791",
  appId: "1:488944402791:web:2b4053232559384fb82fc2",
  measurementId: "G-VLS0HY2YEJ"
  };
  const app = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth(); 
  
  const db = app.firestore();
  
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, googleProvider };
  
  export default db;