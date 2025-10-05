const Plant = require('../models/plant');

exports.showPlant = (req, res) => {
  let index = parseInt(req.query.index) || 0;
  const plant = Plant.getByIndex(index);

  // Depuración: verifica que plant.image se lea correctamente
  console.log('🌱 Imagen cargada:', plant.image);

  res.render('index', { plant, index, total: Plant.getAll().length });
};