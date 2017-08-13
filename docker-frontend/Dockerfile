# Use official node image as parent image
FROM node:argon

# Set working dir to /app
WORKDIR /app

# Copy relevant cwd contents into container at /app
COPY node_modules /app/node_modules
COPY package.json /app/package.json
COPY express.js /app/express.js
COPY react-app/build /app/react-app/build

# Make port 80 available to world outside container
EXPOSE 80

# Run app.py when container is launched
CMD ["npm", "start"]