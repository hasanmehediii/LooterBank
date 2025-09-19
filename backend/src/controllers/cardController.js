const Card = require('../models/cardModel');

exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};