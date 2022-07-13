const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema({
    username:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: true
    },

    address:{
        type: String,
        required: true
    },
    
    contact_no:{
        type: String,
        required: true
    }

})

const user = mongoose.model('user',UserSchema)

module.exports = user