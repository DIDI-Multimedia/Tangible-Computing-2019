var http=require(http);
http.createServer(function(req,res){
res.writeHead(200,{Content-Type: text/plain});
res.end(start\n);
}).listen(3000, 127.0.0.1);
Console.log(server running at localhost:3000);

let express = require('express')
let app = express ()
let server = app.listen(3000)
app.use(express.static('public'))
console.log('express server running')

const.request = require('request');

let apiKey = '4efbc6b7681a84b8edb85f7a9b618d70';
let city = 'portland';
let url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKkey}

request(url, function (err, response, body) {
	
	if(err){
		console.log('error:', error);
		}else{
		console.log('body:', body);
		}
});