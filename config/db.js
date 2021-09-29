const mongoose = require('mongoose');
const config  = require("config");
const db = config.get('mongoURI');

const connectDb = async () => {
    try {
        await mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false});

        console.log("DB connected");
    } catch(err) {
        console.error(err.messsage);

        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDb;