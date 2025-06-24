const Card = require('../models/cards');

const getCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    return res.status(200).json(cards);
  } catch (err) {
    return res.status(500).json({ message: 'Error al obtener las tarjetas' });
  }
};

const createCard = async (req, res) => {
  try {
    const { name, link } = req.body;
    const owner = req.user._id;
    const newCard = await Card.create({ name, link, owner });
    return res.status(201).json(newCard);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: 'Datos inválidos para crear la tarjeta' });
    }
    return res.status(500).json({ message: 'Error del servidor al crear la tarjeta' });
  }
};

const deleteCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const card = await Card.findByIdAndDelete(cardId).orFail(() => {
      const error = new Error('Tarjeta no encontrada');
      error.statusCode = 404;
      throw error;
    });
    return res.status(200).json({ message: 'Tarjeta eliminada correctamente', card });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ message: 'ID de tarjeta inválido' });
    }
    if (err.statusCode === 404) {
      return res.status(404).json({ message: 'Tarjeta no encontrada' });
    }
    return res.status(500).json({ message: 'Error del servidor al eliminar la tarjeta' });
  }
};

module.exports = { getCards, createCard, deleteCard };
