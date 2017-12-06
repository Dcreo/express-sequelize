let express = require('express');
let routes = require ('./routes');
let app = express();
//let user = require('./routes/user');
//let db = require('./models');
let http = require('http');
let passport = require('passport');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let errorhandler = require('errorhandler');
//let passportConfig = require('./config/passport');
//let home = require('./routes/home');
//let application = require('./routes/application');


app.use('/public', express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('port', process.env.PORT || 3003);
app.use(bodyParser.urlencoded({ extended: false  }))
app.use(cookieParser());
app.use(session({secret: 'gsfsefqwfcsdgdfhyertfsaedfawd'}));
app.use(passport.initialize());
app.use(passport.session());

if ('development' === app.get('env')) {
  app.use(errorhandler());
}

app.get('/', routes.index);

app.listen('3000', () => console.log('server go'));
