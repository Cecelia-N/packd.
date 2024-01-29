<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte'
	import { setStores } from '$lib/stores/packinglist';
	import { setAuth } from '$lib/stores/authStore';
	import { getDocument, getLists, setDocument, setLists } from '$lib/stores/firestore';
	import {  doc, getDoc } from 'firebase/firestore';
	import { firebaseAuth, firestoreDB } from '$lib/firebase.client';
	import { browser } from '$app/environment';
	import { onIdTokenChanged } from 'firebase/auth';
	import { listHandler } from '$lib/stores/listHandler';
    

  setAuth();
  setStores();
  setDocument(); 
  setLists();
  const user = getDocument();
  const lists = getLists();

  if(browser){
    onIdTokenChanged(firebaseAuth, async (e)=>{
      if(e){
        const docRef = doc(firestoreDB, "users", firebaseAuth?.currentUser?.uid||"");
        const userDoc = (await getDoc(docRef)).data() ?? null;

        // Set the User document (their profile info)
        if (userDoc) {
            user.set(userDoc); 
        }
        await listHandler.getLists().then((res)=>{

          lists.set(res);
        }).catch(()=>{
          console.log("there was an error")
        });
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
