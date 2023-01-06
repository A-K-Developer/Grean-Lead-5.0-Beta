
import { initializeApp } from "firebase/app"
import {
    onSnapshot,
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    serverTimestamp,
    doc,
   
} from 'firebase/firestore'




const firebaseConfig = {
    apiKey: "AIzaSyDAjIfH9E8PVPmKaYOrwarExvztuTcw8Jc",
    authDomain: "greanlead5.firebaseapp.com",
    projectId: "greanlead5",
    storageBucket: "greanlead5.appspot.com",
    messagingSenderId: "664122918470",
    appId: "1:664122918470:web:cc8ae74f5c38cea9c62c47"
};


// init firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'mails');
const q = query(colRef, orderBy('createdAt'))

onSnapshot(q, (snapshot) => {
    let tests = [];
    snapshot.docs.forEach((doc) => {
        tests.push({...doc.data(), id: doc.id})
    })
})
//get real-time collection data

onSnapshot(colRef, (snapshot) => {
    let mails = [];
    snapshot.docs.forEach((doc) => {
        mails.push({...doc.data(), id: doc.id})
    })
})
const addMail = document.querySelector('.add');
addMail.addEventListener('submit',(e) => {
    e.preventDefault()
    addDoc(colRef,{
        fullName: addMail.fullName.value,
        email: addMail.email.value,
        field: addMail.field.value,
        openMessage: addMail.openMessage.value,
        createdAt: serverTimestamp()
    })
    .then(() => {
        addMail.reset()
    })
})