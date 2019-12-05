var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

// Set up template engine
app.set('view engine', 'ejs');

// Static files
app.use('/', express.static('./public'));


// Fire Controllers
todoController(app);


// Listen to port
app.listen(4200);
console.log('You are listening to port 4200');