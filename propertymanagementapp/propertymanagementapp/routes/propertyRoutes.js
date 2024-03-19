var express = require('express');
var axios = require('axios');
var auth = require('../config/auth');
var router = express.Router();

/*
 * GET /
 */
router.get('/', (req, res) => {

    res.render(
        `./bootstrapdemos.wrappixel.com/spike/dist/main/property`, {
        title: 'property',
    });
    
});

/*
 * GET /
 */
router.get('/details', (req, res) => {

    res.render(
        `./bootstrapdemos.wrappixel.com/spike/dist/main/property-details`, {
        title: 'property details',
    });
    
});

// Exports
module.exports = router;