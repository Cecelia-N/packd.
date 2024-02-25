//import { browser } from "$app/environment";
//import { firebaseAuth, firestoreDB } from "$lib/firebase.client";
//import { doc, getDoc, updateDoc } from "firebase/firestore";
import { browser } from "$app/environment";
import { firebaseAuth, firestoreDB } from "$lib/firebase.client";
import { tripSchema } from "$lib/schemas";
import { addDoc, collection, doc, getDoc, getDocs, serverTimestamp, setDoc, updateDoc, type DocumentData } from "firebase/firestore";
import { getContext, setContext } from "svelte";
import { writable, type Writable } from "svelte/store";
import { z } from 'zod';

export type DocumentContext = Writable<DocumentData>;
/**
 * Creates an instance of the "docStore" using the Context API
 */
export function setTrips() {
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
export function getTrips() {
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
  hasTripsDoc: async() => {
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
   */
  getTripsDoc: async() => {
    if(!firebaseAuth.currentUser || !browser){
      return null;
    }
    const docRef = doc(firestoreDB, "trips", firebaseAuth?.currentUser?.uid||"");
    return (await getDoc(docRef)).data() ?? null;
  },

  getTrip: async (id: string) => {
    if(!firebaseAuth.currentUser || !browser){
      return null;
    }
    const docRef = doc(firestoreDB, 'trips', firebaseAuth?.currentUser?.uid || "", 'my-trips', id);
    return (await getDoc(docRef)).data() ?? null;
  },

  getAllTrips: async () => {
    if(!firebaseAuth.currentUser || !browser){
      return null;
    }
    const trips: z.infer <typeof tripSchema>[] = []

    const querySnapshot = await getDocs(collection(firestoreDB, 'trips', firebaseAuth?.currentUser?.uid || "", 'my-trips'));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      trips.push(tripSchema.parse(doc.data()))
    });
    return trips;

  },


  /**
   * Updates the locally provided **docStore** with the latest data from Firestore
   * @param docStore A writable docStore tpyically created by `setDocument()`
   * @returns `void` but it should set the passed in docStore to either the Firestore data or null
   */
  setTrips: async(docStore: DocumentContext) => {
    if(!docStore || !browser) {
      return;
    }
    const docRef = doc(firestoreDB, "trips", firebaseAuth?.currentUser?.uid||"");
    const tripsDoc = (await getDoc(docRef)).data() ?? null;
    if(tripsDoc) docStore.set(tripsDoc); 
  },

  /**
   * Creates a "trips" Firestore Document for the user
   * - Performs a check if a Trips doc already exist; returns false if does
   * @returns A Boolean whether a new Will document was created
   */
  createTripsDoc: async() => {
    if(!firestoreDB || !browser || !firebaseAuth.currentUser){
      return false;
    }

    if(await docHandler.hasTripsDoc()){
      return false;
    }

    const defaultWillData = {
      dateCreated: serverTimestamp(),
    }

    const tripsRef = doc(firestoreDB, "trips", firebaseAuth.currentUser.uid);
    const res = await setDoc(tripsRef, defaultWillData, {merge:true})
      .then(() => {
        return true;
      })
      .catch(() => {
        alert("We ran into an issue while setting up your doc. Please contact our support!");
        return false;
      })
    return res;
  },
  createTrip: async(payload: DocumentData) => {
    if (!firestoreDB || !browser || !firebaseAuth.currentUser) {
      console.log('failed to create trip.')
      return false;
    }
    console.log(payload)
    await addDoc(collection(firestoreDB, "trips", firebaseAuth.currentUser.uid, 'my-trips'), payload)
      .catch(() => {
        console.log('failed to create trip.')
        return false
      });
    console.log('successfully created trip')
    return true;
  },


  /**
   * Update the "wills" Firestore Document of the currently signed in user. Expects a docStore to update and
   * an object payload.
   * @param docStore A writable docStore to sync the updated Firestore Document back to
   * @param payload A DocumentData object to update Firestore Document with
   * @returns Boolean for whether a Document was updated
   */
  updateTrips: async(docStore: DocumentContext, payload: DocumentData|null) => {
    if (!firebaseAuth||!browser||!payload) {
        return false;
    }
    const docRef = doc(firestoreDB, "trips", firebaseAuth?.currentUser?.uid||"");
    const res = await updateDoc(docRef, payload).then(() => {
      docHandler.setTrips(docStore);
      return true;
    })
    .catch(() => {
      alert("We ran into an issue and were unable to update your data. Please contact our support!");
      return false;
    });
    return res;
  },

  /**
   * Sets the provided docStore to null to clear it out
   * @param docStore A writable docStore to be cleared
   */
  clearTrips: (docStore: DocumentContext) => {
      docStore.set({});
  }

}