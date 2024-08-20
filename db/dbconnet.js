let mongoose = require("mongoose");


let dbConnet = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log("database connect successfully");
    })
        .catch((err) => {
            console.log("database connect err", err);
        })
}


module.exports = dbConnet;