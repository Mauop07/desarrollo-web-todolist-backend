import express from 'express';
const router = express.Router();

let goals = [
    { id: 1, name: "Meta 1", description: "Descripcion Meta 1", dueDate: "2026-05-15" }
];

router.get('/getGoals', (req, res) => {
    res.status(200).json(goals);
});

router.post('/addGoal', (req, res) => {
    const { name, description, dueDate } = req.body;

    if (!name || !description || !dueDate) {
        return res.status(400).json({ message: "Error: Faltan parámetros (name, description o dueDate)" });
    }

    const newGoal = { id: Date.now(), name, description, dueDate };
    goals.push(newGoal);
    res.status(200).json(newGoal);
});

router.delete('/removeGoal', (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ message: "Error: Se requiere el ID para eliminar la meta" });
    }

    goals = goals.filter(g => g.id !== id);
    res.status(200).json({ message: "Elemento eliminado correctamente" });
});

export default router;