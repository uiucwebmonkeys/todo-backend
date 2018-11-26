const express = require('express');
const path = require('path');
const logger = require('./logger');

const app = express();

app.use(logger);
app.use(express.json());

const indexRoute = require('./routes');
app.use('/api', indexRoute);

app.use((req, res, next) => {
  console.log(req.body);
  res.send('Test');
  res.end();
});

module.exports = app;
