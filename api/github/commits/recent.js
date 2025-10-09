const handler = require('../[...path].js');

module.exports = (req, res) => {
  req.query = { ...req.query, path: ['commits', 'recent'] };
  return handler(req, res);
};