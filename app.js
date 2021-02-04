const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const routes = require('./src/route/index');
const { errorMiddleware } = require('./src/middleware/errorMiddleware');
const cors = require('cors');
const io = require('socket.io')();

require('dotenv').config();

const app = express();

//config socket.io server
app.locals.io = io;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({credentials: false, origin: '*', exposedHeaders: ['Content-Disposition']}));


app.use('/', indexRouter);
app.use('/users', usersRouter);

// Including all registered router
Object.keys(routes).forEach((key) => {
  // app.use('/ground', routes[key]);
  app.use('/ground', new routes[key](app).getRoute());
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  req.io = app.locals.io;
  // next(createError(404));
  next();
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

//error handler digantikan ini
app.use(errorMiddleware);

module.exports = app;
