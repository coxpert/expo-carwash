/**
 * App Reducers
 */

import { combineReducers } from 'redux';
import AuthReducer from "./AuthReducer";
import AppReducer from "./AppReducer";
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    app: AppReducer,
    auth: AuthReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default rootReducer;
