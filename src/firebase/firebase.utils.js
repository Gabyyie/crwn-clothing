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

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;

        const userRef  = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        if(!snapShot.exists); {
                const { displayName, email } = userAuth;
                const createdAt = new Date();

                try {
                await userRef.set({
                        displayName,
                        email,
                        createdAt,
                        ...additionalData
                })
                }   catch (error) {
                                console.log('error creating user', error.message);
                        }
                        return userRef;
        }

        console.log(snapShot);
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;