var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var cookieParser = require('cookie-parser');

var logger = require('morgan');          // log module

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../FE/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../FE'))); //정적 파일 제공 절대경로 사용


/*---------Routing---------*/
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.html');
});

// mongodb
const config = require('./model/config')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.set('jwt-secret', config.secret)

// mongoserver
mongoose.connect(config.mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology : true
})
/*
  * DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
     => useNewUrlParser : true

  * DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
     => useUnifiedTopology : true
*/
const db = mongoose.connection
db.on('error', console.error)
db.once('open', ()=>{
  console.log('connected to mongodb server')
})

module.exports = app;
