var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

app.set('trust proxy', 1);

app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));

app.listen(8000);

app.get('/', function(req, res){
    if(req.session.user_id){
        res.send("postoi sesija");
    }
    else{
         res.send("nema sesija");
    }
});


app.get('/login', function(req, res){
	 req.session.user_id = "1234";
	 res.redirect('/');
	 
});


app.get('/logout', function(req, res){
	 delete req.session.user_id;
	res.redirect('/');
	 
});
