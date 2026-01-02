# 1. Base Image: Use a lightweight Node.js version (Alpine Linux)
FROM node:18-alpine

# 2. Working Directory: Set the folder inside the container
WORKDIR /app

# 3. Dependencies: Copy package files FIRST to leverage Docker cache
COPY package*.json ./

# 4. Install: Run npm install inside the container
RUN npm install

# 5. Code: Copy the rest of your application code
COPY . .

# 6. Expose: Document that the container listens on port 5000
EXPOSE 5000

# 7. Command: The command to start the app when the container runs
CMD ["node", "server.js"]