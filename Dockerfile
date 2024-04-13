# Use the official Node.js image as a base
FROM node:latest as build

# Set the working directory in the container
WORKDIR /final_assignment

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install
COPY package-lock.json ./

# Copy the entire project directory to the working directory
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Use a smaller image for production
FROM nginx:alpine

# Copy the built files from the previous stage to the NGINX directory
COPY --from=build /final_assignment/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
