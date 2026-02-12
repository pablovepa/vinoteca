import Vino from '../models/Vino.js';

export const createVino = async (req, res) => {
  try {
    const nuevoVino = new Vino(req.body);
    const guardado = await nuevoVino.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al guardar el vino", error: error.message });
  }
};

/*exports.updateVino = async (req, res) => {
  try {
    const updated = await Vino.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({ message: "Vino actualizado", updated });
  } catch (err) {
    res.status(500).json({ message: "Error al actualizar vino", error: err });
  }
};
*/

export const getVinos = async (req, res) => {
  try {
    const vinos = await Vino.find();
    res.status(200).json(vinos);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener vinos", error: error.message });
  }
};
