var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');

var apiRoutes = require('./routes/apiRoutes');

var app = express();
app.set('view engine', 'html');

app.use(function (req, res, next) {
    if (req.url.match(/^\/(scripts|css|js|img|fonts|views)\/.+/)) {
        res.setHeader('Cache-Control', 'public, max-age=86400');
    }
    next();
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.use('/api/', apiRoutes);

app.use('/category/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/404', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(function(req, res) { //put this at end
    console.log('404 page');
    res.status(404);
    res.redirect('/404');
});

app.listen(80);
console.log('Up: http://localhost:80');
