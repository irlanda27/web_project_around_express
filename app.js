const express = require('express');
const mongoose = require('mongoose');

const usersRouter = require('./routes/users');

const cardsRouter = require('./routes/cards');

const app = express();
const { PORT = 3000 } = process.env;
mongoose.connect('mongodb://localhost:27017/aroundb')
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  });

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '6851f4d633589dfcc1a46dbc',
  };
  next();
});


app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

// Middleware 404
app.use((req, res) => {
  res.status(404).send({ message: 'Recurso solicitado no encontrado' });
});

// Middleware de errores
app.use((err, req, res, next) => {
  res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
