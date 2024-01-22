<script lang="ts">
    import Navigation from '$lib/components/Navigation.svelte'
	import { setStores } from '$lib/stores/packinglist';
	import { getAuthStore, setAuth } from '$lib/stores/authStore';
	import { getDocument, getLists, setDocument, setLists } from '$lib/stores/firestore';
	import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
	import { firebaseAuth, firestoreDB } from '$lib/firebase.client';
	import { browser } from '$app/environment';
	import { onIdTokenChanged } from 'firebase/auth';
    import { listSchema, listItemSchema} from '$lib/schemas/schemas'
	import {  z } from 'zod';
    

    setAuth();
    setStores();
    setDocument();
    setLists();
    const auth = getAuthStore();
    const user = getDocument();
    const lists = getLists();

    if(browser){
        onIdTokenChanged(firebaseAuth, async (e)=>{
            if(e){
                // Set the User document (their profile info)
                const docRef = doc(firestoreDB, "users", firebaseAuth?.currentUser?.uid||"");
                const userDoc = (await getDoc(docRef)).data() ?? null;
                if (userDoc) {
                    user.set(userDoc); 
                }

                // Set the Users Lists
                const colRef = collection(firestoreDB, `users/${firebaseAuth?.currentUser?.uid||''}/lists`);

                const firestoreLists = (await getDocs(colRef).then((snapshot)=>{
                    const lists: z.infer<typeof listSchema>[] = [];

                    snapshot.docs.forEach((doc)=>{
                        const data = doc.data()
                        let listName: string = data.listName;
                        let items: z.infer<typeof listItemSchema>[] = [];
                        
                        data.items.forEach((item:z.infer<typeof listItemSchema>)=>{

                            items.push( {
                                name: item.name, 
                                quantity: Number(item.quantity), 
                                packed: Boolean(item.packed)
                            });
                        });
                        lists.push({listName, items})
                    });
                    return lists;
                }));
                $lists = firestoreLists;
            }else {
                // clear the user's data when not logged in
                user.set(null);
                lists.set(null);
            }
        })
    }
</script>
<Navigation></Navigation>

<slot/>
