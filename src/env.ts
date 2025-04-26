import { z } from 'zod'

export const envSchema = z.object({
  MODE: z.enum(['production', 'development', 'test']),
  VITE_API_URL: z.string().default('/'),
  VITE_ENABLE_API_DELAY: z
    .string()
    .transform((value) => value === 'true')
    .default('false'),
})

export const env = envSchema.parse(import.meta.env)
