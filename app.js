require('dotenv').config()

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const { PORT, DB_CONNECT_URL } = require('./configs/config');

app.use(cors());

mongoose.connect(DB_CONNECT_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', require('./routes/auth.routes'))
app.use('/main', require('./routes/film.routes'))
app.use('/films', require('./routes/listFilms.routes'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))

    })
}

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
});