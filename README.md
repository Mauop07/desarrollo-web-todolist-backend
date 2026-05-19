# To-Do List Backend (Unidades III, IV y V)

Proyecto desarrollado con Node.js, Express y Mongoose para la gestión de tareas y metas personales. Implementa seguridad por API Key, manejo de estados HTTP y persistencia de datos en MongoDB Atlas.

## Instalación y Ejecución

1. Ejecutar `npm install` para instalar las dependencias.
2. Crear un archivo llamado `.env` en la raíz del proyecto y configurar la cadena de conexión a MongoDB:
   `MONGO_URI=tu_cadena_de_conexion_a_atlas`
3. Iniciar el servidor con `node app.js`.
4. El servidor correrá en: `http://localhost:3000`

## Seguridad y Autenticación

Todos los endpoints requieren el siguiente Header para autorizar la petición:
* **Header:** `Authorization`
* **Value:** `Mau-777-Key`

## Endpoints Disponibles

### Tareas (`/tasks`)
* **GET `/tasks`**: Obtiene el listado de todas las tareas.
* **POST `/tasks`**: Crea una nueva tarea.
  * *Cuerpo (JSON):* `title` (obligatorio), `description`, `completed` (boolean).
* **PUT `/tasks/:id`**: Actualiza una tarea existente por su ID.
* **DELETE `/tasks/:id`**: Elimina una tarea por su ID.

### Metas (`/goals`)
* **GET `/goals`**: Obtiene el listado de todas las metas.
* **POST `/goals`**: Crea una nueva meta.
  * *Cuerpo (JSON):* `title` (obligatorio), `description`, `deadline` (fecha), `status` ('pending', 'in-progress', 'completed').
* **PUT `/goals/:id`**: Actualiza una meta existente por su ID.
* **DELETE `/goals/:id`**: Elimina una meta por su ID.
