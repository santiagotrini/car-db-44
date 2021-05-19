const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const db   = process.env.DB   || 'mongodb://localhost/autos';

const app = express();

// conexion a la base de datos
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
  .catch(err => console.error(`Connection error ${err}`));

app.get('/', (req, res) => {
  res.send('Hola bienvenidos a mi app, si queres ver los autos en venta anda a /cars o /cars/id');
});

const Car = require('./models/Car');

app.get('/cars', (req, res) => {
  Car.find().exec((err, cars) => {
    res.json(cars);
  });
});

app.get('/cars/:id', (req, res) => {
  Car.find({ id: req.params.id }).exec((err, car) => {
    res.json(car);
  });
});

app.listen(port, () => {
  console.log(`Server escuchando en puerto ${port}`);
});
