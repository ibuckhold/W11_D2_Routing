const express= require('express');
const app= express();
app.set('view engine', 'pug');
const port= 8081;

app.listen(port, () => {
    console.log('our listener is working');
})

app.get('/', (req, res) => {
    res.send('Hello from Express!');
})
let porkyPath = `*xyz`
app.get(`/${porkyPath}`, (req, res) => {
    res.send("That's all I wrote.");
})


app.get(`/capital-letters/:word`, (req, res) => {
    let word = req.params.word
    word = word.toUpperCase();
    res.send(word);
})

app.get(`/*/bio`, (req, res) => {
    res.send('Bio');
})
app.get(`/*/contact`, (req, res) => {
    res.send('Contact');
})
let path= "*";
app.all(/^\/[A-Za-z0-9\-_]*$/, (req, res) => {
    let method= 'all';
    let random= Math.floor(Math.random() * 10);
    res.render('template', { method: req.method, path: req.path, random: `${random}` });
})
