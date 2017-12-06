let express = require('express');
let app = express();

let usersRoutes = require('./routes/users');

let Sequelize = require('sequelize');
let dbConnect = require('./db/connection');

// View engine
app.engine('ejs', require('ejs-locals'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// Routes
app.get('/admin/users/index', usersRoutes.index);
app.get('/admin/users/new', usersRoutes.new);


// Server start
app.listen('3000', () => console.log('Server start!'));
