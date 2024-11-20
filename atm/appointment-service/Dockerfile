# Stage 1: Build the Node.js application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Stage 2: Run the application
FROM node:18-slim AS runtime

# Set the working directory
WORKDIR /app

# Copy the dependencies from the build stage
COPY --from=build /app /app

# Expose port 4000 for the patient service
EXPOSE 4001

# Run the application
CMD ["node", "src/server.js"]
