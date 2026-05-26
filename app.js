import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import taskRoutes from './routes/tasks.js';
import goalRoutes from './routes/goals.js';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { family: 4 })
    .then(() => console.log('Conectado exitosamente a MongoDB Atlas'))
    .catch((error) => console.error('Error conectando a MongoDB:', error));

app.use((req, res, next) => {
    const apiKey = req.headers['authorization'];
    if (apiKey === 'Mau-777-Key') {
        next(); 
    } else {
        res.status(401).json({ message: "No autorizado: API Key inválida o ausente" });
    }
});

app.use('/', taskRoutes);
app.use('/', goalRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});