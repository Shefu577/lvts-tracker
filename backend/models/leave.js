const mongoose = require('mongoose');

const {Schema} = mongoose;

const LeaveSchema = new Schema({
    name:{
        type: String,   
    },

    email:{
        type: String,
    },

    address:{
        type: String,    
    },
    
    contact:{
        type: String,   
    },

    typeleave:{
        type: String,
    },

    startdate: {
        type: Date,    
    },

    enddate: {
        type: Date,   
    },

    days: {
        type: Number,
    },
    
    status: {
        type: String,
    }

})

const leave = mongoose.model('leave',LeaveSchema)

module.exports = leave