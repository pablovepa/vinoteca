// backend/server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import vinoRoutes from './routes/vinoRoutes.js'; // Importamos las rutas

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a DB
connectDB(process.env.MONGO_URI);

// Usar las rutas
app.use('/api/vinos', vinoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));