var express = require('express');
var axios = require('axios');
var auth = require('../config/auth');
var router = express.Router();

/*
 * GET /
 */
router.get('/profile', (req, res) => {

    res.render(
        `/main/user-profile`, {
        title: 'my-profile',
    });
    
});

// Exports
module.exports = router;