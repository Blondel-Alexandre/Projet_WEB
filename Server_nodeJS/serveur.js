//Import
var express = require('express');
var bodyParser = require('body-parser');
var apiRouter = require('./apiRouter').router;
var models = require('./models');

//Instantite server
var server = express();

//Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());

//configure routes
server.get('/',function (req, res) {
    res.setHeader('Content-Type','text/html');
    res.status(200).send('<h1>Bonjour sur mon </h1>');
});

//initialisation bdd
models.sequelize.sync();


server.use('/api/', apiRouter);


//Lauch server
server.listen(8080, function () {
    console.log('J\'écoute');
});