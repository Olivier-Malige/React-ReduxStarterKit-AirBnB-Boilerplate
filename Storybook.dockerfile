# This Dockerfile has been think to be optimized on its size and on its reconstruction, using as possible the docker cache
# The website https://www.fromlatest.io/#/ didn't find any more optimization

# Download a light image of node.js
FROM mhart/alpine-node

# If you have any question on this Dockerfile
LABEL maintainer="Godefroi Roussel, roussel.godefroi@urbasolar.com"

# Firstly, copy the package.json 
COPY package.json /app/ 

# Set the working directory (inside the docker container) to be in the folder /app. Every next RUN command will be located in this directory
WORKDIR /app/

# Run the command yarn install inside /app
RUN yarn install 

# Once all installations done, copy the application
COPY . /app

# Run the command yarn install inside /app
RUN yarn run build-storybook

# When launching a container of this image, the command node storybookServer.js will be used.
CMD ["node", "storybookServer.js"]

# Expose the port 3004
EXPOSE 3004
