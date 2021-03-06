/* Server.js */

// set up ======================

var express 	= require('express'),				//express
	app  		= express(),						//define express
	morgan		= require('morgan');				//log req for console (express4)
// configuration ===============


app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
// app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
// app.use('/angular', express.static(__dirname + '/node_modules/angular/'));
// define model ================

// routes ======================

// application =================

app.get('*', function(req, res){
	res.sendFile('/public/index.html', function (err) {
	    if (err) {
	      console.log(err);
	      res.status(err.status).end();
	    }
	    else {
	      console.log('Sent:', fileName);
	    }
  	});
});

//Error Handleq
app.use(function(err, req, res, next){
	console.log(err.stack);
	res.status(500).send("Upps, we broke it :(");
});

//Listening
app.listen(3000, function(){
	console.log('Server app listening on port 3000!');
});