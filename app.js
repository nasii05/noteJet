require('dotenv').config()

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
const session = require('express-session');
const passport = require('passport');
const mongoStore = require('connect-mongo');

 
const app = express()
const port  = 5000 || process.env.port;
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: mongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    })
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// connect to database
connectDB();



// static files
app.use(express.static('public'));


// Templating Engine
app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');

// Routes 
app.use('/', require('./server/routes/auth'));
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