const mongoose = require('mongoose')
const bcrypt= require('bcryptjs')
const consumerschema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    phone:{
        type:Number,
        required:true,
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
},
    {
        timestamps:true
    })
    consumerschema.methods.matchpassword= async function (enteredPassword){
       return await bcrypt.compare(enteredPassword, this.password)
        console.log(this.password)

    }
    consumerschema.pre('save',async function (next){
        if(!this.isModified){
            next()
        }
        const salt= await bcrypt.genSalt(10)
        this.password= await bcrypt.hash(this.password,salt)
        const password=this.password
    })
    const  User = mongoose.model("User",consumerschema)
    module.exports = User