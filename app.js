const express = require('express');
const path = require('path');
const plantRoutes = require('./routes/plantRoutes');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', plantRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

exports.showPlant = (req, res) => {
  let index = parseInt(req.query.index) || 0;
  const plant = Plant.getByIndex(index);

  console.log('Imagen cargada:', plant.image);

  res.render('index', { plant, index, total: Plant.getAll().length });
};
