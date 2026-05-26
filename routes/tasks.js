import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();

router.post('/addTask', async (req, res) => {
    try {
        const newTask = new Task(req.body);
        const savedTask = await newTask.save();
        res.status(200).json(savedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/getTasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/removeTask', async (req, res) => {
    try {
        const { id } = req.body; 
        
        if (!id) {
             return res.status(400).json({ message: "Se requiere el ID para eliminar" });
        }

        await Task.findByIdAndDelete(id);
        res.status(200).json({ message: 'Tarea eliminada correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;