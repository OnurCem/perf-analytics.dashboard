#!/bin/sh

cp /nginx/nginx.conf /etc/nginx/conf.d/default.conf

PORT="${PORT:-80}"
sed -i -e "s/@@PORT@@/${PORT}/g" /etc/nginx/conf.d/default.conf

nginx -g "daemon off;"
