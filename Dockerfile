# Use official Node LTS image as the base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies (only prod deps if building for production)
RUN npm ci --omit=dev

# Copy the rest of the source code
COPY . .

# Build the Astro project
RUN npm run build

# Expose the port Astro serves on (default 3000)
EXPOSE 3000

# Start the production server
CMD ["npm", "run", "preview"]
