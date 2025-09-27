FROM node:20-alpine

# Install dependencies
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json nx.json tsconfig.json ./

# Install nx globally and dependencies
RUN npm install -g nx
RUN npm install --force

# Copy the api-gateway source code'
COPY . ./api-gateway

# Build the api-gateway
RUN npx nx build api-gateway --prod

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "dist/api-gateway/main.js"]
