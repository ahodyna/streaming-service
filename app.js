const express = require('express');
const path = require('path');

const app = express();


const staticPath = path.join(__dirname, 'static');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticPath));

const { PORT } = require('./configs/config');


app.use('/api/auth', require('./routes/auth.routes'))


app.listen(PORT, () => console.log('App has been started...'))