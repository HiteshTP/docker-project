FROM node:latest AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .


FROM node:18-slim
WORKDIR /app
COPY --from=build /app /app
EXPOSE 3000
CMD ["npm", "start"]
