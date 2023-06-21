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

app.listen(port, ()=>{
    console.log(`app listening in port ${port}`);
})