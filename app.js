var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

var PATH_TO_TEMPLATES = './templates/' ;
nunjucks.configure(PATH_TO_TEMPLATES, {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    return res.render('index.html');
});

app.listen(process.env.PORT || 5000);
