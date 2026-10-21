#FROM node:24-alpine

#WORKDIR /app

#COPY package*.json .
#RUN npm ci

#COPY . .
#ENV NODE_ENV=production
#RUN npm run build

#EXPOSE 3333

#CMD ["npm", "run", "start:prod"]

FROM node:24-alpine3.24 AS build
WORKDIR /app
COPY package*json .
RUN npm ci
COPY . .
RUN npm run build


FROM node:24-alpine3.24 AS production
WORKDIR /app
COPY package*json .
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
ENV NODE_ENV=production
EXPOSE 3333
CMD ["npm", "run", "start:prod"]

FROM node:24-alpine3.24 AS development
WORKDIR /app
COPY package*json .
RUN npm ci
ENV NODE_ENV=development
EXPOSE 3333
CMD ["npm", "start"]
