const express = require('express');
const app = express();

const message = require('./Message');

const myParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(myParser.urlencoded({extended: true}));

var m1 = new message.create(1, "Test Subject1", "Sender 1", "TextTextTextTextTextTextTextTextTextTextTextText");
var m2 = new message.create(2, "Test Subject2", "Sender 2", "TextTextTextTextTextTextTextTextTextTextTextText");
var m3 = new message.create(3, "Test Subject3", "Sender 3", "TextTextTextTextTextTextTextTextTextTextTextText");
var m4 = new message.create(4, "Test Subject4", "Sender 4", "TextTextTextTextTextTextTextTextTextTextTextText");
var m5 = new message.create(5, "Test Subject5", "Sender 5", "TextTextTextTextTextTextTextTextTextTextTextText");
var m6 = new message.create(6, "Test Subject6", "Sender 6", "TextTextTextTextTextTextTextTextTextTextTextText");

var niza = [];
niza.push(m1);
niza.push(m2);
niza.push(m3);
niza.push(m4);
niza.push(m5);
niza.push(m6);

app.listen(3000, function(){
	console.log("Server started");
});

// app.get("/", (req, res) =>{

// 	res.sendFile(__dirname + "/index.html");

// })

app.get("/test", (req, res) =>{
	var myName = req.query.name;
	var age = req.query.age;

	res.render('index', {
		firstName: myName,
		age: age
	});


});


app.get("/message", (req, res)=>{
	let id = req.query.id;

	niza.forEach(m =>{
		if(m.id == id){
			res.render('message', {message: m})
		}
	})

	res.render("error");


})

app.get("/myMessages", (req, res)=>{
	res.render('messages', {messages: niza});
})


app.get("/newMessage", (req, res) =>{

	res.render("newMessage");
})

app.post("/newMessage", (req, res) => {
	let sender = req.body.sender;
	let subject = req.body.subject;
	let text = req.body.text;

	let message = new Message.create(niza.length, subject, sender, text);
	niza.push();

	res.render('messages', {messages: niza});

})
