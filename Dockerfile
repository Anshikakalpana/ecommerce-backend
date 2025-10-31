#building stage

FROM node:20-alpine AS build
WORKDIR /app



COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM node:20-alpine AS production
WORKDIR /app

COPY package*.json ./
RUN npm install --production
COPY --from=build /app/dist ./dist
COPY .env .env


EXPOSE 3000
CMD ["node", "dist/index.js"]


