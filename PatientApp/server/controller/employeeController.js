//Step - 12     | Implement router for Express...
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Step - 19    | Import ObjectId from mongoose for checking ID 
const ObjectId = require('mongoose').Types.ObjectId;

// Step - 13    | Import model to work with MongoDB database
const User = require('../models/employees');
const patientBooking = require('../models/requestDoctor')


// Step -14     | Create a route for fetching all employee details
router.get('/alluser', (req, res) => {
    // use find method for getting all employee details
    User.find((err, docs) => {
        if(!err){ res.send(docs) }
        else{
            console.log('Error in retrieving employee'+ JSON.stringify(err, undefined, 2))
        }
    })
})


// Step - 18    | We have to create post request for save data into DB
router.post('/', (req, res) => {
    let user = new User({
        name: req.body.name,
        age: req.body.age,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    });
    user.save((err, docs) => {
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in User save ' + JSON.stringify(err, undefined, 2))
        }
    })  
})



// Step - 18    | patient booking request details
router.post('/booking', (req, res) => {
    let user = new patientBooking({
        doctorID: req.body.doctorRequestID,
        patientID: req.body.patientRequestID,
    });
    user.save((err, docs) => {
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in User save ' + JSON.stringify(err, undefined, 2))
        }
    })  
})



// User login api
router.post('/login', (req, res)=>{
    let userData = req.body;

    User.findOne({email: userData.email}, (error, userInfo)=>{
        if(error){
            console.log('login error !'+error);
        }else{
            if(!userInfo){
                res.status(401).send('Invalid Email')
            }else{
                if(userInfo.password !== userData.password){
                    res.status(401).send('Invalid Password');
                }else{
                    //Generate a json web token and pass it an an Object
                    let payload = { subject: userInfo._id }
                    let token = jwt.sign(payload, 'secretKey')
                    res.status(200).send({ 
                        token : token,
                        userInfo: userInfo
                     })
                }
            }
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
     User.findById(req.params.id, (err, docs) => {
         if(!err){ res.send(docs) }
         else{
             console.log('Error in Retrieving Employee ' + JSON.stringify(err, undefined, 2))
         }
     })
 })


 

// // Step - 20    | Create Update routes for updating existing employee details
 router.put('/:id', (req, res) => {
     // First check id pass through URI is valid and available or not
     console.log('Result', req.params.id);
     if(!ObjectId.isValid(req.params.id)){
         return res.status(200).send(`No record with this given id : ${req.params.id}`);
     }
     // We have to create an simple Object for retrieving data from URL 
     let userUpdate = {
         name: req.body.name,
         email: req.body.email,
         phone: req.body.phone,
         age: req.body.age
     }
     // If id is available then we have to update employee by ID
     User.findByIdAndUpdate(req.params.id, { $set: userUpdate }, { new: true }, (err, docs) => {
         if(!err){ res.send(docs) }
         else{
             console.log('Error in Employee Update : '+ JSON.stringify(err, undefined, 2))
         }
     })
 })




// // Step - 21      | Create a delete API for delete details form database
// router.delete('/:id', (req, res) => {
//     // First check id pass through URI is valid and available or not
//     if(!ObjectId.isValid(req.params.id)){
//         return res.status(200).send(`No record with this given id : ${req.params.id}`);
//     }

//     // We have to remove a specific employee from database 
//     Employee.findByIdAndRemove(req.params.id, (err, docs) => {
//         if(!err){ res.send(docs) }
//         else{
//             console.log('Error in Employee Update : '+ JSON.stringify(err, undefined, 2))
//         }
//     })
// })



//Step - 22  | We complete our server side implementation now move to Front-end



// Step - 15    | Without export we can't use it into another file
module.exports = router;