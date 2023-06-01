FROM node:16
# Create app directory
WORKDIR /app/

EXPOSE 3333

COPY package.json package-lock.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev
RUN npm install -g nodemon

# Bundle app source
COPY ./ /app/src/
ENTRYPOINT [ "nodemon", "--legacy-watch", "--inspect=0.0.0.0", "./src/index.js"]

# CMD [ "npm", "run","dev" ]
