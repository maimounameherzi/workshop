const mongoose = require ('mongoose')

const connectDb = async() => {
    try {
        await mongoose.connect (process.env.MONGO_URI)
        console.log ("connected to my Data")
        
    } catch (error) {
        console.error (error)
    }

}
module.exports = connectDb 