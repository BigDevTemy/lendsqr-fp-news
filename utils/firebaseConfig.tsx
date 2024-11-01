// firebaseConfig.js
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-NoYzvn7mpxC3jV7QfJGzwNYdXhqzY6Q",
  authDomain: "lendsqr-fp-news-5e14c.firebaseapp.com",
  projectId: "lendsqr-fp-news-5e14c",
  storageBucket: "lendsqr-fp-news-5e14c.appspot.com",
  messagingSenderId: "47439662517",
  appId: "1:47439662517:android:3f957c0e5360cc143b1dfc",
};

// Initialize Firebase only if it hasn't been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore
const db = getFirestore(app);

export { db };