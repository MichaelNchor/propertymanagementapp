var express = require('express');
var axios = require('axios');
var auth = require('../config/auth');
var router = express.Router();

/*
 * GET /
 */
router.get('/', (req, res) => {

    res.render(
        `/main/communication`, {
        title: 'communication',
    });

});

// Exports
module.exports = router;