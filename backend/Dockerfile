FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
# команда  npm ci ставит зависимости из package-lock.js (clear install)
RUN npm ci
# копируем исходный код
COPY . .
RUN npm run build

FROM node:16-alpine as production
WORKDIR /app
COPY --from=builder /app/package*.json ./
RUN npm i --omit=dev && npm install -g pm2
COPY --from=builder /app/dist ./dist/
COPY --from=builder /app/.env ./.env
COPY --from=builder /app/ecosystem.config.js ./ecosystem.config.js
EXPOSE 3000
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
