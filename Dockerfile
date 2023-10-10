# Use the official NGINX image as the base
FROM nginx:latest

# Install the NGINX JavaScript module and required dependencies
RUN apt-get update && \
    apt-get install -y nginx-module-njs && \
    rm -rf /var/lib/apt/lists/*

# Enable the JavaScript module: You can do this by adding the following line to your nginx.conf:
# load_module modules/ngx_http_js_module.so;

COPY default.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginxValidation.js /etc/nginx/nginxValidation.js