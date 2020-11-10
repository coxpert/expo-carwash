import firebase from '../../firebase';

export const AUTH_LOGIN_START = 'AUTH_LOGIN_START';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE';

export const AUTH_REGISTER_START = 'AUTH_REGISTER_START';
export const AUTH_REGISTER_SUCCESS = 'AUTH_REGISTER_SUCCESS';
export const AUTH_REGISTER_FAILURE = 'AUTH_REGISTER_FAILURE';

export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const AUTH_SEND_RECOVERY_EMAIL_START = 'AUTH_SEND_RECOVERY_EMAIL_START';
export const AUTH_SEND_RECOVERY_EMAIL_SUCCESS = 'AUTH_SEND_RECOVERY_EMAIL_SUCCESS';
export const AUTH_SEND_RECOVERY_EMAIL_FAILURE = 'AUTH_SEND_RECOVERY_EMAIL_FAILURE';

export const loginWithFirebase = (user, navigation,setSpinner) => async(dispatch, getState, {getFirestore}) =>{
    dispatch({ type: AUTH_LOGIN_START });
    await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((success) => {
            const firestore = getFirestore();
            firestore.collection('users').doc(success.user.uid).get().then(user=>{
                if(user.data() && user.data().username){
                    dispatch({ type: AUTH_LOGIN_SUCCESS, payload: user.data()});
                    setSpinner(false)
                    navigation.navigate('MyPins')
                }else {
                    setSpinner(false)
                    navigation.navigate('CompleteProfile')
                }
            })
        })
        .catch((error) => {
            console.log(error)
            alert(error.message)
            setSpinner(false)
            dispatch({ type: AUTH_LOGIN_FAILURE });
        });
}

export const signUpWithFirebase = (user, navigation, setSpinner) => async(dispatch, getState, {getFirestore}) => {
    dispatch({ type: AUTH_REGISTER_START });
    await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((success) => {
            const firestore = getFirestore();
            const userData = {
                uid: success.user.uid,
                name: user.fullName,
                email: user.email,
            }
            console.log(userData)
            firestore.collection('users').doc(`${success.user.uid}`).set(userData).then(()=>{
                console.log('======================================================')
                setSpinner(false)
                dispatch({ type: AUTH_REGISTER_SUCCESS, payload: userData });
                navigation.navigate('CompleteProfile')
            }).catch((error) => {
                console.log(error)
                dispatch({ type: AUTH_REGISTER_FAILURE });
            });
        })
        .catch((error) => {
            console.log("firebase createUserWithEmailAndPassword", error)
            setSpinner(false)
            alert(error.message)
            dispatch({ type: AUTH_REGISTER_FAILURE });
        });
}


/**
 *Send Email for verify Code and Password
 */

export const sendEmailForRecovery = (email)=>(dispatch)=>{
    dispatch({type: AUTH_SEND_RECOVERY_EMAIL_START})
    firebase.auth().sendPasswordResetEmail(email).then(function() {
        dispatch({type: AUTH_SEND_RECOVERY_EMAIL_SUCCESS})
    }).catch(function(error) {
        console.log("sendEmailForRecovery", error)
        dispatch({type: AUTH_SEND_RECOVERY_EMAIL_FAILURE})
    });
}


/**
 * Redux Action To Signout User From  Firebase
 */

export const logoutUserFromFirebase = (callback) => (dispatch) => {
    firebase.auth().signOut()
        .then(() => {
            dispatch({ type: AUTH_LOGOUT });
            if(callback){
                callback();
            }
        })
        .catch((error) => {
            console.log(error)
        })
}
