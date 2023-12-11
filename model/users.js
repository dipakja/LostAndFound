const mongoose = require("mongoose")

const userData = new mongoose.Schema({

name: {
    type:String
},
email: {
    type:String
},
mobileNumber: {
    type:Number
},
objectName: {
    type:String
},
objectImage: {
    data: Buffer,
    contentType: String
},
description: {
    type:String
}

})


const User = mongoose.model("User",userData)

module.exports=User;