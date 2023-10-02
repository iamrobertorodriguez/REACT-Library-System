#NextJs app dockerfile
FROM node:latest

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm run dev

# Bundle app source
COPY . .

# Expose port 3010
EXPOSE 3010

# Run the app
CMD [ "npm", "run", "dev" ]
