FROM node:6.11
MAINTAINER Marc Dassonneville <marcdassonneville@afrostream.tv>

# creating our directory
RUN mkdir -p /opt/docs
WORKDIR /opt/docs

# installing dependencies
COPY package.json /opt/docs/package.json
COPY yarn.lock /opt/docs/yarn.lock
RUN yarn

# we add our code
COPY code code
COPY public public

# excluding private-config from container

#
EXPOSE 13333

# best practice: call node directly.
CMD ["node", "code/server.js"]
