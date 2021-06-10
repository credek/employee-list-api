const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// Internal dependencies
const { throw400, handleErrors } = require('./middleware/errors');
const indexRouter = require('./routes/index');
const employeesRouter = require('./routes/employees');
const CORS = require('./middleware/CORS');

// Init
const app = express();

// Init mongoose
mongoose
  .connect('mongodb://127.0.0.1:27017/employee-list', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch((err) => console.error(err));
mongoose.connection.on('open', () => console.log('MongoDB running'));
mongoose.connection.on('error', (err) => console.error(err));

// Middleware

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(CORS);

// Routes
app.use('/', indexRouter);
app.use('/api/employees', employeesRouter);

// Code 400 if no route is matched
app.use(throw400);

// Err handling
app.use(handleErrors);

module.exports = app;
