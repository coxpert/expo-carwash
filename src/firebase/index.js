
/**
 * Firebase Login
 * Reactify comes with built in firebase login feature
 * You Need To Add Your Firsebase App Account Details Here
 */

import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAcZi3LGVrC4odB1ZbD0UgL8FYklMgcfHY",
    authDomain: "cloudpin-pin-669.firebaseapp.com",
    databaseURL: "https://cloudpin-pin-669.firebaseio.com",
    projectId: "cloudpin-pin-669",
    storageBucket: "cloudpin-pin-669.appspot.com",
    messagingSenderId: "63023708585",
    appId: "1:63023708585:web:c4c954b128e948a5e46cb8",
    measurementId: "G-QNYSYQ50G9"
};


firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
