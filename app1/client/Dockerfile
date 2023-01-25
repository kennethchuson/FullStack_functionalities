FROM node:14

# Create app directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy application files
COPY . .

# Build the app
RUN yarn build

EXPOSE 5173

CMD [ "yarn", "run", "dev" ]
