require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const path = require('path');
const fs = require('fs-extra');
const axios = require('axios');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const fileUpload = require('express-fileupload');
const resizeImg = require('resize-img');
const expressValidator = require('express-validator');
const passport = require('passport');

app.use(cors());

// set view engine
app.use(express.static(`${__dirname}/views/${process.env.VIEWS_DIR}`));
app.set("view engine", "ejs");
app.use(express.json());


// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// set global errors
app.locals.errors = null;

// Express fileUpload middleware
app.use(fileUpload());

// Body Parser middleware
// 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

// Express Session middleware
// app.use(session({
//     secret: process.env.TOKEN_KEY,
//     resave: false,
//     saveUninitialized: true,
//     // cookie: { secure: true },
// }));

app.use(session({
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    resave: false,
    secret: process.env.TOKEN_KEY,
    saveUninitialized: true,
}))

// Express Validator middleware
app.use(expressValidator({
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.')
                , root = namespace.shift()
                , formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    },
    customValidators: {
        isImage: function (value, filename) {
            var extension = (path.extname(filename)).toLowerCase();
            switch (extension) {
                case '.jpg':
                    return '.jpg';
                case '.jpeg':
                    return '.jpeg';
                case '.png':
                    return '.png';
                case '':
                    return '.jpg';
                default:
                    return false;
            }
        }
    }
}));

// Express Messages middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function(req,res,next) {
  res.locals.user = req.user || null;
  next();
});

// Set routes 
var pagesRoutes = require('./routes/dashboardRoutes.js');
var authRoutes = require('./routes/authRoutes.js');
var communicationRoutes = require('./routes/communicationRoutes.js');
var propertyRoutes = require('./routes/propertyRoutes.js');
var userRoutes = require('./routes/userRoutes.js');
var maintenanceRoutes = require('./routes/maintenanceRoutes.js');

app.use('/', pagesRoutes);
app.use('/auth', authRoutes);
app.use('/undermainternance', maintenanceRoutes);
app.use('/communication', communicationRoutes);
app.use('/user', userRoutes);
app.use('/property', propertyRoutes);

const port = process.env.APP_PORT || 5000;

app.listen(port , function () {
  console.log("Server running on port: " + port);
});
