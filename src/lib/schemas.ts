import { z } from 'zod';

const stringSchema = z.string().min(1, {message: 'required'}).max(255, {message: 'max 255 characters'})

export const tripSchema = z.object({
  name: stringSchema,
  startDate: stringSchema,
  endDate: stringSchema
});