const express = require('express');

const route = express.Router();

const services = require('../services/render');

/**
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes);

/**
 * @description add users
 * @method GET /add-user
 */
route.get('/add-user', services.addUser);

/**
 * @description for update user
 * @method GET /update-user
 */
route.get('/update-user', services.updateUser);

module.exports = route;