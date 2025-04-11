const mongoose = require("mongoose");

const userSchemaRules = ({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user"
    }
})


const userSchema = new mongoose.Schema(userSchemaRules);
const userModel = mongoose.model("AuthUser",userSchema);

module.exports = userModel;
