const express = require('express');
const path = require('path');

const api = require('./routes/api');

const port = process.env.PORT || 8080;
const publicPath = path.join(__dirname, '..', 'public');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', api.router);

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Countdown2 Server running on port ${port}`);
});
