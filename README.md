# To-Do List: API REST (Backend)

Proyecto backend desarrollado con Node.js y Express. Maneja la persistencia de datos de las tareas y metas a través de MongoDB Atlas.

## Tecnologías Utilizadas
* Node.js & Express
* MongoDB & Mongoose
* Cors & Dotenv
* Docker

## Seguridad
Authorization: Mau-777-Key

## Endpoints Principales
**Tareas:**
* GET /getTasks - Obtiene todas las tareas.
* POST /addTask - Crea una nueva tarea (requiere title).
* DELETE /removeTask - Elimina una tarea (requiere id en el body).

**Metas:**
* GET /getGoals - Obtiene todas las metas.
* POST /addGoal - Crea una nueva meta (requiere title y deadline).
* DELETE /removeGoal - Elimina una meta (requiere id en el body).

## Instrucciones de Ejecución (Local)
1. Ejecutar npm install para descargar las dependencias.
2. Crear un archivo .env en la raíz con la variable MONGO_URI apuntando a tu cluster de Atlas.
3. Iniciar el servidor:
   npm start
El servidor correrá en http://localhost:3000

## Instrucciones de Ejecución (Docker)
1. Construir la imagen:
   docker build -t backend-todo .
2. Levantar el contenedor:
   docker run -p 3000:3000 backend-todo
