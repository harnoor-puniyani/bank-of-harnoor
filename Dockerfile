FROM node:25-bookworm-slim AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y ca-certificates && update-ca-certificates

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

RUN npm run build 

FROM node:25-slim AS worker

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=builder /app/.next /app/.next

CMD [ "npm","run","start" ]
