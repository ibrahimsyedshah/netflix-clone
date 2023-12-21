// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgjndJTgTiwAZaGcugoqxmnM6KdIn3njI",
    authDomain: "netflix-clone-f4438.firebaseapp.com",
    projectId: "netflix-clone-f4438",
    storageBucket: "netflix-clone-f4438.appspot.com",
    messagingSenderId: "895271810527",
    appId: "1:895271810527:web:b4644ce9acf04a8518006a"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }