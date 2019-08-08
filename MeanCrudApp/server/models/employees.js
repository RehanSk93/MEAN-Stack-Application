// Step - 8     | Import all necessary npm packages
const mongoose = require('mongoose');

// Step -9      | Create a Schema for mongoDB database 
const Schema = mongoose.Schema;
const employeeSchema = new Schema({
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: String }
});

// Step - 10    | Export employeeSchema Object
module.exports = mongoose.model('employeeCrud', employeeSchema);

// Step - 11    | Create a folder controller and create a file inside controller and name it employeeController.js