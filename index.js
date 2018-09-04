var express = require('express');
var app = express();
var session = require('express-session');
var cookieParser = require('cookie-parser');
var port = 8000;

var passport = require('passport');

var url = "mongodb://admin:admin1@ds243812.mlab.com:43812/cas8mern"
var mongoose = require('mongoose');

app.use(session({
	secret: 'mern'
}));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'ejs');


require('./app/routes.js')(app);
require('./config/passport.js')(passport);

app.listen(port, passport);

mongoose.connect(url);