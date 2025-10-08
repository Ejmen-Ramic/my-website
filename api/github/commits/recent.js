const handler = require('../../[...path].js');

module.exports = (req, res) => {
  // Force the same shape the catch‑all expects
  req.query = { ...req.query, path: ['commits', 'recent'] };
  return handler(req, res);
};