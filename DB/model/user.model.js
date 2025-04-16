const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName:{
        firstName:{
            type:String,
            required: true
        },
        lastName:{
            type:String,
            required: true
        }
    },
    email:{
        type:String,
        required:true,
        unqiue:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps: true,
    minimize: false
});

const User = mongoose.model("User", userSchema);
module.exports = User;