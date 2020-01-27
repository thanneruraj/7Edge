const createError = require('http-errors');
const express = require('express');
const employeeRouter = require('./routes/employees');
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/employee', employeeRouter);



module.exports = app;
