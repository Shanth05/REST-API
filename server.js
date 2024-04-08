const express = require('express');
const app = express();

// routes

app.get('/', function (req, res) {
    res.send('Hello NODE API');
});

app.get('/blog', function (req, res) {
    res.send('Hello Blog, My name is Pirashanth');
});

app.listen(3000, () => {
    console.log('Node API app is running on port 3000');
});
