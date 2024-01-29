import { z } from 'zod';

export const listItemSchema = z.object({
  name: z.string().default(''),
  quantity: z.number().default(1),
  packed: z.boolean().default(false)
});

export const listArraySchema = z.array(listItemSchema);

export const listSchema = z.object({
  listName: z.string(),
  tripLocation: z.string().optional(),
  tripStart: z.date().optional(),
  tripEnd: z.date().optional(),
  categories: z.array(z.object({
    category: z.string(),
    items: z.array(listItemSchema)
  }))
});

export const userListsSchema = z.array(listSchema);