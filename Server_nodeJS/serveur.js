//Import
var express = require('express');

//Instantite server
var server = express();


//configure routes
server.get('/',function (req, res) {
    res.setHeader('Content-Type','text/html');
    res.status(200).send('<h1>Bonjour sur mon serveur</h1>');
});

//Lauch server
server.listen(8000, function () {
    console.log('Server en écoute');
});