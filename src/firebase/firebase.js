// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from '../environments/environment';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
    
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: environment.API_KEY,
    authDomain: environment.AUTH_DOMAIN,
    projectId: environment.PROJECT_ID,
    storageBucket: environment.STORAGE_BUCKET,
    messagingSenderId: environment.MESSAGING_SENDER_ID,
    appId: environment.APP_ID,
    measurementId: environment.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);