// Step - 2     | Import all important npm packages 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Step - 3     | Import DB connection package
const dbConnection = require('./db');

// Step -16     | Import controller for calling all router 
const employeeController = require('./controller/employeeController');




// Step - 4
const app = express();
app.use(bodyParser.json());
app.use(cors())

// Step - 5
const POST = 3000;


// Step - 17      | Calling all implementing routes from here..
app.use('/employee', employeeController)


// Step - 6
app.listen(POST, () => {
    console.log('Server started at port no '+ POST);
});





// Step - 7   | Create a folder models and inside this folder create a file employees.js
