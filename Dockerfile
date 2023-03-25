FROM node:17.4.0 AS backend-lesson

WORKDIR /home/node/app

# COPY ./package.json ./

# RUN npm install && chown -R node:node node_modules

# COPY ./bin ./

EXPOSE 3000

CMD ./bin/entrypoint
