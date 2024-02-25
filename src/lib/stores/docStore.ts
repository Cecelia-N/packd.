//import { browser } from "$app/environment";
//import { firebaseAuth, firestoreDB } from "$lib/firebase.client";
//import { doc, getDoc, updateDoc } from "firebase/firestore";
import { browser } from "$app/environment";
import { firebaseAuth, firestoreDB } from "$lib/firebase.client";
import { doc, getDoc, serverTimestamp, setDoc, updateDoc, type DocumentData } from "firebase/firestore";
import { getContext, setContext } from "svelte";
import { writable, type Writable } from "svelte/store";

export type DocumentContext = Writable<DocumentData>;
/**
 * Creates an instance of the "docStore" using the Context API
 */
export function setDocument() {
    const docStore = writable(null);
    setContext("docStore", docStore);
}


/**
 * 
 * @returns The writable "docStore".
 * - You can access the values reactively via $myStore
 * @example
 *  const user = getDocument
 */
export function getDocument() {
    return getContext<DocumentContext>("docStore");
}

/**
 * Handler for working with the docStore which contains the Will data
 */
export const docHandler = {

    /**
     * Check whether the currently signed-in User already has a "wills" document
     * @returns *true* if they already have a "wills" Document; otherwise *false*
     */
    hasDoc: async() => {
        if(!firebaseAuth.currentUser || !browser){
            alert('No user session detected. Please refresh the webpage and sign in to continue.');
            return false;
        }
        const docRef = doc(firestoreDB, "trips", firebaseAuth?.currentUser?.uid||"");
        const results = (await getDoc(docRef)).data();
        if(!results){
          return false;
        }
        else{
            return true;
        }
    },


    /**
     * Returns the signed-in user's "trips" document from the Firestore
     * @returns A _DocumentData_ object of the doc if it exists; otherwise *null*
     * @example
     */
    getDoc: async() => {
        if(!firebaseAuth.currentUser || !browser){
          return null;
        }
        const docRef = doc(firestoreDB, "trips", firebaseAuth?.currentUser?.uid||"");
        return (await getDoc(docRef)).data() ?? null;
    },


    /**
     * Updates the locally provided **docStore** with the latest data from Firestore
     * @param docStore A writable docStore tpyically created by `setDocument()`
     * @returns `void` but it should set the passed in docStore to either the Firestore data or null
     * @example
     *  const document = setDocument();
     * 
     *  function signIn() {
     *      setWill(document)   //updates document so that $document has the latest data
     *  }
     */
    setWill: async(docStore: DocumentContext) => {
        if(!docStore || !browser) {
            return;
        }
        const docRef = doc(firestoreDB, "wills", firebaseAuth?.currentUser?.uid||"");
        const willDoc = (await getDoc(docRef)).data() ?? null;
        docStore.set(willDoc); 
    },

    /**
     * Creates a "wills" Firestore Document for the user
     * - Performs a check if a Will already exist; returns false if does
     * @returns A Boolean whether a new Will document was created
     * @example 
     *  function signUp() {
     *      // whatever else...
     *      if (await createWill()) {
     *          console.log("Your will has been created!")
     *      }
     *      else{
     *          console.log('Something went wrong with creating your will`)
     *      }
     *  }
     */
    createWill: async() => {
        if(!firestoreDB || !browser || !firebaseAuth.currentUser){
            return false;
        }

        if(await docHandler.hasDoc()){
            return false;
        }

        const defaultWillData = {
            hasPaid: false,
            email: firebaseAuth.currentUser.email,
            signUpDate: serverTimestamp(),
        }

        const willRef = doc(firestoreDB, "wills", firebaseAuth.currentUser.uid);
        const res = await setDoc(willRef, defaultWillData, {merge:true})
            .then((result) => {
                return true;
            })
            .catch((err) => {
                alert("We ran into an issue while setting up your will. Please contact our support!");
                return false;
            })
        return res;
    },


    /**
     * Update the "wills" Firestore Document of the currently signed in user. Expects a docStore to update and
     * an object payload.
     * @param docStore A writable docStore to sync the updated Firestore Document back to
     * @param payload A DocumentData object to update Firestore Document with
     * @returns Boolean for whether a Document was updated
     */
    updateWill: async(docStore: DocumentContext, payload: DocumentData|null) => {
        if (!firebaseAuth||!browser||!payload) {
            return false;
        }
        const docRef = doc(firestoreDB, "wills", firebaseAuth?.currentUser?.uid||"");
        const res = await updateDoc(docRef, payload).then(() => {
            docHandler.setWill(docStore);
            return true;
        })
       .catch((err) => {
            alert("We ran into an issue and were unable to update your Will data. Please contact our support!");
            return false;
       });
       return res;
    },

    /**
     * Sets the provided docStore to null to clear it out
     * @param docStore A writable docStore to be cleared
     * @example
     *  const document = getDocument();
     * 
     *  function signUserOut() {
     *      // do stuff...
     *      clearWill(document)
     *  }
     */
    clearWill: (docStore: DocumentContext) => {
        docStore.set(null);
    }

}