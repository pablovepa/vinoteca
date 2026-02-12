const Vino = require('../models/Vino');

exports.createVino = async (req, res) => {
  try {
    const { nombre, bodega, precio, stock } = req.body;

    const vino = new Vino({ nombre, bodega, precio, stock });
    await vino.save();

    res.json({ message: "Vino creado exitosamente", vino });
  } catch (err) {
    res.status(500).json({ message: "Error al crear vino", error: err });
  }
};

exports.updateVino = async (req, res) => {
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

exports.getVinos = async (req, res) => {
  const vinos = await Vino.find();
  res.json(vinos);
};
