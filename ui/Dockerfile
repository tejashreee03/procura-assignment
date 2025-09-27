# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json nx.json tsconfig.json  node_modules ./
COPY ui ./ui


RUN npx nx build ui --prod

# Stage 2: Serve
FROM node:20-alpine

WORKDIR /app


COPY --from=builder /app/dist/ui ./dist

EXPOSE 4200

CMD ["serve", "-s", "dist", "-l", "4200"]
