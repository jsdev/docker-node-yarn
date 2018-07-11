# base image
FROM node:latest

# set working directory
RUN cd /usr/src && yarn create react-app app && cd /usr/src/app && yarn add @material-ui/core @material-ui/icons prop-types typeface-roboto
WORKDIR /usr/src/app

# start app
CMD ["npm", "start"]
