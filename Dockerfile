# #building stage

# FROM node:20-alpine AS build
# WORKDIR /app



# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # production stage
# FROM node:20-alpine AS production
# WORKDIR /app

# COPY package*.json ./
# RUN npm install --production
# COPY --from=build /app/dist ./dist
# COPY .env .env


# EXPOSE 3000
# CMD ["node", "dist/index.js"]

# --- Build Stage ---
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Production Stage ---
FROM node:20-alpine AS production
WORKDIR /app

# Copy only built files + node_modules from build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
COPY --from=build /app/.env .env

EXPOSE 3000
CMD ["node", "dist/server.js"]



