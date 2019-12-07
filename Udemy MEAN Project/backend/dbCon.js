const mongoose = require('mongoose');


// Data base URL, We are using atlas cloud database 
const dbURL = "mongodb+srv://rehanSk:9qfhvTM8rdQubnzD@cluster0-igodz.mongodb.net/CRUD-DB?retryWrites=true&w=majority";


// Established Connection.... 
mongoose
  .connect(dbURL)
  .then(() => { console.log("Connected to database!"); })
  .catch(() => { console.log("Connection failed!"); });


// Export module for use outside
module.exports = mongoose;  





// Another way to established connection in local server...........................

// const dbURL = 'mongodb://localhost:27017/CrudDB';
// 	mongoose.connect(dbURL, (err) => {
// 	   if(!err){
// 	       console.log('Database Connection Successful!');
// 	   }else{
// 	       console.log('Error in DB connection : '+ JSON.stringify(err));
// 	   	}
// 	});



// @ note - 
//   => We will use MongoDB  Atlas cloud features 

// @ Details - 
//   => login Details
//         Email ID - skazam1993@gmail.com
//         PW - default   

//   => User Details
//         username - rehanSk
//         pw - 9qfhvTM8rdQubnzD
//         User Privileges - Atlas admin        

