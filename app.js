require('dotenv').config()

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const { PORT, DB_CONNECT_URL } = require('./configs/config');

mongoose.connect(DB_CONNECT_URL);

const staticPath = path.join(__dirname, 'static');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticPath));


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});

app.use('/api/auth', require('./routes/auth.routes'))

