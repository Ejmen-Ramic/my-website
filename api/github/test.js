module.exports = (req, res) => {
  res.status(200).json({ route: 'github/test', url: req.url });
};