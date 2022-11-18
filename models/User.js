// const {Schema, model} = require("..//db/connection");

// const UserSchema  = new Schema({
//     name: { type: String ,unique: true, required: true},
//     password: { type: String , required: true}
// });


// const User = model("password", UserSchema)

// module.exports = User;

const mongoose = require("mongoose") 

const {Schema, model} = mongoose;// import Schema & model

// User Schema
const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true}
})

// User model
const User = model("User", UserSchema)

module.exports = User