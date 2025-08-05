# 1. Use Node.js image
FROM node:20-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# 4. Copy the rest of the project files
COPY . .

# 5. Build the app
RUN npm run build

# 6. Production image
FROM node:20-alpine AS runner

# 7. Set working directory
WORKDIR /app

# 8. Copy only necessary files
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# 9. Expose port 80
EXPOSE 80

# 10. Start the app on port 80
CMD ["npx", "next", "start", "-p", "80"]
