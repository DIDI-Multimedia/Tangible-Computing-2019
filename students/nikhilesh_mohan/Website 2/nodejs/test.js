// var name = "N"
// console.log(name)


let express = require('express')
let app = express()
let server = app.listen(3000)
app.use(express.static('public'))
console.log('express server running')

const request = require ('request')

let apiKey = '4efbc6b7681a84b8edb85f7a9b618d70'
let city = 'Portland'
let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+ apiKey


request(url, function(err,response,body)
{
  if (err)
  {
    console.log('error:' , error)
  }

  else
  {
    console.log('body:' , body)
  }
});