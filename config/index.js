const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql/msnodesqlv8');

var cors = require('cors') // This is better than using header
var port = require('./const');


const anaRoutes = require('./routes/configscreen');


const app = express();
//const port = process.env.PORT || 3200;
//const port = process.env.PORT || 3030;




console.log('This is our node app');

//app.use(bodyParser.urlencoded({extended: false})); // This is for form post
app.use(bodyParser.json()); // application/json

app.use(cors());


//app.use(userRoutes);

app.use(anaRoutes)



app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
 });