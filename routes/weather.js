const { Router } = require('express');
const {
    test,
} = require('../controllers/weather');
const router = Router();

router.get('/test', test);

module.exports = router;