import { z } from 'zod';

const stringSchema = z.string().min(1, {message: 'required'}).max(255, {message: 'max 255 characters'})

export const listSchema = "no";

export const tripSchema = z.object({
  name: stringSchema,
  startDate: stringSchema,
  endDate: stringSchema,
  packingList: stringSchema // a reference to the packing list document?
});


export const partialTripSchema = tripSchema.partial()