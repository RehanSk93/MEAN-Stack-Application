// Step - 8     | Import all necessary npm packages
const mongoose = require('mongoose');

// Step -9      | Create a Schema for mongoDB database 
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: { type: String },
    age: { type: Number },
    phone: { type: Number },
    email: { type: String },
    password: { type: String },
    role: { type: String }
});

// Step - 10    | Export employeeSchema Object
module.exports = mongoose.model('patientApp', userSchema);

// Step - 11    | Create a folder controller and create a file inside controller and name it employeeController.js