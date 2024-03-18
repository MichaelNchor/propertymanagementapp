var express = require('express');
var axios = require('axios');
var auth = require('../config/auth');
var router = express.Router();

/*
 * GET /
 */
router.get('/', (req, res) => {

    res.render(
        `${process.env.VIEWS_DIR}/main/index`, {
        title: 'index',
    });
    
});

/*
 * GET /
 */
router.get('/', (req, res) => {

    res.render(
        `${process.env.VIEWS_DIR}/main/maintenance`, {
        title: 'under maintenance',
    });
    
});

// Exports
module.exports = router;