var express = require('express');
var app = express();
var mongoose = require('mongoose');
var dbconfig = require('./config/database');
var bodyParser = require('body-parser');

//  config database
mongoose.Promise = global.Promise;
mongoose.connect(dbconfig.url);

//  config
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/api/category')(app);
require('./app/api/post')(app);

app.get('/', function(req, res) {
    res.render('admin/dashboard');
});
app.get('/profile', function(req, res) {
	res.render('admin/user');
});

app.listen(3000);

