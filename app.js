require('dotenv').config()

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express()
const port  = 5000 || process.env.port;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// static files
app.use(express.static('public'));

// Templating Engine
app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');

// Routes 
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));

// Handle 404
app.get("*", function(req,res){
    // res.status(404).send('404 page not found')
    res.status(404).render('404')
})

app.listen(port, ()=>{
    console.log(`app listening in port ${port}`);
})