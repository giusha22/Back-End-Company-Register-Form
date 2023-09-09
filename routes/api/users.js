const express = require('express');
const routes = express.Router();
const userController = require('../../controllers/userController')

routes.route('/')
    .get(userController.getAllUsers);

module.exports = routes;