# Laboratorio 4 - Docker

Este proyecto corresponde al Laboratorio 4 de Contenedores y Despliegue con Docker.

Creamos una aplicación web sencilla en Node.js usando Express, la cual se ejecuta dentro de un contenedor Docker y expone endpoints HTTP básicos.

## Endpoints

- `/`  
  Muestra un mensaje de prueba desde la aplicación.

- `/suma/:a/:b`  
  Realiza una suma entre dos valores enviados por la URL.

Ejemplo:

```bash
http://localhost:3000/suma/5/3
