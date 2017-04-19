var express = require('express');
var app = express();
var mongoose = require('mongoose');
var dbconfig = require('./config/database');
var bodyParser = require('body-parser');
var session = require('express-session');
//  config database
mongoose.Promise = global.Promise;
mongoose.connect(dbconfig.url);

//  config
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: "Shh, its a secret!"}));

require('./app/api/category')(app);
require('./app/api/post')(app);

app.get('/', function(req, res) {
	if(req.session.user_login){
    	res.render('admin/dashboard');
    } else{
    	res.render('admin/login');
    }
});

app.listen(3000);

