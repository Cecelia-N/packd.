import { firebaseAuth } from "$lib/firebase.client";
import { error } from "@sveltejs/kit";
import { createUserWithEmailAndPassword, onIdTokenChanged, signInWithEmailAndPassword, type User } from "firebase/auth";
import { getContext, setContext } from "svelte";
import { writable, type Writable } from "svelte/store";
/**
 * Used to instantiate a writable store for the **authStore**
 * @returns A writable store of type User or null
 */
function authStore() {
    let unsubscribe: () => void;

    if(!firebaseAuth || !globalThis.window) {
        const { subscribe } = writable<User | null | undefined >(undefined);
        return {
            subscribe,
        }
    }

    const { subscribe } = writable<User | null | undefined>(undefined, (set) => {
        unsubscribe = onIdTokenChanged(firebaseAuth, set);

        return () => unsubscribe();
    })

    return {
        subscribe
    };
}
/**
 * Create a writable Store within the Context API
 * - Instantiates value using `authStore()` function
 */
export function setAuth() {
    const auth = authStore();
    setContext("authStore", auth);
}

/**
 * Returns a reference to the **authStore** Context
 * @returns An instance of the authStore via the Context API 
 */
export type AuthContext = Writable<User>;
export function getAuthStore() {
    return getContext<AuthContext>("authStore");
}

export type NewUserProfile = {
    firstName: string;
    middleName: string;
    email: string;
}

export const authHandler = {

    login: async (email: string, password: string) => {
        await signInWithEmailAndPassword(firebaseAuth, email, password)
            .catch((err) => {
                throw error(500, err);
        });
    },

    register: async (email: string, password: string) => {
        await createUserWithEmailAndPassword(firebaseAuth, email, password).catch((err) => {
            throw error(500, err);
        });
    },

    logout: async () => {
        await firebaseAuth.signOut();
    }
}