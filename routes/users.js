const express = require('express');

const router = express.Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
} = require('../controllers/users');

// GET /users — todos los usuarios
router.get('/', getUsers);

// GET /users/:userId — un usuario por ID
router.get('/:userId', getUserById);

// POST /users — crear nuevo usuario
router.post('/', createUser);

router.patch('/me', updateUser);

module.exports = router;
