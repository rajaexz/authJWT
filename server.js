// require("dotenv").config() // load .env variables 
// const express = require("express") // import express
// const morgan = require("morgan") //import morgan
// const {log} = require("mercedlogger") // import mercedlogger's log function
// const cors = require("cors") // import cors
// const userRoutes = require('./Controller/User');
// const {PORT = 3000} = process.env
// const app = express();
// //GOLOBEL MIDDELWERE
// app.use(cors())// add header in cors
// app.use( morgan('tiny'));// for debugging 
// app.use(express.json());//parse json bodies



// app.get('/',(req,res)=>{
// res.send('hello : this is made for authentication ');
// });

// app.use('/user',userRoutes)
// // APP LISTENER
// app.listen(PORT, () => log.green("SERVER STATUS", `Listening on port ${PORT}`))



require("dotenv").config() // load .env variables
const express = require("express") // import express
const morgan = require("morgan") //import morgan
const {log} = require("mercedlogger") // import mercedlogger's log function
const cors = require("cors") // import cors
const UserRouter = require("./Controller/User") //import User Routes
const mongoose = require("mongoose") //import fresh mongoose object
//DESTRUCTURE ENV VARIABLES WITH DEFAULT VALUES
const {PORT = 3000} = process.env
const { isLoggedIn } = require("./Controller/middleware"); // import isLoggedIn custom middleware
const path = require('path')// path
// sand the data 

// Create Application Object
const app = express()

//DESTRUCTURE ENV VARIABLES
const {DATABASE_URL} = process.env 
app.use(express.static('public'))
// CONNECT TO MONGO
mongoose.connect = mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})

// CONNECTION EVENTS
mongoose.connection
.on("open", () => log.green("DATABASE STATE", "Connection Open"))
.on("close", () => log.magenta("DATABASE STATE", "Connection Open"))
.on("error", (error) => log.red("DATABASE STATE", error))

// GLOBAL MIDDLEWARE
app.use(cors()) // add cors headers
app.use(morgan("tiny")) // log the request for debugging
app.use(express.json()) // parse json bodies

//DATA BASE 

    
// ROUTES AND ROUTES
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})
app.use("/user", UserRouter) // send all "/user" requests to UserRouter for routing

// APP LISTENER
app.listen(PORT, () => log.green("SERVER STATUS", `Listening on port ${PORT}`))