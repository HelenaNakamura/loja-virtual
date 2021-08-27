# Gerar arquivos do projeto /dist
FROM node:14 as builder
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm install -g @angular/cli@12 --unsafe
RUN ng build

# Copiar arquivos do projeto para o NGINX
FROM nginx:1.21.1-alpine
COPY --from=builder /usr/src/app/dist/loja-virtual /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
