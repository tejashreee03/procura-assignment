FROM node:20-alpine

# Install dependencies
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json nx.json tsconfig.json ./

# Install nx globally and dependencies
RUN npm install -g nx
RUN npm install

# Copy the api-gateway source code'
COPY . ./products

# Build the api-gateway
RUN npx nx build products --prod

# Expose port
EXPOSE 3001

# Start the application
CMD ["node", "dist/products/main.js"]
