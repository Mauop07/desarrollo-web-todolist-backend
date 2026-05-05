import express from 'express';
const router = express.Router();

let tasks = [
    { id: 1, name: "Tarea 1", description: "Descripcion Tarea 1", dueDate: "2026-05-10" }
];

router.get('/getTasks', (req, res) => {
    res.json(tasks);
});

router.post('/addTask', (req, res) => {
    const newTask = { 
        id: Date.now(), 
        ...req.body 
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

router.delete('/removeTask', (req, res) => {
    const { id } = req.body;
    tasks = tasks.filter(t => t.id !== id);
    res.json({ message: "Elemento eliminado correctamente" });
});

export default router;