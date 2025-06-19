const User = require('../models/users');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
};

async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.userId)
      .orFail(() => {
        const error = new Error('Usuario no encontrado');
        error.statusCode = 404;
        throw error;
      });
    res.status(200).json(user);
  } catch (error) {
    if (error.statusCode === 404) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'ID de usuario inválido' });
    }
    res.status(500).json({ message: 'Error del servidor' });
  }
}

const createUser = async (req, res) => {
  try {
    const { name, about, avatar } = req.body;
    const newUser = await User.create({ name, about, avatar });
    res.status(201).json(newUser);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Datos inválidos para crear el usuario' });
    }
    res.status(500).json({ message: 'Error del servidor' });
  }
};

const updateUser = async (req, res) => {
  try{
    const { name, about } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { name, about },
      { new: true, runValidators: true }
    ).orFail(() => {
      const error = new Error('Usuario no encontrado');
      error.statusCode = 404;
      throw error;
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    if (error.name === 'validationError') {
      return res.status(400).json({ message: 'Datos invalidados para actualizar' });
    }
    if (error.statusCode === 404) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(500).json({ message: 'Error del servidor' });
  }
};

module.exports = { getUsers, getUserById, createUser, updateUser };
