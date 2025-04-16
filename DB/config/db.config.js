const mongoose = require('mongoose');

const dbConfig = mongoose.connect(process.env.DB_CONNECTION_KEY)
    .then(() => {
        console.log("DataBase Connected Successfully!");
    }).catch((err) => {
        console.log("Error:", err);
    })

module.exports = dbConfig;