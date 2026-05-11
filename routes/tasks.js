import express from 'express';
const router = express.Router();

let tasks = [
    { id: 1, name: "Tarea 1", description: "Descripcion Tarea 1", dueDate: "2026-05-10" }
];

router.get('/getTasks', (req, res) => {
    res.status(200).json(tasks);
});

router.post('/addTask', (req, res) => {
    const { name, description, dueDate } = req.body;

    if (!name || !description || !dueDate) {
        return res.status(400).json({ message: "Error: Faltan parámetros (name, description o dueDate)" });
    }

    const newTask = { id: Date.now(), name, description, dueDate };
    tasks.push(newTask);
    res.status(200).json(newTask); 
});

router.delete('/removeTask', (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ message: "Error: Se requiere el ID para eliminar la tarea" });
    }

    tasks = tasks.filter(t => t.id !== id);
    res.status(200).json({ message: "Elemento eliminado correctamente" });
});

export default router;