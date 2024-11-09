# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install dependencies
RUN npm install

# Make port 3002 available to the world outside this container
EXPOSE 3002

# Run the app
CMD ["node", "index.js"]
