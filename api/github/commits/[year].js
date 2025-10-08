const handler = require('../../../[...path].js');

module.exports = (req, res) => {
  const year = req.query?.year || req.params?.year;
  req.query = { ...req.query, path: ['commits', 'year', String(year)] };
  return handler(req, res);
};