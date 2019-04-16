const express = require('express');
const color = require('colors');
const path = require('path');
const routes = require('./routes/index.js');

const app = express();




//settings
app.set( 'port' , process.env.PORT || 5000);//seteo el port del server
app.set( 'views', path.join( __dirname , 'views'));
app.set( 'view engine' , 'ejs'); //No requiero el modulo ejs, porque por defecto express implementa ese motor de plantillas.

//middlewares
app.use(( req , resp , next ) => {
    console.log(`${req.url} ${req.method}`);
    next();
});



//routes
app.use(routes);

//static files



//start server

app.listen( app.get('port') , () => {
    console.log('SERVER on port:  '.blue, app.get('port'));
});    