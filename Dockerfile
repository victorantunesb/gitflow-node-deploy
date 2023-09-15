FROM node:latest

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install pm2 -g
ENV PM2_PUBLIC_KEY qirbswdeshvuoln
ENV PM2_SECRET_KEY sxcy9adkb2w248o

RUN npm install

RUN npm run build

CMD ["pm2-runtime", "dist/server.js"] 



