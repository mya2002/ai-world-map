// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmGMytZcOaMOeagKFbsKcZddIweAr9gCM",
  authDomain: "backend-5c3a6.firebaseapp.com",
  projectId: "backend-5c3a6",
  storageBucket: "backend-5c3a6.firebasestorage.app",
  messagingSenderId: "273396841919",
  appId: "1:273396841919:web:ea36b1f6ffbd6c120af50a",
  measurementId: "G-D5NE081SMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
//const docRef = doc(db, "maps", "worldMap");
//const docSnap = await getDoc(docRef);

export { auth , provider ,db};
