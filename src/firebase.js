import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCBQ560y0HONjrjBlrDlg7d8NMhTcwv2e4',
	authDomain: 'netflix-484f0.firebaseapp.com',
	projectId: 'netflix-484f0',
	storageBucket: 'netflix-484f0.appspot.com',
	messagingSenderId: '418711113361',
	appId: '1:418711113361:web:73b7d8e3ec20f1982ef930',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
