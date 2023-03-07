const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/bonjour', (req, res) => {
    res.send('Bonjour tout le monde');
});

app.get('/fichier/html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/page.html'));
});

app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`);
});