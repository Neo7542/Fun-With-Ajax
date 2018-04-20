const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser')
var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
//app.set()
//Middleware Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
//app.use('/users', users);

app.listen(3000,()=>{
  console.log('Server up on port 3000');
});
