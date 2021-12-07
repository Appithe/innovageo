import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBa48s2Glvd0mzfRJIEHt1YUW_AMy5HNzM",
    authDomain: "innovageo-5f173.firebaseapp.com",
    projectId: "innovageo-5f173",
    storageBucket: "innovageo-5f173.appspot.com",
    messagingSenderId: "63170895838",
    appId: "1:63170895838:web:f43357338f521c3f7c474f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;