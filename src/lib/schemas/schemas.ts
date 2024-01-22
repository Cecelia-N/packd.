import { z } from 'zod';

export const listItemSchema = z.object({
    name: z.string().default(''),
    quantity: z.number().default(1),
    packed: z.boolean().default(false)
});

export const listSchema = z.object({
    listName: z.string(),
    items: z.array(listItemSchema)
});

export const userListsSchema = z.array(listSchema);