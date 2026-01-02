const mongoose=require("mongoose");

require("dotenv").config();

exports.dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>
    console.log("Connection is done with database "))
    .catch((error)=>{
        console.log("something wrong is hapend ")
        console.error(error.message);
        process.exit(1);
    })

}
