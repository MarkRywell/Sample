const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async(callBack) => {
    let client = await mongoose.connect(process.env.MONGO_URL);
    if(client) {
        return callBack();
    }
    else {
        return callBack(client);
    }
}

module.exports = {dbConnect};