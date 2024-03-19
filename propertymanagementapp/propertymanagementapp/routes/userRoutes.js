var express = require('express');
var axios = require('axios');
var auth = require('../config/auth');
var router = express.Router();

/*
 * GET /
 */
router.get('/profile', (req, res) => {

    res.render(
        `./bootstrapdemos.wrappixel.com/spike/dist/main/user-profile`, {
        title: 'my-profile',
    });
    
});

// Exports
module.exports = router;