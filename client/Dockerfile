# --- Stage 1: Build the React Application ---
FROM node:18-alpine as builder

WORKDIR /app

# Copy dependencies first (caching)
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# --- Stage 2: Serve with Nginx ---
FROM nginx:alpine

# Copy the built files from the 'builder' stage to Nginx's serve folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 (Nginx default)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]