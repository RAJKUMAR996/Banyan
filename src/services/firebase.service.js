import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXRJgE5i5D6n8h26eKxO1bCrY9TyUBJBM",
    authDomain: "banyan-c0646.firebaseapp.com",
    databaseURL: "https://banyan-c0646-default-rtdb.firebaseio.com",
    projectId: "banyan-c0646",
    storageBucket: "banyan-c0646.appspot.com",
    messagingSenderId: "22508569584",
    appId: "1:22508569584:web:5724608e507cbccc11d335",
    measurementId: "G-61YH4P7GJ0"
};

const app = initializeApp(firebaseConfig, 'banyan');
const db = getFirestore(app);
export function getcollection(name = 'PersonalInfo') {
    const col = collection(db, name);
    const recentMessagesQuery = query(col, null, limit(12));
    return getDocs(recentMessagesQuery)
}
