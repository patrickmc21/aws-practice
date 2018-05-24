const routes = require('express').Router();

// GET all users
routes.get('/', async (req, res) => {
  try {
    const { Items } = await getAllUsersFromDB();
    const allUsers = Items;
    res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ error });
  }
});