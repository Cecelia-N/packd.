import { getContext, setContext } from "svelte";
import { writable, type Writable } from "svelte/store";

export function setStores() {
    const clothes = writable<string[]>([
        'Sweater',
        'pants'
    ]);
    const toiletries = writable<string[]>([
        'toothpaste',
        'hairbrush'
    ]);

    setContext('clothes', clothes)
    setContext('toiletries', toiletries)
}

export function getClothes() {
    return getContext<Writable<string[]>>('clothes');
}

export function getToiletries() {
    return getContext<Writable<string[]>>('toiletries');
}