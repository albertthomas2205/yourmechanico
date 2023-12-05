# Use a Node.js image with the same version as your local environment
FROM node:18.18.0

# Set the working directory
WORKDIR /react

# Copy only the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite project
RUN npm run build

# Expose the port used by your Vite development server
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev"]
