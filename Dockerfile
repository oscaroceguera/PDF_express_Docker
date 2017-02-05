# Escoger la imagen base
FROM node:7

ENV USER_NAME "OSCAR OCEGUERA"
ENV PHANTOMJS_BIN "/usr/local/bin/phantomjs"
RUN npm i -g phantomjs-prebuilt

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


# bundle app source
COPY app/  .
