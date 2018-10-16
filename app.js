const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require("body-parser");

const staticPath = path.resolve(__dirname, 'public');
app.use(express.static(staticPath));

app.set('view engine', 'hbs');

app.get('/', (req, res) => res.render('myTemplate', { 'title': 'ascii sketchbook', 'body': 'Yo Whatsup'}));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
const logger = (req, res, next) => {
console.log(req.method, req.path, req.query);
next();
};
app.use(logger);
//app.listen(3000);
