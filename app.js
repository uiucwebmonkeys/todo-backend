const express = require('express');
const path = require('path');
const logger = require('./logger');

const app = express();

// Define app-level middleware. Middlewares are executed synchronously.

app.use(logger);
app.use(express.json());

// Middleware function that just logs the request body
app.use((req, res, next) => {
  console.log("Request Body: ", req.body);
  next();
});

// Use the express routes in routes/index.js
const indexRoute = require('./routes');
app.use('/', indexRoute);

module.exports = app;
