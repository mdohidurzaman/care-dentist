import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQNwkTFs94cwxXJv9ylOvav0Z16ZwJLww",
  authDomain: "care-dentist.firebaseapp.com",
  projectId: "care-dentist",
  storageBucket: "care-dentist.appspot.com",
  messagingSenderId: "660531622692",
  appId: "1:660531622692:web:6030b2615f4d83be42b9b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
