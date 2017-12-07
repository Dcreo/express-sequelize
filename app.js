let express = require('express');
let app = express();
var bodyParser = require('body-parser')

let usersController = require('./controllers/usersController');

let Sequelize = require('sequelize');
let dbConnect = require('./db/connection');

// View engine
app.engine('ejs', require('ejs-locals'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false  }))

app.use(express.static('assets'));

// Routes
app.get('/admin/users/index', usersController.index);
app.get('/admin/users/new', usersController.new);
app.get('/admin/users/:id/edit', usersController.edit);
app.post('/admin/users/create', usersController.create);
app.delete('/admin/users/:id', usersController.destroy);

// Server start
app.listen('3000', () => console.log('Server start!'));
