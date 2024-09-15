import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAhdrPGGogf1cLaT8PzGg7COLOsfw2BaMI",
    authDomain: "auth-51ef7.firebaseapp.com",
    projectId: "auth-51ef7",
    storageBucket: "auth-51ef7.appspot.com",
    messagingSenderId: "235939328111",
    appId: "1:235939328111:web:f557e6c8451e963e079d9a",
    measurementId: "G-DK18MWQV9G"
};

let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp(); // if already initialized, use that one
}

const db = getFirestore(app);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export { auth ,db};
