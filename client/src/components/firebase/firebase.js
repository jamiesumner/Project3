import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDTzELwmCQxT6cZq6yrC33ENMGKTKz58BI",
    authDomain: "grmmr-54b23.firebaseapp.com",
    databaseURL: "https://grmmr-54b23.firebaseio.com",
    projectId: "grmmr-54b23",
    storageBucket: "grmmr-54b23.appspot.com",
    messagingSenderId: "115459664405",
    appId: "1:115459664405:web:b096777a0b8fb9ce"
};

firebase.initializeApp(firebaseConfig);

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
};

class SignInScreen extends React.Component {
    render() {
        return (
            <div>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        );
    }
}

export default Firebase;