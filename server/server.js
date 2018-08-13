const express = require('express');
const compression = require('compression');
const logger = require('morgan');
const bodyParser = require('body-parser');
const api = require('./api');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(logger('dev'));
app.use(compression());

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
});

mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`);
});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

require('./api')(app);

app.use((err, req, res, next) => {

    if (req.app.get('env') !== 'development') {
        delete err.stack;
    }

    res.status(err.statusCode || 500).json(err);
});

app.listen(port, () => console.log(`Listening on port ${port}`));