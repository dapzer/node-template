import * as process from "node:process"
import pino from "pino"

// Define the transport configuration only when the output stream is connected to a TTY
const transport
  = process.stdout.isTTY
    ? { transport: { target: "pino-pretty" } }
    : {}

export const logger = pino({
  ...transport,
})
