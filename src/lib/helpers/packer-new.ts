import type { z } from "zod";
import { listArraySchema } from "$lib/schemas/schemas";
import type { ListItem } from "$lib/stores/packinglist";
import { DaysBetween } from "./utils";
import { getAvgTemp, getThreshold } from "./weatherHelper";
// Default lists
export const coldClothesList: z.infer<typeof listArraySchema> = [
  {
    name: 'mitts',
    quantity: 1,
    packed: false
  }
];
const basicToiletries: z.infer<typeof listArraySchema> = [
  {
    name: 'toothbrush',
    quantity: 1,
    packed: false
  },
  {
    name: 'tooth paste',
    quantity: 1,
    packed: false
  }
];

const extraToiletries: z.infer<typeof listArraySchema> = [
  {
    name: "shampoo",
    quantity: 1,
    packed: false
  },
  {
    name: 'conditioner',
    quantity: 1,
    packed: false
  },
  {
    name: 'lip balm',
    quantity: 1,
    packed: false
  },
  {
    name: 'nail clippers',
    quantity: 1,
    packed: false
  },
  {
    name: 'first-aid kit',
    quantity: 1,
    packed: false
  }];

export interface form  {
    startDate: Date | undefined;
    endDate: Date | undefined;
    location: string;
    formalNum: number;
    swimmingNum: number;
    outdoorNum: number;
    toiletries: number;
    electronics: number;
    
}

function packToiletries(form: form) {
  // const basics = ["toothbrush", 'toothpaste', 'hairbrush', 'skincare', 'menstral products'];

  const toiletries: z.infer<typeof listArraySchema> = [];
  if (form.toiletries >=1) {
    toiletries.concat(basicToiletries);
  }
  if (form.toiletries == 2) {
    // add the extra stuff
    toiletries.concat(extraToiletries);
  }
  return toiletries;
}

function packTech(form: form) {
    const tech: ListItem[] = [];
    const basics = ['phone charger', 'headphones or earbuds'];
    const extras = ['laptop', 'laptop charger', 'tablet', 'camera', 'travel pillow']
     // basics  
     basics.forEach((item) => {
        tech.push({ name: item, quantity: 1 })
     }); 
    if (form.electronics === 1) {
         // basics  
         extras.forEach((item) => {
            tech.push({ name: item, quantity: 1 })
        }); 
    }
    return tech;
}


export async function createPackingList(form: form) {
    const clothes = await packWeatherItems(form);
    if (form.formalNum > 0) {
        clothes.push({ name: 'formal outfit', quantity: form.formalNum });
    }
    if (form.swimmingNum > 0) {
        clothes.push({ name: 'swimsuit', quantity: form.swimmingNum });
    }
    if (form.outdoorNum > 0) {
        clothes.push({ name: 'gym shorts or yoga pants', quantity: form.outdoorNum  });
        clothes.push({ name: 'sneakers', quantity: 1 });
        clothes.push({ name: 'athletic top', quantity: form.outdoorNum });
        
    }
    const avgTemp = await getAvgTemp(form.location, form.startDate ? form.startDate : new Date())
    const toiletries = packToiletries(form);
    const tech = packTech(form);
    // const misc = packMisc(form);
    return {
        clothes,
        toiletries,
        tech,
        avgTemp
        // misc
    }
}

async function packWeatherItems(form: form) {
    const clothes: ListItem[] = [];
    if (form.startDate !== undefined && form.endDate !== undefined) {
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
    })}
    return clothes
}