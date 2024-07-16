import firebase from "firebase/compat/app";
import 'firebase/auth';

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyCtF7Rlrt_sZ783knDIBEXu7Ly1Z0Sngyk",
    authDomain: "chat-app-react-47049.firebaseapp.com",
    projectId: "chat-app-react-47049",
    storageBucket: "chat-app-react-47049.appspot.com",
    messagingSenderId: "248652151875",
    appId: "1:248652151875:web:948b250a21134a1840e8f6",
    measurementId: "G-P0G1QCQN1B"
  }).auth();

