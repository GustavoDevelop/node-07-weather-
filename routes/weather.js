const { Router } = require('express');
const {
    test,
     
    } = require('../controllers/weather');
const routes = Router();

routes.get('/test', test);

module.exports = routes;