var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:admin1@ds243812.mlab.com:43812/cas8mern";

var db;

var express = require('express');
var app = express();

var book = require('./book');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.listen(8000);

MongoClient.connect(url, function(err, client){
	if(err) console.log(err);
	
	else{
		db = client.db('cas8mern');
		console.log("DB connected");
	}
	
	
});


app.get('/', (req, res) =>{

	res.send("ok");
})


app.get('/newBook', (req, res) =>{

	res.render('newBook');
})

app.post('/newBook', (req, res) =>{
	let name = req.body.title;
	let author = req.body.author;
	let year = req.body.year;
	let genre = req.body.genre;


	let b = new book.create(name, author, year, genre);

	console.log(b);

	db.collection("books").insertOne(b, (err) => {
		if(err) console.log("err");
		else{
			console.log("1 document inserted");
			res.redirect('allBooks');
		}
	})
	
})


app.get('/allBooks', (req, res) =>{
	db.collection('books').find({}).toArray((err, items) => {
		console.log(items);

		res.render('books', {books: items});
	})


})


app.get('/book', (req, res) =>{
	console.log('ok');
	console.log(req.query.id);
	// db.collection('books').find({author: "Danielle Steel"}).toArray((err, items) => {
	// 	console.log(items);

	// 	//res.render('books', {books: items});
	// })


})


