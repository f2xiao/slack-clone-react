import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB-V7Vvsc8EU1tjaU8WYdGQgoahGhU2pv4",
  authDomain: "slack-clone-react-a6349.firebaseapp.com",
  projectId: "slack-clone-react-a6349",
  storageBucket: "slack-clone-react-a6349.appspot.com",
  messagingSenderId: "466420383067",
  appId: "1:466420383067:web:4fd2cf004b2a307f0a2e7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {db, auth, provider}
