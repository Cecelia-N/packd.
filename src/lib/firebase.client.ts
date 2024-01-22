import {
    PUBLIC_FIREBASE_apiKey,
    PUBLIC_FIREBASE_authDomain,
    PUBLIC_FIREBASE_projectId,
    PUBLIC_FIREBASE_storageBucket,
    PUBLIC_FIREBASE_messagingSenderId,
    PUBLIC_FIREBASE_appId
} from "$env/static/public"
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: PUBLIC_FIREBASE_apiKey,
    authDomain: PUBLIC_FIREBASE_authDomain,
    projectId: PUBLIC_FIREBASE_projectId,
    storageBucket: PUBLIC_FIREBASE_storageBucket,
    messagingSenderId: PUBLIC_FIREBASE_messagingSenderId,
    appId: PUBLIC_FIREBASE_appId
};

// Initialize Client's instance of the firebase app
export const firebaseApp = getApps.length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth for client
export const firebaseAuth = getAuth(firebaseApp);
export const firestoreDB = getFirestore(firebaseApp);