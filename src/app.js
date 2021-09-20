const express = require('express');
const path = require('path');
const hbs = require('hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));

const app = express();
app.set('views', './src/views');
app.set('view engine', 'hbs');

app.get('/', (req, res) =>{
    // res.send("start")
    res.render('index', {
       pageTitle: "niech ich dusi pyta",
    });
});

app.get('/start', (req, res) =>{
    res.send("start")
});

app.get('/omnie', (req, res) =>{
    res.send("o mnie")
});

app.get('/kupsko', (req, res) =>{
    res.send("kupsko")
});

app.get('/kontakt', (req, res) =>{
    res.send("kontakt")
});

app.get('/rodo', (req, res) =>{
    res.send("ej byku wiesz co to rodo")
});



app.listen(5000, () => {
    console.log("niech ich kurwa dusi pyta");
})