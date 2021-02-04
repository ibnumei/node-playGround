var express = require('express');
// var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const path = require('path');

//$$$
// const createError = require('http-errors');
// const logger = require('morgan');
// const routes = require('./src/route/index');
// const { errorMiddleware } = require('./src/middleware/errorMiddleware');

require('dotenv').config();
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//$$$
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

//$$$
// app.use(logger('dev'));
// app.use(express.static(path.join(__dirname, 'public')));

// Config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    req.io = io;
    next();
});
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Tell express where to serve static files from
app.use(express.static(__dirname + '/public'));
app.use(cors({ credentials: false, origin: '*', exposedHeaders: ['Content-Disposition'] }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//$$$
// Object.keys(routes).forEach((key) => {
//     app.use('/ground', routes[key]);
//   });

/* 
Routes
*/

// Render homepage.
// app.get('/', function(req, res) {
// 	res.sendfile('index.html');
// });

// Route for voting
app.post('/vote', function (req, res) {
    // var field = [{name: req.body.name}];
    var dataFromFrontend = req.body.test;
    console.log('dataFromFrontend', dataFromFrontend)
    // var newVote = new Vote(field[0]);

    // newVote.save(function(err, data) {
    // 	console.log('Saved');
    // });

    // Vote.aggregate(

    // 	[{ "$group": {
    // 		"_id": "$name",
    // 		"total_vote": { "$sum": 1 }
    // 	}}],

    // 	function(err, results) {
    // 		if (err) throw err;
    // 		console.log(results);
    // 		req.io.sockets.emit('vote', results);
    // 	}
    // );
    // console.log(dataFromFrontend);
    req.io.sockets.emit('vote', dataFromFrontend);
    res.send({ 'message': 'Successfully added.' });
});

app.get('/data', function (req, res) {
    Vote.find().exec(function (err, msgs) {
        res.json(msgs);
    });
});

/*
Socket.io Setting
*/

io.on('connection', function (socket) {

    // Vote.aggregate(

    //     [{
    //         "$group": {
    //             "_id": "$name",
    //             "total_vote": { "$sum": 1 }
    //         }
    //     }],

    //     function (err, results) {
    //         if (err) throw err;

    //         socket.emit('vote', results);
    //     }
    // );
});

//$$$
// app.use(errorMiddleware);


// Start
server.listen(3000);
console.log('Open http://localhost:3000');
// module.exports = app;