
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTSeUl7yX_oYuMkTLQx8gaM2yeftJMDTU",
  authDomain: "yourtube-2dbfb.firebaseapp.com",
  projectId: "yourtube-2dbfb",
  storageBucket: "yourtube-2dbfb.firebasestorage.app",
  messagingSenderId: "544512454124",
  appId: "1:544512454124:web:a79bf26e771039d2a2a4c9",
  measurementId: "G-7J7222ZSC7"
};

// Initialize Firebase only if it hasn't been initialized already
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics only on client side
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, analytics };