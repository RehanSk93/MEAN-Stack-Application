const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    doctorID: { type: String },
    patientID: { type: String }
});

module.exports = mongoose.model('patientRequest', userSchema);
