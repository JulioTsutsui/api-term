const app = require('express')();
const bodyParser = require("body-parser");
const cors = require("cors");

/* View */
app.set('view engine', 'ejs');
app.set('views', './api/views');
/* Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

module.exports = app;