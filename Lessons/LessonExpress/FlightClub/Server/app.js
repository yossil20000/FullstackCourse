require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var cors = require("cors");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var log = require('debug-level').log('app');
const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerURL = process.env.SERVER_URL === undefined ?  "http://localhost:3001" : process.env.SERVER_URL + ":" + process.env.PORT;
const options = {
  apis: ['./routes/catalog.js'], // files containing annotations as above
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  dervers:[
{
  url: swaggerURL
}
  ]
  
};

const openapiSpecification = swaggerJsdoc(options);

var app = express();
app.use(`/${process.env.API_DOCS}`,swaggerUI.serve, swaggerUI.setup(openapiSpecification));
log.log(`api-docs on: ${swaggerURL}/${process.env.API_DOCS} `)
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB =  process.env.MONGODB_URL === undefined ? 'mongodb://127.0.0.1/AAA' :  process.env.MONGODB_URL;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open',() => {
  log.log("Mongoose Db connected")
});

// Routs

var membersRouter = require('./routes/member');
var deviceRouter = require('./routes/device');

const { loadavg } = require('os');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/members', membersRouter);
app.use('/devices', deviceRouter);

//app.use('/db',databaseRouter);
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
  res.render('error');
});

module.exports = app;

