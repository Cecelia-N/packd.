import { z } from 'zod';

export const listItemSchema = z.object({
    name: z.string(),
    quantity: z.number(),
    packed: z.boolean().default(false)
});

export const listSchema = z.object({
    name: z.string(),
    items: z.array(listItemSchema)
});

export const userListsSchema = z.array(listSchema);