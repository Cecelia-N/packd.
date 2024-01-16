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

    const avgTemp = writable<number>();
    const city = writable<string>();

    setContext('clothes', clothes)
    setContext('toiletries', toiletries)
    setContext('tech', tech);
    setContext('misc', misc);
    setContext('avgTemp', avgTemp)
    setContext('city', city)
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
export function getTemp() {
    return getContext<Writable<number>>('avgTemp');
}
export function getCity() {
    return getContext<Writable<string>>('city');
}