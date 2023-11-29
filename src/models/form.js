// const mongoose = require('mongoose')
// //this is a schema -> it makes the structure what type

// const user = new mongoose.Schema({
//     name : {type:String},
//     age : {type : Number, required:true}
// })

// //model will create the strutre in mongodb
// module.exports = mongoose.model("form", user)

const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstname :{
        type: String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true,
    }
})

//create a collection

const Register = new mongoose.model("FormSt1",employeeSchema);
// module.exports = mongoose.model("formSt", employeeSchema)

module.exports = Register;