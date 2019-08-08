// Step - 1     => next step | create index.js file inside server folder and install nodemon packages
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB', (err) => {
    if(!err){
        console.log('MongoDB Connection succeed.');
    }else{
        console.log('Error in DB connection' + JSON.stringify(err, undefined, 2))
    }
});

module.exports = mongoose;
