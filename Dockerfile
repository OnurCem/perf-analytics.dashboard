# build environment
FROM node:12.18.0-alpine3.12 as build

WORKDIR /app

COPY . ./

RUN npm ci
RUN npm run build

# production environment
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/* /nginx/

CMD ["/nginx/start_nginx.sh"]
