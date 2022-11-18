// const {Schema, model} = require("..//db/connection");

// const TodoSchema  = new Schema({
//     username: {type: String, required: true},
//     reminder: {type: String, required: true},
//     completed: {type: Boolean, required: true, default: false}
// });


// const Todo = model("Todo", TodoSchema);
 
// module.exports = Todo
const mongoose = require("mongoose") 

const {Schema, model} = mongoose;// import Schema & model

// User Schema
const TodoSchema = new Schema({
    username: {type: String, required: true},
    reminder: {type: String, required: true},
    completed: {type: Boolean, required: true, default: false}
})

// User model
const Todo = model("Todo", TodoSchema)

module.exports = Todo