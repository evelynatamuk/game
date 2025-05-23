FROM node:20-alpine AS build

WORKDIR /app

RUN npm install pnpm
COPY package*.json ./
RUN pnpm install
COPY . .
RUN pnpm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]
