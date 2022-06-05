// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, GoogleAuthProvider, signInWithPopup,
    getAdditionalUserInfo, signOut
} from 'firebase/auth'
import {
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, doc, updateDoc, 
    getDoc, onSnapshot,
    query, where, 
    setDoc, 
} from 'firebase/firestore'
import { isBrowser } from './components/layout'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF7567mYtaGo5dmHPI4O4ki0jtqUOd0s4",
  authDomain: "learnfp-test.firebaseapp.com",
  projectId: "learnfp-test",
  storageBucket: "learnfp-test.appspot.com",
  messagingSenderId: "80970518354",
  appId: "1:80970518354:web:69b85eeace79f7ca03748b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// db
export const db = getFirestore()

// collection ref
const colRef = collection(db, 'users')

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;
            const userId = result.user.uid;

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", profilePic);

            // Check if new user
            const details = getAdditionalUserInfo(result);
            const isNew = details.isNewUser;
            console.log("IS NEW? " + isNew);

            // Add document for new user
            if (isNew) {
                // addDoc(colRef, {
                //     userName: name
                // })
                // colRef.doc(userId).set({
                //     name: "Los Angeles",
                //     state: "CA",
                //     country: "USA"
                // })

                let docRef = doc(db, 'users', userId)
                setDoc(docRef, {
                    name: "Los Angeles",
                    state: "CA",
                    country: "USA"
                }).then(() => {
                    // Store uid in cookies
                    document.cookie = `uid=${userId}; expires=Mon, 31 Dec 2040 12:00:00 UTC`
                    if (isBrowser) { // needed to pass gatsby/node build
                        window.location.replace("/dashboard")
                    }
                })
            }

            else {  // setDoc doesn't finish when this isn't in .then(change to async?)
                document.cookie = `uid=${userId}; expires=Mon, 31 Dec 2040 12:00:00 UTC`
                if (isBrowser) { // needed to pass gatsby/node build
                    window.location.replace("/dashboard")
                }
            }
            
            
            // window.location.reload();
            // Redirect to dashboard
            // React.useEffect(() => {
            //     navigate('/courses');
            // }, []);
            
            // result.user.getIdToken().then(idToken => {
            //     console.log("token ID", idToken)
            //     // const csrfToken = getCookie('csrfToken')
            //     // return postIdTokenToSessionLogin('/sessionLogin', idToken, csrfToken)
            // })

            // console.log("result", result)
        })
        .catch((err) => {
            console.log(err)
        });
};

export function signOutAcc() { 
    signOut(auth).then(() => {
        console.log('Signed Out');
        // delete uid
        document.cookie = `uid=delete; expires=Thu, 01 Jan 1970 00:00:00 UTC`
        if (isBrowser) { // needed to pass gatsby/node build
            window.location.reload();
        }
    }, function(error) {
        console.error('Sign Out Error', error);
    });
}

// export function checkStatus(category, subcategory) {
//     // get document

// }


export function completeTask(category, subcategory) {
    // update document
    let docRef = doc(db, 'users', 'user-test')

    let newDoc = {};
    newDoc[category] = {};
    newDoc[category][subcategory] = "working";

    updateDoc(docRef, newDoc)

    // let docRef = doc(db, 'users', 'uijADQ0RQJmGuxZ9ZERL')

    // updateDoc(docRef, {
    //     "userName": "Nav"
    // })
}

export async function getStatus(language, lesson, id) {
    // fetching a single document (& realtime)
    const docRef = doc(db, 'users', 'user-test')
    const stuff = await getDoc(docRef);
    const status = await stuff.data()[language][lesson];
    console.log(typeof(status))
    return status ? status : "incomplete"

    // getDoc(docRef)
    //     .then(doc => {
    //         try {
    //             status = doc.data()[language]
    //             console.log("HAH")
    //             console.log(status)
    //             return status;
    //             // console.log(data === undefined)
    //             // return data
    //         } catch(err) {
    //             // console.log("err")
    //             // return "incomplete"
    //         }

    //         // console.log(doc.data()[language], doc.id)
    //         // return [doc.data(), doc.id]
    //     })
    // console.log("Status: " + status)
    // return status

    // onSnapshot(docRef, (doc) => {
    //     console.log(doc.data()["haskell"], doc.id)
    // })
}

// async function getAUser() {
//     // const query = await colRef.where('haskell.basics', '==', "working").get();
//     // if (!query.empty) {
//     //     const snapshot = query.docs[0];
//     //     const data = snapshot.data();
//     //     console.log(data)
//     //   } else {
//     //     // not found
//     //   }
//     const q = query(colRef, where("haskell.basics", "==", "working"))
//     const querySnapshot = await getDocs(q);
//     console.log("query snapshot")
//     console.log(querySnapshot);
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.data()["haskell"]["basics"]);
//       });
//     // const ss = query.docs[0];
//     // const data = ss.data();
//     // console.log("query")
//     // console.log(data)
// }

// getAUser()

// get collection data
// getDocs(colRef)
//   .then(snapshot => {
//     // console.log(snapshot.docs)
//     let stuff = []
//     snapshot.docs.forEach(doc => {
//       stuff.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(stuff)
//   })
//   .catch(err => {
//     console.log(err.message)
//   })
