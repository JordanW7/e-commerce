import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCyWeKxwA1wqaIGt_Dwmp9j7q5D3LBFdT0",
  authDomain: "e-commerce-db-22895.firebaseapp.com",
  databaseURL: "https://e-commerce-db-22895.firebaseio.com",
  projectId: "e-commerce-db-22895",
  storageBucket: "e-commerce-db-22895.appspot.com",
  messagingSenderId: "360229121482",
  appId: "1:360229121482:web:989ad0b2b6419709faf333",
  measurementId: "G-ZWT59H7Z6D"
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const { displayName, email, uid } = userAuth;
  const userRef = firestore.doc(`users/${uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("error creating user:", error.message);
    }
  }
  return userRef;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
