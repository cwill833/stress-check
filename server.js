const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')

// require('./config/database');

const indexRouter = require('./routes/index');
// var apiRouter = require('./routes/api');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

// app.use('/api', apiRouter);

const port = process.env.PORT || 3001;

app.listen(port, ()=>{
        console.log(`we are connected on port: ${port}`)
})