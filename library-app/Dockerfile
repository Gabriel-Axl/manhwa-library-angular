# Usa uma imagem base do Node para criar o build do Angular
FROM node:18 as build
WORKDIR /app
COPY . . 
RUN npm install
RUN npm run build --prod

# Usa a imagem do Nginx para servir os arquivos do Angular
FROM nginx:1.25-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/library-app /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]