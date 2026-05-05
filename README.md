# To-Do List Backend (Unidad III)

Proyecto desarrollado con Node.js y Express para la gestión de tareas y metas.

## Instalación y Ejecución
1. Ejecutar `npm install`
2. Iniciar el servidor con `npm start`
3. El servidor correrá en `http://localhost:3000`

## Seguridad
Todos los endpoints requieren enviar este Header:
`Authorization: Mau-777-Key`

## Endpoints
**Tareas:**
- GET `/tasks/getTasks`
- POST `/tasks/addTask`
- DELETE `/tasks/removeTask`

**Metas:**
- GET `/goals/getGoals`
- POST `/goals/addGoal`
- DELETE `/goals/removeGoal`
