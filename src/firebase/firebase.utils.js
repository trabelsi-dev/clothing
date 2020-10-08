
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {      
    apiKey: "AIzaSyBrxo337Ok1AMIfLvMTdlSLvy9QKfB58is",
    authDomain: "crwn-db-a925a.firebaseapp.com",
    databaseURL: "https://crwn-db-a925a.firebaseio.com",
    projectId: "crwn-db-a925a",
    storageBucket: "crwn-db-a925a.appspot.com",
    messagingSenderId: "879652764824",
    appId: "1:879652764824:web:26c58b1fba80d8c19624ed",
    measurementId: "G-QPTLNG13BF"
        };  

     
    
    firebase.initializeApp(config);

    // hedi bech isajil compte user fil firebase 
    //additionalData autre parametre 
    export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
      //userRef bech ya3tik users w bil id mte3ou 
        const userRef = firestore.doc(`users/${userAuth.uid}`);
      // await ya3ni yistana 
      // snapShot ya3ni bech iraja3 userRef
        const snapShot = await userRef.get();
      // kenou fama hawka name w email w wa9teh a3mal inscri
        if (!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          //hawka affiche 3 parametre hekom w ...additionalData ya3ni parametre ili b9aw 
          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            });
            // si fama error 
          } catch (error) {
            console.log('error creating user', error.message);
          }
        }
      
        return userRef;
      };




    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({prompt:'select_account'});
    //signInWithPopup pour connection avec google 
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;