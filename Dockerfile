# Use an official Node.js runtime as a parent image
FROM node:18.14.0-alpine

# Set the working directory to /app
WORKDIR /pages

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to /app
COPY . .

# Build the NextJS application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the NextJS server
CMD ["npm", "start"]