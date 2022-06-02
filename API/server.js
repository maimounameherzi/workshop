const express = require ('express');
const connectDb = require('./config/connect');
const init=require("./config/setup")
const app = express ();
const userRouter =require("./routes/user.router")
require ('dotenv').config()

app.use (express.json ())
connectDb()
app.use("/",userRouter)
const PORT = process.env.PORT || 5000
init()
app.listen (PORT, (error) => {  
if (error) throw console.error (error)
console.log('listen to port '+PORT)
})
