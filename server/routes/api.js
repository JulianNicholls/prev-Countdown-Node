const express = require('express');
const router = express.Router();

router.post('/words', (req, res) => {
  console.log('/api/words:', req.body.letters);

  res.json({ words: ['bellini', 'abacus', 'wings'] });
});

module.exports = {
  router: router
};
