# 💫 BACKEND RETO TÉCNICO 🎉

## Estructura del proyecto
Esta basado en una estructura general del framework NestJs 
> **Lógica del proyecto se encuentra dentro de /src/modules/starwars**
> **Validaciones de rutas dentro de  /src/modules/starwars/starwars.dto.ts**
> **Interfaces dentro de /src/modules/starwars**
> **Migraciones dentro de /src/modules/database**
> **Los test realizados se encuentran en la carpeta dentro /test/app.e2e-spec.ts**


## Instalación

El proyecto requiere **Node v18**, una **conexión a MYSQL** de preferencia un AWS RDS 

1. Ingresamos a la carpeta del proyecto y corremos `npm install`.

1. Configuramos los environments (.env y .env.prod), los valores necesarios son
> **database configuración ejemplo**
DB_DIALECT=mysql
DB_HOST=http://localhost
DB_PORT=3306
DB_USERNAME=bduser
DB_PASSWORD=bdpassword
DB_NAME=test
STARWARS_API_URL=https://swapi.py4e.com/api
NODE_ENV=development // production para produccion
SLS_OFFLINE_PORT=3000

1. Luego corremos las migraciones `npx sequelize-cli db:migrate` para crear nuestras tablas y `npx sequelize-cli db:migrate:undo:all` para borrar todas las migraciones.

1. Luego ejecutamos `npm run build` para almacenar todo el compilado, empaquetar y luego llevarlo al Lambda de AWS

1. Luego ejecutamos `sls offline` para correr nuestro lambda, para acceder a las APIs

1. El Swagger se encuentra desplegado en la siguiente ruta `http://localhost:${SLS_OFFLINE_PORT}/dev/swagger`, solo funcionará en ambientes de desarrollo. Se encuentra deshabilitado para producción (env.prod) 

1. Luego ejecutamos `sls deploy --stage=prod` para correr nuestro lambda, para acceder a las APIs


## APIs Implementadas
Abajo mostramos los servicios creados

1. **_GET_** `http://localhost:${env.SLS_OFFLINE_PORT}/dev/planets/:id` - Esta API nos devolverá la información de un planeta con indices en español

1. **_GET_** `http://localhost:${env.SLS_OFFLINE_PORT}/dev/people/:id` - Esta API nos devolverá la información de un personaje con indices en español

1. **_POST_** `http://localhost:${env.SLS_OFFLINE_PORT}/dev/people` - Esta API nos guardará la información de un personaje con indices en español



1. **_POST_** `http://localhost:${SLS_OFFLINE_PORT}/dev/planet` - Esta API nos guardará la información de un personaje con indices en español

