const express = require('express');
const router = express.Router();

const database = [];

//Root level method to test
router.get('/', function(req, res, next) {
  res.json({ message: 'root' });
});

// Add a todo item to our "database"
router.post('/addtodo', function(req, res) {
  database.push(req.body);
  console.log(database);
  res.json({ success: true });
});

module.exports = router;