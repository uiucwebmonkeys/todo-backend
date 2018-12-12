const express = require('express');
const router = express.Router();

const client = require('../db');

router.get('/', function(req, res, next) {
  res.json({ message: 'root' });
});

router.get('/todos', async function(req, res, next) {
  const db = client.getDB();

  const cursor = db.collection('todos').find({});
  cursor.toArray((err, docs) => {
    if (err) return res.json({ success: false });

    res.json({
      success: true,
      docs,
    });
  });
});

router.post('/createTodo', function(req, res, next) {
  const db = client.getDB();

  db.collection('todos').save(req.body, (err, body) => {
    if (err) {
      return res.json({ success: false });
    }
    res.json({ success: true });
  });
});

module.exports = router;