import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import firebaseConfig from './firebaseconfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    gooPopup: async () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebaseApp.auth().signInWithPopup(provider);
        return result;
    }
}