import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, doc, setDoc } from 'firebase/firestore';
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

/**
 * new DataHelper().getAll(undefined,where("Email",'==', "Partner@mailinator.com")).then((res) => {
            res.docs.forEach(r => {
                console.log("data", r.data());
            });
            this.props.navigation.navigate('Home');
        });
 */
// For fireBase reference 
// https://firebase.google.com/docs/firestore/query-data/get-data?hl=en&authuser=0
export class DataHelper {
    #app;
    #db;
    #instance;
    constructor() {
        if (this.#instance) return this.#instance;
        this.#app = initializeApp(firebaseConfig, 'banyan');
        this.#db = getFirestore(this.#app);
        this.#instance = this;
    }

    getAll(name = 'PersonalInfo', quries = null) {
        const col = collection(this.#db, name);
        const recentMessagesQuery = query(col, quries);
        return getDocs(recentMessagesQuery);
    }

    async setData(collection='PersonalInfo', pathSegment, data={}) {
        await setDoc(doc(this.#db, collection, pathSegment), data, { merge: true });
    }

}