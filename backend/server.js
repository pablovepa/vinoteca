// backend/server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Importas tu función (no olvides el .js)

dotenv.config();

const app = express();

// Conectamos pasando la URI desde el .env
// En tu .env debe decir: MONGO_URI=mongodb://localhost:27017/tu_db
connectDB(process.env.MONGO_URI);

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`));
