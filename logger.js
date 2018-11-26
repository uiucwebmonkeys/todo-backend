function logger(req, res, next) {
  const d = new Date();
  console.log(d, req.path);

  req.testMessage = 'From the logger';

  next();
}

module.exports = logger;
