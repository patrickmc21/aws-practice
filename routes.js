const routes = require('express').Router();
const users = require('./routes/users');

routes.get('/', (req, res) => {
 res.send('Welcome to the C3D Accounts API');
});

routes.use('/users', users);

module.exports = routes;