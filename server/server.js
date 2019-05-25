const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const images = require('./routes/images.router');
const tags = require('./routes/tags.router');
const imagestags = require('./routes/images-tags.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.urlencoded({extended: true})); // added - Scott's video Many on Many Server - KV
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/images', images);
app.use('/tags', tags);
app.use('/images/tags', imagestags);

/** ---------- START SERVER ---------- **/
app.listen(PORT, function () {
    console.log('Listening on port: ', PORT);
});