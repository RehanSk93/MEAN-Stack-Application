const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27017/CrudDB';

mongoose.connect(dbURL, (err) => {
    if(err) {
        console.log('Error in DB Connection');
    } else {
        console.log('DB Connection successful');
    }
});

module.exports = mongoose;