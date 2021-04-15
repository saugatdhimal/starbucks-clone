import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDLWWxVEUpfiO0hukMoK8GNb4BrjGdIpLY",
    authDomain: "starbucks-77.firebaseapp.com",
    projectId: "starbucks-77",
    storageBucket: "starbucks-77.appspot.com",
    messagingSenderId: "816858471722",
    appId: "1:816858471722:web:d3ff98021b4e368759d253"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }