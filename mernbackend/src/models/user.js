// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     registrationNo: { 
//         type: String, 
//         required:true,
//         unique: true 
//     },
//     password: {
//         type:String,
//         required:true
//     }
// });

// module.exports = mongoose.model('User', userSchema);




const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    registrationNo: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
