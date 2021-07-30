import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBIo7TmAjHHcwDyIOh_EfhFUVxvat5DlW8',
  authDomain: 'remote-optimal.firebaseapp.com',
  projectId: 'remote-optimal',
  storageBucket: 'remote-optimal.appspot.com',
  messagingSenderId: '1015618446205',
  appId: '1:1015618446205:web:ffd158889a87b9d4482214',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
