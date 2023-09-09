const express = require('express');
const routes = express.Router();
const employeeController = require('../../controllers/employeeController')

routes.route('/')
    .get(employeeController.getAllEmployees)
    .post(employeeController.createNewEmployee);

module.exports = routes;