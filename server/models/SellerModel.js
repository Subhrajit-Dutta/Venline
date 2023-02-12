const mongoose = require('mongoose')
const consumerschema= mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profile:{
        type:String,
        required:true,
        default:  "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    }, 
    AdharCard:{
        type: Number,
        required:true,
    },
},
    {
        timestamps:true
    })