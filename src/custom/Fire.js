import  firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAaSSwVTsY8oTBAts0Iw0qmJE_rp-Q-OP4",
  authDomain: "the-feynman-school.firebaseapp.com",
  databaseURL: "https://the-feynman-school.firebaseio.com",
  projectId: "the-feynman-school",
  storageBucket: "the-feynman-school.appspot.com",
  messagingSenderId: "46002971858",
  appId: "1:46002971858:web:239a3982f040dd43e0b90b",
  measurementId: "G-RMXR079BX0"
};

// Initialize Firebase
const fire  = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
