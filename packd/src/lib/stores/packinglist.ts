import { getContext, setContext } from "svelte";
import { writable, type Writable } from "svelte/store";
export interface ListItem {
    name: string,
    quantity: number
}

export function setStores() {
    const clothes = writable<ListItem[]>([
      
    ]);
    const toiletries = writable<ListItem[]>([
       
    ]);
    const tech = writable<ListItem[]>([
       
    ]);

    const misc = writable<ListItem[]>([
        
    ]);

    setContext('clothes', clothes)
    setContext('toiletries', toiletries)
    setContext('tech', tech);
    setContext('misc', misc)
}

export function getClothes() {
    return getContext<Writable<ListItem[]>>('clothes');
}

export function getToiletries() {
    return getContext<Writable<ListItem[]>>('toiletries');
}

export function getTech() {
    return getContext<Writable<ListItem[]>>('tech');
}
export function getMisc() {
    return getContext<Writable<ListItem[]>>('misc');
}