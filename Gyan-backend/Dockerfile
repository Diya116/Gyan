# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend project to the working directory
COPY . .

# Expose the port on which the Node.js app will run
EXPOSE 3000

# Start the Node.js app
CMD ["npm", "start"]
