const app = require('express')();
const bodyParser = require("body-parser");

/* View */
app.set('view engine', 'ejs');
app.set('views', './api/views');
/* Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var teste= 1;

module.exports = app;