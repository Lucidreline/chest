const express = require('express');

const config = require('config');

const connectDB = require('./config/db');

const app = express();

connectDB();

// routes
app.use('/api/items', require('./routes/items'));

app.listen(config.get('port'), () => console.log(`server online on port ${config.get('port')}`));
