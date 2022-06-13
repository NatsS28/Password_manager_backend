const mongoose = require('mongoose');
const passwordSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    iv: {
        type: String,
    }
}, { timestamps: true })


const password = mongoose.model('passwordSchema', passwordSchema);

module.exports = password;