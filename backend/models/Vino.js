import mongoose from 'mongoose';

const vinoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  bodega: { type: String, required: true },
  precio: Number,
  stock: { type: Number, default: 0 }
}, { timestamps: true }); // Esto crea createdAt y updatedAt automáticamente

const Vino = mongoose.model('Vino', vinoSchema);
export default Vino;