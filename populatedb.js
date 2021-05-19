// necesitamos importar mongoose
const mongoose = require('mongoose');

// importar el modelo de usuario
const Car = require('./models/Car');

// la URI de la db
const db = 'mongodb://localhost/autos';

// array de usuarios para ingresar a la db
const cars = [
  {
    id: 1,
    marca: 'Chevrolet',
    modelo: 'Corsa',
    patente: 'AAB123',
    color: 'Rojo'
  },
  {
    id: 50,
    marca: 'Ford',
    modelo: 'Fiesta',
    patente: 'BAA321',
    color: 'Azul'
  },
  {
    id: 123,
    marca: 'Toyota',
    modelo: 'Hilux',
    patente: 'CAA421',
    color: 'Plateado'
  },
  {
    id: 4,
    marca: 'Ferrari',
    modelo: 'F40',
    patente: 'GAA123',
    color: 'Rojo'
  }
];

// conectarse a la db
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    // si nos conectamos con exito mostrar mensajes
    // e insertar los usuarios en el array
    console.log(`DB connected @ ${db}`);
    console.log('Populating DB...');
    Car.insertMany(cars, (err, cars) => {
      if (err) throw err;
      // un mensaje con la cantidad de documentos insertados
      console.log(`${cars.length} documents inserted!`);
      // cerramos la conexion cuando terminamos
      mongoose.connection.close();
    });
  })
.catch(err => console.error(`Connection error ${err}`));
