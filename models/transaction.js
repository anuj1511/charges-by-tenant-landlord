const mongoose = require("mongoose");

const tranSchema = new mongoose.Schema({
    charge_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    order_date:{
        type:Date,
        default:Date.now,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    landlord_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    tenant_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model("Transaction",tranSchema)