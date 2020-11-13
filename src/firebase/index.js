
/**
 * Firebase Login
 * Reactify comes with built in firebase login feature
 * You Need To Add Your Firsebase App Account Details Here
 */

import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDUdqgdQ_IG9wIYRJuk9OmD2V2RFi4CjTg",
    authDomain: "carwash-b4e21.firebaseapp.com",
    databaseURL: "https://carwash-b4e21.firebaseio.com",
    projectId: "carwash-b4e21",
    storageBucket: "carwash-b4e21.appspot.com",
    messagingSenderId: "299229397898",
    appId: "1:299229397898:web:c2cd29ca64a21c6dc37e73",
    measurementId: "G-9N1W8V2XH0"
};


firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
