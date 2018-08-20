console.log("Hi from Node.js");

var integer1 = 5;
var integer2 = null;
var sum = integer1 + integer2;

console.log(integer1 + "+" + integer2 + " = " + sum);


var username = "IVa dfgdfg dfhgdfg";
var pass = "000000";

var formattedUsername = username.toLowerCase();




// if(username != "IVA"){

// 	console.log("Gresen username");

// }

//  if(pass != "00000"){
// 	console.log("Gresen pass");
// }
//  else if(username == "IVA" && pass= "000000"){
// 	console.log("Uspesen login");
// }

// var i;

// for (i = 0; i < 5; i++){
// 	console.log(i);
// }

// var j = 0;

// while(j < 5){
// 	console.log(j);
// 	j++;
// }

// niza = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// for(var i = 0; i < niza.length; i++){
// 	var result = '';
// 	console.log(niza[i] );

// 	if(niza[i] % 3 == 0){
// 		//console.log("buzz");
// 		result += "buzz";
// 	}

// 	 if (niza[i] % 4 == 0){
// 		//console.log("fizz");
// 		result += "fizz";
// 	}

// 	console.log(result);

// }

// var usernames = ['iva', 'ana', 'marija'];
// var passwords = ['0000', '12121', '7888'];


// var myUser = 'ivaa';
// var myPass = '000000';

// var message = "Error";

// for(var i = 0; i < usernames.length; i++){

// 	if(myUser == usernames[i] && myPass == passwords[i]){
// 		message = "Uspesno logiran korisnik";
// 	}

// }


var niza = [1, 2, 3, 4, 5];
var parni = [];
var neparni = [];


for(var i=0; i<niza.length; i++){

	if(niza[i] % 2 == 0){
		parni.push(niza[i]);
	}

	else{
		neparni.push(niza[i]);
	}


}

console.log(parni);
console.log(neparni);