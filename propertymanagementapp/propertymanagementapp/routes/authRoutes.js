var express = require('express');
var router = express.Router();
var passport = require('passport');
var bcrypt = require('bcryptjs');

/*
 * GET register
 */
router.get('/register', function (req, res) {

    res.render(
        `./bootstrapdemos.wrappixel.com/spike/dist/main/authentication-register`, {
        title: 'Register'
    });

});

/*
 * GET login
 */
router.get('/login', function (req, res) {    
    
    res.render(
        `./bootstrapdemos.wrappixel.com/spike/dist/main/authentication-login`, {
        title: 'Log in'
    });

});

// Exports
module.exports = router;