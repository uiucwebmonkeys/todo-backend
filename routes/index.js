const express = require('express');
const router = express.Router();

const database = [];

// /api
router.get('/', function(req, res, next) {
  res.json({ message: 'root' });
});

router.post('/addtodo', function(req, res, next) {
  database.push(req.body);
  console.log(database);
  res.json({ success: true });
});

module.exports = router;