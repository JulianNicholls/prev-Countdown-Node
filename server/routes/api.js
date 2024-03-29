const express = require('express');
const router = express.Router();

const WordList = require('../../src/WordList');

const wordlist = new WordList('../public/countdown.words');

router.post('/words', (req, res) => {
  const words = wordlist.canBeMadeFrom(req.body.letters);

  res.json({ words });
});

module.exports = { router };
