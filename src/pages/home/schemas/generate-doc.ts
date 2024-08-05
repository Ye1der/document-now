import { z } from 'zod'

export const generateDocSchema = z.object({
  title: z.string().min(1).max(100, {
    message: 'The title must have a maximum of 100 characters',
  }),
  description: z.string().min(1).max(500, {
    message: 'The description must have a maximum of 500 characters',
  }),
  lang: z.string().min(1, {
    message: 'The language is required',
  }),
})
