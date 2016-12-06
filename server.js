var express = require('express');
var path = require('path');
var BodyParser = require('body-parser')
var app = express();
app.use(express.static(path.join(__dirname,'./static')));
app.use(BodyParser.urlencoded({extended:true}));
app.set('views',path.join(__dirname,'./views'));
app.set('view engine','ejs');

app.get('/',function(request,response){
	response.render('index')
})

var info;
var dojos = {
	'sea':'Seattle',
	'svl':'Silicon Valley',
	'lax':'Los Angeles',
	'dal':'Dallas',
	'wdc':'Washington D.C.',
	'chi':'Chicago'
}


app.post('/process',function(request,response){
	info = request.body;
	// console.log('INFO:',info)
	response.redirect('/result')
})

app.get('/result',function(request,response){
	info.location = dojos[info.location];
	response.render('result', info)
})

// app.get('/style',function(request,response){
// 	response.render('style')
// })

var port = 5000;
app.listen(port,function(){
	console.log('Running at LOCALHOST Port',port);
})