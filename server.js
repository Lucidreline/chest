const expressSanitizer = require('express-sanitizer');
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const config = require('config');

const connectDB = require('./config/db');

connectDB();

const app = express();

// middleware
app.use(bodyParser.json());
app.use(helmet());
app.use(expressSanitizer());

// routes
app.use('/api/items', require('./routes/items'));

app.listen(config.get('port'), () => {
  console.log(`server online on port ${config.get('port')}`);
});
