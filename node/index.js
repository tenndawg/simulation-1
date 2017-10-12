const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()

const app = express();
app.use( bodyParser.json() );
app.use( cors() );
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );

app.get('/api/products', function(request, response) {
    response.status(200).json(products);
});

// These will be the shelves
app.get('/api/name', function(req, res) {
    res.send("My name is Nick Tenney");
});

app.get('/api/products', function(req, res) {
    res.send("Products Here");
});

app.get('/api/thing', function(req, res) {
    res.send("That Thing");
});

app.get('/api/test', function(req, res) {
    res.send("This is a Test");
});
// Shelves end here

const port = process.env.PORT || 3100;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );