import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/tasks.js';
import goalRoutes from './routes/goals.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    const apiKey = req.headers['authorization'];
    if (apiKey === 'Mau-777-Key') {
        next(); 
    } else {
        res.status(401).json({ message: "No autorizado: API Key inválida o ausente" });
    }
});

app.use('/tasks', taskRoutes);
app.use('/goals', goalRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});