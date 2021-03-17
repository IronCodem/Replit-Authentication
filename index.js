const express = require('express'); 

const app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
    if (req.header('X-Replit-User-Id')) { // Check to see if the user is logged in...
        res.redirect(`/home/?user=${req.header('X-Replit-User-Name')}`); 
    } else {
        res.sendFile(__dirname + 'inlog.html'); 
    }
});

app.get('/home', function (req, res) {
    // You could do anything you want here...
    // You might want to secure it a little, so people have to be logged in to view the page.
    res.send(`<h1>Hello, ${req.query.user}</h1>`);
});

app.listen(8080, function () { 
    console.log('Server up!');
});
