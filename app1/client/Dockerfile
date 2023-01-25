# Use Node.js v14 as the base image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the project files
COPY . .

# Build the project
RUN yarn build

# Start the development server
CMD ["yarn", "dev"]

# Expose the development server port
EXPOSE 5173
