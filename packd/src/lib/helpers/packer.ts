import type { ListItem } from "$lib/stores/packinglist";
import { DaysBetween } from "./utils";
import { getAvgTemp, getThreshold } from "./weatherHelper";

export interface form  {
    startDate: Date;
    endDate: Date;
    location: string;
    formalNum: number;
    swimmingNum: number;
    outdoorNum: number;
    toiletries: number;
    electronics: number;
    shopping: number;
    medication: boolean
    
}

export async function createPackingList(form: form) {
    const clothes = await packWeatherItems(form);

    return {
        clothes
    }
}

async function packWeatherItems(form: form) {
    const clothes: ListItem[] = [];
    const travelLength = DaysBetween(form.startDate, form.endDate);
    console.log(travelLength)
    const singlePackers = {
        coat: false,
        hat: false,
        mitts: false,
        scarf: false,
        jacket: false
    }
    const multiPackers = {
        'tshirt': 0,
        'shorts': 0,
        'longsleeve': 0
      };
      
    for (let i = 0; i < travelLength; i++){
        const weather = getThreshold(await getAvgTemp(form.location, form.startDate));
        switch (weather) {
            case "freezing":
                if (!singlePackers.coat) {
                    clothes.push({name: 'Warm coat', quantity: 1});
                    singlePackers.coat = true
                }
                if(!singlePackers.hat){
                    clothes.push({name:'Hat',quantity: 1});
                    singlePackers.hat = true;
                }
                if (!singlePackers.mitts) {
                    clothes.push({name:'Mitts', quantity: 1});
                    singlePackers.mitts = true
                }
                if (!singlePackers.scarf) {
                    clothes.push({ name: 'Scarf', quantity: 1});
                    singlePackers.scarf = true
                }
                break;
            case "chilly":
                if (!singlePackers.jacket) {
                    clothes.push({name: 'Jacket', quantity: 1});
                    singlePackers.jacket = true;
                }
                break;
            case "warm":
                multiPackers['longsleeve'] += 1;
                multiPackers['shorts'] += 1;
                break;
            case "hot":
                multiPackers['tshirt'] += 1;
                multiPackers['shorts'] += 1;
                break;
            }
    }

    Object.keys(multiPackers).forEach((key, value) => {
        clothes.push({name: key, quantity: value})
    })
    return clothes
}