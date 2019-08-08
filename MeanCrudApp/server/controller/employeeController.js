//Step - 12     | Implement router for Express...
const express = require('express');
const router = express.Router();

// Step - 19    | Import ObjectId from mongoose for checking ID 
const ObjectId = require('mongoose').Types.ObjectId;

// Step - 13    | Import model to work with MongoDB database
const Employee = require('../models/employees');


// Step -14     | Create a route for fetching all employee details
router.get('/', (req, res) => {
    // use find method for getting all employee details
    Employee.find((err, docs) => {
        if(!err){ res.send(docs) }
        else{
            console.log('Error in retrieving employee'+ JSON.stringify(err, undefined, 2))
        }
    })
})


// Step - 18    | We have to create post request for save data into DB
router.post('/', (req, res) => {
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    emp.save((err, docs) => {
        if(!err){
            res.send(docs);
            console.log('-----------------')
            console.log(emp)
        }else{
            console.log('Error in Employee save ' + JSON.stringify(err, undefined, 2))
        }
    })  
})



// Step - 18    | Passing _id for fetching a specific employee details
router.get('/:id', (req, res) => {
    // Check the id value is valid and available or not inside DB
    // We have to import Step - 19
    if(!ObjectId.isValid(req.params.id)){
        return res.status(200).send(`No record with this given id : ${req.params.id}`);
    }

    // If id is available then we have to find employee by ID
    Employee.findById(req.params.id, (err, docs) => {
        if(!err){ res.send(docs) }
        else{
            console.log('Error in Retrieving Employee ' + JSON.stringify(err, undefined, 2))
        }
    })
})


// Step - 20    | Create Update routes for updating existing employee details
router.put('/:id', (req, res) => {
    // First check id pass through URI is valid and available or not
    if(!ObjectId.isValid(req.params.id)){
        return res.status(200).send(`No record with this given id : ${req.params.id}`);
    }

    // We have to create an simple Object for retrieving data from URL 
    let emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    }

    // If id is available then we have to update employee by ID
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, docs) => {
        if(!err){ res.send(docs) }
        else{
            console.log('Error in Employee Update : '+ JSON.stringify(err, undefined, 2))
        }
    })
})


// Step - 21      | Create a delete API for delete details form database
router.delete('/:id', (req, res) => {
    // First check id pass through URI is valid and available or not
    if(!ObjectId.isValid(req.params.id)){
        return res.status(200).send(`No record with this given id : ${req.params.id}`);
    }

    // We have to remove a specific employee from database 
    Employee.findByIdAndRemove(req.params.id, (err, docs) => {
        if(!err){ res.send(docs) }
        else{
            console.log('Error in Employee Update : '+ JSON.stringify(err, undefined, 2))
        }
    })
})

//Step - 22  | We complete our server side implementation now move to Front-end


// Step - 15    | Without export we can't use it into another file
module.exports = router;