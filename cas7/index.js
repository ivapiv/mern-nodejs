const mongoClient = require('mongodb').MongoClient;
var product = require('./Product');

var url = "mongodb://admin:admin1@ds129906.mlab.com:29906/mern";
var db;

mongoClient.connect(url, (err, client) =>{

	if(err) console.log(err);

	else{

		db = client.db('mern');
		console.log('connected');

		var p = new product.create(1, "cake", "20", "200");

		db.collection('products').insertOne(p, err =>{
		if(err) console.log("error");

		else{
			console.log("1 document inserted");
		}
		 })


		db.collection('products').find({}).toArray( (err, result) =>{ 

			if(err) console.log(err);

			else{
				console.log(result);
			}

		})


	}

});



