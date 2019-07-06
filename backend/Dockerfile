# LTS Node container
FROM node:10

# Create foldes for node_modules and the app
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Create working directory
WORKDIR /home/node/app

# Copy over dependencies to cache
COPY package*.json ./

# Run install as Node user
USER node

# install dependencies
RUN npm install

# Copy the application code
COPY --chown=node:node . .

# Expose express port
EXPOSE 3001

# Run the app
CMD [ "npm", "start" ]