//import mongoose package
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    empID: {
        type:String
    },
    name : {
        type : String,
        required: true
    },
     gender:{
        type:String,
        required:true
    },
     address:{
        type:String,
        required:true
    },
    birthday:{
        type:Date,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
   
    emergencyname:{
        type:String,
        required:true
    },
    emergencynumber:{
        type:Number,
        required:true
    },
    EmpSalary:{
        type:Number,
        required:true
    }
   
   
})

//move the details in scheema to data base
const employee = mongoose.model("employee",employeeSchema);

 // use you logic to generate the _id

module.exports = employee;