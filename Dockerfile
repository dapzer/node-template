FROM node:alpine AS base
RUN apk add --no-cache libc6-compat tzdata
ENV TZ=Etc/UTC

RUN apk update

FROM base AS installer
WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml* ./
COPY tsconfig.json tsconfig.json

RUN pnpm install

FROM base AS builder
WORKDIR /app
RUN npm install -g pnpm

COPY --from=installer /app/node_modules ./node_modules
COPY reviews-automation .

RUN pnpm build

FROM base AS runner
WORKDIR /app

RUN npm install -g pnpm

RUN addgroup --system --gid 1001 app
RUN adduser --system --uid 1001 app

USER app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/tsconfig.json ./tsconfig.json

ENV NODE_ENV production

CMD ["pnpm", "start:prod"]
