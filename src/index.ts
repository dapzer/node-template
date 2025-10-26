import process from "node:process"
import { config } from "@/shared/constants"
import { logger } from "@/shared/lib/logger"
import { getUtcNow } from "@/shared/utils/getUtcNow"

async function bootstrap() {
  logger.info(`App successfully started at ${getUtcNow()}, environment ${config.NODE_ENV}`)
}

bootstrap()
  .catch(logger.error)
  .finally(() => process.exit(0))
