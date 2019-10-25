function logger(req, res, next) {
  const d = new Date();
  console.log(d, req.path);

  next();
}

module.exports = logger;
