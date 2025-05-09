const router = require('express').Router();

const path = require('path');

const fs = require('fs');

router.get('/', (req, res) => {
  const usersPath = path.join(__dirname, '..', 'data', 'users.json');
  fs.readFile(usersPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      return res
        .status(500)
        .send({ message: 'An error has occurred on the server' });
    }
    return res.send(JSON.parse(data));
  });
});
router.get('/:id', (req, res) => {
  const usersPath = path.join(__dirname, '..', 'data', 'users.json');
  fs.readFile(usersPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      return res
        .status(500)
        .send({ message: 'Ha ocurrido un error en el servidor' });
    }
    const users = JSON.parse(data);
    const user = users.find((u) => u._id === req.params.id);
    if (!user) {
      return res.status(404).send({ message: ' ID de usuario no encontrado' });
    }
    return res.send(user);
  });
});
module.exports = router;
