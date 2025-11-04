import process from "node:process"
import * as util from "node:util"
import { config } from "@/shared/constants"
import { logger } from "@/shared/lib/logger"
import { getUtcNow } from "@/shared/utils/getUtcNow"

// * Disable limit for console log object
util.inspect.defaultOptions.depth = null
util.inspect.defaultOptions.maxArrayLength = null

async function bootstrap() {
  logger.info(`App successfully started at ${getUtcNow()}, environment ${config.NODE_ENV}`)
}

bootstrap()
  .catch(logger.error)
  .finally(() => process.exit(0))
