import { getContext, setContext } from "svelte";
import { writable, type Writable } from "svelte/store";

export function setStores() {
    const clothes = writable<string[]>([
      
    ]);
    const toiletries = writable<string[]>([
       
    ]);
    const tech = writable<string[]>([
       
    ]);

    const misc = writable<string[]>([
        
    ]);

    setContext('clothes', clothes)
    setContext('toiletries', toiletries)
    setContext('tech', tech);
    setContext('misc', misc)
}

export function getClothes() {
    return getContext<Writable<string[]>>('clothes');
}

export function getToiletries() {
    return getContext<Writable<string[]>>('toiletries');
}

export function getTech() {
    return getContext<Writable<string[]>>('tech');
}
export function getMisc() {
    return getContext<Writable<string[]>>('misc');
}