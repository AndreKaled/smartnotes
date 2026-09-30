FROM node:24-alpine

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .
ENV NODE_ENV=production
RUN npm run build

EXPOSE 3333

CMD ["npm", "run", "start:prod"]