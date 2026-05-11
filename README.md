# To-Do List Backend (Unidades III y IV)

Proyecto desarrollado con Node.js y Express para la gestión de tareas y metas personales. Implementa seguridad por API Key y manejo de estados HTTP.

## Instalación y Ejecución

1. Ejecutar `npm install` para instalar dependencias.
2. Iniciar el servidor con `node app.js`.
3. El servidor correrá en: `http://localhost:3000`

## Seguridad y Autenticación

Todos los endpoints requieren el siguiente Header para autorizar la petición:
- **Header:** `Authorization`
- **Value:** `Mau-777-Key`

## Endpoints Disponibles

### Tareas
- **GET** `/tasks/getTasks`: Obtiene el listado de tareas.
- **POST** `/tasks/addTask`: Agrega una tarea (Cuerpo: name, description, dueDate).
- **DELETE** `/tasks/removeTask`: Elimina una tarea (Cuerpo: id).

### Metas
- **GET** `/goals/getGoals`: Obtiene el listado de metas.
- **POST** `/goals/addGoal`: Agrega una meta (Cuerpo: name, description, dueDate).
- **DELETE** `/goals/removeGoal`: Elimina una meta (Cuerpo: id).
