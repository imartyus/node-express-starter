const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const cors = require('cors');

const mailRoutes = require('./routes/mail')

const app = express();

// Middleware //
app.use(cors())
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({extended: false, limit: '1mb'}));
app.use(morgan('dev'));

app.use('/mail', mailRoutes);
app.get('/', (req, res) => {
	res.status(200).send('DFX Mail Server')
});

app.listen(8000, () => console.log('Server is up on port 8000!'))

module.exports = app