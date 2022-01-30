const express = require('express');

const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
const app = express();

const db = path.join(__dirname, '/db');
const mainPath = path.join(__dirname, '/public');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/notes', function(req, res) {
    res.sendFile(path.join(mainPath, 'notes.html'));
});

app.get('/api/notes', function(req, res) {
    res.sendFile(path.join(db, 'db.json'))
    return res.body
});

app.get('*', function(req, res) {
    res.sendFile(path.join(mainPath, 'index.html'));
});


app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});