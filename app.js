require('dotenv').config()

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const { PORT, DB_CONNECT_URL } = require('./configs/config');

app.use(cors());

mongoose.connect(DB_CONNECT_URL);

app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, 'build')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))

})

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/main', require('./routes/film.routes'))
app.use('/films', require('./routes/listFilms.routes'))