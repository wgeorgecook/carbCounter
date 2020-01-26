# LTS Node container
FROM node:10

# Create working directory
WORKDIR /usr/src/app

# Copy over dependencies to cache
COPY package*.json ./

# install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose express port
EXPOSE 3001

# Run the app
CMD [ "npm", "start" ]
