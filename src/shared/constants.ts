import * as process from "node:process"
import z from "zod"

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
}).extend(process.env.NODE_ENV === "production"
  ? {}
  : {})

export const config = envSchema.parse(process.env)
