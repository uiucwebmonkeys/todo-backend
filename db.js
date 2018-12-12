const MongoClient = require('mongodb').MongoClient;

let db;

function initDB(cb) {
  MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) return cb(err);
    db = client.db('todo');
    cb(null);
  });
}

function getDB() {
  return db;
}

module.exports = {
  getDB,
  initDB,
};
