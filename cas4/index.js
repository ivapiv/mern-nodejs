console.log("ok");

const http = require("http");
const url = require("url");
const Recipe = require("./Recipe");
const Movie = require("./Movie");
const express = require("express");
const app = express();

var rec1 = new Recipe.create(1, "cake", "sugar milk chocolate eggs");
var rec2 = new Recipe.create(2, "burger", "chicken fries bread");
var rec3 = new Recipe.create(3, "pancakes", "sugar milk eggs");
var rec4 = new Recipe.create(4, "burek", "flower cheese eggs");

var recpies = [];
recpies.push(rec1);
recpies.push(rec2);
recpies.push(rec3);
recpies.push(rec4);

// http.createServer((req, res) => {

	// res.writeHead(200, "ok");
	// res.write("Hello");
	// res.end();

	// if(req.url == "/test"){
	// 	res.write("Hello from test page");
	// 	res.end();
	// }

	// var query = url.parse(req.url, true).query;

	// var fname = query.firstname;
	// var lname = query.lastname;

	// var result = "Zdravo " + fname + " " + lname;

	// res.write(result);
	// res.end();

// 	if(req.url = "/recipies"){
// 		var result = "";

// 		recpies.forEach( rec => {
// 			result += rec.recName + "\r";
// 		})

// 		res.write(result);
// 		res.end();
// 	}

// }).listen(3000);


var server = app.listen(8000, () =>{
	console.log("Server started");

});

app.get("/", (req, res) => {
	//res.send("Hello from my home")
	res.sendFile(__dirname + '/index.html');
})

app.get('/users', (req, res) =>{
	//res.send("Hello from users' page");

	var id = req.query.id;
	result = "User Id: " + id;
	res.send(result);
	//console.log(req);
})

app.get('/recpies', (req, res) =>{
	let result = "";

	recpies.forEach(rec => {
		result += rec.recName + "<br>";

	});

	res.send(result);
})

app.get('/recipe', (req, res) => {
	var ingridient = req.query.ingridient;
	let result = "";

	recpies.forEach(rec => {
		
		if(rec.ingridients.includes(ingridient)){
			result += rec.recName + "<br>";
		}

	});

	res.send(result);



})

app.get('/getRecipe', (req, res) => {
	let id = req.query.id;
	var result = "";



	recpies.forEach(rec => {
		
		if(rec.id == id){
			result = rec.recName + "<br>"+ rec.ingridients;

			
		}

	});

	res.send(result);

})



var movie1 = new Movie.create("Harry Potter", "Daniel Redclif", "Matej");
var movie2 = new Movie.create("Fast and Furious", "Iva", "Matej");
var movie3 = new Movie.create("Movie3", "Iva", "asdas");

var movies = [];
movies.push(movie1);
movies.push(movie2);
movies.push(movie3);



app.get('/movies', (req, res) => {
	let actor = req.query.actor;
	let result = "";

	movies.forEach(movie =>{
		if(movie.actors.includes(actor)){
			result += movie.name;
		}
	})

	res.send(result);





})