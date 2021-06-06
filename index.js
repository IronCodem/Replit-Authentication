const express = require('express'); 

const app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
    if (req.header('X-Replit-User-Id')) {
        res.redirect(`/home/?user=${req.header('X-Replit-User-Name')}`); 
    } else {
        res.sendFile(__dirname + 'inlog.html'); 
    }
});

app.get('/home', function (req, res) {
    res.send(`<h1>Hello, ${req.query.user}</h1>`);
});

app.listen(8080, function () { 
    console.log("Server, up n\' runnin\'!");
});

