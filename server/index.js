const express = require('express');
const app = express();
const session = require('express-session')
const checkForSession = require('./middleWares/checkForSession')
require('dotenv').config()
const port = 3001

const {SESSION_SECRET} = process.env







app.use(express.json())
app.use(session({
    secret:SESSION_SECRET,
    saveUninitialized:false,
    resave:true,
    
}))


app.listen({port}, () => console.log(`i hear ya on ${port}` ))