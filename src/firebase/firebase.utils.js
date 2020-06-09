import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const config ={
    apiKey: "AIzaSyCK6WHNitOJqyNFjyx3OIN6eHoZvjwDcJo",
    authDomain: "flip-db.firebaseapp.com",
    databaseURL: "https://flip-db.firebaseio.com",
    projectId: "flip-db",
    storageBucket: "flip-db.appspot.com",
    messagingSenderId: "797758092427",
    appId: "1:797758092427:web:74b9d1dbb6810da5fc508e",
    measurementId: "G-4TKN76V0YV"
  };
export const createUserProfileDocument = async(userAuth,additionalData)=>{
      if(!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapshot = await userRef.get();
      console.log(snapshot);
      if(!snapshot.exists)
      {
          const{displayName,email}=userAuth;
          const createdAt = new Date()
          try{
               await userRef.set({
                   displayName,
                   email,
                   createdAt,
                   ...additionalData
               })
          }catch(error){
             console.log('error creating user',error.message);
          }
      }
      return userRef;

  }
  firebase.initializeApp(config);
  export const auth = firebase.auth()
  export const firestore = firebase.firestore()
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase