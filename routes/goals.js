import express from 'express';
const router = express.Router();

let goals = [
    { id: 1, name: "Meta 1", description: "Descripcion Meta 1", dueDate: "2026-05-15" }
];

router.get('/getGoals', (req, res) => {
    res.json(goals);
});

router.post('/addGoal', (req, res) => {
    const newGoal = { 
        id: Date.now(), 
        ...req.body 
    };
    goals.push(newGoal);
    res.status(201).json(newGoal);
});

router.delete('/removeGoal', (req, res) => {
    const { id } = req.body;
    goals = goals.filter(g => g.id !== id);
    res.json({ message: "Elemento eliminado correctamente" });
});

export default router;