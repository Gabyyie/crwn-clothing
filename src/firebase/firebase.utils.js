import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
        apiKey: "AIzaSyDgT3mlivhP88ddCmCoVoL6IiFaO5BV_Ik",
        authDomain: "crwn-db-108f8.firebaseapp.com",
        projectId: "crwn-db-108f8",
        storageBucket: "crwn-db-108f8.appspot.com",
        messagingSenderId: "598364011885",
        appId: "1:598364011885:web:4351fce93babc3ed49ee64",
        measurementId: "G-WBCLYN3E6W"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;