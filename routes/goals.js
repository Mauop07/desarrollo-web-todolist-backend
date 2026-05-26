import express from 'express';
import Goal from '../models/Goal.js';

const router = express.Router();

// POST
router.post('/addGoal', async (req, res) => {
    try {
        const newGoal = new Goal(req.body);
        const savedGoal = await newGoal.save();
        res.status(200).json(savedGoal); // Ajustado a 200
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET
router.get('/getGoals', async (req, res) => {
    try {
        const goals = await Goal.find();
        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE
router.delete('/removeGoal', async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ message: "Se requiere el ID para eliminar" });
        }

        await Goal.findByIdAndDelete(id);
        res.status(200).json({ message: 'Meta eliminada correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;