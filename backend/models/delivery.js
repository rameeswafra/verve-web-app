const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deliverySchema = new Schema({


    driverName : {
        type : String,
        required : true
    },
   
    vehicleNumber : {
        type : String,
        required : true
    },
    nic : {
        type : String,
        required : true
    },
    contactNumber : {
        type : String,
        required : true
    },
    deliveryStatus : {
        type : String,
        required : true
    },
    date:{
        type : Date,
        required : true
    },
    deliverID : {
        type : String
    },
    cusName : {
        type : String
    },
    address : {
        type : String
    }

    
})

const Delivery = mongoose.model("Delivery",deliverySchema);

module.exports = Delivery;