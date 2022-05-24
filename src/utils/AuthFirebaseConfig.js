import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2atwDu5nhU_o4xhDQOES5Ul9JzgQ2rNo",
    authDomain: "auth-usuarios-e1ad7.firebaseapp.com",
    projectId: "auth-usuarios-e1ad7",
    storageBucket: "auth-usuarios-e1ad7.appspot.com",
    messagingSenderId: "485010265709",
    appId: "1:485010265709:web:9de1c47af391798b089164"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app