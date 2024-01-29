import { firebaseAuth, firestoreDB } from "$lib/firebase.client"
import { userListsSchema } from "$lib/schemas/schemas";
import { doc, getDoc, updateDoc, type DocumentData } from "firebase/firestore"
import type { z } from "zod";

// handles all funtions related to firestore and context syncing
export const listHandler = {
  // get all the lists that a user has in their collection
    getLists: async (): Promise<z.infer<typeof userListsSchema>> => {
      const docRef = doc(firestoreDB,`users/${firebaseAuth?.currentUser?.uid || ''}` )
      const userData = await getDoc(docRef);
      const lists = userData.data()?.lists
        
      const finalList: z.infer<typeof userListsSchema> = userListsSchema.parse(lists);
      return finalList;
  },
  // update a specific list that the user has in their colleciton
  updateList: async ( payload: DocumentData) => {
    const docRef = doc(firestoreDB, `users/${firebaseAuth?.currentUser?.uid || ''}` );
    const res = await updateDoc(docRef, payload)
    return res
  }
}