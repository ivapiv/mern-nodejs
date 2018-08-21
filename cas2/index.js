const mod = require('./myModule');
const mathModule = require('./math-module');
const validator = require('./validation-module');
// console.log("Hi");

// var broj = "5";



// console.log(isNaN(broj));

// function sayHello(){
// 	console.log("Hello from my function");
// }

//sayHello();


// function presmetajZbir(a, b){
// 	console.log(b);
// 	return a + b;


// }

// var a = 5;
// var b = 10;

// var zbir = presmetajZbir(a);

// console.log(zbir);


/*var hello = function(){
	console.log("Hello from anonimna funkcija");
}

hello();

( function(){
	return "ok";
}) ();
*/



// var niza = ['we', 4, '10', 'learn', 7, 'Node.js'];
// var result = '';

// for(var i = 0; i < niza.length; i++){

// 	if(isNaN(niza[i])){
// 		result += niza[i] + " ";
// 	}

// 	else{
// 		var zbir = presmetajZbirSledbenik(niza[i]);
// 		console.log(zbir);
// 	}
// }



// function presmetajZbirSledbenik(broj){
// 	var parsedNumber = parseInt(broj);

// 	var sledbenik = parsedNumber + 1;

// 	return parsedNumber + sledbenik;

// }

// console.log(result);


// var person = {

// 	firstname: "Iva",
// 	age: "24",
// 	email: "iva@yahoo.com",

// 	getFullName: function(){
// 		return this.firstname + " " + this.age;
// 	}
// }



// var person1 = {

// 	firstname: "Ana",
// 	age: "12",
// 	email: "iva@yahoo.com",

// 	getFullName: function(){
// 		return this.firstname + " " + this.age;
// 	}
// }


// var person2 = {

// 	firstname: "Ivana",
// 	age: "18",
// 	email: "iva@yahoo.com",

// 	getFullName: function(){
// 		return this.firstname + " " + this.age;
// 	}
// }

// var person3 = {

// 	firstname: "Marko",
// 	age: "10",
// 	email: "iva@yahoo.com",

// 	getFullName: function(){
// 		return this.firstname + " " + this.age;
// 	}
// }

// var niza = [];
// niza.push(person);
// niza.push(person1);
// niza.push(person2);
// niza.push(person3);

// for(var i = 0; i<niza.length; i++){

// 	if(niza[i].age >= 18){
// 		console.log(niza[i].getFullName());
// 	}
// }


// niza.forEach(p => {

// })


// var property = {
// 	type: "flat",
// 	m2: "52",
// 	price: "1000",

// 	getFullPrice: function(){
// 		return parseInt(this.m2) * parseInt(this.price);
// 	}
// }

// var property1 = {
// 	type: "house",
// 	m2: "100",
// 	price: "1000",

// 	getFullPrice: function(){
// 		return parseInt(this.m2) * parseInt(this.price);
// 	}
// }

// var property2 = {
// 	type: "flat",
// 	m2: "60",
// 	price: "1200",

// 	getFullPrice: function(){
// 		return parseInt(this.m2) * parseInt(this.price);
// 	}
// }

// var properties = [];
// properties.push(property)
// properties.push(property1)
// properties.push(property2);

//  properties.forEach(prop => {
//  	if(prop.getFullPrice() < 60000 && prop.type == "flat"){
//  		console.log(prop.getFullPrice());
//  	}

//  })


// mod.sayHi();

// console.log(mathModule.multiply(5, 2));


var email = "com@yahoo";
var pass = "55";

if(validator.checkEmail(email)){
	console.log("tocen email");
}
else{
	console.log("gresen email");
}


if(validator.checkPassword(pass)){
	console.log("tocen pass");
}
else{
	console.log("gresen pass");
}

