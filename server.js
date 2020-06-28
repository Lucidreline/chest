const express = require('express');

const config = require('config');

const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req, res) => {
  res.send('hi');
});

app.listen(config.get('port'), () => console.log(`server online on port ${config.get('port')}`));
