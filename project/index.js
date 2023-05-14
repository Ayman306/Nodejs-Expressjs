const express = require("express");
const path = require("path");
const app = express();
var exphbs  = require('express-handlebars');
const logger= require('./middleware/logger');
const members=require('./Members')

// init logger
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body parser MiddleWare
app.use(express.json());
app.use(express.urlencoded({extended:false}))


// homepage route 
app.get('/',(req,res)=> res.render('index',{
    title:"Member App",
    members
}))

// setting up a static folder
app.use(express.static(path.join(__dirname, "public")));

// members api routes 

app.use('/api/members',require('./routes/api/member'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
