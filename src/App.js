import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from "./store";
import {AppNavigator} from './Router';
import * as Font from 'expo-font';
import {Platform, BackHandler} from "react-native";

// firebase
import firebase from './firebase';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'


const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance: createFirestoreInstance
}

function App() {
    useEffect(()=>{
        if(Platform.OS === 'android'){
            BackHandler.addEventListener("hardwareBackPress", () => {
                return true;
            });
        }

        (async()=>{
            await Font.loadAsync({
                'Helvetica': require('./assets/fonts/Helvetica.ttf'),
                'Lalezar': require('./assets/fonts/Lalezar.ttf')
            })
        })();

    },[])

    return (
        <Provider store= {store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <AppNavigator />
            </ReactReduxFirebaseProvider>
        </Provider>
    );
}

export default App