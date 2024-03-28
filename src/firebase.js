// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBymhdtDc1T88Yfjm8tTC-VcIPwGlBfhfE',
  authDomain: 'going-30.firebaseapp.com',
  databaseURL: 'https://going-30-default-rtdb.firebaseio.com',
  projectId: 'going-30',
  storageBucket: 'going-30.appspot.com',
  messagingSenderId: '85171858459',
  appId: '1:85171858459:web:e712b5b799f00a02995cbe',
  measurementId: 'G-QLRBFMSK5Z'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const firestore = getFirestore(app)

export { app as default, analytics, firestore }
