const mongoose = require ('mongoose');
const mongoURI = "mongodb://localhost:27017/ManagerDatabase?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () =>{
        
        console.log("Database connected successfully")
    })
}

module.exports = connectToMongo;