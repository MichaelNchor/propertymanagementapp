var express = require('express');
var axios = require('axios');
var auth = require('../config/auth');
var router = express.Router();

/*
 * GET /
 */
router.get('/', (req, res) => {

    res.render(
        `/main/property`, {
        title: 'property',
    });
    
});

/*
 * GET /
 */
router.get('/details', (req, res) => {

    res.render(
        `/main/property-details`, {
        title: 'property details',
    });
    
});

// Exports
module.exports = router;