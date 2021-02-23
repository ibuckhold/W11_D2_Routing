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

let path= "*";
app.all('*', (req, res) => {
    let method= 'all';
    let random= Math.floor(Math.random() * 10);
    res.render('template', { method: `${method}`, path: `${path}`, random: `${random}` });
})
