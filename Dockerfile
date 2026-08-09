# Этап 1: Сборка приложения
FROM node:20-alpine AS build
WORKDIR /opt/pet_hotel_frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Этап 2: Раздача статики через Nginx
FROM nginx:1.30.4-alpine-slim
COPY --from=build /opt/pet_hotel_frontend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
