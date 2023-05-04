import firebase from "firebase"

const config={
	apiKey: "AIzaSyDGT7f9ZUwYn2rDo7xzmXB23rUlZzPBV5o",
    authDomain: "otp-generation-6cbf3.firebaseapp.com",
    databaseURL: "https://otp-generation-6cbf3.firebaseio.com",
    projectId: "otp-generation-6cbf3",
    storageBucket: "otp-generation-6cbf3.appspot.com",
    messagingSenderId: "819158178398",
    appId: "1:819158178398:web:75a13d1d197c7d2470b2cf"
}

firebase.initializeApp(config);
export default firebase;