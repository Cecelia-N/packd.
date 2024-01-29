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

export function setListIndex() {
    const listIndex = writable(-1);
    setContext("listIndex", listIndex);
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
export function getListIndex() {
    return getContext<Writable<number>>('listIndex');
}

// export async function getFirebaseLists(): Promise< z.infer<typeof userListsSchema>>{

//   const firestoreLists = await listHandler.getLists(); 
//   const lists: z.infer<typeof userListsSchema> = [];

//   firestoreLists.docs.forEach((doc) => {
//     const data = doc.data()
//     const id = doc.id;
//     const listName: string = data.listName;
//     const items: z.infer<typeof listItemSchema>[] = [];
    
//     // console.log(data)

//     data.items.forEach((item: z.infer<typeof listItemSchema>) => {
//         items.push({
//             name: item.name,
//             quantity: Number(item.quantity),
//             packed: Boolean(item.packed)
//         });
//     });
//     lists.push({id, listName, categories: [{category: '', items, id}]});
//   });
//   return lists;
// }

