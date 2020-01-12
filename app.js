var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/budget', function(req, res){
    res.render('budget');
});

app.post('/budget', urlencodedParser, function(req, res){
    console.log(req.body);
    var bills = req.body;
    res.render('analysis', {bills: bills});
});

app.get('/budget', function(req, res){
    res.render('budget');
});

app.listen(3000);