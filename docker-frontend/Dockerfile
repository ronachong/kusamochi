# Use official node image as parent image
FROM node:argon

# Set working dir to /app
WORKDIR /app

# Copy cwd contents into container at /app
ADD . /app

# Make port 80 available to world outside container
EXPOSE 80

# Run app.py when container is launched
CMD ["npm", "start"]