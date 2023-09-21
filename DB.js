const mongoose = require('mongoose');

const Con = async () =>{
    try {
       const conDB = await mongoose.connect(process.env.DB_CONNECTION) 
        console.log("Database created successfully")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = Con 