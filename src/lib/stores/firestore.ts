// import { browser } from "$app/environment";
// import { firebaseAuth, firestoreDB } from "$lib/firebase.client";
// import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import type { userListsSchema } from "$lib/schemas/schemas";
import { getContext, setContext } from "svelte";
import { writable, type Writable } from "svelte/store";

/**
 * Creates an instance of the "docStore" using the Context API
 */
export function setDocument() {
    const docStore = writable(null);
    setContext("docStore", docStore);
}

export function setLists() {
    const listStore = writable(null);
    setContext("listStore", listStore);
}


export declare interface DocumentData {
    /** A mapping between a field and its value. */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [field: string]: any;
}
export type DocumentContext = Writable<DocumentData>;

export function getDocument() {
    return getContext<DocumentContext>("docStore");

}

export function getLists() {
    return getContext<Writable<Zod.infer<typeof userListsSchema>>>('listStore');
}